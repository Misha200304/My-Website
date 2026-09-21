# CV Template Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current portfolio presentation layer on `cv-template-redesign` with the selected Next.js CV template, personalized to Mykhailo Polishchuk's resume, using broad/non-proprietary project descriptions, quantified impact, and an AWS-inspired visual palette.

**Architecture:** Use the source template's `src/app`, `src/components`, and `src/data/config.ts` structure as the new application shell. Personal content remains centralized in `src/data/config.ts`; page components consume that data and contain only presentation-specific copy. Remove the previous root `app/`, `components/`, `content/`, and `lib/` application trees so there is only one Next.js App Router source tree.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 3, static configuration data.

**Spec:** `docs/superpowers/specs/2026-09-20-cv-template-redesign-design.md`

## Global Constraints

- Work only on `cv-template-redesign`; do not modify `main`.
- Preserve the upstream MIT license notice from `cekuu35/free-nextjs-cv-template`.
- Do not describe proprietary/internal systems in unnecessary detail.
- Retain resume-supported metrics: ~70% administrative processing reduction, ~50% manual processing reduction, staffing requirement reduction equivalent to 3 employees, +144% site sessions, +100% unique sessions, +30% audience reach/inbound inquiries, and 80,000+ research records.
- Remove the template promotional banner and all `Mae Lin`/demo identity content.
- Remove Blog from navigation and do not ship demo blog content.
- Do not ship a contact form that claims delivery without a real email provider; use direct email, LinkedIn, and GitHub actions instead.
- Visual direction: AWS-inspired, not AWS-branded; primary dark navy `#232F3E`, accent orange `#FF9900`, white/light gray surfaces, restrained gradients.
- Keep the site responsive and preserve the template's overall layout, spacing, and typography hierarchy.

## Review Focus

1. **Demo leakage:** searching the final tree for `Mae Lin`, `maelin`, `Dribbble`, `Read.cv`, demo blog titles, or the template bundle copy should return no user-visible content.
2. **Confidentiality:** portfolio/project copy should communicate domain, skills, and measurable impact without naming internal workflow architecture or proprietary implementation details beyond technologies already present in the resume.
3. **Metric fidelity:** every quantified result displayed must match the uploaded resume and must not be rounded upward or combined into unsupported claims.
4. **Navigation integrity:** every visible nav/CTA link must resolve to an implemented route or an external URL; Blog must not appear.
5. **Download/contact integrity:** the CV link must point to an existing PDF, and Contact must not present a form that implies successful delivery without a connected provider.

---

### Task 1: Replace the old application shell with the selected template foundation

**Files:**
- Create/replace: `src/app/layout.tsx`
- Create/replace: `src/app/not-found.tsx`
- Create/replace: `src/app/globals.css`
- Create/replace: `src/components/NavBar.tsx`
- Create/replace: `src/components/Footer.tsx`
- Create/replace: `src/data/config.ts`
- Replace: `package.json`, `package-lock.json`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `next.config.ts`, `.gitignore`
- Create: `LICENSE`
- Delete obsolete application trees: `app/`, `components/`, `content/`, `lib/`
- Delete obsolete config: `next.config.mjs`, `.eslintrc.json`, `.env.local.example`

**Interfaces:**
- Consumes: approved design spec.
- Produces: one canonical `src/app` Next.js application and shared config exports consumed by later tasks.

- [ ] **Step 1: Stage the upstream template foundation while preserving only relevant files**

Copy the template's structural files listed above, but do not carry over `AI_RULES.md`, `cover.png`, `preview-full.png`, `TemplateBanner.tsx`, blog routes, or demo contact API/form.

- [ ] **Step 2: Preserve the upstream MIT license verbatim**

`LICENSE` must contain the upstream MIT notice beginning with:

```text
MIT License

Copyright (c) 2026 Cenk Kurtoğlu
```

- [ ] **Step 3: Ensure only one App Router tree exists**

