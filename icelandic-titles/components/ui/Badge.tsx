import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const BadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase border transition-colors",
  {
    variants: {
      variant: {
        gold: "bg-ice-gold/15 text-ice-gold-light border-ice-gold/30",
        aurora: "bg-aurora/12 text-aurora border-aurora/30",
        green: "bg-aurora-green/12 text-aurora-green border-aurora-green/30",
        blue: "bg-ice-blue/30 text-aurora border-ice-blue/50",
        violet: "bg-aurora-violet/12 text-purple-300 border-aurora-violet/30",
        muted: "bg-white/[0.06] text-white/50 border-white/10",
      },
      size: {
        sm: "px-2.5 py-1",
        md: "px-3.5 py-1.5",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "md",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BadgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(BadgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}
