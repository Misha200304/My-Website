import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SITE } from "@/data/config";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const description = "Portfolio of Mykhailo Polishchuk — Data Science, AI and Marketing student focused on analytics, automation and measurable business impact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mykhailo Polishchuk | Data Science, AI & Marketing",
    template: "%s | Mykhailo Polishchuk",
  },
  description,
  keywords: ["data science", "artificial intelligence", "analytics", "marketing analytics", "automation", "machine learning", SITE.name],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  robots: { index: true, follow: true },
  openGraph: { title: `${SITE.name} | ${SITE.title}`, description, url: SITE.url, siteName: SITE.name, locale: "en_US", type: "website" },
};

export const viewport: Viewport = { themeColor: "#232F3E", colorScheme: "light" };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  description,
  email: SITE.email,
  sameAs: ["https://github.com/Misha200304", "https://www.linkedin.com/in/mykhailo-polishchuk2508"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white text-neutral-900 antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#232F3E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">Skip to content</a>
        <NavBar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
