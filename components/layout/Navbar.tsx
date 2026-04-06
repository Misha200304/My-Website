import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/95 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-md px-1 py-0.5 font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <ThemeToggle />
      </Container>
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 overflow-x-auto pb-3 text-sm md:justify-center md:gap-6"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md whitespace-nowrap px-1 text-muted transition motion-safe:duration-200 hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
