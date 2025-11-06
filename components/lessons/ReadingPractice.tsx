
import React from 'react';
import LessonSection from '../LessonSection';
// FIX: Corrected the import path for icons.
import { ReadingIcon } from '../icons/index';

interface ReadingPracticeProps {
    title: string;
    text: React.ReactNode;
    questions: string[];
}

const ReadingPractice: React.FC<ReadingPracticeProps> = ({ title, text, questions }) => {
    return (
        <LessonSection title="Reading: Guided Text" icon={<ReadingIcon />}>
            <h4 className="font-semibold text-white">{title}</h4>
            <div className="p-4 bg-gray-900/50 my-2 rounded-md border border-gray-700 italic">
                {text}
            </div>
            <h4 className="font-semibold text-white mt-4">Comprehension Questions:</h4>
            <ol className="list-decimal list-inside mt-2 space-y-1">
                {questions.map((q, i) => <li key={i}>{q}</li>)}
            </ol>
        </LessonSection>
    );
};

export default ReadingPractice;