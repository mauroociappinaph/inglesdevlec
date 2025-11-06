
import React from 'react';
import LessonSection from '../LessonSection';
// FIX: Corrected the import path for icons.
import { WritingIcon } from '../icons/index';

interface WritingPracticeProps {
    title: string;
    scenario: React.ReactNode;
    guidance: React.ReactNode;
}

const WritingPractice: React.FC<WritingPracticeProps> = ({ title, scenario, guidance }) => {
    return (
        <LessonSection title="Writing Task" icon={<WritingIcon />}>
             <h4 className="font-semibold text-white">{title}</h4>
             <div className="p-4 bg-gray-900/50 my-2 rounded-md border border-gray-700 italic">
                {scenario}
             </div>
             {guidance}
        </LessonSection>
    );
};

export default WritingPractice;