"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

// ─── Stat definitions ─────────────────────────────────────────────────────────
const STATS = [
  {
    value: 22000,
    suffix: "+",
    label: "Happy Plot Owners",
    icon: "👑",
    prefix: "",
  },
  {
    value: 3,
    suffix: "",
    label: "Protected Reserves",
    icon: "🏔",
    prefix: "",
  },
  {
    value: 60,
    suffix: "+",
    label: "Countries Reached",
    icon: "🌍",
    prefix: "",
  },
  {
    value: 1,
    suffix: "M+",
    label: "Conservation Funded",
    icon: "🌿",
    prefix: "€",
  },
] as const;

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  inView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [inView, count, value]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// ─── StatsBar Component ───────────────────────────────────────────────────────
export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative z-10 bg-white/[0.03] border-y border-white/[0.06]"
      role="region"
      aria-label="Key statistics"
    >
      {/* Subtle aurora line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aurora/30 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          role="list"
        >
          {STATS.map((stat, i) => (
            <motion.li
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-2"
              role="listitem"
            >
              <span className="text-2xl mb-1" aria-hidden="true">
                {stat.icon}
              </span>
              <div
                className="font-display text-3xl lg:text-4xl font-bold text-ice-gold-light"
                aria-label={`${stat.prefix}${stat.value.toLocaleString()}${stat.suffix} ${stat.label}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-sm text-white/50 leading-tight">{stat.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aurora/20 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
