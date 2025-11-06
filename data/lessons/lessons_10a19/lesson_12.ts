import { LessonData } from '../../../types';

export const lesson_12: LessonData = {
    id: 'contractions',
    title: 'Lección 12: Using Contractions',
    description: 'Learn to use contractions to sound more natural.',
    introduction: { text: "In everyday English, native speakers almost always use contractions (e.g., I'm, it's). Learning them is one of the fastest ways to sound more fluent.", objectives: ["Learn the common contractions with the verb 'to be'."] },
    grammar: [{ title: "Contractions with 'to be'", content: ["Contractions combine the subject pronoun with the verb.", "Example: He is &rarr; <strong class='text-teal-300'>He's</strong>. They are &rarr; <strong class='text-teal-300'>They're</strong>."], quickCheck: { question: "What is the contraction for 'we are'?", correctAnswer: "we're", explanation: "We combine 'we' and 'are' to make 'we're'." } }],
    keyPhrases: [{ original: "It's a very complex system.", translation: "Es un sistema muy complejo.", techContext: "A common phrase in tech discussions." }],
    keyWords: [
        { word: 'Fluent', translation: 'Fluido', example: 'Using contractions helps you sound more fluent.' },
        { word: 'Informal', translation: 'Informal', example: 'Contractions are common in informal communication like Slack chats.' },
    ],
    phrasalVerbs: [
        { verb: 'catch up', translation: 'Ponerse al día', example: 'Let\'s catch up after the meeting; I\'m free then.' },
        { verb: 'ping me', translation: 'Enviarme un mensaje', example: 'If you\'re available, just ping me on Slack.' },
    ],
    reading: {
        title: "Read this Slack conversation:",
        text: "<p><strong>Alex:</strong> \"Hey Maria, are you free? I'm a bit stuck.\"</p><p><strong>Maria:</strong> \"Sure, what's the problem?\"</p><p><strong>Alex:</strong> \"It's the new login form. It's not submitting correctly.\"</p>",
        questions: ["Find three contractions in the dialogue.", "What is the full form of \"what's\"?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "Hey, are you busy?" },
            { speaker: "Dev2", line: "No, I'm not. What's up?" },
            { speaker: "Dev1", line: "I'm having trouble with this code. It's not working." },
            { speaker: "Dev2", line: "Okay, I can help. You're trying to connect to the new API, right?" }
        ],
        correctAnswers: ["I'm", "It's", "You're"],
        dialogue: "Dev1: \"Hey, are you busy?\"<br/>Dev2: \"No, __BLANK__ not. What's up?\"<br/>Dev1: \"__BLANK__ having trouble with this code. It's not working.\"<br/>Dev2: \"Okay, I can help. __BLANK__ trying to connect to the new API, right?\""
    },
    speaking: {
        scenario: "A colleague asks you on Slack: 'Are you working on the new feature?' Respond in a natural, conversational way using a contraction."
    },
    writing: {
        title: "Rewrite these sentences using contractions.",
        scenario: "<ol><li>He is a very talented developer.</li><li>We are going to start the sprint planning now.</li><li>I am sure that is the correct solution.</li></ol>",
        guidance: ""
    },
    summary: {
        points: ["Contractions combine a pronoun and a verb (e.g., I am &rarr; I'm).", "They are extremely common in spoken English and informal writing."]
    }
};