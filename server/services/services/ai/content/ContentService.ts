import { requestAI } from '../core/requestAI';
import { ToneExample } from '../../../types';
import { validateParams } from '../../../utils';
import { TONE_EXAMPLES_SCHEMA } from './contentSchemas';
import { 
    buildComplexExplanationPrompt,
    buildGrammarExplanationPrompt,
    buildDebateScenarioPrompt,
    buildInterviewQuestionPrompt,
    buildToneExamplesPrompt,
    buildQuickHelpPrompt
} from './contentPrompts';

export class ContentService {
  async sendMessage(message: string, systemInstruction?: string, model: "FAST" | "PRO" = "FAST"): Promise<string> {
    validateParams({ message }, "sendMessage");
    return requestAI({ model, prompt: message, systemInstruction });
  }

  async getComplexExplanation(topic: string): Promise<string> {
    validateParams({ topic }, "getComplexExplanation");
    return requestAI({
      model: "PRO",
      prompt: buildComplexExplanationPrompt(topic),
      useThinking: true,
    });
  }

  async getGrammarExplanation(topic: string): Promise<string> {
    validateParams({ topic }, "getGrammarExplanation");
    return requestAI({
      model: "PRO",
      prompt: buildGrammarExplanationPrompt(topic),
      useThinking: true,
    });
  }

  async getDebateScenario(): Promise<string> {
    return requestAI({
      prompt: buildDebateScenarioPrompt(),
      useCache: true,
      cacheKey: "debate_scenario",
    });
  }

  async getInterviewQuestion(): Promise<string> {
    return requestAI({
      prompt: buildInterviewQuestionPrompt(),
      useCache: true,
      cacheKey: "interview_question",
    });
  }

  async getToneExamples(): Promise<ToneExample[]> {
    const result = await requestAI<{ examples: ToneExample[] }>({
      prompt: buildToneExamplesPrompt(),
      responseSchema: TONE_EXAMPLES_SCHEMA,
      useCache: true,
      cacheKey: "tone_examples",
    });
    return result.examples;
  }

  async getQuickHelp(text: string): Promise<string> {
    validateParams({ text }, "getQuickHelp");
    return requestAI({ prompt: buildQuickHelpPrompt(text) });
  }
}
