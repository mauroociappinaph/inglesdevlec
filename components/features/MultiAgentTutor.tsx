import { useState } from 'react';
import {
    Chatbot,
    CodeEditor,
    ConversationPractice,
    DebatePractice,
    DocumentationAnalyzer,
    GrammarHelper,
    InterviewPractice,
    ModeSwitcher,
    ModuleQuiz, // Aunque ModuleQuiz no se usa directamente aquí, se exporta en el barrel file
    PronunciationCoach,
    StudyGuideSection, // Aunque StudyGuideSection no se usa directamente aquí, se exporta en el barrel file
    VocabularyBuilder,
} from './'; // Importación desde el barrel file

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