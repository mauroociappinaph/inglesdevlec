

import React, { useState, useEffect, useRef } from 'react';
// FIX: getSpeakingFeedback is not exported directly. It is part of feedbackService.
// FIX: Corrected import path for geminiService.
import { feedbackService } from '../../backend/services';
// FIX: Corrected the import path for icons.
import { MicIcon, StopPlaybackIcon, SparklesIcon, LoadingIcon } from '../ui/icons/index';
import { SpeechRecognition } from '../../types';

interface SpeakingPracticeProps {
  scenario: string;
}

const SpeakingPractice: React.FC<SpeakingPracticeProps> = ({ scenario }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcribedText, setTranscribedText] = useState('');
    const [speakingFeedback, setSpeakingFeedback] = useState('');
    const [isGettingFeedback, setIsGettingFeedback] = useState(false);
    const [speechApiError, setSpeechApiError] = useState('');
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const handleToggleRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            return;
        }

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognitionAPI) {
            setSpeechApiError('Speech recognition is not supported in this browser. Please try Chrome or Edge.');
            return;
        }

        if (!recognitionRef.current) {
            const recognition = new SpeechRecognitionAPI();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onresult = (event) => {
                setTranscribedText(event.results[0][0].transcript);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                if (event.error === 'no-speech') {
                    setSpeechApiError("I didn't hear anything. Please try again.");
                } else if (event.error !== 'aborted') {
                    setSpeechApiError(`An error occurred: ${event.error}`);
                }
            };
            
            recognition.onend = () => setIsRecording(false);
            recognitionRef.current = recognition;
        }
        
        setTranscribedText('');
        setSpeakingFeedback('');
        setSpeechApiError('');
        recognitionRef.current.start();
        setIsRecording(true);
    };

    const handleGetSpeakingFeedback = async () => {
        if (!transcribedText.trim()) return;
        setIsGettingFeedback(true);
        setSpeakingFeedback('');
        try {
            // FIX: getSpeakingFeedback is not exported directly. It is part of feedbackService.
            const feedback = await feedbackService.getSpeakingFeedback(scenario, transcribedText);
            setSpeakingFeedback(feedback);
        } catch (error) {
            console.error(error);
            setSpeakingFeedback('Sorry, an error occurred while getting feedback.');
        } finally {
            setIsGettingFeedback(false);
        }
    };

    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                recognitionRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <h4 className="font-semibold text-white">Prepare your response for this scenario:</h4>
            <div className="p-4 bg-primary-dark/50 my-2 rounded-md border border-primary-light italic">
                <p>{scenario}</p>
            </div>
            <div className="mt-4 flex flex-col items-start gap-4">
                <button 
                    onClick={handleToggleRecording} 
                    className={`flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-md transition-colors ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-accent-pink hover:bg-pink-700'}`}
                >
                    {isRecording ? <StopPlaybackIcon /> : <MicIcon />}
                    {isRecording ? 'Stop Recording' : 'Record Answer'}
                </button>

                {speechApiError && <p className="text-sm text-red-400">{speechApiError}</p>}
                
                {transcribedText && (
                    <div className="w-full animate-fade-in">
                        <h5 className="font-semibold text-white mb-2">Your transcribed answer:</h5>
                        <p className="p-4 bg-primary-dark/50 rounded-md border border-primary-light text-light-text italic">"{transcribedText}"</p>
                        <button 
                            onClick={handleGetSpeakingFeedback} 
                            disabled={isGettingFeedback}
                            className="mt-2 flex items-center gap-2 px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md text-sm transition-colors disabled:bg-gray-600"
                        >
                            {isGettingFeedback ? <LoadingIcon /> : <SparklesIcon />}
                            {isGettingFeedback ? 'Analyzing...' : 'Get Feedback'}
                        </button>
                    </div>
                )}

                {speakingFeedback && (
                    <div className="w-full mt-4 p-4 bg-primary-dark/50 rounded-md border border-primary-light animate-fade-in">
                        <h5 className="font-semibold text-white mb-2">AI Coach Feedback:</h5>
                        <div className="prose prose-invert prose-sm max-w-none text-light-text" dangerouslySetInnerHTML={{ __html: speakingFeedback.replace(/\n/g, '<br />') }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpeakingPractice;