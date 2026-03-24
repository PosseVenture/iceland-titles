"use client";
// ─────────────────────────────────────────────────────────────────────────────
// TheLandHero — /the-land page header
// Atmospheric aurora header with breadcrumb
// ─────────────────────────────────────────────────────────────────────────────
import Link       from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight, Mountain } from "lucide-react";

export function TheLandHero() {
  return (
    <section
      aria-label="The Land — page header"
      className="relative pt-[72px] overflow-hidden bg-ice-navy"
    >
      {/* Aurora orbs */}
      <div aria-hidden="true">
        <div
          className="aurora-orb w-[700px] h-[500px] bg-glacier/7 -top-20 -right-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-orb w-[400px] h-[400px] bg-aurora-violet/6 bottom-0 left-0"
          style={{ animationDelay: "-11s" }}
        />
      </div>
      <div className="grain-overlay" aria-hidden="true" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 font-body text-xs text-white/35">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white/70 transition-colors">
                <Home className="w-3 h-3" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
            <li aria-current="page" className="text-white/55">The Land</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">Snæfellsnes Reserve · Iceland</p>

          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-light text-white leading-[0.95] mb-6">
            Where the{" "}
            <em className="not-italic text-gradient-glacier">glacier</em>
            <br />holds the{" "}
            <em className="not-italic text-gradient-rune">souls of Iceland</em>
          </h1>

          <p className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            At the tip of the Snæfellsnes peninsula stands Snæfellsjökull — a
            1,446-metre ice-crowned volcano that Jules Verne chose as the gateway to
            the centre of the Earth. It is also, according to Icelandic tradition, the
            home of guardian spirit{" "}
            <strong className="text-white/80 font-semibold">Bárður Snæfellsás</strong>{" "}
            and one of Earth's seven great energy centres — a place of ancient power,
            transformation, and the ever-present{" "}
            <strong className="text-white/80 font-semibold">huldufólk</strong>.
          </p>
        </motion.div>

        {/* Spirit indicators row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-3 mt-10"
        >
          {[
            { icon: "🗻", label: "Snæfellsjökull National Park" },
            { icon: "👁",  label: "Guardian spirit Bárður"      },
            { icon: "🧝", label: "Huldufólk lava fields"        },
            { icon: "♾",  label: "Earth energy centre"          },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] font-body text-xs text-white/55"
            >
              <span aria-hidden="true">{icon}</span>
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
