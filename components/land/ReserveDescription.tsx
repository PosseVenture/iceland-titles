"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveDescription — long-form Eyri í Kollafirði lore (Vestfirðir version)
// Huldufólk · Snæfellsjökull view · Westfjords power
// ─────────────────────────────────────────────────────────────────────────────
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import type { Reserve } from "@/types";

// Pull-quote component
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

// Lore section with icon
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
      {/* Aurora accent */}
      <div
        className="aurora-orb w-[500px] h-[500px] bg-aurora-violet/6 top-0 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-4s" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Main prose column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">Your plot · The story</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-[1.05] mb-8">
                Where{" "}
                <em className="not-italic text-gradient-glacier">ancient land</em>
                {" "}meets the{" "}
                <em className="not-italic text-gradient-rune">hidden world</em>
              </h2>
            </motion.div>

            <div className="space-y-12">
              <LoreBlock icon="🌊" title="The Wild Westfjords" delay={0.05}>
                <p>
                  Vestfirðir is Iceland at its most primordial — a labyrinth of deep fjords, towering cliffs, and ancient plateaux carved by glaciers over millions of years.
                </p>
                <p>
                  At Eyri í Kollafirði in the Gufudalssveit valley, the land feels different. The silence is profound. The rocks seem to watch. This is a place where the old stories are still alive.
                </p>
              </LoreBlock>

              <PullQuote
                text="The land here does not forget. It remembers every footstep since the first settlers arrived."
                cite="Local storyteller, Gufudalssveit"
              />

              <LoreBlock icon="🧝" title="Huldufólk of Gufudalssveit" delay={0.1}>
                <p>
                  The hidden people are said to be especially present in Gufudalssveit. Locals speak of specific rocks and birch hollows that must not be disturbed. The Huldufólk are not small garden fairies — they are human-like, powerful, and part of the living landscape.
                </p>
                <p>
                  Many roads in the Westfjords have been re-routed to protect their homes. The tradition is strong and respected to this day.
                </p>
              </LoreBlock>

              <LoreBlock icon="🏔" title="The View to Snæfellsjökull" delay={0.15}>
                <p>
                  On clear days, the ice-crowned Snæfellsjökull rises across Kollafjörður like a silent sentinel. One of Earth's seven great energy centres, it has watched over the people of Vestfirðir for a thousand years.
                </p>
                <p>
                  From your plot at Eyri í Kollafirði, you stand in one of the few places where you can feel the power of the glacier across the water — a view that connects the wild Westfjords with one of Iceland’s most mystical landmarks.
                </p>
              </LoreBlock>

              <LoreBlock icon="🌿" title="Conservation at Eyri" delay={0.2}>
                <p>{reserve.conservation}</p>
              </LoreBlock>
            </div>
          </div>

          {/* Sidebar */}
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
                  { label: "Region", value: "Vestfirðir (Westfjords)" },
                  { label: "Best season", value: "Year-round (aurora Sep–Apr)" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-3 text-sm">
                    <dt className="font-body text-white/40 flex-shrink-0">{label}</dt>
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