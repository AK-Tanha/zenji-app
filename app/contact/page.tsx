"use client";

import { useState } from "react";

const subjects = [
  "ORDER ENQUIRY",
  "RETURN REQUEST",
  "SIZING QUESTION",
  "COLLABORATION",
  "PRESS",
  "OTHER",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-black text-stark-white">
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <h1
          className="pb-2 pt-24 text-6xl uppercase tracking-widest text-white"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          CONTACT
        </h1>
        <p
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
        >
          WE READ EVERY MESSAGE.
        </p>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-full"
          style={{ backgroundColor: "rgb(188, 1, 0)" }}
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <section
              aria-labelledby="ct-support"
              className="rounded-none border border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#BC0100]/50"
            >
              <p
                id="ct-support"
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
              >
                <span aria-hidden="true" className="mr-2">
                  ✉
                </span>
                SUPPORT
              </p>
              <p
                className="mt-3 text-lg uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                support@zenji.shop
              </p>
              <p
                className="mt-2 text-sm text-gray-400"
                style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
              >
                Orders, returns, sizing questions
              </p>
              <p
                className="mt-3 text-xs text-gray-500"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                RESPONSE: 2 BUSINESS DAYS
              </p>
              <a
                href="mailto:support@zenji.shop"
                className="mt-5 inline-flex min-h-[44px] items-center rounded-none px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:!bg-[#930100]"
                style={{
                  fontFamily: "var(--font-anton), sans-serif",
                  backgroundColor: "rgb(188, 1, 0)",
                }}
              >
                EMAIL US →
              </a>
            </section>

            <section
              aria-labelledby="ct-collabs"
              className="rounded-none border border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#BC0100]/50"
            >
              <p
                id="ct-collabs"
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
              >
                <span aria-hidden="true" className="mr-2">
                  ✦
                </span>
                COLLABS &amp; PRESS
              </p>
              <p
                className="mt-3 text-lg uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                collabs@zenji.shop
              </p>
              <p
                className="mt-2 text-sm text-gray-400"
                style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
              >
                Brand deals, creator partnerships, press enquiries
              </p>
              <p
                className="mt-3 text-xs text-gray-500"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                RESPONSE: 3-5 BUSINESS DAYS
              </p>
              <a
                href="mailto:collabs@zenji.shop"
                className="mt-5 inline-flex min-h-[44px] items-center rounded-none border border-white px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                style={{ fontFamily: "var(--font-anton), sans-serif" }}
              >
                GET IN TOUCH →
              </a>
            </section>

            <section
              aria-labelledby="ct-social"
              className="rounded-none border border-white/10 bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#BC0100]/50"
            >
              <p
                id="ct-social"
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
              >
                FOLLOW THE LORE
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-3 text-sm text-stark-white transition-colors hover:text-primary-red"
                    style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                  >
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      INSTAGRAM
                    </span>
                    @zenji_.shop
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@zenji_.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-3 text-sm text-stark-white transition-colors hover:text-primary-red"
                    style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                  >
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      TIKTOK
                    </span>
                    @zenji_.shop
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/ZENJI/61592433253702/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-3 text-sm text-stark-white transition-colors hover:text-primary-red"
                    style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                  >
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      FACEBOOK
                    </span>
                    ZENJI
                  </a>
                </li>
              </ul>
              <p
                className="mt-3 text-sm text-gray-400"
                style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
              >
                DMs open on Instagram
              </p>
            </section>
          </div>

          <div>
            <h2
              className="mb-6 text-2xl uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              SEND A MESSAGE
            </h2>

            {submitted ? (
              <div className="border border-primary-red bg-[#0A0A0A] p-8 text-center">
                <p
                  className="text-2xl uppercase tracking-widest text-white"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  MESSAGE RECEIVED
                </p>
                <p
                  className="mt-4 text-sm text-gray-400"
                  style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                >
                  Transmission logged. We&apos;ll respond within 2 business days.
                </p>
              </div>
            ) : (
              <form
                style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="mb-6">
                  <label
                    htmlFor="ct-name"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    NAME
                  </label>
                  <input
                    id="ct-name"
                    required
                    autoComplete="name"
                    placeholder="YOUR NAME"
                    name="name"
                    className="w-full rounded-none border border-white/20 bg-black p-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="ct-email"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    EMAIL
                  </label>
                  <input
                    id="ct-email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="YOU@EMAIL.COM"
                    name="email"
                    className="w-full rounded-none border border-white/20 bg-black p-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="ct-order"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    ORDER NUMBER (OPTIONAL)
                  </label>
                  <input
                    id="ct-order"
                    placeholder="Leave blank if no order"
                    name="orderNumber"
                    className="w-full rounded-none border border-white/20 bg-black p-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="ct-subject"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    SUBJECT
                  </label>
                  <select
                    id="ct-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-none border border-white/20 bg-black p-3 text-sm text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  >
                    <option value="" disabled>
                      SELECT A SUBJECT
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="ct-message"
                    className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="ct-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="TELL US EVERYTHING."
                    className="w-full resize-y rounded-none border border-white/20 bg-black p-3 text-sm leading-relaxed text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-none py-4 text-base uppercase tracking-widest text-white transition-colors hover:!bg-[#930100] disabled:cursor-not-allowed disabled:opacity-60"
                  style={{
                    fontFamily: "var(--font-anton), sans-serif",
                    backgroundColor: "rgb(188, 1, 0)",
                  }}
                >
                  SEND MESSAGE →
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <p
            className="text-xs tracking-widest text-white"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            BEFORE YOU EMAIL —
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-[44px] items-center rounded-none border border-white/20 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
              href="/faq"
              style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
            >
              FAQ →
            </a>
            <a
              className="inline-flex min-h-[44px] items-center rounded-none border border-white/20 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
              href="/return-policy"
              style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
            >
              RETURN POLICY →
            </a>
            <a
              className="inline-flex min-h-[44px] items-center rounded-none border border-white/20 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
              href="/faq"
              style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
            >
              SIZE GUIDE →
            </a>
            <a
              href="mailto:support@zenji.shop?subject=TRACK%20ORDER%20%E2%80%94%20%5BOrder%20Number%5D"
              className="inline-flex min-h-[44px] items-center rounded-none border border-white/20 px-4 py-2 text-xs text-white transition-colors duration-200 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
            >
              TRACK ORDER →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
