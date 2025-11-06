import { LessonData } from '../../../types';

export const lesson_05: LessonData = {
    id: 'routine',
    title: 'Lección 5: Describing a Typical Day',
    description: 'Talk about your daily tasks, meetings, and work routines.',
    introduction: {
        text: "Being able to describe your daily routine is essential for stand-up meetings and conversations with colleagues. This lesson focuses on the Present Simple tense and key vocabulary.",
        objectives: ["Use the Present Simple for routines.", "Use adverbs of frequency (always, usually, etc.)."],
    },
    grammar: [
        {
            title: "Present Simple & Adverbs of Frequency",
            content: [
                "We use the Present Simple tense to talk about routines. You can add <strong class='text-teal-300'>adverbs of frequency</strong> to give more detail.",
                "Example: I <strong class='text-teal-300'>usually</strong> have our stand-up meeting at 10 AM."
                ],
            quickCheck: {
                question: "Which sentence is correct?",
                options: ["I have sometimes a meeting.", "I sometimes have a meeting."],
                correctAnswer: "I sometimes have a meeting.",
                explanation: "Adverbs of frequency usually go before the main verb.",
                inputType: "select"
            }
        }
    ],
    keyPhrases: [
        { original: "We have a team stand-up meeting every day.", translation: "Tenemos una reunión de equipo todos los días.", techContext: "A very common sentence for any developer." },
    ],
    keyWords: [
        { word: 'Routine', translation: 'Rutina', example: 'My morning routine includes a daily stand-up meeting.' },
        { word: 'Deadline', translation: 'Fecha límite', example: 'The deadline for this feature is next Friday.' },
    ],
    phrasalVerbs: [
        { verb: 'check in', translation: 'Registrarse / Reportarse', example: 'I\'ll check in later today with an update on my progress.' },
        { verb: 'follow up', translation: 'Hacer seguimiento', example: 'I need to follow up with the design team about the mockups.' },
    ],
    reading: {
        title: "Read this developer's daily status update on Slack:",
        text: "<p><strong>Morning Update:</strong><br/>Good morning, team! Today, I plan to finish the unit tests for the authentication feature. In the afternoon, I will do a code review for Sarah's pull request.</p>",
        questions: ["What is the developer's main task for the morning?", "What will they do in the afternoon?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Anna", line: "What's your routine?" },
            { speaker: "Luis", line: "I review pull requests in the morning. We have our stand-up meeting every day at 10 AM. You work a lot, Anna!" }
        ],
        correctAnswers: ["in the morning", "every day", "work a lot"],
        dialogue: "Anna: \"What's your routine?\"<br/>Luis: \"I review pull requests __BLANK__. We have our stand-up meeting __BLANK__ at 10 AM. You __BLANK__, Anna!\""
    },
    speaking: {
        scenario: "In a casual chat with a colleague, they ask you: 'What does your typical day look like?'. Describe two or three of your regular tasks as a developer."
    },
    writing: {
        title: "Write your status for a daily stand-up meeting.",
        scenario: "Write two short sentences to share in a stand-up. What did you do yesterday? What will you do today?",
        guidance: { title: "Example:", points: ["\"Yesterday, I finished the login component. Today, I will start working on the user profile page.\""] }
    },
    summary: {
        points: ["Use the Present Simple tense for routines and daily tasks.", "Use adverbs of frequency to add detail about how often you do something."]
    }
};