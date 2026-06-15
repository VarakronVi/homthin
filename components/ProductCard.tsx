"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { useCartStore, useLangStore } from "@/lib/store";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const { lang } = useLangStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div
        className="product-card group cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Image area */}
        <div
          className="relative aspect-[3/4] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: product.bgColor }}
        >
          {/* Placeholder — replace with <Image> when photos arrive */}
          <div className="text-center p-8">
            <div className="text-4xl font-serif text-earth/20 leading-none mb-2">
              หอมถิ่น
            </div>
            <div className="text-xs tracking-widest text-earth/40 uppercase">
              {product.provinceTH}
            </div>
          </div>

          {/* Tag */}
          <div className="absolute top-4 left-4">
            <span className="tag">{product.tag}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-[10px] tracking-[0.3em] text-sage uppercase mb-1">
            {product.provinceTH} · {product.province}
          </p>
          <h3 className="font-serif text-lg text-brown leading-tight mb-1 group-hover:text-gold transition-colors">
            {lang === "th" ? product.nameTH : product.nameEN}
          </h3>
          <p className="text-xs text-sage line-clamp-1 mb-4">{product.scent}</p>

          <div className="flex items-center justify-between">
            <span className="font-serif text-lg text-gold">
              ฿{product.price.toLocaleString()}
            </span>
            <button
              onClick={handleAdd}
              className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                added
                  ? "border-earth text-earth bg-earth/10"
                  : "border-gold/40 text-brown/60 hover:border-gold hover:text-gold"
              }`}
            >
              {added
                ? lang === "th"
                  ? "เพิ่มแล้ว ✓"
                  : "Added ✓"
                : lang === "th"
                ? "+ ใส่ตะกร้า"
                : "+ Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProductModal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
