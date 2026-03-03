import type { Post } from "@/types/blog";

import { imageUrl } from "../sanity/image";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://institutoestrelaazul.com.br";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Instituto Estrela Azul";

/* ------------------------------------------------------------------ */
/*  Article JSON-LD                                                   */
/* ------------------------------------------------------------------ */

export function buildArticleJsonLd(post: Post) {
    const canonical =
        post.seo?.canonicalUrl || `${SITE_URL}/blog/${post.slug.current}`;

    const mainImageUrl = post.mainImage ? imageUrl(post.mainImage, 1200) : undefined;

    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title.slice(0, 110),
        description: post.excerpt ?? "",
        image: mainImageUrl ? [mainImageUrl] : [],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
            "@type": "Person",
            name: post.author.name,
            url: `${SITE_URL}/blog/author/${post.author.slug.current}`,
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical,
        },
        wordCount: post.readingTime ? post.readingTime * 200 : undefined,
        articleSection: post.categories[0]?.title,
        inLanguage: "pt-BR",
    };
}

/* ------------------------------------------------------------------ */
/*  Breadcrumb JSON-LD                                                */
/* ------------------------------------------------------------------ */

export function buildBreadcrumbJsonLd(post: Post) {
    const category = post.categories[0];

    const items = [
        { name: "Início", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
    ];

    if (category) {
        items.push({
            name: category.title,
            url: `${SITE_URL}/blog/category/${category.slug.current}`,
        });
    }

    items.push({
        name: post.title,
        url: `${SITE_URL}/blog/${post.slug.current}`,
    });

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
