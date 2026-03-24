"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ShopHero — /buy-a-plot page header
// Atmospheric header with aurora orbs, glacier imagery placeholder,
// Bárður reference, breadcrumb nav
// ─────────────────────────────────────────────────────────────────────────────
import Link         from "next/link";
import { motion }   from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import { cn }       from "@/lib/utils";

export function ShopHero() {
  return (
    <section
      aria-label="Buy a souvenir plot — page header"
      className="relative pt-[72px] pb-16 overflow-hidden bg-ice-navy"
    >
      {/* Aurora orbs */}
      <div aria-hidden="true">
        <div
          className="aurora-orb w-[600px] h-[400px] bg-glacier/8 -top-20 right-0"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-orb w-[400px] h-[400px] bg-spirit/5 bottom-0 left-0"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 font-body text-xs text-white/35">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home className="w-3 h-3" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3 h-3" />
            </li>
            <li aria-current="page" className="text-white/60">
              Buy a Plot
            </li>
          </ol>
        </nav>

        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-4">Snæfellsnes Reserve · Iceland</p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.0] mb-5">
            Own a piece of{" "}
            <em className="not-italic text-gradient-glacier">mystical Iceland</em>
          </h1>

          <p className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
            Claim your souvenir plot in the Snæfellsnes Reserve, within sight of the
            legendary Snæfellsjökull glacier — home of guardian spirit{" "}
            <strong className="text-white/75 font-semibold">Bárður Snæfellsás</strong>
            {" "}and the ancient{" "}
            <strong className="text-white/75 font-semibold">huldufólk</strong>.
            Choose your pack below and add your name to become an official
            Jarl, Lord or Lady of Snæfellsnes.
          </p>
        </motion.div>

        {/* Feature pills row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y:  0  }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          {[
            { icon: "❄", text: "Personalised certificate" },
            { icon: "📍", text: "GPS plot coordinates"    },
            { icon: "🌿", text: "Conservation funded"     },
            { icon: "📦", text: "Free worldwide shipping" },
            { icon: "🛡", text: "90-day guarantee"        },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full",
                "bg-white/[0.05] border border-white/[0.08]",
                "font-body text-xs text-white/55"
              )}
            >
              <span aria-hidden="true">{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
