"use client";
// ─────────────────────────────────────────────────────────────────────────────
// /guided-tours — Guided Tours page
// Hero · Three full tour cards · FAQ strip · CTA
// ─────────────────────────────────────────────────────────────────────────────
import Link                        from "next/link";
import { motion }                  from "framer-motion";
import { Home, ChevronRight, Shield, Users, Star } from "lucide-react";
import { cn }                      from "@/lib/utils";
import { GUIDED_TOURS, SITE }      from "@/lib/data";
import { TourCard }                from "@/components/tours/TourCard";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ToursHero() {
  return (
    <section
      aria-label="Guided tours page hero"
      className="relative pt-[72px] overflow-hidden bg-ice-navy"
    >
      {/* Aurora orbs */}
      <div aria-hidden="true">
        <div className="aurora-orb w-[700px] h-[500px] bg-aurora/7 -top-20 right-0"    style={{ animationDelay: "0s"  }} />
        <div className="aurora-orb w-[400px] h-[400px] bg-spirit/5 bottom-0 left-0"    style={{ animationDelay: "-9s" }} />
        <div className="aurora-orb w-[300px] h-[300px] bg-aurora-violet/6 top-1/2 left-1/3" style={{ animationDelay: "-5s" }} />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ice-black to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero background image placeholder */}
      {/*
        TODO: Replace with next/image
        Query: "northern lights Iceland glacier landscape night"
        alt: "Vivid aurora borealis dancing above Snæfellsjökull glacier at night —
              the spirits of Vestfirðir said to travel within the dancing lights"
        Use: fill, priority, object-cover, opacity overlay
      */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 font-body text-xs text-white/35">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-white/60 transition-colors">
                <Home className="w-3 h-3" aria-hidden="true" />Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
            <li aria-current="page" className="text-white/55">Guided Tours</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">Vestfirðir Reserve · Iceland</p>

          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-light text-white leading-[0.93] mb-6">
            Walk the{" "}
            <em className="not-italic text-gradient-glacier">sacred landscape</em>
            <br />with a guide
          </h1>

          <p className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mb-8">
            Our local guides — folklorists, conservationists and storytellers — bring the
            mythology of{" "}
            <strong className="text-white/80 font-semibold">Bárður Snæfellsás</strong>
            {" "}and the{" "}
            <strong className="text-white/80 font-semibold">huldufólk</strong>
            {" "}to life among the ancient mountains of Vestfirðir.
          </p>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: <Users  className="w-3.5 h-3.5" aria-hidden="true" />, text: "Small groups (max 10)" },
              { icon: <Shield className="w-3.5 h-3.5" aria-hidden="true" />, text: "Plot owners get 10% off" },
              { icon: <Star   className="w-3.5 h-3.5" aria-hidden="true" />, text: "Expert folklore guides" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] font-body text-xs text-white/55"
              >
                {icon}
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Tour FAQ strip ───────────────────────────────────────────────────────────
function TourFaqStrip() {
  const faqs = [
    {
      q: "Do I need to own a souvenir plot to book?",
      a: "No — tours are open to everyone. Plot owners simply receive a 10% discount when they include their plot reference at booking.",
    },
    {
      q: "What's the cancellation policy?",
      a: "Free cancellation up to 7 days before your tour date. Within 7 days, we offer a credit for a future tour. No-shows are non-refundable.",
    },
    {
      q: "Can children join the tours?",
      a: "The Elf Rock Expedition is family-friendly for ages 5+. The Glacier Soul Walk suits ages 10+ with moderate fitness. The Northern Lights Vigil is suitable for all ages.",
    },
    {
      q: "How do I get to Eyri Kollafirði from Reykjavík?",
      a: "By car it's ~190 km (2.5 hours) via Route 1 and 54. We offer a pickup service from Reykjavík on most tour dates — mention it in your booking notes.",
    },
  ];

  return (
    <section
      aria-label="Tour frequently asked questions"
      className="bg-ice-deep py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow justify-center mb-8 text-center">Before you book</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-card p-5"
            >
              <p className="font-display text-sm font-semibold text-white mb-2">{faq.q}</p>
              <p className="font-body text-sm text-white/50 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA banner ───────────────────────────────────────────────────────────────
function ToursCTA() {
  return (
    <section
      aria-label="Book a tour call to action"
      className="relative bg-ice-navy overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        className="aurora-orb w-[500px] h-[400px] bg-spirit/6 top-0 left-1/2 -translate-x-1/2"
        aria-hidden="true"
        style={{ animationDelay: "0s" }}
      />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl mb-4" aria-hidden="true">🗻</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-white mb-4">
            Don't have a plot yet?
          </h2>
          <p className="font-body text-base text-white/45 mb-8 leading-relaxed max-w-lg mx-auto">
            Claim your souvenir plot in the Vestfirðir Reserve and join 18,240 Jarls, Lords
            and Ladies. Plot owners receive 10% off every guided tour — forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/buy-a-plot"
              className={cn(
                "flex items-center gap-2 px-7 py-3.5 rounded-xl",
                "bg-glacier text-ice-black font-display font-semibold",
                "hover:bg-glacier-light hover:shadow-glacier transition-all btn-spirit"
              )}
            >
              ❄ Claim Your Plot
            </Link>
            <a
              href={`mailto:${SITE.email}?subject=Guided%20Tour%20Enquiry`}
              className="font-body text-sm text-white/45 hover:text-glacier transition-colors underline underline-offset-2"
            >
              Or email us with questions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GuidedToursPage() {
  return (
    <>
      <ToursHero />

      <main id="tours-content" aria-label="Guided tours">

        {/* Tour cards */}
        <section
          aria-label="Available guided tours"
          className="bg-ice-black py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-12">
              <p className="eyebrow justify-center mb-3">Three experiences</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-light text-white">
                Choose your{" "}
                <em className="not-italic text-gradient-glacier">Vestfirðir adventure</em>
              </h2>
              <p className="font-body text-sm text-white/40 mt-3 max-w-xl mx-auto leading-relaxed">
                All tours depart from Borgarnes village.
                Pickup from Reykjavík available — mention in booking notes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDED_TOURS.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center font-body text-xs text-white/25 mt-8"
            >
              Private group bookings available for 10+ guests ·{" "}
              <a href={`mailto:${SITE.email}`} className="text-glacier hover:underline underline-offset-2">
                Contact us
              </a>
            </motion.p>
          </div>
        </section>

        {/* FAQ */}
        <TourFaqStrip />

        {/* CTA */}
        <ToursCTA />

      </main>
    </>
  );
}
