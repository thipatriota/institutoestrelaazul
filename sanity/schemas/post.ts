import { defineField, defineType } from "sanity";

export const postSchema = defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Título",
            type: "string",
            validation: (rule) => rule.required().max(120),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "author",
            title: "Autor",
            type: "reference",
            to: [{ type: "author" }],
        }),
        defineField({
            name: "mainImage",
            title: "Imagem Principal",
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
            name: "publishedAt",
            title: "Data de Publicação",
            type: "datetime",
        }),
        defineField({
            name: "updatedAt",
            title: "Data de Atualização",
            type: "datetime",
        }),
        defineField({
            name: "excerpt",
            title: "Resumo",
            type: "text",
            rows: 3,
            validation: (rule) => rule.max(160),
            description: "Breve resumo do post (máx. 160 caracteres). Usado como meta description.",
        }),
        defineField({
            name: "body",
            title: "Conteúdo",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "Citação", value: "blockquote" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Negrito", value: "strong" },
                            { title: "Itálico", value: "em" },
                        ],
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "Link",
                                fields: [
                                    defineField({
                                        name: "href",
                                        type: "url",
                                        title: "URL",
                                        validation: (rule) =>
                                            rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                                    }),
                                ],
                            },
                            {
                                name: "referenceTooltip",
                                type: "object",
                                title: "Referência (Tooltip)",
                                icon: () => "💡",
                                fields: [
                                    defineField({
                                        name: "title",
                                        type: "string",
                                        title: "Título (Opcional)",
                                    }),
                                    defineField({
                                        name: "text",
                                        type: "array",
                                        title: "Texto da Referência",
                                        description: "Pode conter links ou texto normal.",
                                        of: [
                                            {
                                                type: "block",
                                                styles: [],
                                                lists: [],
                                                marks: {
                                                    decorators: [
                                                        { title: "Negrito", value: "strong" },
                                                        { title: "Itálico", value: "em" },
                                                    ],
                                                    annotations: [
                                                        {
                                                            name: "link",
                                                            type: "object",
                                                            title: "Link",
                                                            fields: [
                                                                defineField({
                                                                    name: "href",
                                                                    type: "url",
                                                                    title: "URL",
                                                                    validation: (rule) =>
                                                                        rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                                                                }),
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    }),
                                    defineField({
                                        name: "image",
                                        type: "image",
                                        title: "Imagem Opcional",
                                        options: { hotspot: true },
                                    }),
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: "alt",
                            title: "Texto Alternativo",
                            type: "string",
                        }),
                        defineField({
                            name: "caption",
                            title: "Legenda",
                            type: "string",
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "categories",
            title: "Categorias",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "object",
            options: { collapsible: true, collapsed: true },
            fields: [
                defineField({
                    name: "focusKeyword",
                    title: "Palavra-chave Principal",
                    type: "string",
                    description: "A palavra-chave principal do artigo. Use no título, primeiro parágrafo e ao longo do texto.",
                }),
                defineField({
                    name: "keywords",
                    title: "Palavras-chave",
                    type: "array",
                    of: [{ type: "string" }],
                    options: { layout: "tags" },
                    description: "Palavras-chave secundárias separadas por Enter. Usadas para organização e mecanismos de busca.",
                }),
                defineField({
                    name: "metaTitle",
                    title: "Meta Title",
                    type: "string",
                    validation: (rule) => rule.max(60),
                    description: "Título exibido no Google (máx. 60 caracteres). Se vazio, usa o título do post.",
                }),
                defineField({
                    name: "metaDescription",
                    title: "Meta Description",
                    type: "text",
                    rows: 2,
                    validation: (rule) => rule.max(160),
                    description: "Descrição exibida no Google (máx. 160 caracteres). Se vazio, usa o resumo do post.",
                }),
                defineField({
                    name: "ogImage",
                    title: "Imagem de Compartilhamento (OG Image)",
                    type: "image",
                    description: "Imagem mostrada ao compartilhar no Facebook/LinkedIn/WhatsApp. Se vazio, usa a imagem principal.",
                }),
                defineField({
                    name: "canonicalUrl",
                    title: "Canonical URL",
                    type: "url",
                    description: "URL canônica se o conteúdo foi publicado originalmente em outro lugar.",
                }),
                defineField({
                    name: "noIndex",
                    title: "Esconder do Google (noindex)",
                    type: "boolean",
                    initialValue: false,
                    description: "Ative para impedir que este post apareça nos resultados de busca.",
                }),
            ],
        }),
        defineField({
            name: "readingTime",
            title: "Tempo de Leitura (min)",
            type: "number",
            description: "Calculado a partir do conteúdo (~200 palavras/min).",
        }),
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare({ title, author, media }) {
            return {
                title,
                subtitle: author ? `por ${author}` : "",
                media,
            };
        },
    },
    orderings: [
        {
            title: "Data de Publicação (mais recente)",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
});
