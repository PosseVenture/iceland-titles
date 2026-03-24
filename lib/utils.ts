import { clsx, type ClassValue } from "clsx";
import { twMerge }               from "tailwind-merge";
import type { Currency }          from "@/types";

/** Tailwind class merger */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as a currency string */
export function formatPrice(amount: number, currency: Currency): string {
  const locales: Record<Currency, string> = {
    EUR: "de-DE",
    USD: "en-US",
    GBP: "en-GB",
  };
  return new Intl.NumberFormat(locales[currency], {
    style:                 "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Currency symbol only */
export function currencySymbol(currency: Currency): string {
  return { EUR: "€", USD: "$", GBP: "£" }[currency];
}

/** Simple date formatter */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  }).format(new Date(dateString));
}

/** Generate a unique cart item ID */
export function generateCartId(): string {
  return `cart_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/** Truncate text with ellipsis */
export function truncate(text: string, len: number): string {
  return text.length <= len ? text : text.slice(0, len).trim() + "…";
}

/** Format lat/lng as readable coordinates */
export function formatCoords(lat: number, lng: number): string {
  return `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? "N" : "S"}, ${Math.abs(lng).toFixed(4)}° ${lng >= 0 ? "E" : "W"}`;
}
