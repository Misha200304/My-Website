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
  return (
    <>
      <div className={`h-72 w-full bg-gradient-to-br md:h-96 ${project.gradient}`} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <nav className="mb-8 text-sm text-neutral-400" aria-label="Breadcrumb"><Link href="/portfolio" className="transition hover:text-neutral-700">Portfolio</Link> <span aria-hidden="true">›</span> <span className="text-neutral-700">{project.title}</span></nav>
        <div className="mb-10"><div className="mb-4 flex flex-wrap gap-3"><span className="rounded-full bg-neutral-100 px-3 py-1 text-xs">{project.year}</span><span className="rounded-full bg-neutral-100 px-3 py-1 text-xs">{project.role}</span>{project.tags.map((t) => <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs">{t}</span>)}</div><h1 className="mb-3 text-4xl font-bold tracking-tight text-[#161E2D] md:text-5xl">{project.title}</h1><p className="text-lg text-neutral-600">{project.tagline}</p></div>
        <section className="mb-10"><h2 className="accent-text mb-3 text-xs font-semibold uppercase tracking-widest">Overview</h2><p className="leading-relaxed text-neutral-700">{project.description}</p></section>
        <div className="mb-10 grid gap-6 md:grid-cols-3"><section className="rounded-2xl bg-neutral-50 p-5 md:col-span-1"><h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Challenge</h2><p className="text-sm leading-relaxed text-neutral-700">{project.challenge}</p></section><section className="rounded-2xl bg-neutral-50 p-5 md:col-span-2"><h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Approach</h2><p className="text-sm leading-relaxed text-neutral-700">{project.solution}</p></section></div>
        <section className="mb-12 border-l-4 border-[#FF9900] pl-6"><h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Outcome</h2><p className="font-medium leading-relaxed text-neutral-700">{project.outcome}</p></section>
        <hr className="mb-12 border-neutral-100" />
        <nav className="flex items-center justify-between gap-4" aria-label="Project navigation">{prevProject ? <Link href={`/portfolio/${prevProject.slug}`} className="group flex flex-col items-start"><span className="mb-1 text-xs text-neutral-400">← Previous</span><span className="text-sm font-semibold transition group-hover:text-[#e88b00]">{prevProject.title}</span></Link> : <span />}{nextProject ? <Link href={`/portfolio/${nextProject.slug}`} className="group flex flex-col items-end text-right"><span className="mb-1 text-xs text-neutral-400">Next →</span><span className="text-sm font-semibold transition group-hover:text-[#e88b00]">{nextProject.title}</span></Link> : <span />}</nav>
      </article>
    </>
  );
}
