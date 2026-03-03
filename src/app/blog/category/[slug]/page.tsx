import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { PostGrid } from "@/components/blog/PostGrid";
import {
    getAllCategories,
    getAllCategorySlugs,
    getPostsByCategory,
} from "@/lib/sanity/queries";
import { buildCategoryMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllCategorySlugs();
    return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const categories = await getAllCategories();
    const category = categories.find((c) => c.slug.current === slug);
    if (!category) return {};
    return buildCategoryMetadata(category);
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const [posts, categories] = await Promise.all([
        getPostsByCategory(slug),
        getAllCategories(),
    ]);

    const category = categories.find((c) => c.slug.current === slug);
    if (!category) notFound();

    return (
        <>
            {/* Banner */}
            <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
                            {category.title}
                        </h1>
                        {category.description && (
                            <p className="text-xl text-muted-foreground text-pretty">
                                {category.description}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Category filter bar */}
            <section className="sticky top-16 z-30 border-b border-border/50 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
                        <Link
                            href="/blog"
                            className="inline-flex shrink-0 items-center rounded-full border border-border/50 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted/20 transition-colors"
                        >
                            Todos
                        </Link>
                        {categories.map((cat) => (
                            <CategoryBadge
                                key={cat._id}
                                title={cat.title}
                                slug={cat.slug.current}
                                active={cat.slug.current === slug}
                            />
                        ))}
                    </div>
                </div>
            </section>

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
                        <PostGrid posts={posts} />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
