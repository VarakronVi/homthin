"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type CarouselProps = {
  images: { src: string; alt: string; bg?: string }[];
  autoPlay?: boolean;
  interval?: number;
  aspectRatio?: string;
};

export default function Carousel({
  images,
  autoPlay = true,
  interval = 3000,
  aspectRatio = "aspect-square",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Images */}
      <div className={`relative ${aspectRatio} w-full`}>
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: i === current ? 1 : 0,
              backgroundColor: img.bg || "#F0EBE0",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain p-6"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-cream-light/80 border border-gold/30 flex items-center justify-center text-brown opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-cream-light/80 border border-gold/30 flex items-center justify-center text-brown opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-gold w-4" : "bg-gold/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
