import { cn } from "@/lib/utils";

interface GlassCardProps {
  children:   React.ReactNode;
  className?: string;
  hover?:     boolean;
  glacier?:   boolean;  // glacier-tinted border on hover
  spirit?:    boolean;  // spirit-tinted border on hover
}

export function GlassCard({
  children,
  className,
  hover    = false,
  glacier  = false,
  spirit   = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card",
        hover  && "glass-card-hover cursor-pointer",
        glacier && hover && "hover:border-glacier/20 hover:shadow-glacier",
        spirit  && hover && "hover:border-spirit/20  hover:shadow-spirit",
        className
      )}
    >
      {children}
    </div>
  );
}
