"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveTeaser — Snæfellsnes Reserve homepage teaser
// Large atmospheric card with glacier photo + mystical copy + feature pills
// ─────────────────────────────────────────────────────────────────────────────
import Image          from "next/image";
import Link           from "next/link";
import { motion }     from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { cn }         from "@/lib/utils";
import { RESERVE }    from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";

// ─── Feature pill ─────────────────────────────────────────────────────────────
function FeaturePill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
      <span className="text-base" aria-hidden="true">{icon}</span>
      <span className="font-body text-xs text-white/65 leading-tight">{label}</span>
    </div>
  );
}

// ─── Mystical fact badge ──────────────────────────────────────────────────────
function MysticalFact({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="flex items-start gap-2.5 font-body text-sm text-white/50 leading-relaxed"
    >
      <span className="text-rune-gold/60 mt-0.5 flex-shrink-0 text-xs animate-twinkle" aria-hidden="true" style={{ animationDelay: `${delay}s` }}>✦</span>
      {text}
    </motion.li>
  );
}

export function ReserveTeaser() {
  return (
    <SectionWrapper
      id="reserve-teaser"
      label="Snæfellsnes Reserve"
      className="bg-ice-deep"
    >
      {/* Background spirit glow */}
      <div
        className="aurora-orb w-[600px] h-[500px] bg-aurora/5 top-0 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-10s" }}
      />

      <SectionHeading
        eyebrow="The reserve"
        title={<>Own land beneath the <em className="text-gradient-glacier not-italic">sacred glacier</em></>}
      />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 glass-card overflow-hidden"
      >
        {/* ── Left: image ──────────────────────────────────────────────── */}
        <div className="relative h-72 lg:h-auto min-h-[380px]">
          {/*
            TODO: Replace src with real glacier photo
            Query: "Snæfellsjökull glacier lava field dramatic clouds Iceland"
            Recommended: images.unsplash.com/photo-1504233529578-6d46baba6d34
          */}
          <Image
            src="https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=900&q=80"
            alt="Snæfellsjökull glacier rising majestically above the Snæfellsnes lava fields — home of guardian spirit Bárður Snæfellsás and the huldufólk hidden people"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ice-deep/60 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ice-deep/80 lg:hidden" />

          {/* Coordinates badge */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-ice-black/75 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-glacier flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-body text-[10px] text-white/40 leading-none mb-0.5">What3Words</p>
              <p className="font-body text-xs text-white/80 font-semibold">{RESERVE.what3words}</p>
            </div>
          </div>

          {/* Energy centre badge */}
          <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-spirit/15 backdrop-blur-sm border border-spirit/25 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-spirit rounded-full animate-spirit-pulse" aria-hidden="true" />
            <span className="font-body text-xs text-spirit font-semibold">Earth Energy Centre</span>
          </div>
        </div>

        {/* ── Right: content ────────────────────────────────────────────── */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          {/* Reserve name */}
          <p className="eyebrow mb-3">{RESERVE.name}</p>
          <h3 className="font-display text-3xl lg:text-4xl font-light text-white mb-2 leading-tight">
            {RESERVE.subtitle}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-white/55 leading-relaxed mb-6">
            {RESERVE.description}
          </p>

          {/* Mystical copy */}
          <blockquote className="border-l-2 border-glacier/30 pl-4 mb-6 italic">
            <p className="font-body text-sm text-white/55 leading-relaxed">
              "Own land with direct view of the powerful Snæfellsjökull glacier —
              home of guardian spirit{" "}
              <strong className="text-white/80 font-semibold not-italic">Bárður Snæfellsás</strong>
              {" "}and the hidden people (huldufólk)!"
            </p>
          </blockquote>

          {/* Mystical facts */}
          <ul className="space-y-2.5 mb-8" aria-label="Mystical facts about the reserve">
            {RESERVE.mysticalFacts.slice(0, 3).map((fact, i) => (
              <MysticalFact key={i} text={fact} delay={i * 0.08} />
            ))}
          </ul>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {RESERVE.features.slice(0, 4).map((f) => (
              <FeaturePill key={f.title} icon={f.icon} label={f.title} />
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/the-land/snaefellsnes"
            className={cn(
              "group inline-flex items-center gap-2",
              "px-6 py-3 rounded-xl",
              "bg-glacier/10 text-glacier border border-glacier/25",
              "font-display font-semibold text-sm",
              "hover:bg-glacier/18 hover:border-glacier/45",
              "transition-all duration-200 btn-spirit self-start"
            )}
          >
            Explore the Reserve
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
