"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — Review carousel / grid
// Uses Framer Motion drag on mobile, grid on desktop
// ─────────────────────────────────────────────────────────────────────────────
import { useRef, useState }           from "react";
import { motion, AnimatePresence }    from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn, formatDate }             from "@/lib/utils";
import { REVIEWS, SITE }              from "@/lib/data";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";

// ─── Star row ─────────────────────────────────────────────────────────────────
function StarRow({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5",
            i <= rating ? "text-[#00b67a] fill-[#00b67a]" : "text-white/20"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Single review card ───────────────────────────────────────────────────────
function ReviewCard({
  review,
  className,
}: {
  review:    typeof REVIEWS[0];
  className?: string;
}) {
  return (
    <article
      aria-label={`Review by ${review.author}: ${review.title}`}
      className={cn(
        "glass-card p-6 flex flex-col gap-4 h-full",
        "hover:border-white/12 transition-colors duration-200",
        className
      )}
    >
      {/* Top row: stars + verified */}
      <div className="flex items-center justify-between">
        <StarRow rating={review.rating} />
        {review.verified && (
          <div className="flex items-center gap-1 text-spirit/60">
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="font-body text-[11px]">Verified</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-base font-semibold text-white">
        {review.title}
      </h3>

      {/* Body */}
      <blockquote className="font-body text-sm text-white/55 leading-relaxed flex-1 italic">
        "{review.body}"
      </blockquote>

      {/* Author */}
      <div className="pt-3 border-t border-white/[0.07] flex items-center gap-3">
        {/* Avatar (initials) */}
        <div
          className="w-8 h-8 rounded-full bg-gradient-to-br from-glacier/20 to-aurora-violet/20 border border-white/10 flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="font-display text-xs font-semibold text-white/80">
            {review.author.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-white/80">
            {review.author}
          </p>
          <p className="font-body text-xs text-white/35">
            {review.location} · {formatDate(review.date)}
          </p>
        </div>
      </div>
    </article>
  );
}

// ─── Mobile carousel ──────────────────────────────────────────────────────────
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const total = REVIEWS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x:  0 }}
            exit={{    opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <ReviewCard review={REVIEWS[current]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5" role="tablist" aria-label="Review navigation">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-200",
                i === current ? "bg-glacier w-4" : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all"
        >
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      label="Customer reviews"
      className="bg-ice-deep"
    >
      <div
        className="aurora-orb w-[500px] h-[400px] bg-aurora-violet/5 bottom-0 right-0"
        aria-hidden="true"
        style={{ animationDelay: "-8s" }}
      />

      {/* Header + Trustpilot summary */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="What Jarls say"
          title={<>Verified by <em className="text-gradient-glacier not-italic">18,240 owners</em></>}
          className="mb-0"
        />

        {/* Trustpilot aggregate */}
        <a
          href={SITE.trustpilot.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.03] transition-all"
          aria-label="View all reviews on Trustpilot"
        >
          <div className="flex gap-0.5" aria-hidden="true">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-4 h-4 bg-[#00b67a] rounded-sm flex items-center justify-center">
                <Star className="w-2.5 h-2.5 text-white fill-white" />
              </div>
            ))}
          </div>
          <div>
            <p className="font-display text-base font-semibold text-white leading-none">
              {SITE.trustpilot.score} / 5
            </p>
            <p className="font-body text-xs text-white/40 mt-0.5">
              {SITE.trustpilot.count} reviews · Trustpilot
            </p>
          </div>
        </a>
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            <ReviewCard review={r} className="h-full" />
          </motion.div>
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden">
        <MobileCarousel />
      </div>
    </SectionWrapper>
  );
}
