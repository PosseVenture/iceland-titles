import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

/**
 * POST /api/checkout
 *
 * Creates a Stripe PaymentIntent for the given cart items.
 *
 * TODO: Uncomment and configure when going live:
 * 1. Add STRIPE_SECRET_KEY to .env.local
 * 2. npm install stripe
 * 3. Uncomment the Stripe import and logic below
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, currency = "eur" } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      );
    }

    // ── TODO: Uncomment for live Stripe integration ──────────────────────────
    //
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    //   apiVersion: "2024-11-20.acacia",
    // });
    //
    // const amount = items.reduce((sum: number, item: { price: number }) => sum + item.price, 0);
    // const amountInCents = Math.round(amount * 100);
    //
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amountInCents,
    //   currency: currency.toLowerCase(),
    //   automatic_payment_methods: { enabled: true },
    //   metadata: {
    //     items: JSON.stringify(items.map((i: { productId: string; reserveName: string }) => ({
    //       id: i.productId,
    //       reserve: i.reserveName,
    //     }))),
    //   },
    // });
    //
    // return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    // ────────────────────────────────────────────────────────────────────────

    // Mock response for development
    return NextResponse.json({
      clientSecret: "pi_test_mock_client_secret",
      message: "Mock payment intent — replace with real Stripe integration",
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
