"use client";

import { useCartStore, useLangStore } from "@/lib/store";
import Link from "next/link";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCartStore();
  const { lang } = useLangStore();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-brown/30 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream-light border-l border-gold/20 transition-transform duration-500 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/20">
          <div>
            <h2 className="font-serif text-xl text-brown">
              {lang === "th" ? "ตะกร้าสินค้า" : "Your Cart"}
            </h2>
            <p className="text-xs tracking-widest text-sage mt-0.5 uppercase">
              {items.length} {lang === "th" ? "รายการ" : "items"}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="text-brown/50 hover:text-gold transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold/40">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-brown/50 text-sm">
                {lang === "th" ? "ยังไม่มีสินค้าในตะกร้า" : "Your cart is empty"}
              </p>
              <button onClick={closeCart}>
                <Link
                  href="/products"
                  className="text-gold text-sm tracking-widest uppercase border-b border-gold/40 hover:border-gold transition-colors"
                >
                  {lang === "th" ? "เลือกซื้อสินค้า" : "Browse Products"}
                </Link>
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4">
                {/* Placeholder image */}
                <div
                  className="w-20 h-20 flex-shrink-0 flex items-center justify-center border border-gold/20"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <span className="text-[8px] text-earth/60 text-center leading-tight px-1">
                    {product.provinceTH}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm text-brown truncate">
                    {lang === "th" ? product.nameTH : product.nameEN}
                  </p>
                  <p className="text-xs text-sage mt-0.5 truncate">{product.scent}</p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity stepper */}
                    <div className="flex items-center border border-gold/30">
                      <button
                        className="w-7 h-7 flex items-center justify-center text-brown/60 hover:text-gold transition-colors"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm text-brown">{quantity}</span>
                      <button
                        className="w-7 h-7 flex items-center justify-center text-brown/60 hover:text-gold transition-colors"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gold">
                        ฿{(product.price * quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-brown/30 hover:text-brown/60 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/20 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-brown/60 tracking-widest uppercase">
                {lang === "th" ? "ยอดรวม" : "Subtotal"}
              </span>
              <span className="font-serif text-xl text-brown">
                ฿{totalPrice().toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-sage">
              {lang === "th"
                ? "ค่าจัดส่งคำนวณในขั้นตอนชำระเงิน"
                : "Shipping calculated at checkout"}
            </p>
            <Link href="/cart" onClick={closeCart}>
              <button className="w-full btn-primary mt-2">
                {lang === "th" ? "ชำระเงิน" : "Checkout"}
              </button>
            </Link>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-brown/50 hover:text-gold transition-colors"
            >
              {lang === "th" ? "เลือกซื้อสินค้าต่อ" : "Continue Shopping"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
