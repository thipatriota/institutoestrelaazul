import Image from "next/image";
import Link from "next/link";

import type { PostCard as PostCardType } from "@/types/blog";

import { imageUrl } from "@/lib/sanity/image";

import { CategoryBadge } from "./CategoryBadge";

interface PostCardProps {
    post: PostCardType;
    priority?: boolean;
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function PostCard({ post, priority = false }: PostCardProps) {
    const imgSrc = post.mainImage ? imageUrl(post.mainImage, 800) : null;

    return (
        <Link
            href={`/blog/${post.slug.current}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/20"
        >
            {imgSrc && (
                <div className="relative aspect-[16/9] overflow-hidden bg-muted/20">
                    <Image
                        src={imgSrc}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={priority ? "eager" : "lazy"}
                        priority={priority}
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col gap-3 p-5">
                {post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {post.categories.map((cat) => (
                            <span
                                key={cat.slug.current}
                                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                            >
                                {cat.title}
                            </span>
                        ))}
                    </div>
                )}

                <h3 className="font-heading text-lg font-bold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                </h3>

                {post.excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>
                )}

                <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
                    <span>{post.author.name}</span>
                    <span className="text-border">•</span>
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    {post.readingTime && (
                        <>
                            <span className="text-border">•</span>
                            <span>{post.readingTime} min de leitura</span>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
}
