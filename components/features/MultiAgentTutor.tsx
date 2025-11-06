import React, { useState } from 'react';
import ModeSwitcher from './ModeSwitcher';
import ConversationPractice from './ConversationPractice';
import DebatePractice from './DebatePractice';
import InterviewPractice from './InterviewPractice';
import Chatbot from './Chatbot';
import DocumentationAnalyzer from './DocumentationAnalyzer';
import CodeEditor from './CodeEditor';
import GrammarHelper from './GrammarHelper';
import VocabularyBuilder from './VocabularyBuilder';
import PronunciationCoach from './PronunciationCoach';
// Import other modes here as they are created

export type AgentMode = 'CONVERSATION_PARTNER' | 'DEBATE_PRACTICE' | 'INTERVIEW_PRACTICE' | 'AI_CHATBOT' | 'DOCUMENTATION_HELPER' | 'CODE_HELPER' | 'GRAMMAR_HELPER' | 'VOCABULARY_BUILDER' | 'PRONUNCIATION_COACH';

const MultiAgentTutor: React.FC = () => {
    const [currentMode, setCurrentMode] = useState<AgentMode>('CONVERSATION_PARTNER');

    const renderCurrentMode = () => {
        switch (currentMode) {
            case 'CONVERSATION_PARTNER':
                return <ConversationPractice />;
            case 'DEBATE_PRACTICE':
                return <DebatePractice />;
            case 'INTERVIEW_PRACTICE':
                return <InterviewPractice />;
            case 'AI_CHATBOT':
                return <Chatbot />;
            case 'DOCUMENTATION_HELPER':
                return <DocumentationAnalyzer />;
            case 'CODE_HELPER':
                return <CodeEditor />;
            case 'GRAMMAR_HELPER':
                return <GrammarHelper />;
            case 'VOCABULARY_BUILDER':
                return <VocabularyBuilder />;
            case 'PRONUNCIATION_COACH':
                return <PronunciationCoach />;
            // Add other cases here
            default:
                return <ConversationPractice />;
        }
    };

    return (
        <div className="flex flex-col h-full">
            <ModeSwitcher currentMode={currentMode} onModeChange={setCurrentMode} />
            <div className="flex-grow p-4">
                {renderCurrentMode()}
            </div>
        </div>
    );
};

export default MultiAgentTutor;