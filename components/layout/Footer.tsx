import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border py-10">
      <Container className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-medium">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">
            Data science, marketing analytics, and AI product work.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="focus-ring rounded text-sm text-muted hover:text-text">
            Projects
          </Link>
          <Link href="/resume" className="focus-ring rounded text-sm text-muted hover:text-text">
            Resume
          </Link>
          <Link href="/contact" className="focus-ring rounded text-sm text-muted hover:text-text">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
