"use client";

import { useState } from "react";

interface ShareButtonsProps {
    url: string;
    title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard API not available */
        }
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">Compartilhar:</span>

            {/* Twitter/X */}
            <a
                href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/50 text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground"
                aria-label="Compartilhar no X"
            >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>

            {/* LinkedIn */}
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/50 text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground"
                aria-label="Compartilhar no LinkedIn"
            >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>

            {/* Copy link */}
            <button
                type="button"
                onClick={copyLink}
                className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-border/50 px-2.5 text-xs text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground"
                aria-label="Copiar link"
            >
                {copied ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-green-600">
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span>Copiado!</span>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>Copiar</span>
                    </>
                )}
            </button>
        </div>
    );
}
