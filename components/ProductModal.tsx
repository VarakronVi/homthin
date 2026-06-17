"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/data";
import { useCartStore, useLangStore } from "@/lib/store";
import Portal from "./Portal";

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addItem } = useCartStore();
  const { lang } = useLangStore();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); }, 1200);
  };

  return (
    <Portal>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-brown/50 backdrop-blur-sm" onClick={onClose} />

        <div className="relative bg-cream-light w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-gold/20">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 text-brown/40 hover:text-gold transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="grid md:grid-cols-2">
            {/* Images */}
            <div className="flex flex-col gap-3 p-4" style={{ backgroundColor: product.bgColor }}>
              <div className="relative aspect-square">
                <Image
                  src={product.detailImages[activeImage]}
                  alt={product.nameEN}
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="flex gap-2 justify-center">
                {product.detailImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-16 h-16 border transition-all ${activeImage === i ? "border-gold" : "border-transparent opacity-50"}`}
                    style={{ backgroundColor: product.bgColor }}
                  >
                    <Image src={img} alt={`view ${i + 1}`} fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 flex flex-col">
              <span className="tag self-start mb-4">{product.tag}</span>

              <p className="text-[10px] tracking-[0.3em] text-sage uppercase mb-1">
                {product.provinceTH} · {product.region} Thailand
              </p>
              <h2 className="font-serif text-2xl text-brown mb-1">
                {lang === "th" ? product.nameTH : product.nameEN}
              </h2>
              <p className="text-sm text-gold italic mb-4">{product.scent}</p>

              <p className="text-sm text-brown/70 leading-relaxed mb-6">{product.description1}</p>

              {/* Design Story */}
              <div className="mb-5">
                <div className="thai-divider">
                  <span className="text-[10px] tracking-[0.3em] text-gold uppercase whitespace-nowrap">
                    {lang === "th" ? "ที่มาของดีไซน์" : "Design Origin"}
                  </span>
                </div>
                <h4 className="font-serif text-base text-brown mb-2">{product.headline1}</h4>
                <p className="text-sm text-brown/60 leading-relaxed">{product.description2}</p>
              </div>

              {/* Scent Notes */}
              <div className="mb-6">
                <div className="thai-divider">
                  <span className="text-[10px] tracking-[0.3em] text-gold uppercase whitespace-nowrap">
                    {lang === "th" ? "โน้ตกลิ่น" : "Scent Notes"} · {product.scent}
                  </span>
                </div>
                {[
                  { key: "top", label: lang === "th" ? "โน้ตต้น" : "Top" },
                  { key: "middle", label: lang === "th" ? "โน้ตกลาง" : "Middle" },
                  { key: "base", label: lang === "th" ? "โน้ตฐาน" : "Base" },
                ].map(({ key, label }) => (
                  <div key={key} className="flex gap-3 items-start text-xs mb-1">
                    <span className="text-gold/60 w-20 flex-shrink-0">{label}</span>
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
                    <button className="w-8 h-8 text-brown/60 hover:text-gold transition-colors" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                    <span className="w-8 text-center text-sm">{qty}</span>
                    <button className="w-8 h-8 text-brown/60 hover:text-gold transition-colors" onClick={() => setQty(qty + 1)}>+</button>
                  </div>
                </div>
                <button
                  onClick={handleAdd}
                  className={`w-full btn-primary transition-all ${added ? "bg-earth border-earth text-cream-light" : ""}`}
                >
                  {added ? (lang === "th" ? "เพิ่มแล้ว ✓" : "Added ✓") : (lang === "th" ? "เพิ่มใส่ตะกร้า" : "Add to Cart")}
                </button>

                {/* Tourism CTA */}
                <div className="border border-gold/20 p-4 bg-brown/5 mt-2">
                  <p className="text-[10px] tracking-widest text-gold uppercase mb-1">{product.headline2}</p>
                  <p className="text-xs text-brown/50 leading-relaxed line-clamp-2">{product.description4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
