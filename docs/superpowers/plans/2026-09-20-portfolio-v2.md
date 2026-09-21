# Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the existing portfolio with a blue/navy visual system, restored Blog routes, reusable project-image support, updated skill groupings, and a dedicated AWS Student Builder section while preserving the current Experience timeline and Contact behavior.

**Architecture:** Keep the existing Next.js App Router structure and centralized `src/data/config.ts` content model. Extend config with optional project media, blog posts, and AWS Student Builder data, then update existing pages to consume those fields without adding a CMS or new runtime dependencies. Use source-level regression tests with Node's built-in test runner for content/route invariants, plus `next build` as the final integration check.

**Tech Stack:** Next.js 16, React 18, TypeScript, Tailwind CSS 3, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-09-20-portfolio-v2-design.md`

## Global Constraints

- Work only on `cv-template-redesign`; `main` must remain unchanged.
- Preserve rollback point `81a7555e28e4866be281bb3a5dc4ffea7ea7f60e` in history.
- Preserve the current Experience timeline layout and Contact direct-link implementation.
- Keep experience/project descriptions broad enough to avoid proprietary implementation details.
- Preserve only resume-supported metrics already present.
- Do not invent blog posts, publications, employers, achievements, metrics, or AWS affiliation claims beyond Student Builder participation.
- Remove FastAPI from visible skills/tags.
- Add Data Analytics, AWS, n8n, CLI Agents, React, TypeScript, and MongoDB in the specified skill areas.
- Replace orange-led styling with blue/navy-led styling using `#0F172A`, `#2563EB`, `#60A5FA`, `#EFF6FF`, and `#F8FAFC`.
- Add `https://kz.kiev.ua/` to Marketing Analytics & Growth.
- Research & Sports Analytics supports an image/cover only; no PDF download or publication link yet.
- AWS Student Builder URL is optional and must not render a dead link while empty.
- Prefer natural short sentences and reduce em-dash usage across user-facing copy.

## Review Focus

1. **Empty blog state:** `/blog` must render intentionally with `BLOG_POSTS = []`; no fake article cards or broken `/blog/[slug]` links should appear.
2. **Optional project media:** both `image` present and absent cases must render without broken `<img>` output; absent images get the designed placeholder.
3. **AWS Student Builder optional link:** null/empty `href` must render no external CTA; a future URL must be supported by the same data shape.
4. **Regression safety:** Experience timeline markup and Contact direct links must remain present after the refactor.
5. **Content/style leakage:** visible orange palette references, FastAPI, demo blog copy, and excessive em-dash wording must not remain in the V2 user-facing source.

---

### Task 1: Extend the content model and switch the global visual/navigation system

**Files:**
- Create: `tests/portfolio-v2.test.mjs`
- Modify: `package.json`
- Modify: `src/data/config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/components/NavBar.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: existing `SITE`, `NAV_LINKS`, `SKILL_GROUPS`, `EXPERIENCE`, `PROJECTS` data.
- Produces: `AWS_STUDENT_BUILDER`, `BLOG_POSTS`, optional `PROJECTS[].image/imageAlt`, updated `NAV_LINKS`, updated `SKILL_GROUPS`, and blue-theme utility classes consumed by Tasks 2-5.

- [ ] **Step 1: Add a source-regression test file before changing production source**

Create `tests/portfolio-v2.test.mjs` with Node's built-in test runner. Initial tests must assert the intended V2 source state and therefore fail against the current branch:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("navigation includes Blog", () => {
  const config = read("src/data/config.ts");
  assert.match(config, /label:\s*"Blog",\s*href:\s*"\/blog"/);
});

test("skills include V2 tools and exclude FastAPI", () => {
  const config = read("src/data/config.ts");
  for (const term of ["Data Analytics", "AWS", "n8n", "CLI Agents", "React", "TypeScript", "MongoDB"]) {
    assert.match(config, new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(config, /FastAPI/);
});

test("blue theme replaces orange-led theme", () => {
  const css = read("src/app/globals.css");
  assert.match(css, /#2563eb/i);
  assert.match(css, /#0f172a/i);
  assert.doesNotMatch(css, /#ff9900/i);
});
```

- [ ] **Step 2: Add the test command and verify RED**

