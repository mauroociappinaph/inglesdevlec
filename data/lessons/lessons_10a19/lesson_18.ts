import { LessonData } from '../../../types';

export const lesson_18: LessonData = {
    id: 'routines-he-she',
    title: "Lección 18: Describing Routines (He/She)",
    description: "Master the 3rd person singular 's' to describe a colleague's tasks.",
    introduction: { text: "A big part of teamwork is understanding what your colleagues do. This lesson focuses on the '3rd Person Singular' (he/she/it), a simple but very important grammar rule.", objectives: ["Master the '-s' and '-es' endings for 3rd person verbs."] },
    grammar: [{ title: "Present Simple: 3rd Person Singular", content: ["When you talk about one other person (he, she, it), you must add an <strong class='text-sky-400'>-s</strong> or <strong class='text-sky-400'>-es</strong> to the verb.", "Example: I work &rarr; He <span class='text-teal-300'>works</span>. We go &rarr; She <span class='text-teal-300'>goes</span>."] }],
    keyPhrases: [{ original: "She deploys to production every Friday.", translation: "Ella despliega a producción todos los viernes.", techContext: "Describing a colleague's specific responsibility." }],
    keyWords: [
        { word: 'Manage', translation: 'Gestionar / Dirigir', example: 'She manages the entire backend team.' },
        { word: 'Coordinate', translation: 'Coordinar', example: 'The project manager coordinates with all the stakeholders.' },
    ],
    phrasalVerbs: [
        { verb: 'take care of', translation: 'Hacerse cargo de', example: 'She will take care of the database migration.' },
        { verb: 'deal with', translation: 'Lidiar con / Ocuparse de', example: 'He deals with all the incoming client requests.' },
    ],
    reading: {
        title: "Read this team responsibilities chart:",
        text: "<p><strong>David:</strong> As the tech lead, David manages the project timeline. He also reviews all major pull requests.</p><p><strong>Maria:</strong> Maria is our UI/UX specialist. She designs all the new user interfaces.</p>",
        questions: ["What does David manage?", "What does Maria design?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "What's David's main role?" },
            { speaker: "You", line: "He goes to all the client meetings. He likes to manage the project requirements." },
            { speaker: "Manager", line: "And what about Maria?" },
            { speaker: "You", line: "She manages the technical architecture meetings every day." }
        ],
        correctAnswers: ["goes", "likes", "manages"],
        dialogue: "Manager: \"What's David's main role?\"<br/>You: \"He __BLANK__ to all the client meetings. He __BLANK__ to manage the project requirements.\"<br/>Manager: \"And what about Maria?\"<br/>You: \"She __BLANK__ the technical architecture meetings every day.\""
    },
    speaking: {
        scenario: "Your manager asks you what your new colleague, Maria, is working on. Describe one of her main responsibilities (e.g., 'She manages our CI/CD pipeline')."
    },
    writing: {
        title: "Write a handover note.",
        scenario: "You are going on vacation. Write a short note to your team explaining who will handle your responsibilities while you are away.",
        guidance: { title: "Example:", points: ["\"While I am away, Maria will handle all urgent bug reports.\""] }
    },
    summary: {
        points: ["Remember to add -s or -es to verbs when talking about 'he', 'she', or a single person/thing."]
    }
};