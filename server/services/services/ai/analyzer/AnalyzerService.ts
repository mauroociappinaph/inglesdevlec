import { requestAI } from '../core/requestAI';
import { validateParams, sanitizeText } from '../../../utils';
import { ANALYZER_SCHEMA } from './analyzerSchemas';

export class AnalyzerService {
  async analyzeDocument(documentContent: string): Promise<{
    summary: string;
    vocab: { term: string; definition: string }[];
    examples: string[];
  }> {
    validateParams({ documentContent }, "analyzeDocument");

    const prompt = `
Analyze this technical documentation and extract:
1. A concise summary
2. Key technical vocabulary with definitions
3. Practical code examples

Document:
${sanitizeText(documentContent)}
`;

    return requestAI({
      prompt,
      responseSchema: ANALYZER_SCHEMA,
    });
  }
}
