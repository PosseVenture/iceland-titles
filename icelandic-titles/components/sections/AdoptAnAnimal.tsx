"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Check, Heart, ArrowRight } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-wrapper";
import { GIFT_ADDONS } from "@/lib/data";

// ─── Animal detail data (extended beyond what's in data.ts) ──────────────────
const ANIMAL_DETAILS: Record<string, {
  fullDescription: string;
  facts: string[];
  whatsIncluded: string[];
  conservation: string;
  gradient: string;
  glowColor: string;
  bgPattern: string;
}> = {
  "adopt-horse": {
    fullDescription: "The Icelandic horse is one of the purest horse breeds on Earth — brought to Iceland by Vikings over 1,100 years ago, with no new breeds allowed in since 928 AD. They're uniquely capable of the tölt, a smooth four-beat gait that can carry a rider at speed without the jarring bounce of a trot.",
    facts: [
      "Breed isolated since 928 AD — no imports allowed",
      "Can perform 5 gaits including the unique tölt",
      "Incredibly hardy — lives outdoors year-round",
      "Average lifespan of 25–30 years",
    ],
    whatsIncluded: [
      "Personalised adoption certificate with your horse's name & photo",
      "Detailed biography card (breed, age, personality)",
      "Annual welfare update with new photographs",
      "Name listed on reserve adoption board",
      "Access to horse's online profile page",
    ],
    conservation: "Your adoption fee directly supports the care, feed, and veterinary needs of your adopted horse throughout the year.",
    gradient: "from-amber-900/30 to-yellow-900/20",
    glowColor: "rgba(245,158,11,0.2)",
    bgPattern: "🐴",
  },
  "adopt-puffin": {
    fullDescription: "Iceland is home to the world's largest Atlantic puffin colony — around 8–10 million birds nest on Icelandic cliffs each summer. These characterful seabirds spend most of their lives far out at sea, only coming ashore for a few months to breed. Their populations have declined by 70% in some areas due to overfishing and climate change.",
    facts: [
      "Iceland hosts 60% of the world's Atlantic puffins",
      "Can dive to 60m depth chasing sand eels",
      "Mates for life and returns to the same burrow each year",
      "Populations declined 70% in key colonies since the 1980s",
    ],
    whatsIncluded: [
      "Personalised adoption certificate with puffin colony photo",
      "Biography card: colony location, nesting season details",
      "Annual conservation update with colony survey results",
      "Name listed on the Puffin Colony Support board",
      "Access to seasonal nest-cam footage",
    ],
    conservation: "Adoption funds support nest-burrow surveying, sand eel recovery advocacy, and cliff-face habitat protection on our coastal reserve boundaries.",
    gradient: "from-cyan-900/30 to-sky-900/20",
    glowColor: "rgba(0,212,255,0.15)",
    bgPattern: "🐦",
  },
  "adopt-fox": {
    fullDescription: "The arctic fox is Iceland's only native land mammal — it arrived on foot across sea ice at the end of the last Ice Age, around 12,000 years ago. Today Iceland's entire arctic fox population numbers fewer than 10,000 individuals, with highland populations under pressure from habitat change and invasive species competition.",
    facts: [
      "Iceland's only native land mammal",
      "Arrived on foot across sea ice ~12,000 years ago",
      "Fewer than 10,000 remain in Iceland today",
      "Changes coat from brown-grey (summer) to white (winter)",
    ],
    whatsIncluded: [
      "Personalised adoption certificate with your fox's den location",
      "Biography card: territory map, coat colour phase, family group",
      "Annual den monitoring report with population data",
      "Name listed on the Arctic Fox Sponsor board",
      "GPS territory tracking data (aggregated, seasonal)",
    ],
    conservation: "Adoption funds support den monitoring, food supplementation during harsh winters, and invasive species (lupine) clearance to protect highland hunting grounds.",
    gradient: "from-emerald-900/30 to-teal-900/20",
    glowColor: "rgba(16,185,129,0.18)",
    bgPattern: "🦊",
  },
  "adopt-eagle": {
    fullDescription: "The white-tailed eagle was hunted to extinction in Iceland by the early 20th century. A reintroduction programme began in the 1970s and Iceland's eagle population has grown to around 100 pairs — still critically fragile. As Europe's largest eagle, with a 2.5m wingspan, they are the apex aerial predator of the Icelandic highlands.",
    facts: [
      "Hunted to extinction in Iceland — reintroduced 1974",
      "Around 100 breeding pairs remain today",
      "Europe's largest eagle — 2.5m wingspan",
      "Can live for 25–30 years in the wild",
    ],
    whatsIncluded: [
      "Personalised adoption certificate with nest location",
      "Biography card: nest GPS, wingspan measurements, known territory",
      "Annual breeding season report with chick data",
      "Name listed on the Eagle Sponsor register",
      "Access to seasonal nest camera livestream",
    ],
    conservation: "Adoption funds support nest protection, anti-poisoning campaigns (eagles are vulnerable to second-hand rodenticide), and breeding pair monitoring.",
    gradient: "from-purple-900/30 to-violet-900/20",
    glowColor: "rgba(124,58,237,0.18)",
    bgPattern: "🦅",
  },
};

