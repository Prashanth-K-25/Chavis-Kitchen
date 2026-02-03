
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getKitchenSlogan = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Generate a short, 1-sentence marketing slogan for a restaurant called "Chavi\'s Kitchen". The core vibe is "Crave. Eat. Repeat." but make it sound inviting and professional.',
      config: {
        temperature: 0.8,
      }
    });
    return response.text?.trim() || "Crave the flavor, eat with joy, and repeat the memories.";
  } catch (error) {
    return "Crave. Eat. Repeat.";
  }
};

export const getAIPun = async (foodName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a very short, funny food pun related to this dish: ${foodName}. Make it witty.`,
      config: {
        temperature: 0.8,
      }
    });
    return response.text?.trim() || "Chef's kiss choice!";
  } catch (error) {
    return "Simply delicious!";
  }
};
