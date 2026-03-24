"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar, Clock, Users, Mountain, ChevronRight, Check,
  MapPin, Star, Shield, X, Send, Compass
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { GUIDED_TOURS, RESERVES } from "@/lib/data";
import type { GuidedTour } from "@/types";

// ─── Difficulty badge colours ─────────────────────────────────────────────────
const DIFFICULTY_STYLES: Record<string, string> = {
  "Easy": "bg-aurora-green/15 text-aurora-green border-aurora-green/30",
  "Easy–Moderate": "bg-sky-500/15 text-sky-400 border-sky-500/30",
  "Moderate": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Moderate–Hard": "bg-red-500/15 text-red-400 border-red-500/30",
};

// ─── Tour booking form ────────────────────────────────────────────────────────
function BookingForm({ tour, onClose }: { tour: GuidedTour; onClose: () => void }) {
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", guests: "1",
    plotRef: "", specialRequirements: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (!form.date) e.date = "Please select a preferred date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setStep("confirm");
  };

  const handleConfirm = () => {
    setStep("success");
    // TODO Part 6: POST /api/tour-booking → Stripe payment → confirmation email
  };

  const reserve = RESERVES.find((r) => r.slug === tour.reserve)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-heading"
    >
      <motion.div
        initial={{ scale: 0.92, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 12, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="relative w-full max-w-lg bg-[#07111f] border border-white/[0.1] rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)] max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07] flex-shrink-0">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-aurora/60 mb-0.5">Book Tour</p>
            <h2 id="booking-modal-heading" className="font-display text-base font-bold text-white leading-tight">{tour.name}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all" aria-label="Close booking form">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 space-y-4">
                {/* Tour summary */}
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <Image src={tour.image} alt={tour.imageAlt} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">{reserve.name}</p>
                    <div className="flex flex-wrap gap-3 mt-1 text-xs text-white/50">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{tour.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{tour.groupSize}</span>
                      <span className="flex items-center gap-1"><Mountain className="w-3 h-3" />{tour.difficulty}</span>
                    </div>
                    <p className="font-display text-lg font-bold text-ice-gold-light mt-1">€{tour.price} <span className="text-xs text-white/30 font-normal">per person</span></p>
                  </div>
                </div>

                {/* Form fields */}
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Lord James Morrison", required: true },
                  { id: "email", label: "Email Address", type: "email", placeholder: "james@example.com", required: true },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+44 7700 900000", required: false },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id}>
                    <label htmlFor={`booking-${id}`} className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                      {label} {required && <span className="text-red-400">*</span>}
                    </label>
                    <input
                      id={`booking-${id}`}
                      type={type}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => { setForm(p => ({ ...p, [id]: e.target.value })); if (errors[id]) setErrors(p => ({ ...p, [id]: "" })); }}
                      placeholder={placeholder}
                      className={cn("w-full bg-white/[0.06] border rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all",
                        errors[id] ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:border-aurora/50 focus:ring-aurora/20"
                      )}
                      aria-required={required}
                    />
                    {errors[id] && <p className="text-xs text-red-400 mt-1" role="alert">{errors[id]}</p>}
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="booking-date" className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                      Preferred Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => { setForm(p => ({ ...p, date: e.target.value })); if (errors.date) setErrors(p => ({ ...p, date: "" })); }}
                      className={cn("w-full bg-white/[0.06] border rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 transition-all",
                        errors.date ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:border-aurora/50 focus:ring-aurora/20"
                      )}
                      aria-required="true"
                    />
                    {errors.date && <p className="text-xs text-red-400 mt-1" role="alert">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="booking-guests" className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">Guests</label>
                    <select
                      id="booking-guests"
                      value={form.guests}
                      onChange={(e) => setForm(p => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-white/[0.06] border border-white/10 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/20 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none transition-all"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n} className="bg-ice-black">{n} guest{n > 1 ? "s" : ""}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-plotref" className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                    Plot Reference <span className="text-white/20 font-normal normal-case">(optional — if you own a plot)</span>
                  </label>
                  <input
                    id="booking-plotref"
                    type="text"
                    value={form.plotRef}
                    onChange={(e) => setForm(p => ({ ...p, plotRef: e.target.value }))}
                    placeholder="e.g. ICE-THI-5SQ-00842"
                    className="w-full bg-white/[0.06] border border-white/10 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 font-mono focus:outline-none transition-all"
                  />
                  <p className="text-[11px] text-white/25 mt-1">Plot owners receive a 10% discount — enter your reference to redeem.</p>
                </div>

                <div>
                  <label htmlFor="booking-special" className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                    Special Requirements <span className="text-white/20 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="booking-special"
                    rows={2}
                    value={form.specialRequirements}
                    onChange={(e) => setForm(p => ({ ...p, specialRequirements: e.target.value }))}
                    placeholder="Accessibility needs, dietary requirements, etc."
                    className="w-full bg-white/[0.06] border border-white/10 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none resize-none transition-all"
                  />
                </div>
              </motion.div>
            )}

            {step === "confirm" && (
              <motion.div key="confirm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 space-y-5">
                <div className="text-center mb-2">
                  <div className="text-4xl mb-3" aria-hidden="true">🧭</div>
                  <h3 className="font-display text-xl font-bold text-white">Confirm Your Booking</h3>
                  <p className="text-sm text-white/45 mt-1">Please review before confirming.</p>
                </div>
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl divide-y divide-white/[0.06]">
                  {[
                    ["Tour", tour.name],
                    ["Reserve", reserve.name],
                    ["Date", new Date(form.date).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })],
                    ["Guests", `${form.guests} guest${+form.guests > 1 ? "s" : ""}`],
                    ["Name", form.name],
                    ["Email", form.email],
                    form.plotRef ? ["Plot Ref (10% discount)", form.plotRef] : null,
                    ["Total", `€${(tour.price * +form.guests * (form.plotRef ? 0.9 : 1)).toFixed(0)}`],
                  ].filter(Boolean).map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between px-4 py-2.5 text-sm">
                      <span className="text-white/40">{k}</span>
                      <span className={cn("font-semibold", k === "Total" ? "text-ice-gold-light font-display text-base" : "text-white/80")}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-aurora-green/[0.07] border border-aurora-green/20 rounded-xl p-3 text-xs text-aurora-green/80 flex items-start gap-2">
                  <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Full refund if cancelled more than 48 hours before the tour date.
                </div>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-aurora-green/20 border border-aurora-green/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-aurora-green" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Booking Requested!</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  We've received your booking request for the <strong className="text-white/70">{tour.name}</strong>. Our team in Reykjavík will confirm your date and send payment instructions within 24 hours.
                </p>
                <p className="text-xs font-mono text-aurora/60 bg-aurora/[0.07] border border-aurora/20 px-4 py-2 rounded-lg inline-block mb-6">
                  {/* TODO Part 6: real confirmation code from API */}
                  REQ-{Date.now().toString().slice(-8)}
                </p>
                <p className="text-xs text-white/30">Check your inbox at <strong className="text-white/50">{form.email}</strong></p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer actions */}
        {step !== "success" && (
          <div className="flex gap-3 px-6 py-4 border-t border-white/[0.07] flex-shrink-0">
            {step === "confirm" && (
              <button onClick={() => setStep("form")} className="px-5 py-3 bg-white/[0.06] border border-white/10 text-white/60 hover:text-white rounded-xl text-sm font-semibold transition-all">
                ← Back
              </button>
            )}
            <button
              onClick={step === "form" ? handleSubmit : handleConfirm}
              className="flex-1 btn-gold py-3.5 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              aria-label={step === "form" ? "Review booking" : "Confirm booking request"}
            >
              {step === "form" ? (
                <><ChevronRight className="w-4 h-4" /> Review Booking</>
              ) : (
                <><Send className="w-4 h-4" /> Confirm Request</>
              )}
            </button>
          </div>
        )}
        {step === "success" && (
          <div className="px-6 pb-6 flex-shrink-0">
            <button onClick={onClose} className="w-full btn-gold py-3.5 text-sm font-bold rounded-xl">
              Done
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Tour card ────────────────────────────────────────────────────────────────
function TourCard({ tour, index }: { tour: GuidedTour; index: number }) {
  const [showBooking, setShowBooking] = useState(false);
  const reserve = RESERVES.find((r) => r.slug === tour.reserve);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.16] hover:-translate-y-1.5 transition-all duration-300"
        aria-label={`${tour.name} guided tour`}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" aria-hidden="true" />
          {/* Difficulty badge */}
          <div className="absolute bottom-3 left-3">
            <span className={cn("text-xs font-bold px-2.5 py-1 rounded-lg border", DIFFICULTY_STYLES[tour.difficulty])}>
              {tour.difficulty}
            </span>
          </div>
          {/* Reserve tag */}
          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold bg-black/60 backdrop-blur text-white/70 border border-white/10 px-2.5 py-1 rounded-lg">
              {reserve?.name.replace(" Reserve", "").replace(" Estate", "")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display text-xl font-bold text-white leading-tight mb-2">{tour.name}</h3>
          <p className="text-sm text-white/50 leading-relaxed mb-5 flex-1">{tour.description}</p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-3 mb-5 text-xs text-white/45">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-aurora/60" />{tour.duration}</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-aurora/60" />{tour.groupSize}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-aurora-green/60" />{reserve?.name}</span>
          </div>

          {/* Includes */}
          <ul className="space-y-1.5 mb-5">
            {[
              "Expert local guide",
              "Reserve conservation briefing",
              "All safety equipment",
              "Plot owner visit included",
              ...(tour.difficulty !== "Easy" ? ["Transport from nearest village"] : []),
            ].slice(0, 4).map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-white/55">
                <Check className="w-3.5 h-3.5 text-aurora-green flex-shrink-0" aria-hidden="true" />{item}
              </li>
            ))}
          </ul>

          {/* Price + book */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <div>
              <p className="font-display text-2xl font-bold text-white">€{tour.price}</p>
              <p className="text-xs text-white/35 mt-0.5">per person · all inclusive</p>
            </div>
            <button
              onClick={() => setShowBooking(true)}
              className="flex items-center gap-1.5 btn-gold px-5 py-3 text-sm font-bold rounded-xl"
              aria-label={`Book ${tour.name}`}
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Book Tour
            </button>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {showBooking && <BookingForm tour={tour} onClose={() => setShowBooking(false)} />}
      </AnimatePresence>
    </>
  );
}

// ─── Guided Tours Page ────────────────────────────────────────────────────────
export default function GuidedToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-14 overflow-hidden" aria-labelledby="tours-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04091a] to-ice-black" aria-hidden="true" />
        <div className="aurora-orb aurora-orb-1 opacity-15 top-0 left-1/3" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="label-eyebrow mb-4">Visit In Person</p>
          <h1 id="tours-heading" className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold text-white leading-tight mb-5">
            Guided <span className="text-gradient-aurora">Reserve Tours</span>
          </h1>
          <p className="text-[1.05rem] text-white/50 leading-relaxed max-w-2xl mx-auto mb-6">
            Visit your reserve in person with one of our expert local guides. Walk the land, meet the wildlife, and attend a conservation briefing from our team on the ground.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-white/40">
            {[
              { icon: <Compass className="w-4 h-4" />, text: "Expert local guides" },
              { icon: <Shield className="w-4 h-4" />, text: "All safety equipment included" },
              { icon: <Star className="w-4 h-4" />, text: "Plot owners get 10% off" },
            ].map(({ icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <span className="text-aurora/60">{icon}</span>{text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plot owner discount banner */}
      <div className="bg-ice-gold/[0.07] border-y border-ice-gold/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-2xl flex-shrink-0" aria-hidden="true">👑</span>
          <p className="text-sm text-ice-gold-light/80">
            <strong className="text-ice-gold-light">Plot owner discount:</strong> Enter your plot reference (e.g. ICE-THI-5SQ-00842) when booking to receive 10% off any tour.{" "}
            <Link href="/welcome" className="underline hover:text-ice-gold-light transition-colors">Find yours in your dashboard →</Link>
          </p>
        </div>
      </div>

      {/* Tour cards */}
      <main id="main-content" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" role="list" aria-label="Available guided tours">
            {GUIDED_TOURS.map((tour, i) => (
              <div key={tour.id} role="listitem">
                <TourCard tour={tour} index={i} />
              </div>
            ))}
          </div>

          {/* Custom tours CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 bg-gradient-to-br from-aurora-violet/10 to-transparent border border-aurora-violet/20 rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-4" aria-hidden="true">🗺</div>
            <h2 className="font-display text-2xl font-bold text-white mb-3">Need a Custom Expedition?</h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              Planning a larger group, a multi-day expedition, or a bespoke corporate sustainability trip? Our team can arrange custom itineraries combining all three reserves, overnight stays, and exclusive conservation experiences.
            </p>
            <a
              href="mailto:tours@icelandictitles.com?subject=Custom%20Tour%20Enquiry"
              className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 text-sm rounded-xl"
              aria-label="Contact us about a custom tour"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              Enquire About Custom Tours
            </a>
            <p className="text-xs text-white/25 mt-3">We respond within 24 hours · Monday–Friday</p>
          </motion.div>

          {/* Adopt + buy link */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/adopt-a-horse" className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all">
              <div className="text-3xl mb-3" aria-hidden="true">🐴</div>
              <p className="font-display text-base font-bold text-white mb-1">Adopt an Icelandic Horse</p>
              <p className="text-sm text-white/45">Combine your tour with an in-person horse meet at our partner farms. From €29/year.</p>
              <span className="text-xs text-aurora mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/buy-a-plot" className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all">
              <div className="text-3xl mb-3" aria-hidden="true">🏔</div>
              <p className="font-display text-base font-bold text-white mb-1">Don't Have a Plot Yet?</p>
              <p className="text-sm text-white/45">Own a piece of the reserve you're visiting before you go. From €49 with instant delivery.</p>
              <span className="text-xs text-aurora mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">Buy a plot <ChevronRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
