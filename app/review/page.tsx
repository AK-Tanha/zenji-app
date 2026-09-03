"use client";

import { useState } from "react";

const productOptions = [
  "blue-flame-tee",
  "bushido-tee",
  "demon-blood-tee",
  "domain-expansion-tee",
  "free-soul-tee",
  "limitless-tee",
  "paradise-spirit-tee",
  "warrior-spirit-tee",
  "water-breathing-tee",
  "will-of-the-sun-tee",
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#374151" aria-hidden="true" className="h-[1em] w-[1em] shrink-0">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  );
}

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const tags = [
    "TRUE TO SIZE",
    "RUNS SMALL",
    "RUNS LARGE",
    "PREMIUM QUALITY",
    "FAST SHIPPING",
    "GREAT PACKAGING",
    "WORTH THE WAIT",
  ];

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  return (
    <main className="bg-black text-stark-white">
      <header className="border-b border-white/10 pb-8 pt-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <h1
            className="text-6xl uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            REVIEWS
          </h1>
          <p
            className="mt-2 text-xs tracking-[0.3em]"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
          >
            WHAT THE COMMUNITY SAYS
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <section
          aria-label="Rating summary"
          aria-busy="false"
          className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[auto_1fr_auto] lg:gap-16"
        >
          <div>
            <p
              className="text-8xl leading-none text-white"
              aria-hidden="true"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              —
            </p>
            <p
              className="mt-2 text-xs tracking-widest text-gray-400"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              OUT OF 5
            </p>
            <span
              role="img"
              aria-label="0 out of 5 stars"
              className="mt-4 inline-flex items-center gap-0.5 leading-none text-2xl"
            >
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <p
              className="mt-3 text-xs text-gray-500"
              style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
            >
              Based on 0 reviews
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            {["5", "4", "3", "2", "1"].map((star) => (
              <div key={star} className="flex items-center gap-4">
                <span
                  className="w-8 shrink-0 text-xs text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {star}★
                </span>
                <div
                  role="progressbar"
                  aria-label={`${star} star reviews`}
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-1.5 flex-1 bg-white/10"
                >
                  <div
                    className="h-full bg-[#EAB308] transition-[width] duration-500"
                    style={{ width: "0%" }}
                  />
                </div>
                <span
                  className="w-10 shrink-0 text-right text-xs text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  0%
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["0", "PUBLISHED REVIEWS"],
              ["—", "AVERAGE RATING"],
              ["0%", "FIVE STAR"],
              ["0%", "RECOMMEND"],
            ].map(([value, label]) => (
              <div key={label} className="border border-white/20 px-6 py-5 lg:min-w-[140px]">
                <p
                  className="text-3xl leading-none text-white"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {value}
                </p>
                <p
                  className="mt-2 text-[9px] tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {["ALL", "5★", "4★", "3★", "VERIFIED"].map((filter) => {
                const active = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                      active
                        ? "bg-white text-black"
                        : "border border-white/20 text-white hover:border-white/50"
                    }`}
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className="text-xs uppercase tracking-wider text-gray-400 transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              NEWEST FIRST ↓
            </button>
          </div>
          <p
            className="mt-4 text-[10px] tracking-widest text-gray-500"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            SHOWING 0 OF 0
          </p>
          <p
            className="mt-12 text-sm text-gray-500"
            style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
          >
            No reviews published yet. Be the first.
          </p>
        </section>

        <section className="mb-24 mt-16 border border-primary-red bg-[#0A0A0A] p-8">
          <h2
            className="text-2xl uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            LEAVE YOUR VERDICT
          </h2>
          <p
            className="mt-2 text-xs tracking-widest text-gray-400"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            VERIFIED PURCHASES ONLY
          </p>
          <form
            className="mt-8"
            style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="rv-name"
                  className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  NAME
                </label>
                <input
                  id="rv-name"
                  required
                  placeholder="FIRST L."
                  name="name"
                  className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="rv-email"
                  className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  EMAIL
                </label>
                <input
                  id="rv-email"
                  required
                  type="email"
                  placeholder="YOU@EMAIL.COM"
                  name="email"
                  className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="rv-product"
                  className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  PRODUCT PURCHASED
                </label>
                <select
                  id="rv-product"
                  required
                  name="product"
                  defaultValue=""
                  className="w-full appearance-none border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT A PIECE
                  </option>
                  {productOptions.map((o) => (
                    <option key={o} value={o}>
                      {o.toUpperCase().replace(/-/g, " ")}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="rv-order"
                  className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  ORDER NUMBER
                </label>
                <input
                  id="rv-order"
                  required
                  placeholder="ZJ-000000"
                  name="orderNumber"
                  className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <span
                className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                STAR RATING
              </span>
              <div className="flex items-center gap-3">
                <div className="flex gap-1 text-2xl">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`Rate ${n} out of 5`}
                      aria-pressed={rating >= n}
                      onClick={() => setRating(n)}
                      className="leading-none transition-transform hover:scale-110 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill={rating >= n ? "#EAB308" : "#374151"}
                        aria-hidden="true"
                        className="h-[1em] w-[1em] shrink-0"
                      >
                        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
                      </svg>
                    </button>
                  ))}
                </div>
                <span
                  className="text-[10px] tracking-widest text-gray-500"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {rating ? `${rating} OUT OF 5` : "SELECT A RATING"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="rv-title"
                className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                REVIEW TITLE
              </label>
              <input
                id="rv-title"
                required
                placeholder="SUM IT UP IN A LINE"
                name="title"
                className="w-full border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="rv-text"
                className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                YOUR REVIEW
              </label>
              <textarea
                id="rv-text"
                required
                name="text"
                rows={5}
                placeholder="FIT, FABRIC, PRINT, SHIPPING — TELL US EVERYTHING."
                className="w-full resize-y border border-white/20 bg-black px-4 py-3 text-sm leading-relaxed text-white placeholder:text-white/30 focus:border-white focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <span
                className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                TAGS (OPTIONAL)
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 text-[10px] uppercase tracking-wider transition-colors ${
                        active
                          ? "border border-white bg-white text-black"
                          : "border border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
                      }`}
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-4 text-base uppercase tracking-widest text-white transition-colors hover:!bg-[#930100] disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                backgroundColor: "rgb(188, 1, 0)",
              }}
            >
              SUBMIT REVIEW →
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
