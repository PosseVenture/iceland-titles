"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Hero — Icelandic Titles Homepage (with video background)
// ─────────────────────────────────────────────────────────────────────────────
import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";

function SpiritSparkle({ className }: { className?: string }) {
  return (
    <span className={cn("inline-block animate-twinkle text-spirit", className)} aria-hidden="true">
      ✦
    </span>
  );
}

function TrustpilotBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="flex flex-wrap items-center justify-center gap-3"
    >
      <div className="flex gap-0.5" role="img" aria-label="4.7 out of 5 stars on Trustpilot">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-5 h-5 bg-[#00b67a] rounded-full" />
        ))}
      </div>
      <div className="font-body text-sm text-white/70">
        4.7 • 18,240 reviews on Trustpilot
      </div>
    </motion.div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ice-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/eyri-plot-video-2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Aurora accent orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-orb w-[800px] h-[600px] bg-glacier/10 -top-40 -right-40" />
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-violet/10 bottom-0 left-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow mb-4">Eyri í Kollafirði · Vestfirðir</p>
          
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-light leading-[1.05] text-white mb-8">
            Become a{" "}
            <em className="not-italic text-gradient-glacier">Jarl</em>,{" "}
            <span className="whitespace-nowrap">Baron or</span>
            <br />
            <em className="not-italic text-gradient-rune">Baroness</em>
            {" of Eyri í Kollafirði"}
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10">
            Claim your souvenir plot in the wild Westfjords. Feel the ancient power of the land where the Huldufólk dwell and Snæfellsjökull watches from across the fjord.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/buy-a-plot"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-white text-ice-black font-display font-semibold text-lg hover:bg-white/90 transition-all"
          >
            Claim Your Plot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/the-land"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl border border-white/30 text-white font-display font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Explore the Land
          </Link>
        </div>

        <TrustpilotBar />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 text-xs tracking-widest"
      >
        SCROLL TO EXPLORE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent mt-3" />
      </motion.div>
    </section>
  );
}