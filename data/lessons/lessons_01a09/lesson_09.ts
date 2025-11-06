import { LessonData } from '../../../types';

export const lesson_09: LessonData = {
    id: 'family',
    title: 'Lección 9: Describing Family & Home',
    description: 'Talk about personal topics with colleagues.',
    introduction: { text: "Building good relationships with colleagues often involves sharing a little about your personal life. This lesson helps you comfortably talk about your family and home.", objectives: ["Practice pronunciation of the 's' sound.", "Review basic question and negative forms."] },
    grammar: [{ title: "Pronunciation Tip: The 's' sound", content: ["Be careful not to add an 'e' sound at the beginning of words like <strong class='text-teal-300'>sp</strong>eak, <strong class='text-teal-300'>st</strong>ore, <strong class='text-teal-300'>st</strong>udent."] }],
    keyPhrases: [{ original: "Do you work from home or from the office?", translation: "¿Trabajas desde casa o desde la oficina?", techContext: "A very common question in modern tech companies." }],
    keyWords: [
        { word: 'Partner', translation: 'Pareja', example: 'My partner also works in tech as a product manager.' },
        { word: 'Work-life balance', translation: 'Equilibrio trabajo-vida', example: 'I chose this company because it has a good work-life balance.' },
    ],
    phrasalVerbs: [
        { verb: 'get along with', translation: 'Llevarse bien con', example: 'I get along with all of my colleagues on the development team.' },
    ],
    reading: {
        title: "Read this message in a team's \"random\" chat channel:",
        text: "<p><strong>Alex:</strong> \"Hey team! A fun question for Friday: Do you have any pets? I have a dog named Byte.\"</p><p><strong>Maria:</strong> \"Nice! I have a cat. My husband and I adopted her last year.\"</p>",
        questions: ["What is the name of Alex's dog?", "Who did Maria adopt the cat with?"]
    },
    listening: {
        title: "Listen and fill in the blanks.",
        dialogueTurns: [
            { speaker: "Colleague 1", line: "My wife is also a software developer." },
            { speaker: "Colleague 2", line: "That's cool! I know your brother works here, but I don't know your sister." },
            { speaker: "Colleague 1", line: "Yes, my sister is a designer on another team." }
        ],
        correctAnswers: ["wife", "brother", "sister"],
        dialogue: "Colleague 1: \"My __BLANK__ is also a software developer.\"<br/>Colleague 2: \"That's cool! I know your __BLANK__ works here, but I don't know your __BLANK__.\"<br/>Colleague 1: \"Yes, my sister is a designer on another team.\""
    },
    speaking: {
        scenario: "A colleague you get along with well asks you in a casual chat, 'So, do you have any family?'. Briefly mention one family member and what they do for a living."
    },
    writing: {
        title: "Write a short \"out of office\" message.",
        scenario: "Imagine you are going on a short vacation. Write an automatic reply for your email.",
        guidance: { title: "Example:", points: ["\"Thank you for your message. I am currently out of the office and will return on Monday, July 22nd.\""] }
    },
    summary: {
        points: ["Practice the 's' sound at the beginning of words like 'speak' and 'student'.", "It's okay to talk about personal topics, but keep it brief and professional."]
    }
};