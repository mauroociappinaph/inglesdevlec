import React, { useState } from 'react';
import { LessonId } from '../types';
import { lessons } from '../data'; // Import centralized lesson data
import LessonPage from './lessons/LessonPage'; // Import the generic lesson page renderer
// FIX: Corrected the import path for icons.
import { 
    GreetingsIcon, InfoIcon, WorkIcon, DebateIcon, GuideIcon, PlanningIcon, 
    DescribingIcon, RoutineIcon, PreferencesIcon, HandshakeIcon, StudiesIcon,
    FamilyIcon, PlacesIcon, ApostropheIcon, HelpIcon, QuestionMarkIcon,
    ProhibitIcon, SpeakingIcon, PluralSIcon, InProgressIcon, EmojiHappyIcon, PointingIcon,
    // FIX: Import PuzzleIcon for the 'tricky-verbs' lesson.
    PuzzleIcon,
    // FIX: Import PastClockIcon for the 'used-to-would' lesson.
    PastClockIcon,
    TextAaIcon,
    // FIX: Import SparklesIcon to use for the 'comparatives' lesson.
    SparklesIcon
} from './icons/index';

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
    // FIX: Added missing 'tricky-verbs' icon to satisfy the LessonId type.
    'tricky-verbs': <PuzzleIcon />,
    // FIX: Added missing 'plurals-y' icon to satisfy the LessonId type.
    'plurals-y': <TextAaIcon />,
    // FIX: Added missing 'used-to-would' icon to satisfy the LessonId type.
    'used-to-would': <PastClockIcon />,
    // FIX: Added missing 'comparatives' and 'possessives' icons to satisfy the LessonId type.
    'comparatives': <SparklesIcon />,
    'possessives': <ApostropheIcon />,
    // FIX: Add missing 'possessive-adjectives' icon to satisfy the LessonId type.
    'possessive-adjectives': <ApostropheIcon />,
    // FIX: Add missing 'present-simple-vs-continuous' icon to satisfy the LessonId type.
    'present-simple-vs-continuous': <InProgressIcon />,
    // FIX: Add missing 'take-care-of' icon to satisfy the LessonId type.
    'take-care-of': <HelpIcon />,
    // FIX: Add missing 'look-vs-see' icon to satisfy the LessonId type.
    'look-vs-see': <DescribingIcon />,
    // FIX: Added missing icons for new lessons to satisfy the LessonId type.
    'comparatives-superlatives': <SparklesIcon />,
    'requests-instructions-pronouns': <HelpIcon />,
    // FIX: Added missing 'phrasal-verbs-movement' icon to the iconMap to satisfy the LessonId type.
    'phrasal-verbs-movement': <PointingIcon />,
    // FIX: Add missing 'obligation-have-to' icon to satisfy the LessonId type.
    'obligation-have-to': <PlanningIcon />,
    // FIX: Added missing icons for new lessons to satisfy the LessonId type.
    'data-handling-pronouns': <PointingIcon />,
    'superlatives-tech': <SparklesIcon />,
    'future-plans-going-to': <PlanningIcon />,
    // FIX: Added missing icon for 'future-will-vs-going-to' to satisfy the LessonId type.
    'future-will-vs-going-to': <PlanningIcon />,
};


const StudyGuideHub: React.FC = () => {
    const [selectedLessonId, setSelectedLessonId] = useState<LessonId>(null);

    const handleSelectLesson = (id: LessonId) => {
        setSelectedLessonId(id);
    };

    const handleBackToGuide = () => {
        setSelectedLessonId(null);
    };

    const selectedLessonData = lessons.find(lesson => lesson.id === selectedLessonId);

    if (selectedLessonData) {
        return <LessonPage lesson={selectedLessonData} onBack={handleBackToGuide} />;
    }

    return (
        <div className="animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Study Guide</h1>
            <p className="text-lg text-gray-400 mb-8">Select a lesson to begin your structured learning path.</p>
            
            <div className="space-y-4">
                {lessons.map((lesson) => (
                    <button 
                        key={lesson.id} 
                        onClick={() => handleSelectLesson(lesson.id)}
                        className="w-full bg-primary-medium border border-primary-light rounded-lg p-6 text-left hover:bg-primary-light/50 hover:border-accent-pink/50 transition-all flex items-center"
                    >
                        <div className="p-3 bg-primary-light rounded-full mr-5 text-accent-pink">
                            {lesson.id ? iconMap[lesson.id] : <GuideIcon />}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">{lesson.title}</h3>
                            <p className="text-gray-400 mt-1">{lesson.description}</p>
                        </div>
                        <span className="ml-auto text-accent-pink transform transition-transform duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </span>
                    </button>
                ))}
                 <div className="w-full bg-primary-medium/50 border border-dashed border-primary-light rounded-lg p-6 text-center">
                    <div className="p-3 bg-primary-light rounded-full inline-block text-accent-yellow">
                        <GuideIcon />
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-4">More lessons coming soon...</h3>
                    <p className="text-gray-400 mt-1">We are preparing new content to expand your learning.</p>
                </div>
            </div>
        </div>
    );
};

export default StudyGuideHub;