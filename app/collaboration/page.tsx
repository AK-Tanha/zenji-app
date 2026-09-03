import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaboration | ZENJI",
};

export default function CollaborationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-stark-white">
      <h1
        className="text-[56px] uppercase leading-none md:text-[80px]"
        style={{ fontFamily: "var(--font-anton), sans-serif" }}
      >
        COMING SOON
      </h1>
      <p
        className="mt-4 text-[12px] tracking-widest text-primary-red"
        style={{ fontFamily: "var(--font-jetbrains), monospace" }}
      >
        THIS SECTOR IS RESTRICTED
      </p>
      <Link
        href="/"
        className="mt-10 border border-white px-6 py-3 text-[12px] tracking-widest text-white transition-colors hover:border-primary-red hover:bg-primary-red"
        style={{ fontFamily: "var(--font-jetbrains), monospace" }}
      >
        RETURN_TO_BASE
      </Link>
    </main>
  );
}
