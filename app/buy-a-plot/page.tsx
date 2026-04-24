// app/buy-a-plot/page.tsx
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/data";
import { ShopHero } from "@/components/shop/ShopHero";
import { ProductCard } from "@/components/shop/ProductCard";
import { GuaranteeBanner } from "@/components/shop/GuaranteeBanner";
import { ComparisonTable } from "@/components/shop/ComparisonTable";
import { ShopFaq } from "@/components/shop/ShopFaq";

export const metadata: Metadata = {
  title: "Buy a Souvenir Plot — Eyri í Kollafirði",
  description: "Own a piece of Eyri í Kollafirði in the wild Westfjords. Jarl, Baron & Baroness titles.",
};

export default function BuyAPlotPage() {
  return (
    <>
      <ShopHero />

      <main className="bg-ice-black">
        {/* Trust bar */}
        <div className="border-b border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <span>🌲 Conservation funded</span>
            <span>📍 GPS + What3Words</span>
            <span>🛡️ 90-day guarantee</span>
            <span>🚚 Free worldwide shipping</span>
          </div>
        </div>

        {/* Products */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl tracking-tight">Choose your pack</h2>
            <p className="mt-3 text-white/70">Three ways to own a piece of the wild Westfjords</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        <GuaranteeBanner />
        <ComparisonTable />
        <ShopFaq />
      </main>
    </>
  );
}