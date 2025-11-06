import { LessonData } from '../../../types';

export const lesson_07: LessonData = {
    id: 'greetings-formal',
    title: 'Lección 7: Formal Greetings & Etiquette',
    description: 'Handle formal introductions and master key sounds.',
    introduction: {
        text: "Some situations—like meeting a client—require a more formal tone. This lesson focuses on the phrases and pronunciation needed for these settings.",
        objectives: ["Learn formal titles (Mr., Ms.).", "Practice key pronunciation sounds like 'sh' and 'th'."],
    },
    grammar: [
         {
            title: "Pronunciation Focus: 'sh' and 'th'",
            content: [
                "The 'sh' sound is soft: <strong class='text-teal-300'>sh</strong>e, Engli<strong class='text-teal-300'>sh</strong>.",
                "For the 'th' sound, place your tongue between your teeth: <strong class='text-teal-300'>th</strong>is, mo<strong class='text-teal-300'>th</strong>er."
            ]
        }
    ],
    keyPhrases: [
        { original: "Mrs. Smith, this is my colleague, David.", translation: "Sra. Smith, este es mi colega, David.", techContext: "A standard formal introduction. Use titles (Mr., Ms., Mrs.) for formality." }
    ],
    keyWords: [
        { word: 'Formal', translation: 'Formal', example: 'Please use a formal tone in emails to the client.' },
        { word: 'Client', translation: 'Cliente', example: 'The client was very happy with the demo.' },
    ],
    phrasalVerbs: [
        { verb: 'look forward to', translation: 'Esperar con ansias', example: 'I look forward to working with you on this project.' },
        { verb: 'follow up with', translation: 'Hacer seguimiento con', example: 'I will follow up with you by email tomorrow.' },
    ],
    reading: {
        title: "Read this formal email introduction:",
        text: "<p><strong>Subject:</strong> Introduction - Project Alpha</p><p>Dear Mr. Chen,</p><p>Good morning. My name is Sarah. This is my colleague, Ben. It is a pleasure to meet you.</p><p>Best regards,<br/>Sarah</p>",
        questions: ["What title is used to address Mr. Chen?", "What formal phrase is used to say \"nice to meet you\"?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "You", line: "Good afternoon, Mrs. Smith." },
            { speaker: "Manager", line: "Mrs. Smith, this is David, our lead developer." },
            { speaker: "Mrs. Smith", line: "Welcome, David. It's a pleasure to meet you." }
        ],
        correctAnswers: ["afternoon", "this is", "Welcome"],
        dialogue: "You: \"Good __BLANK__, Mrs. Smith.\"<br/>Manager: \"Mrs. Smith, __BLANK__ David, our lead developer.\"<br/>Mrs. Smith: \"__BLANK__, David. It's a pleasure to meet you.\""
    },
    speaking: {
        scenario: "You are in a video call and your manager asks you to introduce a new team member, David, to a client, Mrs. Smith. How do you make the introduction?"
    },
    writing: {
        title: "Write the beginning of a formal email.",
        scenario: "You need to write an email to a new client, Mr. David Chen. Start the email with a formal greeting.",
        guidance: { title: "Example:", points: ["\"Dear Mr. Chen,\""] }
    },
    summary: {
        points: ["Use titles like Mr., Ms., or Mrs. in formal situations.", "Phrases like \"It's a pleasure to meet you\" are more formal than \"Nice to meet you.\""]
    }
};