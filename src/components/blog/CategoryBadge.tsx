import Link from "next/link";

interface CategoryBadgeProps {
    title: string;
    slug: string;
    active?: boolean;
}

export function CategoryBadge({ title, slug, active = false }: CategoryBadgeProps) {
    return (
        <Link
            href={`/blog/category/${slug}`}
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${active
                    ? "bg-[var(--accent)] text-white"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
        >
            {title}
        </Link>
    );
}
