import React, { useState, useEffect } from 'react';
import { SparklesIcon, LoadingIcon, LightbulbIcon, CheckCircleIcon, XCircleIcon, ToneIcon, DiplomacyIcon, SuggestionIcon, InformalToneIcon, DirectToneIcon } from '../ui/icons/index';
import { contentService, feedbackService } from '../../backend/services';
import { DebateFeedback, ToneExample } from '../../types';
import StudioGuide from '../ui/StudioGuide';
import PhraseCard from '../lessons/PhraseCard';

type CEFRLevel = 'B1' | 'B2' | 'C1';

const debatePhrases: { phrase: string; translation: string; context: string; level: CEFRLevel; pronunciationPractice: boolean }[] = [
    {
      phrase: "That’s an interesting thought, but I don’t agree.",
      translation: "Esa es una idea interesante, pero no estoy de acuerdo.",
      context: "Debate sobre usar MongoDB o PostgreSQL. Es una forma educada y directa de mostrar desacuerdo en un entorno profesional.",
      level: 'B1',
      pronunciationPractice: true
    },
     {
      phrase: "People in this community don’t like that idea at all.",
      translation: "A la gente en esta comunidad no le gusta esa idea para nada.",
      context: "Respondiendo a una propuesta en un foro de desarrolladores, basando el argumento en la opinión general de la comunidad.",
      level: 'B1',
      pronunciationPractice: true
    },
    {
      phrase: "You believe it’s a good idea, but it’s the opposite!",
      translation: "Crees que es una buena idea, pero es lo contrario.",
      context: "Discusión sobre implementar una librería nueva e innecesaria. Es una frase fuerte, mejor usada con colegas de confianza.",
      level: 'B2',
      pronunciationPractice: true
    },
    {
      phrase: "We could argue for hours, but nothing will get solved.",
      translation: "Podríamos discutir por horas, pero no se resolverá nada.",
      context: "Cuando un desacuerdo entre backend y frontend sobre una API no avanza. Sirve para reenfocar la conversación.",
      level: 'B2',
      pronunciationPractice: true
    },
    {
      phrase: "That’s the worst suggestion I’ve ever heard!",
      translation: "¡Esa es la peor sugerencia que he escuchado!",
      context: "Tono muy informal y directo, apropiado solo en una revisión de código entre amigos con mucha confianza. ¡Usar con cuidado!",
      level: 'C1',
      pronunciationPractice: true
    }
];

const getLevelClass = (level: CEFRLevel) => {
    switch (level) {
        case 'B1': return 'bg-pink-900 text-pink-300';
        case 'B2': return 'bg-yellow-900 text-yellow-300';
        case 'C1': return 'bg-purple-900 text-purple-300';
        default: return 'bg-gray-700 text-gray-300';
    }
};

const ComparisonChart: React.FC = () => (
    <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
        <h2 className="text-2xl font-semibold text-white mb-4">Agreeing vs. Disagreeing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Polite Agreement</h3>
                <ul className="space-y-2 list-disc list-inside text-light-text">
                    <li>I agree with you on that point.</li>
                    <li>That's a great suggestion.</li>
                    <li>I see what you mean, and I feel the same way.</li>
                    <li>Absolutely, that makes perfect sense.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-accent-yellow mb-3">Diplomatic Disagreement</h3>
                <ul className="space-y-2 list-disc list-inside text-light-text">
                    <li>I see your point, but have you considered...</li>
                    <li>I'm not entirely sure I agree.</li>
                    <li>I understand where you're coming from, however...</li>
                    <li>I respectfully have a different perspective.</li>
                </ul>
            </div>
        </div>
    </div>
);


