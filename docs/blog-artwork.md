# Blog cover artwork

Generated with the built-in Image Generation tool. Original PNGs are retained in the generation output directory. The site uses optimized WebP assets in `public/blog/`.

## Shared art direction

Premium editorial photography with tactile physical materials on a charcoal studio tabletop. Restrained ivory and graphite palette, soft directional daylight, quiet designer portfolio aesthetic. Landscape 1536 × 1024 composition with subjects centered to support a 2:1 desktop crop and 3:2 mobile crop. No text, logos, watermarks, gradients, or digital overlays.

## Prompts and asset mapping

- `public/blog/ai-slop-sculpture.webp`: A partially carved pale stone abstract sculpture, a refined flowing geometric form emerging from a rough rectangular stone block. Small stone chips and two sculpting tools nearby. Clearly visible transition from rough to smooth. Low three quarter camera angle.
- `public/blog/mini-design-system.webp`: Retains the previously generated toolkit photograph, with ivory paper specimens, grayscale swatches, graphite geometric blocks, and modular rectangular tiles on a charcoal tabletop.
- `public/blog/design-feedback.webp`: Overhead designer desk with three ivory sheets: a rough pencil website layout, a layout annotated with graphite circles and arrows, and a resolved orderly abstract composition. No legible words, only line and image blocks. A graphite pencil beside the papers. Clear progression from rough to resolved.
- `public/blog/static-architecture.webp`: A balanced architectural model made of matte ivory board and graphite blocks on a charcoal base. Strong proportions, open rectangular spaces, precise planes, a simple sculptural pavilion. Completely still, low architectural three quarter angle.
- `public/blog/design-foundations.webp`: Six simple tactile wooden and graphite blocks arranged into one coherent stable structure. Cube, cylinder, and rectangular beams. Pale natural wood and charcoal matte surfaces. Minimal composition and low three quarter studio view.

Article assignments and descriptive alt text live in `content/article-covers.ts`.

## Shared footer

The blog index and every article inherit `components/layout/footer.tsx` through `app/(site)/layout.tsx`, exactly as the homepage does. Keep the footer in that shared layout so changes apply consistently and each page has a single footer.
