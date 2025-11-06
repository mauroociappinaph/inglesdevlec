
import React, { useState, useEffect } from 'react';
// FIX: Corrected the import path for icons.
import { SoundIcon, StopPlaybackIcon } from '../ui/icons/index';

// FIX: The prop interface is updated to accept 'dialogueTurns' and 'fullDialogue' is constructed internally.
interface ListeningPracticeProps {
  dialogue: string; // The text with placeholders
  dialogueTurns: { speaker: string; line: string; }[];
  correctAnswers: string[];
}

const ListeningPractice: React.FC<ListeningPracticeProps> = ({ dialogue, dialogueTurns, correctAnswers }) => {
    const [userAnswers, setUserAnswers] = useState<string[]>(Array(correctAnswers.length).fill(''));
    const [results, setResults] = useState<('correct' | 'incorrect' | 'unchecked')[]>(Array(correctAnswers.length).fill('unchecked'));
    const [isListening, setIsListening] = useState(false);

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

    const handleListen = () => {
        if (!('speechSynthesis' in window)) {
            alert('Your browser does not support text-to-speech.');
            return;
        }
        if (isListening) {
            window.speechSynthesis.cancel();
            setIsListening(false);
        } else {
            setIsListening(true);
            dialogueTurns.forEach((turn, index) => {
                const utterance = new SpeechSynthesisUtterance(`${turn.speaker}: ${turn.line}`);
                utterance.lang = 'en-US';
                utterance.rate = 0.8;
                if (index === dialogueTurns.length - 1) {
                    utterance.onend = () => setIsListening(false);
                }
                window.speechSynthesis.speak(utterance);
            });
        }
    };

    useEffect(() => {
        return () => {
            if (window.speechSynthesis?.speaking) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const getInputClass = (index: number) => {
        const baseClass = "inline-block w-24 md:w-28 lg:w-32 mx-1 bg-primary-light border-2 rounded px-2 py-1 text-sm text-white focus:outline-none transition-all";
        switch (results[index]) {
            case 'correct': return `${baseClass} border-green-500`;
            case 'incorrect': return `${baseClass} border-red-500`;
            default: return `${baseClass} border-primary-light/50 focus:ring-2 focus:ring-accent-yellow`;
        }
    };
    
    // Renders the dialogue from a string, replacing placeholders with input fields
    const renderDialogueFromString = (dialogueString: string) => {
        const parts = dialogueString.split('__BLANK__');
        return parts.map((part, index) => (
            <React.Fragment key={index}>
                <span dangerouslySetInnerHTML={{ __html: part }} />
                {index < parts.length - 1 && (
                    <input
                        type="text"
                        value={userAnswers[index]}
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                        className={getInputClass(index)}
                    />
                )}
            </React.Fragment>
        ));
    };


    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-white">Listen to the dialogue and fill in the blanks.</h4>
                <button
                    onClick={handleListen}
                    className={`flex items-center gap-2 px-3 py-1 text-white rounded-md text-sm transition-colors ${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-light hover:bg-gray-600'}`}
                >
                    {isListening ? <StopPlaybackIcon /> : <SoundIcon />}
                    {isListening ? 'Stop' : 'Listen'}
                </button>
            </div>
            <div className="p-4 bg-primary-dark/50 my-2 rounded-md border border-primary-light text-gray-300 space-y-2">
                 {renderDialogueFromString(dialogue)}
            </div>
            <button onClick={handleCheckAnswers} className="px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md text-sm">
                Check Answers
            </button>
        </div>
    );
};

export default ListeningPractice;