Verify repository paths do not contain both root `app/` and `src/app/`:

```bash
find . -maxdepth 2 -type d \( -path './app' -o -path './src/app' \) -print
```

Expected output:

```text
./src/app
```

- [ ] **Step 4: Install dependencies and verify the foundation compiles**

Run:

```bash
npm ci
npm run build
```

Expected: `next build` exits with status 0.

- [ ] **Step 5: Commit the foundation migration**

```bash
git add -A
git commit -m "refactor: adopt cv template foundation"
```

---

### Task 2: Centralize Mykhailo's resume content and broad project positioning

**Files:**
- Modify: `src/data/config.ts`

**Interfaces:**
- Consumes: resume facts and metrics from the approved design/spec.
- Produces: `SITE`, `NAV_LINKS`, `SOCIAL_LINKS`, `SKILL_GROUPS`, `EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS`, and `PROJECTS` used by all pages.

- [ ] **Step 1: Replace demo identity with resume-backed identity**

Use these core values:

```ts
export const SITE = {
  name: "Mykhailo Polishchuk",
  title: "Data Science, AI & Marketing",
  tagline: "I turn data into better decisions.",
  bio: "A data-driven student focused on analytics, automation, AI, and marketing—using technology and business thinking to improve decisions and measurable outcomes.",
  available: true,
  url: "https://example.com",
  cvPdf: "/Mykhailo_Polishchuk_Resume.pdf",
  email: "polishukmisha895@gmail.com",
  location: "Kyiv, Ukraine · Erie, PA",
};
```

`bioExtended` should describe the intersection of analytics, AI, automation, marketing, research, and business decision-making in broad terms without revealing internal system architecture.

- [ ] **Step 2: Restrict navigation and social links to real destinations**

Use:

```ts
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Misha200304" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mykhailo-polishchuk2508" },
] as const;
```

- [ ] **Step 3: Map resume skills into three concise groups**

Use:

```ts
export const SKILL_GROUPS = [
  {
    heading: "Analytics & Data",
    tags: ["Python", "SQL", "Excel", "Power BI", "Statistics", "Machine Learning", "Data Visualization"],
  },
  {
    heading: "AI & Development",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "Automation", "AI Workflows"],
  },
  {
    heading: "Business & Research",
    tags: ["Marketing Analytics", "Financial Analytics", "Data Collection & Cleaning", "Qualtrics", "SPSS", "Data Storytelling"],
  },
] as const;
```

- [ ] **Step 4: Add experience using broad descriptions and exact metrics**

MHP description must communicate AI/automation and include the resume-supported impact without naming the exact internal product:

```text
Developed AI-enabled automation and data-processing solutions that streamlined internal workflows, reduced administrative processing time by approximately 70%, cut manual processing work by about 50%, and reduced staffing requirements by the equivalent of 3 employees.
```

Kyivski Zori description:

```text
Applied marketing analytics, SEO, automation, and competitive research to support growth—contributing to a 144% increase in site sessions, 100% growth in unique sessions, and a 30% increase in audience reach and inbound inquiries.
```

- [ ] **Step 5: Add education and leadership/honors without inventing credentials**

Education must state Mercyhurst University, expected May 2027, B.S. Data Science & AI and B.A. Marketing, GPA 3.9. Leadership/honors may include AWS Student Builder, Dean's List (5x), 4.0 GPA for 4 semesters, Student-Athlete (5 seasons), Honors Student, Phi Eta Sigma, and NCAA Division I Team Captain.

- [ ] **Step 6: Add portfolio projects with broad descriptions and resume-supported metrics**

Create projects for:

```text
AI & Workflow Automation — broad internship case study; focus on automation, AI, operational efficiency; metrics: ~70%, ~50%, 3 employees.
Research & Sports Analytics — 80,000+ open-source records; cleaning, analysis, regression/statistical testing, communication of findings.
Marketing Analytics & Growth — SEO, lead-data automation, competitive analysis; metrics: +144%, +100%, +30%.
Financial & Survey Analytics — portfolio risk/diversification plus AI-in-workplace survey analysis; no unsupported metric claims.
```

