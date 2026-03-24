"use client";
// ─────────────────────────────────────────────────────────────────────────────
// /contact — Contact form
// Topics: Order help · Certificate reissue · Tour booking · General enquiry
// WCAG 2.2 AA: full label/input association, aria-invalid, role="alert"
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useId }         from "react";
import Link                        from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, CheckCircle2,
  Home, ChevronRight,
} from "lucide-react";
import { cn }                      from "@/lib/utils";
import { SITE }                    from "@/lib/data";

type Topic = "order" | "certificate" | "tour" | "conservation" | "press" | "other";

const TOPICS: Array<{ value: Topic; label: string; icon: string }> = [
  { value: "order",        label: "Order / delivery query",  icon: "📦" },
  { value: "certificate",  label: "Certificate reissue",      icon: "📜" },
  { value: "tour",         label: "Guided tour booking",      icon: "🧭" },
  { value: "conservation", label: "Conservation / donations", icon: "🌿" },
  { value: "press",        label: "Press / media",            icon: "📰" },
  { value: "other",        label: "Something else",           icon: "💬" },
];

interface FormState {
  name:      string;
  email:     string;
  topic:     Topic | "";
  orderRef:  string;
  message:   string;
}

const EMPTY: FormState = { name: "", email: "", topic: "", orderRef: "", message: "" };

