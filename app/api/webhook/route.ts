// ─────────────────────────────────────────────────────────────────────────────
// POST /api/webhook — Stripe Webhook Handler
//
// Handles:
//   checkout.session.completed  → fulfil order (send certificate email, etc.)
//   payment_intent.payment_failed → notify customer
//
// Setup in production:
//   1. Install Stripe CLI: stripe login && stripe listen --forward-to localhost:3000/api/webhook
//   2. Copy the webhook secret to STRIPE_WEBHOOK_SECRET in .env.local
//   3. In Stripe Dashboard → Webhooks → Add endpoint → https://yourdomain.com/api/webhook
//      Select events: checkout.session.completed, payment_intent.payment_failed
// ─────────────────────────────────────────────────────────────────────────────
import { NextRequest, NextResponse } from "next/server";
import Stripe                         from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

// Disable body parsing — Stripe needs the raw body to verify signature
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body      = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook signature verification failed";
    console.error("Webhook signature error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  // ── Handle events ─────────────────────────────────────────────────────────
  try {
    switch (event.type) {

      // ── Order completed ─────────────────────────────────────────────────
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log("✓ Order completed:", {
          sessionId:   session.id,
          customerEmail: session.customer_details?.email,
          amount:      session.amount_total,
          currency:    session.currency,
          metadata:    session.metadata,
        });

        // TODO: Implement fulfilment:
        // 1. Look up order in your DB by session.id
        // 2. Generate personalised PDF certificate (Puppeteer/Chromium)
        // 3. Send confirmation email with certificate attached (Resend)
        // 4. For physical packs: create shipping label (EasyPost/Shippo)
        // 5. For digital packs: send download link immediately
        // 6. Mark order as fulfilled in DB

        // Example with Resend (uncomment and install resend):
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: process.env.RESEND_FROM!,
        //   to:   session.customer_details!.email!,
        //   subject: "Your Icelandic Titles certificate is ready",
        //   html: generateOrderConfirmationEmail(session),
        // });

        break;
      }

      // ── Payment failed ───────────────────────────────────────────────────
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        console.warn("✗ Payment failed:", {
          id:      paymentIntent.id,
          amount:  paymentIntent.amount,
          reason:  paymentIntent.last_payment_error?.message,
        });

        // TODO: Send payment failure notification to customer if email is known
        break;
      }

      // ── Refund issued ────────────────────────────────────────────────────
      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        console.log("Refund issued:", charge.id, charge.amount_refunded);

        // TODO: Update order status in DB to "refunded"
        break;
      }

      default:
        // Unhandled event — ignore
        console.log("Unhandled webhook event:", event.type);
    }

    return NextResponse.json({ received: true });

  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }
}
