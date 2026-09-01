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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3 font-mono text-xs tracking-widest text-black/50">
                <span className="text-2xl text-black/30">力</span>
                <span className="h-px w-10 bg-black/15" />
                <span className="text-accent">COLLECTION // THE_ORIGIN_DROP</span>
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight text-black sm:text-5xl">
                LATEST_DROPS
              </h2>
            </div>
            <Link
              href="/drop"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-black/60 transition-colors hover:text-black"
            >
              VIEW_ALL
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

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

        <div className="border-t border-black/10 bg-white px-4 py-4">
          <span className="block truncate font-mono text-sm uppercase tracking-widest text-black">
            {name}
          </span>
          <span className="mt-2 block font-mono text-2xl leading-none tracking-wide text-black">
            {salePrice ? (
              <>
                {formatPrice(salePrice)}
                <span className="ml-2 text-sm text-black/40 line-through">
                  {formatPrice(price)}
                </span>
              </>
            ) : (
              formatPrice(price)
            )}
          </span>
        </div>
      </Link>
    </div>
  );
}
