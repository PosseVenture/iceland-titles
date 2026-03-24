import { cva, type VariantProps } from "class-variance-authority";
import { cn }                      from "@/lib/utils";

const BadgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-body font-semibold border leading-none",
  {
    variants: {
      variant: {
        glacier:    "bg-glacier/12  text-glacier  border-glacier/25",
        spirit:     "bg-spirit/12   text-spirit   border-spirit/25",
        rune:       "bg-rune-gold/12 text-rune-gold border-rune-gold/25",
        aurora:     "bg-aurora/10   text-aurora   border-aurora/25",
        bestseller: "bg-glacier text-ice-black border-glacier",
        featured:   "bg-aurora/15  text-aurora   border-aurora/30",
        neutral:    "bg-white/8     text-white/60  border-white/12",
      },
    },
    defaultVariants: { variant: "neutral" },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BadgeVariants> {
  children: React.ReactNode;
}

export function Badge({ variant, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(BadgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
