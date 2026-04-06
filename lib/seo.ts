export const siteConfig = {
  name: "Mykhailo Polishchuk",
  title: "Mykhailo Polishchuk | Portfolio",
  description:
    "Marketing + Data Science & AI student at Mercyhurst University building analytical products, AI tools, and strategy-informed decision systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/images/og-default.svg",
  email: "mykhailo@example.com",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/certificates", label: "Certificates" },
    { href: "/coursework", label: "Coursework" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
};

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}
