"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveDescription — long-form Snæfellsnes lore
// Bárður guardian · huldufólk · energy centre · conservation
// ─────────────────────────────────────────────────────────────────────────────
import { motion }  from "framer-motion";
import Link        from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import type { Reserve } from "@/types";

// Pull-quote component
function PullQuote({ text, cite }: { text: string; cite: string }) {
  return (
    <blockquote className="my-8 border-l-2 border-glacier/30 pl-6">
      <p className="font-display text-xl md:text-2xl font-light text-white/80 italic leading-relaxed">
        "{text}"
      </p>
      <cite className="block mt-3 font-body text-xs text-white/35 not-italic tracking-wider uppercase">
        — {cite}
      </cite>
    </blockquote>
  );
}

// Lore section with icon
function LoreBlock({
  icon,
  title,
  children,
  delay = 0,
}: {
  icon:     string;
  title:    string;
  children: React.ReactNode;
  delay?:   number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="flex gap-5"
    >
      <div
        className="w-12 h-12 flex-shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-2xl mt-1"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
        <div className="font-body text-[0.95rem] text-white/55 leading-[1.85] space-y-3">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function ReserveDescription({ reserve }: { reserve: Reserve }) {
  return (
    <section
      aria-label="About the Snæfellsnes Reserve"
      className="relative bg-ice-black section-pad"
    >
      {/* Aurora accent */}
      <div
        className="aurora-orb w-[500px] h-[500px] bg-aurora-violet/6 top-0 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-4s" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* ── Main prose column ──────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">Your plot · The story</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-[1.05] mb-8">
                Where{" "}
                <em className="not-italic text-gradient-glacier">ancient power</em>
                {" "}meets the{" "}
                <em className="not-italic text-gradient-rune">living world</em>
              </h2>
            </motion.div>

            <div className="space-y-12">

              {/* Energy centre */}
              <LoreBlock icon="♾" title="One of Earth's Seven Energy Centres" delay={0.05}>
                <p>
                  Stretching like a rugged arm into the North Atlantic, the Snæfellsnes
                  peninsula is Iceland at its most mythical. At its tip stands
                  Snæfellsjökull — a glacier-capped volcano so magnificent that Jules
                  Verne chose it as the gateway to the centre of the Earth in his 1864
                  novel.
                </p>
                <p>
                  But the glacier's true power runs deeper than fiction. Snæfellsjökull
                  is considered one of the planet's seven great energy centres — a
                  spiritual chakra where the Earth's energy converges and radiates
                  outward. Visitors routinely report overwhelming feelings of peace,
                  clarity, and transformation standing on its slopes.
                </p>
              </LoreBlock>

              <PullQuote
                text="The glacier radiates a power you can feel before you see it — a presence that changes everything."
                cite="Archaeologist & folklore researcher, Reykjavík University"
              />

              {/* Bárður */}
              <LoreBlock icon="👁" title="Guardian Spirit Bárður Snæfellsás" delay={0.1}>
                <p>
                  At the heart of this mythology stands Bárður Snæfellsás — the
                  peninsula's eternal guardian. Half-human, half-troll by heritage,
                  Bárður was a Norse settler chieftain of extraordinary strength who,
                  overcome by grief after his daughter was cast into the sea by her
                  cousins, retreated into the Snæfellsjökull glacier — and never
                  returned.
                </p>
                <p>
                  Instead, he became its immortal protector. He is still venerated by
                  Icelanders today; his carved wooden figure stands at Arnarstapi, gazing
                  over the reserve. Offerings are occasionally left at his feet. He is
                  credited with guiding lost travellers, warning fishermen of storms, and
                  watching over all who pass through his domain.
                </p>
              </LoreBlock>

              {/* Huldufólk */}
              <LoreBlock icon="🧝" title="The Huldufólk — Iceland's Hidden People" delay={0.15}>
                <p>
                  Every lava field, every ancient rock formation across Snæfellsnes is
                  said to house <strong className="text-white/80">huldufólk</strong> —
                  the hidden people. These beautiful, human-sized supernatural beings
                  live alongside humans, largely invisible except to those with the sight.
                  They are not the diminutive garden fairies of northern European
                  folklore: Icelandic elves are human-like, cultured, and powerful.
                </p>
                <p>
                  Their influence on Icelandic life is remarkable. Road construction
                  projects have genuinely been re-routed to protect suspected elf
                  habitats. Over 54% of Icelanders believe in — or refuse to rule out —
                  the existence of huldufólk. Your souvenir plot sits in one of the most
                  elf-rich landscapes in Iceland.
                </p>
              </LoreBlock>

              {/* Conservation */}
              <LoreBlock icon="🌿" title="Conservation, Rewilding & Restoration" delay={0.2}>
                <p>{reserve.conservation}</p>
                <p>
                  The glacier itself is predicted to be ice-free by 2050 if current
                  climate trends continue — a fate we are determined to document, resist,
                  and one day reverse. Every souvenir plot purchased contributes directly
                  to the reserve's long-term stewardship.
                </p>
              </LoreBlock>
            </div>
          </div>

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <aside className="space-y-5 lg:sticky lg:top-28">

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-base font-semibold text-white mb-4">
                Reserve at a glance
              </h3>
              <dl className="space-y-3">
                {[
                  { label: "Glacier height",     value: "1,446 m (4,744 ft)"         },
                  { label: "National park",       value: "Snæfellsjökull NP"           },
                  { label: "Coordinates",         value: "64.81°N, 23.77°W"            },
                  { label: "What3Words",          value: reserve.what3words            },
                  { label: "Distance from Reykjavík", value: "~190 km (2.5 hrs drive)" },
                  { label: "Best season",        value: "Year-round (aurora Oct–Mar)" },
                  { label: "Conservation status", value: "National Park since 2001"   },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-3 text-sm">
                    <dt className="font-body text-white/40 flex-shrink-0">{label}</dt>
                    <dd className="font-body text-white/70 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Wildlife sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-base font-semibold text-white mb-4">
                Wildlife on the peninsula
              </h3>
              <ul className="space-y-2.5">
                {[
                  { icon: "🐦", name: "Atlantic puffin",     note: "Cliff colonies, May–Aug"       },
                  { icon: "🦊", name: "Arctic fox",           note: "Iceland's only wild mammal"    },
                  { icon: "🦭", name: "Harbour seal",         note: "Ytri Tunga beach colony"       },
                  { icon: "🐋", name: "Orca & minke whale",  note: "Coastal waters, seasonal"      },
                  { icon: "🦅", name: "White-tailed eagle",  note: "Rare, recovering population"   },
                ].map(({ icon, name, note }) => (
                  <li key={name} className="flex items-start gap-2.5">
                    <span className="text-lg flex-shrink-0" aria-hidden="true">{icon}</span>
                    <div>
                      <p className="font-body text-sm text-white/70">{name}</p>
                      <p className="font-body text-xs text-white/35 italic">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-glacier/10 to-transparent border border-glacier/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-4 h-4 text-spirit" aria-hidden="true" />
                <span className="font-body text-xs text-spirit font-semibold uppercase tracking-wider">
                  Your souvenir plot
                </span>
              </div>
              <p className="font-body text-sm text-white/55 mb-4 leading-relaxed">
                Ready to claim your corner of Snæfellsnes? Choose your plot and receive
                your personalised certificate as Jarl, Lord or Lady.
              </p>
              <Link
                href="/buy-a-plot"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-glacier text-ice-black font-display font-semibold text-sm hover:bg-glacier-light hover:shadow-glacier transition-all duration-200 btn-spirit"
              >
                Claim Your Plot
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}
