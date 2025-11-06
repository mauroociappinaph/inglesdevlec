import { sanitizeText } from '../../../utils';
import { LessonData } from '../../../types';
import { CONFIG } from '../../../config';

export function buildQuizPrompt(lessons: LessonData[]): string {
  const formatted = lessons.map(lesson => ({
    title: lesson.title,
    description: sanitizeText(lesson.description),
    grammar: lesson.grammar?.map(g => ({
      title: g.title,
      content: Array.isArray(g.content) 
        ? g.content.map(sanitizeText).join(" ")
        : sanitizeText(String(g.content))
    })),
    keyPhrases: lesson.keyPhrases?.map(p => 
      `${p.original} (${p.translation})`
    ),
    keyWords: lesson.keyWords?.map(w => 
      `${w.word}: ${w.translation}`
    ),
    reading: lesson.reading ? sanitizeText(lesson.reading.text) : null
  }));

  return `
You are an Oxford University assessment expert for technical professionals.
Generate exactly ${CONFIG.QUIZ_QUESTION_COUNT} unique multiple-choice questions testing comprehension, grammar, and vocabulary.
Each question needs 4 options (1 correct, 3 plausible distractors) with detailed explanations.

Lesson Data:
${JSON.stringify(formatted, null, 2)}
`;
}
