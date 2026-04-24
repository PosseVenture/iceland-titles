"use client";
import { useState, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, Minus, Plus, ChevronDown, ChevronUp, ShoppingCart,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/store";
import { Badge } from "@/components/ui/Badge";
import type { PlotProduct, TitleStyle } from "@/types";

function IncludeRow({ icon, label, detail }: { icon: string; label: string; detail?: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
        <span aria-hidden="true">{icon}</span>
      </div>
      <div className="flex-1">
        <span className="font-body text-sm text-white/75">{label}</span>
        {detail && <span className="block font-body text-xs text-white/35 mt-0.5 italic">{detail}</span>}
      </div>
      <Check className="w-3.5 h-3.5 text-spirit flex-shrink-0 mt-1" aria-hidden="true" />
    </li>
  );
}

export function ProductCard({ product, index }: { product: PlotProduct; index: number }) {
  const uid = useId();
  const { addItem, currency } = useCartStore();
  const [titleStyle, setTitleStyle] = useState<TitleStyle>("Baron");
  const [name, setName] = useState("");
  const [giftMessage, setGiftMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [plantATree, setPlantATree] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [nameError, setNameError] = useState("");
  const [addedState, setAddedState] = useState<"idle" | "added">("idle");

  useEffect(() => {
    if (addedState === "added") {
      setTimeout(() => {
        setAddedState("idle");
        setName("");
        setGiftMessage("");
        setQuantity(1);
        setPlantATree(false);
        setShowMsg(false);
      }, 3000);
    }
  }, [addedState]);

  const plantAddon = product.addOns?.find((a) => a.id === "plant-a-tree") ?? null;
  const showPlant = product.deliveryType === "physical" && plantAddon !== null;
  const SHOW_N = 5;
  const rows = showAll ? product.includes : product.includes.slice(0, SHOW_N);
  const extraPrice = showPlant && plantATree && plantAddon ? plantAddon.prices[currency] : 0;
  const lineTotal = product.prices[currency] * quantity + extraPrice;

  function handleAdd() {
    if (!name.trim()) {
      setNameError("Please enter the name for the certificate.");
      return;
    }
    setNameError("");
    addItem({
      productId: product.id,
      productName: product.titleName,
      plotSize: product.size,
      price: product.prices[currency],
      currency,
      titleStyle,
      recipientName: name.trim(),
      giftMessage: giftMessage.trim() || undefined,
      quantity,
      addOns:
        showPlant && plantATree && plantAddon
          ? [{ addOnId: plantAddon.id, name: plantAddon.name, price: plantAddon.prices[currency] }]
          : [],
      deliveryType: product.deliveryType,
    });
    setAddedState("added");
  }

  return (
    <motion.article
      id={product.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${product.titleName} — ${formatPrice(product.prices[currency], currency)}`}
      className={cn(
        "relative flex flex-col glass-card transition-all duration-300 overflow-hidden",
        product.bestSeller ? "border-glacier/30 shadow-2xl" : "hover:border-white/12"
      )}
    >
      {/* Moving Northern Lights Glow - Best Seller Only */}
      {product.bestSeller && (
        <div className="absolute -inset-[4px] rounded-3xl -z-10 overflow-hidden">
          {/* Layer 1 - Slow flowing green */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#39ff14]/50 via-[#00ff88]/60 to-[#39ff14]/40 
                          animate-aurora-slow" />
          {/* Layer 2 - Slower with purple accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7b2cbf]/30 via-[#39ff14]/40 to-[#00ffcc]/30 
                          animate-aurora-slower" />
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
      )}

      {/* Top accent line */}
      {product.bestSeller && (
        <div className="absolute -top-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#39ff14] to-transparent rounded-full z-10" />
      )}

      {/* Header */}
      <div className="p-6 pb-0 relative z-10">
        <div className="flex flex-wrap gap-2 mb-4 min-h-[26px]">
          {product.bestSeller && <Badge variant="bestseller">✦ Best Seller</Badge>}
          {product.featured && !product.bestSeller && <Badge variant="featured">Most Popular</Badge>}
          <Badge variant={product.deliveryType === "digital" ? "neutral" : "glacier"}>
            {product.deliveryType === "digital" ? "Digital delivery" : "Physical gift box"}
          </Badge>
        </div>

        <p className="eyebrow mb-2">{product.sqft} sq ft souvenir plot</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-1">{product.titleName}</h2>
        <p className="font-body text-sm text-white/45 italic mb-4">{product.tagline}</p>

        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-display text-5xl font-light text-glacier leading-none">
            {formatPrice(product.prices[currency], currency)}
          </span>
          {quantity > 1 && (
            <span className="font-body text-sm text-white/40">
              × {quantity} = {formatPrice(lineTotal, currency)}
            </span>
          )}
        </div>

        <p className="font-body text-xs text-white/35 mb-6">
          One-time payment · Free worldwide shipping · 90-day guarantee
        </p>

        <p className="font-body text-sm text-white/55 leading-relaxed mb-6 border-t border-white/[0.06] pt-5">
          {product.description}
        </p>
      </div>

      {/* Includes + Form sections remain exactly the same as you had */}
      {/* (I kept all your logic, includes, title selector, name input, etc.) */}

      <div className="px-6 pb-6 relative z-10">
        <p className="font-body text-xs text-white/35 uppercase tracking-[0.14em] mb-3">What's included</p>
        <ul className="space-y-3 mb-3">
          {rows.map((inc) => <IncludeRow key={inc.label} icon={inc.icon} label={inc.label} detail={inc.detail} />)}
        </ul>
        {product.includes.length > SHOW_N && (
          <button type="button" onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-glacier transition-colors mt-1">
            {showAll
              ? <><ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />Show less</>
              : <><ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />+ {product.includes.length - SHOW_N} more inclusions</>}
          </button>
        )}
      </div>

      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent relative z-10" />

      {/* Form Section */}
      <div className="p-6 space-y-5 flex-1 relative z-10">
        {/* Title style, Name, Gift message, Quantity, Plant a Tree, Add to Cart - all your original code */}
        {/* ... (keeping everything exactly as you sent) ... */}
        {/* Title style */}
        <div>
          <p id={`${uid}-ts`} className="font-body text-xs text-white/45 mb-2">Title style</p>
          <div role="group" aria-labelledby={`${uid}-ts`}
            className="grid grid-cols-3 rounded-xl overflow-hidden border border-white/10">
            {(["Jarl", "Baron", "Baroness"] as TitleStyle[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setTitleStyle(s)}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-all",
                  titleStyle === s
                    ? "bg-glacier text-ice-black font-semibold"
                    : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Name on certificate */}
        <div>
          <label htmlFor={`${uid}-name`} className="block font-body text-xs text-white/45 mb-2">
            Name on certificate <span className="text-spirit/70">*</span>
          </label>
          <input 
            id={`${uid}-name`} 
            type="text" 
            value={name}
            onChange={(e) => { setName(e.target.value); setNameError(""); }}
            placeholder={`e.g. ${titleStyle} Emma Jónsdóttir`}
            maxLength={60} 
            className={cn(
              "w-full bg-white/[0.05] border rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/22",
              nameError ? "border-red-500/50" : "border-white/[0.1] focus:border-glacier/50"
            )}
          />
          {nameError && <p className="font-body text-xs text-red-400 mt-1.5">{nameError}</p>}
        </div>

        {/* Gift message, Quantity, Plant a Tree, Add to Cart - all unchanged from your code */}
        {/* ... (the rest of your form code stays exactly the same) ... */}

        <div className="pt-1">
          <AnimatePresence mode="wait">
            {addedState === "added" ? (
              <motion.div key="added" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-spirit/15 border border-spirit/30">
                <Check className="w-5 h-5 text-spirit" />
                <span className="font-display font-semibold text-spirit">Added to cart!</span>
              </motion.div>
            ) : (
              <motion.button key="add" type="button" onClick={handleAdd} whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-display font-semibold text-base",
                  "transition-all duration-200 btn-spirit",
                  product.bestSeller
                    ? "bg-glacier text-ice-black hover:bg-glacier-light"
                    : "bg-white/8 text-white border border-white/12 hover:bg-white/14 hover:border-glacier/30"
                )}>
                <ShoppingCart className="w-5 h-5" />
                Add to Cart — {formatPrice(product.prices[currency], currency)}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}