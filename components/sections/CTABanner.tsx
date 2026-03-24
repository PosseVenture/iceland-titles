"use client";
// ─────────────────────────────────────────────────────────────────────────────
// CTABanner — Final homepage call-to-action
// Atmospheric aurora background · rune-gold dividers · dual CTAs
// ─────────────────────────────────────────────────────────────────────────────
import Link          from "next/link";
import { motion }    from "framer-motion";
import { ArrowRight, Leaf, Shield, Package } from "lucide-react";
import { cn }        from "@/lib/utils";

// ─── Trust pillars ────────────────────────────────────────────────────────────
const PILLARS = [
  { icon: <Shield className="w-4 h-4 text-glacier" aria-hidden="true" />,  label: "90-day guarantee" },
  { icon: <Package className="w-4 h-4 text-glacier" aria-hidden="true" />, label: "Free worldwide shipping" },
  { icon: <Leaf    className="w-4 h-4 text-spirit"  aria-hidden="true" />, label: "Snæfellsnes conservation" },
];

export function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-ice-navy py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Atmospheric background ──────────────────────────────────── */}
      <div aria-hidden="true">
        {/* Central aurora glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[800px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(168,216,234,0.08) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        {/* Corner aurora orbs */}
        <div
          className="aurora-orb w-[400px] h-[400px] bg-aurora-violet/8 -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-orb w-[400px] h-[400px] bg-spirit/6 -bottom-20 -right-20"
          style={{ animationDelay: "-9s" }}
        />

        {/* Grain */}
        <div className="grain-overlay" />

        {/* Top/bottom rune lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rune-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rune-gold/20 to-transparent" />
      </div>

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Decorative runes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-5 mb-8"
          aria-hidden="true"
        >
          {["✦", "❄", "✦"].map((s, i) => (
            <span
              key={i}
              className={cn(
                "animate-twinkle",
                i === 1 ? "text-glacier text-2xl" : "text-rune-gold/40 text-sm"
              )}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "font-display font-light",
            "text-[clamp(2.5rem,7vw,5rem)]",
            "text-white leading-[0.95] text-balance mb-6"
          )}
        >
          The glacier calls.{" "}
          <em className="not-italic text-gradient-glacier">
            Will you answer?
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-base md:text-lg text-white/50 leading-relaxed text-balance mb-10"
        >
          Claim your souvenir plot in Snæfellsnes today and join {" "}
          <strong className="text-white/80 font-semibold">18,240 Jarls, Lords and Ladies</strong>
          {" "}who have already answered the call of Bárður Snæfellsás.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/buy-a-plot"
            className={cn(
              "group flex items-center gap-2.5",
              "px-8 py-4 rounded-xl",
              "bg-glacier text-ice-black",
              "font-display font-semibold text-lg",
              "hover:bg-glacier-light hover:shadow-glacier",
              "transition-all duration-300 btn-spirit"
            )}
          >
            <span aria-hidden="true">❄</span>
            Claim Your Plot Now
            <ArrowRight
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/the-land"
            className={cn(
              "flex items-center gap-2",
              "px-7 py-4 rounded-xl",
              "text-white/65 hover:text-white",
              "border border-white/15 hover:border-white/30",
              "font-body font-semibold text-base",
              "hover:bg-white/5 transition-all duration-200"
            )}
          >
            Learn about the Reserve
          </Link>
        </motion.div>

        {/* Trust pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Trust indicators"
        >
          {PILLARS.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              {icon}
              <span className="font-body text-sm text-white/45">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
