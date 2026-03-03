"use client";

import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-faq-button-${index}`;
        const contentId = `${baseId}-faq-content-${index}`;

        return (
          <div
            key={item.question}
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col rounded-xl border py-6 shadow-sm card border-border/50"
          >
            <button
              id={buttonId}
              type="button"
              data-slot="card-header"
              aria-expanded={open}
              aria-controls={contentId}
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 card-icon cursor-pointer hover:bg-muted/20 transition-colors text-left"
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="flex items-center justify-between">
                <span
                  data-slot="card-title"
                  className="font-semibold text-lg text-primary pr-4"
                >
                  {item.question}
                </span>
                <span className="flex-shrink-0">
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
                    className={`lucide lucide-chevron-down h-5 w-5 text-primary transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </span>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              data-slot="card-content"
              className={`grid px-6 transition-[grid-template-rows] duration-300 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`text-muted-foreground leading-relaxed text-pretty transition-[opacity,transform] duration-300 ease-in-out ${
                    open
                      ? "pt-4 opacity-100 translate-y-0"
                      : "pt-0 opacity-0 -translate-y-1"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
