"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { cloudinaryBase } from "@/lib/products";

type Look = {
  slug: string;
  name: string;
  badge: string;
  view: "FRONT" | "BACK" | "ON MODEL";
  file: string;
};

const img = (file: string) => `${cloudinaryBase}/${file}`;

const looks: Look[] = [
  { slug: "bushido-tee", name: "BUSHIDO TEE", badge: "LIMITED", view: "ON MODEL", file: "Bushido-5.webp" },
  { slug: "free-soul-tee", name: "FREE SOUL TEE", badge: "LIMITED", view: "FRONT", file: "Free-soul-1.webp" },
  { slug: "demon-blood-tee", name: "DEMON BLOOD TEE", badge: "SALE", view: "ON MODEL", file: "Demon-blood-5.webp" },
  { slug: "domain-expansion-tee", name: "DOMAIN EXPANSION TEE", badge: "THE_ORIGIN_DROP", view: "BACK", file: "Domain-expansion-2.webp" },
  { slug: "domain-expansion-tee", name: "DOMAIN EXPANSION TEE", badge: "THE_ORIGIN_DROP", view: "ON MODEL", file: "Domain-expansion-5.webp" },
  { slug: "water-breathing-tee", name: "WATER BREATHING TEE", badge: "NEW_ARRIVAL", view: "FRONT", file: "Water-breathing-1.webp" },
  { slug: "will-of-the-sun-tee", name: "WILL OF THE SUN TEE", badge: "SALE", view: "BACK", file: "Will-of-the-sun-2.webp" },
  { slug: "limitless-tee", name: "LIMITLESS TEE", badge: "LIMITED", view: "BACK", file: "Limitless-2.webp" },
  { slug: "water-breathing-tee", name: "WATER BREATHING TEE", badge: "NEW_ARRIVAL", view: "BACK", file: "Water-breathing-2.webp" },
  { slug: "blue-flame-tee", name: "BLUE FLAME TEE", badge: "SALE", view: "FRONT", file: "Blue-flame-1.webp" },
  { slug: "paradise-spirit-tee", name: "PARADISE SPIRIT TEE", badge: "THE_ORIGIN_DROP", view: "FRONT", file: "Paradise-spirit-1.webp" },
  { slug: "demon-blood-tee", name: "DEMON BLOOD TEE", badge: "SALE", view: "FRONT", file: "Demon-blood-1.webp" },
  { slug: "will-of-the-sun-tee", name: "WILL OF THE SUN TEE", badge: "SALE", view: "FRONT", file: "Will-of-the-sun-1.webp" },
  { slug: "bushido-tee", name: "BUSHIDO TEE", badge: "LIMITED", view: "FRONT", file: "Bushido-1.webp" },
  { slug: "demon-blood-tee", name: "DEMON BLOOD TEE", badge: "SALE", view: "BACK", file: "Demon-blood-2.webp" },
  { slug: "domain-expansion-tee", name: "DOMAIN EXPANSION TEE", badge: "THE_ORIGIN_DROP", view: "FRONT", file: "Domain-expansion-1.webp" },
  { slug: "limitless-tee", name: "LIMITLESS TEE", badge: "LIMITED", view: "ON MODEL", file: "Limitless-5.webp" },
  { slug: "will-of-the-sun-tee", name: "WILL OF THE SUN TEE", badge: "SALE", view: "ON MODEL", file: "Will-of-the-sun-5.webp" },
  { slug: "warrior-spirit-tee", name: "WARRIOR SPIRIT TEE", badge: "SALE", view: "ON MODEL", file: "Warrior-spirit-1.webp" },
  { slug: "blue-flame-tee", name: "BLUE FLAME TEE", badge: "SALE", view: "ON MODEL", file: "Blue-flame-5.webp" },
  { slug: "bushido-tee", name: "BUSHIDO TEE", badge: "LIMITED", view: "BACK", file: "Bushido-2.webp" },
  { slug: "warrior-spirit-tee", name: "WARRIOR SPIRIT TEE", badge: "SALE", view: "BACK", file: "Warrior-spirit-4.webp" },
  { slug: "paradise-spirit-tee", name: "PARADISE SPIRIT TEE", badge: "THE_ORIGIN_DROP", view: "BACK", file: "Paradise-spirit-2.webp" },
  { slug: "free-soul-tee", name: "FREE SOUL TEE", badge: "LIMITED", view: "BACK", file: "Free-soul-2.webp" },
  { slug: "warrior-spirit-tee", name: "WARRIOR SPIRIT TEE", badge: "SALE", view: "FRONT", file: "Warrior-spirit-2.webp" },
  { slug: "paradise-spirit-tee", name: "PARADISE SPIRIT TEE", badge: "THE_ORIGIN_DROP", view: "ON MODEL", file: "Paradise-spirit-5.webp" },
  { slug: "water-breathing-tee", name: "WATER BREATHING TEE", badge: "NEW_ARRIVAL", view: "ON MODEL", file: "Water-breathing-5.webp" },
  { slug: "limitless-tee", name: "LIMITLESS TEE", badge: "LIMITED", view: "FRONT", file: "Limitless-1.webp" },
  { slug: "blue-flame-tee", name: "BLUE FLAME TEE", badge: "SALE", view: "BACK", file: "Blue-flame-2.webp" },
  { slug: "free-soul-tee", name: "FREE SOUL TEE", badge: "LIMITED", view: "ON MODEL", file: "Free-soul-5.webp" },
];

