
import React from 'react';

interface LessonSectionProps {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const LessonSection: React.FC<LessonSectionProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
        <div className="flex-shrink-0 mr-3">
            {icon}
        </div>
        {title}
      </h2>
      <div className="prose prose-invert prose-sm max-w-none text-light-text space-y-3">
        {children}
      </div>
    </div>
  );
};

export default LessonSection;