// ─────────────────────────────────────────────────────────────────────────────
// 404 Not Found — Icelandic Titles
// The huldufólk have hidden this page...
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import Link              from "next/link";
import { Home }          from "lucide-react";
import { cn }            from "@/lib/utils";

export const metadata: Metadata = {
  title: "404 — Page Not Found — Icelandic Titles",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ice-black flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">

      {/* Aurora orbs */}
      <div className="aurora-orb w-96 h-96 bg-aurora/8  top-0    right-0   -translate-y-1/3" aria-hidden="true" />
      <div className="aurora-orb w-80 h-80 bg-spirit/6 bottom-0 left-0    translate-y-1/3"  aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto">
        {/* Decorative */}
        <p className="font-display text-[120px] leading-none font-light text-white/6 select-none mb-0" aria-hidden="true">
          404
        </p>

        <div className="-mt-8 mb-8">
          <p className="font-display text-5xl mb-4" aria-hidden="true">🧝</p>
          <h1 className="font-display text-3xl font-light text-white mb-3">
            The huldufólk hid this page
          </h1>
          <p className="font-body text-base text-white/45 leading-relaxed mb-2">
            The hidden people of Snæfellsnes have spirited this page away into
            their lava-rock dwelling.
          </p>
          <p className="font-body text-sm text-white/30 italic">
            Even Bárður Snæfellsás cannot help you find it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl",
              "bg-glacier text-ice-black font-display font-semibold",
              "hover:bg-glacier-light transition-colors btn-spirit"
            )}
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Return Home
          </Link>
          <Link
            href="/buy-a-plot"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl",
              "border border-white/15 text-white/70 hover:text-white hover:border-white/30",
              "font-body font-semibold transition-all"
            )}
          >
            ❄ Claim a Plot Instead
          </Link>
        </div>
      </div>
    </div>
  );
}