Add to `package.json`:

```json
"test": "node --test tests/*.test.mjs"
```

Run:

```bash
npm test
```

Expected: FAIL because Blog/V2 skills/blue palette are not implemented yet.

- [ ] **Step 3: Update `src/data/config.ts`**

Implement these exact navigation and skill group headings:

```ts
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SKILL_GROUPS = [
  {
    heading: "Data & Technical",
    tags: ["Python", "SQL", "Excel", "Power BI", "Statistics", "Machine Learning", "Data Visualization", "Data Analytics", "React", "TypeScript", "MongoDB"],
  },
  {
    heading: "AI & Automation",
    tags: ["AWS", "n8n", "AI Workflows", "CLI Agents", "Automation"],
  },
  {
    heading: "Business & Professional",
    tags: ["Marketing Analytics", "Financial Analytics", "Research", "Data Storytelling", "Analytical Thinking", "Problem Solving", "Communication", "Teamwork"],
  },
] as const;
```

Add:

```ts
export const AWS_STUDENT_BUILDER = {
  title: "AWS Student Builder",
  description: "Building cloud knowledge through technical learning, student community activities, events, and peer engagement.",
  href: null as string | null,
} as const;

export const BLOG_POSTS: Array<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}> = [];
```

Extend every project object with optional-compatible fields:

```ts
image: "",
imageAlt: "",
```

Update AI project tags to include `AI`, `Automation`, `n8n`, `CLI Agents`, `AWS`. Remove FastAPI from all visible data. Set Marketing Analytics & Growth `liveUrl` to `https://kz.kiev.ua/`.

- [ ] **Step 4: Replace orange-led CSS tokens with blue/navy tokens**

`src/app/globals.css` must use:

```css
:root {
  --navy: #0f172a;
  --blue: #2563eb;
  --blue-light: #60a5fa;
  --blue-soft: #eff6ff;
  --surface: #f8fafc;
  --text: #0f172a;
}

::selection { background: #bfdbfe; color: var(--navy); }
.accent-text { color: var(--blue); }
.accent-bg { background: var(--blue); color: white; }
.accent-border { border-color: var(--blue); }
.soft-grad { background: linear-gradient(135deg, #ffffff 0%, #f8fafc 55%, #eff6ff 100%); }
.navy-grad { background: linear-gradient(135deg, #0f172a, #1e3a8a); }
```

- [ ] **Step 5: Update NavBar/Footer hard-coded colors to the new palette**

Replace legacy `#232F3E`/orange-specific references with navy/blue equivalents while preserving layout and behavior.

- [ ] **Step 6: Run the source tests to verify GREEN**

Run:

```bash
npm test
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add package.json tests/portfolio-v2.test.mjs src/data/config.ts src/app/globals.css src/components/NavBar.tsx src/components/Footer.tsx
git commit -m "feat: add portfolio v2 content model and theme"
```

---

### Task 2: Add reusable portfolio images and project-specific refinements

**Files:**
- Modify: `tests/portfolio-v2.test.mjs`
- Modify: `src/app/page.tsx`
- Modify: `src/app/portfolio/page.tsx`
- Modify: `src/app/portfolio/[slug]/page.tsx`

**Interfaces:**
- Consumes: `PROJECTS[].image`, `imageAlt`, `gradient`, `liveUrl`, tags from Task 1.
- Produces: consistent image-or-placeholder rendering on Home, Portfolio, and Project Detail pages.

- [ ] **Step 1: Add failing media/link tests**

Append tests that assert:

```js
test("portfolio pages support project images with a placeholder fallback", () => {
  const listing = read("src/app/portfolio/page.tsx");
  const detail = read("src/app/portfolio/[slug]/page.tsx");
  assert.match(listing, /p\.image/);
  assert.match(detail, /project\.image/);
  assert.match(listing, /Publication visual coming soon|Project visual coming soon/);
});

test("marketing project points to Kyivski Zori", () => {
  assert.match(read("src/data/config.ts"), /https:\/\/kz\.kiev\.ua\//);
});
```

- [ ] **Step 2: Run RED**

```bash
npm test
```

Expected: media fallback test FAILS.

- [ ] **Step 3: Implement card media on Home and Portfolio**

