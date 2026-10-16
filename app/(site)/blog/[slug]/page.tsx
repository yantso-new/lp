import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/blog/blog-header";
import { ArticleBody } from "@/components/blog/article-body";
import { articleDate } from "@/components/blog/article-row";
import { getArticle } from "@/sanity/lib/articles";
import { imageUrl } from "@/sanity/lib/image";

export const revalidate = 60;
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false, follow: false } };
  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;
  const image = article.coverImage ? imageUrl(article.coverImage, 1200) : undefined;
  return {
    title, description, alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { title, description, url: `/blog/${article.slug}`, type: "article", publishedTime: article.publishedAt, modifiedTime: article._updatedAt, authors: article.author ? [article.author.name] : [], images: image ? [{ url: image, alt: article.coverImage?.alt }] : ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : ["/opengraph-image"] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const cover = article.coverImage ? imageUrl(article.coverImage) : undefined;
  const structuredData = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: article.title, description: article.excerpt,
    datePublished: article.publishedAt, dateModified: article._updatedAt,
    mainEntityOfPage: `https://www.yantso.com/blog/${article.slug}`,
    ...(article.author ? { author: { "@type": "Person", name: article.author.name } } : {}),
    ...(cover ? { image: cover } : {}),
  };
  return (
    <main className="editorial-shell">
      <BlogHeader />
      <article className="editorial-reading">
        <p className="editorial-eyebrow">{article.categories?.filter(Boolean).map((category) => category.title).join(" · ") || "Notes"}</p>
        <h1 className="editorial-title">{article.title}</h1>
        <p className="editorial-intro">{article.excerpt}</p>
        <div className="editorial-meta mt-6">{article.author ? <span>{article.author.name}</span> : null}<time dateTime={article.publishedAt}>{articleDate(article.publishedAt)}</time></div>
        {cover ? <Image className="article-cover" src={cover} alt={article.coverImage?.alt || ""} width={1600} height={1000} sizes="(max-width: 768px) 100vw, 704px" /> : null}
        <ArticleBody body={article.body || []} />
        <div className="editorial-empty"><Link href="/blog" className="editorial-link">← All articles</Link></div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </main>
  );
}
