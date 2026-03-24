"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Global providers wrapper.
 * Wrap all client-side providers here to keep layout.tsx clean.
 *
 * ThemeProvider from next-themes handles dark/light mode with system detection.
 * The `attribute="class"` prop adds/removes "dark" or "light" class on <html>.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
