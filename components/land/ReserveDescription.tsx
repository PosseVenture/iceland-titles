"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveDescription — long-form Eyri í Kollafirði lore (Vestfirðir version)
// ─────────────────────────────────────────────────────────────────────────────
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import type { Reserve } from "@/types";

function PullQuote({ text, cite }: { text: string; cite: string }) {
  return (
    <blockquote className="my-8 border-l-2 border-glacier/30 pl-6">
      <p className="font-display text-xl md:text-2xl font-light text-white/80 italic leading-relaxed">
        "{text}"
      </p>
      <cite className="block mt-3 font-body text-xs text-white/35 not-italic tracking-wider uppercase">
        — {cite}
      </cite>
    </blockquote>
  );
}

function LoreBlock({
  icon,
  title,
  children,
  delay = 0,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="flex gap-5"
    >
      <div
        className="w-12 h-12 flex-shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-2xl mt-1"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
        <div className="font-body text-[0.95rem] text-white/55 leading-[1.85] space-y-3">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function ReserveDescription({ reserve }: { reserve: Reserve }) {
  return (
    <section
      aria-label="About the Eyri í Kollafirði Reserve"
      className="relative bg-ice-black section-pad"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">Your plot · The story</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-[1.05] mb-8">
                Where the{" "}
                <em className="not-italic text-gradient-glacier">ancient land</em>
                {" "}meets the{" "}
                <em className="not-italic text-gradient-rune">hidden world</em>
              </h2>
            </motion.div>

            <div className="space-y-12">
              <LoreBlock icon="🌊" title="The Wild Westfjords" delay={0.05}>
                <p>
                  Vestfirðir is Iceland at its most primordial — a labyrinth of deep fjords, towering cliffs, and ancient plateaux.
                </p>
                <p>
                  At Eyri í Kollafirði in the Gufudalssveit valley, the land feels alive. The silence is profound. The rocks seem to watch.
                </p>
              </LoreBlock>

              <LoreBlock icon="🧝" title="Huldufólk of Gufudalssveit" delay={0.1}>
                <p>
                  The hidden people are said to be especially present here. Locals speak of specific rocks and birch hollows that must not be disturbed.
                </p>
              </LoreBlock>

              <LoreBlock icon="🏔" title="The View to Snæfellsjökull" delay={0.15}>
                <p>
                  On clear days, Snæfellsjökull rises across Kollafjörður like a silent sentinel — one of Earth's great energy centres.
                </p>
              </LoreBlock>

              <LoreBlock icon="🌿" title="Conservation at Eyri" delay={0.2}>
                <p>{reserve.conservation}</p>
              </LoreBlock>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-base font-semibold text-white mb-4">
                Reserve at a glance
              </h3>
              <dl className="space-y-3">
                {[
                  { label: "Location", value: "Eyri í Kollafirði, Gufudalssveit" },
                  { label: "Coordinates", value: "65.6038585°N, 22.495283°W" },
                  { label: "What3Words", value: reserve.what3words },
                  { label: "Region", value: "Vestfirðir" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-3 text-sm">
                    <dt className="font-body text-white/40">{label}</dt>
                    <dd className="font-body text-white/70 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}