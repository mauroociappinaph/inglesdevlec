import React, { useState } from 'react';
import LessonSection from '../LessonSection';
import { WritingIcon, LoadingIcon, SparklesIcon } from '../icons/index';
import { feedbackService } from '../../../backend/services';

interface WritingPracticeProps {
    title: string;
    scenario: React.ReactNode;
    guidance: React.ReactNode;
}

const WritingPractice: React.FC<WritingPracticeProps> = ({ title, scenario, guidance }) => {
    const [response, setResponse] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGetFeedback = async () => {
        if (!response.trim()) return;

        setIsLoading(true);
        setFeedback('');

        let scenarioText = '';
        if (React.isValidElement(scenario) && (scenario.props as any).dangerouslySetInnerHTML?.__html) {
            scenarioText = (scenario.props as any).dangerouslySetInnerHTML.__html;
        } else if (typeof scenario === 'string') {
            scenarioText = scenario;
        }

        try {
            const result = await feedbackService.getWritingFeedback(scenarioText, response);
            setFeedback(result);
        } catch (error) {
            console.error("Error getting writing feedback:", error);
            setFeedback("Sorry, an error occurred while generating feedback. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LessonSection title="Writing Task" icon={<WritingIcon />}>
             <h4 className="font-semibold text-white">{title}</h4>
             <div className="p-4 bg-primary-dark/50 my-2 rounded-md border border-primary-light italic prose prose-invert prose-sm max-w-none">
                {scenario}
             </div>
             {guidance}

             <div className="mt-6">
                <h4 className="font-semibold text-white mb-2">Your Response:</h4>
                <textarea
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    placeholder="Write your response here..."
                    className="w-full h-32 p-3 bg-primary-dark border border-primary-light rounded-md text-light-text font-sans text-sm focus:ring-2 focus:ring-accent-yellow focus:outline-none"
                    aria-label="Writing response area"
                />
                <button
                    onClick={handleGetFeedback}
                    disabled={isLoading || !response.trim()}
                    className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md transition disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    {isLoading ? <LoadingIcon /> : <SparklesIcon />}
                    <span>{isLoading ? 'Analyzing...' : 'Get Feedback'}</span>
                </button>
             </div>

            {feedback && (
                 <div className="mt-4 p-4 bg-primary-dark/50 rounded-md border border-primary-light animate-fade-in">
                    <h3 className="font-semibold text-white mb-2">AI Coach Feedback:</h3>
                    <div className="prose prose-invert prose-sm max-w-none text-light-text" dangerouslySetInnerHTML={{ __html: feedback.replace(/\n/g, '<br />') }} />
                 </div>
            )}
        </LessonSection>
    );
};

export default WritingPractice;