For each project, render an image only when `p.image` is non-empty. Otherwise render the existing gradient area with a centered, subtle placeholder label. For `research-sports-analytics`, use `Publication visual coming soon`; other projects may use `Project visual coming soon`.

Use standard `<img>` with `alt={p.imageAlt || `${p.title} visual`}` and `className="h-full w-full object-cover"` to avoid adding image-host configuration.

- [ ] **Step 4: Implement detail-page media and external CTA**

At the top of `src/app/portfolio/[slug]/page.tsx`, use the same image/placeholder rule. When `project.liveUrl` is non-empty, render:

```tsx
<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit website →</a>
```

Do not render any research PDF/download CTA.

- [ ] **Step 5: Replace orange hard-coded project badges/gradients with blue/navy equivalents**

Use project gradients such as navy/blue, pale blue/white, and slate/blue. Remove visible orange-tailwind or hex references from these three pages.

- [ ] **Step 6: Run GREEN**

```bash
npm test
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add tests/portfolio-v2.test.mjs src/app/page.tsx src/app/portfolio/page.tsx src/app/portfolio/[slug]/page.tsx
git commit -m "feat: add portfolio media and project links"
```

---

### Task 3: Restore Blog with an intentional empty state and future post support

**Files:**
- Modify: `tests/portfolio-v2.test.mjs`
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: `BLOG_POSTS` from Task 1.
- Produces: `/blog` empty/list state and `/blog/[slug]` static post detail route.

- [ ] **Step 1: Add failing Blog route/content tests**

Append:

```js
test("blog route has a zero-post empty state without fake posts", () => {
  const blog = read("src/app/blog/page.tsx");
  assert.match(blog, /BLOG_POSTS\.length === 0/);
  assert.match(blog, /Posts coming soon/);
});

test("blog detail route resolves posts from BLOG_POSTS", () => {
  const detail = read("src/app/blog/[slug]/page.tsx");
  assert.match(detail, /generateStaticParams/);
  assert.match(detail, /BLOG_POSTS\.find/);
  assert.match(detail, /notFound\(\)/);
});
```

- [ ] **Step 2: Run RED**

```bash
npm test
```

Expected: FAIL because Blog files do not exist.

- [ ] **Step 3: Create `/blog`**

Use the template-style header but personalized copy:

```text
Writing
Thoughts on AI, data, AWS, marketing, and research.
```

If `BLOG_POSTS.length === 0`, render a polished card containing:

```text
Writing on AI, data, AWS, marketing, and research. Posts coming soon.
```

If posts exist, map them into dated cards linking to `/blog/${post.slug}`.

- [ ] **Step 4: Create `/blog/[slug]`**

Implement `generateStaticParams()`, `generateMetadata()`, post lookup with `notFound()`, date/reading-time/tags header, and the template's lightweight text renderer for headings, paragraphs, lists, inline code, and fenced code blocks.

Do not add demo post content.

- [ ] **Step 5: Run GREEN**

```bash
npm test
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add tests/portfolio-v2.test.mjs src/app/blog
git commit -m "feat: restore blog with empty state"
```

---

### Task 4: Add the AWS Student Builder section while preserving About/Experience

**Files:**
- Modify: `tests/portfolio-v2.test.mjs`
- Modify: `src/app/about/page.tsx`

**Interfaces:**
- Consumes: `AWS_STUDENT_BUILDER`, existing `EXPERIENCE`, `HONORS`, `SKILL_GROUPS`.
- Produces: a dedicated Builder section with optional-link behavior and unchanged Experience timeline structure.

- [ ] **Step 1: Add failing About regression tests**

Append:

```js
test("about page keeps experience timeline and adds AWS Student Builder", () => {
  const about = read("src/app/about/page.tsx");
  assert.match(about, /EXPERIENCE\.map/);
  assert.match(about, /AWS_STUDENT_BUILDER/);
  assert.match(about, /AWS Student Builder/);
});

test("AWS Student Builder link is conditional", () => {
  assert.match(read("src/app/about/page.tsx"), /AWS_STUDENT_BUILDER\.href\s*&&/);
});
```

- [ ] **Step 2: Run RED**

```bash
npm test
```

Expected: AWS Student Builder tests FAIL.

