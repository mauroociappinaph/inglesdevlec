import { LessonData } from '../../../types';

export const lesson_06: LessonData = {
    id: 'preferences',
    title: 'Lección 6: Expressing Preferences',
    description: 'Learn to talk about what you like, love, and prefer.',
    introduction: {
        text: "Developers have strong opinions about their tools! Being able to express your preferences is an important part of technical discussions.",
        objectives: ["Learn the difference between 'like', 'love', and 'prefer'."],
    },
    grammar: [
         {
            title: "Like vs. Love vs. Prefer",
            content: [
                "<strong>Like:</strong> General positive feeling. 'I <span class='text-sky-400'>like</span> working with Docker.'",
                "<strong>Love:</strong> Strong positive feeling. 'I <span class='text-sky-400'>love</span> learning new languages.'",
                "<strong>Prefer:</strong> To like one thing more than another. 'I <span class='text-sky-400'>prefer</span> dark mode.'"
                ],
            quickCheck: {
                question: "Which word expresses the strongest positive feeling?",
                correctAnswer: "love",
                explanation: "'Love' indicates a very strong enjoyment."
            }
        }
    ],
    keyPhrases: [
        { original: "Do you prefer to work on the front-end or the back-end?", translation: "¿Prefieres trabajar en el front-end o en el back-end?", techContext: "A common question in interviews and team discussions." },
    ],
     keyWords: [
        { word: 'Framework', translation: 'Marco de trabajo', example: 'Angular and Vue are popular front-end frameworks.' },
        { word: 'Syntax', translation: 'Sintaxis', example: 'I really like the clean syntax of Python.' },
    ],
    phrasalVerbs: [
        { verb: 'opt for', translation: 'Optar por', example: 'We decided to opt for a microservices architecture.' },
        { verb: 'go with', translation: 'Elegir / Ir con', example: 'Let\'s go with the simpler solution for now.' },
    ],
    reading: {
        title: "Read this discussion from a team's Slack channel:",
        text: "<p><strong>Alex:</strong> \"For the new project, do we prefer to use a REST API or a GraphQL API?\"</p><p><strong>Maria:</strong> \"I really like GraphQL because it allows the front-end to request only the data it needs.\"</p>",
        questions: ["What technology does Maria prefer?", "What is one reason she likes it?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Anna", line: "What is your favorite programming language?" },
            { speaker: "Luis", line: "Oh, I love Python! It's so readable." },
            { speaker: "Anna", line: "I agree. I also really like its extensive libraries." }
        ],
        correctAnswers: ["favorite", "love", "like"],
        dialogue: "Anna: \"What is your __BLANK__ programming language?\"<br/>Luis: \"Oh, I __BLANK__ Python! It's so readable.\"<br/>Anna: \"I agree. I also really __BLANK__ its extensive libraries.\""
    },
    speaking: {
        scenario: "A colleague asks for your opinion: 'Should we use TypeScript or plain JavaScript for our new project?'. Express your preference for TypeScript and give one reason why."
    },
    writing: {
        title: "Write a short comment on a technical proposal.",
        scenario: "A teammate has proposed using a new CSS framework. Write a short, positive comment expressing your agreement and saying one thing you like about the framework.",
        guidance: { title: "Example:", points: ["\"I agree with this proposal. I really like this framework because its component library is very extensive.\""] }
    },
    summary: {
        points: ["Use 'like', 'love', and 'prefer' to express your opinions.", "It's good practice to give a short reason for your preference."]
    }
};