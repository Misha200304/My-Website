import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "Background, research focus, and analytical leadership profile.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: "Background, strengths, and working style.",
    url: absoluteUrl("/about"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function AboutPage() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mykhailo Polishchuk",
    url: siteConfig.url,
    image: absoluteUrl("/images/headshot.jpg"),
    jobTitle: "Marketing + Data Science & AI Student",
    email: `mailto:${siteConfig.email}`,
    sameAs: [
      "https://www.linkedin.com/in/mykhailo-polishchuk",
      "https://github.com/your-github",
    ],
    alumniOf: "Mercyhurst University",
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Marketing Analytics",
      "Product Analytics",
      "Applied AI",
      "Decision Strategy",
    ],
  };

  return (
    <>
      <Section className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface reveal p-2">
            <Image
              src="/images/headshot.jpg"
              alt="Portrait of Mykhailo Polishchuk"
              width={900}
              height={1100}
              className="h-full w-full rounded-[calc(var(--radius-lg)-0.2rem)] object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="reveal reveal-delay space-y-6">
            <h1 className="font-serif text-5xl tracking-tight">About</h1>
            <p className="text-lg leading-8 text-muted">
              I study Marketing and Data Science &amp; AI at Mercyhurst University,
              where I focus on turning complex business questions into analytical
              systems, product ideas, and clear decisions.
            </p>
            <p className="text-lg leading-8 text-muted">
              My work spans research, predictive modeling, and dashboard-driven
              analysis, including projects in math anxiety and analytics
              education, tennis performance analytics, and AI-enabled apps.
            </p>
            <div className="surface grid gap-4 p-6">
              <h2 className="font-serif text-2xl tracking-tight">What Sets My Profile Apart</h2>
              <ul className="list-disc space-y-2 pl-5 text-muted">
                <li>Business + technical range: strategy thinking paired with model and product execution.</li>
                <li>Research mindset: framing hypotheses, testing assumptions, and communicating findings clearly.</li>
                <li>Leadership under pressure: Division I tennis athlete and team captain with disciplined delivery.</li>
                <li>Career direction: data science, product analytics, consulting, and AI builder roles.</li>
              </ul>
            </div>
            <div className="surface grid gap-4 p-6">
              <h2 className="font-serif text-2xl tracking-tight">Honors and Recognition</h2>
              <ul className="list-disc space-y-2 pl-5 text-muted">
                <li>Honors student at Mercyhurst University.</li>
                <li>Member of Phi Eta Sigma.</li>
                <li>Member of International Business Honor Society, Delta Mu Delta (DMD).</li>
                <li>Dean&apos;s List every semester.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
    </>
  );
}
