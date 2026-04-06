import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "surface overflow-hidden transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-accent/50 motion-safe:hover:shadow-soft",
        className,
      )}
    >
      {children}
    </article>
  );
}
