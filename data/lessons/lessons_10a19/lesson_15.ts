import { LessonData } from '../../../types';

export const lesson_15: LessonData = {
    id: 'negative-contractions',
    title: "Lección 15: Using Negative Contractions",
    description: "Learn how to use 'don't' and 'doesn't' to sound natural.",
    introduction: { text: "It often sounds strange or too formal to say 'do not' or 'does not' in a normal conversation. This lesson will help you master the contractions 'don't' and 'doesn't'.", objectives: ["Learn the difference between 'don't' and 'doesn't'."] },
    grammar: [{ title: "Negative Contractions", content: ["Use <strong class='text-teal-300'>don't</strong> for I, you, we, they.", "Use <strong class='text-teal-300'>doesn't</strong> for he, she, it. After 'doesn't', the verb does NOT have an -s."], quickCheck: { question: "Choose the correct sentence.", options: ["She don't like the new design.", "She doesn't like the new design."], correctAnswer: "She doesn't like the new design.", explanation: "For 'she', we must use 'doesn't'.", inputType: "select" } }],
    keyPhrases: [{ original: "This function doesn't return any value.", translation: "Esta función no devuelve ningún valor.", techContext: "A typical comment in a code review." }],
    keyWords: [
        { word: 'Capacity', translation: 'Capacidad', example: 'Our team doesn\'t have the capacity to take on new tasks this week.' },
        { word: 'Requirement', translation: 'Requisito', example: 'This solution doesn\'t meet all the requirements.' },
    ],
    phrasalVerbs: [
        { verb: 'rely on', translation: 'Confiar en / Depender de', example: 'We can\'t rely on this library; it doesn\'t have good documentation.' },
    ],
    reading: {
        title: "Read this code review comment:",
        text: "<p><strong>@reviewer:</strong> \"This looks good, but this function doesn't seem to handle null values. If the input is null, it will crash. I don't think that's the desired behavior.\"</p>",
        questions: ["What is the first problem the reviewer points out?", "What does the reviewer say is not the desired behavior?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Manager", line: "Is the new feature ready?" },
            { speaker: "Dev1", line: "No, it doesn't work yet." },
            { speaker: "Manager", line: "Why not? Don't you have the correct API key?" },
            { speaker: "Dev1", line: "I don't know, I need to check." }
        ],
        correctAnswers: ["doesn't", "Don't", "don't"],
        dialogue: "Manager: \"Is the new feature ready?\"<br/>Dev1: \"No, it __BLANK__ work yet.\"<br/>Manager: \"Why not? __BLANK__ you have the correct API key?\"<br/>Dev1: \"I __BLANK__ know, I need to check.\""
    },
    speaking: {
        scenario: "A colleague asks if your new code is ready to be deployed. Tell them it isn't ready and give a simple reason (e.g., 'it doesn't have tests yet')."
    },
    writing: {
        title: "Write a short email to your manager.",
        scenario: "You cannot attend a meeting. Write a short, polite email explaining that you can't be there.",
        guidance: { title: "Example:", points: ["\"Hi [Manager's Name],<br/>I'm sorry, but I can't make it to the 3 PM meeting today. I will catch up with the notes later.<br/>Thanks,<br/>[Your Name]\""] }
    },
    summary: {
        points: ["Use 'don't' instead of 'do not' for I, you, we, they.", "Use 'doesn't' instead of 'does not' for he, she, it."]
    }
};