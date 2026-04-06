// ─────────────────────────────────────────────────────────────────────────────
// HeroSkeleton — Icelandic Titles
// Skeleton structure for the homepage hero — fully built out in Part 2.
// Contains: aurora orbs, grain overlay, placeholder glacier image,
//           heading, tagline, CTA button, Trustpilot bar.
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import Link              from "next/link";
import { motion }        from "framer-motion";
import { ArrowRight }    from "lucide-react";
import { cn }            from "@/lib/utils";
import { SITE }          from "@/lib/data";

export function HeroSkeleton() {
  return (
    <section
      aria-label="Hero — Become a Jarl, Baron or Baroness of Eyri í Kollafirði"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ice-black"
    >
      {/* ── Background image placeholder ──────────────────────────────────
          TODO: Replace with next/image — priority + fill
          Unsplash query: "Snæfellsjökull glacier northern lights Iceland night"
          alt: "Mystical Snæfellsjökull glacier rising above Snæfellsnes Peninsula
                under the Northern Lights — home of guardian spirit Bárður Snæfellsás
                and the huldufólk hidden people"
          ─────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ice-navy via-ice-deep to-ice-black"
        aria-hidden="true"
      />

      {/* ── Aurora orbs ─────────────────────────────────────────────────── */}
      <div
        className="aurora-orb w-[600px] h-[400px] bg-aurora/10 top-0 right-0 -translate-y-1/4"
        aria-hidden="true"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="aurora-orb w-[500px] h-[500px] bg-spirit/7 bottom-0 left-0 translate-y-1/4"
        aria-hidden="true"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-orb w-[300px] h-[300px] bg-aurora-violet/8 top-1/2 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        style={{ animationDelay: "-12s" }}
      />

      {/* ── Grain texture ────────────────────────────────────────────────── */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="eyebrow justify-center mb-6">
            Vestfirðir Reserve · Iceland
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={cn(
            "font-display font-light leading-[0.95]",
            "text-[clamp(3rem,9vw,7.5rem)]",
            "text-white text-balance mb-6"
          )}
        >
          Become a{" "}
          <em className="italic font-light text-gradient-glacier not-italic">
            Jarl
          </em>
          <span className="text-white">, Lord</span>
          <br className="hidden sm:block" />
          <span className="text-white"> or Lady of </span>
          <em className="italic font-light text-gradient-rune not-italic">
            Snæfellsnes
          </em>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={cn(
            "font-body text-[1.15rem] md:text-[1.3rem] leading-relaxed",
            "text-white/55 max-w-2xl mx-auto mb-10 text-balance"
          )}
        >
          Claim your souvenir plot in the mystical Vestfirðir Reserve —
          where guardian spirit <strong className="text-white/80 font-semibold">Bárður Snæfellsás</strong> watches
          from within the glacier and the{" "}
          <strong className="text-white/80 font-semibold">huldufólk</strong> dwell among ancient lava fields.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/buy-a-plot"
            className={cn(
              "flex items-center gap-2.5",
              "px-8 py-4 rounded-xl",
              "bg-glacier text-ice-black",
              "font-display font-semibold text-lg",
              "hover:bg-glacier-light hover:shadow-glacier",
              "transition-all duration-300 btn-spirit"
            )}
          >
            ❄ Become a Jarl Now
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          <Link
            href="/the-land"
            className={cn(
              "flex items-center gap-2",
              "px-6 py-4 rounded-xl",
              "text-white/70 hover:text-white",
              "border border-white/15 hover:border-white/30",
              "font-body font-semibold text-base",
              "transition-all duration-200"
            )}
          >
            Discover the Reserve
          </Link>
        </motion.div>

        {/* Trustpilot bar — skeleton (populated in Part 2) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <div className="flex gap-0.5" aria-hidden="true">
            {[1,2,3,4,5].map((i) => (
              <div
                key={i}
                className="w-5 h-5 bg-[#00b67a] rounded-sm flex items-center justify-center"
              >
                <span className="text-white text-[10px]">★</span>
              </div>
            ))}
          </div>
          <span className="font-body text-sm text-white/60">
            <strong className="text-white/90">{SITE.trustpilot.score}</strong> out of 5 ·{" "}
            <a
              href={SITE.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              {SITE.trustpilot.count} reviews on Trustpilot
            </a>
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30">
          Scroll to explore
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-glacier/50 to-transparent animate-breathe" />
      </motion.div>
    </section>
  );
}
