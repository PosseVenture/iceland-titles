"use client";
// ─────────────────────────────────────────────────────────────────────────────
// MysticalFactsStrip — animated mystical facts below the overview card
// ─────────────────────────────────────────────────────────────────────────────
import { motion }  from "framer-motion";
import { cn }      from "@/lib/utils";

export function MysticalFactsStrip({ facts }: { facts: string[] }) {
  return (
    <section
      aria-label="Mystical facts about Snæfellsnes and Snæfellsjökull"
      className="relative bg-ice-deep py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.2), transparent)" }}
      />
      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,216,234,0.15), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <p className="eyebrow justify-center mb-10">Ancient knowledge</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={cn(
                "flex items-start gap-3 p-5 rounded-xl",
                "bg-white/[0.03] border border-white/[0.06]",
                "hover:border-rune-gold/20 hover:bg-rune-gold/[0.03]",
                "transition-all duration-300"
              )}
            >
              <span
                className="text-rune-gold/60 mt-0.5 flex-shrink-0 text-sm animate-twinkle"
                aria-hidden="true"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                ✦
              </span>
              <p className="font-body text-sm text-white/55 leading-relaxed">
                {fact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
