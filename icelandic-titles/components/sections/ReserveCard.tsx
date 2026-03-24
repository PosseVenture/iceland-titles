"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatCoordinates } from "@/lib/utils";
import type { Reserve } from "@/types";

// ─── Badge variant map ────────────────────────────────────────────────────────
const BADGE_VARIANT_MAP = {
  gold: "gold",
  aurora: "aurora",
  blue: "blue",
} as const satisfies Record<Reserve["BadgeVariant"], "gold" | "aurora" | "blue">;

// ─── ReserveCard Component ────────────────────────────────────────────────────
export function ReserveCard({
  reserve,
  index,
  inView,
}: {
  reserve: Reserve;
  index: number;
  inView: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative flex flex-col
        bg-white/[0.03] border border-white/[0.08]
        rounded-2xl overflow-hidden
        hover:border-white/[0.18] hover:-translate-y-1.5
        transition-all duration-300
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      "
      aria-label={`${reserve.name} nature reserve`}
    >
      {/* ── Photo ── */}
      <div className="relative h-56 overflow-hidden">
        {!imgError ? (
          <Image
            src={reserve.heroImage}
            alt={reserve.heroImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIRAAAQQCAgMAAAAAAAAAAAAAAQACAxEEBSExUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoFvntBdaGgFrQ52JJAA6DIqX1xqXjnHGLFwxsFjWuEzQcgn0BERER/9k="
          />
        ) : (
          /* Fallback gradient when image fails to load */
          <div
            className="absolute inset-0 bg-gradient-to-br from-ice-navy to-ice-blue flex items-center justify-center"
            role="img"
            aria-label={reserve.heroImageAlt}
          >
            <span className="text-5xl opacity-40" aria-hidden="true">🏔</span>
          </div>
        )}

        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"
          aria-hidden="true"
        />

        {/* Badge floating on image */}
        <div className="absolute bottom-4 left-4">
          <Badge variant={BADGE_VARIANT_MAP[reserve.BadgeVariant]}>
            {reserve.Badge}
          </Badge>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Name + coordinates */}
        <div className="mb-4">
          <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight">
            {reserve.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
            <span aria-label={`Location: ${formatCoordinates(reserve.coordinates.lat, reserve.coordinates.lng)}`}>
              {formatCoordinates(reserve.coordinates.lat, reserve.coordinates.lng)}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm italic text-aurora/70 font-light mb-3">
          "{reserve.subtitle}"
        </p>

        {/* Description */}
        <p className="text-sm text-white/55 leading-relaxed mb-6">
          {reserve.description}
        </p>

        {/* Features list */}
        <ul
          className="space-y-2 mb-7 flex-1"
          aria-label={`${reserve.name} features`}
        >
          {reserve.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/65">
              <CheckCircle2
                className="w-4 h-4 text-aurora-green flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* Conservation note */}
        <div className="bg-aurora-green/[0.07] border border-aurora-green/15 rounded-xl px-4 py-3 mb-6">
          <p className="text-xs text-aurora-green/80 leading-relaxed">
            🌿 <strong className="text-aurora-green">Conservation:</strong>{" "}
            {reserve.conservation.slice(0, 120)}…
          </p>
        </div>

        {/* CTA */}
        <Link
          href={`/buy-a-plot?reserve=${reserve.slug}`}
          className="
            group/btn flex items-center justify-between
            bg-white/[0.05] hover:bg-white/[0.09]
            border border-white/[0.1] hover:border-aurora/30
            rounded-xl px-5 py-3.5
            text-sm font-semibold text-white/80 hover:text-white
            transition-all duration-200
          "
          aria-label={`Buy a plot at ${reserve.name}`}
        >
          <span>Buy a {reserve.name} Plot</span>
          <ChevronRight
            className="w-4 h-4 text-aurora group-hover/btn:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}
