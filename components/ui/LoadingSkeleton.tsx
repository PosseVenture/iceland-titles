// ─────────────────────────────────────────────────────────────────────────────
// LoadingSkeleton — Shimmer placeholder for loading states
// Used by Suspense boundaries and deferred content
// ─────────────────────────────────────────────────────────────────────────────
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  /** Aria label for screen readers */
  label?:     string;
}

/** Single shimmer block */
export function Skeleton({ className, label }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-white/[0.05]",
        className
      )}
      role="status"
      aria-label={label ?? "Loading…"}
      aria-busy="true"
    >
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,216,234,0.06), transparent)",
          backgroundSize: "200% 100%",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

/** Product card skeleton */
export function ProductCardSkeleton() {
  return (
    <div className="glass-card p-6 space-y-4" aria-busy="true" aria-label="Loading product…">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-12 w-32" />
      <div className="space-y-2 pt-2">
        {[1,2,3,4].map(i => <Skeleton key={i} className="h-4 w-full" />)}
      </div>
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  );
}

/** Gallery image skeleton */
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-busy="true" aria-label="Loading gallery…">
      <Skeleton className="col-span-2 aspect-[16/9] rounded-2xl" />
      <Skeleton className="aspect-[4/3] rounded-2xl" />
      {[1,2,3].map(i => <Skeleton key={i} className="aspect-[4/3] rounded-2xl" />)}
      <Skeleton className="sm:col-span-2 lg:col-span-3 aspect-[21/9] rounded-2xl" />
    </div>
  );
}

/** Review card skeleton */
export function ReviewSkeleton() {
  return (
    <div className="glass-card p-6 space-y-3" aria-busy="true" aria-label="Loading review…">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-5 w-3/4" />
      <div className="space-y-1.5">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-5/6" />
        <Skeleton className="h-3.5 w-4/6" />
      </div>
      <div className="flex items-center gap-3 pt-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <div className="space-y-1 flex-1">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}

/** Page hero skeleton — used by Suspense on /buy-a-plot, /the-land etc */
export function PageHeroSkeleton() {
  return (
    <div className="relative pt-[72px] bg-ice-navy min-h-[260px]" aria-busy="true" aria-label="Loading page…">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 space-y-4">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-14 w-2/3" />
        <Skeleton className="h-5 w-1/2" />
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-10 w-36 rounded-xl" />
          <Skeleton className="h-10 w-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
