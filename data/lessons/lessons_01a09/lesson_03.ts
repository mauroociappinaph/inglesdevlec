import { LessonData } from '../../../types';

export const lesson_03: LessonData = {
    id: 'work',
    title: 'Lección 3: Talking about Work',
    description: 'Describe your job, your role, and what colleagues do.',
    introduction: {
        text: "Being able to clearly state your job and ask about others' roles is a fundamental skill. This lesson covers the basic grammar of the present tense for talking about professions.",
        objectives: ["Learn the forms of the verb 'to be'.", "Understand the Present Simple tense for 'he/she/it'."],
    },
    grammar: [
        {
            title: "The Verb 'to be'",
            content: ["The verb 'to be' (is, am, are) is essential for talking about roles. Remember its unique forms: I <strong class='text-teal-300'>am</strong>, You/We/They <strong class='text-teal-300'>are</strong>, He/She/It <strong class='text-teal-300'>is</strong>."],
            quickCheck: {
                question: "Complete: 'They ___ QA engineers.'",
                options: ["is", "am", "are"],
                correctAnswer: "are",
                explanation: "'They' always uses 'are'.",
                inputType: "select"
            }
        },
        {
            title: "Present Simple Tense",
            content: ["For most other verbs, just add an <strong class='text-sky-400'>-s</strong> for 'he', 'she', or 'it'.", "Example: I <strong class='text-teal-300'>work</strong> on the API. &rarr; He <strong class='text-teal-300'>works</strong> on the API."],
            quickCheck: {
                question: "Complete: 'Our team ___ on the new feature.'",
                options: ["work", "works"],
                correctAnswer: "works",
                explanation: "'Team' is a singular noun (it), so the verb needs an '-s'.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "Anna is a DevOps engineer.", translation: "Anna es una ingeniera de DevOps.", techContext: "Stating someone's profession." },
        { original: "Are you a front-end developer?", translation: "¿Eres un desarrollador front-end?", techContext: "Asking about someone's role." }
    ],
    keyWords: [
        { word: 'Role', translation: 'Rol / Puesto', example: 'My role is to maintain the database.' },
        { word: 'Department', translation: 'Departamento', example: 'He works in the mobile development department.' },
    ],
    phrasalVerbs: [
        { verb: 'work on', translation: 'Trabajar en', example: 'I am currently working on a new feature for the app.' },
        { verb: 'report to', translation: 'Reportar a (un superior)', example: 'All junior developers report to the team lead.' },
    ],
    reading: {
        title: "Read this team introduction on a company website:",
        text: "<p><strong>Maria - Lead Engineer</strong><br/>Maria is our lead front-end engineer. She works on our main React application. She is from Spain.</p><p><strong>Ben - Backend Developer</strong><br/>Ben works on our API infrastructure. He manages our databases.</p>",
        questions: ["What is Maria's job?", "What does Ben do?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Maria", line: "What does Anna do?" },
            { speaker: "Luis", line: "Anna is a teacher." },
            { speaker: "Maria", line: "And you? Do you work at the school too?" },
            { speaker: "Luis", line: "No, I work at an office." },
            { speaker: "Maria", line: "Wow, your job is interesting!" }
        ],
        correctAnswers: ["is", "work", "interesting"],
        dialogue: "Maria: \"What does Anna do?\"<br/>Luis: \"Anna __BLANK__ a teacher.\"<br/>Maria: \"And you? Do you __BLANK__ at the school too?\"<br/>Luis: \"No, I work at an office.\"<br/>Maria: \"Wow, your job is __BLANK__!\""
    },
    speaking: {
        scenario: "You're at a virtual company event, and someone from a different department asks you, 'So, what do you do here?'. Briefly describe your role as a full-stack developer."
    },
    writing: {
        title: "Write a short bio for your team's internal website.",
        scenario: "Write one or two sentences describing your role and what you work on.",
        guidance: { title: "Example:", points: ["I am a backend developer on the core services team. I work on the main user authentication API."] }
    },
    summary: {
        points: ["Remember the different forms of 'to be': am, is, are.", "For other verbs in the present simple, add '-s' for he/she/it."]
    }
};