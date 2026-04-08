export interface GenerateResult {
  text: string;
  finishReason?: string;
}

export interface AIProvider {
  name: string;
  id: string;
  generate: (imageBuffer: Buffer, prompt: string) => Promise<GenerateResult>;
  isAvailable: () => boolean;
}
