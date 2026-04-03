// ─────────────────────────────────────────────────────────────────────────────
// /buy-a-plot — Icelandic Titles Shop Page (Vestfirðir version)
// Full product listings: 1 sq ft Eco · 5 sq ft Luxury · 10 sq ft Luxury
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import { SITE, PRODUCTS } from "@/lib/data";
import { CurrencyBar } from "@/components/shop/CurrencyBar";
import { ProductCard } from "@/components/shop/ProductCard";
import { GuaranteeBanner } from "@/components/shop/GuaranteeBanner";
import { ComparisonTable } from "@/components/shop/ComparisonTable";
import { ShopHero } from "@/components/shop/ShopHero";
import { ShopFaq } from "@/components/shop/ShopFaq";

export const metadata: Metadata = {
  title: "Buy a Souvenir Plot — Icelandic Titles",
  description:
    "Choose your souvenir plot at Eyri í Kollafirði in the wild Vestfirðir. Become a Jarl, Baron or Baroness. Free worldwide shipping. 90-day guarantee.",
  openGraph: {
    title: "Buy a Souvenir Plot — Icelandic Titles",
    description: "Own a piece of Vestfirðir in Iceland. Personalised certificate, GPS coordinates, and souvenir Jarl/Baron/Baroness title rights.",
    url: `${SITE.url}/buy-a-plot`,
  },
};

export default function BuyAPlotPage() {
  return (
    <>
      {/* ── Shop hero (page header) ──────────────────────────────────────── */}
      <ShopHero />

      {/* ── Sticky currency + trust bar ─────────────────────────────────── */}
      <CurrencyBar />

      {/* ── Main content ────────────────────────────────────────────────── */}
      <main id="shop-products" className="bg-ice-black">
        {/* Products grid */}
        <section
          aria-label="Souvenir plot packages"
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section label */}
            <div className="text-center mb-12">
              <p className="eyebrow justify-center mb-3">
                Three ways to own a piece of Vestfirðir
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                Choose your souvenir plot
              </h2>
              <p className="font-body text-base text-white/45 mt-4 max-w-xl mx-auto leading-relaxed">
                All plots include a personalised certificate, GPS coordinates and plot location,
                and the right to style yourself as Jarl, Baron or Baroness of Eyri í Kollafirði.
                Free worldwide shipping on every order.
              </p>
            </div>

            {/* Cards — stacked on mobile, side-by-side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {PRODUCTS.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>

            {/* Anchor links */}
            <nav
              aria-label="Jump to a product"
              className="flex flex-wrap gap-3 justify-center mt-10"
            >
              {PRODUCTS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="font-body text-xs text-white/35 hover:text-glacier underline underline-offset-2 transition-colors"
                >
                  {p.titleName}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── Guarantee trust pillars ──────────────────────────────────── */}
        <GuaranteeBanner />

        {/* ── Feature comparison table ─────────────────────────────────── */}
        <ComparisonTable />

        {/* ── Shop FAQ ─────────────────────────────────────────────────── */}
        <ShopFaq />
      </main>
    </>
  );
}