const GrammarTips: React.FC = () => {
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleExplain = async () => {
        setIsLoading(true);
        setExplanation('');
        try {
            const result = await contentService.getGrammarExplanation("contrast connectors like 'but', 'however', and 'although'");
            setExplanation(result);
        } catch (error) {
            console.error(error);
            setExplanation("Failed to load explanation.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center"><LightbulbIcon />Grammar: Contrast Connectors</h2>
            <div className="space-y-4 text-light-text">
               <p>Use these words to connect opposing ideas. Their formality and placement in a sentence can change the tone of your argument.</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-primary-dark/50 p-4 rounded-md">
                        <strong className="font-mono text-accent-pink">but</strong>
                        <p className="text-sm mt-1">Informal and very common. Connects two clauses in one sentence. <br/><em>"The code works, but it's not very readable."</em></p>
                    </div>
                    <div className="bg-primary-dark/50 p-4 rounded-md">
                        <strong className="font-mono text-accent-pink">however</strong>
                        <p className="text-sm mt-1">More formal. Often starts a new sentence and is followed by a comma. <br/><em>"The code works. However, it's not very readable."</em></p>
                    </div>
                    <div className="bg-primary-dark/50 p-4 rounded-md">
                        <strong className="font-mono text-accent-pink">although</strong>
                        <p className="text-sm mt-1">Shows a contrast, often an unexpected one. Can start a sentence or be in the middle. <br/><em>"Although the code works, it's not very readable."</em></p>
                    </div>
               </div>
            </div>
            <div className="mt-6">
                <button
                    onClick={handleExplain}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-4 py-2 bg-accent-pink hover:bg-pink-700 text-white font-semibold rounded-md transition disabled:bg-gray-600 text-sm"
                >
                    {isLoading ? <LoadingIcon /> : <SparklesIcon />}
                    <span className="ml-2">{isLoading ? 'Thinking...' : 'Explain in Detail'}</span>
                </button>
            </div>
            {explanation && (
                <div className="mt-4 p-4 bg-primary-dark/50 rounded-md border border-primary-light animate-fade-in">
                    <h3 className="font-semibold text-white mb-2">Detailed Explanation:</h3>
                    <div className="prose prose-invert prose-sm max-w-none text-light-text" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, '<br />') }} />
                </div>
            )}
        </div>
    );
};

const categoryMap: { [key: string]: { icon: React.ReactElement } } = {
    Tone: { icon: <ToneIcon /> },
    Grammar: { icon: <CheckCircleIcon /> },
    Clarity: { icon: <LightbulbIcon /> },
    Diplomacy: { icon: <DiplomacyIcon /> },
    Suggestion: { icon: <SuggestionIcon /> },
};


const toneMap: { [key: string]: { icon: React.ReactElement; color: string; } } = {
    Informal: { icon: <InformalToneIcon />, color: 'border-purple-500' },
    Direct: { icon: <DirectToneIcon />, color: 'border-red-500' },
    Diplomatic: { icon: <DiplomacyIcon />, color: 'border-accent-pink' },
    Formal: { icon: <ToneIcon />, color: 'border-accent-yellow' },
};

