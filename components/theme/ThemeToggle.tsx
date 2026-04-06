"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark";

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as ThemeMode | null;
    const initialTheme = stored || getSystemTheme();
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={cn(
        "focus-ring inline-flex h-10 items-center rounded-md border border-border px-3 text-xs font-semibold text-muted transition motion-safe:duration-200 hover:border-accent hover:text-accent",
        !mounted && "opacity-0",
      )}
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
