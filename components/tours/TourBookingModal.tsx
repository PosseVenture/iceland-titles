"use client";
import { useState, useEffect, useRef, useId } from "react";
import { motion, AnimatePresence }             from "framer-motion";
import {
  X, Calendar, Users, CheckCircle2,
  ArrowRight, ChevronDown,
} from "lucide-react";
import { cn, formatPrice, formatDate }         from "@/lib/utils";
import { useCartStore }                        from "@/lib/store";
import type { GuidedTour }                     from "@/types";

interface Props {
  tour:    GuidedTour;
  onClose: () => void;
}

export function TourBookingModal({ tour, onClose }: Props) {
  const uid              = useId();
  const { currency }     = useCartStore();
  const closeRef         = useRef<HTMLButtonElement>(null);

  const [selectedDate, setSelectedDate] = useState("");
  const [partySize,    setPartySize]    = useState("2");
  const [firstName,    setFirstName]    = useState("");
  const [lastName,     setLastName]     = useState("");
  const [email,        setEmail]        = useState("");
  const [plotRef,      setPlotRef]      = useState("");
  const [message,      setMessage]      = useState("");
  const [errors,       setErrors]       = useState<Record<string, string>>({});
  const [step,         setStep]         = useState<"form" | "submitting" | "done">("form");

  const maxGuests = parseInt(tour.groupSize.replace(/\D/g, ""), 10) || 10;
  const pricePerPerson = tour.price[currency];
  const totalPrice     = pricePerPerson * parseInt(partySize, 10);
  const hasDiscount    = plotRef.trim().length > 0;
  const finalPrice     = hasDiscount ? Math.round(totalPrice * 0.9) : totalPrice;

  // Focus close button on open
  useEffect(() => {
    setTimeout(() => closeRef.current?.focus(), 60);
  }, []);

  // ESC close + scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function validate() {
    const e: Record<string, string> = {};
    if (!selectedDate)             e.date      = "Please select a date.";
    if (!firstName.trim())         e.firstName = "First name is required.";
    if (!lastName.trim())          e.lastName  = "Last name is required.";
    if (!email.includes("@"))      e.email     = "Please enter a valid email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStep("submitting");
    // TODO: POST to /api/tour-booking → Resend email
    setTimeout(() => setStep("done"), 1600);
  }

  const inputCls = (field: string) => cn(
    "w-full bg-white/[0.05] border rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/22",
    "focus:outline-none focus:ring-1 transition-all duration-150",
    errors[field]
      ? "border-red-500/50 focus:ring-red-400/30"
      : "border-white/10 focus:border-glacier/50 focus:ring-glacier/20"
  );

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[250] bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.97,  y: 10 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="fixed inset-0 z-[251] flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full max-w-lg glass-card overflow-hidden flex flex-col max-h-[90vh]"
          role="dialog"
          aria-modal="true"
          aria-label={`Book ${tour.name}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between px-6 py-5 border-b border-white/[0.07] flex-shrink-0">
            <div>
              <p className="eyebrow mb-1">Book a tour</p>
              <h2 className="font-display text-xl font-semibold text-white">{tour.name}</h2>
              <p className="font-body text-sm text-white/45 mt-0.5">
                {tour.duration} · {tour.groupSize} · {formatPrice(pricePerPerson, currency)}/person
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close booking form"
              className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier flex-shrink-0 ml-4"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto flex-1">
            <AnimatePresence mode="wait">

              {/* ── Form ── */}
              {step === "form" && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit} noValidate
                  className="px-6 py-5 space-y-5"
                >
                  {/* Date picker */}
                  <div>
                    <p className="font-body text-xs text-white/45 mb-2">
                      Select a date <span className="text-spirit/60">*</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2" role="group" aria-label="Available dates">
                      {tour.dates.map((d) => (
                        <button
                          key={d} type="button"
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
                          {formatDate(d)}
                        </button>
                      ))}
                    </div>
                    {errors.date && <p role="alert" className="font-body text-xs text-red-400 mt-1.5">{errors.date}</p>}
                  </div>

                  {/* Party size */}
                  <div>
                    <label htmlFor={`${uid}-party`} className="block font-body text-xs text-white/45 mb-1.5">
                      Number of guests <span className="text-spirit/60">*</span>
                    </label>
                    <div className="relative w-36">
                      <select
                        id={`${uid}-party`}
                        value={partySize}
                        onChange={(e) => setPartySize(e.target.value)}
                        className="w-full appearance-none bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 pr-9 font-body text-sm text-white focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20"
                      >
                        {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n} className="bg-ice-deep">
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor={`${uid}-fn`} className="block font-body text-xs text-white/45 mb-1.5">
                        First name <span className="text-spirit/60">*</span>
                      </label>
                      <input id={`${uid}-fn`} type="text" value={firstName}
                        onChange={(e) => { setFirstName(e.target.value); setErrors((p) => ({ ...p, firstName: "" })); }}
                        placeholder="Emma" autoComplete="given-name"
                        aria-required="true" aria-invalid={!!errors.firstName}
                        className={inputCls("firstName")}
                      />
                      {errors.firstName && <p role="alert" className="font-body text-xs text-red-400 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor={`${uid}-ln`} className="block font-body text-xs text-white/45 mb-1.5">
                        Last name <span className="text-spirit/60">*</span>
                      </label>
                      <input id={`${uid}-ln`} type="text" value={lastName}
                        onChange={(e) => { setLastName(e.target.value); setErrors((p) => ({ ...p, lastName: "" })); }}
                        placeholder="Jónsdóttir" autoComplete="family-name"
                        aria-required="true" aria-invalid={!!errors.lastName}
                        className={inputCls("lastName")}
                      />
                      {errors.lastName && <p role="alert" className="font-body text-xs text-red-400 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor={`${uid}-email`} className="block font-body text-xs text-white/45 mb-1.5">
                      Email address <span className="text-spirit/60">*</span>
                    </label>
                    <input id={`${uid}-email`} type="email" value={email}
                      onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
                      placeholder="emma@example.com" autoComplete="email"
                      aria-required="true" aria-invalid={!!errors.email}
                      className={inputCls("email")}
                    />
                    {errors.email && <p role="alert" className="font-body text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Plot reference */}
                  <div>
                    <label htmlFor={`${uid}-plot`} className="block font-body text-xs text-white/45 mb-1.5">
                      Plot reference <span className="text-white/25">(optional — 10% discount)</span>
                    </label>
                    <input id={`${uid}-plot`} type="text" value={plotRef}
                      onChange={(e) => setPlotRef(e.target.value)}
                      placeholder="e.g. ICE-SNÆ-5SQ-04271"
                      className={inputCls("plot")}
                    />
                    {hasDiscount && (
                      <p className="font-body text-xs text-spirit mt-1">
                        ✦ 10% plot-owner discount applied
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor={`${uid}-msg`} className="block font-body text-xs text-white/45 mb-1.5">
                      Special requirements <span className="text-white/25">(optional)</span>
                    </label>
                    <textarea id={`${uid}-msg`} value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3} maxLength={300}
                      placeholder="Dietary needs, accessibility requirements, questions for your guide…"
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/22 resize-none focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20 transition-all"
                    />
                  </div>

                  {/* Price summary */}
                  <div className="flex items-center justify-between py-3 border-t border-white/[0.07]">
                    <div className="font-body text-sm text-white/45">
                      {partySize} × {formatPrice(pricePerPerson, currency)}
                      {hasDiscount && <span className="ml-2 text-spirit/70 text-xs">−10%</span>}
                    </div>
                    <span className="font-display text-xl font-semibold text-glacier">
                      {formatPrice(finalPrice, currency)}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      "w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl",
                      "font-display font-semibold text-base",
                      "bg-glacier text-ice-black hover:bg-glacier-light hover:shadow-glacier",
                      "transition-all duration-200 btn-spirit",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
                    )}
                  >
                    Request Booking
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <p className="text-center font-body text-xs text-white/25">
                    No payment taken yet — our team will confirm and invoice you.
                  </p>
                </motion.form>
              )}

              {/* ── Submitting ── */}
              {step === "submitting" && (
                <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-glacier/30 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 border-2 border-glacier border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                  </div>
                  <p className="font-display text-lg text-white mb-2">Sending request…</p>
                  <p className="font-body text-sm text-white/40">Contacting our Snæfellsnes team</p>
                </motion.div>
              )}

              {/* ── Done ── */}
              {step === "done" && (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 px-8">
                  <div className="w-16 h-16 rounded-full bg-spirit/12 border border-spirit/30 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-spirit" aria-hidden="true" />
                  </div>
                  <p className="font-display text-2xl font-light text-white mb-2">Booking request sent!</p>
                  <p className="font-body text-sm text-white/50 mb-2 max-w-xs leading-relaxed">
                    Thank you, {firstName}. Our team will confirm your{" "}
                    {selectedDate ? formatDate(selectedDate) : ""} booking within 24 hours.
                  </p>
                  <p className="font-body text-xs text-white/30 mb-8">
                    Confirmation sent to {email}
                  </p>
                  <button
                    type="button" onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-glacier text-ice-black font-display font-semibold text-sm hover:bg-glacier-light transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}
