import OpenAI from "openai";

export async function POST(request: Request) {
  const { prompt } = await request.json();

    if (!prompt) {
      return new Response("No prompt provided", { status: 400 });
    }
    const openai = new OpenAI({
      apiKey: "",
    });

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
    });


    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
}
