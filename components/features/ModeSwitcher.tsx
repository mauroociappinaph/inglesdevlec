import React from 'react';
import { AgentMode } from './MultiAgentTutor';

interface ModeSwitcherProps {
    currentMode: AgentMode;
    onModeChange: (mode: AgentMode) => void;
}

const modes: { id: AgentMode; name: string }[] = [
    { id: 'CONVERSATION_PARTNER', name: 'Conversation' },
    { id: 'DEBATE_PRACTICE', name: 'Debate' },
    { id: 'INTERVIEW_PRACTICE', name: 'Interview' },
    { id: 'AI_CHATBOT', name: 'Chatbot' },
    { id: 'DOCUMENTATION_HELPER', name: 'Docs Helper' },
    { id: 'CODE_HELPER', name: 'Code Helper' },
    { id: 'GRAMMAR_HELPER', name: 'Grammar' },
    { id: 'VOCABULARY_BUILDER', name: 'Vocabulary' },
    { id: 'PRONUNCIATION_COACH', name: 'Pronunciation' },
];

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ currentMode, onModeChange }) => {
    return (
        <div className="p-2 bg-primary-dark border-b border-primary-light">
            <div className="flex space-x-2">
                {modes.map((mode) => (
                    <button
                        key={mode.id}
                        onClick={() => onModeChange(mode.id)}
                        className={`px-3 py-1 text-sm font-medium rounded-md ${
                            currentMode === mode.id
                                ? 'bg-accent-yellow text-dark-text'
                                : 'bg-primary-light text-white hover:bg-gray-600'
                        }`}
                    >
                        {mode.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ModeSwitcher;