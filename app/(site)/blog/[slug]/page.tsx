import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody, articleHeadingId } from "@/components/blog/article-body";
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
  const image = article.coverImage ? imageUrl(article.coverImage, 1200) : article.coverSrc;
  return {
    title, description, alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { title, description, url: `/blog/${article.slug}`, type: "article", publishedTime: article.publishedAt, modifiedTime: article._updatedAt, authors: article.author ? [article.author.name] : [], images: image ? [{ url: image, alt: article.coverImage?.alt || article.coverAlt }] : ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : ["/opengraph-image"] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const cover = article.coverImage ? imageUrl(article.coverImage) : article.coverSrc;
  const headings = article.body.filter((block) => block._type === "block" && "style" in block && block.style === "h2");
  const wordCount = article.body.reduce((count, block) => count + ("children" in block && Array.isArray(block.children) ? block.children.map((span) => "text" in span ? span.text : "").join(" ").split(/\s+/).filter(Boolean).length : 0), 0);
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));
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
      <article>
        <header className="editorial-reading">
        <p className="editorial-eyebrow">{article.categories?.filter(Boolean).map((category) => category.title).join(" · ") || "Notes"}</p>
        <h1 className="editorial-title">{article.title}</h1>
        <p className="editorial-intro">{article.excerpt}</p>
        <div className="editorial-meta mt-6">{article.author ? <span>{article.author.name}</span> : null}<time dateTime={article.publishedAt}>{articleDate(article.publishedAt)}</time><span>{readingMinutes} min read</span></div>
        </header>
        {cover ? <Image className="article-cover article-cover-wide" src={cover} alt={article.coverImage?.alt || article.coverAlt || ""} width={1536} height={1024} sizes="(max-width: 1152px) 100vw, 1088px" preload /> : null}
        <div className={headings.length ? "article-layout" : "editorial-reading"}>
          {headings.length ? <nav aria-label="In this article" className="article-contents"><p className="editorial-eyebrow">In this article</p><ol>{headings.map((heading) => <li key={heading._key}><a className="editorial-link" href={`#${articleHeadingId(heading._key || "")}`}>{"children" in heading && Array.isArray(heading.children) ? heading.children.map((span) => "text" in span ? String(span.text) : "").join("") : ""}</a></li>)}</ol></nav> : null}
          <div className="article-reading-content">
        <ArticleBody body={article.body || []} />
        <div className="editorial-empty"><Link href="/blog" className="editorial-link">← All articles</Link></div>
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </main>
  );
}