export default function ContactPage() {
  const uid                       = useId();
  const [form,    setForm]        = useState<FormState>(EMPTY);
  const [errors,  setErrors]      = useState<Partial<FormState>>({});
  const [status,  setStatus]      = useState<"idle" | "submitting" | "sent">("idle");

  function set(field: keyof FormState, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  }

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim())            e.name    = "Please enter your name.";
    if (!form.email.includes("@"))    e.email   = "Please enter a valid email address.";
    if (!form.topic) e.topic = "";
    if (form.message.trim().length < 10) e.message = "Please write at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // TODO: Wire to real API — POST /api/contact → Resend email
    // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    await new Promise((r) => setTimeout(r, 1400)); // simulated delay

    setStatus("sent");
    setForm(EMPTY);
  }

  return (
    <div className="min-h-screen bg-ice-black">

      {/* Hero */}
      <section aria-label="Contact page header" className="relative pt-[72px] overflow-hidden bg-ice-navy">
        <div className="aurora-orb w-[500px] h-[400px] bg-glacier/6 -top-10 right-0" aria-hidden="true" style={{ animationDelay: "0s" }} />
        <div className="grain-overlay" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-ice-black to-transparent pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 font-body text-xs text-white/35">
              <li><Link href="/" className="flex items-center gap-1 hover:text-white/60 transition-colors"><Home className="w-3 h-3" aria-hidden="true" />Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li aria-current="page" className="text-white/55">Contact</li>
            </ol>
          </nav>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-light text-white leading-[0.95] mb-4">
            Talk to our{" "}
            <em className="not-italic text-gradient-glacier">Iceland team</em>
          </h1>
          <p className="font-body text-base text-white/45 max-w-xl leading-relaxed">
            We're based in Reykjavík and usually reply within one working day.
            For urgent delivery queries, please include your order reference.
          </p>
        </div>
      </section>

      {/* Content */}
      <main id="contact-content" aria-label="Contact form and details" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

          {/* ── Form ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-spirit/12 border border-spirit/25 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-spirit" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-light text-white mb-2">
                    Message sent!
                  </h2>
                  <p className="font-body text-sm text-white/50 mb-6 leading-relaxed max-w-xs mx-auto">
                    We'll be in touch within one working day. Bárður watches over your enquiry.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="font-body text-sm text-glacier hover:underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="glass-card p-7 space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor={`${uid}-name`} className="block font-body text-xs text-white/45 mb-1.5">
                        Your name <span className="text-spirit/60">*</span>
                      </label>
                      <input
                        id={`${uid}-name`}
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Lady Emma Jónsdóttir"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                        className={cn(
                          "w-full bg-white/[0.05] border rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/22",
                          "focus:outline-none focus:ring-1 transition-all",
                          errors.name ? "border-red-500/50 focus:ring-red-400/30" : "border-white/10 focus:border-glacier/50 focus:ring-glacier/20"
                        )}
                      />
                      {errors.name && <p id={`${uid}-name-err`} role="alert" className="font-body text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor={`${uid}-email`} className="block font-body text-xs text-white/45 mb-1.5">
                        Email address <span className="text-spirit/60">*</span>
                      </label>
                      <input
                        id={`${uid}-email`}
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="emma@example.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? `${uid}-email-err` : undefined}
                        className={cn(
                          "w-full bg-white/[0.05] border rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/22",
                          "focus:outline-none focus:ring-1 transition-all",
                          errors.email ? "border-red-500/50 focus:ring-red-400/30" : "border-white/10 focus:border-glacier/50 focus:ring-glacier/20"
                        )}
                      />
                      {errors.email && <p id={`${uid}-email-err`} role="alert" className="font-body text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Topic */}
                  <div>
                    <p id={`${uid}-topic-label`} className="font-body text-xs text-white/45 mb-2">
                      Topic <span className="text-spirit/60">*</span>
                    </p>
                    <div
                      role="group"
                      aria-labelledby={`${uid}-topic-label`}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                    >
                      {TOPICS.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => set("topic", t.value)}
                          aria-pressed={form.topic === t.value}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left",
                            "font-body text-xs transition-all duration-150",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
                            form.topic === t.value
                              ? "bg-glacier/10 border-glacier/30 text-glacier"
                              : "bg-white/[0.04] border-white/10 text-white/55 hover:border-white/25"
                          )}
                        >
                          <span aria-hidden="true">{t.icon}</span>
                          {t.label}
                        </button>
                      ))}
                    </div>
                    {errors.topic && <p role="alert" className="font-body text-xs text-red-400 mt-1.5">{errors.topic}</p>}
                  </div>

                  {/* Order ref (conditional) */}
                  {(form.topic === "order" || form.topic === "certificate") && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{    height: 0, opacity: 0 }}
                    >
                      <label htmlFor={`${uid}-orderRef`} className="block font-body text-xs text-white/45 mb-1.5">
                        Order reference (optional)
                      </label>
                      <input
                        id={`${uid}-orderRef`}
                        type="text"
                        value={form.orderRef}
                        onChange={(e) => set("orderRef", e.target.value)}
                        placeholder="e.g. ICE-SNÆ-5SQ-04271"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 font-body text-sm text-white placeholder-white/22 focus:outline-none focus:border-glacier/50 focus:ring-1 focus:ring-glacier/20 transition-all"
                      />
                    </motion.div>
                  )}

                  {/* Message */}
                  <div>
                    <label htmlFor={`${uid}-message`} className="block font-body text-xs text-white/45 mb-1.5">
                      Message <span className="text-spirit/60">*</span>
                    </label>
                    <textarea
                      id={`${uid}-message`}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      rows={5}
                      placeholder="Tell us how we can help…"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? `${uid}-message-err` : undefined}
                      className={cn(
                        "w-full bg-white/[0.05] border rounded-xl px-4 py-3 font-body text-sm text-white placeholder-white/22 resize-none",
                        "focus:outline-none focus:ring-1 transition-all",
                        errors.message ? "border-red-500/50 focus:ring-red-400/30" : "border-white/10 focus:border-glacier/50 focus:ring-glacier/20"
                      )}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.message
                        ? <p id={`${uid}-message-err`} role="alert" className="font-body text-xs text-red-400">{errors.message}</p>
                        : <span />
                      }
                      <p className="font-body text-[10px] text-white/25 text-right">{form.message.length}/1000</p>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                    className={cn(
                      "w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl",
                      "font-display font-semibold text-base transition-all duration-200 btn-spirit",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier",
                      status === "submitting"
                        ? "bg-glacier/50 text-ice-black/50 cursor-not-allowed"
                        : "bg-glacier text-ice-black hover:bg-glacier-light hover:shadow-glacier"
                    )}
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Sidebar ──────────────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5"
            aria-label="Contact details"
          >
            <div className="glass-card p-6 space-y-4">
              <h2 className="font-display text-base font-semibold text-white">Contact details</h2>

              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-glacier/10 border border-glacier/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-glacier" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/35 leading-none mb-0.5">Email</p>
                  <p className="font-body text-sm text-white/70 group-hover:text-glacier transition-colors">{SITE.email}</p>
                </div>
              </a>

              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-glacier/10 border border-glacier/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-glacier" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/35 leading-none mb-0.5">Phone</p>
                  <p className="font-body text-sm text-white/70 group-hover:text-glacier transition-colors">{SITE.phone}</p>
                </div>
              </a>

              <address className="flex items-start gap-3 not-italic">
                <div className="w-9 h-9 rounded-lg bg-glacier/10 border border-glacier/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-glacier" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-xs text-white/35 leading-none mb-0.5">Office</p>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {SITE.address.street}<br />
                    {SITE.address.city} {SITE.address.postcode}<br />
                    {SITE.address.country}
                  </p>
                </div>
              </address>

              <div className="pt-2 border-t border-white/[0.07]">
                <p className="font-body text-xs text-white/30 leading-relaxed">
                  We typically reply within <strong className="text-white/50">one working day</strong> (Mon–Fri, Reykjavík time UTC+0/+1).
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div className="glass-card p-5 space-y-2">
              <p className="font-body text-xs text-white/35 uppercase tracking-wider mb-3">Quick help</p>
              {[
                { label: "Track my order",     href: "/faq#tracking"      },
                { label: "Change certificate name", href: "/faq#name-change" },
                { label: "Refund policy",       href: "/faq#refund"        },
                { label: "Visit my plot",       href: "/the-land/snaefellsnes" },
                { label: "FAQ — all questions", href: "/faq"               },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.05] font-body text-sm text-white/50 hover:text-glacier transition-all group"
                >
                  {label}
                  <span className="text-white/20 group-hover:text-glacier transition-colors" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  );
}
