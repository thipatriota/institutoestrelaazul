"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PortableImageLightboxProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
};

export function PortableImageLightbox({
    src,
    alt,
    width,
    height,
    caption,
}: PortableImageLightboxProps) {
    const [open, setOpen] = useState(false);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
            if (event.key === "+" || event.key === "=") {
                setZoom((current) => Math.min(current + 0.25, 3));
            }
            if (event.key === "-") {
                setZoom((current) => Math.max(current - 0.25, 1));
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    const increaseZoom = () => setZoom((current) => Math.min(current + 0.25, 3));
    const decreaseZoom = () => setZoom((current) => Math.max(current - 0.25, 1));
    const resetZoom = () => setZoom(1);
    const close = () => {
        setOpen(false);
        setZoom(1);
    };

    return (
        <>
            <figure className="my-10 flex flex-col items-center">
                <button
                    type="button"
                    className="relative w-full overflow-hidden rounded-xl bg-muted/10 flex justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    onClick={() => setOpen(true)}
                    aria-label="Abrir imagem em tela cheia"
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes="(max-width: 768px) 100vw, 68ch"
                        className="h-auto w-auto max-w-full lg:max-h-[75vh] object-contain rounded-xl cursor-zoom-in"
                    />
                </button>
                {caption ? (
                    <figcaption className="mt-3 text-center text-sm italic text-muted-foreground/80">
                        {caption}
                    </figcaption>
                ) : null}
            </figure>

            {open ? (
                <div
                    className="fixed inset-0 z-[90] bg-black/85 p-4 md:p-8"
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        type="button"
                        className="absolute inset-0 h-full w-full cursor-zoom-out"
                        onClick={close}
                        aria-label="Fechar lightbox"
                    />
                    <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-center justify-end gap-2 pb-4">
                            <button
                                type="button"
                                onClick={decreaseZoom}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
                                aria-label="Diminuir zoom"
                            >
                                −
                            </button>
                            <button
                                type="button"
                                onClick={increaseZoom}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
                                aria-label="Aumentar zoom"
                            >
                                +
                            </button>
                            <button
                                type="button"
                                onClick={resetZoom}
                                className="inline-flex h-9 rounded-md bg-white/10 px-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                                aria-label="Resetar zoom"
                            >
                                100%
                            </button>
                            <button
                                type="button"
                                onClick={close}
                                className="inline-flex h-9 rounded-md bg-white/10 px-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                                aria-label="Fechar"
                            >
                                Fechar
                            </button>
                        </div>
                        <div className="relative flex-1 overflow-auto">
                            <div className="flex min-h-full items-center justify-center p-2">
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={width}
                                    height={height}
                                    className="h-auto w-auto max-w-none rounded-lg object-contain transition-transform duration-200"
                                    style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
                                    priority
                                />
                            </div>
                        </div>
                        {caption ? (
                            <p className="pt-4 text-center text-sm italic text-white/80">{caption}</p>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </>
    );
}

