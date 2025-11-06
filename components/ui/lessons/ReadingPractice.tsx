import React, { useState } from 'react';
import LessonSection from '../LessonSection';
import { ReadingIcon, LoadingIcon, SparklesIcon, CheckCircleIcon, XCircleIcon } from '../icons/index';
import { feedbackService } from '../../../backend/services';

interface ReadingPracticeProps {
    title: string;
    text: React.ReactNode;
    questions: string[];
}

type Feedback = {
    isCorrect: boolean;
    explanation: string;
} | null;

const ReadingPractice: React.FC<ReadingPracticeProps> = ({ title, text, questions }) => {
    const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [feedbacks, setFeedbacks] = useState<Feedback[]>(Array(questions.length).fill(null));
    const [isLoading, setIsLoading] = useState<number | null>(null);

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);

        // Reset feedback if user changes answer
        const newFeedbacks = [...feedbacks];
        if (newFeedbacks[index] !== null) {
            newFeedbacks[index] = null;
            setFeedbacks(newFeedbacks);
        }
    };

    const handleCheckAnswer = async (index: number) => {
        if (!answers[index].trim()) return;

        setIsLoading(index);
        const newFeedbacks = [...feedbacks];

        let contextText = '';
        if (React.isValidElement(text) && (text.props as any).dangerouslySetInnerHTML?.__html) {
            contextText = (text.props as any).dangerouslySetInnerHTML.__html;
        } else if (typeof text === 'string') {
            contextText = text;
        }


        try {
            const feedback = await feedbackService.evaluateReadingAnswer(contextText, questions[index], answers[index]);
            newFeedbacks[index] = feedback;
            setFeedbacks(newFeedbacks);
        } catch (error) {
            console.error('Error evaluating answer:', error);
            newFeedbacks[index] = {
                isCorrect: false,
                explanation: "Sorry, there was an error checking your answer. Please try again."
            };
            setFeedbacks(newFeedbacks);
        } finally {
            setIsLoading(null);
        }
    };

    return (
        <LessonSection title="Reading: Guided Text" icon={<ReadingIcon />}>
            <h4 className="font-semibold text-white">{title}</h4>
            <div className="p-4 bg-primary-dark/50 my-2 rounded-md border border-primary-light italic prose prose-invert prose-sm max-w-none">
                {text}
            </div>
            <h4 className="font-semibold text-white mt-4">Comprehension Questions:</h4>
            <ol className="list-decimal list-outside mt-2 space-y-6 pl-5">
                {questions.map((q, i) => (
                    <li key={i}>
                        <p className="mb-2">{q}</p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                            <input
                                type="text"
                                value={answers[i]}
                                onChange={(e) => handleAnswerChange(i, e.target.value)}
                                placeholder="Your answer..."
                                className="flex-1 w-full bg-primary-light border border-primary-light/50 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                            />
                            <button
                                onClick={() => handleCheckAnswer(i)}
                                disabled={isLoading === i || !answers[i].trim()}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md text-sm disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading === i ? <LoadingIcon /> : <SparklesIcon />}
                                Check
                            </button>
                        </div>
                        {feedbacks[i] && isLoading !== i && (
                            <div className={`mt-2 text-sm flex items-start gap-2 animate-fade-in p-3 rounded-md border
                                ${feedbacks[i]?.isCorrect ? 'text-green-400 bg-green-900/30 border-green-500/50' : 'text-red-400 bg-red-900/30 border-red-500/50'}`}
                            >
                                {feedbacks[i]?.isCorrect ? <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <XCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                                <div><strong>{feedbacks[i]?.isCorrect ? 'Correct!' : 'Needs Improvement:'}</strong> {feedbacks[i]?.explanation}</div>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </LessonSection>
    );
};

export default ReadingPractice;
