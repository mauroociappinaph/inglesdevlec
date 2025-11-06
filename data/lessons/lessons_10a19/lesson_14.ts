import { LessonData } from '../../../types';

export const lesson_14: LessonData = {
    id: 'favors',
    title: "Lección 14: Asking for Favors & Using 'Can'",
    description: 'Learn how to make polite requests.',
    introduction: { text: "Teamwork is all about collaboration, and that often means asking for help. This lesson focuses on the modal verb 'can', the most common word for asking for assistance.", objectives: ["Learn to make requests with 'Can I...?' and 'Can you...?'."] },
    grammar: [{ title: "Making Requests with 'Can'", content: ["To ask for permission or help, use <strong class='text-sky-400'>Can...?</strong> The verb after 'can' is always in its base form (without 'to').", "Example: <strong class='text-sky-400'>Can</span> <span class='text-yellow-300'>you</span> <span class='text-purple-300'>help</span> me?"], quickCheck: { question: "Which question is correct?", options: ["Can I to ask a question?", "Can I ask a question?"], correctAnswer: "Can I ask a question?", explanation: "After 'can', the verb is always in its base form.", inputType: "select" } }],
    keyPhrases: [{ original: "Can you help me out with this deployment script?", translation: "¿Puedes ayudarme con este script de despliegue?", techContext: "A very common and polite way to ask for help." }],
    keyWords: [
        { word: 'Request', translation: 'Solicitud / Petición', example: 'Can I make a request for a new software license?' },
        { word: 'Assistance', translation: 'Ayuda / Asistencia', example: 'Can you give me some assistance with this bug?' },
    ],
    phrasalVerbs: [
        { verb: 'help out', translation: 'Ayudar', example: 'Can you help me out with this deployment script?' },
        { verb: 'go over', translation: 'Repasar / Revisar', example: 'Can we go over the project plan one more time?' },
    ],
    reading: {
        title: "Read this Slack message:",
        text: "<p><strong>@new_dev:</strong> \"Hi team! Can someone please help me out? I'm trying to set up the local environment. Can I ask someone to take a quick look?\"</p>",
        questions: ["What does the new developer need help with?", "What two questions does the developer ask?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "Excuse me, can you help me?" },
            { speaker: "Dev2", line: "Of course. What's the problem?" },
            { speaker: "Dev1", line: "Can I ask you a question about this code?" },
            { speaker: "Dev2", line: "Sure, go ahead." }
        ],
        correctAnswers: ["help me", "problem", "ask you"],
        dialogue: "Dev1: \"Excuse me, can you __BLANK__?\"<br/>Dev2: \"Of course. What's the __BLANK__?\"<br/>Dev1: \"Can I __BLANK__ a question about this code?\"<br/>Dev2: \"Sure, go ahead.\""
    },
    speaking: {
        scenario: "You need help with a difficult bug. Ask your senior developer politely if they can help you for a few minutes."
    },
    writing: {
        title: "Write an email asking for a day off.",
        scenario: "Write a short, polite email to your manager asking for permission to take a day off next week.",
        guidance: { title: "Example:", points: ["\"Hi [Manager's Name],<br/>Can I please request to take next Friday, July 26th, as a vacation day?<br/>Thank you,<br/>[Your Name]\""] }
    },
    summary: {
        points: ["Use 'Can I...?' to ask for permission.", "Use 'Can you...?' to ask someone to do something.", "The verb after 'can' is always in its base form."]
    }
};