"use client";
// ─────────────────────────────────────────────────────────────────────────────
// /welcome — Simulated protected owner dashboard
// Demo user: Lady Emma Jónsdóttir · Plot ICE-SNÆ-5SQ-04271
// Sections:
//   1. Greeting hero ("Welcome Lady Emma!")
//   2. Quick-stats strip
//   3. Certificate card (opens preview modal)
//   4. Plot map (Google Maps + What3Words)
//   5. 3D Explorer placeholder
//   6. Virtual handbook + resources
//   7. Guided tours + adopt animal links
// ─────────────────────────────────────────────────────────────────────────────
import { useState }                from "react";
import Link                        from "next/link";
import { motion }                  from "framer-motion";
import {
  Download, Map, BookOpen, Compass,
  Heart, Leaf, ArrowRight, Star,
  ExternalLink, Lock, Box,
} from "lucide-react";
import { cn, formatDate }          from "@/lib/utils";
import { DEMO_USER, DEMO_EXTRAS }  from "@/lib/demo-user";
import { CertificateModal }        from "@/components/dashboard/CertificateModal";
import { DashboardPlotMap }        from "@/components/dashboard/DashboardPlotMap";

// ─── Section card wrapper ─────────────────────────────────────────────────────
function DashCard({
  children,
  className,
  delay = 0,
}: {
  children:  React.ReactNode;
  className?: string;
  delay?:    number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0  }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("glass-card", className)}
    >
      {children}
    </motion.div>
  );
}

// ─── 3D Explorer placeholder ──────────────────────────────────────────────────
function ExplorerPlaceholder() {
  return (
    <DashCard delay={0.5}>
      <div className="p-5 border-b border-white/[0.07] flex items-center gap-2">
        <Box className="w-4 h-4 text-aurora" aria-hidden="true" />
        <h2 className="font-display text-base font-semibold text-white">
          3D Plot Explorer
        </h2>
        <span className="ml-auto font-body text-[10px] text-aurora bg-aurora/10 border border-aurora/20 px-2 py-0.5 rounded-full">
          Coming soon
        </span>
      </div>

      <div
        className="relative overflow-hidden bg-ice-midnight"
        style={{ height: 220 }}
        role="img"
        aria-label="3D explorer placeholder — interactive 3D model of your Snæfellsnes plot area coming soon"
      >
        {/* Decorative 3D grid */}
        <svg
          viewBox="0 0 400 220"
          className="w-full h-full opacity-30"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#A8D8EA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#060D19" stopOpacity="0"   />
            </linearGradient>
          </defs>
          {/* Perspective grid lines */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line key={`v${i}`}
              x1={200 + (i - 4) * 20} y1={40}
              x2={200 + (i - 4) * 60} y2={220}
              stroke="url(#gridFade)" strokeWidth="0.6"
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const y = 60 + i * 32;
            const spread = 10 + i * 18;
            return (
              <line key={`h${i}`}
                x1={200 - spread} y1={y}
                x2={200 + spread} y2={y}
                stroke="url(#gridFade)" strokeWidth="0.6"
              />
            );
          })}
          {/* Glacier silhouette */}
          <path
            d="M100,220 L140,150 L170,120 L200,80 L230,120 L260,150 L300,220Z"
            fill="#0A2540" opacity="0.6"
          />
          <path d="M190,85 L200,68 L210,85 L205,90 L200,88 L195,90Z" fill="#C8ECF7" opacity="0.4" />
          {/* Plot marker */}
          <circle cx="220" cy="160" r="5" fill="#39E8A0" opacity="0.8" />
          <line x1="220" y1="155" x2="220" y2="130" stroke="#39E8A0" strokeWidth="0.8" strokeDasharray="3,2" />
          <text x="225" y="130" fontSize="7" fill="#39E8A0" opacity="0.7" fontFamily="serif">Your plot</text>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-display text-sm text-white/40 italic mb-1">
            Interactive 3D plot explorer
          </p>
          <p className="font-body text-xs text-white/25">
            Explore your souvenir plot in three dimensions — terrain, glacier views, lava fields.
            Available with the 10 sq ft Luxury Pack or as an upgrade.
          </p>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        <p className="font-body text-xs text-white/30 italic">
          {/* TODO: Wire to real WebGL 3D terrain viewer (Cesium / Mapbox 3D tiles) */}
          Powered by Snæfellsnes DEM data
        </p>
        <Link
          href="/buy-a-plot#luxury-10sqft"
          className="font-body text-xs text-aurora hover:text-glacier transition-colors underline underline-offset-2"
        >
          Upgrade to unlock
        </Link>
      </div>
    </DashCard>
  );
}

