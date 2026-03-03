import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { PostGrid } from "@/components/blog/PostGrid";
import { imageUrl } from "@/lib/sanity/image";
import { getAllCategories, getAllPosts } from "@/lib/sanity/queries";
import { buildBlogListingMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
    return buildBlogListingMetadata();
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default async function BlogPage() {
    const [posts, categories] = await Promise.all([
        getAllPosts(),
        getAllCategories(),
    ]);

    const [featured, ...remaining] = posts;

    return (
        <>
            {/* Banner */}
            <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
                            Blog
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty">
                            Artigos sobre espiritualidade, autoconhecimento e medicinas da
                            floresta
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured post */}
            {featured && (
                <section className="py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href={`/blog/${featured.slug.current}`}
                            className="group grid overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 md:grid-cols-2"
                        >
                            {featured.mainImage && (
                                <div className="relative aspect-[16/9] md:aspect-auto overflow-hidden bg-muted/20">
                                    <Image
                                        src={imageUrl(featured.mainImage, 1200)}
                                        alt={featured.mainImage.alt || featured.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                            )}
                            <div className="flex flex-col justify-center gap-4 p-6 lg:p-10">
                                {featured.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {featured.categories.map((cat) => (
                                            <span
                                                key={cat.slug.current}
                                                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                {cat.title}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <h2 className="font-heading text-2xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors lg:text-3xl text-balance">
                                    {featured.title}
                                </h2>
                                {featured.excerpt && (
                                    <p className="text-muted-foreground leading-relaxed line-clamp-3 text-pretty">
                                        {featured.excerpt}
                                    </p>
                                )}
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        {featured.author.name}
                                    </span>
                                    <span>•</span>
                                    <time dateTime={featured.publishedAt}>
                                        {formatDate(featured.publishedAt)}
                                    </time>
                                    {featured.readingTime && (
                                        <>
                                            <span>•</span>
                                            <span>{featured.readingTime} min de leitura</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Category filter bar */}
            {categories.length > 0 && (
                <section className="sticky top-16 z-30 border-b border-border/50 bg-background/80 backdrop-blur-md">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
                            <Link
                                href="/blog"
                                className="inline-flex shrink-0 items-center rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground"
                            >
                                Todos
                            </Link>
                            {categories.map((cat) => (
                                <CategoryBadge
                                    key={cat._id}
                                    title={cat.title}
                                    slug={cat.slug.current}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Post grid */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Suspense
                        fallback={
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-80 animate-pulse rounded-xl bg-muted/20"
                                    />
                                ))}
                            </div>
                        }
                    >
                        <PostGrid posts={remaining} />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
