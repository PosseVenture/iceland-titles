"use client";
// ─────────────────────────────────────────────────────────────────────────────
// CurrencyBar — sticky top bar on /buy-a-plot
// Live currency switcher + trust signals (shipping, guarantee)
// ─────────────────────────────────────────────────────────────────────────────
import { Shield, Package, Globe } from "lucide-react";
import { cn }                     from "@/lib/utils";
import { useCartStore }            from "@/lib/store";
import type { Currency }           from "@/types";

const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "USD", symbol: "$", label: "USD"  },
  { code: "GBP", symbol: "£", label: "GBP"  },
];

export function CurrencyBar() {
  const { currency, setCurrency } = useCartStore();

  return (
    <div className="sticky top-[72px] z-40 bg-ice-deep/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">

        {/* Trust signals */}
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-spirit flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-xs text-white/50">Free worldwide shipping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-glacier flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-xs text-white/50">90-day money-back guarantee</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="text-xs text-spirit" aria-hidden="true">✦</span>
            <span className="font-body text-xs text-white/50">Snæfellsnes conservation funded</span>
          </div>
        </div>

        {/* Currency switcher */}
        <div className="flex items-center gap-1.5" role="group" aria-label="Select currency">
          <Globe className="w-3.5 h-3.5 text-white/30" aria-hidden="true" />
          <div className="flex rounded-lg overflow-hidden border border-white/10">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setCurrency(c.code)}
                aria-pressed={currency === c.code}
                className={cn(
                  "px-3 py-1 text-xs font-body font-semibold transition-all duration-150",
                  currency === c.code
                    ? "bg-glacier text-ice-black"
                    : "text-white/45 hover:text-white hover:bg-white/8"
                )}
              >
                {c.symbol} {c.code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
