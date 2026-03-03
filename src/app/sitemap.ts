import type { MetadataRoute } from "next";

import { getAllCategories, getLatestPosts } from "@/lib/sanity/queries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://institutoestrelaazul.com.br";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [posts, categories] = await Promise.all([
        getLatestPosts(100),
        getAllCategories(),
    ]);

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${SITE_URL}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/agenda`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${SITE_URL}/depoimentos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${SITE_URL}/contato`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ];

    const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug.current}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
        changeFrequency: "daily",
        priority: 0.8,
    }));

    const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
        url: `${SITE_URL}/blog/category/${cat.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
