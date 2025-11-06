import React, { useState, useEffect, useCallback } from 'react';

import { LessonData, QuizQuestion } from '../../types';
import { LoadingIcon, XIcon, CheckCircleIcon, XCircleIcon, SparklesIcon } from '../ui/icons/index';

interface ModuleQuizProps {
    moduleLessons: LessonData[];
    moduleTitle: string;
    onClose: () => void;
}

const loadingMessages = [
    "Contacting our AI expert at Oxford...",
    "Crafting challenging, unique questions...",
    "Analyzing module content for key concepts...",
    "Brewing a strong cup of tea for the professor...",
    "Ensuring academic rigor and quality...",
    "Constructing plausible distractors..."
];

const ModuleQuiz: React.FC<ModuleQuizProps> = ({ moduleLessons, moduleTitle, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentLoadingMessageIndex, setCurrentLoadingMessageIndex] = useState(0);

    const fetchQuiz = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setIsSubmitted(false);
        setUserAnswers({});
        try {
            const response = await fetch('http://localhost:3001/api/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ moduleLessons }),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch quiz');
            }
            const quizData = await response.json();
            setQuestions(quizData);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
            setQuestions([]);
        } finally {
            setIsLoading(false);
        }
    }, [moduleLessons]);

    useEffect(() => {
        fetchQuiz();
    }, [fetchQuiz]);

    useEffect(() => {
        if (isLoading) {
            const intervalId = setInterval(() => {
                setCurrentLoadingMessageIndex(prevIndex => (prevIndex + 1) % loadingMessages.length);
            }, 2000); // Change message every 2 seconds

            return () => clearInterval(intervalId);
        }
    }, [isLoading]);

    const handleAnswerSelect = (questionIndex: number, answer: string) => {
        if (isSubmitted) return;
        setUserAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const allQuestionsAnswered = Object.keys(userAnswers).length === questions.length;

    const getScore = () => {
        return questions.reduce((score, question, index) => {
            return userAnswers[index] === question.correctAnswer ? score + 1 : score;
        }, 0);
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
                    <LoadingIcon />
                    <h3 className="text-xl font-semibold text-white mt-4">Generating Your Quiz...</h3>
                    <p className="text-gray-400 mt-2 min-h-[2.5rem] transition-opacity duration-500">
                        {loadingMessages[currentLoadingMessageIndex]}
                    </p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center text-center p-8">
                    <XCircleIcon className="w-12 h-12 text-red-500" />
                    <h3 className="text-xl font-semibold text-white mt-4">Failed to Generate Quiz</h3>
                    <p className="text-gray-400 mt-2">{error}</p>
                    <button onClick={fetchQuiz} className="mt-6 px-4 py-2 bg-accent-pink text-white font-semibold rounded-md hover:bg-pink-700 transition-colors">
                        Try Again
                    </button>
                </div>
            );
        }

        if (isSubmitted) {
            const score = getScore();
            return (
                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white text-center">Quiz Results</h2>
                     <div className="my-4 text-center">
                        <p className="text-lg text-light-text">You scored</p>
                        <p className="text-4xl font-bold text-accent-yellow">{score} / {questions.length}</p>
                    </div>
                    <div className="space-y-6 mt-6">
                        {questions.map((q, i) => (
                            <div key={i} className="p-4 bg-primary-dark/30 rounded-lg border border-primary-light">
                                <p className="font-semibold text-white mb-3">{i + 1}. {q.questionText}</p>
                                <div className="space-y-2">
                                    {q.options.map((option, j) => {
                                        const isCorrect = option === q.correctAnswer;
                                        const isSelected = userAnswers[i] === option;
                                        const isIncorrectSelection = isSelected && !isCorrect;

                                        let borderColor = 'border-primary-light/50';
                                        if (isCorrect) borderColor = 'border-green-500';
                                        if (isIncorrectSelection) borderColor = 'border-red-500';

                                        return (
                                            <div key={j} className={`p-2 rounded-md border text-sm ${borderColor} ${isCorrect ? 'bg-green-900/20' : ''} ${isIncorrectSelection ? 'bg-red-900/20' : ''}`}>
                                                {option}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-3 p-3 bg-primary-dark/50 rounded-md border border-accent-pink/20">
                                    <p className="text-xs font-bold text-accent-pink uppercase tracking-wider mb-1">Explanation</p>
                                    <p className="text-sm text-gray-300">{q.explanation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="p-6 sm:p-8">
                <div className="space-y-6">
                    {questions.map((q, i) => (
                        <div key={i}>
                            <p className="font-semibold text-white mb-3">{i + 1}. {q.questionText}</p>
                            <div className="space-y-2">
                                {q.options.map((option, j) => (
                                    <label key={j} className={`flex items-center p-3 rounded-md border transition-all cursor-pointer ${userAnswers[i] === option ? 'bg-accent-pink/20 border-accent-pink' : 'bg-primary-dark/50 border-primary-light hover:border-accent-yellow/50'}`}>
                                        <input
                                            type="radio"
                                            name={`question-${i}`}
                                            value={option}
                                            checked={userAnswers[i] === option}
                                            onChange={() => handleAnswerSelect(i, option)}
                                            className="w-4 h-4 text-accent-pink bg-gray-700 border-gray-600 focus:ring-accent-pink"
                                        />
                                        <span className="ml-3 text-sm text-light-text">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in" role="dialog" aria-modal="true">
            <div className="bg-primary-medium w-full max-w-2xl max-h-[90vh] rounded-xl border border-primary-light shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-primary-light flex-shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-white">Module Quiz</h2>
                        <p className="text-sm text-gray-400">{moduleTitle}</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-primary-light" aria-label="Close quiz">
                        <XIcon />
                    </button>
                </div>

                {/* Body */}
                <div className="overflow-y-auto flex-1">
                    {renderContent()}
                </div>

                {/* Footer */}
                {!isLoading && !error && questions.length > 0 && (
                    <div className="p-4 border-t border-primary-light flex-shrink-0 flex items-center justify-end gap-4">
                        {isSubmitted ? (
                             <button onClick={fetchQuiz} className="px-4 py-2 bg-accent-pink text-white font-semibold rounded-md hover:bg-pink-700 transition-colors flex items-center gap-2">
                                <SparklesIcon /> Try a New Quiz
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!allQuestionsAnswered}
                                className="px-6 py-2 bg-accent-yellow text-dark-text font-bold rounded-md hover:bg-yellow-400 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                            >
                                Check Answers
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModuleQuiz;
