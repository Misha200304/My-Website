import Link from "next/link";
import { SITE, NAV_LINKS, SOCIAL_LINKS } from "@/data/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-[#232F3E] py-10 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Link href="/" className="text-lg font-bold">{SITE.name}<span className="text-[#FF9900]">.</span></Link>
            <p className="mt-1 text-sm text-neutral-300">{SITE.title}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="text-neutral-300 transition hover:text-white">{link.label}</Link>)}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:flex-row">
          <nav className="flex gap-6" aria-label="Social links">
            {SOCIAL_LINKS.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{s.label}</a>)}
          </nav>
          <p>© {year} {SITE.name}.</p>
        </div>
      </div>
    </footer>
  );
}
