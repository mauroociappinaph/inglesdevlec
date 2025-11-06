import { Type } from "@google/genai";

export const ANALYZER_SCHEMA = {
    type: Type.OBJECT,
    properties: {
      summary: { type: Type.STRING },
      vocab: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            term: { type: Type.STRING },
            definition: { type: Type.STRING }
          },
          required: ["term", "definition"]
        }
      },
      examples: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ["summary", "vocab", "examples"]
};
