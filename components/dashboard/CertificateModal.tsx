"use client";
// ─────────────────────────────────────────────────────────────────────────────
// CertificateModal — PDF preview modal
// Renders a visual A4 certificate preview with Snæfellsjökull map background
// Print-safe styles + Download button (hooks to real PDF endpoint in prod)
// WCAG: focus trap, ESC close, role="dialog", aria-modal
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef }       from "react";
import Image                        from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Share2 } from "lucide-react";
import { cn, formatDate }          from "@/lib/utils";
import type { DemoUser }           from "@/types";
import { DEMO_EXTRAS }             from "@/lib/demo-user";

interface CertificateModalProps {
  user:    DemoUser;
  isOpen:  boolean;
  onClose: () => void;
}

// ─── The certificate face ─────────────────────────────────────────────────────
function CertificateFace({ user }: { user: DemoUser }) {
  const titleLabel =
    user.titleStyle === "Jarl"
      ? "High Jarl of Snæfellsnes"
      : `${user.titleStyle} of Snæfellsnes`;

  return (
    <div
      className={cn(
        // A4 aspect ratio in the preview
        "relative w-full bg-ice-navy overflow-hidden",
        "certificate-border rounded-xl",
        "font-display"
      )}
      style={{ aspectRatio: "210 / 297" }}
      aria-label={`Certificate for ${user.titleStyle} ${user.name}`}
    >
      {/* ── Background: real glacier photo at low opacity + SVG contour overlay ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Photo: Soft aurora-tinted glacial ice — ethereal certificate background
            Unsplash: photo-1557683316-973673baf926 */}
        <Image
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=75"
          alt=""
          fill
          className="object-cover object-center opacity-[0.07]"
          sizes="448px"
          loading="lazy"
        />
        {/* SVG contour lines layered on top of photo */}
        <svg
          viewBox="0 0 595 842"
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Topographic contour lines */}
          {[
            "M100,750 Q200,680 300,700 Q400,720 500,680",
            "M80,700  Q200,620 310,640 Q420,660 510,620",
            "M60,640  Q180,560 310,580 Q440,600 530,555",
            "M50,570  Q170,490 310,510 Q450,530 545,480",
            "M50,490  Q160,410 300,430 Q450,450 555,400",
            "M60,400  Q155,330 295,350 Q445,370 555,315",
            "M80,310  Q165,250 297,268 Q440,288 550,235",
            "M110,225 Q185,175 298,190 Q435,210 540,160",
            "M150,150 Q210,110 300,120 Q400,135 490,100",
            "M200,90  Q255,65  300,70  Q360,78  410,58",
          ].map((d, i) => (
            <path key={i} d={d} stroke="#A8D8EA" strokeWidth="0.8" fill="none" opacity="0.5" />
          ))}
          {/* Glacier peak marker */}
          <circle cx="300" cy="58" r="4" fill="#A8D8EA" opacity="0.5" />
          <path d="M296,58 L300,40 L304,58Z" fill="#C8ECF7" opacity="0.4" />
          <text x="305" y="55" fontSize="8" fill="#A8D8EA" opacity="0.6" fontFamily="serif">
            Snæfellsjökull 1446m
          </text>
        </svg>

        {/* Corner ornaments */}
        {["top-3 left-3", "top-3 right-3 scale-x-[-1]",
          "bottom-3 left-3 scale-y-[-1]", "bottom-3 right-3 scale-x-[-1] scale-y-[-1]"].map((pos) => (
          <div key={pos} className={`absolute ${pos} w-8 h-8 opacity-20`}>
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M4,4 L4,14 M4,4 L14,4" stroke="#C8A96E" strokeWidth="1.5" />
              <circle cx="4" cy="4" r="2" fill="#C8A96E" />
            </svg>
          </div>
        ))}
      </div>

      {/* ── Certificate content ───────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 py-10 h-full">

        {/* Header */}
        <div className="mb-3">
          <p className="text-rune-gold/60 text-[9px] tracking-[0.3em] uppercase font-body mb-2">
            Icelandic Titles ehf. · Reykjavík, Iceland
          </p>
          <div className="text-glacier text-2xl" aria-hidden="true">❄</div>
        </div>

        {/* Title of document */}
        <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-body mb-1">
          Certificate of Souvenir Plot Ownership
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-rune-gold/40 to-transparent my-3" aria-hidden="true" />

        {/* "This certifies that" */}
        <p className="font-body italic text-white/40 text-[11px] mb-2">
          This certifies that
        </p>

        {/* Recipient name — large display */}
        <h2 className="font-display text-3xl font-semibold text-white leading-tight mb-1">
          {user.name}
        </h2>

        <p className="font-body text-xs text-white/40 italic mb-4">
          is hereby proclaimed
        </p>

        {/* Title */}
        <div className="mb-4 px-6 py-3 border border-rune-gold/30 rounded-lg bg-rune-gold/5">
          <p className="font-display text-xl font-semibold text-gradient-rune leading-tight">
            {titleLabel}
          </p>
          <p className="font-body text-[10px] text-white/30 mt-1 tracking-wider uppercase">
            A souvenir novelty title · Our registered trademark
          </p>
        </div>

        {/* Plot details */}
        <div className="text-center space-y-1 mb-4">
          <p className="font-body text-xs text-white/40">
            in recognition of souvenir plot
          </p>
          <p className="font-display text-base text-glacier font-semibold">
            {DEMO_EXTRAS.plotName}
          </p>
          <p className="font-body text-[10px] text-white/30">
            {DEMO_EXTRAS.reserveName} · {DEMO_EXTRAS.nearestLandmark}
          </p>
        </div>

        {/* Coordinates */}
        <div className="flex items-center gap-4 mb-5">
          <div className="text-center">
            <p className="font-body text-[9px] text-white/25 uppercase tracking-wider">GPS</p>
            <p className="font-body text-[11px] text-white/55">
              {user.coordinates.lat}°N · {Math.abs(user.coordinates.lng)}°W
            </p>
          </div>
          <div className="w-px h-6 bg-white/10" aria-hidden="true" />
          <div className="text-center">
            <p className="font-body text-[9px] text-white/25 uppercase tracking-wider">What3Words</p>
            <p className="font-body text-[11px] text-white/55">{user.what3words}</p>
          </div>
          <div className="w-px h-6 bg-white/10" aria-hidden="true" />
          <div className="text-center">
            <p className="font-body text-[9px] text-white/25 uppercase tracking-wider">Ref</p>
            <p className="font-body text-[11px] text-white/55">{user.plotRef}</p>
          </div>
        </div>

        {/* Date + seal */}
        <div className="flex-1" />
        <div className="flex items-end justify-between w-full mt-4">
          <div className="text-left">
            <div className="w-24 h-px bg-white/20 mb-1" aria-hidden="true" />
            <p className="font-body text-[9px] text-white/30">Director, Icelandic Titles ehf.</p>
          </div>
          <div className="text-center">
            {/* Wax seal placeholder */}
            <div className="w-14 h-14 rounded-full border-2 border-rune-gold/30 bg-rune-gold/10 flex items-center justify-center" aria-hidden="true">
              <span className="text-rune-gold/50 text-2xl">❄</span>
            </div>
          </div>
          <div className="text-right">
            <div className="w-24 h-px bg-white/20 mb-1 ml-auto" aria-hidden="true" />
            <p className="font-body text-[9px] text-white/30">
              {formatDate(user.purchaseDate)}
            </p>
          </div>
        </div>

        {/* Novelty disclaimer */}
        <p className="font-body text-[8px] text-white/18 mt-3 leading-relaxed max-w-xs">
          This is a souvenir gift certificate only. No land ownership or legal title is
          conferred. Icelandic Titles ehf. retains full ownership of the Snæfellsnes Reserve.
        </p>
      </div>
    </div>
  );
}

