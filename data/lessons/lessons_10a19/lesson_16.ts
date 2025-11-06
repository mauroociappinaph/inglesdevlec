import { LessonData } from '../../../types';

export const lesson_16: LessonData = {
    id: 'demonstratives',
    title: "Lección 16: Using 'This', 'That', 'These', 'Those'",
    description: 'Learn to point out objects and concepts, near and far.',
    introduction: { 
        text: "In development, we constantly point things out: \"this bug,\" \"that function,\" \"these lines of code.\" Demonstratives (this, that, these, those) are essential for being specific. This lesson will teach you how to use them correctly.", 
        objectives: [
            "Understand the difference between this/these (near) and that/those (far).", 
            "Use the correct singular (this/that) and plural (these/those) forms."
        ] 
    },
    grammar: [{ 
        title: "Demonstratives: This, That, These, Those", 
        content: [
            "Use <strong class='text-sky-400'>'this'</strong> (singular) and <strong class='text-sky-400'>'these'</strong> (plural) for things that are close to you.",
            "Example: '<strong class='text-teal-300'>This</strong> component is causing the bug.'",
            "Use <strong class='text-yellow-300'>'that'</strong> (singular) and <strong class='text-yellow-300'>'those'</strong> (plural) for things that are far from you.",
            "Example: '<strong class='text-teal-300'>That</strong> function in the other file is deprecated.'"
        ],
        quickCheck: {
            question: "Complete: 'Look at the code on my screen. ___ part here is the problem.'",
            options: ["This", "That"],
            correctAnswer: "This",
            explanation: "We use 'this' for something close to the speaker.",
            inputType: "select"
        }
    }],
    keyPhrases: [
        { original: "What is this?", translation: "¿Qué es esto?", techContext: "When you point to a line of code you don't understand." },
        { original: "Those servers are offline.", translation: "Esos servidores están desconectados.", techContext: "Referring to servers that are not your direct responsibility or are located elsewhere." }
    ],
    keyWords: [
        { word: 'Variable', translation: 'Variable', example: 'This variable is not defined in the current scope.' },
        { word: 'Function', translation: 'Función', example: 'That function over there is the one causing the memory leak.' }
    ],
    phrasalVerbs: [
        { verb: 'point to', translation: 'Señalar a', example: 'All the evidence seems to point to a problem in the database.' },
        { verb: 'go back to', translation: 'Volver a', example: 'Can we go back to that previous slide? I have a question.' }
    ],
    reading: {
        title: "Read this code review comment:",
        text: "<p>Thanks for the changes. I have a question about this new function. The logic looks correct, but that variable name, 'x', is a bit unclear. Can we rename it? Also, remember those performance issues we had last month? I think these changes will help fix them.</p>",
        questions: [ "What does the reviewer point to as unclear?", "What past issue does the reviewer mention?" ]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Dev1", line: "What do you think of this design?" },
            { speaker: "Dev2", line: "I like it. But that color for the button is a bit too bright." },
            { speaker: "Dev1", line: "And what about these icons here?" },
            { speaker: "Dev2", line: "Those are great, very clear." }
        ],
        correctAnswers: [ "this", "that", "these", "Those" ],
        dialogue: "Dev1: \"What do you think of __BLANK__ design?\"<br/>Dev2: \"I like it. But __BLANK__ color for the button is a bit too bright.\"<br/>Dev1: \"And what about __BLANK__ icons here?\"<br/>Dev2: \"__BLANK__ are great, very clear.\""
    },
    speaking: {
        scenario: "You are pair programming with a colleague. Point to a section of their code on the screen and ask a question about it. Start your sentence with 'This...' or 'These...'."
    },
    writing: {
        title: "Write a short bug report title.",
        scenario: "You have found a bug where a specific button doesn't work. Write a title for the bug report using 'this'.",
        guidance: { title: "Example:", points: [ "'This button does not submit the form.'" ] }
    },
    summary: {
        points: [ "Use 'this' (singular) and 'these' (plural) for things that are near.", "Use 'that' (singular) and 'those' (plural) for things that are far.", "Unlike Spanish, these words do not change for gender." ]
    }
};