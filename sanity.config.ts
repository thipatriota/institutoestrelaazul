import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { authorSchema } from "./sanity/schemas/author";
import { categorySchema } from "./sanity/schemas/category";
import { postSchema } from "./sanity/schemas/post";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
    name: "instituto-estrela-azul",
    title: "Instituto Estrela Azul — Blog",

    projectId,
    dataset,

    plugins: [structureTool()],

    schema: {
        types: [postSchema, authorSchema, categorySchema],
    },
});
