import OpenAI from "openai";
import { NextResponse } from "next/server";

// OpenAI-Client initialisieren
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    // Eingabe prüfen
    if (!message || message.trim() === "") {
      return NextResponse.json({
        reply: "Bitte stellen Sie eine konkrete Frage 😊",
      });
    }

    // Anfrage an OpenAI senden (neue API-Struktur)
    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      input: `Antworte auf Deutsch, freundlich und präzise: ${message}`,
    });

    // Antworttext extrahieren
    const reply = completion.output[0].content[0].text;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("YAKAZI KI-Fehler:", error);
    return NextResponse.json({
      reply: "⚠️ Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    });
  }
}
