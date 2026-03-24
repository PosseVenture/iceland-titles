"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/store";

/**
 * CartProvider — wraps the app and rehydrates the persisted cart
 * from localStorage on first client render.
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Rehydrate Zustand persist store on mount
    useCartStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}
