const messages = [
  "NEW DROP: BLUE FLAME TEE NOW AVAILABLE",
  "LIMITED STOCK",
  "THE_ORIGIN_DROP COLLECTION LIVE",
  "FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$100",
];

const fullLine = messages.join(" • ");

export default function Marquee() {
  const segments = Array.from({ length: 6 });
  return (
    <div className="marquee-wrap relative overflow-hidden border-b border-border bg-[#BC0100] py-2.5">
      <div className="flex w-max shrink-0 animate-marquee">
        {segments.map((_, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap"
            aria-hidden={i > 0}
          >
            <span className="font-mono text-xs font-medium tracking-[0.15em] uppercase">
              {fullLine}
            </span>
            <span className="mx-6 flex items-center gap-2 text-accent">
              <span className="text-[13px]">✦</span>
              <span className="text-[10px] text-foreground/40">＊</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
