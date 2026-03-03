import { defineField, defineType } from "sanity";

export const authorSchema = defineType({
    name: "author",
    title: "Autor",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Nome",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "image",
            title: "Foto",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Texto Alternativo",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "twitter",
            title: "Twitter/X",
            type: "string",
            description: "Handle sem @",
        }),
    ],
    preview: {
        select: { title: "name", media: "image" },
    },
});
