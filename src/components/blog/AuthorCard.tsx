import Image from "next/image";

import type { Author } from "@/types/blog";

import { imageUrl } from "@/lib/sanity/image";

interface AuthorCardProps {
    author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
    const avatarSrc = author.image ? imageUrl(author.image, 200) : null;

    return (
        <div className="rounded-xl border border-border/50 bg-card p-5">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Sobre o autor
            </h4>
            <div className="flex items-start gap-4">
                {avatarSrc && (
                    <Image
                        src={avatarSrc}
                        alt={author.image?.alt || author.name}
                        width={56}
                        height={56}
                        className="shrink-0 rounded-full object-cover"
                    />
                )}
                <div>
                    <p className="font-semibold text-foreground">{author.name}</p>
                    {author.bio && (
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                            {author.bio}
                        </p>
                    )}
                    {author.twitter && (
                        <a
                            href={`https://x.com/${author.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-sm text-primary hover:underline"
                        >
                            @{author.twitter}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