const ToneSpectrumChart: React.FC = () => {
    const [examples, setExamples] = useState<ToneExample[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExamples = async () => {
            setIsLoading(true);
            const toneExamples = await contentService.getToneExamples();
            // Ensure order for visual consistency
            const orderedExamples = [
                toneExamples.find(e => e.tone === 'Informal'),
                toneExamples.find(e => e.tone === 'Direct'),
                toneExamples.find(e => e.tone === 'Diplomatic'),
                toneExamples.find(e => e.tone === 'Formal'),
            ].filter(Boolean) as ToneExample[];
            setExamples(orderedExamples);
            setIsLoading(false);
        };
        fetchExamples();
    }, []);

    return (
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
            <h2 className="text-2xl font-semibold text-white mb-4">The Tone Spectrum</h2>
            <p className="text-gray-400 mb-6">See how the same point can be expressed differently depending on the context and desired level of diplomacy. Generated by AI.</p>
            {isLoading ? (
                <div className="flex justify-center items-center h-24">
                    <LoadingIcon />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {examples.map((item) => {
                        const style = toneMap[item.tone] || toneMap.Diplomatic;
                        return (
                            <div key={item.tone} className={`bg-primary-dark/50 p-4 rounded-lg border-l-4 ${style.color}`}>
                                <div className="flex items-center mb-2">
                                    {style.icon}
                                    <h3 className="text-lg font-semibold text-white ml-3">{item.tone}</h3>
                                </div>
                                <p className="text-sm text-light-text italic">"{item.example}"</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};


const PracticeZone: React.FC = () => {
    const [scenario, setScenario] = useState('');
    const [response, setResponse] = useState('');
    const [feedback, setFeedback] = useState<DebateFeedback | null>(null);
    const [isLoading, setIsLoading] = useState<'scenario' | 'feedback' | null>(null);

    const handleNewScenario = async () => {
        setIsLoading('scenario');
        setFeedback(null);
        setResponse('');
        const newScenario = await contentService.getDebateScenario();
        setScenario(newScenario);
        setIsLoading(null);
    };

    const handleGetFeedback = async () => {
        if (!response.trim()) return;
        setIsLoading('feedback');
        setFeedback(null);
        const aiFeedback = await feedbackService.getDebateFeedback(scenario, response);
        setFeedback(aiFeedback);
        setIsLoading(null);
    };

    return (
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
            <h2 className="text-2xl font-semibold text-white mb-4">Practice Zone: Scenario Challenge</h2>
            <button
                onClick={handleNewScenario}
                disabled={!!isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-primary-light hover:bg-gray-600 text-white font-semibold rounded-md transition disabled:bg-gray-600 mb-4"
            >
                {isLoading === 'scenario' ? <LoadingIcon /> : <SparklesIcon />}
                <span className="ml-2">{isLoading === 'scenario' ? 'Generating...' : 'New Scenario'}</span>
            </button>
            
            {scenario && (
                <div className="animate-fade-in">
                    <div className="bg-primary-dark/50 p-4 rounded-md mb-4">
                        <p className="text-light-text font-semibold">Scenario:</p>
                        <p className="text-accent-pink italic">{scenario}</p>
                    </div>
                    <textarea
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        placeholder="Write your diplomatic response here..."
                        className="w-full h-24 p-3 bg-primary-dark border border-primary-light rounded-md text-light-text font-sans text-sm focus:ring-2 focus:ring-accent-yellow focus:outline-none"
                    />
                    <button
                        onClick={handleGetFeedback}
                        disabled={isLoading === 'feedback' || !response.trim()}
                        className="mt-2 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md transition disabled:bg-gray-600"
                    >
                         {isLoading === 'feedback' ? <LoadingIcon /> : <SparklesIcon />}
                        <span className="ml-2">{isLoading === 'feedback' ? 'Analyzing...' : 'Get Feedback'}</span>
                    </button>
                </div>
            )}

            {feedback && (
                 <div className="mt-6 p-4 bg-primary-dark/50 rounded-lg border border-primary-light animate-fade-in">
                    <h3 className="font-semibold text-white mb-2 text-lg">AI Feedback:</h3>
                    <p className="text-gray-400 italic mb-4">"{feedback.overallImpression}"</p>
                    <div className="space-y-4">
                        {feedback.feedbackPoints.map((point, index) => {
                            const style = categoryMap[point.category] || categoryMap.Suggestion;
                            return (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        {style.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{point.category}</h4>
                                        <p className="text-sm text-light-text">{point.feedback}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                 </div>
            )}
        </div>
    );
};

const quizQuestions = [
    {
      scenario: "Your team lead wants to use a new, untested JavaScript framework for a critical project. You think it's too risky. What's the most diplomatic response?",
      options: [
        "That's a terrible idea. It's going to fail.",
        "I understand the appeal of the new framework, but I have some concerns about its stability for such a critical project. Could we perhaps use it for a smaller, internal tool first?",
        "I don't want to learn a new framework right now.",
        "Fine, but it's your fault if it breaks."
      ],
      correctAnswer: "I understand the appeal of the new framework, but I have some concerns about its stability for such a critical project. Could we perhaps use it for a smaller, internal tool first?",
      explanation: "This response is diplomatic. It acknowledges the team lead's idea ('I understand the appeal...') before politely expressing concern and offering a constructive alternative."
    },
    {
        scenario: "During a code review, you notice a junior developer has implemented a feature in a very inefficient way. What is the best way to give feedback?",
        options: [
            "This is all wrong, you need to rewrite it.",
            "Why did you do it like this? It's so slow.",
            "This is an interesting approach. I have a suggestion that might improve performance. Have you considered using a hash map here instead of nested loops?",
            "I'll just fix it myself."
        ],
        correctAnswer: "This is an interesting approach. I have a suggestion that might improve performance. Have you considered using a hash map here instead of nested loops?",
        explanation: "This feedback is constructive and respectful. It starts with a positive note, clearly states the area for improvement (performance), and offers a specific, helpful suggestion."
    }
];

const MiniQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;

    const handleAnswerSelect = (answer: string) => {
        if (showFeedback) return;
        setSelectedAnswer(answer);
        setShowFeedback(true);
    };

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < quizQuestions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedAnswer(null);
            setShowFeedback(false);
        } else {
            // Quiz finished, you could show a summary or reset
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
            setShowFeedback(false);
        }
    };
    
    return (
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
            <h2 className="text-2xl font-semibold text-white mb-4">Mini-Quiz: Check Your Understanding</h2>
            <div className="bg-primary-dark/50 p-4 rounded-md mb-4">
                <p className="text-light-text font-semibold">Question {currentQuestionIndex + 1}/{quizQuestions.length}:</p>
                <p className="text-accent-pink italic">{question.scenario}</p>
            </div>
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerSelect(option)}
                        disabled={showFeedback}
                        className={`w-full text-left p-3 rounded-md border transition-all text-sm
                            ${!showFeedback ? 'bg-primary-light border-primary-light/50 hover:bg-primary-light' : ''}
                            ${showFeedback && option === question.correctAnswer ? 'bg-green-900/50 border-green-500' : ''}
                            ${showFeedback && option === selectedAnswer && !isCorrect ? 'bg-red-900/50 border-red-500' : ''}
                            ${showFeedback && option !== selectedAnswer && option !== question.correctAnswer ? 'bg-primary-light border-primary-light/50 opacity-60' : ''}
                        `}>
                        {option}
                    </button>
                ))}
            </div>
            {showFeedback && (
                <div className={`mt-4 p-4 rounded-md animate-fade-in ${isCorrect ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'}`}>
                    <h3 className="font-semibold flex items-center">{isCorrect ? <CheckCircleIcon /> : <XCircleIcon />} <span className="ml-2">{isCorrect ? 'Correct!' : 'Not Quite.'}</span></h3>
                    <p className="text-sm text-light-text mt-2">{question.explanation}</p>
                    <button onClick={handleNextQuestion} className="mt-4 px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md text-sm">
                       {currentQuestionIndex + 1 < quizQuestions.length ? 'Next Question' : 'Restart Quiz'}
                    </button>
                </div>
            )}
        </div>
    );
}

type FilterLevel = 'All' | CEFRLevel;

const DebatePractice: React.FC = () => {
    const [filter, setFilter] = useState<FilterLevel>('All');

    const filteredPhrases = debatePhrases.filter(
        p => filter === 'All' || p.level === filter
    );

    return (
        <div className="animate-fade-in space-y-8">
            <StudioGuide title="Guía de Estudio: Debate Practice">
                <div>
                    <h3 className="font-semibold text-white">Objetivo:</h3>
                    <p>Dominar el lenguaje del debate profesional, aprendiendo a acordar, discrepar y persuadir de forma diplomática.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Cómo usar:</h3>
                    <ul className="list-disc list-inside">
                        <li>Revisa las frases clave y los consejos de gramática.</li>
                        <li>Usa la "Practice Zone" para responder a escenarios laborales realistas.</li>
                        <li>Presta atención al feedback de la IA sobre tu tono y elección de palabras.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Pro Tip:</h3>
                    <p>En debates técnicos, es tan importante respaldar tu opinión con datos como el lenguaje que usas.</p>
                </div>
            </StudioGuide>
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Sección 2: Participa en un debate</h1>
                <p className="text-lg text-gray-400">Aprende a expresar acuerdo y desacuerdo de forma profesional en un entorno técnico.</p>
            </div>
            
            <div>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-gray-400 font-semibold mr-2">Filter by level:</span>
                    {(['All', 'B1', 'B2', 'C1'] as FilterLevel[]).map(level => (
                        <button
                            key={level}
                            onClick={() => setFilter(level)}
                            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
                                filter === level
                                    ? 'bg-accent-yellow text-dark-text'
                                    : 'bg-primary-light text-light-text hover:bg-gray-600'
                            }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
                <div className="space-y-4">
                    {filteredPhrases.map((item, index) => (
                        <div key={index}>
                            <PhraseCard 
                                phrase={item.phrase}
                                translation={item.translation}
                                context={item.context}
                                pronunciationPractice={item.pronunciationPractice}
                            />
                             <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${getLevelClass(item.level)}`}>
                                {item.level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <ComparisonChart />

            <ToneSpectrumChart />

            <GrammarTips />

            <PracticeZone />

            <MiniQuiz />

        </div>
    );
};

export default DebatePractice;
