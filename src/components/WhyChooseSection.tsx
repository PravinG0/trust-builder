import { useEffect, useRef, useState } from "react";

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-royal-heading"
      data-revealed={revealed ? "true" : "false"}
      className="reveal-root relative overflow-hidden bg-background py-16 md:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-aura" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="reveal reveal-1 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-primary">
            Why Royal Medical Center
          </p>
          <h2
            id="why-royal-heading"
            className="reveal reveal-2 mt-3 text-balance font-display text-[2.1rem] font-normal leading-[1.08] tracking-tight text-foreground md:text-[2.9rem]"
          >
            Why Royal Medical Center?
          </h2>
        </header>

        <div className="rule reveal reveal-3 mt-10 md:mt-12" />

        {/* 01 — Low Price Guarantee */}
        <article className="editorial group grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-12">
          <div className="reveal reveal-4">
            <span className="block font-display text-4xl font-light leading-none text-primary/35 md:text-5xl">
              01
            </span>
            <h3 className="mt-4 font-display text-[1.9rem] font-normal leading-[1.12] tracking-tight text-foreground md:text-[2.35rem]">
              Low Price Guarantee
            </h3>
            <p className="mt-3 max-w-sm text-[0.98rem] leading-relaxed text-muted-foreground">
              We’ll beat any competitor’s price by 25%.
            </p>
            <a
              href="#products"
              className="cta mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Check Our Products
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </a>
          </div>

          <div className="reveal reveal-5 flex justify-center md:justify-end">
            <div className="mark relative h-44 w-44 md:h-56 md:w-56">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="ring-text-path"
                    d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                    fill="none"
                  />
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="88"
                  className="fill-none stroke-primary/15"
                  strokeWidth="1"
                />
                <g className="mark-rotor">
                  <circle
                    cx="100"
                    cy="100"
                    r="66"
                    className="ring-draw fill-none stroke-primary/60"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                  />
                </g>
                <g className="mark-label">
                  <text className="fill-primary/70 text-[8.5px] uppercase tracking-[0.42em]">
                    <textPath href="#ring-text-path" startOffset="50%" textAnchor="middle">
                      Price Guarantee
                    </textPath>
                  </text>
                </g>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-light tracking-tight text-foreground md:text-6xl">
                25%
              </span>
            </div>
          </div>
        </article>

        <div className="rule reveal reveal-5" />

        {/* 02 — No Hidden Fees */}
        <article className="editorial group grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:py-12">
          <div className="reveal reveal-7 order-2 flex justify-center md:order-1 md:justify-start">
            <div className="lens relative h-40 w-52 md:h-52 md:w-64">
              <svg viewBox="0 0 240 200" className="h-full w-full">
                <g className="lens-grid">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line
                      key={`h${i}`}
                      x1="20"
                      x2="220"
                      y1={30 + i * 28}
                      y2={30 + i * 28}
                      className="stroke-primary/10"
                      strokeWidth="1"
                    />
                  ))}
                </g>
                <circle
                  cx="98"
                  cy="100"
                  r="58"
                  className="lens-circle lens-a fill-primary/[0.07] stroke-primary/40"
                  strokeWidth="1.25"
                />
                <circle
                  cx="146"
                  cy="100"
                  r="58"
                  className="lens-circle lens-b fill-primary/[0.07] stroke-primary/40"
                  strokeWidth="1.25"
                />
              </svg>
            </div>
          </div>

          <div className="reveal reveal-6 order-1 md:order-2 md:text-right">
            <span className="block font-display text-4xl font-light leading-none text-primary/35 md:text-5xl">
              02
            </span>
            <h3 className="mt-4 font-display text-[1.9rem] font-normal leading-[1.12] tracking-tight text-foreground md:text-[2.35rem]">
              No Hidden Fees
            </h3>
            <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground md:ml-auto">
              Our pricing is all-inclusive, covering everything you need, including lab
              testing, medications, physicals and Dr consultations — no surprises, ever.
            </p>
            <a
              href="#start"
              className="cta mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
            >
              Start now
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </a>
          </div>
        </article>

        <div className="rule reveal reveal-8" />
      </div>
    </section>
  );
}
