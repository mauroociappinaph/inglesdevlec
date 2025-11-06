import { requestAI } from '../core/requestAI';
import { ReadingAnswerFeedback, DebateFeedback, PronunciationFeedback } from '../../../types';
import { validateParams } from '../../../utils';
import { 
    buildGenericFeedbackPrompt, 
    buildReadingAnswerPrompt, 
    buildDebateFeedbackPrompt, 
    buildPronunciationFeedbackPrompt 
} from './feedbackPrompts';
import { 
    BOOLEAN_FEEDBACK_SCHEMA, 
    DEBATE_FEEDBACK_SCHEMA, 
    PRONUNCIATION_SCHEMA 
} from './feedbackSchemas';

export class FeedbackService {
  async evaluateReadingAnswer(contextText: string, question: string, userAnswer: string): Promise<ReadingAnswerFeedback> {
    validateParams({ contextText, question, userAnswer }, "evaluateReadingAnswer");
    return requestAI({
      prompt: buildReadingAnswerPrompt(contextText, question, userAnswer),
      responseSchema: BOOLEAN_FEEDBACK_SCHEMA,
    });
  }

  async getWritingFeedback(scenario: string, userResponse: string): Promise<string> {
    validateParams({ scenario, userResponse }, "getWritingFeedback");
    return requestAI({
      model: "PRO",
      prompt: buildGenericFeedbackPrompt("writing", scenario, userResponse),
      useThinking: true,
    });
  }

  async getDebateFeedback(scenario: string, userResponse: string): Promise<DebateFeedback> {
    validateParams({ scenario, userResponse }, "getDebateFeedback");
    return requestAI({
      model: "PRO",
      prompt: buildDebateFeedbackPrompt(scenario, userResponse),
      responseSchema: DEBATE_FEEDBACK_SCHEMA,
      useThinking: true,
    });
  }

  async getInterviewFeedback(question: string, userAnswer: string): Promise<string> {
    validateParams({ question, userAnswer }, "getInterviewFeedback");
    return requestAI({
      model: "PRO",
      prompt: buildGenericFeedbackPrompt("interview", question, userAnswer),
      useThinking: true,
    });
  }

  async getSpeakingFeedback(scenario: string, userAnswer: string): Promise<string> {
    validateParams({ scenario, userAnswer }, "getSpeakingFeedback");
    return requestAI({
      model: "PRO",
      prompt: buildGenericFeedbackPrompt("speaking", scenario, userAnswer),
      useThinking: true,
    });
  }

  async getPronunciationFeedback(originalPhrase: string, userAttempt: string): Promise<PronunciationFeedback> {
    validateParams({ originalPhrase, userAttempt }, "getPronunciationFeedback");
    return requestAI({
      prompt: buildPronunciationFeedbackPrompt(originalPhrase, userAttempt),
      responseSchema: PRONUNCIATION_SCHEMA,
    });
  }
}
