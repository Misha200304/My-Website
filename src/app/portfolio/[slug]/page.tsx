import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/config";

export function generateStaticParams() { return PROJECTS.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.tagline } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;
  const placeholder = project.slug === "research-sports-analytics" ? "Publication visual coming soon" : "Project visual coming soon";

  return (
    <>
      <div className={`h-72 w-full overflow-hidden bg-gradient-to-br md:h-96 ${project.gradient}`}>
        {project.image ? (
          <img src={project.image} alt={project.imageAlt || `${project.title} visual`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-slate-600">{placeholder}</div>
        )}
      </div>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <nav className="mb-8 text-sm text-slate-400" aria-label="Breadcrumb"><Link href="/portfolio" className="transition hover:text-slate-700">Portfolio</Link> <span aria-hidden="true">›</span> <span className="text-slate-700">{project.title}</span></nav>
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap gap-3"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{project.year}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs">{project.role}</span>{project.tags.map((t) => <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs">{t}</span>)}</div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">{project.title}</h1>
          <p className="text-lg text-slate-600">{project.tagline}</p>
        </div>
        <section className="mb-10"><h2 className="accent-text mb-3 text-xs font-semibold uppercase tracking-widest">Overview</h2><p className="leading-relaxed text-slate-700">{project.description}</p></section>
        <div className="mb-10 grid gap-6 md:grid-cols-3"><section className="rounded-2xl bg-slate-50 p-5 md:col-span-1"><h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Challenge</h2><p className="text-sm leading-relaxed text-slate-700">{project.challenge}</p></section><section className="rounded-2xl bg-slate-50 p-5 md:col-span-2"><h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Approach</h2><p className="text-sm leading-relaxed text-slate-700">{project.solution}</p></section></div>
        <section className="mb-10 border-l-4 border-[#2563EB] pl-6"><h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Outcome</h2><p className="font-medium leading-relaxed text-slate-700">{project.outcome}</p></section>
        {project.liveUrl && <div className="mb-12"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="accent-bg inline-block rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-[#1D4ED8]">Visit website →</a></div>}
        <hr className="mb-12 border-slate-100" />
        <nav className="flex items-center justify-between gap-4" aria-label="Project navigation">
          {prevProject ? <Link href={`/portfolio/${prevProject.slug}`} className="group flex flex-col items-start"><span className="mb-1 text-xs text-slate-400">← Previous</span><span className="text-sm font-semibold transition group-hover:text-[#2563EB]">{prevProject.title}</span></Link> : <span />}
          {nextProject ? <Link href={`/portfolio/${nextProject.slug}`} className="group flex flex-col items-end text-right"><span className="mb-1 text-xs text-slate-400">Next →</span><span className="text-sm font-semibold transition group-hover:text-[#2563EB]">{nextProject.title}</span></Link> : <span />}
        </nav>
      </article>
    </>
  );
}
