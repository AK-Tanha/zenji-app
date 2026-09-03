"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { products } from "@/lib/products";

function formatPrice(n: number) {
  return `A$${n.toFixed(2)}`;
}

const filters = ["ALL", "SALE", "NEW_ARRIVAL", "LIMITED", "ZANGETSU"];

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesFilter =
        activeFilter === "ALL" ||
        (activeFilter === "SALE" && p.salePrice != null) ||
        p.badge === activeFilter;
      if (!matchesFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        (p.colorway ?? "").toLowerCase().includes(q)
      );
    });
  }, [activeFilter, query]);

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
            THE_ORIGIN_DROP // COMPLETE ARCHIVE
          </span>
          <h1
            className="text-[56px] uppercase leading-none md:text-[96px]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <span className="block">
              <LineMask word="ANIME" /> <LineMask word="GRAPHIC" />{" "}
              <LineMask word="TEES" /> <LineMask word="—" />
            </span>
            <span className="block">
              <LineMask word="THE" /> <LineMask word="FULL" />{" "}
              <LineMask word="COLLECTION" />
            </span>
          </h1>
          <p
            className="mt-6 text-[14px] text-white/40"
            style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
          >
            Every drop. Every arc. Documented.
          </p>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-1/2 z-0 hidden -translate-y-1/2 select-none text-[200px] leading-none md:block"
          style={{ fontFamily: "var(--font-anton), sans-serif", color: "rgba(255,255,255,0.04)" }}
        >
          10
        </span>
        <div
          className="relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          <span className="text-[11px] text-white/30">
            10 PIECES // THE_ORIGIN_DROP // EST_2024
          </span>
          <span className="text-[11px] text-white/30">AUSTRALIA-WIDE SHIPPING</span>
        </div>
      </section>

      <div
        className="sticky top-[69px] z-40 flex flex-col items-start gap-2 border-b border-black bg-stark-white sm:flex-row sm:items-center sm:justify-between sm:gap-4"
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
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <label htmlFor="collection-search" className="sr-only">
            Search the collection
          </label>
          <input
            id="collection-search"
            placeholder="SEARCH..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[44px] w-full border border-black/20 bg-transparent px-3 py-2 text-[11px] uppercase text-black placeholder:text-black/30 focus:border-black focus:outline-none sm:w-[180px]"
            type="search"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          />
          <span
            className="whitespace-nowrap text-[11px] text-black/40"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            {filtered.length} ITEMS
          </span>
        </div>
      </div>

      <section className="mx-auto w-full max-w-container-max px-margin-mobile py-16 md:px-margin-desktop" style={{ backgroundColor: "#FDFBFA" }}>
        {filtered.length === 0 ? (
          <p
            className="py-16 text-center text-xs uppercase tracking-widest text-white/40"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            NO MATCHES IN THIS SECTOR
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.slug} delay={(i % 4) * 80}>
                <CollectionCard product={product} index={i} />
              </ScrollReveal>
            ))}
          </div>
        )}
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
            <LineMask word="MORE" /> <LineMask word="DROPS" />{" "}
            <LineMask word="COMING" />
          </span>
        </h2>
        <p
          className="mb-8 text-[12px] tracking-widest text-primary-red"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          AWAKENING // REDACTED
        </p>
        <form className="mx-auto flex max-w-[480px] flex-col gap-4 sm:flex-row sm:items-center">
          <input
            required
            placeholder="ENTER_EMAIL //"
            type="email"
            className="w-full flex-1 border-b border-white/30 bg-transparent py-3 text-[13px] text-white placeholder:text-white/30 focus:border-white focus:outline-none sm:w-auto"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 text-[14px] uppercase text-stark-white transition-colors hover:!bg-[#930100] sm:w-auto"
            tabIndex={0}
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              backgroundColor: "rgb(188, 1, 0)",
            }}
          >
            NOTIFY ME
          </button>
        </form>
      </section>
    </div>
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

function CollectionCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const onSale = product.salePrice != null;
  const sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";
  return (
    <div className="flex flex-col overflow-hidden border border-deep-black bg-stark-white">
      <Link
        href={`/drop/${product.slug}`}
        className="group flex aspect-[2/3] flex-col overflow-hidden sm:aspect-[3/4]"
      >
        <div className="relative flex-1 overflow-hidden bg-[#e8e8e8]">
          {onSale && (
            <span
              className="absolute z-20 text-center uppercase text-white"
              style={{
                top: "22px",
                left: "-30px",
                width: "120px",
                padding: "4px 0",
                transform: "rotate(-45deg)",
                fontSize: "9px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                backgroundColor: "rgb(188, 1, 0)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              SALE 15% OFF
            </span>
          )}
          {product.badge && (
            <div className="absolute right-0 top-0 z-20 flex flex-col items-end">
              <span
                className="px-2 py-1 text-[10px] uppercase tracking-widest text-white"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  backgroundColor: "rgb(188, 1, 0)",
                }}
              >
                {product.badge}
              </span>
            </div>
          )}
          <Image
            src={product.images[0]}
            alt={`ZENJI ${product.name} anime streetwear, front`}
            fill
            className="object-cover object-top opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            sizes={sizes}
            loading="lazy"
          />
          <Image
            src={product.images[1] ?? product.images[0]}
            alt={`ZENJI ${product.name} anime streetwear, back`}
            fill
            className="object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            sizes={sizes}
            loading="lazy"
          />
          <div
            className="absolute bottom-0 left-0 z-20 flex h-11 w-full translate-y-full items-center justify-center transition-transform duration-300 group-hover:translate-y-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          >
            <span
              className="text-[11px] uppercase tracking-widest text-stark-white"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              QUICK VIEW →
            </span>
          </div>
        </div>
        <div className="border-t border-deep-black bg-stark-white px-4 py-4">
          <span
            className="block truncate text-sm uppercase tracking-widest text-black"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            {product.name}
          </span>
          <div className="mt-2 flex flex-col gap-1">
            {onSale ? (
              <>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs tracking-wider text-gray-400 line-through"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {formatPrice(product.price)}
                  </span>
                </div>
                <span
                  className="text-2xl leading-none tracking-wide text-primary-red"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {formatPrice(product.salePrice!)}
                </span>
              </>
            ) : (
              <span
                className="text-2xl leading-none tracking-wide text-black"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <div className="flex w-full">
          <button
            type="button"
            aria-pressed={false}
            aria-label={`Add ${product.name} to wishlist`}
            className="flex w-1/2 items-center justify-center rounded-none border border-black bg-white py-3 text-[13px] uppercase tracking-widest text-black transition-none hover:bg-gray-100"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <span className="sm:hidden" aria-hidden="true">
              <HeartIcon />
            </span>
            <span className="hidden sm:inline">♡ WISHLIST</span>
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="flex w-1/2 items-center justify-center rounded-none bg-black py-3 text-[13px] uppercase tracking-widest text-white transition-none hover:bg-[#BC0100]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <span className="sm:hidden" aria-hidden="true">
              <CartIcon />
            </span>
            <span className="hidden sm:inline">ADD TO CART →</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-4 w-4" aria-hidden="true">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart h-4 w-4" aria-hidden="true">
      <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" />
      <path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  );
}
