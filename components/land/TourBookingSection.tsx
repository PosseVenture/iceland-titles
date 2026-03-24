"use client";
// ─────────────────────────────────────────────────────────────────────────────
// TourBookingSection — /the-land/snaefellsnes
// Three tour cards (Glacier Soul Walk, Northern Lights Vigil, Elf Rock Expedition)
// + inline booking form with date picker, party size, name, email, notes
// Full WCAG 2.2 AA: ARIA, keyboard nav, error messages, aria-live
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useId }         from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link                        from "next/link";
import {
  Calendar, Users, Clock, Mountain,
  ChevronDown, Check, ArrowRight, X,
} from "lucide-react";
import { cn, formatPrice, formatDate } from "@/lib/utils";
import { useCartStore }                from "@/lib/store";
import type { GuidedTour }             from "@/types";

// ─── Difficulty badge ─────────────────────────────────────────────────────────
function DifficultyBadge({ level }: { level: GuidedTour["difficulty"] }) {
  const styles: Record<GuidedTour["difficulty"], string> = {
    Easy:        "bg-spirit/12  text-spirit  border-spirit/25",
    Moderate:    "bg-aurora/10  text-aurora  border-aurora/25",
    Challenging: "bg-red-500/10 text-red-400 border-red-500/25",
  };
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-full",
      "font-body text-[11px] font-semibold border",
      styles[level]
    )}>
      {level}
    </span>
  );
}

// ─── Booking form modal ───────────────────────────────────────────────────────
type BookingStep = "form" | "confirming" | "confirmed";

interface BookingFormState {
  date:        string;
  partySize:   string;
  firstName:   string;
  lastName:    string;
  email:       string;
  plotRef:     string;
  notes:       string;
}

const EMPTY_FORM: BookingFormState = {
  date: "", partySize: "1", firstName: "", lastName: "", email: "", plotRef: "", notes: "",
};

