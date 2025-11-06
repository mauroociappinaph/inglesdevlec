import React, { useState, useEffect } from 'react';
import { SparklesIcon, LoadingIcon, LightbulbIcon } from '../ui/icons/index';
import { contentService, feedbackService } from '../../backend/services';
import StudioGuide from '../ui/StudioGuide';
import KeyPhrases from '../ui/lessons/KeyPhrases';
import { KeyPhraseData } from '../../types';

const interviewPhrases: KeyPhraseData[] = [
    {
      original: "Talk about a success you've had in the last year.",
      translation: "Habla sobre un éxito que has tenido en el último año.",
      techContext: "A common behavioral question starter. Use the STAR method to structure your answer."
    },
    {
      original: "I taught myself Python by building small projects every day.",
      translation: "Aprendí Python por mi cuenta construyendo pequeños proyectos todos los días.",
      techContext: "Shows initiative and a passion for learning. Be specific about the projects."
    },
    {
      original: "I'm excited to learn new skills in this job.",
      translation: "Estoy emocionado/a por aprender nuevas habilidades en este trabajo.",
      techContext: "Expresses enthusiasm and a growth mindset, which are highly valued qualities."
    },
    {
      original: "I've been passionate about coding since I was a teenager.",
      translation: "Me apasiona la programación desde que era adolescente.",
      techContext: "Use this to show long-term interest in the field. Follow up with a brief story."
    },
    {
      original: "Could you tell me more about the team's culture?",
      translation: "¿Podría contarme más sobre la cultura del equipo?",
      techContext: "A great question to ask the interviewer. It shows you care about the work environment."
    },
    {
      original: "What is the salary range for this position?",
      translation: "¿Cuál es el rango salarial para este puesto?",
      techContext: "It's appropriate to ask this, usually later in the interview process, to ensure expectations are aligned."
    }
];


const StarMethodGuide: React.FC = () => (
    <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center"><LightbulbIcon />Pro Tip: The STAR Method</h2>
        <p className="text-light-text mb-6">Use the STAR method to structure your answers to behavioral questions ("Tell me about a time when..."). It helps you create a clear, compelling story.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-primary-dark/50 p-4 rounded-md">
                <h3 className="font-bold text-accent-pink text-lg">S - Situation</h3>
                <p className="text-sm mt-1 text-gray-400">Briefly describe the context. What was the project or challenge?</p>
            </div>
            <div className="bg-primary-dark/50 p-4 rounded-md">
                <h3 className="font-bold text-accent-yellow text-lg">T - Task</h3>
                <p className="text-sm mt-1 text-gray-400">What was your specific responsibility? What was the goal?</p>
            </div>
            <div className="bg-primary-dark/50 p-4 rounded-md">
                <h3 className="font-bold text-accent-pink text-lg">A - Action</h3>
                <p className="text-sm mt-1 text-gray-400">What specific steps did you take to address the task? Focus on "I," not "we."</p>
            </div>
            <div className="bg-primary-dark/50 p-4 rounded-md">
                <h3 className="font-bold text-accent-yellow text-lg">R - Result</h3>
                <p className="text-sm mt-1 text-gray-400">What was the outcome? Quantify your success with data or metrics if possible.</p>
            </div>
        </div>
    </div>
);

const PracticeZone: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isLoading, setIsLoading] = useState<'question' | 'feedback' | null>(null);

    const handleNewQuestion = async () => {
        setIsLoading('question');
        setFeedback('');
        setAnswer('');
        const newQuestion = await contentService.getInterviewQuestion();
        setQuestion(newQuestion);
        setIsLoading(null);
    };

    const handleGetFeedback = async () => {
        if (!answer.trim()) return;
        setIsLoading('feedback');
        setFeedback('');
        const aiFeedback = await feedbackService.getInterviewFeedback(question, answer);
        setFeedback(aiFeedback);
        setIsLoading(null);
    };
    
    useEffect(() => {
        handleNewQuestion();
    }, []);


    return (
        <div className="bg-primary-medium p-6 rounded-xl border border-primary-light">
            <h2 className="text-2xl font-semibold text-white mb-4">Practice Zone: Mock Interview</h2>
            <button
                onClick={handleNewQuestion}
                disabled={!!isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-primary-light hover:bg-gray-600 text-white font-semibold rounded-md transition disabled:bg-gray-600 mb-4"
            >
                {isLoading === 'question' ? <LoadingIcon /> : <SparklesIcon />}
                <span className="ml-2">{isLoading === 'question' ? 'Generating...' : 'New Question'}</span>
            </button>
            
            {question && (
                <div className="animate-fade-in">
                    <div className="bg-primary-dark/50 p-4 rounded-md mb-4">
                        <p className="text-light-text font-semibold">Interviewer asks:</p>
                        <p className="text-accent-pink italic">"{question}"</p>
                    </div>
                    <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Structure your answer here. Try using the STAR method if it's a behavioral question."
                        className="w-full h-32 p-3 bg-primary-dark border border-primary-light rounded-md text-light-text font-sans text-sm focus:ring-2 focus:ring-accent-yellow focus:outline-none"
                    />
                    <button
                        onClick={handleGetFeedback}
                        disabled={isLoading === 'feedback' || !answer.trim()}
                        className="mt-2 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-accent-yellow hover:bg-yellow-400 text-dark-text font-semibold rounded-md transition disabled:bg-gray-600"
                    >
                         {isLoading === 'feedback' ? <LoadingIcon /> : <SparklesIcon />}
                        <span className="ml-2">{isLoading === 'feedback' ? 'Analyzing...' : 'Get Feedback'}</span>
                    </button>
                </div>
            )}

            {feedback && (
                 <div className="mt-4 p-4 bg-primary-dark/50 rounded-md border border-primary-light animate-fade-in">
                    <h3 className="font-semibold text-white mb-2">AI Coach Feedback:</h3>
                    <div className="prose prose-invert prose-sm max-w-none text-light-text" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: feedback.replace(/\n/g, '<br />') }} />
                 </div>
            )}
        </div>
    );
};

const InterviewPractice: React.FC = () => {
    return (
        <div className="animate-fade-in space-y-8">
            <StudioGuide title="Guía de Estudio: Interview Practice">
                <div>
                    <h3 className="font-semibold text-white">Objetivo:</h3>
                    <p>Prepararte para entrevistas de trabajo técnicas practicando frases clave y estructurando tus respuestas eficazmente.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Cómo usar:</h3>
                    <ul className="list-disc list-inside">
                        <li>Estudia las frases clave e internaliza el método STAR.</li>
                        <li>Usa la "Practice Zone" para recibir una pregunta de entrevista al azar.</li>
                        <li>Elabora tu respuesta y luego obtén feedback detallado del coach de IA.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white">Pro Tip:</h3>
                    <p>Practica respondiendo las preguntas en voz alta. Es muy diferente a pensar la respuesta en tu cabeza. Esto construye memoria muscular para la entrevista real.</p>
                </div>
            </StudioGuide>
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Asiste a una entrevista</h1>
                <p className="text-lg text-gray-400">Domina las entrevistas técnicas en inglés con frases clave y práctica con IA.</p>
            </div>

            <KeyPhrases phrases={interviewPhrases} />

            <StarMethodGuide />

            <PracticeZone />

        </div>
    );
};

export default InterviewPractice;
