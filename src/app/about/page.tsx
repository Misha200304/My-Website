import type { Metadata } from "next";
import Link from "next/link";
import { SITE, EXPERIENCE, EDUCATION, HONORS, SKILL_GROUPS } from "@/data/config";

export const metadata: Metadata = { title: "About & Resume", description: `${SITE.bio} Experience, education, skills and leadership.` };

export default function AboutPage() {
  return (
    <>
      <section className="soft-grad">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-20">
          <p className="accent-text mb-3 text-sm font-semibold uppercase tracking-widest">About</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#161E2D] md:text-5xl">Data, technology, and business—connected.</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">{SITE.bio}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.cvPdf} download className="accent-bg rounded-full px-7 py-3 text-center text-sm font-semibold transition hover:brightness-95">Download CV (PDF)</a>
            <Link href="/contact" className="rounded-full border border-[#232F3E] px-7 py-3 text-center text-sm font-semibold text-[#232F3E] transition hover:bg-[#232F3E] hover:text-white">Contact me</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
          <div><p className="accent-text text-sm font-semibold uppercase tracking-widest">The longer story</p></div>
          <div className="md:col-span-2">
            {SITE.bioExtended.split("\n\n").map((para, i) => <p key={i} className="mb-4 leading-relaxed text-neutral-600">{para}</p>)}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-neutral-50 p-5"><p className="mb-1 text-xs uppercase tracking-widest text-neutral-400">Location</p><p className="font-medium">{SITE.location}</p></div>
              <div className="rounded-2xl bg-neutral-50 p-5"><p className="mb-1 text-xs uppercase tracking-widest text-neutral-400">Email</p><a href={`mailto:${SITE.email}`} className="accent-text font-medium">{SITE.email}</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="accent-text mb-8 text-sm font-semibold uppercase tracking-widest">Skills & tools</p>
          <div className="grid gap-8 md:grid-cols-3">
            {SKILL_GROUPS.map((g) => <div key={g.heading}><h2 className="mb-3 text-lg font-semibold">{g.heading}</h2><div className="flex flex-wrap gap-2">{g.tags.map((t) => <span key={t} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm">{t}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
          <div><p className="accent-text mb-1 text-sm font-semibold uppercase tracking-widest">Experience</p><a href={SITE.cvPdf} download className="text-xs text-neutral-400 transition hover:text-neutral-700">↓ Download full CV</a></div>
          <div className="space-y-10 md:col-span-2">
            {EXPERIENCE.map((e) => <div key={`${e.role}-${e.company}`} className="relative border-l-2 border-neutral-200 pl-6"><span className="accent-bg absolute -left-[7px] top-1.5 h-3 w-3 rounded-full" /><div className="text-sm text-neutral-400">{e.period}</div><h3 className="mt-1 text-lg font-semibold">{e.role} · {e.companyUrl ? <a href={e.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{e.company}</a> : e.company}</h3><p className="mt-2 text-sm text-neutral-600">{e.description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
          <div><p className="accent-text text-sm font-semibold uppercase tracking-widest">Education</p></div>
          <div className="space-y-10 md:col-span-2">{EDUCATION.map((e) => <div key={e.degree} className="relative border-l-2 border-neutral-200 pl-6"><span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-neutral-300" /><div className="text-sm text-neutral-400">{e.period}</div><h3 className="mt-1 text-lg font-semibold">{e.degree}</h3><p className="text-sm font-medium text-neutral-600">{e.school}</p><p className="mt-1 text-sm text-neutral-500">{e.note}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-neutral-100 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-3">
          <div><p className="accent-text text-sm font-semibold uppercase tracking-widest">Honors & leadership</p></div>
          <div className="md:col-span-2"><ul className="space-y-4">{HONORS.map((h) => <li key={`${h.year}-${h.name}`} className="flex items-start gap-4"><span className="mt-1 w-16 flex-shrink-0 text-xs font-medium text-neutral-400">{h.year}</span><div><p className="font-medium">{h.name}</p><p className="text-sm text-neutral-500">{h.issuer}</p></div></li>)}</ul></div>
        </div>
      </section>
    </>
  );
}
