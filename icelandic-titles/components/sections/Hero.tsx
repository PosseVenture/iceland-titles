"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Play, Star } from "lucide-react";
import { SITE } from "@/lib/data";

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Trust Badge data ─────────────────────────────────────────────────────────
const TRUST_BADGES = [
  { icon: "⭐", label: `${SITE.trustpilot.rating}/5 · ${(SITE.trustpilot.reviewCount / 1000).toFixed(0)}k+ Reviews` },
  { icon: "🌍", label: "Free Worldwide Shipping" },
  { icon: "🛡", label: "90-Day Money-Back Guarantee" },
  { icon: "🌿", label: "Conservation-Backed" },
] as const;

// ─── Hero Component ───────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background ── */}
      <div
        className="absolute inset-0 z-0"
        role="img"
        aria-label="Aurora borealis dancing over a frozen Icelandic landscape at night"
      >
        {/*
          TODO: Replace gradient with actual Iceland hero image
          <Image
            src="https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=1920&q=90"
            alt="Northern lights in vivid greens and purples rippling over a frozen Icelandic lake surrounded by snowy mountains"
            fill
            priority
            className="object-cover object-center opacity-40"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
          />
        */}

        {/* Gradient fallback / overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040812] via-[#071228] to-[#0A1A35]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ice-black via-transparent to-transparent opacity-80" />

        {/* Aurora orbs */}
        <div
          className="aurora-orb aurora-orb-1 top-[-100px] left-[-80px]"
          aria-hidden="true"
        />
        <div
          className="aurora-orb aurora-orb-2 top-[30%] right-[-80px]"
          aria-hidden="true"
        />
        <div
          className="aurora-orb aurora-orb-3 bottom-[20%] left-[35%]"
          aria-hidden="true"
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-8"
            aria-hidden="true"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-ice-gold" />
            <span className="label-eyebrow text-ice-gold">
              Icelandic Titles · Est. 2024
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-ice-gold" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            id="hero-heading"
            className="font-display text-[clamp(2.4rem,7vw,5.2rem)] font-bold leading-[1.05] text-white mb-6"
          >
            Become a{" "}
            <span className="text-gradient-gold">Jarl, Lord</span>
            <br />
            or{" "}
            <span className="text-gradient-aurora">Lady</span>
            <br />
            of the Icelandic Highlands
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/60 font-light max-w-2xl leading-relaxed mb-10"
          >
            Own a souvenir plot of land in a breathtaking Icelandic nature reserve.
            Receive a personalised certificate and help restore Iceland's magnificent
            landscapes for future generations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Link
              href="/buy-a-plot"
              className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 text-base"
              aria-label="Choose your plot of Icelandic land"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Choose Your Plot
            </Link>

            <button
              className="btn-ghost inline-flex items-center gap-2.5 px-8 py-4 text-base text-white font-semibold"
              aria-label="Watch our Iceland reserve video"
              onClick={() => {
                // TODO: Open video modal with Pan360 virtual tour
                console.log("Open virtual tour modal");
              }}
            >
              <div
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
                aria-hidden="true"
              >
                <Play className="w-3 h-3 fill-white" />
              </div>
              Watch the Story
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-8 gap-y-3 justify-center"
            role="list"
            aria-label="Trust indicators"
          >
            {TRUST_BADGES.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2"
                role="listitem"
              >
                <span className="text-lg" aria-hidden="true">
                  {icon}
                </span>
                <span className="text-sm text-white/55 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Trustpilot mini bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-6 pb-10"
      >
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div
            className="flex gap-0.5"
            aria-label={`Rated ${SITE.trustpilot.rating} out of 5 stars on Trustpilot`}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#00B67A] text-[#00B67A]"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-sm text-white/50">
            <strong className="text-white font-semibold">
              {SITE.trustpilot.rating}
            </strong>{" "}
            Excellent ·{" "}
            <a
              href={SITE.trustpilot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B67A] hover:text-[#00D68A] transition-colors"
              aria-label={`${SITE.trustpilot.reviewCount.toLocaleString()}+ reviews on Trustpilot (opens in new tab)`}
            >
              {SITE.trustpilot.reviewCount.toLocaleString()}+ reviews
            </a>{" "}
            on Trustpilot
          </span>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-ice-gold to-transparent animate-pulse" />
        <span className="text-[10px] text-white/25 tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
