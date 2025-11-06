import React from 'react';
import LessonSection from '../LessonSection';
import { ReviewIcon } from '../icons/index';

interface SummaryReviewProps {
    points: string[];
}

const SummaryReview: React.FC<SummaryReviewProps> = ({ points }) => {
    return (
        <LessonSection title="Summary and Review" icon={<ReviewIcon />}>
             <h4 className="font-semibold text-white mb-4">Let's recap the key takeaways:</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {points.map((point, i) => (
                    <div 
                        key={i} 
                        className="relative bg-gradient-to-br from-primary-dark/60 to-primary-medium/40 p-6 rounded-xl border border-primary-light overflow-hidden transition-all duration-300 ease-in-out group hover:border-accent-pink/70 hover:shadow-2xl hover:scale-[1.02]"
                    >
                        <div className="absolute top-0 left-0 text-7xl font-bold text-light-text/5 opacity-50 -translate-x-2 -translate-y-4 select-none group-hover:text-accent-pink/10 transition-colors">
                            {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="relative z-10">
                             <h5 className="font-bold text-accent-yellow mb-2">Key Takeaway #{i + 1}</h5>
                             <p 
                                className="text-light-text [&>strong]:text-accent-pink [&>strong]:font-semibold" 
                                dangerouslySetInnerHTML={{ __html: point }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </LessonSection>
    );
};

export default SummaryReview;