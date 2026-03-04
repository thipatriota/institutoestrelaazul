import {
    PortableText,
    type PortableTextComponents,
    type PortableTextBlock,
} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import { ReferenceTooltip } from "./ReferenceTooltip";
import { imageUrl } from "@/lib/sanity/image";

function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

const components: PortableTextComponents = {
    block: {
        h2: ({ children, value }) => {
            const text = (value.children as Array<Record<string, unknown>>)
                ?.map((c) => (c.text as string) ?? "")
                .join("") ?? "";
            const id = slugify(text);
            return (
                <h2
                    id={id}
                    className="mt-12 mb-4 scroll-mt-24 font-heading text-2xl font-bold text-foreground lg:text-3xl"
                >
                    {children}
                </h2>
            );
        },
        h3: ({ children, value }) => {
            const text = (value.children as Array<Record<string, unknown>>)
                ?.map((c) => (c.text as string) ?? "")
                .join("") ?? "";
            const id = slugify(text);
            return (
                <h3
                    id={id}
                    className="mt-8 mb-3 scroll-mt-24 font-heading text-xl font-semibold text-foreground lg:text-2xl"
                >
                    {children}
                </h3>
            );
        },
        normal: ({ children }) => (
            <p className="mb-6 leading-[1.85] text-foreground/90">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-4 border-[var(--accent,hsl(var(--primary)))] pl-6 italic text-muted-foreground">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        link: ({ value, children }) => {
            const href: string = value?.href ?? "#";
            const isExternal = href.startsWith("http");
            if (isExternal) {
                return (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
                    >
                        {children}
                    </a>
                );
            }
            return (
                <Link
                    href={href}
                    className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
                >
                    {children}
                </Link>
            );
        },
        referenceTooltip: ({ children, value }) => {
            return <ReferenceTooltip value={value as any}>{children}</ReferenceTooltip>;
        },
    },
    types: {
        image: ({ value }) => {
            const src = imageUrl(value, 1200);
            if (!src) return null;

            // Tenta obter as dimensões originais da imagem se disponíveis no _ref
            const ref = value?.asset?._ref || "";
            const match = ref.match(/-(\d+)x(\d+)-/);
            const width = match ? parseInt(match[1], 10) : 1200;
            const height = match ? parseInt(match[2], 10) : 800;

            return (
                <figure className="my-10 flex flex-col items-center">
                    <div className="relative w-full overflow-hidden rounded-xl bg-muted/10 flex justify-center">
                        <Image
                            src={src}
                            alt={value.alt || ""}
                            width={width}
                            height={height}
                            sizes="(max-width: 768px) 100vw, 68ch"
                            className="h-auto w-auto max-w-full lg:max-h-[75vh] object-contain rounded-xl"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="mt-3 text-center text-sm italic text-muted-foreground/80">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
};

interface PostBodyProps {
    body: PortableTextBlock[];
}

export function PostBody({ body }: PostBodyProps) {
    return (
        <article className="prose-custom mx-auto max-w-[68ch] text-[clamp(1rem,2.5vw,1.125rem)]">
            <PortableText value={body} components={components} />
        </article>
    );
}
