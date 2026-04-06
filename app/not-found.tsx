import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <Section className="py-20">
      <div className="surface mx-auto max-w-2xl space-y-5 p-8 text-center">
        <h1 className="font-serif text-4xl tracking-tight">Page not found</h1>
        <p className="text-muted">
          The page you requested does not exist or has moved.
        </p>
        <div className="flex justify-center">
          <LinkButton href="/">Return Home</LinkButton>
        </div>
        <Link href="/projects" className="focus-ring rounded-md text-sm text-muted hover:text-accent">
          Browse projects instead
        </Link>
      </div>
    </Section>
  );
}
