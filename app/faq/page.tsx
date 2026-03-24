"use client";
// ─────────────────────────────────────────────────────────────────────────────
// /faq — Full FAQ page
// All questions adapted to Snæfellsnes / Icelandic law context
// Categories: General · Plots · Titles · Delivery · Legal · Conservation · Mystical
// Accordion with Framer Motion + category filter tabs
// ─────────────────────────────────────────────────────────────────────────────
import { useState }                from "react";
import Link                        from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";
import { cn }                      from "@/lib/utils";
import { SITE }                    from "@/lib/data";
import type { FaqCategory }        from "@/types";

// ─── Extended FAQ data (beyond lib/data.ts base set) ─────────────────────────
const ALL_FAQS: Array<{
  id:       string;
  category: FaqCategory;
  question: string;
  answer:   string;
}> = [
  // ── GENERAL ───────────────────────────────────────────────────────────────
  {
    id: "what-is",
    category: "general",
    question: "What exactly am I buying?",
    answer:
      "You are purchasing a souvenir novelty gift — not a real estate transaction. You receive a beautifully personalised certificate granting you the right to style yourself as Jarl, Lord or Lady of the Snæfellsnes Highlands (our registered trademark), along with a dedicated GPS-referenced plot reference within our managed Snæfellsnes Reserve. This is purely for fun and enjoyment. Icelandic Titles ehf. retains full legal ownership of the land at all times.",
  },
  {
    id: "who-is-it-for",
    category: "general",
    question: "Who is this gift suitable for?",
    answer:
      "Our souvenir plots make extraordinary gifts for anyone who loves Iceland, Norse mythology, Snæfellsjökull, or simply a uniquely memorable and meaningful keepsake. We have gifted Jarls, Lords and Ladies aged 8 to 95. They are popular as birthdays, anniversaries, Christmas gifts, retirement presents, and even wedding favours. Many people buy them for themselves.",
  },
  {
    id: "refund",
    category: "general",
    question: "What is your refund policy?",
    answer:
      "We offer an unconditional 90-day money-back guarantee. If for any reason you are not completely delighted with your purchase, contact us within 90 days for a full refund — no questions asked. Physical packs do not need to be returned. After 90 days we are unable to offer refunds, but we will always try to help. Email hello@icelandictitles.com with your order number.",
  },
  {
    id: "gift-message",
    category: "general",
    question: "Can I add a personalised gift message?",
    answer:
      "Yes! During checkout you can add a personalised message which will be included on a printed card inside physical gift boxes, and in the email for digital packs. You can also specify a different delivery name and address if ordering as a gift.",
  },

  // ── PLOTS ─────────────────────────────────────────────────────────────────
  {
    id: "plot-size",
    category: "plots",
    question: "How big is a souvenir plot?",
    answer:
      "Our souvenir plots are designated as 1 sq ft (0.093 m²), 5 sq ft (0.46 m²), or 10 sq ft (0.93 m²) reference areas within the Snæfellsnes Reserve. These are souvenir designations, not measured fenced enclosures. Each has a specific GPS coordinate and What3Words address. You can visit and stand on your plot — it will be within sight of Snæfellsjökull glacier.",
  },
  {
    id: "visit-plot",
    category: "plots",
    question: "Can I visit my souvenir plot in person?",
    answer:
      "Absolutely! Your GPS coordinates and What3Words address will navigate you within metres of your designated souvenir spot in the Snæfellsnes Reserve, which lies within the publicly accessible Snæfellsjökull National Park. We also offer three dedicated guided tours — the Glacier Soul Walk, Northern Lights Vigil, and Elf Rock Expedition — during which your guide can take you directly to your plot coordinates. Plot owners receive a 10% discount on all tours.",
  },
  {
    id: "multiple-plots",
    category: "plots",
    question: "Can I buy plots as gifts for multiple people?",
    answer:
      "Yes — and this is one of our most popular options. You can add several plots to your cart, each with a different recipient name and title style. Each order generates a separate personalised certificate. If ordering 5+ plots, contact us at hello@icelandictitles.com for group pricing.",
  },
  {
    id: "plot-location",
    category: "plots",
    question: "Where exactly in Iceland is the reserve?",
    answer:
      "The Snæfellsnes Reserve is located on the Snæfellsnes peninsula in western Iceland, within the Snæfellsjökull National Park area. The GPS coordinates of the reserve centre are approximately 64.83°N, 23.81°W — on the lava fields south of the glacier with direct views of Snæfellsjökull's 1,446-metre ice cap. The reserve is approximately 190 km from Reykjavík (about 2.5 hours by car).",
  },

  // ── TITLES ────────────────────────────────────────────────────────────────
  {
    id: "title-use",
    category: "titles",
    question: "Can I really call myself a Lord, Lady or Jarl?",
    answer:
      "Yes — as a fun, novelty souvenir style! 'Jarl/Lord/Lady of Snæfellsnes' is our registered trademark. You may use it on social media, in email signatures, on personalised stationery, for fun in conversation, or wherever you like for personal enjoyment. It carries no legal weight, confers no privileges, and is not recognised by any government. It is a souvenir title only — but that doesn't make the joy it brings any less real.",
  },
  {
    id: "name-change",
    category: "titles",
    question: "Can I change the name on my certificate?",
    answer:
      "Yes. Spelling corrections are always free. For a full name change, contact us at hello@icelandictitles.com with your order number and the correct name within 30 days of purchase and we will reissue at no charge. After 30 days, a small reissue fee of €9 applies. For printed packs, a new physical certificate will be mailed to you.",
  },
  {
    id: "title-style",
    category: "titles",
    question: "What is the difference between Jarl, Lord and Lady?",
    answer:
      "All three are equivalent in prestige and include the same rights of use. 'Jarl' (from Old Norse, the origin of 'Earl') has a specifically Norse/Icelandic flavour and is popular for those who love the Viking heritage. 'Lord' and 'Lady' follow the more familiar British nobility convention. You choose whichever appeals most when placing your order.",
  },
  {
    id: "title-gifted",
    category: "titles",
    question: "Can I change the title style (Jarl/Lord/Lady) after ordering?",
    answer:
      "Yes — contact us within 30 days and we will reissue your certificate with the new title style at no charge. After 30 days, a €9 reissue fee applies.",
  },

  // ── DELIVERY ──────────────────────────────────────────────────────────────
  {
    id: "delivery-speed",
    category: "delivery",
    question: "How quickly will my order arrive?",
    answer:
      "Digital eco packs (1 sq ft) arrive by email within minutes of purchase. Physical luxury gift boxes are lovingly assembled at our Reykjavík workshop and dispatched within 2–3 working days. Standard delivery times: 3–7 days to Europe, 7–14 days to North America, 10–18 days to Australia, New Zealand and Asia, 10–21 days to other worldwide destinations. All shipping is completely free.",
  },
  {
    id: "free-shipping",
    category: "delivery",
    question: "Is shipping really always free?",
    answer:
      "Yes — always, everywhere. We ship to over 90 countries with no minimum order, no hidden fees, and no exceptions. The price you see at checkout is the price you pay.",
  },
  {
    id: "tracking",
    category: "delivery",
    question: "Can I track my order?",
    answer:
      "Yes. Once your order is dispatched from Reykjavík, you will receive a shipping confirmation email with a tracking link. For digital orders, your certificate arrives by email immediately after purchase (check your spam folder if you don't see it within 5 minutes).",
  },
  {
    id: "address-change",
    category: "delivery",
    question: "I made a mistake with my delivery address — can I change it?",
    answer:
      "If your order has not yet been dispatched, contact us immediately at hello@icelandictitles.com and we will update your address at no charge. If the order has already been shipped, we will do our best to redirect it, but this may not always be possible. In that case we will send a replacement pack free of charge.",
  },

  // ── LEGAL ─────────────────────────────────────────────────────────────────
  {
    id: "real-land",
    category: "legal",
    question: "Am I buying real land in Iceland?",
    answer:
      "No. This is a souvenir gift only. Under Icelandic property law (fasteignalög nr. 6/2001), land ownership requires formal registration in the national land register (þjóðskrá Íslands / Registers Iceland). No such registration occurs with our souvenir plot purchases. Icelandic Titles ehf. retains full legal ownership of all reserve land, and no property rights are transferred to customers under any circumstances.",
  },
  {
    id: "noble-title",
    category: "legal",
    question: "Does this confer a real noble title or aristocratic privilege?",
    answer:
      "Absolutely not. Under Iceland's constitution (Stjórnarskrá lýðveldisins Íslands 1944, Article 65), hereditary privileges, titles of nobility, and aristocratic distinctions are prohibited. The 'Jarl/Lord/Lady of Snæfellsnes' is a registered novelty trademark used solely as a fun souvenir designation. It grants no legal privileges, access rights, voting rights, or recognition by any governmental body anywhere in the world.",
  },
  {
    id: "conservation-legal",
    category: "legal",
    question: "What legal structure governs the reserve?",
    answer:
      "The Snæfellsnes Reserve is privately owned and managed by Icelandic Titles ehf., a company registered in Iceland (Kennitala: 123456-7890, Laugavegur 28, 101 Reykjavík). The land is managed under Icelandic environmental law for conservation and rewilding purposes. Our souvenir operations comply with the Icelandic Consumer Protection Act (lög um neytendavernd nr. 62/2005) and EU Consumer Rights Directive where applicable.",
  },

  // ── CONSERVATION ──────────────────────────────────────────────────────────
  {
    id: "conservation",
    category: "conservation",
    question: "How does my purchase help Iceland's environment?",
    answer:
      "A meaningful portion of every sale funds active conservation and rewilding work in the Snæfellsnes Reserve: native birch woodland restoration (Iceland was once 25–40% forested; today less than 2% has tree cover), erosion control on volcanic slopes, Arctic fox and puffin habitat protection, lava field trail maintenance to protect fragile ecosystems, and environmental monitoring. We publish an annual conservation report on our website.",
  },
  {
    id: "plant-tree",
    category: "conservation",
    question: "What does the 'Plant a Tree' add-on involve?",
    answer:
      "For €19 extra, a native Icelandic birch (Betula pubescens) or downy birch tree will be planted in your name in the Snæfellsnes Reserve as part of our ongoing reforestation programme. You receive a personalised 'Plant a Tree' bookmark with a huldufólk illustration, your tree's approximate GPS location, and a planting certificate. Birch trees are Iceland's natural native woodland tree, and your contribution directly counters centuries of deforestation.",
  },
  {
    id: "glacier-melting",
    category: "conservation",
    question: "Is the glacier really disappearing?",
    answer:
      "Yes. Like many glaciers worldwide, Snæfellsjökull is retreating due to climate change. Scientific projections suggest it could be largely ice-free by 2050 if current warming trends continue. Snæfellsjökull is one of Iceland's smaller ice caps and is particularly vulnerable. A memorial plaque was erected on a nearby disappeared glacier (Ok) in 2019 — a stark reminder of what is at stake. Our conservation work, while focussed on land rewilding, directly supports the broader ecosystem that sustains the glacier's environment.",
  },

  // ── MYSTICAL ──────────────────────────────────────────────────────────────
  {
    id: "bardur",
    category: "mystical",
    question: "Who is Bárður Snæfellsás?",
    answer:
      "Bárður Snæfellsás (literally 'Bárður, spirit of Snæfellsnes') is a figure from the medieval Icelandic saga Bárðar saga Snæfellsáss. He was a Norse settler chieftain of the peninsula, said to be half-human, half-troll by heritage — enormously strong, wise, and deeply connected to the glacier. After his daughter was cast adrift on an ice floe by her cousins, a grief-stricken Bárður retreated into Snæfellsjökull and was never seen in human form again. He became the glacier's immortal guardian spirit. Icelanders still venerate him; his carved wooden statue stands at Arnarstapi, and offerings of flowers and coins are occasionally left at its feet. Bárður represents the protective, watchful power of the glacier.",
  },
  {
    id: "huldufolk",
    category: "mystical",
    question: "Are huldufólk (elves / hidden people) real?",
    answer:
      "In Iceland, this question is treated with genuine seriousness. Surveys suggest that over 54% of Icelanders believe in huldufólk or refuse to rule out their existence. The huldufólk are described not as small fairy-tale elves, but as beautiful, human-sized supernatural beings who live in rocks, hills, lava formations, and natural features — largely invisible to ordinary humans except at special times or to those with the 'sight'. Roads and construction projects in Iceland have genuinely been re-routed to protect suspected elf habitats, including a famous case in 2013 near the Snæfellsnes area. Whether you believe or not, the folklore is ancient, living, and woven deeply into Icelandic identity. We present it for cultural appreciation.",
  },
  {
    id: "energy-centre",
    category: "mystical",
    question: "What makes Snæfellsjökull a spiritual energy centre?",
    answer:
      "Snæfellsjökull is recognised in multiple traditions as one of Earth's great power points. Author Judith Polich lists it as one of the planet's seven crown chakra energy vortexes. Numerous visitors over centuries have reported overwhelming feelings of peace, clarity, creative inspiration, and spiritual connection on the glacier's slopes. Jules Verne famously made it the entrance point to the centre of the Earth in his 1864 novel. Many modern spiritual seekers make pilgrimages specifically to the glacier. We neither confirm nor deny these accounts — they are part of the living mythology that makes this place extraordinary.",
  },
  {
    id: "folklore-disclaimer",
    category: "mystical",
    question: "Are the mystical and folklore elements on your site literally true?",
    answer:
      "All references to Bárður Snæfellsás, huldufólk (hidden people / elves), guardian spirits, spiritual energy centres, and related mythology are presented as Icelandic cultural folklore and are intended for cultural appreciation, storytelling, and entertainment purposes only. These are deeply meaningful aspects of Icelandic cultural heritage. Icelandic Titles makes no claim that these beings literally exist or that our land possesses supernatural properties. The Snæfellsnes Reserve is a beautiful piece of real Icelandic landscape — its magic is, at minimum, geological and ecological.",
  },
];

