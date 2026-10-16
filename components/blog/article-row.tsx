import Link from "next/link";
import type { ArticleSummary } from "@/sanity/lib/articles";

export function articleDate(date: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(date));
}

export function ArticleRow({ article }: { article: ArticleSummary }) {
  return (
    <Link href={`/blog/${article.slug}`} className="article-row">
      <div className="editorial-meta">
        <time dateTime={article.publishedAt}>{articleDate(article.publishedAt)}</time>
        {article.categories?.filter(Boolean).map((category) => <span key={category._id}>{category.title}</span>)}
      </div>
      <h2>{article.title}</h2>
      <p>{article.excerpt}</p>
    </Link>
  );
}
