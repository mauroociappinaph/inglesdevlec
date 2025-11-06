
import React from 'react';
import LessonSection from '../LessonSection';
// FIX: Corrected the import path for icons.
import { ReadingIcon } from '../icons/index';

interface IntroductionProps {
  children: React.ReactNode;
}

const Introduction: React.FC<IntroductionProps> = ({ children }) => {
  return (
    <LessonSection title="Introduction" icon={<ReadingIcon />}>
      {children}
    </LessonSection>
  );
};

export default Introduction;