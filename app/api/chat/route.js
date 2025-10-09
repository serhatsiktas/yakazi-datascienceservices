import OpenAI from "openai";
import { NextResponse } from "next/server";

// OpenAI-Client initialisieren
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || message.trim() === "") {
      return NextResponse.json({
        reply: "Bitte stellen Sie eine konkrete Frage 😊",
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-5", // oder "gpt-4o-mini" für günstigere Variante
      messages: [
        {
          role: "system",
          content:
            "Du bist der YAKAZI KI-Assistent. Antworte professionell, freundlich und klar auf Deutsch. Sprich in einem Ton, der sowohl technische Expertise als auch Verständnis für Unternehmensprozesse zeigt.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = completion.choices[0].message?.content || "Ich konnte leider keine Antwort generieren.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ Fehler im Yakazi Chat API:", error);
    return NextResponse.json(
      {
        reply:
          "Entschuldigung, es gab ein technisches Problem beim Abrufen der Antwort. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}

