import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { BlogHeader } from "@/components/blog/blog-header";

export const metadata: Metadata = { title: "Design foundations", robots: { index: false, follow: false } };

export default function DesignSystemPage() {
  return <main className="editorial-shell editorial-stack">
    <BlogHeader />
    <h1 className="editorial-title">Design foundations</h1>
    <p className="editorial-intro">The dark portfolio and editorial system. Implementation rules are in DESIGN.md. Controls use the existing Radix-backed Button primitive.</p>
    <section className="editorial-stack"><h2 className="text-2xl font-semibold">Live tokens</h2><div className="flex flex-wrap gap-6">{["background", "foreground", "muted", "muted-foreground", "border", "ring"].map((token) => <div key={token}><div className="h-16 w-24 rounded-lg border" style={{ background: `var(--${token})` }} /><p className="mt-2 text-sm">--{token}</p></div>)}</div></section>
    <section className="editorial-stack"><h2 className="text-2xl font-semibold">Typography & layout</h2><p className="editorial-title">Editorial title</p><p className="editorial-intro">Geist Sans introduction, 18px with 1.7 line height. Reading columns stop at 44rem.</p><p className="editorial-eyebrow">Metadata / eyebrow · 14px</p><p>Spacing: 4px base · 24px stack · 16–32px gutters. Media radius: --radius. Separation: borders.</p></section>
    <section className="editorial-stack"><h2 className="text-2xl font-semibold">Buttons & links</h2><div className="flex flex-wrap gap-4"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button><Button variant="destructive">Destructive</Button><Button disabled>Disabled</Button><Button size="sm">Small</Button><Button size="lg">Large</Button></div><a className="editorial-link" href="#feedback">Editorial link: hover or focus to inspect</a></section>
    <section id="feedback" className="editorial-empty"><h2 className="text-2xl font-semibold">Empty state</h2><p className="editorial-intro">First articles coming soon.</p><p className="editorial-intro" role="status">Loading articles…</p><p className="editorial-intro">Error: The blog is temporarily unavailable.</p></section>
    <section className="article-body editorial-reading"><h2>Rich-text composition</h2><p>Readable body copy, with <a href="#feedback">an inline link</a> and <code>inline code</code>.</p><blockquote>Quotes use a simple border and muted text.</blockquote><ul><li>Lists preserve semantic markers.</li><li>Rows and content wrap on mobile.</li></ul></section>
  </main>;
}
