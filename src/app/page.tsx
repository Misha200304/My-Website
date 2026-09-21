import Link from "next/link";
import { SITE, SOCIAL_LINKS, PROJECTS, SKILL_GROUPS } from "@/data/config";

function ProjectVisual({ project }: { project: (typeof PROJECTS)[number] }) {
  const placeholder = project.slug === "research-sports-analytics" ? "Publication visual coming soon" : "Project visual coming soon";
  return (
    <div className={`h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
      {project.image ? (
        <img src={project.image} alt={project.imageAlt || `${project.title} visual`} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-slate-600">{placeholder}</div>
      )}
    </div>
  );
}

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <section className="soft-grad">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24">
          <p className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
            Open to internships, research, and collaborative projects
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#0F172A] md:text-7xl">
            Hi, I&apos;m Mykhailo.<br />
            <span className="accent-text">{SITE.tagline}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-slate-600 md:text-xl">{SITE.bio}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/portfolio" className="accent-bg rounded-full px-7 py-3.5 text-center font-semibold transition hover:bg-[#1D4ED8]">View my work</Link>
            <Link href="/contact" className="rounded-full border border-[#0F172A] px-7 py-3.5 text-center font-semibold text-[#0F172A] transition hover:bg-[#0F172A] hover:text-white">Contact me</Link>
          </div>
          <nav className="mt-10 flex gap-6 text-sm text-slate-500" aria-label="Social links">
            {SOCIAL_LINKS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#0F172A]">{s.label}</a>)}
          </nav>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="accent-text mb-8 text-sm font-semibold uppercase tracking-widest">What I work with</p>
          <div className="grid gap-8 md:grid-cols-3">
            {SKILL_GROUPS.map((g) => (
              <div key={g.heading}>
                <h2 className="mb-3 text-lg font-semibold text-[#0F172A]">{g.heading}</h2>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map((t) => <span key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="accent-text mb-2 text-sm font-semibold uppercase tracking-widest">Selected work</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">Impact through data and technology</h2>
            </div>
            <Link href="/portfolio" className="hidden text-sm font-semibold text-slate-500 transition hover:text-[#0F172A] sm:inline-block">All projects →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                <ProjectVisual project={p} />
                <div className="p-5">
                  <p className="mb-1 text-xs text-slate-400">{p.year} · {p.role}</p>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">{p.tags.slice(0, 3).map((t) => <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs">{t}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-grad border-t border-slate-100 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Interested in working together?</h2>
          <p className="mb-8 text-lg text-slate-300">I&apos;m interested in data, AI, analytics, marketing, research, and projects where measurable outcomes matter.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="accent-bg rounded-full px-7 py-3.5 text-center font-semibold transition hover:bg-[#1D4ED8]">Get in touch</Link>
            <Link href="/about" className="rounded-full border border-white/30 px-7 py-3.5 text-center font-semibold transition hover:bg-white hover:text-[#0F172A]">View resume</Link>
          </div>
        </div>
      </section>
    </>
  );
}
