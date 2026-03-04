"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";

import { imageUrl } from "@/lib/sanity/image";
import type { SanityImage } from "@/types/blog";

interface ReferenceTooltipProps {
    children: React.ReactNode;
    value?: {
        text?: string;
        image?: SanityImage;
    };
}

export function ReferenceTooltip({ children, value }: ReferenceTooltipProps) {
    if (!value?.text && !value?.image) {
        return <>{children}</>;
    }

    return (
        <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <span
                        role="button"
                        tabIndex={0}
                        className="text-primary font-semibold cursor-help align-super text-[0.75em] leading-[0] hover:underline transition-colors mx-[0.1em]"
                    >
                        {children}
                    </span>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="z-50 max-w-[320px] rounded-md border border-border bg-popover px-4 py-3 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                        side="top"
                        sideOffset={5}
                    >
                        {value.image && (
                            <div className="mb-3 relative w-full aspect-video rounded-sm overflow-hidden bg-muted">
                                <Image
                                    src={imageUrl(value.image, 400) || ""}
                                    alt="Imagem de referência"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        {value.text && (
                            <div className="leading-relaxed text-sm whitespace-pre-wrap">
                                {value.text}
                            </div>
                        )}
                        <Tooltip.Arrow className="fill-popover border-border" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
