"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ConservationBand — bottom of /the-land/snaefellsnes
// Conservation copy + buy CTA + spirit motifs
// ─────────────────────────────────────────────────────────────────────────────
import Link       from "next/link";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, TreePine, Bird, Mountain, Check } from "lucide-react";
import { cn }     from "@/lib/utils";

const CONSERVATION_STATS = [
  { icon: <TreePine className="w-5 h-5" aria-hidden="true" />, value: "12,000+", label: "native birch trees planted", color: "text-spirit" },
  { icon: <Bird     className="w-5 h-5" aria-hidden="true" />, value: "47",     label: "seabird species monitored",  color: "text-glacier" },
  { icon: <Mountain className="w-5 h-5" aria-hidden="true" />, value: "800ha",  label: "lava field habitat protected", color: "text-rune-gold" },
];

export function ConservationBand({ conservation }: { conservation: string }) {
  return (
    <section
      aria-label="Snæfellsnes conservation and rewilding"
      className="relative bg-ice-navy overflow-hidden"
    >
      {/* Aurora line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(57,232,160,0.3), transparent)" }}
      />

      {/* Background orbs */}
      <div aria-hidden="true">
        <div
          className="aurora-orb w-[500px] h-[400px] bg-spirit/6 -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-orb w-[400px] h-[300px] bg-glacier/5 bottom-0 right-0"
          style={{ animationDelay: "-7s" }}
        />
      </div>
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: conservation copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-spirit/15 border border-spirit/25 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-spirit" aria-hidden="true" />
              </div>
              <p className="eyebrow">Conservation at the core</p>
            </div>

            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-light text-white leading-[1.05] mb-6">
              Your purchase{" "}
              <em className="not-italic text-gradient-spirit">rewilding</em>
              {" "}Iceland
            </h2>

            <p className="font-body text-base text-white/55 leading-relaxed mb-8">
              {conservation}
            </p>

            {/* Conservation stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {CONSERVATION_STATS.map(({ icon, value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="glass-card p-4 text-center"
                >
                  <div className={cn("flex justify-center mb-2", color)}>
                    {icon}
                  </div>
                  <p className={cn("font-display text-xl font-semibold mb-1", color)}>
                    {value}
                  </p>
                  <p className="font-body text-[11px] text-white/40 leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.07]">
              <span className="text-rune-gold/60 text-sm mt-0.5 flex-shrink-0 animate-twinkle" aria-hidden="true">✦</span>
              <p className="font-body text-sm text-white/45 leading-relaxed italic">
                "The glacier is predicted to be ice-free by 2050. Everything we do today —
                every tree planted, every lava field protected — is a vote for Iceland's
                future. Thank you for being part of this."
              </p>
            </div>
          </motion.div>

          {/* Right: CTA box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pl-6"
          >
            <div className="glass-card p-8 border-glacier/15">
              {/* Decorative rune */}
              <div className="flex items-center gap-4 mb-6" aria-hidden="true">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rune-gold/25" />
                <span className="font-display text-2xl text-rune-gold/40">❄</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rune-gold/25" />
              </div>

              <h3 className="font-display text-2xl font-light text-white mb-3 text-center">
                Own a piece of this{" "}
                <em className="not-italic text-gradient-glacier">living mythology</em>
              </h3>
              <p className="font-body text-sm text-white/45 text-center leading-relaxed mb-8">
                Claim your souvenir plot in the Snæfellsnes Reserve and receive your
                personalised certificate as Jarl, Lord or Lady — while directly funding
                the conservation of this extraordinary landscape.
              </p>

              <Link
                href="/buy-a-plot"
                className={cn(
                  "group flex items-center justify-center gap-2.5 w-full",
                  "py-4 px-6 rounded-xl",
                  "bg-glacier text-ice-black",
                  "font-display font-semibold text-base",
                  "hover:bg-glacier-light hover:shadow-glacier",
                  "transition-all duration-200 btn-spirit"
                )}
              >
                Claim Your Souvenir Plot
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <div className="mt-5 flex flex-col gap-2.5">
                {[
                  "Personalised certificate — Jarl, Lord or Lady",
                  "GPS coordinates + What3Words address",
                  "Free worldwide shipping",
                  "90-day money-back guarantee",
                  "Conservation contribution with every order",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-spirit flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>

              <p className="font-body text-[11px] text-white/25 italic text-center mt-6">
                From €49 · 1, 5 or 10 sq ft souvenir plots available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
