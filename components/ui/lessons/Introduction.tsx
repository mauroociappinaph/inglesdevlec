import React from 'react';
import { CheckCircleIcon } from '../icons/index';

interface IntroductionProps {
  text: string;
  objectives: string[];
}

const Introduction: React.FC<IntroductionProps> = ({ text, objectives }) => {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <p className="text-lg text-light-text/80 max-w-3xl mx-auto leading-relaxed">
        {text}
      </p>
      
      <div className="w-full max-w-4xl text-left">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">What You Will Learn</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {objectives.map((obj, i) => (
              <li key={i} className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-accent-yellow mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-light-text">{obj}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Introduction;