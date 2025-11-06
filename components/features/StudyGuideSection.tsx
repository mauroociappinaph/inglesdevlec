import React, { useState } from 'react';
import { LessonData, LessonId } from '../../types';
import { lessons } from '../../data'; // Import centralized lesson data
import LessonPage from '../ui/lessons/LessonPage'; // Import the generic lesson page renderer
import { 
    GreetingsIcon, InfoIcon, WorkIcon, DebateIcon, GuideIcon, PlanningIcon, 
    DescribingIcon, RoutineIcon, PreferencesIcon, HandshakeIcon, StudiesIcon,
    FamilyIcon, PlacesIcon, ApostropheIcon, HelpIcon, QuestionMarkIcon,
    ProhibitIcon, SpeakingIcon, PluralSIcon, InProgressIcon, EmojiHappyIcon, PointingIcon,
    PuzzleIcon,
    PastClockIcon,
    TextAaIcon,
    SparklesIcon,
    ChevronDownIcon,
    ChallengeIcon,
} from '../ui/icons/index';
import ModuleQuiz from './ModuleQuiz';

// Map lesson IDs to their icons
const iconMap: { [key in LessonId & string]: React.ReactElement } = {
    'greetings': <GreetingsIcon />,
    'information': <InfoIcon />,
    'work': <WorkIcon />,
    'describing': <DescribingIcon />,
    'routine': <RoutineIcon />,
    'preferences': <PreferencesIcon />,
    'greetings-formal': <HandshakeIcon />,
    'studies': <StudiesIcon />,
    'family': <FamilyIcon />,
    'debate': <DebateIcon />,
    'planning': <PlanningIcon />,
    'contractions': <ApostropheIcon />,
    'preferences-questions': <QuestionMarkIcon />,
    'favors': <HelpIcon />,
    'negative-contractions': <ProhibitIcon />,
    'places': <PlacesIcon />,
    'routines-he-she': <RoutineIcon />,
    'storytelling': <SpeakingIcon />,
    'plurals': <PluralSIcon />,
    'present-continuous': <InProgressIcon />,
    'feelings-pronunciation': <EmojiHappyIcon />,
    'demonstratives': <PointingIcon />,
    'tricky-verbs': <PuzzleIcon />,
    'plurals-y': <TextAaIcon />,
    'used-to-would': <PastClockIcon />,
    'comparatives': <SparklesIcon />,
    'possessives': <ApostropheIcon />,
    'possessive-adjectives': <ApostropheIcon />,
    'present-simple-vs-continuous': <InProgressIcon />,
    'take-care-of': <HelpIcon />,
    'look-vs-see': <DescribingIcon />,
    'comparatives-superlatives': <SparklesIcon />,
    'requests-instructions-pronouns': <HelpIcon />,
    'phrasal-verbs-movement': <PointingIcon />,
    'obligation-have-to': <PlanningIcon />,
    'data-handling-pronouns': <PointingIcon />,
    'superlatives-tech': <SparklesIcon />,
    'future-plans-going-to': <PlanningIcon />,
    'future-will-vs-going-to': <PlanningIcon />,
};

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [] as T[][]);
};

const moduleTitles = [
    "Module 1: Foundations & Core Concepts",
    "Module 2: Professional Communication",
    "Module 3: Advanced Grammar & Scenarios",
    "Module 4: Technical Nuances & Fluency",
];


const StudyGuideHub: React.FC = () => {
    const [selectedLessonId, setSelectedLessonId] = useState<LessonId>(null);
    const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
    const [activeQuizModuleIndex, setActiveQuizModuleIndex] = useState<number | null>(null);

    const handleSelectLesson = (id: LessonId) => {
        setSelectedLessonId(id);
    };

    const handleBackToGuide = () => {
        setSelectedLessonId(null);
    };

    const handleStartQuiz = (index: number) => {
        setActiveQuizModuleIndex(index);
    };

    const handleCloseQuiz = () => {
        setActiveQuizModuleIndex(null);
    };

    const selectedLessonData = lessons.find(lesson => lesson.id === selectedLessonId);
    const lessonModules = chunkArray(lessons, 9);

    if (selectedLessonData) {
        return <LessonPage lesson={selectedLessonData} onBack={handleBackToGuide} />;
    }

    return (
        <>
            <div className="animate-fade-in max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Study Guide</h1>
                <p className="text-lg text-gray-400 mb-8">Select a lesson to begin your structured learning path.</p>
                
                <div className="space-y-4">
                    {lessonModules.map((module, index) => {
                        const isModuleOpen = openModuleIndex === index;
                        const firstLessonNum = index * 9 + 1;
                        const lastLessonNum = firstLessonNum + module.length - 1;
                        
                        return (
                            <div key={index} className="bg-primary-medium border border-primary-light rounded-lg overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => setOpenModuleIndex(isModuleOpen ? null : index)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-primary-light/20"
                                    aria-expanded={isModuleOpen}
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {moduleTitles[index] || `Module ${index + 1}`}
                                        </h3>
                                        <p className="text-gray-400 mt-1">Lessons {firstLessonNum}-{lastLessonNum}</p>
                                    </div>
                                    <ChevronDownIcon className={`w-6 h-6 text-accent-pink transform transition-transform duration-300 ${isModuleOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${isModuleOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 pb-6 pt-0 space-y-3">
                                        {module.map((lesson) => (
                                            <button 
                                                key={lesson.id} 
                                                onClick={() => handleSelectLesson(lesson.id)}
                                                className="w-full bg-primary-dark/50 border border-primary-light rounded-md p-4 text-left hover:bg-primary-light/30 hover:border-accent-pink/50 transition-all flex items-center group"
                                            >
                                                <div className="p-3 bg-primary-light rounded-full mr-4 text-accent-pink flex-shrink-0">
                                                    {lesson.id ? iconMap[lesson.id] : <GuideIcon />}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">{lesson.title}</h4>
                                                    <p className="text-gray-400 text-sm mt-1">{lesson.description}</p>
                                                </div>
                                                <span className="ml-auto text-accent-pink/50 group-hover:text-accent-pink transform transition-transform duration-300">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                                </span>
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => handleStartQuiz(index)}
                                            className="w-full mt-4 p-4 bg-gradient-to-r from-accent-pink to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                                        >
                                            <ChallengeIcon completed={false} />
                                            <span>Make the quiz</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="w-full bg-primary-medium/50 border border-dashed border-primary-light rounded-lg p-6 text-center">
                        <div className="p-3 bg-primary-light rounded-full inline-block text-accent-yellow">
                            <GuideIcon />
                        </div>
                        <h3 className="text-xl font-semibold text-white mt-4">More lessons coming soon...</h3>
                        <p className="text-gray-400 mt-1">We are preparing new content to expand your learning.</p>
                    </div>
                </div>
            </div>

            {activeQuizModuleIndex !== null && (
                <ModuleQuiz 
                    moduleLessons={lessonModules[activeQuizModuleIndex]} 
                    moduleTitle={moduleTitles[activeQuizModuleIndex] || `Module ${activeQuizModuleIndex + 1}`}
                    onClose={handleCloseQuiz} 
                />
            )}
        </>
    );
};

export default StudyGuideHub;