"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

import { imageUrl } from "@/lib/sanity/image";
import type { SanityImage } from "@/types/blog";

const tooltipComponents: PortableTextComponents = {
    marks: {
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        link: ({ value, children }) => {
            const href = value?.href || "#";
            const isExternal = href.startsWith("http");
            if (isExternal) {
                return (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-primary/50 hover:text-primary transition-colors break-words [overflow-wrap:anywhere]">
                        {children}
                    </a>
                );
            }
            return (
                <Link href={href} className="underline decoration-primary/50 hover:text-primary transition-colors break-words [overflow-wrap:anywhere]">
                    {children}
                </Link>
            );
        },
    },
    list: {
        bullet: ({ children }) => <ul className="mb-4 ml-5 list-disc space-y-1 text-foreground/90">{children}</ul>,
        number: ({ children }) => <ol className="mb-4 ml-5 list-decimal space-y-1 text-foreground/90">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed">{children}</li>,
    },
    block: {
        normal: ({ children }) => <p className="mb-4 last:mb-0 text-base leading-relaxed text-foreground/90">{children}</p>,
    }
};

interface ReferenceTooltipProps {
    children: React.ReactNode;
    value?: {
        title?: string;
        text?: any;
        image?: SanityImage;
    };
}

export function ReferenceTooltip({ children, value }: ReferenceTooltipProps) {
    if (!value?.text && !value?.image && !value?.title) {
        return <>{children}</>;
    }

    return (
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <span
                        role="button"
                        tabIndex={0}
                        className="inline-flex items-center justify-center min-w-[1.6em] h-[1.6em] px-[0.3em] mx-[0.2em] rounded-[0.4em] bg-primary/10 text-primary font-bold cursor-help align-baseline text-[0.8em] tracking-wide hover:bg-primary/20 transition-colors"
                    >
                        {children}
                    </span>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="z-50 w-[min(90vw,400px)] max-w-[min(90vw,400px)] rounded-md border border-border bg-popover p-5 text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                        side="top"
                        sideOffset={5}
                    >
                        {value.title && (
                            <div className="font-bold text-base mb-2 border-b border-border/50 pb-1 break-words [overflow-wrap:anywhere]">
                                {value.title}
                            </div>
                        )}
                        {value.image && (
                            <div className="mb-3 w-full flex justify-center bg-muted/20 rounded-sm overflow-hidden">
                                <img
                                    src={imageUrl(value.image, 500) || ""}
                                    alt={value.title || "Imagem de referência"}
                                    className="max-h-48 w-auto max-w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        )}
                        {value.text && (
                            <div className="text-base leading-relaxed text-foreground/90 break-words [overflow-wrap:anywhere]">
                                {typeof value.text === 'string' ? (
                                    <div className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{value.text}</div>
                                ) : (
                                    <PortableText value={value.text} components={tooltipComponents} />
                                )}
                            </div>
                        )}
                        <Tooltip.Arrow className="fill-popover border-border" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
