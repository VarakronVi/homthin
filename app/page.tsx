"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { products, impactStats } from "@/lib/data";
import { useLangStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
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
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(ellipse at 60% 50%, #4A6741 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, #C9A84C22 0%, transparent 50%)"
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-8 fade-in-up visible" style={{ transitionDelay: "0.1s" }}>
            {lang === "th" ? "ผลิตภัณฑ์ชีวภาพจากชาวนาไทย" : "Bio-based · Thai Farmers · Sustainable"}
          </p>
          <h1 className="font-serif text-cream" style={{ fontSize: "clamp(3rem, 10vw, 7rem)", lineHeight: 1 }}>
            <span className="block fade-in-up visible" style={{ transitionDelay: "0.2s" }}>หอมถิ่น</span>
            <span className="block text-gold/80 italic fade-in-up visible" style={{ transitionDelay: "0.35s", fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}>
              Hom Thin
            </span>
          </h1>

          <p className="mt-6 text-cream/60 text-sm md:text-base tracking-wide leading-relaxed fade-in-up visible" style={{ transitionDelay: "0.5s" }}>
            {lang === "th"
              ? "กลิ่นของดินแดน เรื่องราวของบ้าน\nปรับอากาศจากชีวมวลเกษตร ปลอดสาร 100%"
              : "Scent of Place. Story of Home.\nAir fresheners from Thai agricultural biomass. 100% non-toxic."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 fade-in-up visible" style={{ transitionDelay: "0.65s" }}>
            <Link href="/products" className="btn-primary !border-gold !text-cream hover:!bg-gold hover:!text-brown">
              {lang === "th" ? "สำรวจสินค้า" : "Explore Collection"}
            </Link>
            <Link href="/story" className="btn-ghost !border-cream/30 !text-cream/70 hover:!border-gold hover:!text-gold">
              {lang === "th" ? "เรื่องราวของเรา" : "Our Story"}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gold/40 animate-pulse" />
        </div>
      </section>

      {/* ── CONCEPT ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">
              {lang === "th" ? "แนวคิด" : "The Concept"}
            </p>
            <h2 className="section-title">
              {lang === "th" ? "จากทุ่งนาสู่บ้านของคุณ" : "From the Field to Your Home"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gold/20">
            {[
              {
                icon: "🌿",
                titleTH: "จากทุ่งเกษตร",
                titleEN: "From the Field",
                descTH: "ชีวมวลจากเกษตรกรไทยที่เคยถูกเผาทิ้ง ถูกแปลงเป็นถ่านชีวภาพคุณภาพสูงผ่านกระบวนการ Pyrolysis",
                descEN: "Agricultural biomass once left to burn is transformed into high-performance biochar through pyrolysis.",
              },
              {
                icon: "✨",
                titleTH: "เทคโนโลยี Dual-Action",
                titleEN: "Dual-Action Technology",
                descTH: "Biochar ดูดซับกลิ่นไม่พึงประสงค์ ขณะที่ PLA ปล่อยกลิ่นหอมแท้ๆ จากพืชท้องถิ่นไทย",
                descEN: "Biochar absorbs bad odors while PLA releases authentic Thai botanical fragrances.",
              },
              {
                icon: "🇹🇭",
                titleTH: "อัตลักษณ์ไทย",
                titleEN: "Thai Identity",
                descTH: "แต่ละผลิตภัณฑ์เป็นตัวแทนกลิ่นและดีไซน์จากแต่ละจังหวัด เชื่อมต่อคุณกับวัฒนธรรมท้องถิ่น",
                descEN: "Each product represents the unique scent and identity of a Thai province — Soft Power in every breath.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-cream-light p-10 text-center fade-in-up"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-serif text-lg text-brown mb-3">
                  {lang === "th" ? item.titleTH : item.titleEN}
                </h3>
                <p className="text-sm text-brown/60 leading-relaxed">
                  {lang === "th" ? item.descTH : item.descEN}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="py-24 px-6 bg-earth">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-cream/10">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center px-6 fade-in-up" style={{ transitionDelay: `${i * 0.12}s` }}>
                <CountUp end={stat.value} unit={stat.unit} />
                <p className="text-xs text-cream/50 mt-3 leading-relaxed whitespace-pre-line">
                  {lang === "th" ? stat.labelTH : stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="fade-in-up">
              <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-2">
                {lang === "th" ? "คัดสรรมาเพื่อคุณ" : "Curated Collection"}
              </p>
              <h2 className="section-title">
                {lang === "th" ? "กลิ่นแห่งถิ่น" : "Scents of Place"}
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex text-xs tracking-widest uppercase text-gold border-b border-gold/40 hover:border-gold transition-colors pb-0.5 fade-in-up"
            >
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

      {/* ── STORY STRIP ── */}
      <section className="py-24 px-6 bg-brown">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <div className="thai-divider mb-8">
            <span className="text-[9px] tracking-[0.5em] text-gold uppercase whitespace-nowrap">
              {lang === "th" ? "ปณิธาน" : "Our Purpose"}
            </span>
          </div>
          <blockquote className="font-serif text-xl md:text-2xl text-cream leading-relaxed italic mb-4">
            {lang === "th"
              ? '"ชาวนาเป็นเจ้าของทรัพยากร และตอนนี้พวกเขาได้รับสิ่งตอบแทนจากมัน"'
              : '"Farmers own the resource. Now, they earn from it."'}
          </blockquote>
          <p className="text-gold text-xs tracking-[0.3em] uppercase">Hom Thin · หอมถิ่น</p>
        </div>
      </section>

      {/* ── BCG / SUSTAINABILITY ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">
              {lang === "th" ? "เศรษฐกิจหมุนเวียน" : "Circular Economy"}
            </p>
            <h2 className="section-title mb-6">
              {lang === "th" ? "จากเถ้าถ่าน\nสู่ผลิตภัณฑ์พรีเมียม" : "From Ash\nto Premium Product"}
            </h2>
            <p className="text-sm text-brown/60 leading-relaxed mb-6">
              {lang === "th"
                ? "ด้วยกระบวนการ Pyrolysis ชีวมวลที่เคยถูกเผาในทุ่งนากลายเป็นถ่านชีวภาพคุณภาพสูง ทุกการซื้อสินค้า หอมถิ่น คือการสนับสนุนโดยตรงแก่เกษตรกรในชุมชน"
                : "Through pyrolysis, agricultural residues become high-performance biochar. Every Hom Thin purchase directly supports the farming community that grows the materials."}
            </p>
            <Link href="/story" className="btn-ghost">
              {lang === "th" ? "อ่านเรื่องราวเพิ่มเติม" : "Read Our Story"}
            </Link>
          </div>

          {/* Flow diagram */}
          <div className="fade-in-up space-y-0">
            {[
              { step: "01", iconTH: "🌾", labelTH: "ชีวมวลเกษตร", labelEN: "Agricultural Biomass" },
              { step: "02", iconTH: "🔥", labelTH: "กระบวนการ Pyrolysis", labelEN: "Pyrolysis Process" },
              { step: "03", iconTH: "⬛", labelTH: "ถ่านชีวภาพ Biochar", labelEN: "Biochar Creation" },
              { step: "04", iconTH: "🌿", labelTH: "ผลิตภัณฑ์ หอมถิ่น", labelEN: "Hom Thin Product" },
              { step: "05", iconTH: "✨", labelTH: "อากาศบริสุทธิ์", labelEN: "Fresh Clean Air" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-5 py-4 border-b border-gold/15 last:border-0">
                <span className="text-[10px] tracking-widest text-gold/50">{item.step}</span>
                <span className="text-xl">{item.iconTH}</span>
                <span className="text-sm text-brown/70">
                  {lang === "th" ? item.labelTH : item.labelEN}
                </span>
                {i < 4 && (
                  <svg className="ml-auto text-gold/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 px-6 bg-cream-light border-t border-gold/20">
        <div className="max-w-xl mx-auto text-center fade-in-up">
          <h2 className="font-serif text-2xl text-brown mb-3">
            {lang === "th" ? "รับข่าวสารก่อนใคร" : "Be First to Know"}
          </h2>
          <p className="text-sm text-brown/50 mb-8">
            {lang === "th"
              ? "ติดตามการเปิดตัวกลิ่นใหม่และเรื่องราวจากชุมชน"
              : "Follow new provincial scent launches and community stories."}
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder={lang === "th" ? "อีเมลของคุณ" : "Your email address"}
              className="flex-1 px-4 py-3 bg-transparent border border-gold/30 text-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-gold"
            />
            <button className="px-6 py-3 bg-gold text-cream-light text-xs tracking-widest uppercase hover:bg-gold-dark transition-colors">
              {lang === "th" ? "ติดตาม" : "Subscribe"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
