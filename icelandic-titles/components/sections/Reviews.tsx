"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ShieldCheck, ExternalLink, Quote } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-wrapper";
import { REVIEWS, SITE } from "@/lib/data";

// ─── Star row helper ──────────────────────────────────────────────────────────
function StarRow({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(sizes[size], i <= rating ? "fill-[#00B67A] text-[#00B67A]" : "fill-white/10 text-white/10")}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Trustpilot summary bar ───────────────────────────────────────────────────
function TrustpilotSummary() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-5 bg-[#00B67A]/[0.07] border border-[#00B67A]/25 rounded-2xl px-6 py-5 mb-14"
      aria-label={`Trustpilot rating: ${SITE.trustpilot.rating} out of 5 from ${SITE.trustpilot.reviewCount.toLocaleString()} reviews`}
    >
      {/* Trustpilot logo text */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex gap-0.5" aria-hidden="true">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-8 h-8 bg-[#00B67A] rounded flex items-center justify-center">
              <Star className="w-5 h-5 fill-white text-white" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div>
          <p className="font-bold text-white text-sm">Trustpilot</p>
          <p className="text-xs text-[#00B67A]">Excellent</p>
        </div>
      </div>

      <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />

      {/* Rating breakdown */}
      <div className="flex-1 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
        <div className="text-center sm:text-left">
          <p className="font-display text-3xl font-bold text-white leading-none">{SITE.trustpilot.rating}</p>
          <p className="text-xs text-white/40 mt-1">Average rating</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-display text-3xl font-bold text-white leading-none">{SITE.trustpilot.reviewCount.toLocaleString()}</p>
          <p className="text-xs text-white/40 mt-1">Verified reviews</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="font-display text-3xl font-bold text-white leading-none">97%</p>
          <p className="text-xs text-white/40 mt-1">5-star reviews</p>
        </div>
      </div>

      <a
        href={SITE.trustpilot.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[#00B67A]/80 hover:text-[#00B67A] text-xs font-semibold transition-colors whitespace-nowrap"
        aria-label="Read all reviews on Trustpilot (opens in new tab)"
      >
        Read all reviews
        <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </a>
    </div>
  );
}

// ─── Individual review card ───────────────────────────────────────────────────
function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex flex-col hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
      aria-label={`Review by ${review.author} from ${review.location}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <StarRow rating={review.rating} />
        <Quote className="w-4 h-4 text-white/15 flex-shrink-0" aria-hidden="true" />
      </div>

      {/* Review text */}
      <blockquote className="flex-1 mb-4">
        <p className="text-sm text-white/65 leading-relaxed italic">
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-2.5 pt-4 border-t border-white/[0.05]">
        {/* Avatar */}
        <div
          className={cn(
            "w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-xs font-bold flex-shrink-0",
            review.avatarColor,
          )}
          aria-hidden="true"
        >
          {review.initials}
        </div>

        <div className="flex-1 min-w-0">
          <cite className="font-semibold text-sm text-white/80 not-italic block truncate">
            {review.author}
          </cite>
          <p className="text-xs text-white/35 truncate">{review.location}</p>
        </div>

        <div className="flex flex-col items-end gap-1">
          {review.verified && (
            <span className="flex items-center gap-1 text-[10px] text-[#00B67A]/80 font-semibold">
              <ShieldCheck className="w-3 h-3" aria-hidden="true" />
              Verified
            </span>
          )}
          <time
            dateTime={review.date}
            className="text-[10px] text-white/25"
          >
            {formatDate(review.date)}
          </time>
        </div>
      </footer>
    </motion.article>
  );
}

// ─── Rating distribution bar ──────────────────────────────────────────────────
function RatingBar({ stars, percent }: { stars: number; percent: number }) {
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className="text-white/40 w-3 text-right">{stars}</span>
      <Star className="w-3 h-3 fill-[#00B67A] text-[#00B67A] flex-shrink-0" aria-hidden="true" />
      <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full bg-[#00B67A] rounded-full"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${stars} star reviews: ${percent}%`}
        />
      </div>
      <span className="text-white/30 w-8 text-right">{percent}%</span>
    </div>
  );
}

type FilterTab = "all" | "5" | "gift" | "recent";

// ─── Reviews Section ──────────────────────────────────────────────────────────
export function Reviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const tabs: { value: FilterTab; label: string }[] = [
    { value: "all", label: "All Reviews" },
    { value: "5", label: "⭐ 5 Stars Only" },
    { value: "gift", label: "🎁 Gift Purchases" },
    { value: "recent", label: "🕐 Most Recent" },
  ];

  const filtered = useMemo(() => {
    switch (activeTab) {
      case "5":
        return REVIEWS.filter((r) => r.rating === 5);
      case "gift":
        // Approximate: reviews mentioning gift-related words
        return REVIEWS.filter((r) =>
          /gift|bought|gave|husband|wife|dad|mum|friend|birthday|christmas|anniversary/i.test(r.text)
        );
      case "recent":
        return [...REVIEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      default:
        return REVIEWS;
    }
  }, [activeTab]);

  const RATING_DISTRIBUTION = [
    { stars: 5, percent: 97 },
    { stars: 4, percent: 2 },
    { stars: 3, percent: 1 },
    { stars: 2, percent: 0 },
    { stars: 1, percent: 0 },
  ];

  return (
    <section
      id="reviews"
      className="section bg-white/[0.015]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Customer Reviews"
          title={<>Loved by <span className="text-gradient-aurora">22,000+ Owners</span></>}
          subtitle="Real reviews from real plot owners across 60+ countries. Join a global community of Jarls, Lords and Ladies of the Icelandic Highlands."
          center
          id="reviews-heading"
        />

        {/* Trustpilot summary */}
        <TrustpilotSummary />

        {/* Two-column: rating sidebar + review grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">

          {/* Sidebar: rating distribution */}
          <aside aria-label="Rating distribution">
            <div className="sticky top-24 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 space-y-5">
              {/* Big number */}
              <div className="text-center">
                <p className="font-display text-5xl font-bold text-white">{SITE.trustpilot.rating}</p>
                <StarRow rating={5} size="md" />
                <p className="text-xs text-white/35 mt-2">out of 5.0</p>
              </div>

              <div className="h-px bg-white/[0.06]" aria-hidden="true" />

              {/* Distribution bars */}
              <div className="space-y-2" aria-label="Review distribution by star rating">
                {RATING_DISTRIBUTION.map(({ stars, percent }) => (
                  <RatingBar key={stars} stars={stars} percent={percent} />
                ))}
              </div>

              <div className="h-px bg-white/[0.06]" aria-hidden="true" />

              <div className="text-center space-y-1">
                <p className="text-xs text-white/40">
                  <strong className="text-white/70">{SITE.trustpilot.reviewCount.toLocaleString()}</strong> verified reviews
                </p>
                <p className="text-xs text-white/40">
                  <strong className="text-white/70">60+</strong> countries represented
                </p>
              </div>

              <a
                href={SITE.trustpilot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 text-xs font-semibold text-[#00B67A]/80 hover:text-[#00B67A] border border-[#00B67A]/20 hover:border-[#00B67A]/40 rounded-xl transition-all"
                aria-label="Write a review on Trustpilot (opens in new tab)"
              >
                Write a Review ↗
              </a>
            </div>
          </aside>

          {/* Reviews column */}
          <div>
            {/* Filter tabs */}
            <div
              className="flex flex-wrap gap-2 mb-6"
              role="tablist"
              aria-label="Filter reviews"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={activeTab === tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-semibold border transition-all",
                    activeTab === tab.value
                      ? "bg-aurora/15 border-aurora/40 text-aurora"
                      : "bg-transparent border-white/10 text-white/45 hover:text-white hover:border-white/25"
                  )}
                >
                  {tab.label}
                </button>
              ))}
              <span className="ml-auto self-center text-xs text-white/25" aria-live="polite">
                {filtered.length} review{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Review grid */}
            <div
              role="tabpanel"
              aria-label={`${activeTab} reviews`}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((review, i) => (
                  <ReviewCard key={review.id} review={review} index={i} />
                ))}
              </AnimatePresence>

              {filtered.length === 0 && (
                <div className="col-span-2 text-center py-12 text-white/35">
                  <p>No reviews match this filter.</p>
                </div>
              )}
            </div>

            {/* Load more hint */}
            <div className="text-center mt-8">
              <a
                href={SITE.trustpilot.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/35 hover:text-white/60 transition-colors underline decoration-dotted"
                aria-label={`Read all ${SITE.trustpilot.reviewCount.toLocaleString()} reviews on Trustpilot`}
              >
                Read all {SITE.trustpilot.reviewCount.toLocaleString()} reviews on Trustpilot ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
