"use client";
// ─────────────────────────────────────────────────────────────────────────────
// AsSeenOn — Press / media logos
// Iceland-adapted publication names with subtle shimmer scroll
// ─────────────────────────────────────────────────────────────────────────────
import { motion }  from "framer-motion";
import { cn }      from "@/lib/utils";

// ─── Press mentions (Iceland-adapted) ────────────────────────────────────────
// TODO: Replace these with real press logos once coverage is secured
const PRESS = [
  { name: "Vísir.is",               sub: "Iceland's leading news" },
  { name: "Iceland Review",          sub: "English-language magazine" },
  { name: "Morgunblaðið",            sub: "Iceland's oldest newspaper" },
  { name: "Icelandic Times",         sub: "Tourism & culture" },
  { name: "Guardian Travel",         sub: "UK travel press" },
  { name: "Lonely Planet",           sub: "Global guidebook" },
];

function PressLogo({ name, sub }: { name: string; sub: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-4",
        "border border-white/[0.06] rounded-xl",
        "bg-white/[0.02] hover:bg-white/[0.05]",
        "transition-colors duration-200",
        "min-w-[160px]"
      )}
    >
      <span className="font-display text-sm font-semibold text-white/45 hover:text-white/70 transition-colors whitespace-nowrap">
        {name}
      </span>
      <span className="font-body text-[10px] text-white/22 mt-0.5">
        {sub}
      </span>
    </div>
  );
}

export function AsSeenOn() {
  return (
    <section
      aria-label="As featured in"
      className="relative bg-ice-black py-14 overflow-hidden"
    >
      {/* Separator lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="eyebrow justify-center mb-8 text-center">
          As featured in
        </p>

        {/* Logos row — scrolls horizontally on mobile */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-ice-black to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-ice-black to-transparent z-10 pointer-events-none" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PRESS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <PressLogo name={p.name} sub={p.sub} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
