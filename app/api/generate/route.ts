import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("GROQ KEY:", process.env.GROQ_API_KEY);
    const body = await req.json();

    const hookCount = body.plan ==="pro" ? 50 : 10;

    const proRules =
  body.plan === "pro"
    ? `
Pro quality rules:
- Use stronger curiosity gaps
- Use more emotional tension
- Use more controversy
- Avoid weak generic hooks
- Every hook must feel different
- Make them sound like high-performing viral short-form content
`
    : "";

    const prompt = `
    You are the world's best viral hook writer.

Generate ${hookCount} highly viral hooks.

if plan is pro, make the hooks stronger, more unique and more advanced.
Hooks must sound like top TikTok, Instagram Reels and YouTube Shorts creators.

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
Avoid generic hooks.

Never use:
- Die Wahrheit über...
- Das Geheimnis hinter...
- Was niemand dir sagt...
- Warum du...
more than once.

Hooks must sound like top-performing TikTok creators.

Create tension, curiosity and emotion.

Bad:
Die Wahrheit über Hautpflege, die niemand hören will

Good:
Diese eine Gewohnheit lässt deine Haut täglich altern

Bad:
Warum 99% aller Routinen fehlerhaft sind

Good:
Ich habe 3 Jahre Hautpflege falsch gemacht
- Every hook must use a different structure 
- Never repeat the same opening pattern 
- Generate a mix of curiosity, fear, authority, controversy, and surprise hooks
- Avoid generic phrases 
- Each hook must feel unique 
${proRules}

Every hook must use a different angle.

Use these hook types:
1. Curiosity
2. Secret
3. Mistake
4. Warning
5. Contrarian
6. Shocking fact
7. Myth busting
8. Story
9. Authority
10. Transformation

Do not repeat hook structures.
Do not start multiple hooks with the same words.
Every hook must feel completely different.

Good hooks:
- Warum 90% aller Hundebesitzer Aggression verschlimmern
- Der Hundetrainingsfehler, der deinen Hund ungehorsam macht
- Was Hundetrainer dir über Aggression verschweigen
- Die Wahrheit über Hundetraining, die niemand hören will
- Dieser Fehler zerstört jede Beziehung zu deinem Hund
- Niemand spricht über diesen Fehler
- Das würde dir kein Experte freiwillig sagen
- Ich habe das jahrelang falsch gemacht
- Der wahre Grund überrascht die meisten
- Die meisten Menschen merken das zu spät
- Diese Gewohnheit zerstört deine Ergebnisse
- Warum fast alle hier scheitern
- Das passiert, wenn du damit aufhörst
- Der Fehler kostet dich mehr als du denkst
- Ich wünschte, ich hätte das früher gewusst

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