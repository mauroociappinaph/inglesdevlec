import { LessonData } from '../../../types';

export const lesson_08: LessonData = {
    id: 'studies',
    title: 'Lección 8: Talking About Your Studies',
    description: 'Discuss learning, education, and keeping skills sharp.',
    introduction: {
        text: "In tech, learning never stops. Being able to talk about what you're studying is crucial for interviews and performance reviews.",
        objectives: ["Learn to use articles 'a'/'an' with professions."],
    },
    grammar: [
         {
            title: "Articles 'a' and 'an' with Professions",
            content: [
                "In English, you must use an article (<strong class='text-sky-400'>a</strong> or <strong class='text-sky-400'>an</strong>) before a singular job title.",
                "Use <strong class='text-teal-300'>a</strong> before consonant sounds: 'She is <span class='text-teal-300'>a</span> developer.'",
                "Use <strong class='text-teal-300'>an</strong> before vowel sounds: 'He is <span class='text-teal-300'>an</span> engineer.'"
            ],
            quickCheck: {
                question: "Complete: 'I am ___ UI designer.'",
                options: ["a", "an", "no article"],
                correctAnswer: "a",
                explanation: "'UI' starts with a 'y' sound (a consonant sound), so we use 'a'.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "I'm currently learning Go and Kubernetes.", translation: "Actualmente estoy aprendiendo Go y Kubernetes.", techContext: "A great way to show initiative in an interview or review." }
    ],
     keyWords: [
        { word: 'Algorithm', translation: 'Algoritmo', example: 'I\'m studying algorithms to prepare for technical interviews.' },
        { word: 'Mentor', translation: 'Mentor/a', example: 'My mentor helps me a lot with my career growth.' },
    ],
    phrasalVerbs: [
        { verb: 'keep up with', translation: 'Mantenerse al día con', example: 'It\'s hard to keep up with all the new JavaScript frameworks.' },
        { verb: 'brush up on', translation: 'Repasar / Refrescar', example: 'I need to brush up on my SQL skills before the interview.' },
    ],
    reading: {
        title: "Read this developer's profile summary:",
        text: "<p>As a software engineer, I am passionate about continuous learning. I am currently diving into machine learning. My goal is to brush up on my system design skills.</p>",
        questions: ["What is the developer currently learning?", "What is their goal?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Anna", line: "What do you study?" },
            { speaker: "Luis", line: "I study computer science. My professor is very good." },
            { speaker: "Anna", line: "Is it a difficult class?" },
            { speaker: "Luis", line: "Yes, but it's very interesting." }
        ],
        correctAnswers: ["study", "professor", "difficult"],
        dialogue: "Anna: \"What do you __BLANK__?\"<br/>Luis: \"I study computer science. My __BLANK__ is very good.\"<br/>Anna: \"Is it a __BLANK__ class?\"<br/>Luis: \"Yes, but it's very interesting.\""
    },
    speaking: {
        scenario: "Someone in an interview asks you, 'How do you keep your technical skills up to date?'. Mention one or two ways you learn new things (e.g., online courses, documentation, side projects)."
    },
    writing: {
        title: "Write a short learning goal for the next month.",
        scenario: "Write one sentence about a technical skill you want to improve or a new technology you want to learn.",
        guidance: { title: "Example:", points: ["\"This month, I want to brush up on my TypeScript skills by converting a small project from JavaScript.\""] }
    },
    summary: {
        points: ["Always use 'a' or 'an' before a singular profession (e.g., \"I am a developer\").", "Demonstrating a passion for learning is a highly valued trait in the tech industry."]
    }
};