import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Article, BlogImage } from "@/sanity/lib/articles";
import { imageUrl } from "@/sanity/lib/image";

export function articleHeadingId(key: string) {
  return `section-${key}`;
}

const components: PortableTextComponents = {
  block: {
    h2: ({ value, children }) => <h2 id={articleHeadingId(value._key || "")}>{children}</h2>,
  },
  types: {
    image: ({ value }: { value: BlogImage }) => {
      const src = imageUrl(value);
      if (!src) return null;
      return <figure><Image src={src} alt={value.alt || ""} width={1600} height={1000} sizes="(max-width: 768px) 100vw, 704px" />{value.caption ? <figcaption>{value.caption}</figcaption> : null}</figure>;
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "";
      // Enforce the schema's URL policy for imported content as well.
      if (!/^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(href)) return <>{children}</>;
      return <a href={href}>{children}</a>;
    },
  },
};

export function ArticleBody({ body }: { body: Article["body"] }) {
  return <div className="article-body"><PortableText value={body} components={components} /></div>;
}
