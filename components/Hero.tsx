"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Hero — Icelandic Titles Homepage (Vestfirðir version)
// Massive fjord background · aurora orbs · staggered Framer Motion
// Tagline with Huldufólk + Snæfellsjökull view · Trustpilot bar · dual CTAs
// ─────────────────────────────────────────────────────────────────────────────
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";

// ─── Animated sparkle for CTAs ───────────────────────────────────────────────
function SpiritSparkle({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-block animate-twinkle text-spirit", className)}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}

// ─── Trustpilot rating bar ────────────────────────────────────────────────────
function TrustpilotBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {/* Stars */}
      <div className="flex gap-0.5" role="img" aria-label="4.7 out of 5 stars on Trustpilot">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm" aria-hidden="true">
            <Star className="w-3 h-3 text-white fill-white" />
          </div>
        ))}
        <div className="relative w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm overflow-hidden" aria-hidden="true">
          <Star className="w-3 h-3 text-white fill-white" />
          <div className="absolute right-0 top-0 bottom-0 w-[30%] bg-white/20" />
        </div>
      </div>
      <span className="font-body text-sm text-white/65">
        <strong className="text-white font-semibold">{SITE.trustpilot.score}</strong>
        {" "}out of 5
      </span>
      <span className="hidden sm:inline text-white/20">·</span>
      <a
        href={SITE.trustpilot.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-sm text-white/50 hover:text-white underline underline-offset-2 transition-colors"
      >
        {SITE.trustpilot.count} verified reviews
      </a>
      <span className="hidden sm:inline text-white/20">·</span>
      <div className="flex items-center gap-1.5 font-body text-sm text-white/50">
        <Shield className="w-3.5 h-3.5 text-spirit" aria-hidden="true" />
        90-day guarantee
      </div>
    </motion.div>
  );
}

// ─── Scroll-down indicator ────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span className="font-body text-[10px] tracking-[0.22em] uppercase text-white/28">
        Scroll to explore
      </span>
      <div className="relative w-px h-12">
        <div className="absolute inset-0 bg-gradient-to-b from-glacier/60 to-transparent animate-breathe" />
      </div>
    </motion.div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      aria-label="Hero — Become a Jarl, Baron or Baroness of Eyri í Kollafirði"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image — Westfjords fjord with Snæfellsjökull view */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[115%] -top-[8%]"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Wild fjord coastline of Eyri í Kollafirði in Vestfirðir with Snæfellsjökull visible across the water"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ice-black via-ice-black/60 to-ice-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ice-black/30 via-transparent to-transparent" />
      </motion.div>

      {/* Aurora orbs */}
      <div aria-hidden="true">
        <div className="aurora-orb w-[700px] h-[500px] bg-aurora/8 -top-20 -right-40" style={{ animationDelay: "0s" }} />
        <div className="aurora-orb w-[500px] h-[600px] bg-spirit/6 bottom-0 -left-40" style={{ animationDelay: "-7s" }} />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-violet/7 top-1/3 left-1/3" style={{ animationDelay: "-14s" }} />
      </div>

      <div className="grain-overlay" aria-hidden="true" />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[72px]"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow justify-center mb-7"
        >
          Eyri í Kollafirði · Vestfirðir
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "font-display font-light leading-[0.92]",
            "text-[clamp(3rem,10vw,8rem)]",
            "text-white text-balance mb-6"
          )}
        >
          Become a{" "}
          <em className="not-italic text-gradient-glacier">Jarl</em>,{" "}
          <span className="whitespace-nowrap">Baron or</span>
          <br className="hidden sm:block" />
          <em className="not-italic italic text-gradient-rune">Baroness</em>
          {" of "}
          <span className="whitespace-nowrap">Eyri í Kollafirði</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={cn(
            "font-body text-[1.1rem] md:text-[1.25rem] leading-relaxed",
            "text-white/55 max-w-2xl mx-auto mb-3 text-balance"
          )}
        >
          Claim your souvenir plot in the wild Gufudalssveit valley of Vestfirðir — 
          where the Huldufólk roam the mist and the glacial crown of Snæfellsjökull watches from across the fjord.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="font-body text-sm text-white/38 italic mb-10 max-w-xl mx-auto"
        >
          A great power and good spirit emanate from this ancient land.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/buy-a-plot"
            className={cn(
              "group flex items-center gap-2.5",
              "px-8 py-4 rounded-xl",
              "bg-glacier text-ice-black",
              "font-display font-semibold text-lg",
              "hover:bg-glacier-light hover:shadow-glacier",
              "transition-all duration-300 btn-spirit"
            )}
          >
            <span aria-hidden="true">❄</span>
            Become a Jarl Now
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/the-land"
            className={cn(
              "flex items-center gap-2",
              "px-7 py-4 rounded-xl",
              "text-white/70 hover:text-white",
              "border border-white/15 hover:border-white/35",
              "font-body font-semibold text-base",
              "backdrop-blur-sm hover:bg-white/5",
              "transition-all duration-200"
            )}
          >
            Discover the Westfjords
          </Link>
        </motion.div>

        <TrustpilotBar />
      </motion.div>

      <ScrollIndicator />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ice-black to-transparent pointer-events-none" />
    </section>
  );
}