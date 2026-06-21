"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLangStore } from "@/lib/store";
import Link from "next/link";
import Carousel from "@/components/Carousel";

// Real documentary photos from the field
const philosophyCarousel = [
  { src: "/images/story/3.jpg", alt: "Team and farmers", bg: "#F0EBE0" },
  { src: "/images/story/1.jpg", alt: "Community ceremony", bg: "#EDE8DF" },
];

const technologyCarousel = [
  { src: "/images/story/5.jpg", alt: "Earth kiln in rice field", bg: "#E8EDE5" },
  { src: "/images/story/7.jpg", alt: "Biochar kiln contents", bg: "#E6EBE4" },
  { src: "/images/story/2.jpg", alt: "BioCycle Kiln handover to Nan community", bg: "#F0EBE0" },
  { src: "/images/story/4.jpg", alt: "Farmer training workshop", bg: "#EDE8DF" },
];

const impactCarousel = [
  { src: "/images/story/6.jpg", alt: "Biochar processing", bg: "#E8EDE5" },
  { src: "/images/story/8.jpg", alt: "Finished biochar product", bg: "#2C1810" },
  { src: "/images/story/2.jpg", alt: "Certificate ceremony", bg: "#F0EBE0" },
];

export default function StoryPage() {
  const { lang } = useLangStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream-light pt-24">

      {/* ── HERO ── */}
      <section className="relative py-32 px-6 bg-brown text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/story/3.jpg" alt="Hero" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-5">
            {lang === "th" ? "เรื่องราวของเรา" : "Our Story"}
          </p>
          <h1 className="font-serif text-cream" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.1 }}>
            {lang === "th" ? "วิสาหกิจสังคมที่แท้จริง" : "A True Social Enterprise"}
          </h1>
          <p className="text-cream/60 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            {lang === "th"
              ? "กำหนดนิยามใหม่ของคุณค่าจากการเก็บเกี่ยว · 16 ชุมชน · 8 จังหวัด"
              : "Redefining the Value of the Harvest · 16 Communities · 8 Provinces"}
          </p>
        </div>
      </section>

      {/* ── PART 1: PHILOSOPHY ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up border border-gold/20 overflow-hidden">
            <Carousel images={philosophyCarousel} interval={4000} aspectRatio="aspect-[4/3]" />
          </div>
          <div className="fade-in-up">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">01</p>
            <h2 className="section-title mb-6">
              {lang === "th" ? "กำหนดนิยามใหม่ของคุณค่าจากการเก็บเกี่ยว" : "Redefining the Value of the Harvest."}
            </h2>
            <div className="space-y-4 text-sm text-brown/70 leading-relaxed">
              <p>{lang === "th"
                ? "HOMTINN ไม่ได้ถูกสร้างขึ้นเพียงเพื่อเป็นแบรนด์ดีไซน์ แต่ถูกออกแบบมาเพื่อแก้ไขวิกฤตสิ่งแวดล้อมเชิงระบบ เราตระหนักว่าหมอกควัน PM2.5 ที่ปกคลุมภาคเหนือตามฤดูกาลไม่ได้เกิดจากความตั้งใจร้าย แต่เกิดจากปัญหาเชิงเศรษฐกิจ"
                : "HOMTINN was not built simply to exist as a design brand; it was engineered from the ground up to solve a systemic environmental crisis. We recognized that the seasonal PM 2.5 smog choking Northern Thailand wasn't a problem of malice, but of economics. We realized that to heal the sky, we first had to heal the supply chain."}</p>
              <p>{lang === "th"
                ? "เราไม่ได้มองกลุ่มสหกรณ์เกษตรกรว่าเป็นเพียงซัพพลายเออร์ แต่มองพวกเขาเป็นหุ้นส่วนที่สำคัญในวิสาหกิจสังคมแบบปิดวงจร เพื่อให้การสร้างผลิตภัณฑ์ wellness คุณภาพสูงส่งคืนรายได้สู่ชุมชนท้องถิ่นโดยตรง"
                : "We do not treat our farming cooperatives as mere suppliers. We treat them as vital partners in a closed-loop social enterprise, ensuring that the creation of premium household wellness directly funds the restoration of local communities."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2: TECHNOLOGY ── */}
      <section className="py-24 px-6 bg-cream-light border-t border-gold/20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up order-2 md:order-1">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">02</p>
            <h2 className="section-title mb-6">
              {lang === "th" ? "โครงการเตาดิน: ถ่ายทอดเทคโนโลยีสู่ชุมชน" : "The Earth Kiln Initiative: Transferring the Technology."}
            </h2>
            <div className="space-y-4 text-sm text-brown/70 leading-relaxed">
              <p>{lang === "th"
                ? "การเปลี่ยนจากการเผาในที่โล่งสู่การ upcycle อย่างยั่งยืนต้องการมากกว่าคำสั่ง ต้องการโครงสร้างพื้นฐานที่เข้าถึงได้จริง เราจัดเวิร์กชอปแบบลงมือทำในหมู่บ้าน และมอบเตา BioCycle Kiln ให้แก่ชุมชนเกษตรกร"
                : "The transition from open-field burning to sustainable upcycling requires more than just a mandate — it requires accessible infrastructure. We organize hands-on workshops and donate BioCycle Kilns directly to farming communities."}</p>
              <p>{lang === "th"
                ? "เทคโนโลยีเฉพาะพื้นที่นี้ช่วยให้เกษตรกรแปรรูปซังข้าวโพดและฟางในหลังบ้านตัวเองได้ โดยไม่ต้องพึ่งพาเครื่องจักรอุตสาหกรรมราคาแพง โครงการนี้ดำเนินงานครอบคลุม 16 ชุมชน ใน 8 จังหวัดของภาคเหนือและภาคกลาง"
                : "This localized technology allows farmers to process corn cobs and rice straw right in their own backyards. The program has operated across 16 communities in 8 provinces across Northern and Central Thailand."}</p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { th: "สำรวจและคัดเลือกพื้นที่ชุมชนเป้าหมาย 16 ชุมชน", en: "Survey & select 16 target communities" },
                { th: "ออกแบบและมอบเตา BioCycle Kiln ให้ชุมชน", en: "Design & donate BioCycle Kilns to communities" },
                { th: "ฝึกอบรมเชิงปฏิบัติการ — ผลิตไบโอชาร์จากฟางข้าว", en: "Hands-on training — produce biochar from rice straw" },
                { th: "ติดตามคุณภาพ PM2.5 และขยายผลสู่พื้นที่อื่น", en: "Monitor PM2.5 quality & scale to new areas" },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start text-sm">
                  <span className="text-gold/50 text-xs w-5 flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-brown/60">{lang === "th" ? step.th : step.en}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in-up order-1 md:order-2 border border-gold/20 overflow-hidden">
            <Carousel images={technologyCarousel} interval={3000} aspectRatio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ── PART 3: ECONOMICS ── */}
      <section className="py-24 px-6 bg-earth">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">03</p>
            <h2 className="font-serif text-cream text-3xl md:text-4xl mb-6">
              {lang === "th" ? "จาก 1 บาท สู่ 30 บาท:\nการเล่นแร่แปรธาตุแห่งของเสีย" : "From 1 Baht to 30 Baht:\nThe Alchemy of Waste."}
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed max-w-2xl mx-auto">
              {lang === "th"
                ? "มาหลายทศวรรษที่ชีวมวลดิบขายได้เพียง 1-2 บาทต่อกิโลกรัม ราคาที่ต่ำมากจนเกษตรกรต้องเผาทุ่งเพื่อเอาตัวรอด HOMTINN รับซื้อถ่านชีวภาพในราคาสูงถึง 30 บาทต่อกิโลกรัม เพิ่มมูลค่าถึงเกือบ 700%"
                : "For decades, raw biomass sold for a mere 1–2 Baht per kilogram. HOMTINN buys their premium kiln-fired biochar for up to 30 Baht per kilogram, multiplying the value of agricultural waste by nearly 700%."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              { value: "700%", labelEN: "Increase in Secondary\nFarmer Income", labelTH: "รายได้รองของเกษตรกร\nเพิ่มขึ้น" },
              { value: "50g", labelEN: "Biomass Intercepted\nPer HOMTINN Unit", labelTH: "ชีวมวลที่ถูกนำมาใช้\nต่อหน่วยผลิตภัณฑ์" },
              { value: "30฿", labelEN: "Per kg vs 1฿\nDirect to Farmer", labelTH: "ต่อกิโลกรัม vs 1฿\nโดยตรงสู่เกษตรกร" },
            ].map((stat, i) => (
              <div key={i} className="bg-earth py-10 px-8 text-center border border-cream/10 fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-serif text-5xl text-gold mb-3">{stat.value}</div>
                <p className="text-xs text-cream/50 whitespace-pre-line leading-relaxed">
                  {lang === "th" ? stat.labelTH : stat.labelEN}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PART 4: HUMAN IMPACT ── */}
      <section className="py-24 px-6 bg-cream-light border-t border-gold/20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="fade-in-up border border-gold/20 overflow-hidden">
            <Carousel images={impactCarousel} interval={3500} aspectRatio="aspect-[4/3]" />
          </div>
          <div className="fade-in-up">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">04</p>
            <h2 className="section-title mb-6">
              {lang === "th" ? "สร้างความเจริญรุ่งเรืองและศักดิ์ศรี" : "Cultivating Prosperity and Pride."}
            </h2>
            <div className="space-y-4 text-sm text-brown/70 leading-relaxed mb-8">
              <p>{lang === "th"
                ? "การเปลี่ยนแปลงเชิงเศรษฐกิจนี้ทำมากกว่าแค่ดักจับ PM2.5 มันส่งรายได้เสริมที่สำคัญสู่ครัวเรือนชนบทในช่วงฤดูแล้ง และคืนศักดิ์ศรีให้กับผู้ที่ปลูกอาหารให้เรา"
                : "This radical shift does far more than intercept PM 2.5. It injects vital income into rural households during the harsh dry season, and restores dignity to the cultivators of our land."}</p>
              <p>{lang === "th"
                ? "พวกเขาไม่ใช่แค่เกษตรกรที่แบกรับภาระของเสียอีกต่อไป พวกเขาคือช่างฝีมือแนวหน้าแห่งอากาศสะอาด"
                : "They are no longer just crop farmers burdened with waste — they are the frontline artisans of clean air."}</p>
            </div>

            {/* Research box */}
            <div className="border border-gold/20 p-6 bg-cream space-y-3">
              <p className="text-[9px] tracking-[0.3em] text-gold uppercase mb-4">
                {lang === "th" ? "ผลการวิจัย — 16 ชุมชน, 8 จังหวัด" : "Research Results — 16 Communities, 8 Provinces"}
              </p>
              {[
                { stat: "166 tons/year", th: "ลดการเผาชีวมวลในที่โล่งแจ้ง", en: "Agricultural residues saved from open burning" },
                { stat: "249 tons CO₂e", th: "ลดการปล่อยก๊าซเรือนกระจก", en: "Greenhouse gas emissions reduced" },
                { stat: "15–20 µg/m³", th: "ค่า PM2.5 ลดลงในพื้นที่เป้าหมาย", en: "PM2.5 reduction in target areas" },
                { stat: "4,500–8,500 ฿", th: "รายได้เสริมต่อเดือนต่อกลุ่มชุมชน", en: "Additional monthly income per community group" },
                { stat: "20–30%", th: "ลดการใช้ปุ๋ยเคมี", en: "Reduction in chemical fertilizer use" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 text-xs">
                  <span className="text-gold font-medium w-28 flex-shrink-0">{item.stat}</span>
                  <span className="text-brown/60">{lang === "th" ? item.th : item.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-16 bg-brown">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[10px] tracking-[0.4em] text-gold uppercase mb-8">
            {lang === "th" ? "จากพื้นที่จริง" : "From the Field"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 4, 5, 6].map((n, i) => (
              <div key={n} className="fade-in-up relative aspect-square overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                <Image
                  src={`/images/story/${n}.jpg`}
                  alt={`Field photo ${n}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="py-24 px-6 bg-cream-light border-t border-gold/20">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in-up text-center mb-12">
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-3">
              {lang === "th" ? "แผนการในอนาคต" : "Roadmap"}
            </p>
            <h2 className="section-title">
              {lang === "th" ? "วิสัยทัศน์ 77 จังหวัด" : "The 77 Provinces Vision"}
            </h2>
          </div>
          <div className="space-y-0">
            {[
              { year: "2025", th: "ทดสอบผลิตภัณฑ์และขยายพื้นที่ชุมชนเกษตรกร", en: "Product testing & expand farming community partnerships" },
              { year: "2026", th: "เปิดตัวบรรจุภัณฑ์และแบรนด์อย่างเป็นทางการ", en: "Official packaging & full brand launch" },
              { year: "2027", th: "พร้อมส่งออก — มูลค่าตลาดชีวภาพ USD 350B", en: "Export-ready — Bio-based market USD 350B" },
              { year: "2029", th: "ขยายคอลเลกชันครอบคลุม 77 จังหวัดของไทย", en: "Full collection covering all 77 Thai provinces" },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-8 py-6 border-b border-gold/15 last:border-0 fade-in-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="font-serif text-2xl text-gold/60 w-16 flex-shrink-0">{item.year}</span>
                <p className="text-sm text-brown/70 leading-relaxed self-center">
                  {lang === "th" ? item.th : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 px-6 bg-cream border-t border-gold/20">
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <p className="text-[10px] tracking-[0.4em] text-gold uppercase mb-4">
            {lang === "th" ? "ทีมผู้สร้างสรรค์" : "The Team"}
          </p>
          <h2 className="section-title mb-10">
            {lang === "th" ? "ผู้อยู่เบื้องหลัง HOMTINN" : "The People Behind HOMTINN"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["A. Khantachawana", "T. Jongkonpued", "K. Kenla", "N. Rodthong", "W. Methong"].map((name) => (
              <span key={name} className="text-sm text-brown/60 border border-gold/20 px-5 py-2.5">{name}</span>
            ))}
          </div>
          <p className="text-xs text-brown/40 mt-8 leading-relaxed">
            {lang === "th"
              ? "ร่วมมือกับเกษตรกรและชุมชนใน 8 จังหวัด:\nเชียงใหม่ · พะเยา · น่าน · เชียงราย · แพร่ · ลำปาง · ลำพูน · พระนครศรีอยุธยา"
              : "In partnership with farming communities across 8 provinces:\nChiang Mai · Phayao · Nan · Chiang Rai · Phrae · Lampang · Lamphun · Ayutthaya"}
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-brown text-center">
        <h2 className="font-serif text-cream text-2xl mb-6">
          {lang === "th" ? "พร้อมสนับสนุนเกษตรกรไทยไหม?" : "Ready to Support Thai Farmers?"}
        </h2>
        <Link href="/products" className="btn-primary !border-gold !text-cream hover:!bg-gold hover:!text-brown">
          {lang === "th" ? "ช้อปเลย" : "Shop HOMTINN Now"}
        </Link>
      </section>
    </div>
  );
}
