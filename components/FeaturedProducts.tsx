"use client";
// ─────────────────────────────────────────────────────────────────────────────
// FeaturedProducts — Homepage product grid
// 1 sq ft / 5 sq ft (best seller) / 10 sq ft
// Live currency switching from Zustand store
// Add to cart with recipient name + title style selection
// ─────────────────────────────────────────────────────────────────────────────
import { useState }                   from "react";
import Link                           from "next/link";
import { motion }                     from "framer-motion";
import { Check, ArrowRight, Leaf }    from "lucide-react";
import { cn, formatPrice }            from "@/lib/utils";
import { useCartStore }               from "@/lib/store";
import { PRODUCTS }                   from "@/lib/data";
import { Badge }                      from "@/components/ui/Badge";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import type { TitleStyle }            from "@/types";

// ─── Add-to-cart mini form ────────────────────────────────────────────────────
function AddToCartForm({
  product,
  onAdded,
}: {
  product:  typeof PRODUCTS[0];
  onAdded:  () => void;
}) {
  const { addItem, currency } = useCartStore();
  const [name,   setName]     = useState("");
  const [style,  setStyle]    = useState<TitleStyle>("Lord");
  const [error,  setError]    = useState("");

  function handleAdd() {
    if (!name.trim()) { setError("Please enter a name for the certificate."); return; }
    setError("");
    addItem({
      productId:     product.id,
      productName:   product.titleName,
      plotSize:      product.size,
      price:         product.prices[currency],
      currency,
      titleStyle:    style,
      recipientName: name.trim(),
      quantity:      1,
      addOns:        [],
      deliveryType:  product.deliveryType,
    });
    setName("");
    onAdded();
  }

  return (
    <div className="space-y-3 pt-4 border-t border-white/[0.07]">
      {/* Title style picker */}
      <div
        className="flex rounded-lg overflow-hidden border border-white/10"
        role="group"
        aria-label="Choose title style"
      >
        {(["Jarl", "Lord", "Lady"] as TitleStyle[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStyle(s)}
            aria-pressed={style === s}
            className={cn(
              "flex-1 py-2 text-xs font-body font-semibold transition-all duration-150",
              style === s
                ? "bg-glacier text-ice-black"
                : "text-white/45 hover:text-white hover:bg-white/5"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Name input */}
      <div>
        <label
          htmlFor={`name-${product.id}`}
          className="block font-body text-xs text-white/40 mb-1.5"
        >
          Certificate name
        </label>
        <input
          id={`name-${product.id}`}
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          placeholder={`e.g. ${style} Emma Johnson`}
          maxLength={60}
          className={cn(
            "w-full bg-white/5 border rounded-lg px-3 py-2",
            "font-body text-sm text-white placeholder-white/25",
            "focus:outline-none focus:ring-1 transition-all",
            error
              ? "border-red-500/50 focus:ring-red-500/30"
              : "border-white/10 focus:border-glacier/50 focus:ring-glacier/20"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `err-${product.id}` : undefined}
        />
        {error && (
          <p id={`err-${product.id}`} className="font-body text-xs text-red-400 mt-1" role="alert">
            {error}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className={cn(
          "w-full py-3 rounded-xl font-display font-semibold text-sm",
          "transition-all duration-200 btn-spirit",
          product.featured
            ? "bg-glacier text-ice-black hover:bg-glacier-light hover:shadow-glacier"
            : "bg-white/8 text-white border border-white/12 hover:bg-white/14 hover:border-glacier/30"
        )}
      >
        Add to Cart — {formatPrice(product.prices[currency], currency)}
      </button>
    </div>
  );
}

// ─── Single product card ──────────────────────────────────────────────────────
function ProductCard({
  product,
  index,
}: {
  product: typeof PRODUCTS[0];
  index:   number;
}) {
  const { currency }     = useCartStore();
  const [added, setAdded] = useState(false);

  function handleAdded() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${product.titleName} — ${formatPrice(product.prices[currency], currency)}`}
      className={cn(
        "relative flex flex-col glass-card p-6",
        "transition-all duration-300",
        product.featured
          ? "border-glacier/25 shadow-glacier bg-gradient-to-b from-glacier/6 to-transparent"
          : "hover:border-white/12"
      )}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-4 min-h-[24px]">
        {product.bestSeller && (
          <Badge variant="bestseller">✦ Best Seller</Badge>
        )}
        {product.featured && !product.bestSeller && (
          <Badge variant="featured">Most Popular</Badge>
        )}
        {product.deliveryType === "digital" && (
          <Badge variant="neutral">Digital</Badge>
        )}
        {product.deliveryType === "physical" && (
          <Badge variant="glacier">Physical Gift</Badge>
        )}
      </div>

      {/* Size indicator */}
      <p className="eyebrow mb-2">{product.sqft} sq ft</p>

      {/* Title */}
      <h3 className="font-display text-2xl font-semibold text-white mb-1">
        {product.titleName}
      </h3>
      <p className="font-body text-sm text-white/45 italic mb-4">
        {product.tagline}
      </p>

      {/* Price */}
      <div className="mb-5">
        <span className="font-display text-4xl font-light text-glacier">
          {formatPrice(product.prices[currency], currency)}
        </span>
        <span className="font-body text-sm text-white/35 ml-2">
          free shipping
        </span>
      </div>

      {/* Includes list (top 5) */}
      <ul className="space-y-2 mb-4 flex-1" aria-label={`Included in ${product.titleName}`}>
        {product.includes.slice(0, 5).map((inc) => (
          <li key={inc.label} className="flex items-start gap-2.5">
            <Check className="w-3.5 h-3.5 text-spirit mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-sm text-white/60">{inc.label}</span>
          </li>
        ))}
        {product.includes.length > 5 && (
          <li className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 text-center text-spirit text-xs flex-shrink-0" aria-hidden="true">+</span>
            <span className="font-body text-xs text-white/35 italic">
              {product.includes.length - 5} more inclusions
            </span>
          </li>
        )}
      </ul>

      {/* Plant a Tree note */}
      {product.addOns?.some((a) => a.id === "plant-a-tree") && (
        <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg bg-spirit/6 border border-spirit/12">
          <Leaf className="w-3.5 h-3.5 text-spirit flex-shrink-0" aria-hidden="true" />
          <span className="font-body text-xs text-spirit/75">
            Optional: Plant a Tree add-on (+€19)
          </span>
        </div>
      )}

      {/* Added confirmation */}
      {added && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 justify-center py-2 mb-2 text-spirit"
        >
          <Check className="w-4 h-4" aria-hidden="true" />
          <span className="font-body text-sm font-semibold">Added to cart!</span>
        </motion.div>
      )}

      {/* Add-to-cart form */}
      <AddToCartForm product={product} onAdded={handleAdded} />
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function FeaturedProducts() {
  return (
    <SectionWrapper
      id="featured-products"
      label="Souvenir plot packages"
      className="bg-ice-black"
    >
      <SectionHeading
        eyebrow="Choose your plot"
        title={<>Three ways to own a piece of <em className="text-gradient-rune not-italic">Snæfellsnes</em></>}
        subtitle="All plots include a personalised certificate, GPS coordinates, and rights to your souvenir noble title. Free worldwide shipping."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRODUCTS.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {/* Full shop CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <Link
          href="/buy-a-plot"
          className={cn(
            "inline-flex items-center gap-2",
            "font-body text-sm text-white/50 hover:text-glacier",
            "transition-colors duration-200 underline underline-offset-4"
          )}
        >
          See full product details & Plant a Tree add-on
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