// ─── Adoption modal ───────────────────────────────────────────────────────────
function AdoptModal({
  addonId,
  onClose,
}: {
  addonId: string;
  onClose: () => void;
}) {
  const addon = GIFT_ADDONS.find((a) => a.id === addonId)!;
  const detail = ANIMAL_DETAILS[addonId]!;
  const [adopted, setAdopted] = useState(false);

  const handleAdopt = () => {
    setAdopted(true);
    // TODO Part 6: wire to Stripe for annual subscription
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adopt-modal-heading"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 12 }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className={`relative w-full max-w-lg bg-gradient-to-b ${detail.gradient} bg-[#070f1e] border border-white/[0.1] rounded-2xl overflow-hidden max-h-[90vh] flex flex-col`}
        style={{ boxShadow: `0 0 80px ${detail.glowColor}, 0 40px 80px rgba(0,0,0,0.6)` }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/40 text-white/50 hover:text-white hover:bg-black/60 transition-all"
          aria-label="Close adoption details"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="px-6 pt-8 pb-6 text-center border-b border-white/[0.07] flex-shrink-0">
          <div className="text-6xl mb-3" aria-hidden="true">{addon.icon}</div>
          <h2 id="adopt-modal-heading" className="font-display text-2xl font-bold text-white">{addon.name}</h2>
          <p className="text-sm text-white/45 mt-1.5 leading-relaxed">{addon.description}</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="font-display text-2xl font-bold text-ice-gold-light">{addon.priceLabel}</span>
            {addon.annual && <span className="text-xs text-white/35 bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 rounded-full">Annual renewal</span>}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* About */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2">About this animal</h3>
            <p className="text-sm text-white/60 leading-relaxed">{detail.fullDescription}</p>
          </div>

          {/* Fun facts */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2.5">Key facts</h3>
            <ul className="space-y-2">
              {detail.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="text-aurora/60 mt-0.5 flex-shrink-0" aria-hidden="true">◆</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* What's included */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-2.5">What you receive</h3>
            <ul className="space-y-2">
              {detail.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                  <Check className="w-4 h-4 text-aurora-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Conservation note */}
          <div className="bg-aurora-green/[0.07] border border-aurora-green/20 rounded-xl p-4">
            <p className="text-xs text-aurora-green/80 leading-relaxed">
              <strong className="text-aurora-green">🌿 Conservation impact: </strong>
              {detail.conservation}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-6 py-5 border-t border-white/[0.07] bg-black/20">
          {adopted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-3"
            >
              <p className="text-aurora-green font-bold text-sm flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 fill-aurora-green" aria-hidden="true" />
                Thank you! Your adoption is confirmed.
              </p>
              <p className="text-xs text-white/40 mt-1">
                {/* TODO Part 6: trigger Stripe subscription here */}
                Check your email for adoption pack details — and welcome to the family!
              </p>
            </motion.div>
          ) : (
            <button
              onClick={handleAdopt}
              className="w-full btn-gold py-4 text-sm font-bold flex items-center justify-center gap-2 rounded-xl"
              aria-label={`Adopt and support ${addon.name} for ${addon.priceLabel}`}
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              Adopt for {addon.priceLabel}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
          <p className="text-center text-[11px] text-white/25 mt-2">Cancel anytime · 90-day money-back</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Individual animal card ───────────────────────────────────────────────────
function AnimalCard({
  addon,
  index,
  inView,
  onSelect,
}: {
  addon: (typeof GIFT_ADDONS)[number];
  index: number;
  inView: boolean;
  onSelect: (id: string) => void;
}) {
  const detail = ANIMAL_DETAILS[addon.id];
  if (!detail) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/[0.08] overflow-hidden",
        `bg-gradient-to-b ${detail.gradient}`,
        "hover:border-white/[0.18] hover:-translate-y-1.5 transition-all duration-300",
      )}
      style={{ "--glow": detail.glowColor } as React.CSSProperties}
    >
      {/* Animal emoji — large decorative background */}
      <div
        className="relative h-32 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse at center, ${detail.glowColor} 0%, transparent 70%)` }}
        />
        {/* Large bg emoji */}
        <span className="absolute text-[120px] opacity-[0.08] select-none" aria-hidden="true">
          {detail.bgPattern}
        </span>
        {/* Main emoji */}
        <span className="relative text-6xl z-10 group-hover:scale-110 transition-transform duration-300">
          {addon.icon}
        </span>
        {/* Annual Badge */}
        {addon.annual && (
          <span className="absolute top-3 right-3 text-[10px] font-bold bg-ice-gold/20 text-ice-gold-light border border-ice-gold/30 px-2 py-0.5 rounded-full">
            Annual
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight">{addon.name}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">{addon.description}</p>

        {/* Top 2 facts */}
        <ul className="space-y-1.5 mb-5">
          {detail.facts.slice(0, 2).map((fact) => (
            <li key={fact} className="flex items-start gap-2 text-xs text-white/45">
              <span className="text-aurora/50 flex-shrink-0 mt-0.5" aria-hidden="true">◆</span>
              {fact}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display text-xl font-bold text-ice-gold-light">{addon.priceLabel}</span>
            <p className="text-[11px] text-white/30 mt-0.5">Annual adoption</p>
          </div>
          <button
            onClick={() => onSelect(addon.id)}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
            aria-label={`Learn more about adopting ${addon.name}`}
          >
            <Heart className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
            Adopt
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// ─── AdoptAnAnimal Section ────────────────────────────────────────────────────
export function AdoptAnAnimal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedAddon, setSelectedAddon] = useState<string | null>(null);

  // Only show the 4 animal adoptions (not the physical add-ons)
  const animals = GIFT_ADDONS.filter((a) => a.annual);

  return (
    <>
      <section
        id="adopt"
        className="section"
        aria-labelledby="adopt-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Animal Adoption"
            title={<>Adopt an <span className="text-gradient-aurora">Icelandic Animal</span></>}
            subtitle="Go beyond owning land — adopt one of Iceland's iconic animals. Your annual adoption fee funds real conservation work and connects you personally to Iceland's most extraordinary wildlife."
            center
            id="adopt-heading"
          />

          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
            aria-label="Icelandic animals available for adoption"
          >
            {animals.map((addon, i) => (
              <div key={addon.id} role="listitem">
                <AnimalCard
                  addon={addon}
                  index={i}
                  inView={inView}
                  onSelect={setSelectedAddon}
                />
              </div>
            ))}
          </div>

          {/* Bundle callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="mt-10 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5"
          >
            <div className="flex gap-2 text-3xl flex-shrink-0" aria-hidden="true">🐴🐦🦊🦅</div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-display text-base font-bold text-white">Adopt the Whole Highland Family</p>
              <p className="text-sm text-white/45 mt-1">
                All four animals for <strong className="text-ice-gold-light">€94/year</strong> — save €20 vs. adopting individually.
              </p>
            </div>
            <button
              className="btn-gold px-6 py-3 text-sm font-bold whitespace-nowrap rounded-xl flex-shrink-0"
              onClick={() => {/* TODO Part 6: bundle adoption */}}
              aria-label="Adopt all four animals for €94 per year"
            >
              Adopt All Four · €94/yr
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedAddon && (
          <AdoptModal
            addonId={selectedAddon}
            onClose={() => setSelectedAddon(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
