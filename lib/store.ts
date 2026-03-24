"use client";
// ─────────────────────────────────────────────────────────────────────────────
// Icelandic Titles — Zustand Cart Store
// ─────────────────────────────────────────────────────────────────────────────
import { create }                            from "zustand";
import { persist, createJSONStorage }        from "zustand/middleware";
import type { CartItem, Currency }           from "@/types";
import { generateCartId }                    from "@/lib/utils";

interface CartStore {
  items:    CartItem[];
  currency: Currency;
  isOpen:   boolean;

  // Mutations
  addItem:        (item: Omit<CartItem, "cartItemId">) => void;
  removeItem:     (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, qty: number) => void;
  clearCart:      () => void;
  setCurrency:    (c: Currency) => void;
  openCart:       () => void;
  closeCart:      () => void;
  toggleCart:     () => void;

  // Computed (called as functions)
  itemCount: () => number;
  subtotal:  () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items:    [],
      currency: "EUR",
      isOpen:   false,

      addItem: (item) =>
        set((s) => ({
          items:  [...s.items, { ...item, cartItemId: generateCartId() }],
          isOpen: true,
        })),

      removeItem: (cartItemId) =>
        set((s) => ({ items: s.items.filter((i) => i.cartItemId !== cartItemId) })),

      updateQuantity: (cartItemId, qty) =>
        set((s) => ({
          items:
            qty <= 0
              ? s.items.filter((i) => i.cartItemId !== cartItemId)
              : s.items.map((i) =>
                  i.cartItemId === cartItemId ? { ...i, quantity: qty } : i
                ),
        })),

      clearCart:   () => set({ items: [] }),
      setCurrency: (c) => set({ currency: c }),
      openCart:    () => set({ isOpen: true  }),
      closeCart:   () => set({ isOpen: false }),
      toggleCart:  () => set((s) => ({ isOpen: !s.isOpen })),

      itemCount: () => get().items.reduce((n, i) => n + i.quantity, 0),
      subtotal:  () =>
        get().items.reduce(
          (sum, i) =>
            sum + i.price * i.quantity + i.addOns.reduce((s, a) => s + a.price, 0),
          0
        ),
    }),
    {
      name:    "icelandic-titles-cart",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : ({} as Storage)
      ),
    }
  )
);
