"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Tinted background variant */
  tinted?: boolean;
  /** Aria label for the section */
  ariaLabel?: string;
  /** Heading id for aria-labelledby */
  ariaLabelledBy?: string;
  /** Delay before animation starts (in seconds) */
  delay?: number;
}

export function SectionWrapper({
  children,
  className,
  id,
  tinted = false,
  ariaLabel,
  ariaLabelledBy,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "section relative z-10",
        tinted && "bg-white/[0.025]",
        className
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// ─── Section Header helper ────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  id?: string;
  dividerColor?: "gold" | "aurora";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  id,
  dividerColor = "gold",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", center && "text-center")}>
      {eyebrow && (
        <p className="label-eyebrow mb-3" aria-hidden="true">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <>
          <div
            className={cn(
              "mt-5 mb-5",
              dividerColor === "gold" ? "divider-gold" : "divider-aurora",
              center && "mx-auto"
            )}
            aria-hidden="true"
          />
          <p
            className={cn(
              "text-[1.05rem] text-white/55 leading-relaxed",
              center ? "max-w-2xl mx-auto" : "max-w-2xl"
            )}
          >
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
