"use client";

import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        if (items.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
        );

        for (const item of items) {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, [items]);

    if (items.length === 0) return null;

    return (
        <nav aria-label="Índice do artigo" className="space-y-1">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Neste artigo
            </h4>
            <ul className="space-y-1 border-l border-border/50">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`block border-l-2 py-1 text-sm transition-colors ${item.level === 3 ? "pl-6" : "pl-4"
                                } ${activeId === item.id
                                    ? "border-primary font-medium text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

/** Extract headings from Portable Text blocks for the TOC */
export function extractTocItems(
    body: Array<{ _type: string; style?: string; children?: Array<{ text?: string }> }>
): TocItem[] {
    return body
        .filter(
            (block) =>
                block._type === "block" &&
                (block.style === "h2" || block.style === "h3")
        )
        .map((block) => {
            const text = block.children?.map((c) => c.text ?? "").join("") ?? "";
            const id = text
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");
            return {
                id,
                text,
                level: block.style === "h3" ? 3 : 2,
            };
        });
}
