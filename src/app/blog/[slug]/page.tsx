import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { AuthorCard } from "@/components/blog/AuthorCard";
import { PostBody } from "@/components/blog/PostBody";
import { PostHeader } from "@/components/blog/PostHeader";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareButtons } from "@/components/blog/ShareButtons";
import {
    TableOfContents,
} from "@/components/blog/TableOfContents";
import { extractTocItems } from "@/lib/toc";
import {
    getAllPostSlugs,
    getPostBySlug,
    getRelatedPosts,
} from "@/lib/sanity/queries";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { buildPostMetadata } from "@/lib/seo/metadata";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://institutoestrelaazul.com.br";

export const revalidate = 3600;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};
    return buildPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const firstCategorySlug = post.categories[0]?.slug.current ?? "";
    const related = firstCategorySlug
        ? await getRelatedPosts(slug, firstCategorySlug, 3)
        : [];

    const tocItems = extractTocItems(
        post.body as Array<{
            _type: string;
            style?: string;
            children?: Array<{ text?: string }>;
        }>
    );

    const articleJsonLd = buildArticleJsonLd(post);
    const breadcrumbJsonLd = buildBreadcrumbJsonLd(post);

    return (
        <>
            <ReadingProgress />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleJsonLd),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />

            <PostHeader post={post} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Article body — 70% */}
                    <main className="min-w-0 lg:w-[70%]">
                        <PostBody body={post.body} />

                        <hr className="my-10 border-border/50" />

                        <ShareButtons
                            url={`${SITE_URL}/blog/${post.slug.current}`}
                            title={post.title}
                        />
                    </main>

                    {/* Sidebar — 30% */}
                    <aside className="lg:w-[30%]">
                        <div className="sticky top-24 space-y-6">
                            <Suspense fallback={null}>
                                {tocItems.length > 0 && <TableOfContents items={tocItems} />}
                            </Suspense>

                            <Suspense fallback={null}>
                                <AuthorCard author={post.author} />
                            </Suspense>

                            <Suspense fallback={null}>
                                <RelatedPosts posts={related} />
                            </Suspense>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
