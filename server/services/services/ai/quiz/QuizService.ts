import { requestAI } from '../core/requestAI';
import { LessonData, QuizQuestion } from '../../../types';
import { QUIZ_SCHEMA } from './quizSchemas';
import { buildQuizPrompt } from './quizPrompts';
import { validateParams } from '../../../utils';
import { CONFIG } from '../../../config';

export class QuizService {
  async generateModuleQuiz(lessons: LessonData[]): Promise<QuizQuestion[]> {
    validateParams({ lessons }, "generateModuleQuiz");
    
    if (lessons.length === 0) {
      throw new Error("At least one lesson is required to generate a quiz");
    }

    const result = await requestAI<{ quiz: QuizQuestion[] }>({
      prompt: buildQuizPrompt(lessons),
      responseSchema: QUIZ_SCHEMA,
    });

    if (!result?.quiz || result.quiz.length < 1) {
      // Allow for flexible number of questions returned by AI.
      console.warn(`AI returned ${result?.quiz?.length || 0} questions instead of the expected ${CONFIG.QUIZ_QUESTION_COUNT}`);
    }

    return result.quiz || [];
  }
}
