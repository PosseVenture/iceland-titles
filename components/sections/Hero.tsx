"use client";
// Hero with real video background — Eyri í Kollafirði
import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Video autoplay prevented:", error);
      });
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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="eyebrow mb-4 tracking-[3px]">EYRI Í KOLLAFIRÐI • VESTFIRÐIR</p>
          
          <h1 className="font-display text-[clamp(3.2rem,9vw,6.5rem)] font-light leading-none text-white mb-10">
            Become a{" "}
            <em className="not-italic text-gradient-glacier">Jarl</em>,{" "}
            Baron or Baroness<br />
            of Eyri í Kollafirði
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-12">
            Claim your own piece of the wild Westfjords. A real souvenir plot where the Huldufólk dwell and Snæfellsjökull watches from across the fjord.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/buy-a-plot"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-white text-ice-black font-display font-semibold text-lg hover:bg-white/95 transition-all"
          >
            Claim Your Plot Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="/the-land"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-2xl border border-white/40 text-white font-display font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Explore the Land
          </Link>
        </div>
      </div>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest flex flex-col items-center"
      >
        SCROLL TO DISCOVER
        <div className="w-px h-10 bg-white/30 mt-3" />
      </motion.div>
    </section>
  );
}