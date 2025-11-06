import { LessonData } from '../../../types';

export const lesson_10: LessonData = {
    id: 'debate',
    title: 'Lección 10: Engaging in a Debate',
    description: 'Learn to express agreement and disagreement professionally.',
    introduction: { text: "Debating ideas is a fundamental part of teamwork. This lesson will give you the tools to participate in these debates with confidence.", objectives: ["Express agreement and disagreement diplomatically.", "Understand how tone affects communication."] },
    grammar: [{ title: "Hypothetical 'if' Clauses", content: ["Conditionals are crucial for discussing potential outcomes.", "<code>If we <strong>had chosen</strong> a different library, we <strong>would have finished</strong> sooner.</code>"], quickCheck: { question: "Complete: 'If I had known about the bug, I ___ pushed the code.'", correctAnswer: "would not have", explanation: "This is a Past Unreal conditional." } }],
    keyPhrases: [{ original: "I see your point, but have you considered...", translation: "Entiendo tu punto, pero has considerado...", techContext: "A classic and respectful way to introduce a counter-argument." }],
    keyWords: [
        { word: 'Trade-off', translation: 'Compromiso / Intercambio', example: 'There\'s a trade-off between performance and code readability.' },
        { word: 'Alternative', translation: 'Alternativa', example: 'Let\'s consider an alternative approach before making a final decision.' },
    ],
    phrasalVerbs: [
        { verb: 'agree with', translation: 'Estar de acuerdo con', example: 'I agree with your point about the deadline.' },
        { verb: 'bring up', translation: 'Sacar un tema / Mencionar', example: 'I want to bring up the topic of our deployment process.' },
    ],
    reading: {
        title: "Read the following excerpt from a team discussion:",
        text: "<p><strong>Alex:</strong> \"I think we should use the new 'Shiny.js' framework.\"</p><p><strong>Ben:</strong> \"That's an interesting thought. However, I have some concerns. 'Shiny.js' is still in beta... I suggest we stick with React.\"</p>",
        questions: ["What is Ben's main concern about 'Shiny.js'?", "What is the alternative solution Ben proposes?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "So, the deadline is tight. I think we should skip writing unit tests to save time." },
            { speaker: "Developer", line: "I understand the pressure, but I'm not sure that's the best course of action. Skipping tests now could lead to more bugs and rework later." },
            { speaker: "Manager", line: "That's a valid point. What do you propose?" }
        ],
        correctAnswers: ["but", "course", "rework", "point"],
        dialogue: "Manager: \"I think we should skip writing unit tests to save time.\"<br/>Developer: \"I understand the pressure, __BLANK__ I'm not sure that's the best __BLANK__ of action. Skipping tests now could lead to more bugs and __BLANK__ later.\"<br/>Manager: \"That's a valid __BLANK__. What do you propose?\""
    },
    speaking: {
        scenario: "A colleague in a code review suggests a change that you believe makes the code harder to read, even though it works. How do you express your opinion politely?"
    },
    writing: {
        title: "Write a short comment on a Pull Request (PR).",
        scenario: "Imagine a colleague has submitted code that introduces a new external library for a very small task. Write a comment suggesting that adding a new dependency might not be necessary.",
        guidance: { title: "Example:", points: ["\"Thanks for the PR. This looks good, but I'm wondering if we really need a new library for this. Could we achieve the same result with a simple helper function instead?\""] }
    },
    summary: {
        points: ["Be diplomatic: Acknowledge the other person's point of view before presenting your own.", "Use connectors like 'but' and 'however' to link opposing ideas."]
    }
};