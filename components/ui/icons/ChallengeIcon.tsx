import React from 'react';

export const ChallengeIcon: React.FC<{ completed?: boolean }> = ({ completed }) => (
  <svg className="w-6 h-6" fill="none" stroke={completed ? 'white' : 'currentColor'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {completed ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.4" />
    )}
  </svg>
);