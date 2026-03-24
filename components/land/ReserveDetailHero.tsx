"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ReserveDetailHero — /the-land/snaefellsnes hero
// Full-bleed Snæfellsjökull image placeholder · parallax content
// ─────────────────────────────────────────────────────────────────────────────
import { useRef }                           from "react";
import Image                                from "next/image";
import Link                                 from "next/link";
import { motion, useScroll, useTransform }  from "framer-motion";
import { Home, ChevronRight, MapPin }       from "lucide-react";
import { cn }                               from "@/lib/utils";
import type { Reserve }                     from "@/types";

export function ReserveDetailHero({ reserve }: { reserve: Reserve }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY     = useTransform(scrollYProgress, [0, 1], ["0%",  "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%",  "12%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Snæfellsnes Reserve — hero"
      className="relative min-h-[92vh] flex items-end overflow-hidden"
    >
      {/* ── Background image (parallax) ─────────────────────────────────
          Photo: Golden sunset on Snæfellsjökull ridges — dramatic light
          Unsplash: photo-1540979388789-7cee28a1cdc9
          ─────────────────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 w-full h-[115%] -top-[8%]"
        aria-hidden="true"
      >
        <Image
          src="https://images.unsplash.com/photo-1540979388789-7cee28a1cdc9?w=1920&q=85"
          alt="Golden sunset light illuminating the rugged ridges of Snæfellsjökull glacier, Snæfellsnes, Iceland — powerful spiritual atmosphere and ancient protector Bárður Snæfellsás"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAHRAAAQUAAwEAAAAAAAAAAAAAAQACAwQREiExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCy1pa9r6uqXKkl5x5SMuBOSM9nVFVJOoVfCivCDTNSXloqLnl0ZAAAB//Z"
        />
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-ice-black via-ice-black/50 to-ice-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ice-black/30 via-transparent to-transparent" />
      </motion.div>

      {/* Aurora orbs */}
      <div aria-hidden="true">
        <div className="aurora-orb w-[600px] h-[400px] bg-aurora/7 top-0 right-0" style={{ animationDelay: "0s" }} />
        <div className="aurora-orb w-[400px] h-[400px] bg-spirit/5 top-1/3 left-0" style={{ animationDelay: "-9s" }} />
      </div>
      <div className="grain-overlay" aria-hidden="true" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-[72px]"
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 pt-10">
          <ol className="flex items-center gap-1.5 font-body text-xs text-white/30">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white/60 transition-colors">
                <Home className="w-3 h-3" aria-hidden="true" />
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <Link href="/the-land" className="hover:text-white/60 transition-colors">
                The Land
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
            <li aria-current="page" className="text-white/55">Snæfellsnes</li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="eyebrow mb-4">Snæfellsnes Reserve</p>

            <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-light text-white leading-[0.93] mb-6">
              <em className="not-italic text-gradient-glacier">Snæfellsjökull</em>
              <br />
              <span className="text-white/90">The Sacred</span>
              <br />
              <em className="not-italic text-gradient-rune">Glacier</em>
            </h1>

            <p className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
              Your souvenir plot lies in the magical Snæfellsnes area of
              Snæfellsjökull National Park — with direct views of the legendary
              glacier, home of guardian spirit{" "}
              <strong className="text-white/80 font-semibold">Bárður Snæfellsás</strong>{" "}
              and the ancient{" "}
              <strong className="text-white/80 font-semibold">huldufólk</strong>.
            </p>
          </motion.div>

          {/* Coordinates badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 mt-6 bg-ice-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl"
          >
            <MapPin className="w-3.5 h-3.5 text-glacier flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="font-body text-xs text-white/40">GPS coordinates · </span>
              <span className="font-body text-xs font-semibold text-white/75">
                64.8147°N, 23.7722°W
              </span>
              <span className="font-body text-xs text-white/35 ml-2">· {reserve.what3words}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-[10px] tracking-[0.22em] uppercase text-white/25">
          Discover the glacier
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-glacier/50 to-transparent animate-breathe" />
      </div>
    </section>
  );
}
