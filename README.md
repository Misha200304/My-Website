# Premium Portfolio Website (Next.js + MDX)

Professional personal portfolio built with:

- Next.js App Router + TypeScript
- Tailwind CSS + CSS variable design tokens
- MDX content collections with typed frontmatter validation
- SEO metadata (global + per-project), robots, and sitemap
- Accessible navigation and forms (skip link, keyboard focus states, reduced motion)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

4. Validate quality gates:
```bash
npm run lint
npm run build
```

## Project Structure

```txt
app/
  about/
  certificates/
  contact/
  coursework/
  projects/
    [slug]/
  resume/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  forms/
  layout/
  mdx/
  project/
  theme/
  ui/
content/
  projects/*.mdx
  certificates/*.mdx
  coursework/*.mdx
  writing/*.mdx
lib/
  content/
  contact/
  seo.ts
  utils.ts
public/
  images/
  resume.pdf
```

## Add a New Project (MDX)

1. Create a new file in `content/projects/`:
```txt
content/projects/my-new-project.mdx
```

2. Use required frontmatter fields:

```mdx
---
title: "Project Title"
summary: "One-line case study summary."
date: "2026-01-15"
tags:
  - "Data Science"
  - "Marketing Analytics"
image: "/images/projects/my-project-image.svg"
imageAlt: "Descriptive alt text"
role: "Your role"
responsibilities:
  - "Responsibility 1"
  - "Responsibility 2"
stack:
  - "Next.js"
  - "TypeScript"
keyMetric: "Optional quantified result"
featured: false
githubUrl: "https://github.com/..."
demoUrl: "https://..."
reportUrl: "https://..."
ogImage: "/images/projects/my-project-og.svg"
---
```

3. Add body sections using markdown headings:
- `## Overview (Problem + Context)`
- `## My Role + Responsibilities`
- `## Approach`
- `## Implementation Details (Stack + Architecture Choices)`
- `## Results (Metrics + Outcomes)`
- `## What I’d Do Next (Reflection)`
- `## Links`

4. The page is auto-available at `/projects/my-new-project`.

## Add Certificates and Coursework

- Certificates: add `.mdx` files in `content/certificates/`.
- Coursework: add `.mdx` files in `content/coursework/`.
- All collections are validated through typed schemas in `lib/content/schema.ts`.

## Image Guidelines

- Store images in `public/images/`.
- Reference with root-relative paths, e.g. `/images/projects/churn-retention.svg`.
- Use meaningful alt text in frontmatter (`imageAlt`).
- Keep dimensions optimized; prefer modern compressed formats or SVG for placeholders.

## Contact Form Notes

- Contact form uses a server action in `app/contact/actions.ts`.
- Includes honeypot spam field (`company`) and in-memory rate limiting.
- Current behavior: logs submissions to server console.
- For future email integration, copy `.env.local.example` to `.env.local` and fill values.

## SEO + Metadata

- Global metadata configured in `app/layout.tsx`.
- Per-project metadata generated in `app/projects/[slug]/page.tsx`.
- Robots and sitemap are implemented via metadata routes:
  - `app/robots.ts`
  - `app/sitemap.ts`

## Deploy to Vercel

1. Push repository to GitHub.
2. Import repository into Vercel.
3. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL` (required for canonical URLs and OG metadata)
   - Optional future email secrets from `.env.local.example`
4. Deploy.

## Customization Checklist

- Replace `Your Name` placeholders in `lib/seo.ts` and page copy.
- Replace `/public/images/headshot-placeholder.svg` with your real headshot.
- Replace `/public/resume.pdf` with your real resume.
- Update project/certificate/coursework content with your real work.
