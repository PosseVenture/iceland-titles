"use client";
// ─────────────────────────────────────────────────────────────────────────────
// DashboardPlotMap — owner dashboard map card
// Google Maps iframe centred on plot coordinates + What3Words + copy buttons
// ─────────────────────────────────────────────────────────────────────────────
import { useState }        from "react";
import { MapPin, Copy, Check, ExternalLink, Navigation } from "lucide-react";
import { cn, formatCoords } from "@/lib/utils";
import type { DemoUser }    from "@/types";

function CopyBtn({ text, label }: { text: string; label: string }) {
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
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg",
        "font-body text-xs transition-all duration-200 border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
        copied
          ? "bg-spirit/10 border-spirit/25 text-spirit"
          : "bg-white/[0.05] border-white/10 text-white/50 hover:text-white hover:border-white/25"
      )}
    >
      {copied
        ? <Check className="w-3 h-3" aria-hidden="true" />
        : <Copy  className="w-3 h-3" aria-hidden="true" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function DashboardPlotMap({ user }: { user: DemoUser }) {
  const { lat, lng } = user.coordinates;
  const coordStr     = formatCoords(lat, lng);
  const w3wClean     = user.what3words.replace("///", "");

  // Real Snæfellsjökull-area embed, zoomed to plot level
  const embedUrl =
    `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d800!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sis!4v1700000000001!5m2!1sen!2sis`;

  const gmapsLink = `https://www.google.com/maps?q=${lat},${lng}&z=16&t=k`;
  const w3wLink   = `https://what3words.com/${w3wClean}`;
  const appMapsLink = `maps://?q=${lat},${lng}`;

  return (
    <div className="glass-card overflow-hidden">
      {/* Map header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-glacier" aria-hidden="true" />
          <h2 className="font-display text-base font-semibold text-white">
            Your Plot Location
          </h2>
        </div>
        <a
          href={gmapsLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open plot in Google Maps"
          className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-glacier transition-colors"
        >
          Open in Maps
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>

      {/* Map iframe */}
      <div className="relative">
        <iframe
          title={`Google Maps satellite view of plot ${user.plotRef} at ${coordStr}`}
          src={embedUrl}
          width="100%"
          height="280"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Satellite map showing your souvenir plot at ${coordStr} in the Snæfellsnes Reserve`}
        />
        {/* Plot pin overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="bg-glacier text-ice-black rounded-full w-7 h-7 flex items-center justify-center shadow-glacier">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="w-px h-3 bg-glacier" />
            <div className="w-1.5 h-1.5 rounded-full bg-glacier/60" />
          </div>
        </div>
      </div>

      {/* Coordinates panel */}
      <div className="p-5 space-y-3">

        {/* GPS */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-body text-[10px] text-white/30 uppercase tracking-wider mb-1">
              GPS Coordinates
            </p>
            <code className="font-body text-sm text-white/75">
              {coordStr}
            </code>
          </div>
          <CopyBtn text={coordStr} label="GPS coordinates" />
        </div>

        {/* What3Words */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
          <div>
            <p className="font-body text-[10px] text-white/30 uppercase tracking-wider mb-1">
              <span className="text-red-500 font-black" aria-hidden="true">///</span>
              {" "}What3Words
            </p>
            <code className="font-body text-sm text-white/75">
              {user.what3words}
            </code>
          </div>
          <CopyBtn text={user.what3words} label="What3Words address" />
        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
          <Navigation className="w-3.5 h-3.5 text-white/30 flex-shrink-0" aria-hidden="true" />
          <div className="flex flex-wrap gap-2">
            <a
              href={gmapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/40 hover:text-glacier transition-colors underline underline-offset-2"
            >
              Google Maps
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a
              href={w3wLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/40 hover:text-red-400 transition-colors underline underline-offset-2"
            >
              What3Words app
            </a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a
              href={appMapsLink}
              className="font-body text-xs text-white/40 hover:text-glacier transition-colors underline underline-offset-2"
            >
              Apple Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
