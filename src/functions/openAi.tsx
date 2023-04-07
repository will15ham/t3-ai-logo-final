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
// export default async function handler(req, res) {
//   const body = req.body;

//   try {
//     const { data } = await openAI(body);
//     const { Location } = await uploadFile(data[0]?.b64_json);
//     await insertToMongo(body.prompt, Location);
//     res.status(200).json({ s3Link: Location });
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ error: "Something went wrong" });
//   }
// }
