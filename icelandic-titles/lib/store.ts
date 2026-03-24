"use client";

import { create } from "zustand";
import type { CartItem, Currency } from "@/types";

interface CartStore {
  items: CartItem[];
  currency: Currency;
  isOpen: boolean;

  addItem: (item: CartItem) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  setCurrency: (currency: Currency) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  itemCount: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  currency: "EUR",
  isOpen: false,

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
      isOpen: true,
    })),

  removeItem: (cartItemId) =>
    set((state) => ({
      items: state.items.filter((i) => i.cartItemId !== cartItemId),
    })),

  clearCart: () => set({ items: [] }),
  setCurrency: (currency) => set({ currency }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  itemCount: () => get().items.length,
  subtotal: () => get().items.reduce((sum, item) => sum + item.price, 0),
}));
