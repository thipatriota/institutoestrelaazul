import Link from "next/link";

import type { PostCard as PostCardType } from "@/types/blog";

interface RelatedPostsProps {
    posts: PostCardType[];
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <div className="rounded-xl border border-border/50 bg-card p-5">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Posts relacionados
            </h4>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link
                            href={`/blog/${post.slug.current}`}
                            className="group block"
                        >
                            <p className="text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                                {post.title}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {formatDate(post.publishedAt)}
                                {post.readingTime && ` • ${post.readingTime} min`}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
