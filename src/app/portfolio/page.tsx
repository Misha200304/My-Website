import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PROJECTS } from "@/data/config";

export const metadata: Metadata = { title: "Portfolio", description: `Selected analytics, AI, research, and marketing work by ${SITE.name}.` };

export default function PortfolioPage() {
  return (
    <>
      <section className="soft-grad">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-20">
          <p className="accent-text mb-3 text-sm font-semibold uppercase tracking-widest">Portfolio</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">Selected work & impact</h1>
          <p className="max-w-2xl text-lg text-slate-600">Case studies across AI, automation, analytics, research, and marketing. The focus is on the problem, the work, and measurable results without exposing unnecessary internal details.</p>
        </div>
      </section>
      <section className="border-t border-slate-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p) => {
              const placeholder = p.slug === "research-sports-analytics" ? "Publication visual coming soon" : "Project visual coming soon";
              return (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                  <div className={`h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    {p.image ? (
                      <img src={p.image} alt={p.imageAlt || `${p.title} visual`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-slate-600">{placeholder}</div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{p.year}</span>
                      {p.featured && <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">Featured</span>}
                    </div>
                    <h2 className="text-xl font-semibold text-[#0F172A]">{p.title}</h2>
                    <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs">{t}</span>)}</div>
                    <p className="accent-text mt-4 text-sm font-semibold group-hover:underline">View case study →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
