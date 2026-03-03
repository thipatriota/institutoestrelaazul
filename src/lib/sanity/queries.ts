import type { Category, Post, PostCard } from "@/types/blog";

import { client } from "./client";

/* ------------------------------------------------------------------ */
/*  Post projections                                                  */
/* ------------------------------------------------------------------ */

const postCardProjection = `{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  updatedAt,
  mainImage,
  "categories": categories[]->{ title, slug },
  "author": author->{ name },
  readingTime
}`;

const postFullProjection = `{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  updatedAt,
  mainImage,
  body,
  "author": author->{ _id, name, slug, bio, image, twitter },
  "categories": categories[]->{ _id, title, slug, description, seo },
  seo,
  readingTime
}`;

/* ------------------------------------------------------------------ */
/*  Queries                                                           */
/* ------------------------------------------------------------------ */

export async function getAllPosts(): Promise<PostCard[]> {
    return client.fetch(
        `*[_type == "post"] | order(publishedAt desc) ${postCardProjection}`
    );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    return client.fetch(
        `*[_type == "post" && slug.current == $slug][0] ${postFullProjection}`,
        { slug }
    );
}

export async function getLatestPosts(limit = 20): Promise<PostCard[]> {
    return client.fetch(
        `*[_type == "post"] | order(publishedAt desc) [0...$limit] ${postCardProjection}`,
        { limit }
    );
}

export async function getAllCategories(): Promise<Category[]> {
    return client.fetch(
        `*[_type == "category"] | order(title asc) { _id, title, slug, description, seo }`
    );
}

export async function getPostsByCategory(categorySlug: string): Promise<PostCard[]> {
    return client.fetch(
        `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) ${postCardProjection}`,
        { categorySlug }
    );
}

export async function getRelatedPosts(
    currentSlug: string,
    categorySlug: string,
    limit = 3
): Promise<PostCard[]> {
    return client.fetch(
        `*[_type == "post" && slug.current != $currentSlug && $categorySlug in categories[]->slug.current] | order(publishedAt desc) [0...$limit] ${postCardProjection}`,
        { currentSlug, categorySlug, limit }
    );
}

/** Lightweight query for generateStaticParams */
export async function getAllPostSlugs(): Promise<{ slug: { current: string } }[]> {
    return client.fetch(`*[_type == "post"]{ slug }`);
}

/** Lightweight query for generateStaticParams */
export async function getAllCategorySlugs(): Promise<{ slug: { current: string } }[]> {
    return client.fetch(`*[_type == "category"]{ slug }`);
}
