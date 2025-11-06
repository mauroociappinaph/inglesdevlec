import React, { useState, useEffect, useRef } from 'react';
import { SoundIcon, StopPlaybackIcon, LoadingIcon } from '../icons/index';
import { audioService } from '../../../backend/services';

// Audio decoding utilities
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


interface ListeningPracticeProps {
    dialogue: React.ReactNode;
    dialogueTurns: { speaker: string; line: string }[];
    correctAnswers: string[];
}

const ListeningPractice: React.FC<ListeningPracticeProps> = ({ dialogue, dialogueTurns, correctAnswers }) => {
    const [userAnswers, setUserAnswers] = useState<string[]>(Array(correctAnswers.length).fill(''));
    const [results, setResults] = useState<('correct' | 'incorrect' | 'unchecked')[]>(Array(correctAnswers.length).fill('unchecked'));
    
    const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState('');

    const audioContextRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

    const cleanupAudio = () => {
        audioSourceRef.current?.stop();
        audioSourceRef.current = null;
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close().catch(console.error);
        }
        audioContextRef.current = null;
        setIsPlaying(false);
    };

    useEffect(() => {
        return cleanupAudio;
    }, []);

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = value;
        setUserAnswers(newAnswers);
        if (results.some(r => r !== 'unchecked')) {
            setResults(Array(correctAnswers.length).fill('unchecked'));
        }
    };

    const handleCheckAnswers = () => {
        const newResults = userAnswers.map((answer, index) => {
            return answer.trim().toLowerCase() === correctAnswers[index].toLowerCase() ? 'correct' : 'incorrect';
        });
        setResults(newResults);
    };

    const handleListen = async () => {
        if (isPlaying) {
            cleanupAudio();
            return;
        }

        setIsGeneratingAudio(true);
        setError('');

        try {
            const fullTextPrompt = dialogueTurns.map(turn => `${turn.speaker}: ${turn.line}`).join('\n');
            const uniqueSpeakers = [...new Set(dialogueTurns.map(turn => turn.speaker))];
            
            const availableVoices = ['Kore', 'Puck', 'Zephyr', 'Charon', 'Fenrir'];
            const speakerVoiceConfigs = uniqueSpeakers.map((speaker, index) => ({
                speaker: speaker,
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: availableVoices[index % availableVoices.length] }
                }
            }));
            
            const base64Audio = await audioService.generateSpeech(fullTextPrompt, { speakerVoiceConfigs });

            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            audioContextRef.current = audioContext;
            
            const audioBuffer = await decodeAudioData(decode(base64Audio), audioContext, 24000, 1);
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.onended = () => {
                setIsPlaying(false);
                cleanupAudio();
            };
            source.start(0);

            audioSourceRef.current = source;
            setIsPlaying(true);
        } catch (err) {
            console.error(err);
            setError("Sorry, couldn't generate audio. Please try again.");
        } finally {
            setIsGeneratingAudio(false);
        }
    };


    const getInputClass = (index: number) => {
        const baseClass = "inline-block w-24 md:w-28 lg:w-32 mx-1 bg-primary-light border-2 rounded px-2 py-1 text-sm text-white focus:outline-none transition-all";
        switch (results[index]) {
            case 'correct': return `${baseClass} border-green-500`;
            case 'incorrect': return `${baseClass} border-red-500`;
            default: return `${baseClass} border-primary-light/50 focus:ring-2 focus:ring-accent-yellow`;
        }
    };
    
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-white">Listen to the dialogue and fill in the blanks.</h4>
                <button
                    onClick={handleListen}
                    disabled={isGeneratingAudio}
                    className={`flex items-center gap-2 px-3 py-1 text-white rounded-md text-sm transition-colors ${
                        isPlaying ? 'bg-red-600 hover:bg-red-700' : 
                        isGeneratingAudio ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary-light hover:bg-gray-600'
                    }`}
                >
                    {isGeneratingAudio ? <LoadingIcon /> : isPlaying ? <StopPlaybackIcon /> : <SoundIcon />}
                    {isGeneratingAudio ? 'Generating...' : isPlaying ? 'Stop' : 'Listen'}
                </button>
            </div>
             {error && <p className="text-sm text-red-400 my-2">{error}</p>}
            <div className="p-4 bg-primary-dark/50 my-2 rounded-md border border-primary-light text-gray-300 space-y-2">
                 {dialogue}
            </div>
            <button onClick={handleCheckAnswers} className="px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md text-sm">
                Check Answers
            </button>
        </div>
    );
};

export default ListeningPractice;
