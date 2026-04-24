// ─────────────────────────────────────────────────────────────────────────────
// /buy-a-plot — Shop Page (Eyri í Kollafirði version)
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
  title: "Buy a Souvenir Plot — Eyri í Kollafirði",
  description:
    "Claim your plot in Eyri í Kollafirði, Vestfirðir. Choose between 1 sq ft Jarl, 5 sq ft Baron/Baroness, or 10 sq ft High Jarl. Free worldwide shipping.",
};

export default function BuyAPlotPage() {
  return (
    <>
      <ShopHero />

      <main className="pt-8 pb-24 bg-ice-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">EYRI Í KOLLAFIRÐI • VESTFIRÐIR</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white tracking-tight">
              Own a piece of the wild Westfjords
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              Claim your souvenir plot at Eyri í Kollafirði. 
              Style yourself as Jarl, Baron or Baroness and help restore this ancient landscape where Huldufólk still roam.
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

          {/* Trust bar */}
          <GuaranteeBanner />

          {/* Comparison Table */}
          <ComparisonTable />

          {/* FAQ */}
          <ShopFaq />
        </div>
      </main>
    </>
  );
}