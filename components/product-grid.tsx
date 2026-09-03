"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { products } from "@/lib/products";

function formatPrice(n: number) {
  return `A$${n.toFixed(2)}`;
}

export default function ProductGrid() {
  return (
    <section id="drop" className="border-b border-border bg-[#FCF5F4] py-20 sm:py-28">
      <ScrollReveal>
        <div className="flex items-end justify-between gap-6 bg-stark-white px-6 py-12">
          <div>
            <span
              className="block text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                color: "#BC0100",
              }}
            >
              COLLECTION // THE_ORIGIN_DROP
            </span>
            <h2
              className="mt-3 text-5xl uppercase leading-none tracking-tight text-black md:text-7xl"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              LATEST_DROPS
            </h2>
          </div>
          <a
            className="shrink-0 whitespace-nowrap border border-black px-6 py-3 text-xs uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-stark-white"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            href="/drop"
          >
            VIEW_ALL
          </a>
        </div>
      </ScrollReveal>

      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto border-y border-black/10 px-4 py-8 sm:px-6 lg:px-8">
        {products.map((product) => (
          <div
            key={product.slug}
            className="w-[82vw] flex-none snap-start sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  name,
  slug,
  price,
  salePrice,
  images,
}: {
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: string[];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden border border-black/15 bg-white">
      <Link
        href={`/drop/${slug}`}
        className="group flex aspect-[3/4] flex-col overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative flex-1 overflow-hidden bg-[#e8e8e8]">
          {salePrice && (
            <div className="absolute right-0 top-0 z-20 flex flex-col items-end p-3">
              <span className="bg-accent px-2 py-1 font-mono text-[10px] font-bold tracking-widest text-white">
                SALE 15% OFF
              </span>
            </div>
          )}
          <Image
            src={images[0]}
            alt={`ZENJI ${name} anime streetwear, front`}
            fill
            className={`object-cover object-top transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
          <Image
            src={images[1]}
            alt={`ZENJI ${name} anime streetwear, back`}
            fill
            className={`object-cover object-top transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 z-20 flex h-11 w-full translate-y-full items-center justify-center bg-black/85 transition-transform duration-300 group-hover:translate-y-0">
            <span className="font-mono text-[11px] uppercase tracking-widest text-white">
              QUICK VIEW →
            </span>
          </div>
        </div>

        <div className="border-t border-deep-black bg-stark-white px-4 py-4">
          <span
            className="block truncate text-sm uppercase tracking-widest text-black"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            {name}
          </span>
          <span
            className="mt-2 block text-2xl leading-none tracking-wide text-black"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            {salePrice ? formatPrice(salePrice) : formatPrice(price)}
          </span>
        </div>
      </Link>
    </div>
  );
}
