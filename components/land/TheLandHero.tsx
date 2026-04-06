"use client";
// ─────────────────────────────────────────────────────────────────────────────
// TheLandHero — /the-land page header (Vestfirðir version)
// ─────────────────────────────────────────────────────────────────────────────
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

export function TheLandHero() {
  return (
    <section
      aria-label="The Land — page header"
      className="relative pt-[72px] overflow-hidden bg-ice-navy"
    >
      {/* Aurora orbs */}
      <div aria-hidden="true">
        <div className="aurora-orb w-[700px] h-[500px] bg-glacier/7 -top-20 -right-20" style={{ animationDelay: "0s" }} />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-violet/6 bottom-0 left-0" style={{ animationDelay: "-11s" }} />
      </div>
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 font-body text-xs text-white/35">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white/70 transition-colors">
                <Home className="w-3 h-3" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
            <li aria-current="page" className="text-white/55">The Land</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">Eyri í Kollafirði · Vestfirðir</p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-light text-white leading-[0.95] mb-6">
            Where the{" "}
            <em className="not-italic text-gradient-glacier">ancient land</em>
            <br />meets the{" "}
            <em className="not-italic text-gradient-rune">hidden world</em>
          </h1>
          <p className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            At Eyri í Kollafirði in the Gufudalssveit valley of Vestfirðir, the land feels alive. 
            The Huldufólk are said to walk these shores, and on clear days Snæfellsjökull rises across the fjord like a silent guardian.
          </p>
        </motion.div>
      </div>
    </section>
  );
}