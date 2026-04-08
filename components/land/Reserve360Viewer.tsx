"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Reserve360Viewer — Interactive 360° panorama viewer
// Uses react-photo-sphere-viewer (lightweight & performant)
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef } from "react";
import { PanoramaViewer } from "react-photo-sphere-viewer";
import "react-photo-sphere-viewer/dist/index.css";

interface Reserve360ViewerProps {
  imageUrl: string;
  title?: string;
}

export function Reserve360Viewer({ 
  imageUrl = "/media/360/eyri-fjord-360.jpg",
  title = "Virtual Tour – Eyri í Kollafirði" 
}: Reserve360ViewerProps) {
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    // Optional: Auto-rotate slowly when idle
    const timer = setTimeout(() => {
      if (viewerRef.current) {
        viewerRef.current.setOption("autorotate", true);
        viewerRef.current.setOption("autorotateSpeed", 0.5);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-ice-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">Experience the land</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Stand on your plot
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Drag to look around. This is a real 360° view from Eyri í Kollafirði, Vestfirðir.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video max-w-5xl mx-auto">
          <PanoramaViewer
            ref={viewerRef}
            src={imageUrl}
            height="100%"
            width="100%"
            navbar={true}
            keyboard={true}
            mousewheel={true}
            mousemove={true}
            touchmove={true}
            defaultZoom={0.8}
            defaultPitch={0}
            defaultYaw={0}
            sphereCorrection={{ pan: 0, tilt: 0, roll: 0 }}
          />
        </div>

        <div className="text-center mt-6 text-xs text-white/40">
          Drag with mouse • Scroll to zoom • Touch to explore on mobile
        </div>
      </div>
    </section>
  );
}