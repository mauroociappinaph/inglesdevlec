import { LessonData } from '../../../types';

export const lesson_11: LessonData = {
    id: 'planning',
    title: 'Lección 11: Planning a Project',
    description: 'Learn the language of decision-making and project management.',
    introduction: { text: "Every successful tech project begins with a good plan. Using clear and precise language is essential to ensure everyone on the team is aligned.", objectives: ["Learn the difference between gerunds (-ing) and infinitives (to + verb)."] },
    grammar: [{ title: "Verb Forms: Gerunds vs. Infinitives", content: ["Some verbs are followed by a gerund ('I suggest <strong class='text-teal-300'>reviewing</strong> the code'), others by an infinitive ('We need <strong class='text-teal-300'>to finalize</strong> the design')."], quickCheck: { question: "Complete: 'We need ___ (create) a new timeline.'", options: ["creating", "to create"], correctAnswer: "to create", explanation: "'Need' is followed by an infinitive.", inputType: "select" } }],
    keyPhrases: [{ original: "What are the requirements?", translation: "¿Cuáles son los requisitos?", techContext: "A fundamental question to ask before starting any work." }],
    keyWords: [
        { word: 'Timeline', translation: 'Cronograma', example: 'Is this feature included in the timeline for the next sprint?' },
        { word: 'Scope', translation: 'Alcance', example: 'Adding that feature is outside the scope of this project.' },
    ],
    phrasalVerbs: [
        { verb: 'lay out', translation: 'Diseñar / Planificar', example: 'Let\'s lay out the plan for the next development cycle.' },
        { verb: 'push back', translation: 'Pospusiera', example: 'We may have to push back the release date by a week.' },
    ],
    reading: {
        title: "Read this excerpt from a sprint planning meeting:",
        text: "<p><strong>Manager:</strong> \"...First, we need to gather the requirements. Sarah, can you draw up a technical specification?\"</p><p><strong>Sarah:</strong> \"Yes, I can. I suggest starting with a small proof-of-concept to avoid unexpected issues.\"</p>",
        // FIX: Added missing 'questions' property to satisfy the ReadingData type.
        questions: ["What does Sarah suggest doing first?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "Okay team, we need to make a decision on the front-end framework." },
            { speaker: "Developer", line: "I suggest using React. It's stable and we have a lot of experience with it." },
            { speaker: "Manager", line: "Good point. We need to finalize this by tomorrow." }
        ],
        correctAnswers: ["decision", "using", "finalize"],
        dialogue: "Manager: \"Okay team, we need to make a __BLANK__ on the front-end framework.\"<br/>Developer: \"I suggest __BLANK__ React.\"<br/>Manager: \"Good point. We need to __BLANK__ this by tomorrow.\""
    },
    speaking: {
        scenario: "A stakeholder asks to add a new, complex feature to the current sprint, but the team is already at full capacity. How do you explain the situation and propose a solution?"
    },
    writing: {
        title: "Write a short agenda for a planning meeting.",
        scenario: "Write a short list of points to discuss for a new project kickoff meeting.",
        guidance: { title: "Example:", points: ["Discuss project requirements.", "Decide on the main technology stack."] }
    },
    summary: {
        points: ["Remember which verbs are followed by gerunds (e.g., suggest, consider) and which by infinitives (e.g., decide, plan, need)."]
    }
};