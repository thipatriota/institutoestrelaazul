import type { PostCard as PostCardType } from "@/types/blog";

import { PostCard } from "./PostCard";

interface PostGridProps {
    posts: PostCardType[];
}

export function PostGrid({ posts }: PostGridProps) {
    if (posts.length === 0) {
        return (
            <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-border/50 bg-muted/10">
                <p className="text-muted-foreground">Nenhum post encontrado.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
                <PostCard key={post._id} post={post} priority={index < 3} />
            ))}
        </div>
    );
}
