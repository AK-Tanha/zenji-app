"use client";

import Image from "next/image";

export default function Waitlist() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://zenji.shop/background_2.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-50"
      />
      <div className="scanlines grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* MANIFESTO header */}
        <div className="mb-16 flex flex-col gap-5">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
            <span className="h-px w-8 bg-accent/60" />
            <span>MANIFESTO_001</span>
          </div>
          <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl">
            <span className="block text-white">THE</span>
            <span className="block text-accent">ZENJI</span>
            <span className="block text-white">ETHOS</span>
          </h2>
          <p className="text-base leading-relaxed text-foreground/50 sm:text-sm max-w-sm font-mono">
            We exist at the intersection of technical precision and cultural
            expression. Our garments are engineered for those navigating an
            increasingly fragmented world, built from Japanese craftsmanship,
            anime culture and modern Australian streetwear.
          </p>
        </div>

        
      </div>
    </section>
  );
}
