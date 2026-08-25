import { useEffect, useRef, useState } from "react";

type PillarId = "price" | "fees" | "care";

const PILLARS: {
  id: PillarId;
  index: string;
  title: string;
  description: string;
  emphasis: string;
}[] = [
  {
    id: "price",
    index: "01",
    title: "Low Price Guarantee",
    description:
      "If you find another clinic that is equal to ours for a better price, we will beat their price by 25%.",
    emphasis: "25% Price Guarantee",
  },
  {
    id: "fees",
    index: "02",
    title: "No Hidden Fees",
    description:
      "Our pricing is all-inclusive, covering everything you need, including lab testing, medications, physicals, and doctor consultations — no surprises, ever.",
    emphasis: "No Hidden Costs",
  },
  {
    id: "care",
    index: "03",
    title: "Personalized Medical Care",
    description:
      "Our programs are customized to your individual needs and supported by licensed medical supervision.",
    emphasis: "Personalized to You",
  },
];

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState<PillarId | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-royal-heading"
      data-revealed={revealed ? "true" : "false"}
      className="reveal-root relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-aura" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="reveal reveal-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Why Royal Medical Center
          </p>
          <h2
            id="why-royal-heading"
            className="reveal reveal-2 mt-6 text-balance font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl"
          >
            Healthcare Without the Guesswork.
          </h2>
          <p className="reveal reveal-3 mt-6 text-lg leading-relaxed text-muted-foreground">
            Personalized care, transparent pricing, and ongoing medical guidance designed
            around your individual health needs.
          </p>
          <p className="reveal reveal-4 mt-10 hidden text-sm text-muted-foreground lg:block">
            Transparent pricing. Personalized care. No surprises.
          </p>
        </div>

        <TrustVisual active={active} onActiveChange={setActive} />
      </div>

      <div className="relative mx-auto mt-20 grid w-full max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <article
            key={pillar.id}
            tabIndex={0}
            aria-describedby={`pillar-desc-${pillar.id}`}
            onMouseEnter={() => setActive(pillar.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(pillar.id)}
            onBlur={() => setActive(null)}
            data-active={active === pillar.id ? "true" : "false"}
            className={`reveal reveal-${5 + i} group rounded-3xl border border-border/70 bg-card/70 p-8 shadow-soft outline-none backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow focus-visible:-translate-y-1 focus-visible:border-primary/60 focus-visible:shadow-glow data-[active=true]:border-primary/40 data-[active=true]:shadow-glow`}
          >
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">
                {pillar.index}
              </span>
              <span className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-primary">
                {pillar.emphasis}
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl text-foreground">{pillar.title}</h3>
            <p
              id={`pillar-desc-${pillar.id}`}
              className="mt-3 text-sm leading-relaxed text-muted-foreground"
            >
              {pillar.description}
            </p>
          </article>
        ))}
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-6xl px-6">
        <p className="reveal reveal-8 border-t border-border/70 pt-8 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Transparent Pricing <span className="text-primary/60">•</span> Personalized
          Programs <span className="text-primary/60">•</span> Licensed Medical Supervision
        </p>
      </div>
    </section>
  );
}

function TrustVisual({
  active,
  onActiveChange,
}: {
  active: PillarId | null;
  onActiveChange: (id: PillarId | null) => void;
}) {
  const nodes: { id: PillarId; label: string; sub: string; x: number; y: number }[] = [
    { id: "price", label: "25%", sub: "Price Guarantee", x: 260, y: 78 },
    { id: "fees", label: "$0", sub: "No Hidden Fees", x: 92, y: 340 },
    { id: "care", label: "1:1", sub: "Personalized Care", x: 400, y: 352 },
  ];

  return (
    <div className="reveal reveal-4 relative mx-auto w-full max-w-[520px]">
      <svg
        viewBox="0 0 520 460"
        role="img"
        aria-label="Royal Medical Center connects a 25 percent price guarantee, no hidden fees, and personalized care."
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <radialGradient id="rmc-core" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
            <stop offset="70%" stopColor="var(--color-primary)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g aria-hidden="true">
          {nodes.map((n) => (
            <line
              key={n.id}
              className="trust-line"
              data-active={active === n.id || active === "care" ? "true" : "false"}
              x1="260"
              y1="230"
              x2={n.x}
              y2={n.y}
            />
          ))}

          <circle cx="260" cy="230" r="170" fill="url(#rmc-core)" />
          <circle className="trust-halo" cx="260" cy="230" r="104" />
          <circle
            className="trust-core"
            data-active={active === "care" ? "true" : "false"}
            cx="260"
            cy="230"
            r="86"
          />
          <text
            x="260"
            y="222"
            textAnchor="middle"
            className="fill-foreground font-display"
            style={{ fontSize: 15, letterSpacing: "0.14em" }}
          >
            ROYAL
          </text>
          <text
            x="260"
            y="244"
            textAnchor="middle"
            className="fill-foreground font-display"
            style={{ fontSize: 15, letterSpacing: "0.14em" }}
          >
            MEDICAL
          </text>
          <text
            x="260"
            y="266"
            textAnchor="middle"
            className="fill-muted-foreground"
            style={{ fontSize: 10, letterSpacing: "0.22em" }}
          >
            CENTER
          </text>
        </g>

        {nodes.map((n, i) => (
          <g
            key={n.id}
            className={`trust-node trust-node-${i + 1}`}
            data-active={active === n.id ? "true" : "false"}
            onMouseEnter={() => onActiveChange(n.id)}
            onMouseLeave={() => onActiveChange(null)}
            aria-hidden="true"
          >
            <circle className="trust-node-disc" cx={n.x} cy={n.y} r="52" />
            <text
              x={n.x}
              y={n.y - 2}
              textAnchor="middle"
              className="trust-node-value fill-primary font-display"
              style={{ fontSize: 22 }}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 18}
              textAnchor="middle"
              className="fill-muted-foreground"
              style={{ fontSize: 8.5, letterSpacing: "0.12em" }}
            >
              {n.sub.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
