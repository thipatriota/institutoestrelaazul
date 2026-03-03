import type { PortableTextBlock as SanityPortableTextBlock } from "@portabletext/react";

/* ------------------------------------------------------------------ */
/*  Sanity image reference                                            */
/* ------------------------------------------------------------------ */

export interface SanityImageAsset {
    _ref: string;
    _type: "reference";
}

export interface SanityImage {
    _type: "image";
    asset: SanityImageAsset;
    alt?: string;
    hotspot?: { x: number; y: number; height: number; width: number };
    crop?: { top: number; bottom: number; left: number; right: number };
}

/* ------------------------------------------------------------------ */
/*  SEO fields                                                        */
/* ------------------------------------------------------------------ */

export interface SeoFields {
    focusKeyword?: string;
    keywords?: string[];
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
    canonicalUrl?: string;
    noIndex?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Author                                                            */
/* ------------------------------------------------------------------ */

export interface Author {
    _id: string;
    name: string;
    slug: { current: string };
    bio?: string;
    image?: SanityImage;
    twitter?: string;
}

/* ------------------------------------------------------------------ */
/*  Category                                                          */
/* ------------------------------------------------------------------ */

export interface Category {
    _id: string;
    title: string;
    slug: { current: string };
    description?: string;
    seo?: SeoFields;
}

/* ------------------------------------------------------------------ */
/*  Post                                                              */
/* ------------------------------------------------------------------ */

export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    author: Author;
    mainImage?: SanityImage;
    publishedAt: string;
    updatedAt?: string;
    excerpt?: string;
    body: SanityPortableTextBlock[];
    categories: Category[];
    seo?: SeoFields;
    readingTime?: number;
}

/* ------------------------------------------------------------------ */
/*  Listing variants (lighter projections)                            */
/* ------------------------------------------------------------------ */

export interface PostCard {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    publishedAt: string;
    updatedAt?: string;
    mainImage?: SanityImage;
    categories: Pick<Category, "title" | "slug">[];
    author: Pick<Author, "name">;
    readingTime?: number;
}

/* ------------------------------------------------------------------ */
/*  Portable Text re-export                                           */
/* ------------------------------------------------------------------ */

export type PortableTextBlock = SanityPortableTextBlock;
