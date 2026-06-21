"use client";

import Link from "next/link";
import { useLangStore } from "@/lib/store";

export default function Footer() {
  const { lang } = useLangStore();

  return (
    <footer className="bg-brown text-cream/80 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="font-serif text-2xl text-cream">หอมถิ่น</div>
              <div className="text-[10px] tracking-[0.4em] text-gold uppercase mt-0.5">Hom Thin</div>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              {lang === "th"
                ? "กลิ่นของดินแดน เรื่องราวของบ้าน\nผลิตภัณฑ์ปรับอากาศจากชีวมวลเกษตรกรไทย 100% ปลอดสารพิษ"
                : "Scent of Place. Story of Home.\nBio-based air fresheners from Thai agricultural biomass. 100% non-toxic."}
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-widest text-cream/40 hover:text-gold transition-colors uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-gold uppercase mb-5">
              {lang === "th" ? "สำรวจ" : "Explore"}
            </h4>
            <ul className="space-y-3">
              {[
                { label: lang === "th" ? "หน้าหลัก" : "Home", href: "/" },
                { label: lang === "th" ? "สินค้าทั้งหมด" : "All Products", href: "/products" },
                { label: lang === "th" ? "เรื่องราวของเรา" : "Our Story", href: "/story" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-gold uppercase mb-5">
              {lang === "th" ? "ติดต่อ" : "Contact"}
            </h4>
            <ul className="space-y-3 text-sm text-cream/50">
              <li>ธนพรกนก</li>
              <li>063-9977551</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/20 italic">
            Made with purpose. Grown from the land.
          </p>
        </div>
      </div>
    </footer>
  );
}
