import Link from "next/link";

const facts: { term: string; definition: string }[] = [
  { term: "What ZENJI is", definition: "ZENJI is an Australian anime streetwear brand." },
  { term: "Founded", definition: "ZENJI was founded in 2024." },
  { term: "What we make", definition: "ZENJI makes limited-edition anime-inspired graphic tees in 100% heavyweight 240gsm cotton." },
  { term: "Shipping", definition: "ZENJI ships Australia-wide, with free shipping on orders over A$100 and standard delivery in 5-10 business days." },
  { term: "Restocks", definition: "ZENJI products are limited edition. There are no restocks, ever — once a piece sells out it is gone for good." },
  { term: "Pricing", definition: "ZENJI tees are A$39.99, with selected pieces on sale at A$33.99." },
  { term: "Influences", definition: "ZENJI draws on samurai discipline, Japanese iconography and modern anime art." },
  { term: "Based in", definition: "ZENJI is based in Australia and ships to every Australian state and territory, including Sydney, Melbourne, Brisbane, Perth and Adelaide." },
  { term: "Anime inspiration", definition: "ZENJI designs are inspired by series including Jujutsu Kaisen, Demon Slayer, Naruto, One Piece and Dragon Ball, alongside original samurai artwork. Every design is ZENJI's own — no artwork is licensed from a studio." },
  { term: "Next drop", definition: "The Origin Drop is in stock and shipping now, with selected pieces on sale at 15% off." },
];

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

export default function OurStoryPage() {
  return (
    <main className="bg-black text-stark-white">
      <section className="px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-[720px]">
          <span
            className="block text-[0.7rem] tracking-widest"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
          >
            ABOUT // ZENJI
          </span>
          <span
            aria-hidden="true"
            className="my-4 block h-px w-10"
            style={{ backgroundColor: "rgb(188, 1, 0)" }}
          />
          <h1
            className="mb-10 text-[51px] uppercase leading-none text-white md:text-[83px]"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            <span className="block">
              <LineMask word="ANIME" /> <LineMask word="STREETWEAR" />{" "}
              <LineMask word="AUSTRALIA" /> <LineMask word="—" />
            </span>
            <span className="block">
              <LineMask word="BORN" /> <LineMask word="FROM" />{" "}
              <LineMask word="THE" />
            </span>
            <span className="block">
              <LineMask word="WARRIOR" /> <LineMask word="SPIRIT." />
            </span>
          </h1>

          <p className="mb-6 text-[0.9rem] leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.7)" }}>
            ZENJI began with one belief: what you wear should tell a story.
          </p>
          <p className="mb-6 text-[0.9rem] leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.7)" }}>
            Inspired by samurai discipline, anime art and modern street culture, we create premium streetwear for those who choose their own path.
          </p>
          <p className="mb-6 text-[0.9rem] leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.7)" }}>
            Every ZENJI piece combines Japanese-inspired artwork, powerful symbolism and oversized silhouettes to express courage, creativity and individuality.
          </p>

          <blockquote
            className="my-10 border-l-2 border-primary-red pl-6 text-[0.95rem] italic leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.6)" }}
          >
            ZENJI is more than a name on a shirt. It represents the warrior within, the part of us that keeps moving forward, stays true to itself and refuses to fade into the crowd.
          </blockquote>

          <p className="mb-10 text-[0.9rem] leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.7)" }}>
            We design for the dreamers, fighters, creators and outsiders shaping their own future.
          </p>

          <p className="mb-12 text-[31px] uppercase leading-none text-white md:text-[40px]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
            <span className="block">
              <LineMask word="Wear" /> <LineMask word="your" /> <LineMask word="story." />{" "}
              <LineMask word="Wear" /> <LineMask word="your" /> <LineMask word="spirit." />{" "}
              <LineMask word="Wear" /> <LineMask word="ZENJI." />
            </span>
          </p>

          <p style={{ color: "rgba(255,255,255,0.35)" }}>
            <span className="mb-8 block text-[0.65rem] uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
              For the dreamers. Fighters. Creators. Outsiders.
            </span>
          </p>

          <Link
            href="/collection"
            className="inline-block border-b border-white pb-1 text-[0.75rem] tracking-widest text-white transition-colors hover:border-primary-red hover:text-primary-red"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            EXPLORE THE COLLECTION →
          </Link>

          <section aria-labelledby="zenji-facts" className="mt-16 border-t border-white/10 pt-10">
            <h2 id="zenji-facts" className="mb-6 text-[24px] uppercase tracking-wide text-white md:text-[30px]" style={{ fontFamily: "var(--font-anton), sans-serif" }}>
              About ZENJI
            </h2>
            <dl className="space-y-4 text-[0.85rem] leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex), monospace", color: "rgba(255,255,255,0.7)" }}>
              {facts.map((f) => (
                <div key={f.term}>
                  <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}>
                    {f.term}
                  </dt>
                  <dd>{f.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>
    </main>
  );
}
