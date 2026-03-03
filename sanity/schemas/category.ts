import { defineField, defineType } from "sanity";

export const categorySchema = defineType({
    name: "category",
    title: "Categoria",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Título",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Descrição",
            type: "text",
            rows: 3,
            validation: (rule) => rule.max(160),
            description: "Breve descrição da categoria (máx. 160 caracteres).",
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "object",
            fields: [
                defineField({
                    name: "metaTitle",
                    title: "Meta Title",
                    type: "string",
                    validation: (rule) => rule.max(60),
                }),
                defineField({
                    name: "metaDescription",
                    title: "Meta Description",
                    type: "text",
                    rows: 2,
                    validation: (rule) => rule.max(160),
                }),
                defineField({
                    name: "ogImage",
                    title: "OG Image",
                    type: "image",
                }),
            ],
        }),
    ],
    preview: {
        select: { title: "title" },
    },
});
