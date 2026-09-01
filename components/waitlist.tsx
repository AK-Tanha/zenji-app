"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-01T00:00:00+10:00").getTime();

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Waitlist() {
  const [time, setTime] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="scanlines grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* MANIFESTO header */}
        <div className="mb-16 flex flex-col gap-4">
          <span className="reveal is-visible inline-flex items-center gap-3 font-mono text-xs tracking-widest text-accent">
            <span className="h-px w-8 bg-accent/60" />
            MANIFESTO_001
          </span>
          <h2 className="reveal is-visible font-mono text-4xl font-bold tracking-tight sm:text-6xl">
            THE ZENJI ETHOS
          </h2>
          <p className="reveal is-visible max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            We exist at the intersection of technical precision and cultural
            expression. Our garments are engineered for those navigating an
            increasingly fragmented world, built from Japanese craftsmanship,
            anime culture and modern Australian streetwear.
          </p>
          <span className="reveal is-visible font-mono text-3xl text-foreground/15 sm:text-5xl">
            力 ZENJI
          </span>
        </div>

        {/* Countdown */}
        <div className="relative rounded-none border border-border bg-background/60 p-8 backdrop-blur-sm sm:p-12">
          <span className="mb-6 flex items-center gap-2 font-mono text-xs tracking-widest text-foreground/50">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            INCOMING TRANSMISSION // AWAKENING
          </span>
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
            {units.map((u) => (
              <div
                key={u.label}
                className="flex flex-col items-center gap-1 bg-background py-8"
              >
                <span className="font-mono text-4xl font-bold tabular-nums sm:text-6xl">
                  {pad(u.value)}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-foreground/40">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between font-mono text-xs tracking-widest text-foreground/50">
            <span>01 DECEMBER 2026 — AUSTRALIA</span>
            <span className="text-foreground/30">AWAKENING // IS COMING</span>
          </div>
        </div>

        {/* Waitlist */}
        <div className="mt-px grid gap-10 border border-border bg-background/40 p-8 backdrop-blur-sm sm:p-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest text-accent">
              GET EARLY ACCESS
            </span>
            <h3 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
              JOIN THE WAITLIST.
            </h3>
            <p className="text-sm leading-relaxed text-foreground/60">
              Be first to shop Awakening. Exclusive early access + pre-drop
              discount for waitlist members.
            </p>
          </div>
          <form
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubmitted(true);
            }}
          >
            {submitted ? (
              <p className="font-mono text-sm tracking-widest text-accent">
                ✓ ENLISTED. SEE YOU AT THE DROP.
              </p>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL ADDRESS"
                  className="w-full border border-white/15 bg-background/40 px-4 py-3.5 font-mono text-sm tracking-wider outline-none placeholder:text-foreground/40 focus:border-white/50"
                />
                <button
                  type="submit"
                  className="group flex shrink-0 items-center justify-center gap-2 border border-foreground px-6 py-3.5 font-mono text-sm tracking-widest transition-colors hover:bg-foreground hover:text-background"
                >
                  JOIN THE WAITLIST
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
