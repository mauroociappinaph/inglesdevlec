

import React from 'react';
// FIX: Corrected the import path for icons.
import { GuideIcon } from './icons/index';

interface StudioGuideProps {
  title: string;
  children: React.ReactNode;
}

const StudioGuide: React.FC<StudioGuideProps> = ({ title, children }) => (
  <div className="bg-primary-medium/50 border border-accent-pink/30 rounded-xl p-6 mb-8 animate-fade-in">
    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
      <GuideIcon />
      <span className="ml-3">{title}</span>
    </h2>
    <div className="prose prose-invert prose-sm max-w-none text-light-text space-y-3">
      {children}
    </div>
  </div>
);

export default StudioGuide;