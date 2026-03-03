import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = "2024-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
});

/** Client with auth token — for server-side fetches that need drafts or write access */
export const previewClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});
