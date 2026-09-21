# Portfolio V2 — Design Specification

## Purpose
Refine the existing `cv-template-redesign` portfolio without replacing its current structure. Preserve the sections that already work well, especially the About/Resume experience timeline and Contact page, while improving the visual system, restoring Blog, expanding portfolio media support, restructuring skills, and adding a dedicated AWS Student Builder section.

This iteration should make the site feel more personal, more technical, and more aligned with Mykhailo Polishchuk's actual interests in data, AI, automation, AWS, marketing, and research.

## Rollback Point
The current approved version before this iteration is commit:

`81a7555e28e4866be281bb3a5dc4ffea7ea7f60e`

All new work stays on `cv-template-redesign`. `main` must remain unchanged.

## Global Content Rules
- Keep experience descriptions broad enough to avoid exposing proprietary or internal implementation details.
- Preserve resume-supported metrics exactly as already used.
- Avoid invented projects, publications, employers, achievements, or metrics.
- Prefer natural sentence structure with shorter sentences and commas/periods instead of frequent em dashes.
- Keep Contact functionality unchanged unless a bug is discovered during implementation.
- Keep the existing Experience timeline layout and visual pattern.

## Visual Direction
Replace the orange-led accent system with a blue/navy-led system.

Primary palette:

```text
Deep navy: #0F172A
Primary blue: #2563EB
Light blue: #60A5FA
Soft blue surface: #EFF6FF
Neutral surface: #F8FAFC
Text: #0F172A
```

The site should read visually as blue first, with white and neutral gray surfaces. Do not use AWS logos, Amazon branding, or language that implies endorsement or employment by AWS.

Gradients should be restrained and mostly combine navy, blue, pale blue, white, and gray.

## Navigation
Use the following visible navigation order:

1. About
2. Portfolio
3. Blog
4. Contact

Blog must be restored as a first-class route.

## About & Resume
Preserve the current page structure and especially the current Experience timeline.

### Skills
Replace the current three skill groups with:

### Data & Technical
- Python
- SQL
- Excel
- Power BI
- Statistics
- Machine Learning
- Data Visualization
- Data Analytics
- React
- TypeScript
- MongoDB

### AI & Automation
- AWS
- n8n
- AI Workflows
- CLI Agents
- Automation

### Business & Professional
- Marketing Analytics
- Financial Analytics
- Research
- Data Storytelling
- Analytical Thinking
- Problem Solving
- Communication
- Teamwork

Do not include FastAPI in this iteration.

### AWS Student Builder Section
Add a dedicated section distinct from the generic Honors & Leadership list.

Purpose: highlight participation in the AWS Student Builder program and leave room for the future Builder Group website link.

Required data shape should support:

```ts
{
  title: "AWS Student Builder",
  description: string,
  href: string | null
}
```

For now `href` is null or empty, so the section should not render a dead external link. When a URL is added later, the same component should display a clear link/button without redesigning the page.

The wording should focus on cloud learning, student community, technical events, and peer engagement in broad terms.

## Portfolio
Keep the same four project areas:

1. AI & Workflow Automation
2. Research & Sports Analytics
3. Marketing Analytics & Growth
4. Financial & Survey Analytics

### Project Media Model
Extend each portfolio item to support optional visual media.

Recommended config fields:

```ts
image?: string
imageAlt?: string
```

If an image exists, render it prominently on the project card and detail page.

If no image exists, render a polished blue/neutral visual placeholder rather than a broken image or empty gap.

The media support should be reusable so future published work can be added by inserting an image path in config only.

### AI & Workflow Automation
Keep the description intentionally broad and metric-driven.

Update tags to emphasize current tooling and interests. Use tags such as:
- AI
- Automation
- n8n
- CLI Agents
- AWS

Do not expose internal architecture or private workflows.

### Research & Sports Analytics
Keep the 80,000+ records metric and the current research/statistics positioning.

Add a publication/research-image slot. There is no PDF download and no publication link requirement in this iteration.

Until a published image is uploaded, render a clean placeholder indicating that publication visuals will be added when available.

### Marketing Analytics & Growth
Keep the existing resume-supported metrics.

Add this external project/company URL:

`https://kz.kiev.ua/`

The detail page may render a contextual external-link CTA such as `Visit website` when `liveUrl` is present.

### Financial & Survey Analytics
Keep the existing positioning around Excel, financial analytics, regression, Qualtrics, SPSS, and structured statistical analysis.

Do not invent new quantitative results.

## Blog
Restore the original template's Blog concept but personalize it for this portfolio.

Required routes:

```text
/blog
/blog/[slug]
```

### Blog Content Model
Use a central static config model for now. Do not add a CMS, database, or external publishing platform.

Suggested shape:

```ts
{
  slug: string,
  title: string,
  excerpt: string,
  date: string,
  readingTime: string,
  tags: string[],
  content: string
}
```

### Initial State
Do not create fake articles.

If there are no real posts yet, `/blog` should render a designed empty state with language similar to:

`Writing on AI, data, AWS, marketing, and research. Posts coming soon.`

The page should remain complete and intentional even with zero posts.

When real posts are added later, the route should automatically render them from the same config structure.

## Writing Style
Review user-facing copy across Home, About, Portfolio, and Blog.

- Reduce em dashes.
- Prefer natural short sentences.
- Avoid generic AI-sounding phrases when a simpler sentence works.
- Keep claims grounded in the resume and existing approved content.
- Maintain a professional but student-appropriate tone.

## Homepage
Preserve the existing homepage structure unless a small copy/color adjustment is needed for consistency with the new blue theme.

Do not add a large new subsystem to the homepage in this iteration.

## Contact
Keep the existing direct-contact implementation:
- Email
- LinkedIn
- GitHub

Do not reintroduce the fake form or API route.

## Technical Approach
Keep the current Next.js App Router architecture and centralized `src/data/config.ts` content model.

Expected file areas:

```text
src/data/config.ts
src/app/globals.css
src/components/NavBar.tsx
src/app/about/page.tsx
src/app/portfolio/page.tsx
src/app/portfolio/[slug]/page.tsx
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
src/app/page.tsx   (copy/theme consistency only if needed)
```

Avoid unnecessary package additions.

## Verification Requirements
Before completion, verify:

1. `main` remains unchanged.
2. Blog appears in navigation.
3. `/blog` renders with zero posts without error.
4. `/blog/[slug]` supports real posts when config entries exist.
5. No fake demo posts remain.
6. Experience timeline is preserved.
7. Contact still uses direct links only.
8. FastAPI is removed from visible skills/tags.
9. AWS, n8n, CLI Agents, and Data Analytics are visible in the intended skill/project areas.
10. `https://kz.kiev.ua/` is attached to Marketing Analytics & Growth.
11. Portfolio media gracefully handles both image-present and image-absent cases.
12. Research project has a publication-image placeholder but no PDF download.
13. No broken external links are rendered for the AWS Student Builder section while its URL is empty.
14. Orange-led styling is replaced with blue/navy-led styling.
15. User-facing copy is reviewed for excessive em dashes.
