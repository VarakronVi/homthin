"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import { useLangStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

const filters = {
  region: ["All", "Northern", "Central", "Northeastern", "Eastern", "Southern"],
  scent: ["All", "Woody", "Floral", "Citrus", "Earthy"],
};

export default function ProductsPage() {
  const { lang } = useLangStore();
  const [region, setRegion] = useState("All");
  const [scent, setScent] = useState("All");

  const filtered = products.filter((p) => {
    const regionOk = region === "All" || p.region === region;
    const scentOk = scent === "All" || p.scentProfile === scent;
    return regionOk && scentOk;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="min-h-screen bg-cream-light pt-24">
      {/* Header */}
      <div className="py-16 px-6 text-center bg-cream border-b border-gold/20">
        <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-3">
          {lang === "th" ? "คอลเลกชัน" : "The Heritage Collection"}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brown">
          {lang === "th" ? "ค้นพบกลิ่นและเรื่องราว" : "Discover the Scent & Stories"}
        </h1>
        <p className="text-sm text-brown/50 mt-3">
          {lang === "th"
            ? "ของชุมชนท้องถิ่นทั่วประเทศไทย"
            : "of Thailand's local communities."}
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-cream-light/95 backdrop-blur-sm border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-6 items-center">
          {/* Region */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[9px] tracking-widest text-brown/40 uppercase flex-shrink-0">Region</span>
            {filters.region.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`flex-shrink-0 px-4 py-1.5 text-xs tracking-widest uppercase transition-all ${
                  region === r ? "bg-gold text-cream-light" : "text-brown/50 hover:text-gold"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="w-px h-5 bg-gold/20 hidden md:block" />

          {/* Scent */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[9px] tracking-widest text-brown/40 uppercase flex-shrink-0">Scent</span>
            {filters.scent.map((s) => (
              <button
                key={s}
                onClick={() => setScent(s)}
                className={`flex-shrink-0 px-4 py-1.5 text-xs tracking-widest uppercase transition-all ${
                  scent === s ? "bg-gold text-cream-light" : "text-brown/50 hover:text-gold"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-brown/30 text-sm">
            {lang === "th" ? "ไม่พบสินค้าที่ตรงกัน" : "No products match the selected filters."}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div key={product.id} className="fade-in-up" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
