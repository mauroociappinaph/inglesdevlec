
import React from 'react';
import { LevelMeter, StreakIcon, ChallengeIcon } from '../ui/icons/index';

const Dashboard: React.FC = () => {
  const progress = 60; // Example progress
  const level = 'B2';
  const streak = 12;

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Your Dashboard</h1>
      <p className="text-lg text-gray-400 mb-8">Keep track of your progress and stay motivated!</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Card */}
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light shadow-lg col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Current Level: {level}</h2>
          <p className="text-gray-400 mb-6">You're making great strides! Complete more challenges to reach C1.</p>
          <div className="relative h-4 bg-primary-dark rounded-full">
            <div
              className="absolute top-0 left-0 h-4 bg-gradient-to-r from-accent-pink to-accent-yellow rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>B1</span>
            <span>B2</span>
            <span>C1</span>
            <span>C2</span>
          </div>
        </div>

        {/* Streak Card */}
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light shadow-lg flex flex-col items-center justify-center">
          <StreakIcon />
          <p className="text-5xl font-bold text-white mt-4">{streak}</p>
          <p className="text-lg text-accent-yellow font-semibold">Day Streak</p>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Daily Challenges</h2>
        <div className="space-y-4">
          <ChallengeCard
            title="Master Phrasal Verbs"
            description="Use 5 new technical phrasal verbs in the AI Chatbot."
            completed={true}
          />
          <ChallengeCard
            title="Code Review Simulation"
            description="Complete a code review scenario in the Conversation Practice."
            completed={false}
          />
          <ChallengeCard
            title="Documentation Summary"
            description="Summarize a piece of documentation using the Docs Analyzer."
            completed={false}
          />
        </div>
      </div>
    </div>
  );
};

interface ChallengeCardProps {
  title: string;
  description: string;
  completed: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, description, completed }) => (
  <div className={`flex items-center p-4 rounded-lg border ${completed ? 'bg-primary-medium border-accent-pink/50' : 'bg-primary-medium/50 border-primary-light'}`}>
    <div className={`p-2 rounded-full ${completed ? 'bg-accent-pink' : 'bg-primary-light'}`}>
      <ChallengeIcon completed={completed} />
    </div>
    <div className="ml-4">
      <h3 className={`font-semibold ${completed ? 'text-white' : 'text-light-text'}`}>{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    {completed && <span className="ml-auto text-sm font-medium text-accent-pink">Completed!</span>}
  </div>
);

export default Dashboard;