"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { useCartStore, useLangStore } from "@/lib/store";
import Portal from "./Portal";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addItem } = useCartStore();
  const { lang } = useLangStore();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); }, 1200);
  };

  return (
    <Portal>
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-brown/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-cream-light max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gold/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brown/40 hover:text-gold transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div
            className="aspect-square flex items-center justify-center"
            style={{ backgroundColor: product.bgColor }}
          >
            <div className="text-center">
              <div className="text-6xl font-serif text-earth/20 leading-none mb-2">หอมถิ่น</div>
              <div className="text-sm tracking-widest text-earth/40 uppercase">{product.provinceTH}</div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col">
            <span className="tag self-start mb-4">{product.tag}</span>

            <p className="text-xs tracking-[0.3em] text-sage uppercase mb-1">
              {product.provinceTH} · {product.province}
            </p>
            <h2 className="font-serif text-2xl text-brown mb-1">
              {lang === "th" ? product.nameTH : product.nameEN}
            </h2>
            <p className="text-sm text-sage mb-6">{product.scent}</p>

            {/* Story */}
            <div className="mb-6">
              <div className="thai-divider">
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase whitespace-nowrap">
                  {lang === "th" ? "ที่มาของดีไซน์" : "Design Origin"}
                </span>
              </div>
              <p className="text-sm text-brown/70 leading-relaxed">
                {lang === "th" ? product.storyTH : product.storyEN}
              </p>
              <p className="text-xs text-sage mt-3 italic">
                {lang === "th"
                  ? `ถ่านชีวภาพจาก: ${product.biomassSource}`
                  : `Biochar source: ${product.biomassSource}`}
              </p>
            </div>

            {/* Scent Notes */}
            <div className="mb-6 space-y-2">
              <div className="thai-divider">
                <span className="text-[10px] tracking-[0.3em] text-gold uppercase whitespace-nowrap">
                  {lang === "th" ? "โน้ตกลิ่น" : "Scent Notes"}
                </span>
              </div>
              {[
                { key: "top", label: lang === "th" ? "โน้ตต้น" : "Top" },
                { key: "middle", label: lang === "th" ? "โน้ตกลาง" : "Middle" },
                { key: "base", label: lang === "th" ? "โน้ตฐาน" : "Base" },
              ].map(({ key, label }) => (
                <div key={key} className="flex gap-3 items-start text-xs">
                  <span className="text-gold/60 w-16 flex-shrink-0">{label}</span>
                  <span className="text-brown/60">
                    {product.scentNotes[key as keyof typeof product.scentNotes].join(" · ")}
                  </span>
                </div>
              ))}
            </div>

            {/* Price + Add */}
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl text-gold">฿{product.price}</span>
                <div className="flex items-center border border-gold/30">
                  <button
                    className="w-8 h-8 text-brown/60 hover:text-gold transition-colors"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">{qty}</span>
                  <button
                    className="w-8 h-8 text-brown/60 hover:text-gold transition-colors"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAdd}
                className={`w-full btn-primary transition-all ${added ? "bg-earth border-earth text-cream-light" : ""}`}
              >
                {added
                  ? lang === "th" ? "เพิ่มแล้ว ✓" : "Added ✓"
                  : lang === "th" ? "เพิ่มใส่ตะกร้า" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Portal>
  );
}
