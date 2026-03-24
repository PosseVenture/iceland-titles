"use client";
// ─────────────────────────────────────────────────────────────────────────────
// VirtualTourSection — Pan360 / virtual tour embed placeholder
// YouTube-style iframe placeholder with scene selector
// ─────────────────────────────────────────────────────────────────────────────
import { useState }        from "react";
import { motion }          from "framer-motion";
import { Play, Globe, Eye } from "lucide-react";
import { cn }              from "@/lib/utils";

// Tour scene cards
const SCENES = [
  {
    id:       "glacier-summit",
    title:    "Glacier Summit View",
    desc:     "360° panorama from the edge of the Snæfellsjökull ice cap",
    icon:     "🗻",
    // TODO: Replace with real 360° embed URL (Kuula, Matterport, or YouTube 360)
    // Query:  "Snæfellsjökull glacier 360 virtual tour"
    embedUrl: null,
  },
  {
    id:       "arnarstapi",
    title:    "Arnarstapi Sea Arch",
    desc:     "Walk the dramatic volcanic coastline where Bárður's statue stands",
    icon:     "🌊",
    embedUrl: null,
  },
  {
    id:       "lava-fields",
    title:    "Huldufólk Lava Fields",
    desc:     "Explore the ancient lava formations where Iceland's hidden people dwell",
    icon:     "🧝",
    embedUrl: null,
  },
  {
    id:       "northern-lights",
    title:    "Northern Lights Vigil",
    desc:     "Time-lapse aurora over the glacier — the spirits travel within the light",
    icon:     "🌌",
    embedUrl: null,
  },
] as const;

export function VirtualTourSection() {
  const [activeScene, setActiveScene] = useState<string>(SCENES[0].id);
  const scene = SCENES.find((s) => s.id === activeScene) ?? SCENES[0];

  return (
    <section
      aria-label="Virtual 360° tour of Snæfellsnes Reserve"
      className="relative bg-ice-black section-pad"
    >
      <div
        className="aurora-orb w-[600px] h-[400px] bg-aurora-violet/6 top-0 left-0"
        aria-hidden="true"
        style={{ animationDelay: "-5s" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="eyebrow mb-3">Virtual experience</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-light text-white">
            Explore{" "}
            <em className="not-italic text-gradient-spirit">360°</em>
            {" "}from anywhere
          </h2>
          <p className="font-body text-sm text-white/45 mt-3 max-w-xl leading-relaxed">
            Step inside the mystical Snæfellsnes Reserve without leaving home.
            Choose a scene below to begin your virtual pilgrimage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">

          {/* Main viewer */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-ice-deep aspect-video"
              aria-live="polite"
              aria-label={`Virtual tour: ${scene.title}`}
            >
              {scene.embedUrl ? (
                /* Real embed when URL is provided */
                <iframe
                  src={scene.embedUrl}
                  title={`360° virtual tour: ${scene.title} — ${scene.desc}`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; gyroscope; autoplay"
                />
              ) : (
                /* Placeholder state */
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  {/* Decorative glacier SVG */}
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 800 450" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <radialGradient id="vtGlow" cx="50%" cy="45%" r="50%">
                          <stop offset="0%"   stopColor="#A8D8EA" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#060D19" stopOpacity="0"   />
                        </radialGradient>
                      </defs>
                      <rect width="800" height="450" fill="url(#vtGlow)" />
                      <path d="M0,450 L0,280 L100,220 L180,170 L240,130 L300,90 L360,50 L400,30 L440,50 L500,90 L560,130 L620,170 L700,220 L780,265 L800,280 L800,450Z"
                        fill="#0A2540" opacity="0.7" />
                      <path d="M370,60 L400,30 L430,60 L415,72 L400,68 L385,72Z" fill="#C8ECF7" opacity="0.5" />
                      {/* Aurora scan lines */}
                      <path d="M0,200 Q200,165 400,190 Q600,215 800,185" stroke="#39E8A0" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
                      <path d="M0,230 Q250,200 500,225 Q650,240 800,215" stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.18" fill="none" />
                    </svg>
                  </div>

                  {/* Play button */}
                  <div className="relative z-10 mb-5">
                    <div className="w-20 h-20 rounded-full bg-glacier/15 border-2 border-glacier/30 flex items-center justify-center hover:bg-glacier/25 transition-colors cursor-pointer group">
                      <Play className="w-8 h-8 text-glacier ml-1 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-glacier/20 animate-spirit-pulse pointer-events-none" aria-hidden="true" />
                  </div>

                  <div className="relative z-10">
                    <p className="font-display text-2xl font-light text-white mb-2">
                      {scene.icon} {scene.title}
                    </p>
                    <p className="font-body text-sm text-white/45 mb-4 max-w-sm">
                      {scene.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                      <Globe className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
                      <span className="font-body text-xs text-white/30 italic">
                        {/* TODO: Add real 360° embed URL for this scene */}
                        360° embed placeholder — replace with Kuula, Matterport, or YouTube 360 URL
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Scene label badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-ice-black/75 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg pointer-events-none">
                <Eye className="w-3.5 h-3.5 text-spirit" aria-hidden="true" />
                <span className="font-body text-xs text-white/65">{scene.title}</span>
              </div>
            </motion.div>
          </div>

          {/* Scene selector */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
            role="tablist"
            aria-label="Select virtual tour scene"
          >
            {SCENES.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={activeScene === s.id}
                onClick={() => setActiveScene(s.id)}
                className={cn(
                  "w-full flex items-start gap-3 p-4 rounded-xl border text-left",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
                  activeScene === s.id
                    ? "bg-glacier/8 border-glacier/25 shadow-glacier"
                    : "bg-white/[0.03] border-white/[0.07] hover:border-white/15"
                )}
              >
                <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{s.icon}</span>
                <div>
                  <p className={cn(
                    "font-display text-sm font-semibold mb-1",
                    activeScene === s.id ? "text-glacier" : "text-white/75"
                  )}>
                    {s.title}
                  </p>
                  <p className="font-body text-xs text-white/40 leading-snug">{s.desc}</p>
                </div>
              </button>
            ))}

            <p className="font-body text-[10px] text-white/25 italic pt-2 text-center">
              Virtual tour — full 360° embeds coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
