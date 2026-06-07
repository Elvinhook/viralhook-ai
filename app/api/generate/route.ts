import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("GROQ KEY:", process.env.GROQ_API_KEY);
    const body = await req.json();

    const hookCount = body.plan ==="pro" ? 50 : 10;

    const prompt = `
    You are the world's best viral hook writer.

Generate ${hookCount} viral hooks.

Topic: ${body.topic}
Platform: ${body.platform}
Language: ${body.language}
Niche: ${body.niche}
Style: ${body.style}

Rules:
- Write only in the selected language
- Maximum 12 words
- Every hook must create curiosity
- Every hook must create emotion
- Every hook must be specific
- Never use generic templates
- Never use placeholders
- Never explain
- No hashtags
- No emojis

Good hooks:
- Warum 90% aller Hundebesitzer Aggression verschlimmern
- Der Hundetrainingsfehler, der deinen Hund ungehorsam macht
- Was Hundetrainer dir über Aggression verschweigen
- Die Wahrheit über Hundetraining, die niemand hören will
- Dieser Fehler zerstört jede Beziehung zu deinem Hund

Return only a numbered list.
    `;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("FULL DATA:", data);

console.log("GROQ RESPONSE:", JSON.stringify(data));

    return NextResponse.json({
      result: data.choices?.[0]?.message?.content || "No response",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate hooks" },
      { status: 500 }
    );
  }
}