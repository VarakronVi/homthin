"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import { useLangStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

const tags = ["All", "Mountain", "Heritage", "Coastal", "Highland", "Sacred", "River"];

export default function ProductsPage() {
  const { lang } = useLangStore();
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? products
    : products.filter((p) => p.tag === activeTag);

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
          {lang === "th" ? "คอลเลกชัน" : "Collection"}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brown">
          {lang === "th" ? "กลิ่นทั้งหมด" : "All Scents"}
        </h1>
        <p className="text-sm text-brown/50 mt-3">
          {lang === "th"
            ? `${products.length} กลิ่น จาก ${products.length} จังหวัด`
            : `${products.length} scents from ${products.length} provinces`}
        </p>
      </div>

      {/* Filter */}
      <div className="sticky top-16 z-30 bg-cream-light/90 backdrop-blur-sm border-b border-gold/10 px-6">
        <div className="max-w-6xl mx-auto flex gap-0 overflow-x-auto no-scrollbar py-4">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`flex-shrink-0 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                activeTag === tag
                  ? "bg-gold text-cream-light"
                  : "text-brown/50 hover:text-gold"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div key={product.id} className="fade-in-up" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
