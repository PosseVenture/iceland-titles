"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

// ─── Step data ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    icon: "🗺",
    title: "Choose Your Reserve",
    description:
      "Select from three stunning Icelandic nature reserves — Thingvellir UNESCO site, the geothermal Highland View, or the epic Glacier Estate.",
    color: "from-aurora/20 to-aurora-violet/10",
    borderColor: "border-aurora/20 hover:border-aurora/40",
    numberColor: "text-aurora",
  },
  {
    number: "02",
    icon: "📏",
    title: "Pick Your Plot Size",
    description:
      "Choose 1, 5, or 10 square feet. Each comes with GPS coordinates, a What3Words address, and your personalised souvenir certificate.",
    color: "from-aurora-violet/20 to-purple-900/10",
    borderColor: "border-aurora-violet/20 hover:border-aurora-violet/40",
    numberColor: "text-purple-400",
  },
  {
    number: "03",
    icon: "👑",
    title: "Receive Your Title",
    description:
      "Style yourself as Jarl, Lord or Lady of the Icelandic Highlands — our registered souvenir trademark. Instantly by email, then physically by post.",
    color: "from-ice-gold/15 to-amber-900/10",
    borderColor: "border-ice-gold/20 hover:border-ice-gold/40",
    numberColor: "text-ice-gold-light",
  },
  {
    number: "04",
    icon: "🌿",
    title: "Help Iceland Thrive",
    description:
      "Your purchase directly funds conservation and restoration of Iceland's precious highland landscapes — birch woodlands, arctic fox habitats, and glacial ecosystems.",
    color: "from-aurora-green/15 to-emerald-900/10",
    borderColor: "border-aurora-green/20 hover:border-aurora-green/40",
    numberColor: "text-aurora-green",
  },
] as const;

// ─── Individual step card ─────────────────────────────────────────────────────
function StepCard({
  step,
  index,
  inView,
}: {
  step: (typeof STEPS)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative group
        bg-gradient-to-br ${step.color}
        border ${step.borderColor}
        rounded-2xl p-7
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-card
      `}
      role="listitem"
    >
      {/* Step number — large watermark */}
      <div
        className={`absolute top-4 right-5 font-display text-5xl font-bold opacity-[0.08] ${step.numberColor}`}
        aria-hidden="true"
      >
        {step.number}
      </div>

      {/* Icon */}
      <div
        className="text-3xl mb-5"
        aria-hidden="true"
        role="img"
      >
        {step.icon}
      </div>

      {/* Step indicator */}
      <div className={`font-display text-xs font-bold tracking-[0.2em] uppercase mb-3 ${step.numberColor}`}>
        Step {step.number}
      </div>

      <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight">
        {step.title}
      </h3>
      <p className="text-sm text-white/55 leading-relaxed">
        {step.description}
      </p>

      {/* Connector arrow (hidden on last item) */}
      {index < STEPS.length - 1 && (
        <div
          className="hidden xl:block absolute top-1/2 -right-5 -translate-y-1/2 text-white/15 text-xl z-10"
          aria-hidden="true"
        >
          →
        </div>
      )}
    </motion.div>
  );
}

// ─── HowItWorks Component ─────────────────────────────────────────────────────
export function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper
      id="how-it-works"
      ariaLabelledBy="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Simple & Magical"
          title="How It Works"
          subtitle="In just a few clicks, you'll have a personalised souvenir certificate and your very own piece of Iceland's extraordinary landscape."
          center
          id="how-it-works-heading"
        />

        <div ref={ref}>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative"
            role="list"
            aria-label="Four steps to owning your Icelandic plot"
          >
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} inView={inView} />
            ))}
          </ul>
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-white/35 italic">
            🛡 90-day money-back guarantee · Free worldwide shipping · Instant digital delivery
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
