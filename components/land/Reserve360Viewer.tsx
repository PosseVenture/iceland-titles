"use client";
// Improved 360° Viewer - Simple cylindrical panorama with drag support
import { useEffect, useRef, useState } from "react";

export function Reserve360Viewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [yaw, setYaw] = useState(0);
  const [startX, setStartX] = useState(0);

  const imageUrl = "/media/360/eyri-fjord-360.jpg";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.clientX);
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const delta = (e.clientX - startX) * 0.8;
      setYaw((prev) => prev + delta);
      setStartX(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (container) container.style.cursor = "grab";
    };

    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX]);

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
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] max-w-5xl mx-auto bg-black cursor-grab"
          style={{ 
            transform: `perspective(1200px) rotateY(${yaw}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          <img 
            src={imageUrl} 
            alt="360° view of Eyri í Kollafirði" 
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <div className="text-center mt-6 text-xs text-white/40">
          Drag left/right to look around • Scroll to zoom in/out
        </div>
      </div>
    </section>
  );
}