"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveOverviewCard — /the-land page
// Single large card teasing the Snæfellsnes Reserve detail page.
// Left: atmospheric image placeholder · Right: mystical copy + features + CTA
// ─────────────────────────────────────────────────────────────────────────────
import Image            from "next/image";
import Link             from "next/link";
import { motion }       from "framer-motion";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import { cn }           from "@/lib/utils";
import type { Reserve } from "@/types";

export function ReserveOverviewCard({ reserve }: { reserve: Reserve }) {
  return (
    <section
      aria-label="Snæfellsnes Reserve overview"
      className="relative bg-ice-black section-pad"
    >
      {/* Subtle aurora */}
      <div
        className="aurora-orb w-[600px] h-[500px] bg-spirit/5 top-0 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-6s" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left: image ──────────────────────────────────────────────── */}
            <div className="relative min-h-[380px] lg:min-h-[560px] overflow-hidden">
              {/*
                Photo: Golden sunset light on Snæfellsjökull glacier ridges
                Unsplash: photo-1540979388789-7cee28a1cdc9
              */}
              <Image
                src="https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=900&q=80"
                alt="Golden sunset light illuminating the rugged ridges of Snæfellsjökull glacier, Snæfellsnes, Iceland — powerful spiritual atmosphere and ancient protector Bárður"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ice-deep/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ice-black/70 lg:hidden" />
              <div className="absolute top-5 left-5 z-10 space-y-2">
                <div className="flex items-center gap-2 bg-ice-black/70 backdrop-blur-md border border-spirit/25 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-spirit rounded-full animate-spirit-pulse" aria-hidden="true" />
                  <span className="font-body text-xs text-spirit font-semibold">Earth Energy Centre</span>
                </div>
                <div className="flex items-center gap-2 bg-ice-black/70 backdrop-blur-md border border-glacier/20 px-3 py-1.5 rounded-full">
                  <MapPin className="w-3 h-3 text-glacier" aria-hidden="true" />
                  <span className="font-body text-xs text-glacier-dim">64.8°N · Snæfellsnes</span>
                </div>
              </div>

            </div>

            {/* ── Right: copy ──────────────────────────────────────── */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">

              <p className="eyebrow mb-3">Our reserve</p>

              <h2 className="font-display text-3xl lg:text-4xl font-light text-white mb-2 leading-tight">
                {reserve.name}
              </h2>
              <p className="font-body text-base italic text-glacier-dim mb-5">
                {reserve.subtitle}
              </p>

              <p className="font-body text-sm text-white/55 leading-relaxed mb-4">
                {reserve.description}
              </p>

              {/* Mystical pull-quote */}
              <blockquote className="border-l-2 border-glacier/30 pl-4 mb-6">
                <p className="font-body text-sm italic text-white/55 leading-relaxed">
                  "Own land with direct view of the powerful Snæfellsjökull glacier —
                  home of guardian spirit{" "}
                  <strong className="text-white/80 not-italic font-semibold">
                    Bárður Snæfellsás
                  </strong>{" "}
                  and the hidden people (
                  <strong className="text-white/80 not-italic font-semibold">
                    huldufólk
                  </strong>
                  )!"
                </p>
              </blockquote>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {reserve.features.slice(0, 5).map((f) => (
                  <div
                    key={f.title}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.07] font-body text-xs text-white/55"
                  >
                    <span aria-hidden="true">{f.icon}</span>
                    {f.title}
                  </div>
                ))}
              </div>

              {/* Energy centre highlight */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-spirit/6 border border-spirit/15 mb-8">
                <Zap className="w-4 h-4 text-spirit flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-body text-sm text-spirit/80 leading-relaxed">
                  Snæfellsjökull is listed as one of Earth's seven great chakra energy
                  centres — a place where the planet's energy converges and radiates outward.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/the-land/snaefellsnes"
                className={cn(
                  "group inline-flex items-center gap-2.5 self-start",
                  "px-7 py-3.5 rounded-xl",
                  "bg-glacier text-ice-black",
                  "font-display font-semibold text-base",
                  "hover:bg-glacier-light hover:shadow-glacier",
                  "transition-all duration-200 btn-spirit"
                )}
              >
                Explore the Reserve
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