- [ ] **Step 3: Add the dedicated section**

Import `AWS_STUDENT_BUILDER`. Add a blue-soft section after Experience and before Education or Honors. Render title and description. Render a `Visit Builder Group →` link only when `AWS_STUDENT_BUILDER.href` is truthy.

- [ ] **Step 4: Preserve Experience markup**

Do not change the existing `EXPERIENCE.map(...)` timeline logic, left border, timeline dots, role/company/date hierarchy, or company-link behavior except for palette classes required by the blue theme.

- [ ] **Step 5: Run GREEN**

```bash
npm test
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add tests/portfolio-v2.test.mjs src/app/about/page.tsx
git commit -m "feat: add aws student builder section"
```

---

### Task 5: Natural-language cleanup and full regression/integration verification

**Files:**
- Modify as needed: `src/data/config.ts`
- Modify as needed: `src/app/page.tsx`
- Modify as needed: `src/app/about/page.tsx`
- Modify as needed: `src/app/portfolio/page.tsx`
- Modify as needed: `src/app/portfolio/[slug]/page.tsx`
- Modify: `tests/portfolio-v2.test.mjs`

**Interfaces:**
- Consumes: all V2 UI/data from Tasks 1-4.
- Produces: final copy/style consistency and regression evidence.

- [ ] **Step 1: Add final source-regression checks**

Append tests:

```js
test("contact remains direct-link only", () => {
  const contact = read("src/app/contact/page.tsx");
  assert.match(contact, /mailto:/);
  assert.doesNotMatch(contact, /ContactForm|api\/contact|<form/i);
});

test("no orange-led palette or FastAPI remains in visible V2 source", () => {
  const files = [
    "src/data/config.ts",
    "src/app/globals.css",
    "src/app/page.tsx",
    "src/app/about/page.tsx",
    "src/app/portfolio/page.tsx",
    "src/app/portfolio/[slug]/page.tsx",
    "src/components/NavBar.tsx",
  ];
  const source = files.map(read).join("\n");
  assert.doesNotMatch(source, /#FF9900|#ff9900|FastAPI/);
});
```

- [ ] **Step 2: Run tests before cleanup**

```bash
npm test
```

Expected: any remaining palette/copy regressions are exposed before final edits.

- [ ] **Step 3: Review user-facing copy for natural sentence structure**

Replace avoidable em dashes in Home/About/Portfolio/config copy with commas, periods, colons, or separate sentences. Keep semantic punctuation in date ranges/titles only where appropriate. Do not change metrics or meaning.

- [ ] **Step 4: Run the complete test suite**

```bash
npm test
```

Expected: PASS with zero failures.

- [ ] **Step 5: Run content scans**

```bash
grep -RniE '#FF9900|#ff9900|FastAPI|Mae Lin|Dribbble|Read\.cv|Lumen Analytics|Driftwood|premium business templates' src || true
grep -Rni '—' src/data src/app src/components || true
```

Expected: first command returns no matches. Second command should contain no user-facing prose matches; code comments are acceptable only if not rendered.

- [ ] **Step 6: Run production build**

```bash
npm run build
```

Expected: Next.js build exits 0 and generates `/`, `/about`, `/portfolio`, `/portfolio/[slug]`, `/blog`, `/blog/[slug]`, and `/contact` without type/build errors.

- [ ] **Step 7: Verify branch isolation**

```bash
git merge-base main HEAD
git status --short
git log --oneline --decorate -8
```

Expected: work is on `cv-template-redesign`, working tree is clean after commit, and `main` has not moved as part of this implementation.

- [ ] **Step 8: Commit final cleanup**

```bash
git add tests/portfolio-v2.test.mjs src
git commit -m "refine: polish portfolio v2 copy and styling"
```

## Self-Review Result

- Spec coverage: all V2 requirements are assigned to Tasks 1-5.
- Placeholder scan: no implementation placeholders or undefined follow-up work remain in the plan.
- Type consistency: `AWS_STUDENT_BUILDER`, `BLOG_POSTS`, `image`, `imageAlt`, and `liveUrl` names are consistent across producers/consumers.
- Review focus: empty Blog, optional media, conditional AWS link, Experience/Contact regressions, and style/content leakage each have explicit tests.
