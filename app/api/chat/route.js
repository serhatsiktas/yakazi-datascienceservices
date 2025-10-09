import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  const completion = await client.chat.completions.create({
    model: "gpt-5",
    messages: [
      { role: "system", content: "Du bist der YAKAZI KI-Assistent. Antworte professionell, freundlich und klar, auf Deutsch." },
      { role: "user", content: message },
    ],
  });

  return new Response(
    JSON.stringify({ reply: completion.choices[0].message.content }),
    { status: 200 }
  );
}
