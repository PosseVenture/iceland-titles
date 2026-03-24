"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Button Variants ──────────────────────────────────────────────────────────
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora focus-visible:ring-offset-2 focus-visible:ring-offset-ice-black",
  {
    variants: {
      variant: {
        gold:
          "bg-gradient-to-r from-ice-gold to-amber-600 text-ice-black hover:-translate-y-0.5 hover:shadow-gold active:translate-y-0",
        ghost:
          "bg-white/[0.07] border border-white/15 text-white backdrop-blur-sm hover:bg-white/[0.12] hover:-translate-y-0.5 active:translate-y-0",
        aurora:
          "bg-aurora/10 border border-aurora/25 text-aurora hover:bg-aurora/20 hover:shadow-aurora active:scale-[0.98]",
        outline:
          "border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/[0.05]",
        destructive:
          "bg-red-600/80 text-white hover:bg-red-600 border border-red-500/50",
        link:
          "text-aurora underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "text-xs px-4 py-2 rounded-lg",
        md: "text-sm px-6 py-3 rounded-xl",
        lg: "text-base px-8 py-4 rounded-xl",
        xl: "text-lg px-10 py-5 rounded-2xl",
        icon: "w-10 h-10 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  }
);

// ─── Button Props ─────────────────────────────────────────────────────────────
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// ─── Button Component ─────────────────────────────────────────────────────────
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
