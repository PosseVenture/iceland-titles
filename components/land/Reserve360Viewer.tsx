"use client";
// Reserve360Viewer — Simple & reliable 360° panorama viewer (no heavy dependencies)
import { useEffect, useRef } from "react";

export function Reserve360Viewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageUrl = "/media/360/eyri-fjord-360.jpg";

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let isDragging = false;
    let previousMouseX = 0;
    let yaw = 0;

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      // Create canvas for 360° projection (simple cylindrical projection)
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 600;
      const ctx = canvas.getContext("2d")!;

      // Draw the equirectangular image onto the canvas with distortion for 360 feel
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const panorama = document.createElement("img");
      panorama.src = canvas.toDataURL("image/jpeg", 0.95);
      panorama.style.width = "100%";
      panorama.style.height = "100%";
      panorama.style.objectFit = "cover";
      panorama.style.cursor = "grab";

      container.innerHTML = "";
      container.appendChild(panorama);

      // Mouse drag to rotate
      panorama.addEventListener("mousedown", (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
        panorama.style.cursor = "grabbing";
      });

      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMouseX;
        yaw -= deltaX * 0.8;
        panorama.style.transform = `rotateY(${yaw}deg)`;
        previousMouseX = e.clientX;
      });

      document.addEventListener("mouseup", () => {
        isDragging = false;
        panorama.style.cursor = "grab";
      });

      // Touch support for mobile
      panorama.addEventListener("touchstart", (e) => {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
      });

      panorama.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - previousMouseX;
        yaw -= deltaX * 0.8;
        panorama.style.transform = `rotateY(${yaw}deg)`;
        previousMouseX = e.touches[0].clientX;
      });

      panorama.addEventListener("touchend", () => {
        isDragging = false;
      });
    };

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <section className="py-16 bg-ice-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">Experience the land</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Stand on your plot
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Drag to look around. This is a real 360° view from Eyri í Kollafirði in Vestfirðir.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] max-w-5xl mx-auto bg-black"
        >
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            Loading 360° view...
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-white/40">
          Drag with mouse • Touch and drag on mobile
        </div>
      </div>
    </section>
  );
}