function BookingModal({
  tour,
  onClose,
}: {
  tour:    GuidedTour;
  onClose: () => void;
}) {
  const uid                     = useId();
  const { currency }            = useCartStore();
  const [step, setStep]         = useState<BookingStep>("form");
  const [form, setForm]         = useState<BookingFormState>(EMPTY_FORM);
  const [errors, setErrors]     = useState<Partial<BookingFormState>>({});
  const [selectedDate, setSelectedDate] = useState<string>("");

  // Validation
  function validate(): boolean {
    const e: Partial<BookingFormState> = {};
    if (!selectedDate)         e.date      = "Please select a tour date.";
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim())  e.lastName  = "Last name is required.";
    if (!form.email.includes("@")) e.email  = "A valid email address is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStep("confirming");
    // Simulate async booking confirmation
    setTimeout(() => setStep("confirmed"), 1800);
  }

  const pricePerPerson = tour.price[currency];
  const totalPrice     = pricePerPerson * Number(form.partySize || 1);

  // Field helper
  function field(
    id:          keyof BookingFormState,
    label:       string,
    type         = "text",
    placeholder  = "",
    required     = true,
    autocomplete = "",
  ) {
    return (
      <div>
        <label
          htmlFor={`${uid}-${id}`}
          className="block font-body text-xs text-white/45 mb-1.5"
        >
          {label}{required && <span className="text-spirit/60 ml-1">*</span>}
        </label>
        <input
          id={`${uid}-${id}`}
          type={type}
          value={form[id]}
          onChange={(e) => { setForm((p) => ({ ...p, [id]: e.target.value })); setErrors((p) => ({ ...p, [id]: "" })); }}
          placeholder={placeholder}
          autoComplete={autocomplete}
          aria-required={required}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `${uid}-${id}-err` : undefined}
          className={cn(
            "w-full bg-white/[0.05] border rounded-xl px-4 py-2.5",
            "font-body text-sm text-white placeholder-white/22",
            "focus:outline-none focus:ring-1 transition-all",
            errors[id]
              ? "border-red-500/50 focus:ring-red-400/30"
              : "border-white/10 focus:border-glacier/50 focus:ring-glacier/20"
          )}
        />
        {errors[id] && (
          <p id={`${uid}-${id}-err`} role="alert" className="font-body text-xs text-red-400 mt-1">
            {errors[id]}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-ice-black/85 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Book tour: ${tour.name}`}
    >
      <motion.div
        initial={{ scale: 0.95, y: 24, opacity: 0 }}
        animate={{ scale: 1,    y: 0,  opacity: 1 }}
        exit={{    scale: 0.97, y: 8,  opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 280 }}
        className="relative w-full max-w-lg glass-card overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/[0.07] flex-shrink-0">
          <div>
            <p className="eyebrow mb-1">Book a tour</p>
            <h2 className="font-display text-xl font-semibold text-white">{tour.name}</h2>
            <p className="font-body text-sm text-white/45 mt-0.5">
              {tour.duration} · {tour.groupSize} · {formatPrice(pricePerPerson, currency)} per person
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all flex-shrink-0 ml-4"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">

            {/* ── Step: Form ──────────────────────────────────── */}
            {step === "form" && (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0  }}
                exit={{    opacity: 0, x: -16 }}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Tour booking form"
                className="space-y-5"
              >
                {/* Date picker */}
                <div>
                  <p className="font-body text-xs text-white/45 mb-2">
                    Select a tour date <span className="text-spirit/60">*</span>
                  </p>
                  <div
                    className="grid grid-cols-2 gap-2"
                    role="group"
                    aria-label="Available tour dates"
                  >
                    {tour.dates.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => { setSelectedDate(d); setErrors((p) => ({ ...p, date: "" })); }}
                        aria-pressed={selectedDate === d}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left",
                          "font-body text-sm transition-all duration-150",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
                          selectedDate === d
                            ? "bg-glacier/12 border-glacier/35 text-glacier"
                            : "bg-white/[0.04] border-white/10 text-white/60 hover:border-white/25"
                        )}
                      >
                        <Calendar className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                        <span>{formatDate(d)}</span>
                      </button>
                    ))}
                  </div>
                  {errors.date && (
                    <p role="alert" className="font-body text-xs text-red-400 mt-1.5">{errors.date}</p>
                  )}
                </div>

                {/* Party size */}
                <div>
                  <label htmlFor={`${uid}-partySize`} className="block font-body text-xs text-white/45 mb-1.5">
                    Number of guests <span className="text-spirit/60">*</span>
                  </label>
                  <div className="relative w-32">
                    <select
                      id={`${uid}-partySize`}
                      value={form.partySize}
                      onChange={(e) => setForm((p) => ({ ...p, partySize: e.target.value }))}
                      className="w-full appearance-none bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 pr-8 font-body text-sm text-white focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20"
                      aria-label="Number of guests"
                    >
                      {Array.from({ length: Number(tour.groupSize.split(" ")[1]) }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-ice-deep">{n} {n === 1 ? "guest" : "guests"}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  {field("firstName", "First name", "text", "e.g. Emma",  true, "given-name")}
                  {field("lastName",  "Last name",  "text", "e.g. Jónsdóttir", true, "family-name")}
                </div>

                {/* Email */}
                {field("email", "Email address", "email", "emma@example.com", true, "email")}

                {/* Plot reference (optional — 10% discount) */}
                {field("plotRef", "Souvenir plot reference (optional — 10% discount)", "text", "e.g. ICE-SNÆ-5SQ-00842", false)}

                {/* Notes */}
                <div>
                  <label htmlFor={`${uid}-notes`} className="block font-body text-xs text-white/45 mb-1.5">
                    Special requirements (optional)
                  </label>
                  <textarea
                    id={`${uid}-notes`}
                    value={form.notes}
                    onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                    rows={3}
                    placeholder="Dietary requirements, accessibility needs, questions for your guide…"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/22 resize-none focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20 transition-all"
                    aria-label="Special requirements (optional)"
                  />
                </div>

                {/* Price summary */}
                <div className="flex items-center justify-between py-3 border-t border-white/[0.07]">
                  <span className="font-body text-sm text-white/45">
                    {form.partySize} × {formatPrice(pricePerPerson, currency)}
                    {form.plotRef.trim() && (
                      <span className="ml-2 text-spirit/70 text-xs">(10% plot discount applied)</span>
                    )}
                  </span>
                  <span className="font-display text-xl font-semibold text-glacier">
                    {formatPrice(form.plotRef.trim() ? totalPrice * 0.9 : totalPrice, currency)}
                  </span>
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl",
                    "font-display font-semibold text-base",
                    "bg-glacier text-ice-black",
                    "hover:bg-glacier-light hover:shadow-glacier",
                    "transition-all duration-200 btn-spirit"
                  )}
                >
                  Request Booking
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <p className="text-center font-body text-xs text-white/25">
                  No payment taken yet — our team will confirm availability and send an invoice.
                </p>
              </motion.form>
            )}

            {/* ── Step: Confirming ─────────────────────────────── */}
            {step === "confirming" && (
              <motion.div
                key="confirming"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-14 h-14 rounded-full border-2 border-glacier/30 flex items-center justify-center mb-5">
                  <div className="w-7 h-7 border-2 border-glacier border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                </div>
                <p className="font-display text-lg text-white mb-2">Sending your request…</p>
                <p className="font-body text-sm text-white/40">
                  Contacting our Snæfellsnes team
                </p>
              </motion.div>
            )}

            {/* ── Step: Confirmed ──────────────────────────────── */}
            {step === "confirmed" && (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-spirit/15 border border-spirit/30 flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-spirit" aria-hidden="true" />
                </div>
                <p className="font-display text-2xl font-light text-white mb-2">
                  Booking request sent!
                </p>
                <p className="font-body text-sm text-white/50 mb-2 max-w-xs leading-relaxed">
                  Thank you, {form.firstName}. Our team in Snæfellsnes will confirm
                  your {formatDate(selectedDate)} booking within 24 hours.
                </p>
                <p className="font-body text-xs text-white/30 mb-8">
                  Confirmation will be sent to {form.email}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-glacier text-ice-black font-display font-semibold text-sm hover:bg-glacier-light transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Single tour card ─────────────────────────────────────────────────────────
function TourCard({
  tour,
  index,
  onBook,
}: {
  tour:   GuidedTour;
  index:  number;
  onBook: (tour: GuidedTour) => void;
}) {
  const { currency } = useCartStore();
  const [expanded, setExpanded] = useState(false);

  const ICONS: Record<string, string> = {
    "glacier-soul-walk":    "🗻",
    "northern-lights-vigil":"🌌",
    "elf-rock-expedition":  "🧝",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${tour.name} guided tour — ${formatPrice(tour.price[currency], currency)} per person`}
      className="glass-card flex flex-col hover:border-glacier/18 transition-all duration-300"
    >
      {/* Tour header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="text-4xl leading-none" aria-hidden="true">
            {ICONS[tour.id] ?? "🧭"}
          </div>
          <DifficultyBadge level={tour.difficulty} />
        </div>

        <h3 className="font-display text-2xl font-semibold text-white mb-1">
          {tour.name}
        </h3>
        <p className="font-body text-sm text-white/50 leading-relaxed mb-4">
          {tour.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-4 text-xs font-body text-white/40 mb-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            {tour.groupSize}
          </div>
          <div className="flex items-center gap-1.5">
            <Mountain className="w-3.5 h-3.5" aria-hidden="true" />
            {tour.difficulty}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-white/[0.06]" />

      {/* What's included — collapsible */}
      <div className="px-6 py-4">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className={cn(
            "flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors w-full text-left",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-glacier rounded"
          )}
        >
          <ChevronDown
            className={cn("w-3.5 h-3.5 transition-transform duration-200", expanded && "rotate-180")}
            aria-hidden="true"
          />
          What's included
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{    height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden mt-3 space-y-2"
            >
              {tour.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-spirit mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm text-white/55">{item}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Price + CTA */}
      <div className="mt-auto p-6 pt-0 flex items-center justify-between gap-4">
        <div>
          <span className="font-display text-3xl font-light text-glacier">
            {formatPrice(tour.price[currency], currency)}
          </span>
          <span className="font-body text-xs text-white/35 ml-1.5">/ person</span>
          <p className="font-body text-[11px] text-spirit/60 mt-0.5">
            Plot owners get 10% off
          </p>
        </div>

        <button
          type="button"
          onClick={() => onBook(tour)}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl",
            "bg-glacier/10 text-glacier border border-glacier/25",
            "font-display font-semibold text-sm",
            "hover:bg-glacier/18 hover:border-glacier/40",
            "transition-all duration-200 btn-spirit flex-shrink-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
          )}
        >
          Book
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* Available dates strip */}
      <div className="px-6 pb-5">
        <p className="font-body text-[10px] text-white/25 uppercase tracking-wider mb-2">
          Next available dates
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tour.dates.slice(0, 3).map((d) => (
            <span
              key={d}
              className="font-body text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-lg"
            >
              {formatDate(d)}
            </span>
          ))}
          {tour.dates.length > 3 && (
            <span className="font-body text-[11px] text-white/30 px-1.5 py-1">
              +{tour.dates.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function TourBookingSection({ tours }: { tours: GuidedTour[] }) {
  const [bookingTour, setBookingTour] = useState<GuidedTour | null>(null);

  // Lock scroll when modal open
  return (
    <>
      <section
        aria-label="Guided tours of Snæfellsnes Reserve"
        className="relative bg-ice-deep section-pad"
      >
        <div
          className="aurora-orb w-[500px] h-[400px] bg-spirit/5 bottom-0 right-0"
          aria-hidden="true"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow mb-3">Guided experiences</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-light text-white mb-4">
              Walk the{" "}
              <em className="not-italic text-gradient-glacier">sacred landscape</em>
              {" "}with a guide
            </h2>
            <p className="font-body text-base text-white/45 max-w-2xl leading-relaxed">
              Our local guides — folklorists, conservationists and storytellers —
              will bring the mythology of Bárður Snæfellsás and the huldufólk to life
              among the ancient lava fields. Plot owners receive a 10% discount on all tours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour, i) => (
              <TourCard
                key={tour.id}
                tour={tour}
                index={i}
                onBook={setBookingTour}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 text-center"
          >
            <Link
              href="/guided-tours"
              className="inline-flex items-center gap-2 font-body text-sm text-white/40 hover:text-glacier transition-colors underline underline-offset-4"
            >
              View all tours and availability
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Booking modal */}
      <AnimatePresence>
        {bookingTour && (
          <BookingModal
            tour={bookingTour}
            onClose={() => setBookingTour(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
