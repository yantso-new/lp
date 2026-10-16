import type { Metadata } from "next";
import { BlogHeader } from "@/components/blog/blog-header";
import { ArticleRow } from "@/components/blog/article-row";
import { getArticles } from "@/sanity/lib/articles";

export const revalidate = 60;
export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on product design, building websites, and making better digital experiences by Yaniv Tsoref.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Yaniv Tsoref", description: "Notes on design, websites, and building digital products.", url: "/blog", type: "website" },
};

export default async function BlogPage() {
  const articles = await getArticles();
  return (
    <main className="editorial-shell">
      <BlogHeader />
      <p className="editorial-eyebrow">The blog</p>
      <h1 className="editorial-title">Notes on design & building.</h1>
      <p className="editorial-intro">Ideas, lessons, and practical thinking from working on digital products and the websites that bring them to life.</p>
      {articles.length ? <div className="article-list">{articles.map((article) => <ArticleRow key={article._id} article={article} />)}</div> : <div className="editorial-empty"><h2 className="text-2xl font-semibold tracking-tight">First articles coming soon.</h2><p className="editorial-intro">A space for sharing what I learn along the way. Check back for the first notes.</p></div>}
    </main>
  );
}
