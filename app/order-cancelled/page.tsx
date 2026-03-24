// ─────────────────────────────────────────────────────────────────────────────
// /order-cancelled — User clicked "back" on Stripe checkout
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import Link              from "next/link";
import { cn }            from "@/lib/utils";

export const metadata: Metadata = {
  title:  "Order Cancelled — Icelandic Titles",
  robots: { index: false, follow: false },
};

export default function OrderCancelledPage() {
  return (
    <div className="min-h-screen bg-ice-black flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="aurora-orb w-80 h-80 bg-glacier/5 top-0 right-0" aria-hidden="true" style={{ animationDelay: "0s" }} />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-sm">
        <p className="text-5xl mb-5" aria-hidden="true">🧊</p>
        <h1 className="font-display text-3xl font-light text-white mb-3">
          Order not completed
        </h1>
        <p className="font-body text-base text-white/45 mb-2 leading-relaxed">
          No payment was taken. Your cart is still intact — the glacier will wait.
        </p>
        <p className="font-body text-sm text-white/30 italic mb-8">
          Bárður Snæfellsás is patient.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/checkout"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl",
              "bg-glacier text-ice-black font-display font-semibold",
              "hover:bg-glacier-light transition-colors btn-spirit"
            )}
          >
            Try Again
          </Link>
          <Link
            href="/buy-a-plot"
            className="px-6 py-3 rounded-xl border border-white/15 text-white/60 hover:text-white hover:border-white/30 font-body transition-all"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
