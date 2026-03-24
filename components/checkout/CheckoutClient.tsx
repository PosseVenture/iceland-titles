"use client";
// ─────────────────────────────────────────────────────────────────────────────
// CheckoutClient — /checkout page
// Renders cart summary + Stripe Checkout button + PayPal alternative
// Uses the /api/checkout server route to create a Stripe session
// ─────────────────────────────────────────────────────────────────────────────
import { useState }                from "react";
import Link                        from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe }              from "@stripe/stripe-js";
import {
  ShoppingCart, ArrowRight, ArrowLeft, Shield,
  Package, Lock, Leaf, Check,
} from "lucide-react";
import { cn, formatPrice }         from "@/lib/utils";
import { useCartStore }            from "@/lib/store";

// Stripe promise — singleton, safe to call outside component
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

// ─── Order summary line ───────────────────────────────────────────────────────
function OrderLine({
  label,
  value,
  highlight = false,
  sub,
}: {
  label:      string;
  value:      string;
  highlight?: boolean;
  sub?:       string;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-4", highlight && "pt-3 border-t border-white/[0.07]")}>
      <div>
        <p className={cn("font-body text-sm", highlight ? "font-semibold text-white/80" : "text-white/50")}>
          {label}
        </p>
        {sub && <p className="font-body text-xs text-white/30 mt-0.5">{sub}</p>}
      </div>
      <span className={cn("font-display flex-shrink-0", highlight ? "text-xl text-glacier" : "text-sm text-white/65")}>
        {value}
      </span>
    </div>
  );
}

// ─── PayPal button stub ───────────────────────────────────────────────────────
function PayPalButton({ total, currency }: { total: number; currency: string }) {
  // TODO: Integrate @paypal/react-paypal-js for full PayPal SDK
  // Install: npm i @paypal/react-paypal-js
  // Wrap app in <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
  // Then use <PayPalButtons createOrder={...} onApprove={...} />

  return (
    <button
      type="button"
      onClick={() => {
        // TODO: Replace with real PayPal SDK integration
        alert("PayPal integration — add @paypal/react-paypal-js and your Client ID to .env.local");
      }}
      className={cn(
        "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl",
        "bg-[#FFC439] hover:bg-[#FFB800] text-[#003087]",
        "font-body font-bold text-base",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC439] focus-visible:ring-offset-2 focus-visible:ring-offset-ice-deep"
      )}
      aria-label={`Pay with PayPal — ${formatPrice(total, currency as "EUR" | "USD" | "GBP")}`}
    >
      {/* PayPal wordmark */}
      <span className="font-black text-[#003087] text-lg leading-none">Pay</span>
      <span className="font-black text-[#009cde] text-lg leading-none">Pal</span>
    </button>
  );
}

