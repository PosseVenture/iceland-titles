"use client";
// ─────────────────────────────────────────────────────────────────────────────
// WhatYouGet — "What you receive with your souvenir plot"
// 4 glass cards with Framer Motion stagger on scroll-enter
// ─────────────────────────────────────────────────────────────────────────────
import { motion }                     from "framer-motion";
import { useInView }                  from "framer-motion";
import { useRef }                     from "react";
import { cn }                         from "@/lib/utils";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    icon:  "📜",
    color: "from-glacier/10 to-transparent border-glacier/15",
    glow:  "hover:border-glacier/30 hover:shadow-glacier",
    title: "Personalised Certificate",
    body:  "A beautifully designed PDF (and optional A3 print) declaring you Jarl, Lord or Lady of Snæfellsnes — personalised with your name and your souvenir plot reference.",
    detail: "Signed & sealed with the Snæfellsnes Reserve crest",
  },
  {
    icon:  "📍",
    color: "from-aurora/8 to-transparent border-aurora/12",
    glow:  "hover:border-aurora/30 hover:shadow-aurora",
    title: "Your Plot Location",
    body:  "Exact GPS coordinates and a What3Words address pin-pointing your souvenir plot within sight of Snæfellsjökull glacier. Use it to visit in person or on Google Maps.",
    detail: "Snæfellsnes Reserve · 64.8°N, 23.7°W",
  },
  {
    icon:  "🌿",
    color: "from-spirit/8 to-transparent border-spirit/12",
    glow:  "hover:border-spirit/30 hover:shadow-spirit",
    title: "Conservation & Rewilding",
    body:  "Every purchase funds active rewilding of Snæfellsnes: native birch restoration, Arctic fox habitat protection, and trail preservation of the lava fields the huldufólk call home.",
    detail: "Optional: add Plant a Tree for €19",
  },
  {
    icon:  "🗺",
    color: "from-rune-gold/8 to-transparent border-rune-gold/12",
    glow:  "hover:border-rune-gold/30 hover:shadow-rune",
    title: "Owner's App & Map Access",
    body:  "Log in to your personal dashboard to download certificates, explore your plot in 3D, access a virtual tour of the glacier, and read the Secrets of the Glacier owner's handbook.",
    detail: "360° virtual tour of Snæfellsjökull included",
  },
];

// ─── Single card ──────────────────────────────────────────────────────────────
function WhatYouGetCard({
  card,
  index,
}: {
  card:  typeof CARDS[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "glass-card h-full p-7 flex flex-col gap-4",
          "bg-gradient-to-b border",
          card.color, card.glow,
          "transition-all duration-300"
        )}
      >
        {/* Icon */}
        <div className="text-4xl leading-none" aria-hidden="true">
          {card.icon}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-white">
          {card.title}
        </h3>

        {/* Body */}
        <p className="font-body text-sm text-white/55 leading-relaxed flex-1">
          {card.body}
        </p>

        {/* Detail footer */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
          <span className="text-xs text-spirit" aria-hidden="true">✦</span>
          <span className="font-body text-xs text-white/35 italic">
            {card.detail}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function WhatYouGet() {
  return (
    <SectionWrapper
      id="what-you-get"
      label="What you receive with your souvenir plot"
      className="bg-ice-deep"
    >
      {/* Aurora accent */}
      <div
        className="aurora-orb w-[400px] h-[400px] bg-spirit/5 -bottom-20 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-3s" }}
      />

      <SectionHeading
        eyebrow="Everything you receive"
        title={<>What you get as a <em className="text-gradient-glacier not-italic">Jarl of Snæfellsnes</em></>}
        subtitle="Every plot includes a personal connection to Iceland's most mystical landscape — from your doorstep to the glacier's edge."
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CARDS.map((card, i) => (
          <WhatYouGetCard key={card.title} card={card} index={i} />
        ))}
      </div>

      {/* Bottom rune divider */}
      <div className="rune-divider mt-14 max-w-sm mx-auto" aria-hidden="true">
        <span className="font-display text-rune-gold/40 text-sm px-4">❄</span>
      </div>
    </SectionWrapper>
  );
}
