"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const saleSlugs = [
  "blue-flame-tee",
  "demon-blood-tee",
  "warrior-spirit-tee",
  "will-of-the-sun-tee",
];

function formatPrice(n: number) {
  return `A$${n.toFixed(2)}`;
}

const timerUnits = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
const elapsed = ["00", "00", "00", "00"];

export default function DropPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const saleProducts = saleSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <main className="bg-white">
      <section
        className="relative w-full overflow-hidden bg-black"
        style={{ height: "70vh", minHeight: "460px" }}
      >
        <Image
          src="/background_2.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.25) contrast(1.1)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[6%] text-center">
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              color: "#BC0100",
              letterSpacing: "0.4em",
            }}
            className="mb-6 flex items-center gap-3 text-[10px] uppercase"
          >
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: "#BC0100" }}
            />
            INCOMING TRANSMISSION
          </span>
          <h1
            style={{ fontFamily: "var(--font-anton), sans-serif", lineHeight: 1 }}
            className="uppercase text-white"
          >
            <span className="block text-[56px] leading-none md:text-[120px]">
              <span className="block">
                <LineMask word="AWAKENING" />
              </span>
            </span>
            <span
              className="block text-[56px] leading-none md:text-[120px]"
              style={{ color: "#BC0100" }}
            >
              <span className="block">
                <LineMask word="IS" /> <LineMask word="COMING." />
              </span>
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex), monospace",
              color: "rgba(255,255,255,0.5)",
            }}
            className="mt-6 text-[14px]"
          >
            The next chapter begins. Are you ready?
          </p>
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              color: "rgba(255,255,255,0.3)",
            }}
            className="mt-4 text-[11px] tracking-widest"
          >
            DROP DATE: 01 SEPT 2026
          </p>
        </div>
      </section>

      <div aria-hidden="true" className="h-px w-full" style={{ backgroundColor: "#BC0100", opacity: 0.5 }} />

      <section className="relative overflow-hidden bg-white" style={{ padding: "100px 6%" }}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(188,1,0,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          }}
        />
        <div className="relative">
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              color: "#BC0100",
              letterSpacing: "0.3em",
            }}
            className="mb-12 flex items-center justify-center gap-3 text-xs uppercase"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: "#BC0100" }}
            />
            AWAKENING // IS COMING
          </p>
          <div
            className="mx-auto grid max-w-[640px] grid-cols-2 justify-center gap-3 md:flex md:max-w-none md:gap-6"
            role="timer"
            aria-live="off"
            aria-label="Time remaining until the Awakening drop"
          >
            {timerUnits.map((unit, i) => (
              <div key={unit} className="flex items-center justify-center">
                <div
                  className="w-full px-3 py-4 sm:px-4 sm:py-7 md:w-[160px]"
                  style={{
                    borderRadius: 0,
                    background: "transparent",
                    border: "1px solid #BC0100",
                    boxShadow: "0 0 20px rgba(188,1,0,0.3)",
                  }}
                >
                  <span
                    style={{ fontFamily: "var(--font-anton), sans-serif" }}
                    className="block text-center text-4xl leading-none text-black sm:text-5xl md:text-7xl"
                  >
                    {elapsed[i]}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    className="mt-3 block text-center text-xs uppercase tracking-widest text-gray-400"
                  >
                    {unit}
                  </span>
                </div>
                {i < 3 && (
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-anton), sans-serif",
                      color: "#BC0100",
                    }}
                    className="mx-2 hidden self-center text-4xl md:inline"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
          <p
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
            className="mt-14 text-center text-2xl uppercase tracking-widest text-black"
          >
            THE DROP IS COMING
          </p>
          <p
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            className="mt-3 text-center text-xs uppercase tracking-widest text-gray-500"
          >
            01 SEPTEMBER 2026 — AUSTRALIA
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/collection"
              className="drop-cta inline-block rounded-none px-10 py-4 text-[16px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              THE WAIT IS OVER — ENTER THE ARCHIVE →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="scroll-mt-24 bg-white px-5 py-[60px] md:px-[6%] md:py-20"
        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
      >
        <div className="mx-auto max-w-[600px] text-center">
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              color: "#BC0100",
              letterSpacing: "0.3em",
            }}
            className="mb-4 text-xs uppercase"
          >
            GET EARLY ACCESS
          </p>
          <h2
            className="mb-4 text-[40px] uppercase text-black md:text-[64px]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <span className="block">
              <LineMask word="JOIN" /> <LineMask word="THE" />{" "}
              <LineMask word="WAITLIST." />
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex), monospace",
              lineHeight: 1.7,
            }}
            className="mb-10 text-[13px] text-gray-500"
          >
            Be first to shop Awakening. Exclusive early access + pre-drop discount
            for waitlist members.
          </p>
          {submitted ? (
            <p
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              className="text-[12px] uppercase tracking-widest text-primary-red"
            >
              TRANSMISSION RECEIVED. YOU ARE ON THE LIST.
            </p>
          ) : (
            <form
              noValidate
              className="flex flex-col gap-0 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Your email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  fontFamily: "var(--font-ibm-plex), monospace",
                  height: 56,
                  padding: "0 20px",
                }}
                className="waitlist-input min-h-[56px] flex-1 rounded-none border border-black bg-white text-[13px] text-black placeholder:text-black/35 focus:outline-none sm:border-r-0"
              />
              <button
                type="submit"
                className="drop-cta rounded-none text-[16px] uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-anton), sans-serif",
                  height: 56,
                  padding: "0 32px",
                }}
              >
                JOIN THE WAITLIST →
              </button>
            </form>
          )}
        </div>
      </section>

      <div aria-hidden="true" className="h-px w-full" style={{ backgroundColor: "#BC0100", opacity: 0.5 }} />

      <section className="bg-white" style={{ padding: "80px 6%" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            color: "#BC0100",
            letterSpacing: "0.3em",
          }}
          className="mb-4 text-xs uppercase"
        >
          THE_ORIGIN_DROP // STILL AVAILABLE
        </p>
        <h2
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
          className="mb-2 text-[36px] uppercase text-black md:text-[48px]"
        >
          WHILE YOU WAIT.
        </h2>
        <p
          style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
          className="mb-10 text-[13px] text-gray-500"
        >
          Shop The Origin Drop, our current collection.
        </p>

        <section className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24"
            style={{
              background:
                "linear-gradient(to right, rgba(250,248,244,1) 0%, rgba(250,248,244,0) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24"
            style={{
              background:
                "linear-gradient(to left, rgba(250,248,244,1) 0%, rgba(250,248,244,0) 100%)",
            }}
          />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-margin-mobile pb-6 [justify-content:safe_center] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6 md:px-margin-desktop">
            {saleProducts.map((product) => (
              <DropCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/collection"
            className="inline-block border-b border-black pb-1 text-[11px] tracking-widest text-black transition-colors hover:border-primary-red hover:text-primary-red"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            VIEW FULL COLLECTION →
          </Link>
        </div>
      </section>

      <div aria-hidden="true" className="h-px w-full" style={{ backgroundColor: "#BC0100", opacity: 0.5 }} />

      <section
        className="flex flex-col items-center justify-between gap-3 bg-black sm:flex-row"
        style={{ padding: "40px 6%" }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            color: "rgba(255,255,255,0.3)",
          }}
          className="text-[11px]"
        >
          ZENJI // AWAKENING_REDACTED
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            color: "rgba(255,255,255,0.3)",
          }}
          className="text-[11px]"
        >
          NO RESTOCKS. EVER.
        </span>
      </section>
    </main>
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

function DropCard({ product }: { product: (typeof products)[number] }) {
  const onSale = product.salePrice != null;
  const sizes =
    "(max-width: 640px) 82vw, (max-width: 768px) 46vw, (max-width: 1024px) 33vw, 25vw";
  return (
    <div className="w-[82vw] flex-none snap-start sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
      <div className="flex flex-col overflow-hidden border border-deep-black bg-stark-white">
        <Link
          href={`/drop/${product.slug}`}
          className="group flex aspect-[2/3] flex-col overflow-hidden sm:aspect-[3/4]"
        >
          <div className="relative flex-1 overflow-hidden bg-[#e8e8e8]">
            {onSale && (
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  position: "absolute",
                  top: 22,
                  left: -30,
                  width: 120,
                  padding: "4px 0",
                  transform: "rotate(-45deg)",
                  textAlign: "center",
                  fontSize: 9,
                  fontWeight: "bold",
                  backgroundColor: "#BC0100",
                  color: "#fff",
                  letterSpacing: "0.5px",
                  zIndex: 20,
                }}
                className="uppercase"
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
      </div>
    </div>
  );
}
