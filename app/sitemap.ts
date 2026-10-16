import type { MetadataRoute } from "next";
import { getArticles } from "@/sanity/lib/articles";

export const revalidate = 60;
const siteUrl = "https://www.yantso.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/case-studies/parcela-ja`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/startups`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/websites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/web-design-lagos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/automations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const articles = await getArticles();
  return [
    ...staticPages,
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((article) => ({ url: `${siteUrl}/blog/${article.slug}`, lastModified: new Date(article._updatedAt), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
