import { requestAI } from '../core/requestAI';
import { validateParams } from '../../../utils';

export class AudioService {
  async generateSpeech(text: string, multiSpeakerVoiceConfig?: any): Promise<string> {
    validateParams({ text }, "generateSpeech");

    return requestAI({
      model: "TTS",
      prompt: text,
      isAudio: true,
      audioConfig: multiSpeakerVoiceConfig ? { multiSpeakerVoiceConfig } : undefined,
    });
  }
}
