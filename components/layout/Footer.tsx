// ─────────────────────────────────────────────────────────────────────────────
// Footer — Icelandic Titles
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ice-black border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-glacier via-white/30 to-transparent flex items-center justify-center text-2xl">
                ❄
              </div>
              <div>
                <div className="font-display text-2xl tracking-tight">Icelandic Titles</div>
                <div className="text-xs text-white/50 -mt-1">EYRI Í KOLLAFIRÐI • VESTFIRÐIR</div>
              </div>
            </div>

            <p className="text-white/70 max-w-sm">
              Souvenir plots in the wild Westfjords of Iceland. 
              Become a Jarl, Baron or Baroness of Eyri í Kollafirði and help restore this ancient landscape.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#" className="text-white/50 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">SHOP</h4>
            <div className="space-y-2 text-sm">
              <Link href="/buy-a-plot" className="block text-white/70 hover:text-white">Buy a Souvenir Plot</Link>
              <Link href="/buy-a-plot" className="block text-white/70 hover:text-white">Gift a Title</Link>
            </div>
          </div>

          {/* Discover */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">DISCOVER</h4>
            <div className="space-y-2 text-sm">
              <Link href="/the-land" className="block text-white/70 hover:text-white">Eyri í Kollafirði Reserve</Link>
              <Link href="/guided-tours" className="block text-white/70 hover:text-white">Guided Tours</Link>
              <Link href="/adopt" className="block text-white/70 hover:text-white">Adopt an Icelandic Horse</Link>
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">COMPANY</h4>
            <div className="space-y-2 text-sm">
              <Link href="/faq" className="block text-white/70 hover:text-white">FAQ</Link>
              <Link href="/contact" className="block text-white/70 hover:text-white">Contact Us</Link>
              <Link href="/legal" className="block text-white/70 hover:text-white">Legal</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4 text-white">CONTACT</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>hello@icelandictitles.com</p>
              <p>+354 555 0100</p>
              <p>Laugavegur 28<br />101 Reykjavík, Iceland</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Icelandic Titles ehf. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal" className="hover:text-white">Terms & Conditions</Link>
          </div>
          <div className="text-center md:text-right">
            Souvenir plots in Vestfirðir. No real land ownership is transferred.
          </div>
        </div>
      </div>
    </footer>
  );
}