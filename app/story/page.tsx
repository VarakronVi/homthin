"use client";

import { useEffect } from "react";
import { useLangStore } from "@/lib/store";
import Link from "next/link";

export default function StoryPage() {
  const { lang } = useLangStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream-light pt-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-brown text-center">
        <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-4">
          {lang === "th" ? "เรื่องราวของเรา" : "Our Story"}
        </p>
        <h1 className="font-serif text-cream" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
          {lang === "th" ? "ทำไมถึงเป็น\nหอมถิ่น?" : "Why\nHom Thin?"}
        </h1>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto fade-in-up">
          <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">01</p>
          <h2 className="section-title mb-6">
            {lang === "th" ? "ปัญหาที่เราเห็น" : "The Problem We Saw"}
          </h2>
          <div className="space-y-4 text-brown/70 text-sm leading-relaxed">
            <p>
              {lang === "th"
                ? "ทุกปีประเทศไทยสูญเสียชีวมวลการเกษตรกว่า 17 ล้านตัน ไปกับการเผาในที่โล่ง ควันเหล่านี้ก่อให้เกิดฝุ่น PM2.5 ถึง 40% ของทั้งหมดในประเทศ ส่งผลต่อสุขภาพประชาชนและสิ่งแวดล้อมโดยตรง"
                : "Every year, Thailand loses over 17 million tons of agricultural biomass to open-field burning. This burning contributes to 40% of the country's PM2.5 pollution — a direct threat to public health and the environment."}
            </p>
            <p>
              {lang === "th"
                ? "เกษตรกรเป็นเจ้าของทรัพยากรเหล่านี้ แต่ไม่มีทางเปลี่ยนมันให้เป็นรายได้ ชีวมวลจึงกลายเป็นภาระ ไม่ใช่ทรัพย์สิน"
                : "Farmers own these resources but have no way to monetize them. Biomass becomes a burden — not an asset."}
            </p>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-20 px-6 bg-cream-light border-t border-gold/20">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in-up">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">02</p>
            <h2 className="section-title mb-6">
              {lang === "th" ? "นวัตกรรมของเรา" : "Our Innovation"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {[
              {
                material: "Biochar",
                iconTH: "⬛",
                sourceTH: "จากชีวมวลเกษตรผ่าน Pyrolysis",
                sourceEN: "From agricultural biomass via pyrolysis",
                roleTH: "ดูดซับกลิ่นไม่พึงประสงค์ด้วยโครงสร้างรูพรุนระดับนาโน",
                roleEN: "Absorbs bad odors through nano-porous structure",
              },
              {
                material: "PLA",
                iconTH: "🌿",
                sourceTH: "Polylactic Acid จากพืชธรรมชาติ",
                sourceEN: "Polylactic Acid from plant-based sources",
                roleTH: "ปล่อยกลิ่นหอมแท้ๆ จากพืชพรรณไทยท้องถิ่น",
                roleEN: "Releases authentic Thai botanical fragrances",
              },
            ].map((item) => (
              <div key={item.material} className="fade-in-up border border-gold/20 p-8 bg-cream">
                <div className="text-3xl mb-4">{item.iconTH}</div>
                <h3 className="font-serif text-xl text-brown mb-1">{item.material}</h3>
                <p className="text-xs text-gold tracking-wider mb-4">
                  {lang === "th" ? item.sourceTH : item.sourceEN}
                </p>
                <p className="text-sm text-brown/60 leading-relaxed">
                  {lang === "th" ? item.roleTH : item.roleEN}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 bg-earth">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">03</p>
          <h2 className="font-serif text-3xl text-cream mb-6">
            {lang === "th" ? "ชุมชนคือหัวใจ" : "Community is the Heart"}
          </h2>
          <p className="text-sm text-cream/60 leading-relaxed mb-8">
            {lang === "th"
              ? "ชีวมวลทุกชิ้นที่เราใช้ถูกซื้อโดยตรงจากเกษตรกรในพื้นที่ ทุกครั้งที่คุณซื้อ หอมถิ่น เงินส่วนหนึ่งกลับสู่ชุมชนเกษตรกรโดยตรง"
              : "Every piece of biomass we use is purchased directly from local farmers. Every Hom Thin purchase means a portion of revenue returns directly to the farming community."}
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { labelTH: "เกษตรกร", labelEN: "Farmers", descTH: "แหล่งวัตถุดิบ", descEN: "Raw material source" },
              { labelTH: "ชุมชน", labelEN: "Community", descTH: "รายได้หมุนเวียน", descEN: "Revenue circulates" },
              { labelTH: "โลก", labelEN: "Planet", descTH: "PM2.5 ลดลง", descEN: "PM2.5 reduced" },
            ].map((item) => (
              <div key={item.labelEN} className="border border-cream/20 p-4">
                <p className="font-serif text-cream text-lg">{lang === "th" ? item.labelTH : item.labelEN}</p>
                <p className="text-xs text-cream/40 mt-1">{lang === "th" ? item.descTH : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-cream-light border-t border-gold/20">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in-up mb-12 text-center">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">04</p>
            <h2 className="section-title">
              {lang === "th" ? "แผนการในอนาคต" : "Roadmap"}
            </h2>
          </div>
          <div className="space-y-0">
            {[
              { year: "2025", th: "ทดสอบผลิตภัณฑ์และสูตรกลิ่นใหม่", en: "Product testing & new scent formulas" },
              { year: "2026", th: "เปิดตัวบรรจุภัณฑ์และแบรนด์อย่างเป็นทางการ", en: "Official packaging & brand launch" },
              { year: "2027", th: "พร้อมส่งออกสู่ตลาดต่างประเทศ", en: "Export-ready for international markets" },
              { year: "2029", th: "ขยายไลน์ผลิตภัณฑ์ครอบคลุม 77 จังหวัด", en: "Expand to cover all 77 Thai provinces" },
            ].map((item, i) => (
              <div key={item.year} className={`flex gap-8 py-6 border-b border-gold/15 last:border-0 fade-in-up`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="font-serif text-2xl text-gold/60 w-16 flex-shrink-0">{item.year}</span>
                <p className="text-sm text-brown/70 leading-relaxed self-center">
                  {lang === "th" ? item.th : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-cream border-t border-gold/20">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">
            {lang === "th" ? "ทีมงาน" : "The Team"}
          </p>
          <h2 className="section-title mb-10">
            {lang === "th" ? "ผู้สร้างสรรค์" : "The Creators"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["A. Khantachawana", "T. Jongkonpued", "K. Kenla", "N. Rodthong", "W. Methong"].map((name) => (
              <span key={name} className="text-sm text-brown/60 border border-gold/20 px-4 py-2">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-brown text-center">
        <h2 className="font-serif text-cream text-2xl mb-6">
          {lang === "th" ? "พร้อมสัมผัสกลิ่นแห่งถิ่น?" : "Ready to Smell Your Place?"}
        </h2>
        <Link href="/products" className="btn-primary !border-gold !text-cream hover:!bg-gold hover:!text-brown">
          {lang === "th" ? "เลือกซื้อสินค้า" : "Shop Now"}
        </Link>
      </section>
    </div>
  );
}