// ─── Category config ──────────────────────────────────────────────────────────
const CATEGORIES: Array<{ id: FaqCategory | "all"; label: string; icon: string }> = [
  { id: "all",          label: "All",          icon: "✦" },
  { id: "general",      label: "General",      icon: "💬" },
  { id: "plots",        label: "Plots",        icon: "📍" },
  { id: "titles",       label: "Titles",       icon: "👑" },
  { id: "delivery",     label: "Delivery",     icon: "📦" },
  { id: "legal",        label: "Legal",        icon: "⚖" },
  { id: "conservation", label: "Conservation", icon: "🌿" },
  { id: "mystical",     label: "Mystical",     icon: "🧝" },
];

// ─── Single accordion item ────────────────────────────────────────────────────
function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item:     typeof ALL_FAQS[0];
  isOpen:   boolean;
  onToggle: () => void;
}) {
  const cat  = CATEGORIES.find((c) => c.id === item.category);

  return (
    <div
      className={cn(
        "border rounded-2xl overflow-hidden transition-all duration-200",
        isOpen
          ? "border-glacier/25 bg-glacier/[0.03]"
          : "border-white/[0.07] hover:border-white/[0.12]"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "w-full flex items-start gap-4 px-5 py-4 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-glacier"
        )}
      >
        {/* Category icon */}
        <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">
          {cat?.icon}
        </span>

        {/* Question */}
        <span className="flex-1 font-display text-[0.95rem] font-semibold text-white/85 leading-snug pr-3">
          {item.question}
        </span>

        {/* Chevron */}
        <ChevronDown
          className={cn(
            "w-4 h-4 text-white/30 flex-shrink-0 mt-0.5 transition-transform duration-200",
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
            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-[52px]">
              <div className="h-px bg-white/[0.06] mb-4" aria-hidden="true" />
              <p className="font-body text-[0.9rem] text-white/55 leading-[1.8]">
                {item.answer}
              </p>
              {/* Category tag */}
              <div className="mt-3 flex items-center gap-1.5">
                <span className="font-body text-[10px] text-white/25 uppercase tracking-wider">
                  {cat?.label}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main FAQ page ────────────────────────────────────────────────────────────
export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");
  const [openId, setOpenId]                 = useState<string | null>(null);
  const [searchQuery, setSearchQuery]       = useState("");

  const filtered = ALL_FAQS.filter((item) => {
    const matchCat    = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = !searchQuery.trim()
      || item.question.toLowerCase().includes(searchQuery.toLowerCase())
      || item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-ice-black">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="FAQ page header"
        className="relative pt-[72px] overflow-hidden bg-ice-navy"
      >
        <div aria-hidden="true">
          <div className="aurora-orb w-[600px] h-[400px] bg-glacier/7 -top-20 right-0"
            style={{ animationDelay: "0s" }} />
          <div className="aurora-orb w-[350px] h-[350px] bg-spirit/5 bottom-0 left-0"
            style={{ animationDelay: "-9s" }} />
        </div>
        <div className="grain-overlay" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow justify-center mb-4">Questions answered</p>
            <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)] font-light text-white leading-[0.95] mb-5">
              Frequently Asked{" "}
              <em className="not-italic text-gradient-glacier">Questions</em>
            </h1>
            <p className="font-body text-base text-white/45 max-w-xl mx-auto leading-relaxed mb-8">
              Everything you need to know about souvenir plots, Icelandic law,
              Bárður Snæfellsás, the huldufólk, and the magic of Snæfellsjökull.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setOpenId(null); }}
                placeholder="Search questions…"
                aria-label="Search FAQ questions"
                className={cn(
                  "w-full bg-white/[0.07] border border-white/15 rounded-2xl",
                  "px-5 py-3.5 pr-12 font-body text-sm text-white placeholder-white/30",
                  "focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20",
                  "transition-all duration-150"
                )}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm" aria-hidden="true">⌕</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <main
        id="faq-content"
        aria-label="Frequently asked questions"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
      >
        {/* Category tabs */}
        <div
          className="flex flex-wrap gap-2 py-8"
          role="tablist"
          aria-label="FAQ categories"
        >
          {CATEGORIES.map((cat) => {
            const count = cat.id === "all"
              ? ALL_FAQS.length
              : ALL_FAQS.filter((f) => f.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-2 rounded-xl",
                  "font-body text-xs font-semibold transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
                  activeCategory === cat.id
                    ? "bg-glacier text-ice-black"
                    : "bg-white/[0.05] border border-white/10 text-white/55 hover:text-white hover:border-white/25"
                )}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.label}
                <span className={cn(
                  "ml-0.5 text-[10px]",
                  activeCategory === cat.id ? "text-ice-black/60" : "text-white/30"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p className="font-body text-xs text-white/30 mb-5" aria-live="polite" aria-atomic="true">
          {filtered.length} question{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" ? ` in ${CATEGORIES.find(c => c.id === activeCategory)?.label}` : ""}
          {searchQuery ? ` matching "${searchQuery}"` : ""}
        </p>

        {/* FAQ accordion */}
        {filtered.length > 0 ? (
          <div className="space-y-2.5">
            <AnimatePresence initial={false}>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{    opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaqItem
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-display text-2xl text-white/30 mb-2">No questions found</p>
            <p className="font-body text-sm text-white/25">
              Try a different search term or category
            </p>
          </div>
        )}

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 glass-card p-8 text-center border-glacier/12"
        >
          <p className="text-2xl mb-3" aria-hidden="true">🧊</p>
          <h2 className="font-display text-xl font-light text-white mb-2">
            Still have a question?
          </h2>
          <p className="font-body text-sm text-white/45 mb-6 max-w-sm mx-auto leading-relaxed">
            Our team in Reykjavík is happy to help. We typically reply within one working day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl",
                "bg-glacier text-ice-black font-display font-semibold text-sm",
                "hover:bg-glacier-light hover:shadow-glacier transition-all btn-spirit"
              )}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email Us
            </a>
            <Link
              href="/buy-a-plot"
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-xl",
                "border border-white/15 text-white/60 hover:text-white hover:border-white/30",
                "font-body text-sm transition-all"
              )}
            >
              View Souvenir Plots
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
