"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore, useLangStore } from "@/lib/store";

const navLinks = {
  th: [
    { label: "หน้าหลัก", href: "/" },
    { label: "สินค้า", href: "/products" },
    { label: "เรื่องราวของเรา", href: "/story" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Our Story", href: "/story" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLangStore();
  const { openCart, totalItems } = useCartStore();
  const count = totalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navLinks[lang];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-light/95 backdrop-blur-sm border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl text-brown tracking-wide">หอมถิ่น</span>
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase">Hom Thin</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest text-brown/70 hover:text-gold transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="hidden md:flex items-center gap-1 text-xs tracking-widest text-brown/60 hover:text-gold transition-colors"
            >
              <span className={lang === "th" ? "text-gold" : ""}>TH</span>
              <span className="text-brown/30">/</span>
              <span className={lang === "en" ? "text-gold" : ""}>EN</span>
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 text-brown/80 hover:text-gold transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-cream-light text-[10px] flex items-center justify-center rounded-full font-medium">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden text-brown/80 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream-light flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl text-brown hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { toggle(); setMenuOpen(false); }}
            className="text-sm tracking-widest text-brown/60 mt-4"
          >
            {lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
          </button>
        </div>
      )}
    </>
  );
}
