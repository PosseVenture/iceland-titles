"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Zap, Star, Globe, Lock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { PLOT_PRODUCTS, REVIEWS, SITE } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import type { FilterSize, FilterDelivery, ReserveSlug, Currency } from "@/types";

// ─── Free shipping + guarantee banner ────────────────────────────────────────
function TrustBanner() {
  const badges = [
    { icon: <Truck className="w-4 h-4" />, label: "Free Worldwide Shipping", sub: "To every country on Earth" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "90-Day Money-Back", sub: "No questions asked" },
    { icon: <Zap className="w-4 h-4" />, label: "Instant Digital Delivery", sub: "Download in seconds" },
    { icon: <Globe className="w-4 h-4" />, label: "Secure Stripe Checkout", sub: "SSL encrypted · PCI compliant" },
  ];
  return (
    <div className="bg-white/[0.025] border-b border-white/[0.05]" role="complementary" aria-label="Trust and shipping information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <ul className="flex flex-wrap gap-4 justify-center lg:justify-between">
          {badges.map(({ icon, label, sub }) => (
            <li key={label} className="flex items-center gap-2.5">
              <span className="text-aurora/70 flex-shrink-0" aria-hidden="true">{icon}</span>
              <div>
                <p className="text-xs font-bold text-white/80">{label}</p>
                <p className="text-[11px] text-white/35">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Trustpilot mini bar ──────────────────────────────────────────────────────
function TrustpilotBar() {
  return (
    <div className="flex items-center justify-center gap-2 py-3 text-sm" aria-label="Trustpilot rating 4.8 out of 5 from over 22,000 reviews">
      <span className="text-xs text-white/40">Rated</span>
      <div className="flex gap-0.5" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < 5 ? "fill-[#00B67A] text-[#00B67A]" : "text-white/20"}`} />
        ))}
      </div>
      <span className="font-bold text-white/70 text-xs">{SITE.trustpilot.rating}</span>
      <span className="text-white/35 text-xs">·</span>
      <a href={SITE.trustpilot.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/70 transition-colors underline decoration-dotted">
        {SITE.trustpilot.reviewCount.toLocaleString()} reviews on Trustpilot
      </a>
    </div>
  );
}

// ─── Reserve hero strip ───────────────────────────────────────────────────────
function ReserveHeroStrip({ reserveSlug }: { reserveSlug: ReserveSlug }) {
  const info: Record<ReserveSlug, { emoji: string; headline: string; sub: string; color: string }> = {
    "thingvellir": { emoji: "⚡", headline: "Thingvellir Reserve", sub: "UNESCO World Heritage Site · Where continents divide", color: "from-amber-900/30 to-transparent" },
    "highland-view": { emoji: "🌈", headline: "Highland View Reserve", sub: "Landmannalaugar rainbow mountains · Geothermal wonderland", color: "from-cyan-900/30 to-transparent" },
    "glacier-estate": { emoji: "🧊", headline: "Glacier Estate", sub: "Vatnajökull · Europe's greatest glacier · Jökulsárlón", color: "from-blue-900/30 to-transparent" },
  };
  const d = info[reserveSlug];
  return (
    <motion.div
      key={reserveSlug}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-r ${d.color} border-b border-white/[0.04] py-3`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{d.emoji}</span>
        <div>
          <p className="text-sm font-bold text-white">{d.headline}</p>
          <p className="text-xs text-white/40">{d.sub}</p>
        </div>
        <Link href="/the-land" className="ml-auto text-xs text-white/35 hover:text-white/70 transition-colors flex items-center gap-1 whitespace-nowrap">
          About this reserve <ChevronRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Certificate preview panel ───────────────────────────────────────────────
function CertificatePreview() {
  return (
    <section className="py-20 bg-white/[0.02]" aria-labelledby="cert-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Certificate mockup */}
          <div className="relative">
            <div
              className="relative rounded-2xl border border-white/[0.12] overflow-hidden aspect-[1.414/1] bg-gradient-to-br from-[#0e1d35] to-[#060d1a]"
              role="img"
              aria-label="Sample personalised souvenir certificate showing Lord James Morrison of the Icelandic Highlands"
            >
              {/* Decorative border */}
              <div className="absolute inset-3 border border-ice-gold/20 rounded-xl" aria-hidden="true" />
              <div className="absolute inset-5 border border-ice-gold/10 rounded-lg" aria-hidden="true" />

              {/* Certificate content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                <p className="font-display text-[10px] tracking-[0.4em] uppercase text-ice-gold/60 mb-4">Icelandic Titles · Est. 2024</p>
                <div className="text-4xl mb-3" aria-hidden="true">❄</div>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-white/40 mb-1">This certifies that</p>
                <p className="font-display text-2xl font-bold text-white mb-1">Lord James Morrison</p>
                <p className="text-xs text-white/35 mb-4">is the proud souvenir owner of</p>
                <p className="font-display text-sm font-semibold text-ice-gold/80">5 sq ft of the Icelandic Highlands</p>
                <p className="text-[11px] text-white/30 mt-1">Thingvellir Reserve · ///frost.ridge.lava</p>
                <div className="mt-6 pt-4 border-t border-ice-gold/15 w-full">
                  <p className="font-display text-[9px] tracking-[0.3em] uppercase text-white/20">
                    A souvenir gift · No legal land rights conveyed
                  </p>
                </div>
              </div>

              {/* Corner ornaments */}
              <div className="absolute top-8 left-8 w-6 h-6 border-l border-t border-ice-gold/30" aria-hidden="true" />
              <div className="absolute top-8 right-8 w-6 h-6 border-r border-t border-ice-gold/30" aria-hidden="true" />
              <div className="absolute bottom-8 left-8 w-6 h-6 border-l border-b border-ice-gold/30" aria-hidden="true" />
              <div className="absolute bottom-8 right-8 w-6 h-6 border-r border-b border-ice-gold/30" aria-hidden="true" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-aurora-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" aria-label="Instant digital download and print-ready">
              ✓ Instant download
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="label-eyebrow mb-4">Your Personalised Certificate</p>
            <h2 id="cert-heading" className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-white leading-tight mb-5">
              A title worthy of<br />framing on the wall
            </h2>
            <div className="divider-gold mb-5" aria-hidden="true" />
            <p className="text-white/55 leading-relaxed mb-6 text-[0.95rem]">
              Every plot comes with a beautifully designed souvenir certificate personalised with the recipient's name and title. The 5 sq ft and 10 sq ft packs include a premium A3 printed version, framing-ready.
            </p>
            <ul className="space-y-3 mb-8" aria-label="Certificate features">
              {[
                ["📜", "Designed in Iceland", "Incorporating traditional Norse motifs and topographic details"],
                ["📍", "GPS coordinates included", "Find your exact plot on Google Maps or What3Words"],
                ["🖨", "Print-ready or physical", "A4 PDF instant download — or A3 printed for gift packs"],
                ["✏️", "Fully personalised", "Your name, chosen title, reserve, and plot reference"],
              ].map(([icon, title, desc]) => (
                <li key={title as string} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white/80">{title}</p>
                    <p className="text-xs text-white/40 mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="#products" className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 text-sm" aria-label="Scroll up to choose your plot">
              Choose Your Plot
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mini reviews ─────────────────────────────────────────────────────────────
function MiniReviews() {
  return (
    <section className="py-12 border-t border-white/[0.05]" aria-labelledby="reviews-mini-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 id="reviews-mini-heading" className="sr-only">Customer reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEWS.slice(0, 3).map((review) => (
            <blockquote key={review.id} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
              <div className="flex gap-0.5 mb-3" aria-label={`${review.rating} stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#00B67A] text-[#00B67A]" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-white/65 leading-relaxed mb-4 italic">"{review.text.slice(0, 140)}…"</p>
              <footer className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center text-xs font-bold flex-shrink-0`} aria-hidden="true">
                  {review.initials}
                </div>
                <div>
                  <cite className="text-xs font-semibold text-white/70 not-italic">{review.author}</cite>
                  <p className="text-[11px] text-white/35">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="ml-auto text-[10px] text-aurora-green/70 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" aria-hidden="true" />Verified
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guarantee section ────────────────────────────────────────────────────────
function GuaranteeBanner() {
  return (
    <section className="py-14 bg-gradient-to-r from-aurora-green/10 via-aurora-green/5 to-transparent border-y border-aurora-green/15" aria-label="90-day money-back guarantee">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-5xl mb-4" aria-hidden="true">🛡</div>
        <h2 className="font-display text-2xl font-bold text-white mb-3">90-Day Money-Back Guarantee</h2>
        <p className="text-white/55 leading-relaxed max-w-xl mx-auto text-[0.95rem]">
          If you're not completely delighted with your Icelandic Titles purchase, contact us within 90 days for a full, no-questions-asked refund. We're that confident you'll love it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm">
          {[
            { icon: "✅", text: "No questions asked" },
            { icon: "🔄", text: "Full refund, not credit" },
            { icon: "📧", text: "Email to resolve in 24h" },
            { icon: "🌍", text: "Valid worldwide" },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-white/60">
              <span aria-hidden="true">{icon}</span>{text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main shop page (inner component using searchParams) ─────────────────────
function BuyAPlotInner() {
  const searchParams = useSearchParams();
  const initialReserve = (searchParams.get("reserve") as ReserveSlug) || "thingvellir";
  const { currency } = useCartStore();

  const [sizeFilter, setSizeFilter] = useState<FilterSize>("all");
  const [deliveryFilter, setDeliveryFilter] = useState<FilterDelivery>("all");
  const [selectedReserve, setSelectedReserve] = useState<ReserveSlug>(initialReserve);

  const filtered = useMemo(() => {
    return PLOT_PRODUCTS.filter((p) => {
      if (sizeFilter === "bundle" && p.size !== "bundle-2person") return false;
      if (sizeFilter !== "all" && sizeFilter !== "bundle" && p.size !== sizeFilter) return false;
      if (deliveryFilter === "digital" && p.deliveryType !== "digital") return false;
      if (deliveryFilter === "physical" && p.deliveryType === "digital") return false;
      return true;
    });
  }, [sizeFilter, deliveryFilter]);

  return (
    <>
      {/* ── Page hero ── */}
      <section className="relative pt-32 pb-14 overflow-hidden" aria-labelledby="shop-heading">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] to-ice-black" aria-hidden="true" />
        <div className="aurora-orb aurora-orb-1 opacity-15 top-0 left-1/4" aria-hidden="true" />
        <div className="aurora-orb aurora-orb-2 opacity-10 top-0 right-1/4" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="label-eyebrow mb-4">Choose Your Plot</p>
          <h1 id="shop-heading" className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold text-white leading-tight mb-5">
            Buy a Plot of{" "}
            <span className="text-gradient-aurora">Icelandic Highland</span>
          </h1>
          <p className="text-[1.05rem] text-white/50 leading-relaxed max-w-2xl mx-auto mb-6">
            Own a souvenir piece of one of Iceland's three breathtaking nature reserves. Style yourself as <strong className="text-white/70">Jarl, Lord or Lady of the Icelandic Highlands</strong> — and help conserve these extraordinary landscapes.
          </p>
          <TrustpilotBar />
        </div>
      </section>

      {/* ── Trust banner ── */}
      <TrustBanner />

      {/* ── Reserve strip ── */}
      <ReserveHeroStrip reserveSlug={selectedReserve} />

      {/* ── Filters ── */}
      <ShopFilters
        sizeFilter={sizeFilter}
        deliveryFilter={deliveryFilter}
        selectedReserve={selectedReserve}
        onSizeChange={setSizeFilter}
        onDeliveryChange={setDeliveryFilter}
        onReserveChange={setSelectedReserve}
        visibleCount={filtered.length}
        totalCount={PLOT_PRODUCTS.length}
      />

      {/* ── Product grid ── */}
      <main id="products" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Currency notice */}
          <p className="text-xs text-white/30 text-right mb-6" aria-live="polite">
            Prices shown in <strong className="text-white/50">{currency}</strong> · Change currency in the navigation bar
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-white/40">
              <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
              <p className="font-display text-xl text-white/60 mb-2">No plots match your filters</p>
              <p className="text-sm">Try adjusting the size or delivery type filters above.</p>
              <button
                onClick={() => { setSizeFilter("all"); setDeliveryFilter("all"); }}
                className="mt-6 text-aurora text-sm underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start" role="list" aria-label="Available plots">
              {filtered.map((product, i) => (
                <div key={product.id} role="listitem">
                  <ProductCard
                    product={product}
                    currency={currency}
                    selectedReserve={selectedReserve}
                    index={i}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Fine print */}
          <p className="text-center text-xs text-white/20 mt-12 max-w-2xl mx-auto leading-relaxed">
            Icelandic Titles are souvenir gifts — no legal land rights are conveyed. Icelandic Titles ehf. retains full ownership and management of all reserve land under Icelandic law. Registered trademark ™.
          </p>
        </div>
      </main>

      {/* ── Certificate preview ── */}
      <CertificatePreview />

      {/* ── Guarantee ── */}
      <GuaranteeBanner />

      {/* ── Mini reviews ── */}
      <MiniReviews />

      {/* ── Final CTA ── */}
      <section className="section text-center" aria-labelledby="final-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-4xl mb-4" aria-hidden="true">🏔</div>
          <h2 id="final-cta-heading" className="font-display text-3xl font-bold text-white mb-4">Ready to Claim Your Highland?</h2>
          <p className="text-white/50 mb-8 leading-relaxed">Join 22,000+ plot owners from 60+ countries who have made a tiny piece of Iceland their own.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-sm"
            aria-label="Scroll to top to choose your plot"
          >
            Choose Your Plot
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </>
  );
}

// ─── Page export — wraps inner in Suspense for useSearchParams ────────────────
export default function BuyAPlotPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white/40 text-sm">Loading shop…</div>
      </div>
    }>
      <BuyAPlotInner />
    </Suspense>
  );
}
