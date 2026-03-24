// ─────────────────────────────────────────────────────────────────────────────
// POST /api/checkout — Create a Stripe Checkout Session
// Accepts: { items, currency, successUrl, cancelUrl }
// Returns: { sessionId, url }
// ─────────────────────────────────────────────────────────────────────────────
import { NextRequest, NextResponse } from "next/server";
import Stripe                         from "stripe";

// Initialise Stripe with the secret key (server-only — never exposed to client)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
  typescript:  true,
});

interface LineItemPayload {
  productName:   string;
  titleStyle:    string;
  recipientName: string;
  price:         number;       // in major currency units (e.g. 69 for €69)
  currency:      string;       // "EUR" | "USD" | "GBP"
  quantity:      number;
  addOns: Array<{ name: string; price: number }>;
  deliveryType:  "digital" | "physical";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      items:      LineItemPayload[];
      currency:   string;
      successUrl: string;
      cancelUrl:  string;
    };

    const { items, currency, successUrl, cancelUrl } = body;

    if (!items?.length) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    // Build Stripe line_items from cart
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    for (const item of items) {
      // Main product
      lineItems.push({
        price_data: {
          currency:     currency.toLowerCase(),
          unit_amount:  Math.round(item.price * 100),  // convert to cents
          product_data: {
            name:        `${item.titleStyle} of Snæfellsnes — ${item.productName}`,
            description: `Souvenir plot certificate for ${item.recipientName}. ${item.deliveryType === "digital" ? "Digital delivery." : "Physical gift box — shipped from Reykjavík."}`,
            metadata: {
              recipient:    item.recipientName,
              titleStyle:   item.titleStyle,
              deliveryType: item.deliveryType,
            },
            images: [
              // Glacier image for Stripe checkout page
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
            ],
          },
        },
        quantity: item.quantity,
      });

      // Add-ons as separate line items
      for (const addon of item.addOns) {
        lineItems.push({
          price_data: {
            currency:    currency.toLowerCase(),
            unit_amount: Math.round(addon.price * 100),
            product_data: {
              name:        addon.name,
              description: `Add-on for ${item.recipientName}'s souvenir plot`,
            },
          },
          quantity: item.quantity,
        });
      }
    }

    // Determine shipping requirement
    const hasPhysical = items.some((i) => i.deliveryType === "physical");

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items:  lineItems,
      mode:        "payment",
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  cancelUrl,

      // Collect shipping address only for physical orders
      shipping_address_collection: hasPhysical
        ? { allowed_countries: ["GB", "DE", "FR", "IE", "NL", "SE", "NO", "DK", "FI", "IS", "US", "CA", "AU", "NZ", "JP"] }
        : undefined,

      // Allow promo codes
      allow_promotion_codes: true,

      // Custom branding text
      custom_text: {
        submit: {
          message: "Your order will be fulfilled by Icelandic Titles ehf. in Reykjavík, Iceland. By completing this purchase you confirm you understand this is a novelty souvenir gift only.",
        },
      },

      // Metadata for webhook processing
      metadata: {
        itemCount:    String(items.length),
        hasPhysical:  String(hasPhysical),
        currency,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url:       session.url,
    });

  } catch (err) {
    console.error("Stripe checkout error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
