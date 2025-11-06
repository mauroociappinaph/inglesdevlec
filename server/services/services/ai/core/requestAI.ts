import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";
import { SimpleCache } from './cache';
import { MODELS, CONFIG, API_KEY } from '../../../config';
import { extractJSON } from '../../../utils';

const ai = new GoogleGenAI({ apiKey: API_KEY! });
const cache = new SimpleCache<any>();

export interface AIRequestOptions {
  model?: keyof typeof MODELS;
  prompt: string;
  responseSchema?: any;
  useThinking?: boolean;
  systemInstruction?: string;
  useCache?: boolean;
  cacheKey?: string;
  isAudio?: boolean;
  audioConfig?: any;
}

export async function requestAI<T = string>(options: AIRequestOptions): Promise<T> {
  const {
    model = "FAST",
    prompt,
    responseSchema,
    useThinking = false,
    systemInstruction,
    useCache = false,
    cacheKey,
    isAudio = false,
    audioConfig,
  } = options;

  if (useCache && cacheKey) {
    const cached = cache.get(cacheKey);
    if (cached) return cached as T;
  }

  try {
    const config = buildConfig(responseSchema, useThinking, systemInstruction, isAudio, audioConfig);
    const requestPayload = buildRequestPayload(prompt, model, config, isAudio);
    
    const response = await ai.models.generateContent(requestPayload);

    const result = processResponse(response, responseSchema, isAudio);

    if (useCache && cacheKey) {
      cache.set(cacheKey, result);
    }

    return result as T;
  } catch (error: any) {
    console.error(`AI Request Error [${model}]:`, error);
    throw new Error(`Failed to process AI request: ${error.message}`);
  }
}

function buildConfig(
  responseSchema: any,
  useThinking: boolean,
  systemInstruction: string | undefined,
  isAudio: boolean,
  audioConfig: any
) {
  const config: any = {};
  
  if (responseSchema) {
    config.responseMimeType = "application/json";
    config.responseSchema = responseSchema;
  }
  
  if (useThinking) {
    config.thinkingConfig = { thinkingBudget: CONFIG.THINKING_BUDGET };
  }
  
  if (systemInstruction) {
    config.systemInstruction = systemInstruction;
  }
  
  if (isAudio) {
    config.responseModalities = [Modality.AUDIO];
    if (audioConfig) {
      config.speechConfig = audioConfig;
    }
  }

  return config;
}

function buildRequestPayload(
  prompt: string,
  model: keyof typeof MODELS,
  config: any,
  isAudio: boolean
) {
  const requestPayload: any = {
    model: MODELS[model],
  };

  if (isAudio) {
    requestPayload.contents = [{ parts: [{ text: prompt }] }];
  } else {
    requestPayload.contents = prompt;
  }
  
  if (Object.keys(config).length > 0) {
    requestPayload.config = config;
  }

  return requestPayload;
}

function processResponse(response: GenerateContentResponse, responseSchema: any, isAudio: boolean) {
  if (isAudio) {
    const audioData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!audioData) {
      throw new Error("No audio data received from API");
    }
    return audioData;
  }

  return responseSchema ? extractJSON(response.text) : response.text;
}
