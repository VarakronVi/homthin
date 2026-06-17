"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, impactStats } from "@/lib/data";
import { useLangStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CountUp({ end, unit }: { end: number; unit: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = Math.ceil(end / 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { start = end; clearInterval(timer); }
        if (ref.current) ref.current.textContent = start.toString();
      }, 24);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return (
    <span className="font-serif text-5xl md:text-6xl text-gold leading-none">
      <span ref={ref}>0</span>
      <span className="text-2xl ml-1">{unit}</span>
    </span>
  );
}

export default function HomePage() {
  useScrollReveal();
  const { lang } = useLangStore();
  const featured = products.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brown">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(ellipse at 60% 50%, #4A6741 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, #C9A84C22 0%, transparent 50%)"
        }} />

        {/* Hero image background */}
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/landing/hero.svg" alt="Hom Thin Hero" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-8 fade-in-up visible" style={{ transitionDelay: "0.1s" }}>
            {lang === "th" ? "ผลิตภัณฑ์ชีวภาพจากชาวนาไทย" : "Upcycled Agricultural Biochar · Thai Craft"}
          </p>
          <h1 className="font-serif text-cream" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1.1 }}>
            <span className="block fade-in-up visible" style={{ transitionDelay: "0.2s" }}>
              {lang === "th" ? "หายใจกับมรดก" : "Breathe the Heritage."}
            </span>
            <span className="block text-gold/80 fade-in-up visible" style={{ transitionDelay: "0.35s" }}>
              {lang === "th" ? "สร้างอากาศแห่งอนาคต" : "Clear the Future."}
            </span>
          </h1>

          <p className="mt-6 text-cream/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto fade-in-up visible" style={{ transitionDelay: "0.5s" }}>
            {lang === "th"
              ? "เครื่องฟอกอากาศแบบ passive และ diffuser เชิงประติมากรรมชิ้นแรกของโลก ผลิตจากถ่านชีวภาพเกษตรกรรม อากาศบริสุทธิ์ที่หยั่งรากในผืนดินไทย"
              : "The world's first passive air purifier and sculptural diffuser, crafted from upcycled agricultural biochar. Pure air, rooted in local ground."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 fade-in-up visible" style={{ transitionDelay: "0.65s" }}>
            <Link href="/products" className="btn-primary !border-gold !text-cream hover:!bg-gold hover:!text-brown">
              {lang === "th" ? "สำรวจคอลเลกชัน" : "Explore the Collection"}
            </Link>
            <Link href="/story" className="btn-ghost !border-cream/30 !text-cream/70 hover:!border-gold hover:!text-gold">
              {lang === "th" ? "สำหรับโรงแรมบูติค" : "For Boutique Hotels"}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gold/40 animate-pulse" />
        </div>
      </section>

      {/* ── DUAL ACTION ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">
              {lang === "th" ? "เทคโนโลยี Dual-Action" : "Dual-Action Technology"}
            </p>
            <h2 className="section-title mb-8">
              {lang === "th" ? "ศิลปะที่หายใจได้" : "Art That Breathes."}
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "◈",
                  titleEN: "Purify Instantly",
                  titleTH: "ฟอกอากาศทันที",
                  descEN: "A microscopic biochar core actively scrubs dampness, VOCs, and localized PM 2.5 from your micro-environment.",
                  descTH: "แกนถ่านชีวภาพระดับนาโนขจัดความชื้น VOC และ PM 2.5 จากบรรยากาศรอบตัวคุณ",
                },
                {
                  icon: "◉",
                  titleEN: "Scent Passively",
                  titleTH: "กระจายกลิ่นธรรมชาติ",
                  descEN: "Our aerodynamic Venturi engine projects premium local Thai essential oils without cords, heat, or electricity.",
                  descTH: "เครื่องยนต์ Venturi แบบ aerodynamic กระจายน้ำมันหอมระเหยไทยท้องถิ่น โดยไม่ต้องใช้สายไฟ ความร้อน หรือไฟฟ้า",
                },
                {
                  icon: "◌",
                  titleEN: "Zero Waste",
                  titleTH: "ไม่สร้างขยะ",
                  descEN: "Crafted entirely from upcycled agricultural waste, eliminating single-use plastics from your home.",
                  descTH: "ผลิตจากวัสดุเกษตรกรรมรีไซเคิล 100% ไม่มีพลาสติกใช้ครั้งเดียวทิ้ง",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 fade-in-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                  <span className="text-gold text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-serif text-base text-brown mb-1">
                      {lang === "th" ? item.titleTH : item.titleEN}
                    </h3>
                    <p className="text-sm text-brown/60 leading-relaxed">
                      {lang === "th" ? item.descTH : item.descEN}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-up relative aspect-square">
            <Image src="/images/landing/dual-action.svg" alt="Dual Action Technology" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-10 px-6 bg-cream border-t border-gold/20">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8">
          {["100% Natural", "Zero Electricity", "Sustainable Thai Craft", "No VOCs"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-xs tracking-widest text-earth uppercase">
              <span className="w-1 h-1 rounded-full bg-gold" />
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="py-24 px-6 bg-earth">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-cream/10">
          {impactStats.map((stat, i) => (
            <div key={i} className="text-center px-6 fade-in-up" style={{ transitionDelay: `${i * 0.12}s` }}>
              <CountUp end={stat.value} unit={stat.unit} />
              <p className="text-xs text-cream/50 mt-3 leading-relaxed whitespace-pre-line">
                {lang === "th" ? stat.labelTH : stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="fade-in-up">
              <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-2">
                {lang === "th" ? "คอลเลกชัน Heritage" : "The Heritage Collection"}
              </p>
              <h2 className="section-title">
                {lang === "th" ? "ค้นพบกลิ่นและเรื่องราว" : "Discover the Scent & Stories"}
              </h2>
            </div>
            <Link href="/products" className="hidden md:inline-flex text-xs tracking-widest uppercase text-gold border-b border-gold/40 hover:border-gold transition-colors pb-0.5 fade-in-up">
              {lang === "th" ? "ดูทั้งหมด" : "View All"}
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <div key={product.id} className="fade-in-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link href="/products" className="btn-ghost">
              {lang === "th" ? "ดูสินค้าทั้งหมด" : "View All Products"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-24 px-6 bg-brown">
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <div className="thai-divider mb-8">
            <span className="text-[9px] tracking-[0.5em] text-gold uppercase whitespace-nowrap">Social Proof</span>
          </div>
          <blockquote className="font-serif text-lg md:text-xl text-cream leading-relaxed italic mb-6">
            "HOMTINN has completely transformed the ambiance of our suites. Our guests are captivated by the design, and we are proud to support a product that actively reduces Thailand's PM 2.5."
          </blockquote>
          <p className="text-gold text-xs tracking-[0.3em] uppercase">— Luxury Eco-Resort Director</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 bg-cream text-center">
        <div className="max-w-xl mx-auto fade-in-up">
          <h2 className="section-title mb-4">
            {lang === "th" ? "ยกระดับพื้นที่ของคุณ\nสร้างพลังให้แหล่งที่มา" : "Elevate Your Space.\nEmpower the Source."}
          </h2>
          <p className="text-sm text-brown/50 mb-8">
            {lang === "th"
              ? "ทุกการซื้อคือการสนับสนุนเกษตรกรไทยโดยตรง"
              : "Every purchase directly supports Thai farming communities."}
          </p>
          <Link href="/products" className="btn-primary">
            {lang === "th" ? "ช้อปเลย" : "Shop HOMTINN Now"}
          </Link>
        </div>
      </section>
    </>
  );
}
