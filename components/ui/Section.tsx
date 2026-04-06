import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
};

export function Section({ children, title, subtitle, className }: SectionProps) {
  return (
    <section className={cn("py-14 md:py-20", className)}>
      <Container>
        {(title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {title && <h2 className="font-serif text-3xl tracking-tight md:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
