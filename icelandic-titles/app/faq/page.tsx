"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Search, MessageCircle, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";

// ─── FAQ data ─────────────────────────────────────────────────────────────────
interface FAQItem { q: string; a: string; tags: string[] }
interface FAQCategory { id: string; label: string; icon: string; items: FAQItem[] }

const FAQ_DATA: FAQCategory[] = [
  {
    id: "what-is", label: "What Is Icelandic Titles?", icon: "👑",
    items: [
      { q: "What exactly am I buying?", a: "You are buying a souvenir novelty gift — not a legal land title or any real property interest. You receive a beautifully personalised certificate, GPS coordinates for a symbolic plot within our managed nature reserves, and the right to use the souvenir title Jarl, Lord or Lady of the Icelandic Highlands. All land remains owned and managed by Icelandic Titles ehf. in perpetuity.", tags: ["what-is","legal"] },
      { q: "Can I really call myself a Lord, Lady or Jarl?", a: "You may use the souvenir title 'Lord', 'Lady' or 'Jarl of the Icelandic Highlands' as our registered trademark allows — for fun, on correspondence, in email signatures, and on social media. This is a novelty souvenir title and is not recognised as a legal noble title by any government or heraldic authority. Under Icelandic law, no noble titles exist for private individuals — Iceland abolished the nobility in its 1944 constitution. This title is entirely for enjoyment purposes and must not be used to make legal claims or misrepresent your status.", tags: ["what-is","title","legal"] },
      { q: "Is this a real land purchase?", a: "No. This is a souvenir gift. Icelandic Titles ehf. is the registered legal owner of all reserve land. No land transfer takes place. You cannot register your name with the Icelandic land registry (Fasteignaskrá) — this is not permitted for souvenir purchases under Icelandic property law. The purchase gives you a symbolic plot reference within our reserve, not any legal ownership, access rights, or mineral rights.", tags: ["what-is","legal"] },
      { q: "Why Iceland? Why not buy real land?", a: "Iceland's extraordinary landscapes make it one of the world's most awe-inspiring places. We wanted to create a meaningful connection between people and this remarkable country, while funding its conservation. Unlike real land purchases (which are complex, taxed, and subject to Icelandic restrictions on foreign ownership), our souvenir model lets anyone in the world instantly 'own' a piece of Iceland's soul — while we manage it responsibly.", tags: ["what-is"] },
      { q: "Are you affiliated with any official Icelandic body?", a: "No. Icelandic Titles ehf. is a privately registered company in Iceland (Reykjavík). We are not affiliated with the Icelandic government, any municipality, national park authority, or Landvernd (the Icelandic Environment Association). We operate independently and fund our conservation activities through souvenir sales.", tags: ["what-is","legal"] },
    ],
  },
  {
    id: "plots", label: "Your Plot", icon: "📍",
    items: [
      { q: "Where exactly is my plot?", a: "Your plot is located within one of our three nature reserves — Thingvellir Reserve (UNESCO World Heritage), Highland View Reserve (Landmannalaugar), or Glacier Estate (Vatnajökull area). Each plot comes with specific GPS coordinates and a What3Words address pinpointing your symbolic square footage. You can find your plot on Google Maps, Google Earth, or the What3Words app.", tags: ["plots"] },
      { q: "Can I visit my plot in person?", a: "Yes — all three reserves are in publicly accessible areas of Iceland. You can visit the general area of your plot (subject to normal access rules for the national park or reserve). We also offer guided tours that include a reserve visit and conservation briefing. Note that you do not have any exclusive access rights — the land is managed by us and access is subject to Icelandic environmental law.", tags: ["plots","visiting"] },
      { q: "Can I build on, fence, or alter my plot?", a: "No. This is a souvenir purchase only. Icelandic Titles ehf. retains full ownership and management rights. You have no right to build, fence, excavate, plant, remove vegetation, or alter the land in any way. Any such activity would be trespass and potentially a breach of Icelandic environmental protection laws, particularly within or adjacent to national park boundaries.", tags: ["plots","legal"] },
      { q: "What happens to my plot if I pass away?", a: "A souvenir plot is a personal novelty gift with no legal land rights attached. It cannot be inherited or legally transferred. However, the certificate and plot reference are yours to pass on as keepsakes, and we are happy to issue new certificates for loved ones upon request (subject to a small administration fee).", tags: ["plots"] },
      { q: "Can I name my plot something specific?", a: "The plot reference (e.g. ICE-THI-5SQ-00842) is fixed at purchase. The certificate is personalised with the title and name you provide. If you would like to add a personal dedication to a reissued certificate, contact our team at hello@icelandictitles.com.", tags: ["plots"] },
    ],
  },
  {
    id: "certificates", label: "Certificates & Titles", icon: "📜",
    items: [
      { q: "What does the certificate look like?", a: "Your certificate features traditional Norse-inspired design motifs, your personalised title and name, your reserve name, your What3Words plot location, your unique plot reference number, and our company registration details. The 5 sq ft and 10 sq ft packs include a premium A3 printed version, framing-ready on heavyweight paper. All packs include a digital A4 PDF for instant download.", tags: ["certificates"] },
      { q: "Can I change the name on my certificate?", a: "Yes. Contact us at hello@icelandictitles.com with your order number and the corrected name. Certificate reissues for spelling corrections are free within 14 days of purchase. Name changes requested later (e.g. after a marriage) incur a small administration fee of €9.", tags: ["certificates"] },
      { q: "Can I change the title from Lord to Lady or Jarl?", a: "Absolutely. We offer free title changes within 30 days of purchase — just email us. After 30 days a €9 reissue fee applies.", tags: ["certificates"] },
      { q: "Is the title registered anywhere official?", a: "The title 'Jarl / Lord / Lady of the Icelandic Highlands' is a registered trademark of Icelandic Titles ehf. It is not registered with any heraldic authority, College of Arms, or governmental body — in Iceland or elsewhere. Iceland has no equivalent of the Scottish Lord Lyon or English College of Arms, and no mechanism exists for registering personal noble titles under Icelandic law.", tags: ["certificates","legal"] },
    ],
  },
  {
    id: "delivery", label: "Delivery & Shipping", icon: "📦",
    items: [
      { q: "How quickly will I receive my order?", a: "The digital certificate PDF is available immediately after purchase — check your email or log in to your dashboard. Physical gift packs are dispatched from Reykjavík within 2–3 working days and typically arrive within: Europe 5–8 days, North America 8–12 days, Rest of World 10–18 days.", tags: ["delivery"] },
      { q: "Do you ship worldwide?", a: "Yes — we ship to every country in the world, completely free of charge. There are no hidden postal fees. For some remote locations delivery may take slightly longer than the estimates above.", tags: ["delivery"] },
      { q: "What is included in the physical gift pack?", a: "The 5 sq ft Luxury Gift Pack includes: a premium A3 framing-ready certificate, a volcanic basalt coaster engraved with your reserve name, an illustrated Iceland reserve map with your plot highlighted, a 'Plant a Tree' bookmark, a physical app access card, and a luxury gift box with ribbon and tissue paper. The 10 sq ft pack adds an Icelandic wool wristband, a dedication register inscription, and a collector's-edition box.", tags: ["delivery"] },
      { q: "My physical gift pack hasn't arrived — what should I do?", a: "If your pack hasn't arrived within the expected timeframe, email us at hello@icelandictitles.com with your order number. We'll track it and, if it's lost in transit, we'll send a replacement free of charge within 5 working days.", tags: ["delivery"] },
      { q: "Can I send it directly to someone else as a gift?", a: "Yes — simply enter the recipient's address at checkout. We can also include a personalised gift message in the physical pack. The price is never printed on physical gift packs.", tags: ["delivery"] },
    ],
  },
  {
    id: "refunds", label: "Refunds & Returns", icon: "🛡",
    items: [
      { q: "What is your refund policy?", a: "We offer a 90-day money-back guarantee — no questions asked. If you're not completely satisfied with your purchase for any reason, contact us within 90 days of purchase and we'll issue a full refund to your original payment method. This applies to both digital and physical purchases. Physical packs do not need to be returned.", tags: ["refunds"] },
      { q: "How do I request a refund?", a: "Email hello@icelandictitles.com with your order number and a brief message requesting a refund. We'll process it within 2 working days. Refunds typically appear in your account within 5–10 business days depending on your bank or card issuer.", tags: ["refunds"] },
      { q: "Can I exchange for a different reserve or size?", a: "Yes — within 90 days of purchase, we can exchange your order for a different reserve, size, or title style. Email us and we'll sort it out.", tags: ["refunds"] },
      { q: "What if my physical gift pack arrives damaged?", a: "Email us a photo of the damage and your order number, and we'll send a replacement at no charge within 5 working days.", tags: ["refunds"] },
    ],
  },
  {
    id: "adoptions", label: "Animal Adoptions", icon: "🐴",
    items: [
      { q: "Do I actually own the animal I adopt?", a: "No. Animal adoptions are symbolic sponsorships that fund the care, welfare, or conservation monitoring of specific animals or species. You do not acquire any legal ownership, custodial rights, or right to take the animal home. Your adoption certificate is a novelty souvenir confirming your financial support.", tags: ["adoptions"] },
      { q: "Can I visit my adopted animal?", a: "Icelandic horses in our programme are managed by partner farms in Iceland — we can sometimes arrange visits as part of our guided tours. Arctic foxes and eagles are wild animals monitored in their natural habitat; visiting their territories is not possible or appropriate.", tags: ["adoptions"] },
      { q: "How do annual adoptions renew?", a: "Animal adoptions are billed annually. We'll send you a reminder email 30 days before renewal. You can cancel at any time — your adoption remains active until the end of the current annual period.", tags: ["adoptions"] },
    ],
  },
  {
    id: "conservation", label: "Conservation", icon: "🌿",
    items: [
      { q: "How does my purchase fund conservation?", a: "A meaningful portion of every purchase funds active land management: native birch tree planting, invasive Alaskan lupine clearance, arctic fox den monitoring, bird ringing surveys, glacial retreat data collection, water quality monitoring, and erosion control. We publish an annual conservation report available to all plot owners.", tags: ["conservation"] },
      { q: "Do you plant a tree with every purchase?", a: "Yes. Every purchase includes a 'Plant a Tree' certificate. One native Icelandic tree (downy birch — Betula pubescens) is planted in a designated reforestation zone in the owner's name. Iceland was once covered in birch forest; today less than 2% of the country has tree cover — your tree helps reverse this.", tags: ["conservation"] },
      { q: "Can you guarantee the land won't be developed?", a: "Icelandic Titles ehf. commits to managing all reserve land for conservation in perpetuity. We do not intend to develop or sell the land. As with any private company, we cannot offer an absolute legal guarantee beyond our stated mission, which is why we publish transparent annual reports and maintain our conservation commitments publicly.", tags: ["conservation"] },
    ],
  },
];

