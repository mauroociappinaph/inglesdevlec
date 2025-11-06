
import React from 'react';

interface LessonLayoutProps {
  onBack: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const LessonLayout: React.FC<LessonLayoutProps> = ({ onBack, title, description, children }) => {
  return (
    <div className="animate-fade-in space-y-8">
      <button onClick={onBack} className="flex items-center text-sm text-accent-pink hover:text-pink-400 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        Back to Study Guide
      </button>

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-lg text-gray-400">{description}</p>
      </div>
      
      {children}
    </div>
  );
};

export default LessonLayout;