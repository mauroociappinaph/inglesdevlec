
import React from 'react';
import LessonSection from '../LessonSection';
// FIX: Corrected the import path for icons.
import { ReviewIcon } from '../ui/icons/index';

interface SummaryReviewProps {
    points: string[];
}

const SummaryReview: React.FC<SummaryReviewProps> = ({ points }) => {
    return (
        <LessonSection title="Summary and Review" icon={<ReviewIcon />}>
             <h4 className="font-semibold text-white">Key Points:</h4>
             <ul className="list-disc list-inside mt-2 space-y-1">
                {points.map((point, i) => <li key={i}>{point}</li>)}
             </ul>
        </LessonSection>
    );
};

export default SummaryReview;