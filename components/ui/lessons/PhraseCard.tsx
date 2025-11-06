import React, { useState, useRef, useEffect } from 'react';
import { MicIcon, LoadingIcon } from '../icons/index';
import { feedbackService } from '../../../backend/services';
import { PronunciationFeedback } from '../../../types';
import { SpeechRecognition, SpeechRecognitionErrorEvent } from '../../../types';

export interface PhraseCardProps {
    phrase: string;
    translation: string;
    context: string;
    playbackRate?: number;
    pronunciationPractice?: boolean;
}

const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, translation, context, playbackRate = 0.85, pronunciationPractice }) => {
    // State management
    const [isRecording, setIsRecording] = useState(false);
    const [userAttempt, setUserAttempt] = useState('');
    const [feedback, setFeedback] = useState<PronunciationFeedback | null>(null);
    const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
    const [error, setError] = useState('');

    // Refs for APIs and resources that persist across renders
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

    // Main cleanup function to be called on stop or unmount
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
        mediaStreamSourceRef.current = null;
        analyserRef.current = null;
    };
    
    // Safety net: ensure all resources are released when the component unmounts
    useEffect(() => {
        return () => {
            if (window.speechSynthesis?.speaking) {
                window.speechSynthesis.cancel();
            }
            recognitionRef.current?.abort();
            cleanupAudioResources();
        };
    }, []);

    const handleTextToSpeech = (lang: 'en-US' | 'en-GB') => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(phrase);
            utterance.lang = lang;
            utterance.rate = playbackRate;

            const setVoice = () => {
                const voices = window.speechSynthesis.getVoices();
                utterance.voice = voices.find(voice => voice.lang === lang) || null;
                window.speechSynthesis.speak(utterance);
            };

            if (window.speechSynthesis.getVoices().length) {
                setVoice();
            } else {
                window.speechSynthesis.onvoiceschanged = setVoice;
            }
        } else {
            setError('Your browser does not support text-to-speech.');
        }
    };
    
    const handleGetFeedback = async (textToAnalyze: string) => {
        if (!textToAnalyze) return;
        setIsLoadingFeedback(true);
        setFeedback(null);
        setError('');
        try {
            const result = await feedbackService.getPronunciationFeedback(phrase, textToAnalyze);
            setFeedback(result);
        } catch (e) {
            console.error("Error getting pronunciation feedback", e);
            setError("Sorry, an error occurred while analyzing your pronunciation.");
            setFeedback(null);
        } finally {
            setIsLoadingFeedback(false);
        }
    };

    const handleToggleRecording = async () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            return;
        }

        setUserAttempt('');
        setFeedback(null);
        setError('');
        setIsLoadingFeedback(false);
        

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognitionAPI) {
            setError('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
            return;
        }
        
        setIsRecording(true);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStreamRef.current = stream;

            // --- Setup Audio Visualizer ---
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            audioContextRef.current = audioContext;
            const analyser = audioContext.createAnalyser();
            analyserRef.current = analyser;
            const source = audioContext.createMediaStreamSource(stream);
            mediaStreamSourceRef.current = source;
            source.connect(analyser);
            
            const draw = () => {
                if (!analyserRef.current || !canvasRef.current) {
                    return;
                }
                const analyser = analyserRef.current;
                const canvas = canvasRef.current;
                const canvasCtx = canvas.getContext('2d');
                if (!canvasCtx) return;

                analyser.fftSize = 256;
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                
                analyser.getByteFrequencyData(dataArray);

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

            // --- Setup Speech Recognition ---
            const recognition = new SpeechRecognitionAPI();
            recognitionRef.current = recognition;
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.continuous = false;

            let finalTranscript = '';
            let errorOccurred = false;

            recognition.onresult = (event) => {
                finalTranscript = event.results[0][0].transcript;
                setUserAttempt(finalTranscript);
            };

            recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
                errorOccurred = true;
                console.error('Speech recognition error:', event.error);
                if (event.error === 'no-speech') {
                    setError("I didn't hear you. Please try speaking a bit louder.");
                } else if (event.error !== 'aborted') {
                    setError(`An error occurred: ${event.error}. Please try again.`);
                }
            };

            recognition.onend = () => {
                cleanupAudioResources();
                setIsRecording(false);
                recognitionRef.current = null;
                
                if (finalTranscript) {
                    handleGetFeedback(finalTranscript);
                } else if (!errorOccurred) {
                    // This handles the case where recognition ends without a result and without an explicit error
                    setError("Sorry, I couldn't understand that. Please try again.");
                }
            };
            
            recognition.start();

        } catch (err) {
            console.error('Error accessing microphone:', err);
            setError('Could not access the microphone. Please check your browser permissions.');
            setIsRecording(false);
            cleanupAudioResources();
        }
    };

    const getAccuracyColor = (accuracy?: string) => {
        switch (accuracy) {
            case 'Good': return 'text-green-400';
            case 'Almost there': return 'text-yellow-400';
            case 'Needs practice': return 'text-red-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="bg-primary-medium/50 border border-primary-light rounded-lg p-4 flex flex-col gap-3 transition-all hover:border-accent-pink/50">
            <div className="flex justify-between items-start">
                 <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-mono text-lg text-accent-pink">{phrase}</h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => handleTextToSpeech('en-US')} className="text-xs font-semibold text-gray-400 hover:text-white bg-primary-light px-2 py-1 rounded-md" title="Listen (US Accent)">US 🇺🇸</button>
                    <button onClick={() => handleTextToSpeech('en-GB')} className="text-xs font-semibold text-gray-400 hover:text-white bg-primary-light px-2 py-1 rounded-md" title="Listen (UK Accent)">UK 🇬🇧</button>
                </div>
            </div>
            <p className="text-sm text-gray-400 italic">"{translation}"</p>
            <p className="text-sm text-light-text"><strong className="font-semibold text-white">Context:</strong> {context}</p>
            
            {pronunciationPractice && (
                <div className="border-t border-primary-light/50 mt-3 pt-3">
                    <div className="flex flex-col gap-3">
                        <button onClick={handleToggleRecording} className={`flex items-center gap-2 px-3 py-1 text-white font-semibold rounded-md text-sm transition-colors w-max ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-accent-pink hover:bg-pink-700'}`}>
                            <MicIcon />
                            {isRecording ? 'Recording...' : 'Practice'}
                        </button>
                        
                        {isRecording && (
                            <div className="my-2 bg-primary-dark rounded-lg p-2 flex flex-col justify-center items-center h-[70px] animate-fade-in">
                                <canvas ref={canvasRef} width="300" height="40"></canvas>
                                <p className="text-xs text-accent-pink animate-pulse">Listening...</p>
                            </div>
                        )}
                        
                        {error && !isRecording && <p className="text-sm text-red-400 animate-fade-in">{error}</p>}

                        {(userAttempt || isLoadingFeedback || feedback) && !isRecording && (
                            <div className="mt-2 space-y-2 animate-fade-in">
                                {userAttempt && <p className="text-sm text-gray-400">Your attempt: <span className="italic text-white">"{userAttempt}"</span></p>}
                                
                                {isLoadingFeedback && (
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <LoadingIcon />
                                        <span>Analyzing...</span>
                                    </div>
                                )}

                                {feedback && (
                                    <div className="text-sm p-3 bg-primary-dark/30 rounded-md border border-primary-light/30">
                                        <p>
                                            <strong className="text-white">Feedback:</strong> <span className={getAccuracyColor(feedback.accuracy)}>{feedback.accuracy}</span>. {feedback.tip}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhraseCard;
