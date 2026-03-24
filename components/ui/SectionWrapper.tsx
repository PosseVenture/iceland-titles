import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children:   React.ReactNode;
  className?: string;
  id?:        string;
  /** aria-label for the section */
  label?:     string;
  /** Whether to render as <article> instead of <section> */
  asArticle?: boolean;
  /** Extra inner container class */
  innerClass?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
  label,
  asArticle = false,
  innerClass,
}: SectionWrapperProps) {
  const Tag = asArticle ? "article" : "section";

  return (
    <Tag
      id={id}
      aria-label={label}
      className={cn("section-pad relative overflow-hidden", className)}
    >
      <div className={cn("max-w-7xl mx-auto", innerClass)}>
        {children}
      </div>
    </Tag>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
interface SectionHeadingProps {
  eyebrow?:   string;
  title:      React.ReactNode;
  subtitle?:  string;
  centered?:  boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", centered && "justify-center")}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-light text-[clamp(2rem,5vw,3.2rem)] text-white leading-[1.1] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-white/50 mt-4 max-w-xl leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
