"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV_LINKS } from "@/data/config";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-[#232F3E]" aria-label={`${SITE.name} home`}>
          {SITE.name}<span className="accent-text" aria-hidden="true">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} className={active ? "font-semibold text-[#232F3E]" : "text-neutral-500 transition hover:text-[#232F3E]"}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="accent-bg rounded-full px-4 py-2 text-sm font-semibold transition hover:brightness-95">
          Contact me
        </Link>
      </div>
      <nav className="flex gap-6 overflow-x-auto border-t border-neutral-100 px-6 py-2 text-sm md:hidden" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return <Link key={link.href} href={link.href} className={active ? "whitespace-nowrap font-semibold text-[#232F3E]" : "whitespace-nowrap text-neutral-500"}>{link.label}</Link>;
        })}
      </nav>
    </header>
  );
}
