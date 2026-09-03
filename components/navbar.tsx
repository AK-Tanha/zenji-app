"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/drop", label: "DROP" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/lookbook", label: "LOOKBOOK" },
  { href: "/our-story", label: "OUR STORY" },
];

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 2h2l2.4 12h8.6l2-8H6" />
      <circle cx="10" cy="17" r="1.2" />
      <circle cx="15" cy="17" r="1.2" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M2 21c0-4.4 4.5-8 10-8s10 3.6 10 8" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  const linkClasses = (href: string) =>
    `nav-link-glow font-label-caps text-label-caps md:tracking-[0.04em] xl:tracking-[0.1em] transition-colors ${
      isActive(href)
        ? "is-active"
        : "text-white opacity-80 hover:opacity-100"
    }`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <Link href="/" className="flex min-h-[44px] items-center gap-4">
          <span
            aria-label="ZENJI"
            className="inline-block select-none uppercase leading-none text-stark-white text-4xl tracking-[-0.02em] md:text-2xl xl:text-4xl"
            style={{
              fontFamily: "var(--font-anton), 'Anton', sans-serif",
              fontWeight: 400,
              clipPath: "polygon(0 14%, 9% 0, 100% 0, 100% 86%, 91% 100%, 0 100%)",
              WebkitClipPath:
                "polygon(0 14%, 9% 0, 100% 0, 100% 86%, 91% 100%, 0 100%)",
            }}
          >
            ZENJI
          </span>
        </Link>

        <div className="hidden items-center gap-4 md:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
              className="nav-link-glow font-label-caps text-label-caps md:tracking-[0.04em] xl:tracking-[0.1em] transition-colors text-white opacity-80 hover:opacity-100"
            >
              MORE <span aria-hidden="true">∨</span>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 border border-white/40 bg-deep-black px-4 py-2">
                <Link
                  href="/collaboration"
                  className="nav-link-glow block whitespace-nowrap py-2 font-label-caps text-label-caps tracking-[0.1em] text-white opacity-80 transition-colors hover:opacity-100"
                >
                  COLLABORATION
                </Link>
                <Link
                  href="/review"
                  className="nav-link-glow block whitespace-nowrap py-2 font-label-caps text-label-caps tracking-[0.1em] text-white opacity-80 transition-colors hover:opacity-100"
                >
                  REVIEW
                </Link>
                <Link
                  href="/faq"
                  className="nav-link-glow block whitespace-nowrap py-2 font-label-caps text-label-caps tracking-[0.1em] text-white opacity-80 transition-colors hover:opacity-100"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-2 xl:gap-6">
          <div className="hidden items-center md:flex">
            <button
              type="button"
              aria-label="Open search"
              aria-expanded={searchOpen}
              aria-controls="nav-search"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary-red"
            >
              <SearchIcon />
            </button>
            <div
              className="flex items-center overflow-hidden"
              style={{ width: searchOpen ? "auto" : "0px", opacity: searchOpen ? 1 : 0 }}
            >
              <label htmlFor="nav-search" className="sr-only">
                Search drops and collections
              </label>
              <input
                id="nav-search"
                type="search"
                placeholder="SEARCH..."
                tabIndex={searchOpen ? 0 : -1}
                style={{
                  fontFamily: "var(--font-ibm-plex), monospace",
                  letterSpacing: "0.15em",
                  width: "156px",
                }}
                className="shrink-0 border border-white/40 border-b-white/50 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white outline-none transition-colors placeholder:text-white/90 focus:border-white focus:border-b-white"
              />
              <button
                type="button"
                aria-label="Search"
                tabIndex={searchOpen ? 0 : -1}
                className="flex h-11 w-11 shrink-0 items-center justify-center text-white transition-colors hover:text-primary-red"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
          <Link
            aria-label="Wishlist"
            href="/wishlist"
            className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary-red"
          >
            <HeartIcon />
          </Link>
          <button
            type="button"
            aria-label="Open cart"
            className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary-red"
          >
            <CartIcon />
          </button>
          <Link
            aria-label="Account"
            href="/login"
            className="hidden h-11 w-11 items-center justify-center text-white transition-colors hover:text-primary-red md:flex"
          >
            <AccountIcon />
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-white md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-deep-black px-margin-mobile py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`nav-link-glow font-label-caps text-label-caps tracking-[0.1em] transition-colors hover:text-primary-red ${
                  isActive(link.href) ? "is-active" : "text-white opacity-80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/collaboration"
              onClick={() => setMenuOpen(false)}
              className="nav-link-glow font-label-caps text-label-caps tracking-[0.1em] text-white opacity-80 transition-colors hover:text-primary-red"
            >
              COLLABORATION
            </Link>
            <Link
              href="/review"
              onClick={() => setMenuOpen(false)}
              className="nav-link-glow font-label-caps text-label-caps tracking-[0.1em] text-white opacity-80 transition-colors hover:text-primary-red"
            >
              REVIEW
            </Link>
            <Link
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="nav-link-glow font-label-caps text-label-caps tracking-[0.1em] text-white opacity-80 transition-colors hover:text-primary-red"
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
