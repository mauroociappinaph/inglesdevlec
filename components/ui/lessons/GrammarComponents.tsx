import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '../icons/index';

type FeedbackState = 'correct' | 'incorrect' | null;

export const GrammarCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-primary-dark/50 p-5 rounded-xl border border-primary-light/50 transition-all hover:border-accent-pink/50">
        <h4 className="font-semibold text-accent-yellow text-lg mb-4">{title}</h4>
        <div className="space-y-4 text-light-text/90 prose prose-invert prose-sm max-w-none 
                        prose-p:my-2 prose-ul:my-2 prose-strong:text-accent-pink
                        prose-code:bg-primary-dark prose-code:p-3 prose-code:rounded-md prose-code:text-accent-yellow 
                        prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-[''] prose-code:block prose-code:whitespace-pre-wrap">
            {children}
        </div>
    </div>
);

interface QuickCheckProps {
    question: React.ReactNode;
    correctAnswer: string;
    explanation: string;
    options?: string[];
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
                    className="flex-1 bg-primary-light border border-primary-light/50 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow w-full"
                >
                    <option value="">Select an answer...</option>
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
                placeholder="Type your answer here..."
                className="flex-1 bg-primary-light border border-primary-light/50 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow w-full"
            />
        );
    };

    return (
        <div className="mt-6 pt-5 border-t border-primary-light/30">
            <h5 className="font-semibold text-sm text-accent-yellow mb-3 flex items-center gap-2 tracking-wider uppercase">
                <span role="img" aria-label="sparkles">✨</span>
                Practice Question
            </h5>
            <div className="p-4 bg-primary-dark/40 rounded-lg border border-primary-light/20">
                <div className="text-sm mb-3">{question}</div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    {renderInput()}
                    <button 
                        onClick={handleCheck} 
                        disabled={!answer} 
                        className="px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md text-sm w-full sm:w-auto disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        Check
                    </button>
                </div>
                {feedback === 'correct' && (
                    <div className="mt-3 text-sm text-green-400 flex items-start gap-2 animate-fade-in p-3 bg-green-900/30 rounded-md border border-green-500/50">
                        <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" /> 
                        <div><strong>Correct!</strong> {explanation}</div>
                    </div>
                )}
                {feedback === 'incorrect' && (
                    <div className="mt-3 text-sm text-red-400 flex items-start gap-2 animate-fade-in p-3 bg-red-900/30 rounded-md border border-red-500/50">
                        <XCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" /> 
                        <div><strong>Not quite.</strong> The correct answer is "{correctAnswer}". {explanation}</div>
                    </div>
                )}
            </div>
        </div>
    );
};