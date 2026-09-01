const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@zenji_.shop" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/ZENJI/61592433253702/",
  },
];

const dropLinks = [
  { label: "Home", href: "/" },
  { label: "Drop", href: "/drop" },
  { label: "Collection", href: "/collection" },
];

const exploreLinks = [
  { label: "Lookbook", href: "/lookbook" },
  { label: "Our Story", href: "/our-story" },
  { label: "Collection", href: "/collection" },
];

const contactLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Review", href: "/review" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Help", href: "/faq" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Contact Us", href: "/contact" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-mono text-xs tracking-widest text-foreground/40">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl text-accent">力</span>
              <span className="font-mono text-3xl font-bold tracking-[0.2em]">
                ZENJI
              </span>
            </div>
            <p className="max-w-xs font-mono text-xs leading-relaxed text-foreground/50">
              Wear the Arc. Anime-inspired streetwear for gamers and otaku.
              Every drop limited. No restocks. Ever.
            </p>
            <div>
              <h4 className="mb-3 font-mono text-xs tracking-widest text-foreground/40">
                FOLLOW THE LORE
              </h4>
              <ul className="flex flex-col gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <FooterColumn title="DROPS" links={dropLinks} />
          <FooterColumn title="EXPLORE" links={exploreLinks} />
          <FooterColumn title="COMMUNITY" links={socials} />
          <FooterColumn title="CONTACT" links={contactLinks} />
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8">
          <p className="font-mono text-xs text-foreground/50">
            © 2026 ZENJI. All drops are final. No restocks. Ever.
          </p>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-foreground/40">
            <a href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a
              href="/privacy-policy#cookies"
              className="transition-colors hover:text-foreground"
            >
              Cookies
            </a>
            <span className="ml-auto text-foreground/30">
              ● Anime-inspired. Gamer-built. Community-owned.
            </span>
          </div>
        </div>

        <div className="pointer-events-none mt-8 flex select-none items-center justify-center overflow-hidden">
          <span className="font-mono text-[8rem] font-bold leading-none text-white/[0.03] lg:text-[12rem]">
            力
          </span>
        </div>
      </div>
    </footer>
  );
}
