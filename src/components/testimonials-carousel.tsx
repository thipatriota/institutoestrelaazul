"use client";

import { useEffect, useId, useState } from "react";

type Testimonial = {
  quote: string;
  author: string;
  subtitle?: string;
};

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const safeItems = items.length > 0 ? items : [];
  const active = safeItems[activeIndex];

  useEffect(() => {
    setVisible(false);
    const t = window.setTimeout(() => setVisible(true), 40);
    return () => window.clearTimeout(t);
  }, [activeIndex]);

  const prev = () => {
    if (safeItems.length === 0) return;
    setActiveIndex((i) => (i - 1 + safeItems.length) % safeItems.length);
  };

  const next = () => {
    if (safeItems.length === 0) return;
    setActiveIndex((i) => (i + 1) % safeItems.length);
  };

  if (safeItems.length === 0) return null;

  return (
    <div className="relative">
      <div
        data-slot="card"
        className="group bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm card border-border/50 min-h-[300px] transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 hover:bg-muted/10"
      >
        <div data-slot="card-content" className="p-8">
          <div
            className={`text-center transition-[opacity,transform] duration-300 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
          >
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star h-5 w-5 text-yellow-500 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg text-foreground mb-8 leading-relaxed text-pretty">
              {active.quote}
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-primary">{active.author}</p>
              {active.subtitle ? (
                <p className="text-sm text-muted-foreground">{active.subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <button
        data-slot="button"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
        aria-label="Depoimento anterior"
        type="button"
        onClick={prev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left h-4 w-4"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        data-slot="button"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur"
        aria-label="Próximo depoimento"
        type="button"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right h-4 w-4"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {safeItems.map((_, idx) => (
          <button
            key={idx}
            id={`${baseId}-dot-${idx}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Ir para depoimento ${idx + 1}`}
            type="button"
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

