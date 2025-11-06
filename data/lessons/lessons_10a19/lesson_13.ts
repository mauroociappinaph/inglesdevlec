import { LessonData } from '../../../types';

export const lesson_13: LessonData = {
    id: 'preferences-questions',
    title: 'Lección 13: Asking Questions & Negations',
    description: "Master the use of 'do'/'does' for questions and negatives.",
    introduction: { text: "'Does this function work?' or 'This code does not handle errors' are sentences you'll use every day. This lesson focuses on the correct use of 'do' and 'does'.", objectives: ["Form questions with 'do'/'does'.", "Form negative sentences with 'don't'/'doesn't'."] },
    grammar: [{ title: "Questions with 'do' and 'does'", content: ["When you use 'does', the main verb does NOT take an -s.", "<code>Maria <strong>writes</strong> tests. &rarr; Question: <strong>Does</strong> Maria <strong>write</strong> tests?</code>"], quickCheck: { question: "Complete: '___ the server respond quickly?'", correctAnswer: "Does", explanation: "'The server' is 'it', so we must use 'does'." } }],
    keyPhrases: [{ original: "This component does not have any dependencies.", translation: "Este componente no tiene ninguna dependencia.", techContext: "A key statement when discussing software architecture." }],
    keyWords: [
        { word: 'Query', translation: 'Consulta', example: 'Does this query return the correct data from the database?' },
        { word: 'Dependency', translation: 'Dependencia', example: 'This library does not have any external dependencies.' },
    ],
    phrasalVerbs: [
        { verb: 'figure out', translation: 'Entender / Resolver', example: 'I can\'t figure out why this test doesn\'t pass.' },
    ],
    reading: {
        title: "Read this code review comment:",
        text: "<p><strong>@teammate:</strong> \"Hi there. Does this new function validate the user input? It looks like it does not handle empty strings.\"</p>",
        questions: ["What is the first question the reviewer asks?", "What problem does the reviewer point out?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "Do you like the new UI design?" },
            { speaker: "Dev2", line: "Yes, but I have a question. Does this button submit the form?" },
            { speaker: "Dev1", line: "No, it does not. It only saves a draft." }
        ],
        correctAnswers: ["like", "Does", "does not"],
        dialogue: "Dev1: \"Do you __BLANK__ the new UI design?\"<br/>Dev2: \"Yes, but I have a question. __BLANK__ this button submit the form?\"<br/>Dev1: \"No, it __BLANK__. It only saves a draft.\""
    },
    speaking: {
        scenario: "You are reviewing a colleague's code and you see a function you don't understand. Ask them a polite question to understand what it does (e.g., 'Hi [Name], quick question... does this function...?')."
    },
    writing: {
        title: "Write a question for a Q&A session.",
        scenario: "You are in a company-wide meeting about a new product. You want to know if it will be compatible with your team's existing software. Write a clear question to ask.",
        guidance: { title: "Example:", points: ["\"Does the new product integrate with our existing API?\""] }
    },
    summary: {
        points: ["Use 'do'/'does' to start 'yes/no' questions.", "When you use 'does' or 'doesn't', the main verb never has an -s at the end."]
    }
};