// ─── Resource link card ───────────────────────────────────────────────────────
function ResourceLink({
  icon,
  title,
  desc,
  href,
  external = false,
  badge,
}: {
  icon:      React.ReactNode;
  title:     string;
  desc:      string;
  href:      string;
  external?: boolean;
  badge?:    string;
}) {
  const Wrapper = external ? "a" : Link;
  const extraProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      href={href}
      {...extraProps}
      className={cn(
        "group flex items-start gap-3.5 p-4 rounded-xl border border-white/[0.07]",
        "bg-white/[0.02] hover:bg-white/[0.05] hover:border-glacier/20",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
      )}
    >
      <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-display text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
            {title}
          </p>
          {badge && (
            <span className="font-body text-[10px] text-spirit bg-spirit/10 border border-spirit/20 px-1.5 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="font-body text-xs text-white/40 mt-0.5 leading-snug">{desc}</p>
      </div>
      <ArrowRight
        className="w-4 h-4 text-white/20 group-hover:text-glacier group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5"
        aria-hidden="true"
      />
    </Wrapper>
  );
}

// ─── Main dashboard page ──────────────────────────────────────────────────────
export default function WelcomePage() {
  const [certOpen, setCertOpen] = useState(false);
  const user                    = DEMO_USER;

  return (
    <>
      {/* ── Page ─────────────────────────────────────────────────────────── */}
      <div className="min-h-screen bg-ice-black pt-[72px]">

        {/* ── Hero greeting ──────────────────────────────────────────────── */}
        <div className="relative bg-ice-navy overflow-hidden">
          <div aria-hidden="true">
            <div className="aurora-orb w-[600px] h-[400px] bg-glacier/7 -top-20 right-0"
              style={{ animationDelay: "0s" }} />
            <div className="aurora-orb w-[400px] h-[300px] bg-spirit/5 bottom-0 left-0"
              style={{ animationDelay: "-9s" }} />
          </div>
          <div className="grain-overlay" aria-hidden="true" />
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

            {/* Demo notice */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-rune-gold/10 border border-rune-gold/20"
            >
              <Lock className="w-3 h-3 text-rune-gold/60" aria-hidden="true" />
              <span className="font-body text-xs text-rune-gold/70">
                Demo dashboard — showing example owner data
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
            >
              <p className="eyebrow mb-3">Owner dashboard</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[0.95] mb-3">
                Welcome,{" "}
                <em className="not-italic text-gradient-glacier">
                  {user.titleStyle} {user.name.split(" ")[0]}
                </em>
                !
              </h1>
              <p className="font-body text-base text-white/45 max-w-xl leading-relaxed">
                Your souvenir plot in the Snæfellsnes Reserve is confirmed.
                Bárður Snæfellsás watches over it. The huldufólk know your name.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                { label: "Plot reference",  value: user.plotRef,                        icon: "📍" },
                { label: "Pack size",       value: "5 sq ft Luxury",                   icon: "📦" },
                { label: "Title",           value: `${user.titleStyle} of Snæfellsnes`, icon: "👑" },
                { label: "Purchase date",   value: formatDate(user.purchaseDate),       icon: "📅" },
              ].map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-2.5"
                >
                  <span className="text-base" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="font-body text-[10px] text-white/35 uppercase tracking-wider leading-none mb-0.5">{label}</p>
                    <p className="font-body text-sm text-white/80 font-semibold leading-none">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Main dashboard grid ─────────────────────────────────────────── */}
        <main
          id="dashboard-content"
          aria-label="Owner dashboard"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* ── Left column (2/3) ──────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Certificate card */}
              <DashCard delay={0.1}>
                <div className="p-5 border-b border-white/[0.07] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">📜</span>
                    <h2 className="font-display text-base font-semibold text-white">
                      Your Certificate
                    </h2>
                  </div>
                  <span className="font-body text-xs text-spirit bg-spirit/10 border border-spirit/20 px-2 py-1 rounded-full">
                    Ready to download
                  </span>
                </div>

                <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* Certificate thumbnail */}
                  <button
                    type="button"
                    onClick={() => setCertOpen(true)}
                    aria-label="Preview your certificate"
                    className={cn(
                      "flex-shrink-0 w-28 rounded-xl overflow-hidden",
                      "border-2 border-rune-gold/25 hover:border-rune-gold/50",
                      "transition-all duration-200 cursor-pointer group",
                      "bg-gradient-to-b from-ice-navy to-ice-deep",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
                    )}
                    style={{ aspectRatio: "210/297" }}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="text-glacier text-xl mb-1" aria-hidden="true">❄</span>
                      <p className="font-display text-[8px] text-white/60 text-center leading-tight">
                        {user.titleStyle} {user.name}
                      </p>
                      <div className="w-8 h-px bg-rune-gold/30 my-1" />
                      <p className="font-body text-[7px] text-white/30 text-center">
                        Snæfellsnes Reserve
                      </p>
                    </div>
                  </button>

                  <div className="flex-1">
                    <p className="font-display text-lg font-semibold text-white mb-1">
                      {user.titleStyle} {user.name}
                    </p>
                    <p className="font-body text-sm text-white/45 mb-1">
                      {DEMO_EXTRAS.plotName} · {DEMO_EXTRAS.reserveName}
                    </p>
                    <p className="font-body text-xs text-white/30 mb-4">
                      Purchased {formatDate(user.purchaseDate)} · Ref: {user.plotRef}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setCertOpen(true)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2.5 rounded-xl",
                          "bg-glacier text-ice-black font-display font-semibold text-sm",
                          "hover:bg-glacier-light hover:shadow-glacier",
                          "transition-all duration-200 btn-spirit"
                        )}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" />
                        Preview & Download
                      </button>
                      <button
                        type="button"
                        onClick={() => setCertOpen(true)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/12 text-white/60 hover:text-white hover:border-white/25 font-body text-sm transition-all"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </DashCard>

              {/* Plot map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DashboardPlotMap user={user} />
              </motion.div>

              {/* 3D explorer */}
              <ExplorerPlaceholder />
            </div>

            {/* ── Right column (1/3) ─────────────────────────────────────── */}
            <div className="space-y-6">

              {/* Pack summary */}
              <DashCard delay={0.15} className="p-5">
                <p className="eyebrow mb-4">Your pack</p>
                <div className="space-y-2.5">
                  {[
                    { icon: "📜", label: "A4 framing certificate",         done: true  },
                    { icon: "📦", label: "Gift box (dispatched)",           done: true  },
                    { icon: "🪨", label: "Volcanic basalt coaster",         done: true  },
                    { icon: "🗺",  label: "Snæfellsnes printed map",         done: true  },
                    { icon: "🔖", label: "Plant a Tree bookmark",           done: true  },
                    { icon: "📱", label: "App access activated",            done: true  },
                    { icon: "🌿", label: "Conservation contribution made",  done: true  },
                  ].map(({ icon, label, done }) => (
                    <div key={label} className="flex items-center gap-2.5">
                      <span className="text-sm" aria-hidden="true">{icon}</span>
                      <span className={cn("font-body text-sm flex-1", done ? "text-white/65" : "text-white/30")}>
                        {label}
                      </span>
                      {done && (
                        <span className="w-4 h-4 rounded-full bg-spirit/15 border border-spirit/25 flex items-center justify-center flex-shrink-0" aria-label="included">
                          <Star className="w-2.5 h-2.5 text-spirit fill-spirit" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Adopted animal */}
                {DEMO_EXTRAS.adoptedAnimal && (
                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-2">
                      Your adopted animal
                    </p>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                      <span className="text-2xl" aria-hidden="true">🐴</span>
                      <div>
                        <p className="font-display text-sm font-semibold text-white">
                          {DEMO_EXTRAS.adoptedAnimal.name}
                        </p>
                        <p className="font-body text-xs text-white/40">
                          {DEMO_EXTRAS.adoptedAnimal.species}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Planted tree */}
                {DEMO_EXTRAS.plantedTree && (
                  <div className="mt-3 p-3 rounded-xl bg-spirit/5 border border-spirit/15">
                    <div className="flex items-center gap-2 mb-1">
                      <Leaf className="w-3.5 h-3.5 text-spirit" aria-hidden="true" />
                      <p className="font-body text-xs text-spirit/80 font-semibold">
                        Tree planted in your name
                      </p>
                    </div>
                    <p className="font-body text-xs text-white/40 leading-snug">
                      {DEMO_EXTRAS.plantedTree.species}<br />
                      {DEMO_EXTRAS.plantedTree.location}<br />
                      Planted {formatDate(DEMO_EXTRAS.plantedTree.planted)}
                    </p>
                  </div>
                )}
              </DashCard>

              {/* Resources */}
              <DashCard delay={0.25} className="p-5">
                <p className="eyebrow mb-4">Resources</p>
                <div className="space-y-2">
                  <ResourceLink
                    icon={<BookOpen className="w-4 h-4 text-glacier" aria-hidden="true" />}
                    title="Virtual Handbook"
                    desc="The complete Snæfellsnes owner's guide — lore, conservation, visitor tips"
                    href="#"
                    badge="PDF"
                  />
                  <ResourceLink
                    icon={<Map className="w-4 h-4 text-glacier" aria-hidden="true" />}
                    title="Interactive Reserve Map"
                    desc="Explore the full reserve, trails, lava fields and huldufólk sites"
                    href="/the-land/snaefellsnes"
                  />
                  <ResourceLink
                    icon={<Star className="w-4 h-4 text-rune-gold/70" aria-hidden="true" />}
                    title="Secrets of the Glacier"
                    desc="Bárður Snæfellsás mythology, huldufólk stories, energy centre history"
                    href="/the-land/snaefellsnes"
                  />
                </div>
              </DashCard>

              {/* Guided tours */}
              <DashCard delay={0.3} className="p-5">
                <p className="eyebrow mb-4">Your next adventure</p>
                <div className="space-y-2">
                  <ResourceLink
                    icon={<Compass className="w-4 h-4 text-spirit" aria-hidden="true" />}
                    title="Glacier Soul Walk"
                    desc="Visit your plot · Bárður statue · huldufólk lore — 10% plot-owner discount"
                    href="/guided-tours"
                  />
                  <ResourceLink
                    icon={<span className="text-base" aria-hidden="true">🌌</span>}
                    title="Northern Lights Vigil"
                    desc="Watch the aurora over Snæfellsjökull from your souvenir plot"
                    href="/guided-tours"
                  />
                  <ResourceLink
                    icon={<Heart className="w-4 h-4 text-aurora-pink/70" aria-hidden="true" />}
                    title="Adopt an Icelandic Horse"
                    desc="Symbolic adoption certificate — perfect companion to your plot"
                    href="/adopt"
                  />
                </div>
              </DashCard>

              {/* Need help */}
              <DashCard delay={0.35} className="p-5">
                <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-3">
                  Need help?
                </p>
                <p className="font-body text-sm text-white/45 mb-3 leading-relaxed">
                  Our team in Reykjavík is happy to help with certificate changes,
                  delivery queries, or plot visit planning.
                </p>
                <a
                  href="mailto:hello@icelandictitles.com"
                  className="flex items-center gap-2 font-body text-sm text-glacier hover:text-glacier-light transition-colors"
                >
                  hello@icelandictitles.com
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </DashCard>

            </div>
          </div>
        </main>
      </div>

      {/* Certificate modal */}
      <CertificateModal
        user={user}
        isOpen={certOpen}
        onClose={() => setCertOpen(false)}
      />
    </>
  );
}
