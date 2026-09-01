import Link from "next/link";

const navLinks = [
  { href: "/drop", label: "DROP" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/lookbook", label: "LOOKBOOK" },
  { href: "/our-story", label: "OUR STORY" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-mono text-2xl text-accent">力</span>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-xl font-bold tracking-[0.2em]">
              ZENJI
            </span>
            <span className="font-mono text-[10px] tracking-widest text-foreground/50">
              力 — AWAKENING
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <span className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-foreground/50">
            MORE <span className="text-foreground/30">∨</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-xs tracking-widest text-foreground/50 lg:inline">
            SEARCH
          </span>
          <button
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-foreground/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button
            aria-label="Wishlist"
            className="hidden h-9 w-9 items-center justify-center border border-border transition-colors hover:border-foreground/40 sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21s-7.5-4.7-9.4-9.3C1 8 3.1 5 6.3 5c2 0 3.4 1.1 4.2 2.4h1C12.3 6.1 13.7 5 15.7 5 18.9 5 21 8 20.4 11.7 19.5 16.3 12 21 12 21z" />
            </svg>
          </button>
          <button
            aria-label="Login"
            className="flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-foreground/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
