import React, { useState, useEffect, useRef } from 'react';
import { feedbackService } from '../../../backend/services';
import { MicIcon, StopPlaybackIcon, SparklesIcon, LoadingIcon, SoundIcon } from '../icons/index';
import { SpeechRecognition, SpeechRecognitionErrorEvent } from '../../../types';

interface SpeakingPracticeProps {
  scenario: string;
}

const SpeakingPractice: React.FC<SpeakingPracticeProps> = ({ scenario }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcribedText, setTranscribedText] = useState('');
    const [speakingFeedback, setSpeakingFeedback] = useState('');
    const [isGettingFeedback, setIsGettingFeedback] = useState(false);
    const [speechApiError, setSpeechApiError] = useState('');
    const [isListening, setIsListening] = useState(false);

    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

    const cleanupAudioResources = () => {
        if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
            animationFrameIdRef.current = null;
        }
        mediaStreamSourceRef.current?.disconnect();
        analyserRef.current?.disconnect();
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close().catch(console.error);
        }
        mediaStreamRef.current?.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
        audioContextRef.current = null;
    };

    useEffect(() => {
        return () => {
            if (window.speechSynthesis?.speaking) {
                window.speechSynthesis.cancel();
            }
            recognitionRef.current?.abort();
            cleanupAudioResources();
        };
    }, []);

    const handleListen = () => {
        if (!('speechSynthesis' in window)) {
            alert('Your browser does not support text-to-speech.');
            return;
        }
        if (isListening) {
            window.speechSynthesis.cancel();
            setIsListening(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(scenario);
            utterance.lang = 'en-US';
            utterance.rate = 0.85; // Slightly slower
            utterance.onend = () => setIsListening(false);
            utterance.onerror = () => setIsListening(false);
            window.speechSynthesis.speak(utterance);
            setIsListening(true);
        }
    };
    
    const handleGetSpeakingFeedback = async (text: string) => {
        if (!text.trim()) return;
        setIsGettingFeedback(true);
        setSpeakingFeedback('');
        try {
            const feedback = await feedbackService.getSpeakingFeedback(scenario, text);
            setSpeakingFeedback(feedback);
        } catch (error) {
            console.error(error);
            setSpeakingFeedback('Sorry, an error occurred while getting feedback.');
        } finally {
            setIsGettingFeedback(false);
        }
    };

    const handleToggleRecording = async () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            return;
        }
        
        setTranscribedText('');
        setSpeakingFeedback('');
        setSpeechApiError('');
        setIsGettingFeedback(false);

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognitionAPI) {
            setSpeechApiError('Speech recognition is not supported in this browser. Please try Chrome or Edge.');
            return;
        }
        
        setIsRecording(true);
        
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStreamRef.current = stream;

            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            audioContextRef.current = audioContext;
            analyserRef.current = audioContext.createAnalyser();
            mediaStreamSourceRef.current = audioContext.createMediaStreamSource(stream);
            mediaStreamSourceRef.current.connect(analyserRef.current);
            
            // Draw visualizer
            const draw = () => {
                if (!analyserRef.current || !canvasRef.current) return;
                const canvas = canvasRef.current;
                const canvasCtx = canvas.getContext('2d');
                if (!canvasCtx) return;

                analyserRef.current.fftSize = 256;
                const bufferLength = analyserRef.current.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                
                analyserRef.current.getByteFrequencyData(dataArray);

                canvasCtx.fillStyle = '#2C1338';
                canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

                const barWidth = (canvas.width / bufferLength) * 1.5;
                let x = 0;
                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = dataArray[i] / 2.5;
                    const opacity = barHeight / 100;
                    canvasCtx.fillStyle = `rgba(233, 79, 154, ${opacity > 0.3 ? opacity : 0.3})`;
                    canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                    x += barWidth + 1;
                }
                animationFrameIdRef.current = requestAnimationFrame(draw);
            };
            draw();

            const recognition = new SpeechRecognitionAPI();
            recognitionRef.current = recognition;
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.continuous = false;

            let finalTranscript = '';
            recognition.onresult = (event) => {
                finalTranscript = event.results[0][0].transcript;
                setTranscribedText(finalTranscript);
            };

            recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
                console.error('Speech recognition error:', event.error);
                if (event.error === 'no-speech') {
                    setSpeechApiError("I didn't hear anything. Please try again.");
                } else if (event.error !== 'aborted') {
                    setSpeechApiError(`An error occurred: ${event.error}`);
                }
            };
            
            recognition.onend = () => {
                cleanupAudioResources();
                setIsRecording(false);
                if (finalTranscript) {
                    handleGetSpeakingFeedback(finalTranscript);
                }
            };
            
            recognition.start();

        } catch (err) {
            console.error('Error accessing microphone:', err);
            setSpeechApiError('Could not access the microphone. Please check your browser permissions.');
            setIsRecording(false);
            cleanupAudioResources();
        }
    };

    return (
        <div>
            <h4 className="font-semibold text-white">Prepare your response for this scenario:</h4>
            <div className="p-4 bg-primary-dark/50 my-2 rounded-md border border-primary-light italic flex justify-between items-center">
                <p>{scenario}</p>
                <button
                    onClick={handleListen}
                    className={`flex items-center gap-2 px-3 py-1 text-white rounded-md text-sm transition-colors flex-shrink-0 ${isListening ? 'bg-red-600' : 'bg-primary-light hover:bg-gray-600'}`}
                    aria-label={isListening ? 'Stop listening to scenario' : 'Listen to scenario'}
                >
                    {isListening ? <StopPlaybackIcon /> : <SoundIcon />}
                </button>
            </div>
            <div className="mt-4 flex flex-col items-start gap-4">
                <button 
                    onClick={handleToggleRecording} 
                    className={`flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-md transition-colors ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-accent-pink hover:bg-pink-700'}`}
                >
                    {isRecording ? <StopPlaybackIcon /> : <MicIcon />}
                    {isRecording ? 'Stop Recording' : 'Record Answer'}
                </button>

                {isRecording && (
                    <div className="my-2 bg-primary-dark rounded-lg p-2 w-full flex flex-col justify-center items-center h-[70px] animate-fade-in">
                        <canvas ref={canvasRef} width="300" height="40"></canvas>
                        <p className="text-xs text-accent-pink animate-pulse">Listening...</p>
                    </div>
                )}

                {speechApiError && !isRecording && <p className="text-sm text-red-400 animate-fade-in">{speechApiError}</p>}
                
                {(!isRecording && (transcribedText || isGettingFeedback || speakingFeedback)) && (
                    <div className="w-full animate-fade-in space-y-3">
                        {transcribedText && (
                             <div>
                                <h5 className="font-semibold text-white mb-2">Your transcribed answer:</h5>
                                <p className="p-4 bg-primary-dark/50 rounded-md border border-primary-light text-light-text italic">"{transcribedText}"</p>
                            </div>
                        )}
                        
                        {isGettingFeedback && (
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <LoadingIcon />
                                <span>Analyzing your response...</span>
                            </div>
                        )}
                        
                        {speakingFeedback && (
                            <div className="w-full p-4 bg-primary-dark/50 rounded-md border border-primary-light">
                                <h5 className="font-semibold text-white mb-2 flex items-center gap-2"><SparklesIcon /> AI Coach Feedback:</h5>
                                <div className="prose prose-invert prose-sm max-w-none text-light-text" dangerouslySetInnerHTML={{ __html: speakingFeedback.replace(/\n/g, '<br />') }} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpeakingPractice;
