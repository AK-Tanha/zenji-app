"use client";

import { useState } from "react";

const animeOptions = [
  "Jujutsu Kaisen",
  "Demon Slayer",
  "One Piece",
  "Naruto",
  "Dragon Ball",
  "Other",
];

export default function AnimePopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="anime-popup-title"
        className="relative max-h-[90dvh] w-full max-w-[420px] overflow-y-auto border border-white/10 p-6 text-center sm:p-8"
        style={{ background: "rgb(10, 10, 10)", zIndex: 99998 }}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-4 flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center border border-white/25 bg-transparent text-white/50 transition-colors duration-150 hover:border-white/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <div className="mb-6 flex justify-center">
          <span
            aria-label="ZENJI"
            className="inline-block select-none text-4xl uppercase leading-none tracking-[-0.02em] text-stark-white"
            style={{
              fontFamily: "var(--font-anton), 'Anton', sans-serif",
              fontWeight: 400,
              clipPath:
                "polygon(0px 14%, 9% 0px, 100% 0px, 100% 86%, 91% 100%, 0px 100%)",
            }}
          >
            ZENJI
          </span>
        </div>

        <h2
          id="anime-popup-title"
          className="mb-3 text-[28px] uppercase leading-none text-white"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          FREE SHIPPING ON FIRST ORDER
        </h2>

        <p
          className="mb-8 text-xs uppercase tracking-widest text-gray-400"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          CHOOSE YOUR FIGHTER
        </p>

        <div className="flex flex-col" style={{ gap: "10px" }}>
          {animeOptions.map((anime) => (
            <button
              key={anime}
              type="button"
              className="w-full border border-white py-3 text-[13px] uppercase tracking-widest text-white transition-none hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            >
              {anime}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
