"use client";
// ─────────────────────────────────────────────────────────────────────────────
// MapSection — Google Maps iframe placeholder + What3Words + GPS coords
// Real Snæfellsjökull coordinates: 64.8147°N, 23.7722°W
// ─────────────────────────────────────────────────────────────────────────────
import { useState }        from "react";
import { motion }          from "framer-motion";
import { MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { cn, formatCoords } from "@/lib/utils";

interface MapSectionProps {
  coordinates:  { lat: number; lng: number };
  what3words:   string;
  reserveName:  string;
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : `Copy ${label}`}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
        "font-body text-xs transition-all duration-200",
        "border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
        copied
          ? "bg-spirit/10 border-spirit/25 text-spirit"
          : "bg-white/[0.05] border-white/10 text-white/50 hover:text-white hover:border-white/25"
      )}
    >
      {copied
        ? <Check className="w-3 h-3" aria-hidden="true" />
        : <Copy  className="w-3 h-3" aria-hidden="true" />
      }
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function MapSection({ coordinates, what3words, reserveName }: MapSectionProps) {
  const { lat, lng } = coordinates;
  const coordStr     = formatCoords(lat, lng);
  const w3wClean     = what3words.replace("///", "");

  // Google Maps embed URL — real Snæfellsjökull coordinates
  // Satellite view of the glacier / reserve area
  const gmapsEmbedUrl =
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjTCsDQ4JzUzLjAiTiAyM8KwNDYnMTkuOSJX!5e1!3m2!1sen!2sis!4v1700000000000!5m2!1sen!2sis`;

  const gmapsLink = `https://www.google.com/maps?q=${lat},${lng}&z=13&t=k`;
  const w3wLink   = `https://what3words.com/${w3wClean}`;

  return (
    <section
      aria-label="Reserve location — map and coordinates"
      className="relative bg-ice-deep section-pad"
    >
      <div
        className="aurora-orb w-[500px] h-[400px] bg-aurora/5 top-0 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-12s" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="eyebrow mb-3">Visit us</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-light text-white">
            Find your{" "}
            <em className="not-italic text-gradient-glacier">souvenir plot</em>
          </h2>
          <p className="font-body text-sm text-white/45 mt-3 max-w-xl leading-relaxed">
            Your souvenir plot's GPS coordinates and What3Words address will guide you
            within metres of your dedicated spot in the {reserveName}. Use any mapping
            app or visit What3Words to navigate directly there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">

          {/* ── Map embed ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-deep">
              {/*
                Google Maps iframe — real Snæfellsjökull coordinates
                Shows satellite view of the national park / glacier area.
                The iframe is functional and points to the real location.
              */}
              <iframe
                title={`Google Maps satellite view of ${reserveName} — ${coordStr}`}
                src={gmapsEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                aria-label={`Interactive Google Maps showing ${reserveName} location at ${coordStr}`}
              />

              {/* Reserve name badge over map */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-ice-black/80 backdrop-blur-md border border-glacier/20 px-3 py-1.5 rounded-lg pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-glacier" aria-hidden="true" />
                <span className="font-body text-xs text-white/80 font-semibold">
                  {reserveName}
                </span>
              </div>
            </div>

            {/* Open in Google Maps link */}
            <div className="mt-3 flex items-center justify-end">
              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-glacier transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* ── Location info panel ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {/* GPS coordinates */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-glacier" aria-hidden="true" />
                <h3 className="font-display text-sm font-semibold text-white">
                  GPS Coordinates
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <code className="font-body text-sm text-glacier bg-white/[0.05] px-3 py-2 rounded-lg flex-1">
                    {coordStr}
                  </code>
                  <CopyButton text={coordStr} label="GPS coordinates" />
                </div>
                <div className="flex items-center justify-between gap-2 text-xs font-body text-white/35">
                  <span>Latitude: {lat}°N</span>
                  <span>Longitude: {Math.abs(lng)}°W</span>
                </div>
              </div>
            </div>

            {/* What3Words */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-2 mb-1">
                {/* What3Words red /// logo */}
                <span className="font-body text-base font-black text-red-500" aria-hidden="true">///</span>
                <h3 className="font-display text-sm font-semibold text-white">
                  What3Words Location
                </h3>
              </div>
              <p className="font-body text-[11px] text-white/35 mb-3">
                A unique 3-word address that identifies your souvenir plot to within 3 metres.
              </p>
              <div className="flex items-center justify-between gap-3">
                <code className="font-body text-sm text-white/80 bg-white/[0.05] px-3 py-2 rounded-lg flex-1">
                  {what3words}
                </code>
                <CopyButton text={what3words} label="What3Words address" />
              </div>
              <a
                href={w3wLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 font-body text-xs text-white/40 hover:text-red-400 transition-colors"
              >
                Open in What3Words app
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>

            {/* Getting there */}
            <div className="glass-card p-5">
              <h3 className="font-display text-sm font-semibold text-white mb-3">
                Getting There
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: "🚗", mode: "By car",       time: "~2.5 hours from Reykjavík via Route 1 & 54"          },
                  { icon: "🚌", mode: "By bus",        time: "Strætó bus 58 from Reykjavík, summer only"           },
                  { icon: "✈",  mode: "Nearest airport", time: "Reykjavík City Airport (REK) — 190 km"             },
                  { icon: "🧭", mode: "Tour transfer",  time: "We offer pickup from Reykjavík on guided tour days" },
                ].map(({ icon, mode, time }) => (
                  <li key={mode} className="flex items-start gap-2.5">
                    <span className="text-base flex-shrink-0" aria-hidden="true">{icon}</span>
                    <div>
                      <p className="font-body text-sm text-white/65 font-semibold">{mode}</p>
                      <p className="font-body text-xs text-white/35">{time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
