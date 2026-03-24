"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-wrapper";
import { ReserveCard } from "./ReserveCard";
import { RESERVES } from "@/lib/data";

// ─── Reserves Section ─────────────────────────────────────────────────────────
export function Reserves() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="reserves"
      className="relative section"
      aria-labelledby="reserves-heading"
    >
      {/* Subtle tinted background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <SectionHeader
            eyebrow="Our Nature Reserves"
            title="Three Extraordinary Locations"
            subtitle="Each reserve is managed for long-term conservation with rigorous land stewardship. Your souvenir plot is a tiny piece of something vast and magnificent."
            center
            id="reserves-heading"
            dividerColor="aurora"
          />
        </div>

        {/* Reserve cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
          role="list"
          aria-label="Icelandic Titles nature reserves"
        >
          {RESERVES.map((reserve, i) => (
            <ReserveCard
              key={reserve.slug}
              reserve={reserve}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Reserve comparison quick-glance table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.06]">
              <h3 className="font-display text-base font-semibold text-white/70">
                Reserve Quick Comparison
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table
                className="w-full text-sm"
                aria-label="Comparison table of three Icelandic Titles nature reserves"
              >
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th
                      className="text-left px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35"
                      scope="col"
                    >
                      Reserve
                    </th>
                    <th
                      className="text-left px-4 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35 hidden sm:table-cell"
                      scope="col"
                    >
                      Location
                    </th>
                    <th
                      className="text-left px-4 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35"
                      scope="col"
                    >
                      Highlight
                    </th>
                    <th
                      className="text-left px-4 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-white/35 hidden md:table-cell"
                      scope="col"
                    >
                      Conservation Focus
                    </th>
                    <th
                      className="px-4 py-3.5"
                      scope="col"
                    >
                      <span className="sr-only">Buy plot</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      reserve: RESERVES[0],
                      location: "SW Iceland, 40km from Reykjavík",
                      highlight: "UNESCO World Heritage rift valley",
                      conservation: "Birch reforestation & water quality",
                    },
                    {
                      reserve: RESERVES[1],
                      location: "Central Highlands, Landmannalaugar",
                      highlight: "Rainbow rhyolite mountains",
                      conservation: "Arctic fox & lupine control",
                    },
                    {
                      reserve: RESERVES[2],
                      location: "SE Iceland, Vatnajökull edge",
                      highlight: "Europe's largest glacier",
                      conservation: "Glacial retreat monitoring",
                    },
                  ].map(({ reserve, location, highlight, conservation }, i) => (
                    <tr
                      key={reserve.slug}
                      className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-white">
                          {reserve.name}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-white/45 hidden sm:table-cell">
                        {location}
                      </td>
                      <td className="px-4 py-4 text-aurora/80">
                        {highlight}
                      </td>
                      <td className="px-4 py-4 text-white/45 hidden md:table-cell">
                        {conservation}
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Link
                          href={`/buy-a-plot?reserve=${reserve.slug}`}
                          className="text-xs font-bold text-aurora hover:text-aurora/70 transition-colors whitespace-nowrap"
                          aria-label={`Buy a plot at ${reserve.name}`}
                        >
                          Buy plot →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Trust footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-white/25 mt-8 max-w-xl mx-auto leading-relaxed"
        >
          All reserves are managed by Icelandic Titles ehf. under Icelandic environmental law.
          Conservation activities are independently monitored. Souvenir purchases — no legal land transfer.
        </motion.p>
      </div>
    </section>
  );
}
