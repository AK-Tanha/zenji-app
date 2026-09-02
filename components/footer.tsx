export default function Footer() {
  return (
    <footer className="relative z-50 w-full overflow-hidden bg-black text-stark-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[120px] uppercase leading-none md:text-[300px]"
        style={{ fontFamily: "var(--font-anton), sans-serif", color: "rgba(255,255,255,0.04)" }}
      >
        ZENJI
      </span>
      <div className="relative z-10 px-[6%] pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr] md:gap-16">
          <div>
            <img src="/wm_logo.webp" alt="ZENJI anime streetwear brand logo" width={80} height={80} style={{ width: 80, height: "auto" }} />
            <p className="mt-4 max-w-[280px] text-[12px] text-white/50" style={{ fontFamily: "var(--font-ibm-plex), monospace", lineHeight: 1.6 }}>
              Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop limited. No restocks. Ever.
            </p>
            <div className="mt-8">
              <p className="mb-4 text-[10px] tracking-widest text-white/30" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                FOLLOW THE LORE
              </p>
              <div className="flex gap-2">
                <a
                  href="https://www.tiktok.com/@zenji_.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex min-h-[44px] items-center gap-2 border border-white bg-white px-4 py-2 text-[11px] text-black transition-colors duration-200 hover:border-[#010101] hover:bg-[#010101] hover:text-white"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", borderRadius: 0 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.11v12.63a2.59 2.59 0 1 1-1.84-2.48V9.94a5.68 5.68 0 1 0 4.95 5.63V9.01a7.34 7.34 0 0 0 4.29 1.37V7.27a4.28 4.28 0 0 1-2.19-1.45z" />
                  </svg>
                  TikTok
                </a>
                <a
                  href="https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex min-h-[44px] items-center gap-2 border-none px-4 py-2 text-[11px] text-stark-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", borderRadius: 0, background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/ZENJI/61592433253702/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex min-h-[44px] items-center gap-2 border-none px-4 py-2 text-[11px] text-stark-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", borderRadius: 0, background: "#1877F2" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.5c-1.49 0-1.95.93-1.95 1.87v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-8">
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                DROPS
              </h3>
              <ul>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/">Home</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/drop">Drop</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/collection">Collection</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                EXPLORE
              </h3>
              <ul>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/lookbook">Lookbook</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/our-story">Our Story</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/collection">Collection</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                COMMUNITY
              </h3>
              <ul>
                <li><a href="https://www.tiktok.com/@zenji_.shop" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red">TikTok</a></li>
                <li><a href="https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red">Instagram</a></li>
                <li><a href="https://www.facebook.com/people/ZENJI/61592433253702/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                CONTACT
              </h3>
              <ul>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/faq">FAQ</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/review">Review</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/privacy-policy">Privacy Policy</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/terms">Terms</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/faq">Help</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/return-policy">Return Policy</a></li>
                <li><a style={{ fontFamily: "var(--font-ibm-plex), monospace" }} className="inline-flex min-h-[44px] items-center text-[13px] text-stark-white transition-colors duration-200 hover:text-primary-red" href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4 border-t border-white/10 px-[6%] py-6 md:flex-row md:justify-between">
        <span className="text-[11px] text-white/30" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
          &copy; 2026 ZENJI. All drops are final. No restocks. Ever.
        </span>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <div className="flex gap-8">
            <a style={{ fontFamily: "var(--font-jetbrains), monospace" }} className="text-[11px] text-white/30 transition-colors hover:text-stark-white" href="/privacy-policy">Privacy</a>
            <a style={{ fontFamily: "var(--font-jetbrains), monospace" }} className="text-[11px] text-white/30 transition-colors hover:text-stark-white" href="/terms">Terms</a>
            <a style={{ fontFamily: "var(--font-jetbrains), monospace" }} className="text-[11px] text-white/30 transition-colors hover:text-stark-white" href="/privacy-policy#cookies">Cookies</a>
          </div>
          <span className="text-[10px] text-white/30" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
            <span className="text-yellow-500">&#x25CF;</span> Anime-inspired. Gamer-built. Community-owned.
          </span>
        </div>
      </div>
    </footer>
  );
}
