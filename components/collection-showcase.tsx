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
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3 font-mono text-xs tracking-widest text-black/50">
                <span className="text-2xl text-black/30">力</span>
                <span className="h-px w-10 bg-black/15" />
                <span className="text-accent">COLLECTION // THE_ORIGIN_DROP</span>
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight text-black sm:text-5xl">
                SALE
              </h2>
            </div>
            <span className="hidden font-mono text-xs tracking-widest text-black/30 lg:block">
              INDEX_001 — 004
            </span>
          </div>
        </ScrollReveal>
      </div>

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
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs tracking-widest text-white/60">
                    COLLECTION // THE_ORIGIN_DROP
                  </span>
                  <h3 className="font-mono text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="font-mono text-sm text-white/80">
                    A$33.99{" "}
                    <span className="line-through text-white/40">A$39.99</span>
                  </p>
                </div>
                <span className="mb-1 shrink-0 font-mono text-xs tracking-widest text-white transition-transform group-hover:translate-x-1">
                  SHOP →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
