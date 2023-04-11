import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function openAI(prompt: string) {
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
    response_format: "b64_json",
  });

  return response;
}