// ─── Main checkout component ──────────────────────────────────────────────────
export function CheckoutClient() {
  const { items, currency, subtotal, clearCart } = useCartStore();
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const total     = subtotal();
  const itemCount = items.reduce((n, i) => n + i.quantity, 0);
  const hasPhysical = items.some((i) => i.deliveryType === "physical");

  // ── Stripe checkout ─────────────────────────────────────────────────────────
  async function handleStripeCheckout() {
    if (!items.length) return;
    setLoading(true);
    setError(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;

      const res = await fetch("/api/checkout", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productName:   item.productName,
            titleStyle:    item.titleStyle,
            recipientName: item.recipientName,
            price:         item.price,
            currency,
            quantity:      item.quantity,
            addOns:        item.addOns,
            deliveryType:  item.deliveryType,
          })),
          currency,
          successUrl: `${baseUrl}/order-success`,
          cancelUrl:  `${baseUrl}/checkout`,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe failed to load");

      // Use the direct URL redirect (simplest approach)
      if (data.url) {
        window.location.href = data.url;
      } else {
        await stripe.redirectToCheckout({ sessionId: data.sessionId });
      }

    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setLoading(false);
    }
  }

  // ── Empty cart state ────────────────────────────────────────────────────────
  if (!items.length) {
    return (
      <div className="min-h-screen bg-ice-black pt-[72px] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <p className="text-5xl mb-5" aria-hidden="true">🛒</p>
          <h1 className="font-display text-3xl font-light text-white mb-3">
            Your cart is empty
          </h1>
          <p className="font-body text-white/45 mb-7 leading-relaxed">
            You need to add a souvenir plot before checking out.
          </p>
          <Link
            href="/buy-a-plot"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-glacier text-ice-black font-display font-semibold hover:bg-glacier-light transition-colors btn-spirit"
          >
            ❄ Browse Souvenir Plots
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ice-black pt-[72px]">

      {/* Page header */}
      <div className="relative bg-ice-navy overflow-hidden">
        <div className="aurora-orb w-[400px] h-[300px] bg-glacier/6 top-0 right-0" aria-hidden="true" style={{ animationDelay: "0s" }} />
        <div className="grain-overlay" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-ice-black to-transparent pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 font-body text-xs text-white/35">
              <li><Link href="/buy-a-plot" className="hover:text-white/60 transition-colors">Shop</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-white/55">Checkout</li>
            </ol>
          </nav>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-tight">
            Complete your{" "}
            <em className="not-italic text-gradient-glacier">order</em>
          </h1>
        </div>
      </div>

      {/* Main content */}
      <main
        id="checkout-content"
        aria-label="Checkout"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">

          {/* ── Left: payment options ─────────────────────────────── */}
          <div className="space-y-5">

            {/* Stripe card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <Lock className="w-4 h-4 text-glacier" aria-hidden="true" />
                <h2 className="font-display text-lg font-semibold text-white">
                  Secure Checkout
                </h2>
                <span className="ml-auto font-body text-xs text-white/35 flex items-center gap-1">
                  <Shield className="w-3 h-3" aria-hidden="true" />
                  256-bit SSL
                </span>
              </div>

              {/* Error message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{    opacity: 0, height: 0 }}
                    role="alert"
                    className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 font-body text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stripe button */}
              <button
                type="button"
                onClick={handleStripeCheckout}
                disabled={loading}
                aria-busy={loading}
                className={cn(
                  "w-full flex items-center justify-center gap-2.5 py-4 rounded-xl",
                  "font-display font-semibold text-base",
                  "transition-all duration-200 btn-spirit",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier focus-visible:ring-offset-2 focus-visible:ring-offset-ice-deep",
                  loading
                    ? "bg-glacier/50 text-ice-black/50 cursor-not-allowed"
                    : "bg-glacier text-ice-black hover:bg-glacier-light hover:shadow-glacier"
                )}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Redirecting to Stripe…
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" aria-hidden="true" />
                    Pay with Card — {formatPrice(total, currency)}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="font-body text-xs text-white/25 text-center mt-3">
                Visa · Mastercard · Amex · Apple Pay · Google Pay
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-white/[0.07]" />
                <span className="font-body text-xs text-white/25">or pay with</span>
                <div className="flex-1 h-px bg-white/[0.07]" />
              </div>

              {/* PayPal */}
              <PayPalButton total={total} currency={currency} />

              <p className="font-body text-xs text-white/20 text-center mt-3">
                PayPal · Pay Later available in supported countries
              </p>
            </motion.div>

            {/* Back to cart */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => useCartStore.getState().openCart()}
                className="flex items-center gap-2 font-body text-sm text-white/40 hover:text-glacier transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to cart
              </button>
              <p className="font-body text-xs text-white/25">
                90-day money-back guarantee
              </p>
            </div>
          </div>

          {/* ── Right: order summary ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0  }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <ShoppingCart className="w-4 h-4 text-glacier" aria-hidden="true" />
                <h2 className="font-display text-base font-semibold text-white">
                  Order Summary
                </h2>
                <span className="ml-auto font-body text-xs text-white/35">
                  {itemCount} item{itemCount !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-9 h-9 rounded-lg bg-glacier/10 border border-glacier/15 flex items-center justify-center flex-shrink-0 text-base" aria-hidden="true">
                      ❄
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-semibold text-white/85 truncate">
                        {item.titleStyle} {item.recipientName}
                      </p>
                      <p className="font-body text-xs text-white/40 truncate">
                        {item.productName}
                        {item.quantity > 1 && ` × ${item.quantity}`}
                      </p>
                      {item.addOns.map((ao) => (
                        <p key={ao.addOnId} className="font-body text-[11px] text-spirit/60">
                          + {ao.name}
                        </p>
                      ))}
                    </div>
                    <span className="font-display text-sm text-glacier flex-shrink-0">
                      {formatPrice(
                        item.price * item.quantity + item.addOns.reduce((s, a) => s + a.price, 0),
                        currency
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2.5">
                <OrderLine label="Subtotal" value={formatPrice(total, currency)} />
                <OrderLine label="Shipping" value="Free" sub="Worldwide · 2–3 days dispatch" />
                <OrderLine label="VAT" value="Included" />
                <OrderLine label="Total" value={formatPrice(total, currency)} highlight />
              </div>
            </div>

            {/* Trust badges */}
            <div className="glass-card p-4 space-y-2.5">
              {[
                { icon: <Shield className="w-3.5 h-3.5 text-glacier" aria-hidden="true" />, text: "90-day unconditional money-back guarantee" },
                { icon: <Package className="w-3.5 h-3.5 text-spirit"  aria-hidden="true" />, text: "Free worldwide shipping from Reykjavík" },
                { icon: <Lock    className="w-3.5 h-3.5 text-rune-gold" aria-hidden="true" />, text: "Bank-grade encryption via Stripe" },
                { icon: <Leaf    className="w-3.5 h-3.5 text-spirit"  aria-hidden="true" />, text: "Purchase funds Snæfellsnes conservation" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  {icon}
                  <span className="font-body text-xs text-white/45">{text}</span>
                </div>
              ))}
            </div>

            {hasPhysical && (
              <p className="font-body text-xs text-white/30 text-center leading-relaxed">
                Physical gift boxes dispatched within 2–3 working days.
                Delivery 3–18 days depending on destination.
              </p>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
