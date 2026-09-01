import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-border">
      <Image
        src="/background_2.webp"
        alt="ZENJI anime streetwear hero background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 grain" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-4 py-32 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 border border-white/20 bg-background/40 px-4 py-2 font-mono text-xs tracking-widest text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            SYSTEM // ZENJI
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-mono text-5xl font-bold leading-[0.95] tracking-tight drop-shadow-lg sm:text-7xl lg:text-8xl">
            WEAR YOUR
            <br />
            STORY
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/drop"
              className="group inline-flex items-center gap-3 border border-white px-8 py-4 font-mono text-sm tracking-widest backdrop-blur-sm transition-colors hover:bg-white hover:text-background"
            >
              SHOP THE DROP
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="font-mono text-xs tracking-widest text-white/40">
              力 — AWAKENING
            </span>
          </div>
        </ScrollReveal>

        <span className="pointer-events-none absolute -right-4 bottom-[-10rem] hidden select-none font-mono text-[22rem] font-bold leading-none text-white/[0.04] lg:block">
          力
        </span>
      </div>
    </section>
  );
}
