import Image from "next/image";

import type { Post } from "@/types/blog";

import { imageUrl } from "@/lib/sanity/image";

import { CategoryBadge } from "./CategoryBadge";

interface PostHeaderProps {
    post: Post;
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function PostHeader({ post }: PostHeaderProps) {
    const imgSrc = post.mainImage ? imageUrl(post.mainImage, 1920) : null;

    return (
        <header className="relative">
            {/* Hero image */}
            {imgSrc && (
                <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted/20">
                    <Image
                        src={imgSrc}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Title overlay */}
                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-4 pb-10 sm:px-6 lg:px-8">
                            <div className="max-w-3xl space-y-4">
                                {post.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {post.categories.map((cat) => (
                                            <span
                                                key={cat._id}
                                                className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                                            >
                                                {cat.title}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                                    <span className="font-medium text-white">{post.author.name}</span>
                                    <span>•</span>
                                    <time dateTime={post.publishedAt}>
                                        {formatDate(post.publishedAt)}
                                    </time>
                                    {post.readingTime && (
                                        <>
                                            <span>•</span>
                                            <span>{post.readingTime} min de leitura</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Fallback header when no image */}
            {!imgSrc && (
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl space-y-4">
                            {post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.categories.map((cat) => (
                                        <CategoryBadge
                                            key={cat._id}
                                            title={cat.title}
                                            slug={cat.slug.current}
                                        />
                                    ))}
                                </div>
                            )}
                            <h1 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">{post.author.name}</span>
                                <span>•</span>
                                <time dateTime={post.publishedAt}>
                                    {formatDate(post.publishedAt)}
                                </time>
                                {post.readingTime && (
                                    <>
                                        <span>•</span>
                                        <span>{post.readingTime} min de leitura</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
