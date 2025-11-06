import { Type } from "@google/genai";

export const TONE_EXAMPLES_SCHEMA = {
    type: Type.OBJECT,
    properties: {
      examples: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            tone: { 
              type: Type.STRING, 
              enum: ["Informal", "Direct", "Diplomatic", "Formal"] 
            },
            example: { type: Type.STRING }
          },
          required: ["tone", "example"]
        }
      }
    },
    required: ["examples"]
};
