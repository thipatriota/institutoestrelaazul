import imageUrlBuilder from "@sanity/image-url";

import type { SanityImage } from "@/types/blog";

import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
    return builder.image(source);
}

/** Return a fully-qualified URL string ready for <img> or next/image */
export function imageUrl(source: SanityImage | undefined, width = 1200): string {
    if (!source?.asset) return "";
    return urlFor(source).width(width).auto("format").quality(80).url();
}
