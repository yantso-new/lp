import Link from "next/link";

export function BlogHeader() {
  return (
    <nav aria-label="Blog navigation" className="editorial-header">
      <Link href="/" className="editorial-link">Yaniv Tsoref</Link>
      <Link href="/blog" className="editorial-link">Blog</Link>
    </nav>
  );
}
