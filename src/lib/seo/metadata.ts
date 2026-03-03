import type { Metadata } from "next";

import type { Category, Post, PostCard, SeoFields } from "@/types/blog";

import { imageUrl } from "../sanity/image";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://institutoestrelaazul.com.br";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Instituto Estrela Azul";

/* ------------------------------------------------------------------ */
/*  Post metadata                                                     */
/* ------------------------------------------------------------------ */

export function buildPostMetadata(post: Post | PostCard): Metadata {
    const seo: SeoFields = "seo" in post && post.seo ? post.seo : {};
    const title = seo.metaTitle || post.title;
    const description = (seo.metaDescription || post.excerpt || "").slice(0, 160);
    const canonical = seo.canonicalUrl || `${SITE_URL}/blog/${post.slug.current}`;

    const ogImageUrl =
        "seo" in post && post.seo?.ogImage
            ? imageUrl(post.seo.ogImage, 1200)
            : post.mainImage
                ? imageUrl(post.mainImage, 1200)
                : undefined;

    const robots =
        seo.noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

    const authorName = "name" in post.author ? post.author.name : undefined;
    const authorTwitter =
        "twitter" in post.author && post.author.twitter
            ? `@${post.author.twitter}`
            : undefined;

    // Build keywords list
    const keywordsList: string[] = [];
    if (seo.focusKeyword) keywordsList.push(seo.focusKeyword);
    if (seo.keywords) keywordsList.push(...seo.keywords);

    return {
        title: `${title} | ${SITE_NAME}`,
        description,
        keywords: keywordsList.length > 0 ? keywordsList : undefined,
        robots,
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: SITE_NAME,
            locale: "pt_BR",
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            authors: authorName ? [authorName] : [],
            images: ogImageUrl
                ? [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogImageUrl ? [ogImageUrl] : [],
            creator: authorTwitter,
        },
    };
}

/* ------------------------------------------------------------------ */
/*  Category metadata                                                 */
/* ------------------------------------------------------------------ */

export function buildCategoryMetadata(category: Category): Metadata {
    const seo = category.seo ?? {};
    const title = seo.metaTitle || category.title;
    const description = (seo.metaDescription || category.description || "").slice(0, 160);
    const canonical = `${SITE_URL}/blog/category/${category.slug.current}`;

    const ogImageUrl = seo.ogImage ? imageUrl(seo.ogImage, 1200) : undefined;

    return {
        title: `${title} | Blog | ${SITE_NAME}`,
        description,
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: SITE_NAME,
            locale: "pt_BR",
            type: "website",
            images: ogImageUrl
                ? [{ url: ogImageUrl, width: 1200, height: 630, alt: category.title }]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogImageUrl ? [ogImageUrl] : [],
        },
    };
}

/* ------------------------------------------------------------------ */
/*  Blog listing metadata                                             */
/* ------------------------------------------------------------------ */

export function buildBlogListingMetadata(): Metadata {
    return {
        title: `Blog | ${SITE_NAME}`,
        description:
            "Artigos sobre espiritualidade, autoconhecimento, medicinas da floresta e tradições ancestrais.",
        alternates: { canonical: `${SITE_URL}/blog` },
        openGraph: {
            title: `Blog | ${SITE_NAME}`,
            description:
                "Artigos sobre espiritualidade, autoconhecimento, medicinas da floresta e tradições ancestrais.",
            url: `${SITE_URL}/blog`,
            siteName: SITE_NAME,
            locale: "pt_BR",
            type: "website",
        },
    };
}
