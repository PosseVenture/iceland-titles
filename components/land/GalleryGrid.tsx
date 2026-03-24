"use client";
// ─────────────────────────────────────────────────────────────────────────────
// GalleryGrid — Photo gallery for /the-land/snaefellsnes
// 6-image masonry-style grid · click to open lightbox modal
// Full ARIA: role="group", dialog modal, keyboard nav (arrow keys, ESC)
// All images have rich alt text describing Snæfellsjökull / huldufólk
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useCallback, useRef } from "react";
import Image                           from "next/image";
import { motion, AnimatePresence }  from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn }                       from "@/lib/utils";
import type { GalleryImage }        from "@/types";

// ─── Image placeholder card ───────────────────────────────────────────────────
function GalleryCard({
  image,
  index,
  onOpen,
  className,
}: {
  image:     GalleryImage;
  index:     number;
  onOpen:    (i: number) => void;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={cn("relative overflow-hidden rounded-2xl cursor-pointer group", className)}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`View full image: ${image.alt}`}
        className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glacier focus-visible:ring-offset-2 focus-visible:ring-offset-ice-black rounded-2xl"
      >
        {/* Real next/image — src and alt come from lib/data.ts galleryImages array */}
        <div className="relative w-full h-full min-h-[220px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Caption overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ice-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          {image.caption && (
            <p className="font-display text-sm font-semibold text-white">
              {image.caption}
            </p>
          )}
          <p className="font-body text-xs text-white/50 mt-1 line-clamp-2">
            {image.alt}
          </p>
        </div>

        {/* Zoom icon on hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ZoomIn className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      </button>
    </motion.div>
  );
}

// ─── Lightbox modal ───────────────────────────────────────────────────────────
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images:       GalleryImage[];
  currentIndex: number;
  onClose:      () => void;
  onPrev:       () => void;
  onNext:       () => void;
}) {
  const image     = images[currentIndex];
  const closeRef  = useRef<HTMLButtonElement>(null);

  // Focus close button on open
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{    opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image ${currentIndex + 1} of ${images.length}: ${image.alt}`}
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
      >
        <X className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 z-10 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0  }}
          exit={{    opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full mx-16"
        >
          {/* Real image in lightbox */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 90vw, 896px"
              priority
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            {image.caption && (
              <p className="font-display text-base font-semibold text-white mb-1">
                {image.caption}
              </p>
            )}
            <p className="font-body text-xs text-white/40">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 z-10 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5" role="tablist" aria-label="Gallery navigation">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => { /* handled by parent */ }}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-200",
              i === currentIndex ? "bg-glacier w-4" : "bg-white/30"
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main GalleryGrid ─────────────────────────────────────────────────────────
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() => setLightboxIndex((i) => i !== null ? (i - 1 + images.length) % images.length : null), [images.length]);
  const nextImage     = useCallback(() => setLightboxIndex((i) => i !== null ? (i + 1) % images.length : null),                  [images.length]);

  // Lock scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section
        aria-label="Snæfellsnes Reserve photo gallery"
        className="relative bg-ice-black section-pad"
      >
        <div
          className="aurora-orb w-[400px] h-[400px] bg-glacier/5 bottom-0 left-0"
          aria-hidden="true"
          style={{ animationDelay: "-7s" }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="eyebrow mb-3">The reserve in pictures</p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-light text-white">
              Glacier, lava, aurora &{" "}
              <em className="not-italic text-gradient-rune">ancient mystery</em>
            </h2>
            <p className="font-body text-sm text-white/35 mt-2">
              Click any image to explore · ←/→ arrow keys to navigate
            </p>
          </div>

          {/*
            Grid layout:
            Row 1: image 0 (large 2-col) + image 1 (1-col)
            Row 2: image 2 (1-col) + image 3 (1-col) + image 4 (1-col)
            Row 3: image 5 (full width banner)
          */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="group"
            aria-label="Photo gallery"
          >
            {/* Large feature image */}
            <GalleryCard
              image={images[0]}
              index={0}
              onOpen={openLightbox}
              className="lg:col-span-2 aspect-[16/9] lg:aspect-auto lg:h-72"
            />
            {/* Portrait */}
            <GalleryCard
              image={images[1]}
              index={1}
              onOpen={openLightbox}
              className="aspect-[4/3] lg:h-72"
            />
            {/* Three equal */}
            {images.slice(2, 5).map((img, i) => (
              <GalleryCard
                key={img.src}
                image={img}
                index={i + 2}
                onOpen={openLightbox}
                className="aspect-[4/3]"
              />
            ))}
            {/* Wide banner */}
            {images[5] && (
              <GalleryCard
                image={images[5]}
                index={5}
                onOpen={openLightbox}
                className="sm:col-span-2 lg:col-span-3 aspect-[21/9]"
              />
            )}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