const filters = ["ALL", "FRONT", "BACK", "ON MODEL"];

export default function LookbookPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = useMemo(() => {
    return activeFilter === "ALL"
      ? looks
      : looks.filter((l) => l.view === activeFilter);
  }, [activeFilter]);

  return (
    <div className="flex flex-col bg-black">
      <section
        className="relative overflow-hidden bg-black text-stark-white"
        style={{ padding: "120px 6% 80px" }}
      >
        <div className="relative z-10">
          <span
            className="mb-4 block text-[10px] tracking-widest text-primary-red"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            THE_ORIGIN_DROP // EDITORIAL
          </span>
          <h1
            className="text-[64px] uppercase leading-none md:text-[120px]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <span className="block">
              <LineMask word="ANIME" /> <LineMask word="STREETWEAR" />{" "}
              <LineMask word="—" />
            </span>
            <span className="block">
              <LineMask word="LOOK" />
            </span>
            <span className="block">
              <LineMask word="BOOK" />
            </span>
          </h1>
          <p
            className="mt-6 text-[14px] text-white/40"
            style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
          >
            The Origin Drop, The Full Visual Archive
          </p>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-1/2 z-0 hidden -translate-y-1/2 select-none text-[200px] leading-none md:block"
          style={{ fontFamily: "var(--font-anton), sans-serif", color: "rgba(255,255,255,0.03)" }}
        >
          2024
        </span>
        <div
          className="relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          <span className="text-[11px] text-white/30">10 PIECES // THE_ORIGIN_DROP</span>
          <span className="text-[11px] text-white/30">ANIME STREETWEAR // AUSTRALIA</span>
        </div>
      </section>

      <div
        className="sticky top-0 z-10 flex flex-col items-start gap-2 border-b border-black bg-stark-white sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        style={{ padding: "20px 6%" }}
      >
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`flex min-h-[44px] items-center border px-4 py-2 text-[11px] uppercase transition-colors duration-150 ${
                  active
                    ? "bg-black text-stark-white"
                    : "bg-transparent text-black hover:border-black"
                }`}
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  borderColor: active ? "rgb(0,0,0)" : "rgba(0,0,0,0.2)",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
        <span
          className="text-[11px] text-black/40"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          {filtered.length} IMAGES
        </span>
      </div>

      <section className="bg-stark-white" style={{ padding: "48px 6%" }}>
        <div className="columns-2 gap-4 md:columns-3">
          {filtered.map((look) => (
            <ScrollReveal
              key={`${look.slug}-${look.file}`}
              className="mb-4 break-inside-avoid"
            >
              <LookCard look={look} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        className="text-center text-stark-white"
        style={{ backgroundColor: "rgb(0,0,0)", padding: "80px 6%" }}
      >
        <h2
          className="mb-4 text-[40px] uppercase md:text-[64px]"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          <span className="block">
            <LineMask word="SHOP" /> <LineMask word="THE" />{" "}
            <LineMask word="COLLECTION" />
          </span>
        </h2>
        <p
          className="mb-8 text-[14px] text-white/40"
          style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
        >
          Every piece from The Origin Drop, limited stock.
        </p>
        <Link
          href="/collection"
          className="inline-block px-12 py-4 text-[16px] uppercase text-stark-white transition-colors hover:!bg-[#930100]"
          style={{ fontFamily: "var(--font-anton), sans-serif", backgroundColor: "rgb(188, 1, 0)" }}
        >
          SHOP NOW
        </Link>
      </section>
    </div>
  );
}

function LookCard({ look }: { look: Look }) {
  return (
    <Link
      href={`/drop/${look.slug}`}
      className="group relative block overflow-hidden"
    >
      <div>
        <Image
          alt={`ZENJI ${look.name} anime streetwear, ${look.view.toLowerCase()}`}
          loading="lazy"
          width={800}
          height={1000}
          decoding="async"
          src={img(look.file)}
          sizes="(max-width: 767px) 50vw, 33vw"
          style={{ color: "transparent", width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-4 transition-colors duration-300 group-hover:bg-black/70">
        <span
          className="text-[10px] uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          {look.badge}
        </span>
        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p
            className="text-[20px] uppercase text-white"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            {look.name}
          </p>
          <p className="text-[10px] text-white/50" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
            {look.view}
          </p>
          <p className="mt-2 text-[11px] text-primary-red" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
            VIEW PRODUCT →
          </p>
        </div>
      </div>
    </Link>
  );
}

function LineMask({ word }: { word: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
        paddingBottom: "0.15em",
        marginBottom: "-0.15em",
      }}
    >
      <span data-word="true" style={{ display: "inline-block" }}>
        {word}
      </span>
    </span>
  );
}