function FAQItem({ item, isOpen, onToggle, idx }: { item: FAQItem; isOpen: boolean; onToggle: () => void; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.035 }}
      className="border border-white/[0.07] rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-white/[0.03] transition-all"
        aria-expanded={isOpen}
        aria-controls={`faq-a-${idx}`}
      >
        <ChevronDown className={cn("w-5 h-5 text-aurora/50 flex-shrink-0 mt-0.5 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
        <span className="text-sm font-semibold text-white/85 leading-snug">{item.q}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-a-${idx}`}
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }} className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-2 ml-8 text-sm text-white/55 leading-relaxed border-t border-white/[0.05] pt-3">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const toggle = (k: string) => setOpen((p) => ({ ...p, [k]: !p[k] }));

  const filtered = FAQ_DATA.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => {
      const q = search.toLowerCase();
      const match = !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
      return match && (activeCat === "all" || cat.id === activeCat);
    }),
  })).filter((c) => c.items.length > 0);

  const total = filtered.reduce((s, c) => s + c.items.length, 0);

  return (
    <>
      <section className="relative pt-32 pb-14 overflow-hidden" aria-labelledby="faq-h1">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] to-ice-black" aria-hidden="true" />
        <div className="aurora-orb aurora-orb-2 opacity-15 top-0 right-0" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="label-eyebrow mb-4">Help Centre</p>
          <h1 id="faq-h1" className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-white/50 text-[1.05rem] max-w-xl mx-auto mb-8">
            Everything you need to know about your souvenir plot, certificate, title, and conservation mission.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" aria-hidden="true" />
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions…"
              className="w-full pl-11 pr-14 py-3.5 bg-white/[0.07] border border-white/[0.12] focus:border-aurora/50 focus:ring-1 focus:ring-aurora/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none transition-all"
              aria-label="Search FAQ"
            />
            {search && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/30">{total} result{total !== 1 ? "s" : ""}</span>}
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 sticky top-[68px] z-20 bg-ice-black/95 backdrop-blur-xl py-4" role="tablist" aria-label="FAQ categories">
          {[{ id: "all", label: "All", icon: "🔍" }, ...FAQ_DATA.map(c => ({ id: c.id, label: c.label, icon: c.icon }))].map((c) => (
            <button key={c.id} role="tab" aria-selected={activeCat === c.id} onClick={() => setActiveCat(c.id)}
              className={cn("flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all",
                activeCat === c.id ? "bg-aurora text-ice-black border-aurora" : "border-white/10 text-white/50 hover:text-white hover:border-white/25"
              )}>
              <span aria-hidden="true">{c.icon}</span>
              {c.label === "All" ? "All Questions" : c.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
            <p className="text-lg text-white/50 mb-4">No questions match &ldquo;{search}&rdquo;</p>
            <button onClick={() => setSearch("")} className="text-aurora text-sm underline">Clear search</button>
          </div>
        ) : (
          <div className="space-y-10">
            {filtered.map((cat) => (
              <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                <h2 id={`cat-${cat.id}`} className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <span aria-hidden="true">{cat.icon}</span>{cat.label}
                </h2>
                <div className="space-y-2">
                  {cat.items.map((item, idx) => {
                    const k = `${cat.id}-${idx}`;
                    return <FAQItem key={k} item={item} isOpen={!!open[k]} onToggle={() => toggle(k)} idx={idx} />;
                  })}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Contact */}
        <section className="mt-16 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 text-center" aria-labelledby="contact-h">
          <MessageCircle className="w-10 h-10 text-aurora mx-auto mb-4" aria-hidden="true" />
          <h2 id="contact-h" className="font-display text-xl font-bold text-white mb-2">Still have a question?</h2>
          <p className="text-white/45 text-sm mb-6 max-w-sm mx-auto">Our team in Reykjavík typically responds within 24 hours, Monday–Friday.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 bg-white/[0.07] border border-white/15 hover:bg-white/[0.1] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all" aria-label={`Email ${SITE.email}`}>
              <Mail className="w-4 h-4 text-aurora" aria-hidden="true" />{SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 bg-white/[0.07] border border-white/15 hover:bg-white/[0.1] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all" aria-label={`Call ${SITE.phone}`}>
              <Phone className="w-4 h-4 text-aurora-green" aria-hidden="true" />{SITE.phone}
            </a>
          </div>
          <p className="text-xs text-white/25 mt-4">Mon–Fri · 09:00–17:00 GMT · Replies in Icelandic and English</p>
        </section>
      </main>
    </>
  );
}
