"use client";
// ─────────────────────────────────────────────────────────────────────────────
// GuaranteeBanner — Trust strip for /buy-a-plot
// Free shipping · 90-day guarantee · Conservation · Secure payment
// ─────────────────────────────────────────────────────────────────────────────
import { motion }        from "framer-motion";
import { Shield, Package, Lock, Leaf } from "lucide-react";
import { cn }            from "@/lib/utils";

const PILLARS = [
  {
    icon:    <Package className="w-6 h-6 text-glacier" aria-hidden="true" />,
    title:   "Free Worldwide Shipping",
    body:    "Every order ships free — digital packs by email in minutes, physical gift boxes dispatched from Reykjavík within 2–3 days.",
    accent:  "border-glacier/20 hover:border-glacier/35",
  },
  {
    icon:    <Shield className="w-6 h-6 text-spirit" aria-hidden="true" />,
    title:   "90-Day Money-Back Guarantee",
    body:    "Not delighted? We'll refund you fully, no questions asked, within 90 days of purchase. Physical packs need not be returned.",
    accent:  "border-spirit/20 hover:border-spirit/35",
  },
  {
    icon:    <Leaf className="w-6 h-6 text-spirit" aria-hidden="true" />,
    title:   "Snæfellsnes Conservation",
    body:    "Every sale funds rewilding of the Snæfellsnes Reserve — native birch planting, Arctic fox protection, lava field preservation.",
    accent:  "border-spirit/20 hover:border-spirit/35",
  },
  {
    icon:    <Lock className="w-6 h-6 text-rune-gold" aria-hidden="true" />,
    title:   "Secure Stripe Checkout",
    body:    "Bank-grade encryption. Pay by card, PayPal, Apple Pay or Google Pay. Your data is never shared or stored insecurely.",
    accent:  "border-rune-gold/20 hover:border-rune-gold/35",
  },
];

export function GuaranteeBanner() {
  return (
    <section
      aria-label="Why buy from Icelandic Titles"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-ice-deep"
    >
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <p className="eyebrow justify-center mb-10">
          Why 18,240 Jarls trust us
        </p>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={cn(
                "glass-card p-6 flex flex-col gap-3",
                "border transition-all duration-300",
                p.accent
              )}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                {p.icon}
              </div>

              <h3 className="font-display text-base font-semibold text-white leading-tight">
                {p.title}
              </h3>
              <p className="font-body text-sm text-white/45 leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Payment logos row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <p className="font-body text-xs text-white/25 uppercase tracking-wider mr-2">
            Accepted payments:
          </p>
          {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"].map((m) => (
            <div
              key={m}
              className="px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] font-body text-xs text-white/30"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
