import ScrollReveal from "@/components/scroll-reveal";

export default function Hero() {
  return (
    <section className="relative flex -mt-[76px] min-h-[95vh] items-center overflow-hidden border-b border-border">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/background_2.webp"
      >
        <source src="https://zenji.shop/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-12 left-[6%] z-10 max-w-[90%]">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#BC0100] animate-pulse-dot" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#BC0100]">
              THE_ORIGIN_DROP // LOADING.
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display text-[clamp(52px,8vw,80px)] uppercase leading-none text-white">
            <span>
              WEAR YOUR
              <br />
            </span>
            <span>STORY</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8">
            <a
              href="/drop"
              className="inline-block w-auto rounded-none bg-[#BC0100] px-8 py-4 text-[16px] uppercase text-white transition-colors duration-200 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              SHOP THE DROP →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}