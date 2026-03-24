"use client";
// ─────────────────────────────────────────────────────────────────────────────
// ShopFaq — /buy-a-plot inline FAQ
// Key buying questions with accordion animation
// ─────────────────────────────────────────────────────────────────────────────
import { useState }             from "react";
import Link                     from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn }                   from "@/lib/utils";

const FAQ_ITEMS = [
  {
    q: "Is this a real land purchase?",
    a: "No — this is a souvenir novelty gift. You receive a personalised certificate, GPS plot coordinates, and the right to use our registered souvenir title (Jarl/Lord/Lady of Snæfellsnes). Icelandic Titles ehf. retains full legal ownership of all reserve land. No land transfer takes place.",
  },
  {
    q: "How quickly will I receive my order?",
    a: "Digital packs (1 sq ft eco) are delivered to your email within minutes. Physical gift boxes are lovingly assembled in Reykjavík and dispatched within 2–3 working days — typically 3–7 days to Europe, 7–14 days to North America, 10–18 days worldwide. Shipping is always free.",
  },
  {
    q: "What is the 'Plant a Tree' add-on?",
    a: "For €19 extra, a native Icelandic birch tree is planted in your name in the Snæfellsnes Reserve as part of our rewilding programme. You'll receive a personalised bookmark with a huldufólk illustration and your tree's approximate location. Iceland was once 25–40% forested — your tree genuinely matters.",
  },
  {
    q: "Can I change the name on my certificate?",
    a: "Yes. Spelling corrections are free within 30 days of purchase. After 30 days, a small reissue fee of €9 applies. Email hello@icelandictitles.com with your order number and the correct name.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer an unconditional 90-day money-back guarantee. If you are not completely delighted, contact us within 90 days for a full refund — no questions asked. Physical packs do not need to be returned.",
  },
  {
    q: "Can I visit my plot in person?",
    a: "Absolutely! Your GPS coordinates and What3Words address will take you within metres of your souvenir plot in the publicly accessible Snæfellsnes Reserve. Plot owners also receive a 10% discount on all our guided tours of the glacier and lava fields.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item:     typeof FAQ_ITEMS[0];
  isOpen:   boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-white/[0.07] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "w-full flex items-center justify-between px-5 py-4 text-left",
          "hover:bg-white/[0.03] transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-glacier"
        )}
      >
        <span className="font-display text-sm font-semibold text-white/85 pr-4">
          {item.q}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180 text-glacier"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{    height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 font-body text-sm text-white/50 leading-relaxed border-t border-white/[0.05] pt-4">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ShopFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-label="Frequently asked questions about buying a plot"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-ice-deep"
    >
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow justify-center mb-3">Common questions</p>
        <h2 className="font-display text-3xl font-light text-white text-center mb-10">
          Before you buy
        </h2>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 font-body text-sm text-white/40 hover:text-glacier transition-colors underline underline-offset-2"
          >
            View all frequently asked questions
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
