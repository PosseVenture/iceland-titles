"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveFeatures — 6 feature highlight cards for /the-land/snaefellsnes
// ─────────────────────────────────────────────────────────────────────────────
import { motion }              from "framer-motion";
import { cn }                  from "@/lib/utils";
import type { ReserveFeature } from "@/types";

export function ReserveFeatures({ features }: { features: ReserveFeature[] }) {
  return (
    <section
      aria-label="Reserve features and highlights"
      className="relative bg-ice-deep section-pad"
    >
      {/* Accent rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,216,234,0.15), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center mb-3">What makes it magical</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-light text-white">
            Six reasons this land is{" "}
            <em className="not-italic text-gradient-spirit">unlike any other</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              aria-label={feature.title}
              className={cn(
                "glass-card p-7 flex flex-col gap-4",
                "hover:border-glacier/20 transition-all duration-300 group"
              )}
            >
              {/* Icon */}
              <div className="text-4xl leading-none" aria-hidden="true">
                {feature.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-white group-hover:text-glacier transition-colors duration-200">
                {feature.title}
              </h3>

              <p className="font-body text-sm text-white/50 leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* Subtle bottom glow on hover */}
              <div
                className="h-px bg-gradient-to-r from-transparent via-glacier/0 to-transparent group-hover:via-glacier/20 transition-all duration-300"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
