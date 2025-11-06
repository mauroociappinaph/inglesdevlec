import { LessonData } from '../../../types';

export const lesson_19: LessonData = {
    id: 'storytelling',
    title: 'Lección 19: Telling Stories & Past Events',
    description: 'Master the tenses for talking about projects and successes.',
    introduction: { text: "In job interviews and team meetings, you'll often need to talk about your past experiences. This lesson will teach you the grammar to tell clear, compelling stories about your work.", objectives: ["Use Past Perfect to sequence events.", "Talk about past habits with 'used to' and 'would'."] },
    grammar: [{ title: "Past Perfect: 'had + past participle'", content: ["Use the Past Perfect for an action that happened <strong class='text-sky-400'>before</strong> another past action.", "Example: By the time I joined, they <span class='text-yellow-300'>had already built</span> the prototype."], quickCheck: { question: "Complete: 'The bug was hard to find because we ___ written any logs.'", correctAnswer: "had not", explanation: "The lack of logs happened before the difficulty of finding the bug." } }],
    keyPhrases: [{ original: "I was tasked with refactoring the user authentication flow.", translation: "Me encargaron refactorizar el flujo de autenticación de usuarios.", techContext: "A professional way to describe a past responsibility." }],
    keyWords: [
        { word: 'To implement', translation: 'Implementar', example: 'We decided to implement a new caching strategy.' },
        { word: 'A challenge', translation: 'Un desafío', example: 'The main challenge was integrating with the legacy API.' },
    ],
    phrasalVerbs: [
        { verb: 'figure out', translation: 'Resolver / Entender', example: 'I need to figure out why this query is so slow.' },
    ],
    reading: {
        title: "Read this answer to an interview question:",
        text: "<p>\"In my previous role, I was tasked with improving a slow data processing job. By the time I started, users had already been complaining for months. I discovered that the old script would often time out. I proposed that we rewrite it in Go. After I implemented the new service, the processing time went from 30 minutes to 45 seconds.\"</p>",
        questions: ["What had happened before the developer started?", "What was the final result?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Interviewer", line: "Tell me about a project you're proud of." },
            { speaker: "Developer", line: "Certainly. In my last role, I was tasked with improving the performance of our main dashboard. When I started, it had already become very slow, loading in over 10 seconds. I refactored the data-fetching logic and implemented caching. As a result, we reduced the load time to under 2 seconds." }
        ],
        correctAnswers: ["tasked with", "had already", "result"],
        dialogue: "Developer: \"...I was __BLANK__ improving the performance... When I started, it __BLANK__ become very slow... As a __BLANK__, we reduced the load time...\""
    },
    speaking: {
        scenario: "Tell me about a challenging project you've worked on. What was the situation, what did you do, and what was the result?"
    },
    writing: {
        title: "Write a short paragraph for your resume or portfolio.",
        scenario: "Describe a project you worked on. Mention the technologies you used and the positive outcome.",
        guidance: { title: "Example Structure:", points: ["Start with your role and the project's goal.", "Mention 1-2 key actions you took.", "State the successful, quantifiable result."] }
    },
    summary: {
        points: ["Use Past Perfect (I had finished) for an action that happened *before* another past action.", "Use 'used to' for past habits or states that are now finished."]
    }
};