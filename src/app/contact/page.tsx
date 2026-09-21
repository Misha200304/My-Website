import type { Metadata } from "next";
import { SITE, SOCIAL_LINKS } from "@/data/config";

export const metadata: Metadata = { title: "Contact", description: `Contact ${SITE.name} about data, AI, analytics, marketing, research, internships, or collaborative projects.` };

export default function ContactPage() {
  const linkedin = SOCIAL_LINKS.find((s) => s.label === "LinkedIn");
  const github = SOCIAL_LINKS.find((s) => s.label === "GitHub");
  return (
    <>
      <section className="soft-grad"><div className="mx-auto max-w-5xl px-6 pb-16 pt-20"><p className="accent-text mb-3 text-sm font-semibold uppercase tracking-widest">Contact</p><h1 className="mb-4 text-4xl font-bold tracking-tight text-[#161E2D] md:text-5xl">Let&apos;s connect</h1><p className="max-w-2xl text-lg text-neutral-600">I&apos;m open to conversations about data, AI, analytics, marketing, research, internships, and collaborative projects.</p></div></section>
      <section className="border-t border-neutral-100 py-20"><div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
        <a href={`mailto:${SITE.email}`} className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="accent-text mb-2 text-xs font-semibold uppercase tracking-widest">Email me</p><h2 className="text-lg font-semibold text-[#232F3E]">{SITE.email}</h2><p className="mt-3 text-sm text-neutral-500">Best for opportunities, projects, and direct conversations.</p></a>
        {linkedin && <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="accent-text mb-2 text-xs font-semibold uppercase tracking-widest">Connect on LinkedIn</p><h2 className="text-lg font-semibold text-[#232F3E]">mykhailo-polishchuk2508</h2><p className="mt-3 text-sm text-neutral-500">Professional background, experience, and networking.</p></a>}
        {github && <a href={github.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="accent-text mb-2 text-xs font-semibold uppercase tracking-widest">GitHub</p><h2 className="text-lg font-semibold text-[#232F3E]">Misha200304</h2><p className="mt-3 text-sm text-neutral-500">Code, technical work, and public repositories.</p></a>}
      </div></section>
    </>
  );
}
