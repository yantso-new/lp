# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio/landing page built with React 19, TypeScript, and Tailwind CSS 4. The site showcases a designer/developer portfolio with sections for hero, about, services, work, pricing, and contact (Cal.com integration).

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router (`app/` directory)
- Single-page layout with section-based navigation
- All sections are rendered on the main `app/page.tsx`
- Global layout in `app/layout.tsx` includes font loading and `SmoothScroll` component

### Component Organization
- **`components/layout/`**: Layout components (navbar)
- **`components/sections/`**: Page sections (hero, about, services, work, pricing, contact, logo-marquee, work-marquee)
- **`components/ui/`**: Reusable UI components (button, card, badge, separator, sheet, wave-background, smooth-scroll)
- **`components/work/`**: Work-specific components (work-card)

### Key Features & Patterns

**Cal.com Integration**
- Contact section uses `@calcom/embed-react` for booking
- Requires `NEXT_PUBLIC_CALCOM_URL` environment variable
- Cal.com embed is configured in `components/sections/contact.tsx`
- Custom styling for Cal.com embed in `app/globals.css`

**Smooth Scrolling**
- `SmoothScroll` component handles anchor link navigation with custom easing
- Implements `easeInOutCubic` animation
- Accounts for fixed header (80px offset)
- Applied globally via root layout

**Wave Background Animation**
- `Waves` component (`components/ui/wave-background.tsx`) creates interactive SVG wave animation
- Uses `simplex-noise` for smooth wave generation
- Mouse interaction affects wave distortion
- Implemented with Canvas API and requestAnimationFrame

**Marquee Animations**
- Logo and work marquees use custom CSS animations (`animate-marquee`, `animate-marquee-reverse`)
- Animations defined in `app/globals.css`
- Pause on hover functionality

### Styling System

**Tailwind CSS 4**
- Using Tailwind v4 with `@tailwindcss/postcss` plugin
- Custom theme configuration inline in `globals.css` using `@theme inline`
- Dark mode forced via `className="dark"` on `<html>` element
- Color system uses OKLCH color space for better perceptual uniformity
- Custom CSS variables for theming (--background, --foreground, --primary, etc.)
- `tw-animate-css` package for additional animations

**Typography**
- Geist Sans and Geist Mono fonts loaded from Google Fonts
- Font variables defined in root layout and used via Tailwind

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- Use for importing components: `import { Navbar } from "@/components/layout/navbar"`

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_CALCOM_URL=https://cal.com/your-username
```

## Next.js Configuration

- Remote images enabled for `images.unsplash.com`
- TypeScript strict mode enabled
- ESModuleInterop enabled for better module compatibility
