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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-royal-heading"
      data-revealed={revealed ? "true" : "false"}
      className="reveal-root relative overflow-hidden bg-muted/40 py-20 md:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-aura" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="reveal reveal-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">
            Why Royal Medical Center
          </p>
          <h2
            id="why-royal-heading"
            className="reveal reveal-2 mt-4 text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
          >
            Why Royal Medical Center?
          </h2>
          <p className="reveal reveal-3 mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Why Choose Us?
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Panel 01 — Low Price Guarantee */}
          <article className="reveal reveal-4 panel group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border/70 bg-card px-8 py-10 shadow-soft transition-all duration-500 hover:border-primary/45 hover:shadow-glow md:px-10">
            <span
              aria-hidden="true"
              className="ghost-25 pointer-events-none absolute -right-6 -top-10 select-none font-display text-[11rem] leading-none text-primary/[0.06] md:text-[14rem]"
            >
              25%
            </span>

            <div className="relative">
              <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                01
              </span>

              <div className="mt-6 flex items-center gap-6">
                <div className="ring-25 relative shrink-0">
                  <svg viewBox="0 0 120 120" className="h-28 w-28 md:h-32 md:w-32">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      className="fill-none stroke-primary/15"
                      strokeWidth="6"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      className="ring-progress fill-none stroke-primary"
                      strokeWidth="6"
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  <span className="hero-25 absolute inset-0 flex items-center justify-center font-display text-3xl tracking-tight text-primary md:text-4xl">
                    25%
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                    Low Price Guarantee
                  </h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-muted-foreground">
                    We’ll beat any competitor’s price by 25%.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#products"
              className="cta relative mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto sm:self-start"
            >
              Check Our Products
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </a>
          </article>

          {/* Panel 02 — No Hidden Fees */}
          <article className="reveal reveal-5 panel group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border/70 bg-background px-8 py-10 shadow-soft transition-all duration-500 hover:border-primary/45 hover:shadow-glow md:px-10">
            <div aria-hidden="true" className="glass-art pointer-events-none absolute inset-0">
              <div className="glass-grid absolute inset-0" />
              <div className="glass-layer glass-layer-1" />
              <div className="glass-layer glass-layer-2" />
              <div className="glass-layer glass-layer-3" />
            </div>

            <div className="relative">
              <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                02
              </span>
              <h3 className="mt-6 font-display text-2xl leading-tight text-foreground md:text-3xl">
                No Hidden Fees
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Our pricing is all-inclusive, covering everything you need, including lab
                testing, medications, physicals and Dr consultations —no surprises, ever.
              </p>
            </div>

            <a
              href="#start"
              className="cta relative mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-card px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5 sm:w-auto sm:self-start"
            >
              Start now
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
