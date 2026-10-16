This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` file in the root directory with the following variable:

```env
NEXT_PUBLIC_CALCOM_URL=https://cal.com/your-username
```

Replace `your-username` with your Cal.com username. The URL can be:
- `https://cal.com/your-username` (will automatically use the embed version)
- `https://cal.com/your-username/embed` (explicit embed URL)

If this variable is not set, the contact section will display a placeholder message.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Blog CMS (Sanity)

The blog uses Sanity Studio at `/studio`, an index at `/blog`, and articles at
`/blog/[slug]`. The Studio has Articles, Authors, and Categories. Articles support
rich text, inline images and captions, an optional cover image, an excerpt,
author, categories, a publication date, and optional SEO overrides.

### Connect your project

1. Sign in at [Sanity Manage](https://www.sanity.io/manage) and create a project
   (or use an existing project). Create a **public** dataset named `production`.
   Public here means published content is readable by the website; editing still
   requires an authorized Sanity account. The website queries only the published
   perspective and never requests drafts.
2. Copy `.env.example` to `.env.local` if you do not already have a local env file.
   Set `NEXT_PUBLIC_SANITY_PROJECT_ID` to the ID shown in Manage and
   `NEXT_PUBLIC_SANITY_DATASET=production`. Preserve your existing Cal.com value.
3. In the project's API settings, allow `http://localhost:3000` as a CORS origin
   **with credentials**. Add your production website origin (for example,
   `https://www.yantso.com`) with credentials as well, so the embedded Studio can
   authenticate. Add any preview origin you use explicitly.
4. Restart `pnpm dev`, open `/studio`, and sign in with your Sanity account.
5. Set the same two Sanity variables in your hosting provider before rebuilding
   and deploying. No API token is needed for this public-dataset setup.

If no project ID is configured, `/studio` shows connection instructions and the
blog shows its coming-soon state. Configured CMS failures surface as errors;
they are not silently treated as an empty blog.

### Prepare the first 10 articles

Create an Author record first and any Categories you need, then create the
articles as drafts. Supply a title, generate the URL slug, add the excerpt,
author, publication date, and body. Images require alternative text. SEO title
and description are optional and fall back to the title and excerpt.

Click **Publish** when an article is ready. Only published articles whose
publication date has arrived appear on the website. A future date hides an
already-published article until that date; it does not automatically publish a
draft. Sanity publication and draft scheduling are separate operations.

Public blog reads use Sanity's API CDN and carry the `portfolio-blog.article-list`
or `portfolio-blog.article-detail` request tag for traffic diagnostics.
Content is cached with a 60-second revalidation interval. Refresh requests after
that interval trigger regeneration, so changes may require a subsequent refresh
to appear. New article URLs do not require rebuilding the site. Published articles
are included in `/sitemap.xml` and have canonical URLs, social metadata, and
BlogPosting structured data. Draft preview / visual editing is not configured.

`DESIGN.md` and `/design-system` document the editorial UI. Studio and the design
catalog are excluded from indexing.

### Verification

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Use Node.js 22.12+ for the current Sanity dependencies. This repository uses pnpm
and commits `pnpm-lock.yaml`.
