import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {

      /* ─────────────────────────────────────────────────────────────
         COLOUR PALETTE
         Deep blues (night sky over Snæfellsnes) → glacier ice →
         aurora spectrum → volcanic gold
         ───────────────────────────────────────────────────────────── */
      colors: {
        // Backgrounds — darkest first
        "ice-black":    "#060D19",  // page background (dark mode)
        "ice-deep":     "#0A1628",  // cards, drawers
        "ice-navy":     "#0A2540",  // spec primary colour
        "ice-midnight": "#0D1F3C",  // hover states

        // Glacier ice — Snæfellsjökull crown
        "glacier":       "#A8D8EA",
        "glacier-light": "#C8ECF7",
        "glacier-dim":   "#5FA8C4",

        // Aurora spectrum
        "aurora":        "#00D4FF",  // spec primary accent
        "aurora-green":  "#39E8A0",
        "aurora-violet": "#7C3AED",
        "aurora-pink":   "#E040FB",

        // Volcanic rune-gold
        "rune-gold":     "#C8A96E",

        // Spirit glow
        "spirit":        "#39E8A0",

        // Ice whites
        "ice-white":   "#F8FAFC",  // spec ice white
        "ice-silver":  "#CBD5E1",
      },

      /* ─────────────────────────────────────────────────────────────
         TYPOGRAPHY
         Cormorant Garamond — old-world elegance for headings
         Crimson Text      — warm serif body copy
         ───────────────────────────────────────────────────────────── */
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-crimson)",   "Georgia", "serif"],
        mono:    ["var(--font-mono)",      "monospace"],
      },

      /* ─────────────────────────────────────────────────────────────
         ANIMATIONS
         ───────────────────────────────────────────────────────────── */
      keyframes: {
        // Drifting aurora orbs
        "aurora-drift": {
          "0%, 100%": { transform: "translateX(0%)  translateY(0%)  scale(1)"    },
          "33%":       { transform: "translateX(3%)  translateY(-2%) scale(1.05)" },
          "66%":       { transform: "translateX(-2%) translateY(3%)  scale(0.98)" },
        },
        // Pulsing spirit glow
        "spirit-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)"    },
          "50%":       { opacity: "1",   transform: "scale(1.08)" },
        },
        // Glowing rune text
        "rune-glow": {
          "0%, 100%": { "text-shadow": "0 0 8px rgba(200,169,110,0.4)" },
          "50%":       { "text-shadow": "0 0 24px rgba(200,169,110,0.9), 0 0 48px rgba(200,169,110,0.4)" },
        },
        // Shimmer sweep (buttons, cards)
        "shimmer": {
          "0%":   { "background-position": "-200% center" },
          "100%": { "background-position": " 200% center" },
        },
        // Gentle float (hero elements)
        "float-up": {
          "0%, 100%": { transform: "translateY(0px)"  },
          "50%":       { transform: "translateY(-12px)" },
        },
        // Star twinkle
        "twinkle": {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%":       { opacity: "1",   transform: "scale(1.2)" },
        },
        // Fade + slide up (Framer Motion also used, this for pure CSS)
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        // Slow spin (loader / glacier sigil)
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)"   },
          "100%": { transform: "rotate(360deg)" },
        },
        // Breathe (subtle scale on elements)
        "breathe": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)"    },
          "50%":       { opacity: "1",   transform: "scale(1.04)" },
        },
      },
      animation: {
        "aurora-drift":   "aurora-drift  18s ease-in-out infinite",
        "spirit-pulse":   "spirit-pulse  3s  ease-in-out infinite",
        "rune-glow":      "rune-glow     4s  ease-in-out infinite",
        "shimmer":        "shimmer       3s  linear      infinite",
        "float-up":       "float-up      6s  ease-in-out infinite",
        "twinkle":        "twinkle       2s  ease-in-out infinite",
        "fade-up":        "fade-up       0.6s ease        forwards",
        "spin-slow":      "spin-slow     30s linear      infinite",
        "breathe":        "breathe       4s  ease-in-out infinite",
      },

      /* ─────────────────────────────────────────────────────────────
         BOX SHADOW — mystical glows
         ───────────────────────────────────────────────────────────── */
      boxShadow: {
        "glacier":  "0 0 40px rgba(168,216,234,0.2), 0 0 80px rgba(168,216,234,0.06)",
        "aurora":   "0 0 40px rgba(0,212,255,0.2),   0 0 80px rgba(0,212,255,0.06)",
        "spirit":   "0 0 30px rgba(57,232,160,0.25), 0 0 60px rgba(57,232,160,0.08)",
        "rune":     "0 0 20px rgba(200,169,110,0.35), 0 0 40px rgba(200,169,110,0.12)",
        "deep":     "0 32px 80px rgba(6,13,25,0.8),  0 8px 24px rgba(6,13,25,0.5)",
        "card":     "0 4px  24px rgba(6,13,25,0.5),  0 1px  4px rgba(6,13,25,0.3)",
      },

      /* ─────────────────────────────────────────────────────────────
         SPACING EXTRAS
         ───────────────────────────────────────────────────────────── */
      spacing: {
        "18":  "4.5rem",
        "22":  "5.5rem",
        "88":  "22rem",
        "128": "32rem",
      },

      /* ─────────────────────────────────────────────────────────────
         BORDER RADIUS
         ───────────────────────────────────────────────────────────── */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