// ─── Main modal ───────────────────────────────────────────────────────────────
export function CertificateModal({ user, isOpen, onClose }: CertificateModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus management + scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cert-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="cert-modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{    opacity: 0, scale: 0.96,  y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className={cn(
              "fixed inset-0 z-[301] flex items-center justify-center p-4",
              "pointer-events-none"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
          >
            <div className="pointer-events-auto w-full max-w-sm flex flex-col gap-4">

              {/* Action bar */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* Download — TODO: wire to real PDF endpoint */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Download certificate as PDF (coming soon)"
                    data-tooltip="PDF download in production"
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-xl",
                      "bg-glacier text-ice-black font-display font-semibold text-sm",
                      "hover:bg-glacier-light hover:shadow-glacier transition-all btn-spirit"
                    )}
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download PDF
                  </a>
                  <button
                    type="button"
                    aria-label="Print certificate"
                    onClick={() => window.print()}
                    className="p-2.5 rounded-xl border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Printer className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Share certificate"
                    className="p-2.5 rounded-xl border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Share2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close certificate preview"
                  className="p-2 rounded-xl border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Certificate */}
              <div className="overflow-y-auto max-h-[80vh] rounded-xl">
                <CertificateFace user={user} />
              </div>

              <p className="text-center font-body text-xs text-white/25 italic">
                {/* TODO: In production, this downloads a real Chromium-generated PDF */}
                Preview only — full A4 PDF generated on server in production
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
