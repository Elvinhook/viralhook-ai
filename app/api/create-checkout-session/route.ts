import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { userId, email } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        price: "price_1TetB09Vl8qYMsrt5XhU720R",
        quantity: 1,
      },
    ],
    success_url: "https://viralhook-ai-df8h.vercel.app?success=true",
    cancel_url: "https://viralhook-ai-df8h.vercel.app?canceled=true",
    metadata: {
      userId,
    },
  });

  return NextResponse.json({ url: session.url });
}