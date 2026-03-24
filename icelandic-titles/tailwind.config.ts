import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ─── Iceland Brand Colors ─── */
      colors: {
        // Deep navy — primary brand blue
        "ice-deep": "#0A2540",
        "ice-navy": "#0D2F52",
        "ice-blue": "#1A4A7A",

        // Aurora cyan — accent
        aurora: "#00D4FF",
        "aurora-dim": "#00A3C4",
        "aurora-pale": "rgba(0,212,255,0.15)",

        // Aurora violet — secondary accent
        "aurora-violet": "#7C3AED",
        "aurora-violet-pale": "rgba(124,58,237,0.15)",

        // Aurora green
        "aurora-green": "#10B981",
        "aurora-green-pale": "rgba(16,185,129,0.15)",

        // Ice / whites
        "ice-white": "#F0F8FF",
        "ice-silver": "#CBD5E1",

        // Volcanic black / charcoal
        "ice-black": "#060D19",
        "ice-charcoal": "#111827",

        // Gold — premium accents
        "ice-gold": "#F59E0B",
        "ice-gold-light": "#FCD34D",
      },

      /* ─── Typography ─── */
      fontFamily: {
        // Cinzel for display headings (Norse/medieval feel)
        display: ["var(--font-cinzel)", "Georgia", "serif"],
        // Raleway for body text (modern, elegant)
        body: ["var(--font-raleway)", "system-ui", "sans-serif"],
        // Mono for coordinates / codes
        mono: ["var(--font-mono)", "monospace"],
      },

      /* ─── Custom spacing / sizing ─── */
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },

      /* ─── Background gradients ─── */
      backgroundImage: {
        "iceland-hero": "linear-gradient(160deg, #060D19 0%, #0A2540 50%, #0D2F52 100%)",
        "aurora-glow": "radial-gradient(ellipse at top, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "gold-shimmer": "linear-gradient(135deg, #F59E0B, #FCD34D, #F59E0B)",
        "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        "nav-blur": "linear-gradient(180deg, rgba(6,13,25,0.95), rgba(6,13,25,0.85))",
      },

      /* ─── Box shadows ─── */
      boxShadow: {
        "aurora": "0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,212,255,0.05)",
        "gold": "0 0 30px rgba(245,158,11,0.3), 0 4px 20px rgba(245,158,11,0.15)",
        "card": "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px rgba(0,0,0,0.4)",
        "nav": "0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.3)",
      },

      /* ─── Border radius ─── */
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      /* ─── Animation ─── */
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.12" },
          "50%": { transform: "translate(30px, 50px) scale(1.1)", opacity: "0.18" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,255,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,255,0.5)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 20s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
