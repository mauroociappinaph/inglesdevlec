

import React, { useState, useRef, useEffect, useCallback } from 'react';
// FIX: Corrected the import path for icons.
import { MicIcon, StopIcon } from '../ui/icons/index';
// FIX: The 'LiveSession' type is not exported by the '@google/genai' package.
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';
import StudioGuide from '../ui/StudioGuide';
import { API_KEY } from '../../backend/config';

// Base64 encoding/decoding functions
function encode(bytes: Uint8Array): string {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
  
function decode(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

async function decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
        const channelData = buffer.getChannelData(channel);
        for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
        }
    }
    return buffer;
}


const ConversationPractice: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [status, setStatus] = useState('Idle. Click Start to begin.');
    const [transcription, setTranscription] = useState<{ user: string, bot: string}[]>([]);
    const [currentTranscription, setCurrentTranscription] = useState({ user: '', bot: '' });

    // FIX: The 'LiveSession' type is not exported by the '@google/genai' package.
    // Using 'any' as a temporary type for the session reference.
    const sessionRef = useRef<any | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
    const outputAudioContextRef = useRef<AudioContext | null>(null);
    const nextStartTimeRef = useRef<number>(0);
    const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

    const startConversation = async () => {
        if (isRecording) return;
        
        try {
            setStatus('Initializing...');
            const ai = new GoogleGenAI({ apiKey: API_KEY });

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStreamRef.current = stream;

            // Input audio processing
            // FIX: Cast window to `any` to allow access to vendor-prefixed webkitAudioContext
            const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            audioContextRef.current = inputAudioContext;
            
            const source = inputAudioContext.createMediaStreamSource(stream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            scriptProcessorRef.current = scriptProcessor;

            // Output audio processing
            // FIX: Cast window to `any` to allow access to vendor-prefixed webkitAudioContext
            const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            outputAudioContextRef.current = outputAudioContext;
            const outputNode = outputAudioContext.createGain();
            outputNode.connect(outputAudioContext.destination);

            const sessionPromise = ai.live.connect({
                model: 'gemini-2.5-flash-native-audio-preview-09-2025',
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: {
                      voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
                    },
                    inputAudioTranscription: {},
                    outputAudioTranscription: {},
                    systemInstruction: 'You are a technical interviewer conducting a mock interview with a software developer. Ask questions about data structures, algorithms, and system design. Keep your responses and questions concise.',
                },
                callbacks: {
                    onopen: () => {
                        setIsRecording(true);
                        setStatus('Connected. Start speaking.');
                        scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                            const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                            const pcmBlob: Blob = {
                                data: encode(new Uint8Array(new Int16Array(inputData.map(v => v * 32768)).buffer)),
                                mimeType: 'audio/pcm;rate=16000',
                            };
                            sessionPromise.then((session) => {
                                session.sendRealtimeInput({ media: pcmBlob });
                            });
                        };
                        source.connect(scriptProcessor);
                        scriptProcessor.connect(inputAudioContext.destination);
                    },
                    onmessage: async (message: LiveServerMessage) => {
                        if (message.serverContent) {
                            if (message.serverContent.inputTranscription) {
                                setCurrentTranscription(prev => ({ ...prev, user: prev.user + message.serverContent.inputTranscription.text }));
                            }
                            if (message.serverContent.outputTranscription) {
                                setStatus('AI is responding...');
                                setCurrentTranscription(prev => ({ ...prev, bot: prev.bot + message.serverContent.outputTranscription.text }));
                            }
                            if (message.serverContent.turnComplete) {
                                setTranscription(prev => [...prev, currentTranscription]);
                                setCurrentTranscription({ user: '', bot: '' });
                                setStatus('Your turn to speak.');
                            }

                            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
                            if (audioData && outputAudioContextRef.current) {
                                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current.currentTime);
                                const audioBuffer = await decodeAudioData(
                                    decode(audioData),
                                    outputAudioContextRef.current,
                                    24000,
                                    1
                                );
                                const sourceNode = outputAudioContextRef.current.createBufferSource();
                                sourceNode.buffer = audioBuffer;
                                sourceNode.connect(outputNode);
                                sourceNode.addEventListener('ended', () => {
                                    sourcesRef.current.delete(sourceNode);
                                });
                                sourceNode.start(nextStartTimeRef.current);
                                nextStartTimeRef.current += audioBuffer.duration;
                                sourcesRef.current.add(sourceNode);
                            }
                            
                            // FIX: Handle interruption messages to stop audio playback.
                            const interrupted = message.serverContent?.interrupted;
                            if (interrupted) {
                                for (const source of sourcesRef.current.values()) {
                                  source.stop();
                                  sourcesRef.current.delete(source);
                                }
                                nextStartTimeRef.current = 0;
                            }
                        }
                    },
                    onclose: () => {
                        setStatus('Connection closed.');
                        cleanUp();
                    },
                    onerror: (e) => {
                        console.error('Live API Error:', e);
                        setStatus('An error occurred. Please try again.');
                        cleanUp();
                    },
                },
            });

            sessionRef.current = await sessionPromise;

        } catch (error) {
            console.error('Failed to start conversation:', error);
            setStatus('Error: Could not access microphone or initialize service.');
        }
    };
    
    const cleanUp = useCallback(() => {
        setIsRecording(false);
        mediaStreamRef.current?.getTracks().forEach(track => track.stop());
        scriptProcessorRef.current?.disconnect();
        audioContextRef.current?.close();
        outputAudioContextRef.current?.close();
        sourcesRef.current.forEach(source => source.stop());
        sourcesRef.current.clear();
        sessionRef.current = null;
    }, []);

    const stopConversation = () => {
        if (!isRecording) return;
        setStatus('Stopping...');
        sessionRef.current?.close();
        cleanUp();
        setStatus('Idle. Click Start to begin.');
    };

    useEffect(() => {
        return () => {
          cleanUp();
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className="max-w-3xl mx-auto flex flex-col h-full animate-fade-in">
             <StudioGuide title="Guía de Estudio: Conversation Practice">
                <div>
                    <h3 className="font-semibold text-white">Objetivo:</h3>
                    <p>Desarrollar fluidez y confianza al hablar inglés técnico simulando una entrevista en tiempo real.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Cómo usar:</h3>
                    <ul className="list-disc list-inside">
                        <li>Busca un lugar tranquilo y asegúrate de que tu micrófono funciona.</li>
                        <li>Haz clic en "Start Conversation" y escucha la pregunta de la IA.</li>
                        <li>Responde de forma clara y concisa, como lo harías en una entrevista real.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Pro Tip:</h3>
                    <p>¡No tengas miedo a cometer errores! El objetivo es practicar. Escucha la pronunciación de la IA e intenta imitarla.</p>
                </div>
            </StudioGuide>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Conversation Practice</h1>
            <p className="text-lg text-gray-400 mb-6">Practice a mock technical interview in real-time.</p>
            
            <div className="bg-primary-medium p-6 rounded-xl border border-primary-light text-center mb-6">
                <p className="text-white font-medium mb-2">Status</p>
                <p className="text-accent-pink min-h-[1.5rem]">{status}</p>
            </div>

            <div className="flex-1 bg-primary-medium p-6 rounded-xl border border-primary-light overflow-y-auto mb-6">
                <div className="space-y-4">
                    {transcription.map((t, i) => (
                        <React.Fragment key={i}>
                            <p><strong className="text-accent-yellow">You:</strong> {t.user}</p>
                            <p><strong className="text-accent-pink">AI:</strong> {t.bot}</p>
                        </React.Fragment>
                    ))}
                    { (currentTranscription.user || currentTranscription.bot) &&
                        <>
                            <p className="text-gray-400"><strong className="text-accent-yellow">You:</strong> {currentTranscription.user}</p>
                            <p className="text-gray-400"><strong className="text-accent-pink">AI:</strong> {currentTranscription.bot}</p>
                        </>
                    }
                </div>
            </div>

            <div className="flex justify-center">
                {!isRecording ? (
                    <button onClick={startConversation} className="flex items-center gap-3 px-8 py-4 bg-accent-yellow text-dark-text font-bold rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
                        <MicIcon /> Start Conversation
                    </button>
                ) : (
                    <button onClick={stopConversation} className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-full text-lg hover:bg-red-700 transition-transform transform hover:scale-105">
                        <StopIcon /> Stop Conversation
                    </button>
                )}
            </div>
        </div>
    );
};

export default ConversationPractice;