import "server-only";
import { cache } from "react";
import { defineQuery } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";
import { client } from "./client";

export type BlogImage = {
  _type: "image";
  _key?: string;
  asset: { _ref: string; _type: "reference" };
  alt: string;
  caption?: string;
  crop?: { top: number; bottom: number; left: number; right: number };
  hotspot?: { x: number; y: number; height: number; width: number };
};

export type Article = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: BlogImage;
  author: { name: string; bio?: string } | null;
  categories: { _id: string; title: string }[];
  seoTitle?: string;
  seoDescription?: string;
  body: (PortableTextBlock | BlogImage)[];
};
export type ArticleSummary = Omit<Article, "body" | "seoTitle" | "seoDescription">;

// All public queries use the published perspective and exclude future dates.
const publishedFilter = `_type == "article" && defined(slug.current) && defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())`;
const summaryFields = `_id, _updatedAt, title, "slug": slug.current, excerpt, publishedAt, coverImage, author->{name, bio}, "categories": categories[]->{_id, title}`;
const articlesQuery = defineQuery(`*[${publishedFilter}] | order(publishedAt desc) {${summaryFields}}`);
const articleQuery = defineQuery(`*[${publishedFilter} && slug.current == $slug][0] {${summaryFields}, body, seoTitle, seoDescription}`);

export const getArticles = cache(async (): Promise<ArticleSummary[]> => {
  if (!client) return [];
  return client.fetch(articlesQuery, {}, { next: { revalidate: 60 } });
});

export const getArticle = cache(async (slug: string): Promise<Article | null> => {
  if (!client) return null;
  return client.fetch(articleQuery, { slug }, { next: { revalidate: 60 } });
});
