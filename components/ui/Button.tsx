import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = {
  primary:
    "bg-accent text-white hover:bg-accentStrong border-transparent shadow-soft",
  secondary:
    "bg-transparent text-text border-border hover:border-accent hover:text-accent",
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof buttonStyles;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = BaseProps & {
  href: string;
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border px-5 text-sm font-semibold transition motion-safe:duration-200",
        buttonStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  className,
  variant = "primary",
  children,
  href,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border px-5 text-sm font-semibold transition motion-safe:duration-200",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
