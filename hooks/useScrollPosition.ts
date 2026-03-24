"use client";

import { useState, useEffect } from "react";

/** Returns the current window.scrollY value, updated on scroll */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialise
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}

/** Returns true when page has scrolled past `threshold` pixels */
export function useScrolled(threshold = 20): boolean {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}
