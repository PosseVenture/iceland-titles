"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Hero — Icelandic Titles Homepage
// Massive Snæfellsjökull background · aurora orbs · staggered Framer Motion
// Tagline with Bárður + huldufólk mention · Trustpilot bar · dual CTAs
// ─────────────────────────────────────────────────────────────────────────────
import { useRef }                           from "react";
import Image                                from "next/image";
import Link                                 from "next/link";
import { motion, useScroll, useTransform }  from "framer-motion";
import { ArrowRight, Star, Shield }         from "lucide-react";
import { cn }                               from "@/lib/utils";
import { SITE }                             from "@/lib/data";

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
      animate={{ opacity: 1, y:  0  }}
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
        {/* Half-star (0.7) — visually filled 70% */}
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
    target:  containerRef,
    offset:  ["start start", "end start"],
  });

  // Parallax: image scrolls up slower than the viewport
  const imageY    = useTransform(scrollYProgress, [0, 1], ["0%",  "25%"]);
  const contentY  = useTransform(scrollYProgress, [0, 1], ["0%",  "15%"]);
  const opacity   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      aria-label="Hero — Become a Jarl, Lord or Lady of Snæfellsnes"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image ─────────────────────────────────────────────
          Photo: Vivid green and purple northern lights above snow-capped glacier
          Unsplash: photo-1519681393784-d120267933ba
          ────────────────────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[115%] -top-[8%]"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=85"
          alt="Vivid green and purple northern lights dancing above the snow-capped Snæfellsjökull glacier at night, Snæfellsnes Peninsula, Iceland — mystical energy centre and guardian spirit landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQQCAgMBAAAAAAAAAAAAAQIDBBEABSExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Arb1ue0NK6bDJFLJkTZcSGwlS1+VKQlI/LUPbUabY2hVhQzWNWSW4zWMt0sNK8LAbQVJHyCR+1rWtB//Z"
        />
        {/* Multi-layer overlay: darkens bottom, preserves glacier silhouette */}
        <div className="absolute inset-0 bg-gradient-to-t from-ice-black via-ice-black/55 to-ice-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ice-black/30 via-transparent to-transparent" />
      </motion.div>

      {/* ── Aurora orbs ─────────────────────────────────────────────────── */}
      <div aria-hidden="true">
        <div
          className="aurora-orb w-[700px] h-[500px] bg-aurora/8 -top-20 -right-40"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-orb w-[500px] h-[600px] bg-spirit/6 bottom-0 -left-40"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="aurora-orb w-[400px] h-[400px] bg-aurora-violet/7 top-1/3 left-1/3"
          style={{ animationDelay: "-14s" }}
        />
      </div>

      {/* ── Grain texture ────────────────────────────────────────────────── */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[72px]"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow justify-center mb-7"
        >
          Snæfellsnes Reserve · Iceland
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "font-display font-light leading-[0.92]",
            "text-[clamp(3rem,10vw,8rem)]",
            "text-white text-balance mb-6"
          )}
        >
          Become a{" "}
          <em className="not-italic text-gradient-glacier">Jarl</em>
          {", "}
          <span className="whitespace-nowrap">Lord or</span>
          <br className="hidden sm:block" />
          <em className="not-italic italic text-gradient-rune">Lady</em>
          {" of "}
          <span className="whitespace-nowrap">Snæfellsnes</span>
        </motion.h1>

        {/* Sub-headline with Bárður + huldufólk */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={cn(
            "font-body text-[1.1rem] md:text-[1.25rem] leading-relaxed",
            "text-white/55 max-w-2xl mx-auto mb-3 text-balance"
          )}
        >
          Claim your souvenir plot in the mystical Snæfellsnes Reserve —
          where guardian spirit{" "}
          <strong className="text-white/85 font-semibold">Bárður Snæfellsás</strong>
          {" "}watches from within the glacier and the{" "}
          <strong className="text-white/85 font-semibold">huldufólk</strong>
          {" "}dwell among ancient lava fields.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="font-body text-sm text-white/38 italic mb-10 max-w-xl mx-auto"
        >
          A great power and good spirit emanate from Snæfellsjökull —
          one of Earth's seven great energy centres.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary CTA */}
          <Link
            href="/buy-a-plot"
            className={cn(
              "group flex items-center gap-2.5",
              "px-8 py-4 rounded-xl",
              "bg-glacier text-ice-black",
              "font-display font-semibold text-lg",
              "hover:bg-glacier-light hover:shadow-glacier",
              "transition-all duration-300 btn-spirit",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier focus-visible:ring-offset-2 focus-visible:ring-offset-ice-black"
            )}
          >
            <span aria-hidden="true">❄</span>
            Become a Jarl Now
            <ArrowRight
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/the-land"
            className={cn(
              "flex items-center gap-2",
              "px-7 py-4 rounded-xl",
              "text-white/70 hover:text-white",
              "border border-white/15 hover:border-white/35",
              "font-body font-semibold text-base",
              "backdrop-blur-sm hover:bg-white/5",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ice-black"
            )}
          >
            Discover the Glacier
          </Link>
        </motion.div>

        {/* Trustpilot + trust indicators */}
        <TrustpilotBar />

        {/* Spirit sparkles decorative */}
        <div className="mt-10 flex items-center justify-center gap-8 opacity-30" aria-hidden="true">
          {["✦", "❄", "✦"].map((s, i) => (
            <span
              key={i}
              className="text-glacier text-sm animate-twinkle"
              style={{ animationDelay: `${i * 0.7}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
