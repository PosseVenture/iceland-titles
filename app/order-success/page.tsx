"use client";

// ─────────────────────────────────────────────────────────────────────────────
// order-success – Post-Stripe-checkout success page
// Reads ?session_id from URL, shows celebration + next steps
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Download, Map,
  Compass, ArrowRight, Leaf,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store";

// Sparkle positions for the celebration
const SPARKLES = [
  { top: "12%", left: "8%", delay: 0, size: "text-xl" },
  { top: "8%", left: "88%", delay: 0.2, size: "text-base" },
  { top: "20%", left: "55%", delay: 0.35, size: "text-sm" },
  { top: "75%", left: "15%", delay: 0.1, size: "text-lg" },
  { top: "80%", left: "82%", delay: 0.45, size: "text-xl" },
  { top: "55%", left: "5%", delay: 0.6, size: "text-sm" },
  { top: "60%", left: "92%", delay: 0.25, size: "text-base" },
];

function OrderSuccessContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const { clearCart } = useCartStore();

  // Clear cart once after successful payment
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // Clear cart once after successful payment
  useEffect(() => {
    clearCart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-ice-black flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* Aurora */}
      <div className="aurora-orb w-[600px] h-[500px] bg-spirit/7 top-0 left-1/2 -translate-x-1/2 -translate-y-1/3" aria-hidden="true" style={{ animationDelay: "0s" }} />
      <div className="aurora-orb w-[400px] h-[400px] bg-glacier/6 bottom-0 right-0" aria-hidden="true" style={{ animationDelay: "-8s" }} />
      <div className="grain-overlay" aria-hidden="true" />

      {/* Sparkles */}
      <div aria-hidden="true">
        {SPARKLES.map((s, i) => (
          <motion.span
            key={i}
            className={cn("absolute text-spirit/40 pointer-events-none select-none", s.size)}
            style={{ top: s.top, left: s.left }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: [0, 1, 0.4], scale: [0, 1.3, 1], rotate: 0 }}
            transition={{ delay: s.delay, duration: 0.8, ease: "backOut" }}
          >
            ✦
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg w-full text-center">

        {/* Success icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 14, stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-spirit/12 border-2 border-spirit/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-spirit" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="eyebrow justify-center mb-3">Order confirmed</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,4rem)] font-light text-white leading-[0.95] mb-4">
            Welcome to{" "}
            <em className="not-italic text-gradient-glacier">Snæfellsnes</em>
            ,<br />noble Jarl!
          </h1>
          <p className="font-body text-base text-white/50 leading-relaxed mb-3 max-w-sm mx-auto">
            Bárður Snæfellsás watches over your new plot.
            Your certificate and order details are on their way to your inbox.
          </p>

          {sessionId && (
            <p className="font-body text-xs text-white/25 mb-8">
              Order ref: <code className="text-white/40">{sessionId.slice(0, 20)}…</code>
            </p>
          )}
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="glass-card p-6 mb-6 text-left"
        >
          <p className="font-display text-sm font-semibold text-white mb-4">
            What happens next
          </p>
          <ol className="space-y-3">
            {[
              { icon: "📧", step: "Confirmation email sent to your inbox with receipt." },
              { icon: "📜", step: "Your personalised certificate will follow within 30 minutes (digital) or 2–3 days (physical)." },
              { icon: "📦", step: "Physical packs are lovingly assembled in Reykjavík and dispatched with tracking." },
              { icon: "📍", step: "GPS coordinates and What3Words address included — visit your plot any time." },
            ].map(({ icon, step }, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-base flex-shrink-0" aria-hidden="true">{icon}</span>
                <span className="font-body text-sm text-white/55 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/welcome"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl",
              "bg-glacier text-ice-black font-display font-semibold",
              "hover:bg-glacier-light hover:shadow-glacier transition-all btn-spirit"
            )}
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Go to Dashboard
          </Link>
          <Link
            href="/the-land/snaefellsnes"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl",
              "border border-white/15 text-white/65",
              "hover:border-white/30 hover:text-white transition-all font-body"
            )}
          >
            <Map className="w-4 h-4" aria-hidden="true" />
            Explore Your Reserve
          </Link>
        </motion.div>

        {/* Tours nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-white/35"
        >
          <Compass className="w-4 h-4 text-spirit/50" aria-hidden="true" />
          <span>
            Ready to visit?{" "}
            <Link href="/guided-tours" className="text-glacier hover:underline underline-offset-2">
              Book a guided tour
            </Link>
            {" "}— plot owners get 10% off.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">Loading your order details...</div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}
