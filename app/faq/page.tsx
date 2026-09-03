"use client";

import { useState } from "react";

type Faq = { section: string; items: { q: string; a: string }[] };

const faqs: Faq[] = [
  {
    section: "ORDERS & SHIPPING",
    items: [
      {
        q: "Do you ship Australia-wide?",
        a: "Yes. Free shipping on all orders over A$100, otherwise A$9.99 flat. Standard delivery 5-10 business days.",
      },
      {
        q: "Do you ship internationally?",
        a: "Not yet. Australia only for now. International drops coming Season 03.",
      },
      {
        q: "Can I change or cancel my order?",
        a: "Orders are final once placed. No changes, no cancellations. Every drop is limited.",
      },
      {
        q: "How do I track my order?",
        a: "Tracking link sent via email once dispatched. Check spam if not received.",
      },
    ],
  },
  {
    section: "STOCK & DROPS",
    items: [
      {
        q: "When does my order ship?",
        a: "Every piece is in stock and ships now. Standard delivery 5-10 business days.",
      },
      {
        q: "Will sold-out pieces restock?",
        a: "No restocks. Ever. Once a piece is gone it is gone.",
      },
      {
        q: "How long does a sale run?",
        a: "Until the discounted pieces sell through. No restocks, so the sale ends with the stock.",
      },
    ],
  },
  {
    section: "PRODUCTS",
    items: [
      {
        q: "What sizes do you offer?",
        a: "XS / S / M / L / XL / XXL. Oversized fit — size down if unsure.",
      },
      {
        q: "Are the designs limited?",
        a: "Every piece is limited. No restocks. Once it's gone, it's gone.",
      },
      {
        q: "How do I care for my ZENJI tee?",
        a: "Cold wash inside out. No tumble dry. Hang dry only. Iron inside out low heat.",
      },
      {
        q: "What material are the tees?",
        a: "100% heavyweight cotton 240gsm. Oversized streetwear cut.",
      },
    ],
  },
  {
    section: "RETURNS & REFUNDS",
    items: [
      {
        q: "Do you accept returns?",
        a: "We accept returns on unworn, unwashed items within 14 days of delivery. Sale items are final sale — no change-of-mind returns.",
      },
      {
        q: "My item arrived damaged — what do I do?",
        a: "Email support@zenji.shop with order number + photo. We'll sort it.",
      },
      {
        q: "How long do refunds take?",
        a: "5-10 business days after we receive the return.",
      },
    ],
  },
  {
    section: "BRAND",
    items: [
      {
        q: "What is ZENJI?",
        a: "ZENJI is an Australian anime-inspired streetwear brand founded in 2024, creating limited-edition graphic tees inspired by Japanese culture, samurai discipline and anime art.",
      },
      {
        q: "Where does ZENJI ship?",
        a: "ZENJI ships Australia-wide. Free shipping on orders over A$100. Standard delivery is 5-10 business days.",
      },
      {
        q: "Does ZENJI restock products?",
        a: "No. All ZENJI drops are limited edition. No restocks. Ever. Once a piece sells out it is gone for good.",
      },
      {
        q: "What anime series does ZENJI draw inspiration from?",
        a: "ZENJI draws on Japanese culture, samurai tradition and modern anime art. The Origin Drop designs include Blue Flame, Bushido, Demon Blood, Domain Expansion, Water Breathing and Limitless.",
      },
      {
        q: "How much do ZENJI products cost?",
        a: "ZENJI tees are A$39.99, with selected pieces on sale at A$33.99. Free shipping on orders over A$100.",
      },
      {
        q: "Where is ZENJI based?",
        a: "Australia. Built for those who wear their story.",
      },
      {
        q: "How do I stay updated on new drops?",
        a: "Follow @zenji_.shop on Instagram and @zenji_.shop on TikTok. Join the waitlist on the Drop page.",
      },
      {
        q: "Can I collaborate with ZENJI?",
        a: "Email us at collabs@zenji.shop.",
      },
    ],
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id));

  return (
    <main className="bg-black text-stark-white">
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <h1
          className="pb-4 pt-24 text-6xl uppercase tracking-widest text-white"
          style={{ fontFamily: "var(--font-anton), sans-serif" }}
        >
          FAQ
        </h1>
        <p
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "rgb(188, 1, 0)" }}
        >
          EVERYTHING YOU NEED TO KNOW
        </p>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-full"
          style={{ backgroundColor: "rgb(188, 1, 0)" }}
        />

        {faqs.map((group) => (
          <section key={group.section}>
            <h2
              className="mb-6 mt-16 border-l-[3px] border-primary-red pl-4 text-xl uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--font-anton), sans-serif" }}
            >
              {group.section}
            </h2>
            {group.items.map((item) => {
              const id = `${group.section}-${item.q}`;
              const isOpen = open === id;
              return (
                <div key={id} className="border-b border-white/10">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${id}`}
                      onClick={() => toggle(id)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm tracking-wide text-white transition-colors hover:text-primary-red"
                      style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                    >
                      <span>{item.q}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-xl leading-none text-primary-red"
                        style={{ fontFamily: "var(--font-anton), sans-serif" }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="pb-4 pt-2 text-sm leading-relaxed text-gray-400"
                      style={{ fontFamily: "var(--font-ibm-plex), monospace" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        ))}

        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <h2
            className="text-2xl uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-anton), sans-serif" }}
          >
            STILL HAVE QUESTIONS?
          </h2>
          <a
            href="mailto:support@zenji.shop"
            className="mt-4 inline-block text-xs tracking-widest text-primary-red transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            EMAIL US AT SUPPORT@ZENJI.SHOP
          </a>
        </div>
      </div>
    </main>
  );
}
