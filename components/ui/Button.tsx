"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Button — Icelandic Titles
// Variants: glacier (primary), ghost, spirit, rune, destructive
// Sizes: sm, md, lg, xl
// ─────────────────────────────────────────────────────────────────────────────
import * as React                       from "react";
import { Slot }                         from "@radix-ui/react-slot";
import { cva, type VariantProps }       from "class-variance-authority";
import { cn }                           from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  [
    "inline-flex items-center justify-center gap-2",
    "font-display font-semibold",
    "rounded-xl border transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier focus-visible:ring-offset-2 focus-visible:ring-offset-ice-black",
    "disabled:pointer-events-none disabled:opacity-50",
    "btn-spirit",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary — glacier ice
        glacier: [
          "bg-glacier text-ice-black border-glacier",
          "hover:bg-glacier-light hover:border-glacier-light hover:shadow-glacier",
          "active:scale-[0.98]",
        ].join(" "),

        // Ghost — transparent with border
        ghost: [
          "bg-transparent text-white/70 border-white/15",
          "hover:text-white hover:border-white/30 hover:bg-white/5",
        ].join(" "),

        // Spirit green
        spirit: [
          "bg-spirit/15 text-spirit border-spirit/30",
          "hover:bg-spirit/25 hover:border-spirit/50 hover:shadow-spirit",
        ].join(" "),

        // Rune gold
        rune: [
          "bg-rune-gold/10 text-rune-gold border-rune-gold/30",
          "hover:bg-rune-gold/20 hover:border-rune-gold/50 hover:shadow-rune",
        ].join(" "),

        // Destructive red
        destructive: [
          "bg-red-500/10 text-red-400 border-red-500/30",
          "hover:bg-red-500/20 hover:border-red-500/50",
        ].join(" "),

        // Link style
        link: [
          "bg-transparent border-transparent text-glacier",
          "hover:underline underline-offset-4 p-0",
        ].join(" "),
      },
      size: {
        sm:   "text-xs  px-3.5 py-2   h-8",
        md:   "text-sm  px-5   py-2.5 h-10",
        lg:   "text-base px-7  py-3   h-12",
        xl:   "text-lg  px-9   py-4   h-14",
        icon: "text-sm  p-2    h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "glacier",
      size:    "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="w-4 h-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
