"use client";
import { useState }               from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, Users, Mountain, Check,
  ChevronDown, ChevronUp, ArrowRight,
} from "lucide-react";
import { cn, formatPrice, formatDate } from "@/lib/utils";
import { useCartStore }                from "@/lib/store";
import { TourBookingModal }            from "@/components/tours/TourBookingModal";
import type { GuidedTour }             from "@/types";

const DIFFICULTY_STYLES: Record<GuidedTour["difficulty"], string> = {
  Easy:        "bg-spirit/12  text-spirit  border-spirit/25",
  Moderate:    "bg-aurora/10  text-aurora  border-aurora/25",
  Challenging: "bg-red-500/10 text-red-400 border-red-500/25",
};

const TOUR_ICONS: Record<string, string> = {
  "glacier-soul-walk":    "🗻",
  "northern-lights-vigil":"🌌",
  "elf-rock-expedition":  "🧝",
};

const TOUR_DETAIL: Record<string, { bestFor: string; whatToBring: string[]; highlight: string }> = {
  "glacier-soul-walk": {
    bestFor:      "History lovers, mythology enthusiasts, hikers",
    whatToBring:  ["Sturdy walking shoes", "Warm waterproof layer", "Camera", "Open mind"],
    highlight:    "Stand at the foot of Snæfellsjökull — one of Earth's seven spiritual energy centres.",
  },
  "northern-lights-vigil": {
    bestFor:      "Aurora chasers, photographers, romantics",
    whatToBring:  ["Thermal layers", "Camera with manual mode", "Thermos", "Patience (worth it)"],
    highlight:    "The spirits of Snæfellsnes are said to travel within the aurora — watch them dance.",
  },
  "elf-rock-expedition": {
    bestFor:      "Families, folklore fans, curious minds",
    whatToBring:  ["Comfortable shoes", "Sense of wonder", "Notebook for elf sightings"],
    highlight:    "Over 54% of Icelanders believe in huldufólk. Our guide has the sight — maybe you do too.",
  },
};

export function TourCard({ tour, index }: { tour: GuidedTour; index: number }) {
  const { currency }              = useCartStore();
  const [showIncludes, setShowIncludes] = useState(false);
  const [bookingOpen,  setBookingOpen]  = useState(false);

  const detail = TOUR_DETAIL[tour.id];

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        aria-label={`${tour.name} — ${formatPrice(tour.price[currency], currency)} per person`}
        className="glass-card flex flex-col hover:border-glacier/18 transition-all duration-300 group"
      >
        {/* Icon + header */}
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between gap-3 mb-5">
            <div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-glacier/12 to-aurora/6 border border-glacier/15 flex items-center justify-center text-3xl flex-shrink-0"
              aria-hidden="true"
            >
              {TOUR_ICONS[tour.id] ?? "🧭"}
            </div>
            <span className={cn(
              "inline-flex items-center px-2.5 py-1 rounded-full font-body text-[11px] font-semibold border",
              DIFFICULTY_STYLES[tour.difficulty]
            )}>
              {tour.difficulty}
            </span>
          </div>

          <h2 className="font-display text-2xl font-semibold text-white mb-2 group-hover:text-glacier transition-colors duration-200">
            {tour.name}
          </h2>
          <p className="font-body text-sm text-white/55 leading-relaxed mb-5">
            {tour.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-4 mb-5 text-xs font-body text-white/45">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {tour.duration}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              {tour.groupSize}
            </div>
            <div className="flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5" aria-hidden="true" />
              {tour.difficulty}
            </div>
          </div>

          {/* Highlight */}
          {detail && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rune-gold/6 border border-rune-gold/15 mb-5">
              <span className="text-rune-gold/60 text-sm flex-shrink-0 mt-0.5 animate-twinkle" aria-hidden="true">✦</span>
              <p className="font-body text-xs text-white/60 italic leading-relaxed">{detail.highlight}</p>
            </div>
          )}

          {/* Best for + what to bring */}
          {detail && (
            <div className="space-y-3 mb-5">
              <div>
                <p className="font-body text-[10px] text-white/30 uppercase tracking-wider mb-1">Best for</p>
                <p className="font-body text-sm text-white/55">{detail.bestFor}</p>
              </div>
              <div>
                <p className="font-body text-[10px] text-white/30 uppercase tracking-wider mb-1.5">What to bring</p>
                <div className="flex flex-wrap gap-1.5">
                  {detail.whatToBring.map((item) => (
                    <span key={item} className="font-body text-xs text-white/45 bg-white/[0.05] border border-white/[0.07] px-2.5 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/[0.06]" />

        {/* Includes (collapsible) */}
        <div className="px-6 py-4">
          <button
            type="button"
            onClick={() => setShowIncludes((v) => !v)}
            aria-expanded={showIncludes}
            className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors w-full text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glacier rounded"
          >
            {showIncludes
              ? <><ChevronUp   className="w-3.5 h-3.5" aria-hidden="true" />Hide inclusions</>
              : <><ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />What's included ({tour.includes.length} items)</>}
          </button>

          <AnimatePresence initial={false}>
            {showIncludes && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{    height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden mt-3 space-y-2"
              >
                {tour.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-spirit mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-sm text-white/55">{item}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/[0.06]" />

        {/* Available dates strip */}
        <div className="px-6 pt-4 pb-3">
          <p className="font-body text-[10px] text-white/25 uppercase tracking-wider mb-2">Next available dates</p>
          <div className="flex flex-wrap gap-1.5">
            {tour.dates.slice(0, 3).map((d) => (
              <span key={d} className="font-body text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-lg">
                {formatDate(d)}
              </span>
            ))}
            {tour.dates.length > 3 && (
              <span className="font-body text-[11px] text-white/28 py-1 px-1">
                +{tour.dates.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="p-6 pt-3 flex items-center justify-between gap-4 mt-auto">
          <div>
            <span className="font-display text-3xl font-light text-glacier">
              {formatPrice(tour.price[currency], currency)}
            </span>
            <span className="font-body text-xs text-white/35 ml-1.5">/ person</span>
            <p className="font-body text-[11px] text-spirit/60 mt-0.5">Plot owners get 10% off</p>
          </div>

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl flex-shrink-0",
              "bg-glacier text-ice-black font-display font-semibold text-sm",
              "hover:bg-glacier-light hover:shadow-glacier",
              "transition-all duration-200 btn-spirit",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
            )}
          >
            Book Now
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </motion.article>

      {/* Booking modal */}
      <AnimatePresence>
        {bookingOpen && (
          <TourBookingModal
            tour={tour}
            onClose={() => setBookingOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
