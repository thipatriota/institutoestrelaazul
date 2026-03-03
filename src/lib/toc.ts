/** Extract headings from Portable Text blocks for the TOC */
export interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function extractTocItems(
    body: Array<{ _type: string; style?: string; children?: Array<{ text?: string }> }>
): TocItem[] {
    return body
        .filter(
            (block) =>
                block._type === "block" &&
                (block.style === "h2" || block.style === "h3")
        )
        .map((block) => {
            const text = block.children?.map((c) => c.text ?? "").join("") ?? "";
            const id = text
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");
            return {
                id,
                text,
                level: block.style === "h3" ? 3 : 2,
            };
        });
}
