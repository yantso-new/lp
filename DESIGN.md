# Design foundations

## Design intent
A restrained, dark portfolio and editorial blog for Yaniv Tsoref. Match the existing Geist typography and neutral palette. Use generous whitespace and clear reading hierarchy. Sanity Studio uses its own editor UI, without the marketing footer or cookie banner.

## Tokens
Source: `app/globals.css` and its Tailwind theme. Background `--background: oklch(0.145 0 0)`, foreground `--foreground: oklch(0.985 0 0)`, muted text `--muted-foreground: oklch(0.708 0 0)`, borders `--border: oklch(1 0 0 / 10%)`, focus `--ring`.
Geist Sans is the body and heading family; Geist Mono is for code. Editorial title: responsive 2.25–3.75rem, weight 600, line-height 1.1, tracking -0.04em. Intro: 1.125rem / 1.7. Body: 1.125rem / 1.85, maximum 44rem. Metadata: 0.875rem. Use a 0.25rem spacing unit, 1–2rem gutters, 6–8rem section padding, and 1.5rem paragraph gaps. Media radius uses `--radius`. Borders provide separation; avoid new shadows. Links transition color over 150ms and show an underlined focus state; respect reduced motion.

## Layout primitives
`.editorial-shell`: centered 72rem shell with responsive gutters. `.editorial-reading`: 44rem reading column. `.editorial-header`: horizontal home/blog navigation. `.editorial-stack`: vertical flow. Rows wrap metadata and titles rather than overflowing. Touch navigation targets are at least 44px tall.

## Component primitives
Existing `components/ui/button.tsx`: Radix Slot backed primary, secondary, outline, ghost, destructive and link buttons. Existing Card, Badge, Separator, Sheet and Accordion retain their established tokens and APIs.
Editorial link: `.editorial-link`, with hover/focus-visible underline. Editorial empty state: `.editorial-empty`, bordered text panel. Article row: `.article-row`, a full linked row separated by borders. Rich text: `.article-body`, styled headings, paragraphs, lists, code, quotes, figures and links. Media uses Next Image with descriptive alt text.

## Feature components
`BlogHeader` composes editorial navigation links. `ArticleRow` composes the row link, title, excerpt and publication metadata. `ArticleBody` renders Portable Text with the documented rich-text styles. Empty blog copy announces upcoming articles. Loading and failure states use plain editorial feedback; CMS errors must not masquerade as an empty blog.

## Accessibility and content
Keep strong foreground contrast, visible keyboard focus, semantic heading order (article title is the only H1), and readable line lengths. Images require alt text in Studio. Dates use English and UTC to keep output consistent. Publish authored articles only when requested. The five authored articles are version-controlled in `content/design-system-basics.ts` and `content/design-refinement.ts`; a published CMS entry with the same slug takes precedence. CMS failures remain visible. Public queries only show published articles with publication dates at or before now.

## Anti-patterns
No new palettes, gradients, decorative cards, artificial article counts, or animations for long-form reading. No CMS configuration details on public blog pages.

## Change log
- 2026-10-07: Documented existing foundations and added editorial primitives for blog and CMS connection feedback. Visual examples live at `/design-system` (noindex).

## Article composition
Article headers retain the 44rem reading measure. `.article-cover-wide` spans the editorial shell with a 2:1 desktop crop and a 3:2 mobile crop. `.article-layout` places a 15rem sticky contents navigation beside the 44rem body on desktop and stacks it above the body on smaller screens. Contents links have 44px targets; section headings preserve anchor offsets. Publication metadata includes an estimated reading time (200 words per minute). Use existing neutral tokens, media radius, and typography throughout.

- 2026-10-16: Added the first authored design-system article, wide cover composition, reading-time metadata, and responsive contents navigation.
