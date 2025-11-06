

import React, { useState } from 'react';
// FIX: Corrected the import path for icons.
import { CheckCircleIcon, XCircleIcon } from '../ui/icons/index';

type FeedbackState = 'correct' | 'incorrect' | null;

export const GrammarCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-primary-dark/50 p-4 rounded-lg border border-primary-light/50">
        <h4 className="font-semibold text-white text-lg mb-3">{title}</h4>
        <div className="space-y-3 text-light-text">{children}</div>
    </div>
);

interface QuickCheckProps {
    question: React.ReactNode;
    correctAnswer: string;
    explanation: string;
    options?: string[]; // Optional for select-based questions
    inputType?: 'text' | 'select';
}

export const QuickCheck: React.FC<QuickCheckProps> = ({
    question,
    correctAnswer,
    explanation,
    options = [],
    inputType = 'text'
}) => {
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState<FeedbackState>(null);

    const handleCheck = () => {
        if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };

    const renderInput = () => {
        if (inputType === 'select') {
            return (
                <select 
                    value={answer} 
                    onChange={e => {
                        setAnswer(e.target.value);
                        setFeedback(null);
                    }}
                    className="flex-1 bg-primary-light border border-primary-light/50 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow w-full"
                >
                    <option value="">Select one...</option>
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            );
        }
        return (
             <input
                type="text"
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                    setFeedback(null);
                }}
                placeholder="Your answer..."
                className="flex-1 bg-primary-light border border-primary-light/50 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
        );
    };

    return (
        <div className="mt-4 p-3 bg-primary-medium/60 rounded-md border border-primary-light">
            <h5 className="font-semibold text-sm text-accent-yellow mb-2">Check Your Understanding</h5>
            <div className="text-sm">{question}</div>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-2">
                {renderInput()}
                <button onClick={handleCheck} disabled={!answer} className="px-3 py-1 bg-accent-pink hover:bg-pink-700 text-white font-semibold rounded-md text-sm w-full sm:w-auto disabled:bg-gray-500">
                    Check
                </button>
            </div>
            {feedback === 'correct' && (
                <div className="mt-2 text-sm text-green-400 flex items-center animate-fade-in">
                    <CheckCircleIcon /> <span className="ml-2">Correct! {explanation}</span>
                </div>
            )}
            {feedback === 'incorrect' && (
                <div className="mt-2 text-sm text-red-400 flex items-center animate-fade-in">
                    <XCircleIcon /> <span className="ml-2">Not quite. The correct answer is "{correctAnswer}". {explanation}</span>
                </div>
            )}
        </div>
    );
};