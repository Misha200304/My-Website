import Link from "next/link";
import { SITE, SOCIAL_LINKS, PROJECTS, SKILL_GROUPS } from "@/data/config";

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <section className="soft-grad">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24">
          <p className="mb-6 flex items-center gap-2 text-sm font-medium text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-[#FF9900]" aria-hidden="true" />
            Open to internships, research, and collaborative projects
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#161E2D] md:text-7xl">
            Hi, I&apos;m Mykhailo —<br />
            <span className="accent-text">{SITE.tagline}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-neutral-600 md:text-xl">{SITE.bio}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/portfolio" className="accent-bg rounded-full px-7 py-3.5 text-center font-semibold transition hover:brightness-95">View my work</Link>
            <Link href="/contact" className="rounded-full border border-[#232F3E] px-7 py-3.5 text-center font-semibold text-[#232F3E] transition hover:bg-[#232F3E] hover:text-white">Contact me</Link>
          </div>
          <nav className="mt-10 flex gap-6 text-sm text-neutral-500" aria-label="Social links">
            {SOCIAL_LINKS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#232F3E]">{s.label}</a>)}
          </nav>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="accent-text mb-8 text-sm font-semibold uppercase tracking-widest">What I work with</p>
          <div className="grid gap-8 md:grid-cols-3">
            {SKILL_GROUPS.map((g) => (
              <div key={g.heading}>
                <h2 className="mb-3 text-lg font-semibold text-[#232F3E]">{g.heading}</h2>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map((t) => <span key={t} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="accent-text mb-2 text-sm font-semibold uppercase tracking-widest">Selected work</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#161E2D] md:text-4xl">Impact through data and technology</h2>
            </div>
            <Link href="/portfolio" className="hidden text-sm font-semibold text-neutral-500 transition hover:text-[#232F3E] sm:inline-block">All projects →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <div className={`h-52 bg-gradient-to-br ${p.gradient}`} />
                <div className="p-5">
                  <p className="mb-1 text-xs text-neutral-400">{p.year} · {p.role}</p>
                  <h3 className="text-lg font-semibold text-[#232F3E]">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{p.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">{p.tags.slice(0, 3).map((t) => <span key={t} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs">{t}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-grad border-t border-neutral-100 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Interested in working together?</h2>
          <p className="mb-8 text-lg text-neutral-300">I&apos;m interested in data, AI, analytics, marketing, research, and projects where measurable outcomes matter.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="accent-bg rounded-full px-7 py-3.5 text-center font-semibold transition hover:brightness-95">Get in touch</Link>
            <a href={SITE.cvPdf} className="rounded-full border border-white/30 px-7 py-3.5 text-center font-semibold transition hover:bg-white hover:text-[#232F3E]" download>Download CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