Project `challenge`, `solution`, and `outcome` fields must stay generalized. Do not state private internal architecture or proprietary business processes.

- [ ] **Step 7: Add a content regression check**

Run:

```bash
grep -RniE 'Mae Lin|maelin|Dribbble|Read\.cv|Lumen Analytics|Driftwood|Atlas Design Kit|Beacon Brand|premium business templates' src || true
```

Expected: no matches.

- [ ] **Step 8: Commit personalized configuration**

```bash
git add src/data/config.ts
git commit -m "feat: personalize portfolio content"
```

---

### Task 3: Personalize pages and apply the AWS-inspired visual system

**Files:**
- Create/modify: `src/app/page.tsx`
- Create/modify: `src/app/about/page.tsx`
- Create/modify: `src/app/portfolio/page.tsx`
- Create/modify: `src/app/portfolio/[slug]/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/components/NavBar.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: Task 2 config exports.
- Produces: all public content routes except Contact.

- [ ] **Step 1: Set the theme tokens in `globals.css`**

Use CSS variables/classes derived from:

```css
:root {
  --aws-navy: #232f3e;
  --aws-navy-deep: #161e2d;
  --aws-orange: #ff9900;
  --surface: #f7f8fa;
  --text: #161e2d;
}

.accent-text { color: var(--aws-orange); }
.accent-bg { background: var(--aws-orange); }
.soft-grad {
  background: linear-gradient(135deg, #ffffff 0%, #f7f8fa 60%, #fff4df 100%);
}
```

Keep the design AWS-inspired only; do not add AWS logos or language implying Amazon employment/endorsement.

- [ ] **Step 2: Rewrite homepage copy around capability and impact**

Homepage hero should identify the user as Mykhailo and use the `SITE` tagline/bio. The first CTA stays `View my work`; the second becomes `Contact me`. The skills and selected work sections remain structurally aligned with the source template.

- [ ] **Step 3: Rewrite About headline and narrative**

Replace design-demo language such as `Designer who codes. Engineer who cares.` with:

```text
Data, technology, and business—connected.
```

Use resume-backed content only. The page should show skills, experience, education, and a leadership/honors section using the existing certifications-style list if needed.

- [ ] **Step 4: Keep portfolio pages data-driven and generalized**

Portfolio cards and detail pages must render the four Task 2 projects. Detail page labels can remain `Challenge`, `Approach`, and `Outcome`, but copy must not expose confidential internal system specifics.

- [ ] **Step 5: Update metadata**

`src/app/layout.tsx` metadata should use:

```ts
title: {
  default: "Mykhailo Polishchuk | Data Science, AI & Marketing",
  template: "%s | Mykhailo Polishchuk",
},
description: "Portfolio of Mykhailo Polishchuk — Data Science, AI and Marketing student focused on analytics, automation and measurable business impact.",
```

- [ ] **Step 6: Verify route and demo-text integrity**

Run:

```bash
npm run build
grep -RniE 'Mae Lin|maelin|Designer who codes|premium business templates|/blog' src || true
```

Expected: build passes and no user-visible demo matches remain.

- [ ] **Step 7: Commit page and theme changes**

```bash
git add src/app src/components
git commit -m "feat: apply aws-inspired portfolio design"
```

---

### Task 4: Replace the demo contact workflow with honest direct-contact actions

**Files:**
- Create/modify: `src/app/contact/page.tsx`
- Do not create: `src/app/api/contact/route.ts`
- Do not create: `src/components/ContactForm.tsx`

**Interfaces:**
- Consumes: `SITE.email` and `SOCIAL_LINKS` from Task 2.
- Produces: `/contact` page with functional external/direct links only.

- [ ] **Step 1: Build the Contact page without a form**

The page must provide:

```text
Email me
polishukmisha895@gmail.com

Connect on LinkedIn
linkedin.com/in/mykhailo-polishchuk2508

GitHub
github.com/Misha200304
```

Use `mailto:` for email and external links for LinkedIn/GitHub. The page can say that the user is open to conversations about data, AI, analytics, marketing, research, internships, and collaborative projects.

- [ ] **Step 2: Confirm there is no fake contact API/form**

Run:

```bash
find src -type f | sort | grep -E 'ContactForm|api/contact' && exit 1 || true
```

Expected: no matching files.

- [ ] **Step 3: Build-test the Contact route**

Run:

```bash
npm run build
```

Expected: `/contact` is included in a successful build.

- [ ] **Step 4: Commit contact simplification**

```bash
git add src/app/contact
git commit -m "fix: use direct contact links"
```

---

### Task 5: Add the downloadable resume and finish repository documentation

**Files:**
- Create: `public/Mykhailo_Polishchuk_Resume.pdf`
- Replace: `README.md`

**Interfaces:**
- Consumes: uploaded `Mykhailo_Resume.docx` and `SITE.cvPdf` from Task 2.
- Produces: valid downloadable resume asset and project-specific setup documentation.

- [ ] **Step 1: Convert the uploaded resume to PDF without changing its factual content**

Create `public/Mykhailo_Polishchuk_Resume.pdf` from the uploaded DOCX. The website's `SITE.cvPdf` must exactly match this path.

- [ ] **Step 2: Replace template/old README with concise project documentation**

README must identify the site as Mykhailo Polishchuk's personal portfolio, note that it is based on the MIT-licensed `cekuu35/free-nextjs-cv-template`, and include:

```bash
npm ci
npm run dev
npm run build
```

Do not include template sales/demo text.

- [ ] **Step 3: Verify the resume path exists**

Run:

```bash
test -f public/Mykhailo_Polishchuk_Resume.pdf
```

Expected: exit status 0.

- [ ] **Step 4: Commit assets/documentation**

```bash
git add public/Mykhailo_Polishchuk_Resume.pdf README.md
git commit -m "docs: add resume and portfolio setup"
```

---

### Task 6: Final quality gate and branch review

**Files:**
- Review all files changed relative to `main`.

**Interfaces:**
- Consumes: Tasks 1-5.
- Produces: a buildable, reviewable branch ready for a pull request.

- [ ] **Step 1: Install from lockfile and run production build**

```bash
rm -rf node_modules .next
npm ci
npm run build
```

Expected: clean install and build both exit 0.

- [ ] **Step 2: Run confidentiality/demo leakage checks**

```bash
grep -RniE 'Mae Lin|maelin|Dribbble|Read\.cv|Lumen|Driftwood|Atlas Design Kit|Beacon Brand|premium business templates' src README.md || true
grep -RniE 'product-tasting|questionnaire creation|uploaded images.*routes|internal product' src || true
```

Expected: no matches that expose demo identity or overly specific proprietary implementation detail.

- [ ] **Step 3: Verify required metrics are represented exactly and only where contextually appropriate**

```bash
grep -RniE '70%|50%|3 employees|144%|100%|30%|80,000' src/data/config.ts
```

Expected: each resume-supported metric appears in a relevant experience/project entry and no unsupported metric is added.

- [ ] **Step 4: Verify navigation targets**

Confirm visible internal routes are limited to:

```text
/
/about
/portfolio
/portfolio/[slug]
/contact
```

and there is no Blog navigation item.

- [ ] **Step 5: Compare branch to main**

```bash
git diff --stat main...HEAD
git status --short
```

Expected: only intended redesign files differ and working tree is clean.

- [ ] **Step 6: Create a pull request only after final verification**

PR title:

```text
Redesign personal portfolio with CV template
```

PR body should summarize the template migration, resume-backed content, broader/confidentiality-conscious project language, quantified metrics, AWS-inspired theme, direct contact links, and successful production build.
