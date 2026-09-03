import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";
import { collectionFeatured } from "@/lib/products";

export default function CollectionShowcase() {
  return (
    <section
      id="collection"
      className="relative flex flex-col border-b border-border bg-[#FFFFFF]"
    >
      <ScrollReveal>
        <div className="flex items-end justify-between bg-stark-white px-6 py-12">
          <div>
            <span
              className="block text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                color: "#BC0100",
              }}
            >
              COLLECTION // THE_ORIGIN_DROP
            </span>
            <h2
              className="mt-3 text-5xl uppercase leading-none tracking-tight text-black md:text-7xl"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              SALE
            </h2>
          </div>
          <a
            className="shrink-0 whitespace-nowrap border border-black px-6 py-3 text-xs uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-stark-white"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
            href="/collection"
          >
            VIEW_ALL
          </a>
        </div>
      </ScrollReveal>

      <div className="mx-auto w-full max-w-7xl py-20 sm:px-6 lg:px-8">

      <div className="relative">
        {collectionFeatured.map((item, i) => (
          <div
            key={item.slug}
            className="sticky flex h-screen items-center justify-center"
            style={{ top: `${i * 6}vh`, zIndex: i + 1 }}
          >
            <Link
              href={`/drop/${item.slug}`}
              className="group relative mx-auto block aspect-[4/3] w-[min(94vw,900px)] overflow-hidden border border-black/10 bg-white shadow-2xl"
            >
              <Image
                src={item.image}
                alt={`ZENJI ${item.name} anime streetwear graphic`}
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                sizes="1000px"
              />
              <span className="absolute left-4 top-4 font-mono text-xs tracking-widest text-white/80 mix-blend-difference">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                  padding: "2rem",
                }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#BC0100" }}
                >
                  COLLECTION{" "}
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>
                    // THE_ORIGIN_DROP
                  </span>
                </span>
                <span
                  className="mt-2 block text-[32px] uppercase leading-none text-white transition-colors group-hover:text-[#BC0100] md:text-[40px]"
                  style={{ fontFamily: "var(--font-anton), sans-serif" }}
                >
                  {item.name}
                </span>
                <span
                  className="mt-5 inline-block w-fit border-b pb-1 text-[11px] uppercase tracking-widest text-white transition-colors group-hover:border-[#BC0100] group-hover:text-[#BC0100]"
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    borderColor: "currentColor",
                  }}
                >
                  SHOP {item.name} →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
