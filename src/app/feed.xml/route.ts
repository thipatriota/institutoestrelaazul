import { getLatestPosts } from "@/lib/sanity/queries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://institutoestrelaazul.com.br";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Instituto Estrela Azul";

function escapeXml(text: string) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    const posts = await getLatestPosts(50);

    const items = posts
        .map(
            (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug.current}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug.current}</guid>
      <description>${escapeXml(post.excerpt ?? "")}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${escapeXml(post.author.name)}</author>
    </item>`
        )
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Artigos sobre espiritualidade, autoconhecimento e medicinas da floresta.</description>
    <language>pt-BR</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
