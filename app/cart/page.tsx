"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore, useLangStore } from "@/lib/store";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();
  const { lang } = useLangStore();
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  if (step === "success") {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-cream-light">
        <div className="text-center max-w-sm px-6">
          <div className="text-5xl mb-6">✓</div>
          <h2 className="font-serif text-3xl text-brown mb-3">
            {lang === "th" ? "ขอบคุณสำหรับคำสั่งซื้อ" : "Thank You"}
          </h2>
          <p className="text-sm text-brown/50 mb-8">
            {lang === "th"
              ? "เราจะติดต่อกลับภายใน 24 ชั่วโมง"
              : "We'll be in touch within 24 hours."}
          </p>
          <Link href="/products" onClick={clearCart} className="btn-primary">
            {lang === "th" ? "เลือกซื้อสินค้าต่อ" : "Continue Shopping"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-cream-light">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-2">
            {step === "cart"
              ? (lang === "th" ? "ตะกร้าสินค้า" : "Cart")
              : (lang === "th" ? "ชำระเงิน" : "Checkout")}
          </p>
          <h1 className="font-serif text-3xl text-brown">
            {step === "cart"
              ? (lang === "th" ? "รายการสินค้า" : "Your Items")
              : (lang === "th" ? "ข้อมูลการจัดส่ง" : "Shipping Details")}
          </h1>
        </div>

        {items.length === 0 && step === "cart" ? (
          <div className="text-center py-24">
            <p className="text-brown/40 mb-6">
              {lang === "th" ? "ยังไม่มีสินค้าในตะกร้า" : "Your cart is empty"}
            </p>
            <Link href="/products" className="btn-ghost">
              {lang === "th" ? "เลือกซื้อสินค้า" : "Browse Products"}
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="md:col-span-2 space-y-4">
              {step === "cart" ? (
                items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-5 p-5 bg-cream border border-gold/20">
                    <div
                      className="relative w-20 h-20 flex-shrink-0 border border-gold/10 overflow-hidden"
                      style={{ backgroundColor: product.bgColor }}
                    >
                      <Image src={product.catalogImage} alt={product.nameEN} fill className="object-contain p-2" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-base text-brown">
                        {lang === "th" ? product.nameTH : product.nameEN}
                      </h3>
                      <p className="text-xs text-sage mt-0.5">{product.scent}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gold/30">
                          <button className="w-8 h-8 text-brown/60 hover:text-gold transition-colors" onClick={() => updateQuantity(product.id, quantity - 1)}>−</button>
                          <span className="w-8 text-center text-sm">{quantity}</span>
                          <button className="w-8 h-8 text-brown/60 hover:text-gold transition-colors" onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-serif text-gold">฿{(product.price * quantity).toLocaleString()}</span>
                          <button onClick={() => removeItem(product.id)} className="text-brown/30 hover:text-brown/60 transition-colors text-sm">×</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="space-y-4">
                  {[
                    { key: "name", labelTH: "ชื่อ-นามสกุล", labelEN: "Full Name", type: "text" },
                    { key: "email", labelTH: "อีเมล", labelEN: "Email", type: "email" },
                    { key: "phone", labelTH: "เบอร์โทรศัพท์", labelEN: "Phone", type: "tel" },
                    { key: "address", labelTH: "ที่อยู่จัดส่ง", labelEN: "Shipping Address", type: "text" },
                  ].map(({ key, labelTH, labelEN, type }) => (
                    <div key={key}>
                      <label className="text-xs tracking-widest text-brown/50 uppercase block mb-2">
                        {lang === "th" ? labelTH : labelEN}
                      </label>
                      {key === "address" ? (
                        <textarea
                          rows={3}
                          className="w-full px-4 py-3 bg-cream border border-gold/30 text-sm text-brown focus:outline-none focus:border-gold resize-none"
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        />
                      ) : (
                        <input
                          type={type}
                          className="w-full px-4 py-3 bg-cream border border-gold/30 text-sm text-brown focus:outline-none focus:border-gold"
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        />
                      )}
                    </div>
                  ))}

                  {/* Payment (visual only) */}
                  <div className="mt-6">
                    <label className="text-xs tracking-widest text-brown/50 uppercase block mb-4">
                      {lang === "th" ? "ช่องทางชำระเงิน" : "Payment Method"}
                    </label>
                    <div className="border border-gold/30 p-6 bg-cream text-center">
                      <p className="text-sm text-brown/60 mb-2">PromptPay / QR Code</p>
                      <div className="w-24 h-24 bg-brown/10 mx-auto flex items-center justify-center">
                        <span className="text-xs text-brown/30">QR</span>
                      </div>
                      <p className="text-xs text-brown/40 mt-3">
                        {lang === "th"
                          ? "สแกน QR เพื่อชำระเงิน (UI Demo)"
                          : "Scan QR to pay (UI Demo)"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-cream border border-gold/20 p-6 h-fit">
              <h3 className="font-serif text-lg text-brown mb-6">
                {lang === "th" ? "สรุปคำสั่งซื้อ" : "Order Summary"}
              </h3>
              <div className="space-y-3 mb-6">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span className="text-brown/60 truncate flex-1">
                      {lang === "th" ? product.nameTH : product.nameEN} ×{quantity}
                    </span>
                    <span className="text-brown ml-4">฿{(product.price * quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gold/20 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-brown/60">
                  <span>{lang === "th" ? "ค่าจัดส่ง" : "Shipping"}</span>
                  <span>{lang === "th" ? "คำนวณหลังชำระ" : "TBD"}</span>
                </div>
                <div className="flex justify-between font-serif text-xl text-brown pt-2">
                  <span>{lang === "th" ? "ยอดรวม" : "Total"}</span>
                  <span className="text-gold">฿{totalPrice().toLocaleString()}</span>
                </div>
              </div>

              <button
                className="w-full btn-primary mt-6"
                onClick={() => {
                  if (step === "cart") setStep("checkout");
                  else setStep("success");
                }}
              >
                {step === "cart"
                  ? (lang === "th" ? "ดำเนินการชำระเงิน" : "Proceed to Checkout")
                  : (lang === "th" ? "ยืนยันคำสั่งซื้อ" : "Place Order")}
              </button>

              {step === "checkout" && (
                <button
                  onClick={() => setStep("cart")}
                  className="w-full text-center text-xs text-brown/40 hover:text-gold mt-3 transition-colors"
                >
                  {lang === "th" ? "← กลับไปตะกร้า" : "← Back to Cart"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
