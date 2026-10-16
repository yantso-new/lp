import { defineArrayMember, defineField, defineType } from "sanity";

const imageFields = [
  defineField({ name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "caption", type: "string" }),
];

const blockContent = defineType({
  name: "blockContent", title: "Article body", type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Paragraph", value: "normal" }, { title: "Heading", value: "h2" }, { title: "Subheading", value: "h3" }, { title: "Quote", value: "blockquote" }],
      lists: [{ title: "Bullet list", value: "bullet" }, { title: "Numbered list", value: "number" }],
      marks: {
        decorators: [{ title: "Bold", value: "strong" }, { title: "Italic", value: "em" }, { title: "Code", value: "code" }],
        annotations: [{ name: "link", type: "object", title: "Link", fields: [defineField({ name: "href", type: "url", validation: (rule) => rule.required().uri({ scheme: ["http", "https", "mailto", "tel"], allowRelative: true }) })] }],
      },
    }),
    defineArrayMember({ type: "image", options: { hotspot: true }, fields: imageFields }),
  ],
});

const author = defineType({
  name: "author", title: "Authors", type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "bio", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Portrait", type: "image", options: { hotspot: true }, fields: imageFields }),
  ],
  preview: { select: { title: "name", media: "image" } },
});

const category = defineType({
  name: "category", title: "Categories", type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
  ],
});

const article = defineType({
  name: "article", title: "Articles", type: "document",
  groups: [{ name: "content", title: "Content", default: true }, { name: "seo", title: "SEO" }],
  fields: [
    defineField({ name: "title", type: "string", group: "content", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", group: "content", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required().custom((value) => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) ? true : "Use lowercase letters, numbers, and hyphens.") }),
    defineField({ name: "excerpt", type: "text", rows: 3, group: "content", description: "Short introduction for the blog index and search engines.", validation: (rule) => rule.required().max(300) }),
    defineField({ name: "coverImage", type: "image", group: "content", options: { hotspot: true }, fields: imageFields }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }], group: "content", validation: (rule) => rule.required() }),
    defineField({ name: "categories", type: "array", group: "content", of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })], validation: (rule) => rule.unique() }),
    defineField({ name: "publishedAt", title: "Publication date", type: "datetime", group: "content", description: "Publish the document when ready. Future-dated articles stay hidden until this date.", validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "blockContent", group: "content", validation: (rule) => rule.required().min(1) }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", group: "seo", description: "Optional. Falls back to the article title.", validation: (rule) => rule.max(60).warning() }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3, group: "seo", description: "Optional. Falls back to the excerpt.", validation: (rule) => rule.max(160).warning() }),
  ],
  orderings: [{ title: "Publication date, newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "author.name", media: "coverImage" } },
});

export const schemaTypes = [article, author, category, blockContent];
