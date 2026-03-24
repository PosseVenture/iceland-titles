import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome — Your Icelandic Titles Dashboard",
  description: "Access your plot certificates, GPS coordinates, virtual tours, and conservation updates in your personal Icelandic Titles owner dashboard.",
  robots: { index: false, follow: false }, // Protected page — no indexing
};

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
