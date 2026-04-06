import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume overview for Mykhailo Polishchuk with downloadable PDF.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume",
    description: "Resume overview for Mykhailo Polishchuk with downloadable PDF.",
    url: absoluteUrl("/resume"),
  },
};

export default function ResumePage() {
  return (
    <Section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-4xl gap-8">
        <header className="space-y-4">
          <h1 className="font-serif text-5xl tracking-tight">Resume</h1>
          <p className="text-lg text-muted">
            Mykhailo Polishchuk. Marketing + Data Science &amp; AI student at
            Mercyhurst University focused on analytics, machine learning, and
            AI-enabled product development.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/resume.pdf">Download PDF</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Contact
            </LinkButton>
          </div>
        </header>

        <section className="surface p-7">
          <h2 className="font-serif text-3xl tracking-tight">Professional Summary</h2>
          <p className="mt-4 text-muted">
            I&apos;m a double major in Marketing and Data Science &amp; AI who combines
            business judgment with technical execution. I build analytical models,
            dashboards, and early AI product concepts that translate complex data
            into practical decisions. My work is shaped by research discipline,
            leadership as a Division I team captain, and a clear focus on
            high-impact roles in analytics, strategy, and product.
          </p>
        </section>

        <section className="surface p-7">
          <h2 className="font-serif text-3xl tracking-tight">Experience Highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Led and contributed to research projects in math anxiety and analytics education, translating findings into structured analytical narratives.</li>
            <li>Developed tennis analytics and performance-analysis work to connect data patterns with actionable coaching and decision support.</li>
            <li>Built projects across data analysis, prediction, machine learning, and dashboarding to answer real business and product questions.</li>
            <li>Explored AI application concepts and prototypes focused on usable tools, not just model outputs.</li>
            <li>Serves as a Division I team captain, bringing accountability, communication, and execution under pressure to technical work.</li>
          </ul>
        </section>

        <section className="surface p-7">
          <h2 className="font-serif text-3xl tracking-tight">Education</h2>
          <p className="mt-4 text-muted">
            <span className="font-medium text-text">Mercyhurst University</span><br />
            Double Major: Marketing and Data Science &amp; AI<br />
            Expected Graduation: 2027<br />
            GPA: 4.0
          </p>
          <p className="mt-4 text-muted">
            Division I tennis athlete and team captain. Strong academic performer
            with an emphasis on analytics, AI, business problem solving, and
            cross-disciplinary execution.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            <li>Honors student.</li>
            <li>Phi Eta Sigma member.</li>
            <li>International Business Honor Society, Delta Mu Delta (DMD) member.</li>
            <li>Dean&apos;s List every semester.</li>
          </ul>
        </section>

        <section className="surface p-7">
          <h2 className="font-serif text-3xl tracking-tight">Focus and Direction</h2>
          <p className="mt-4 text-muted">
            I am most energized by problems where data, strategy, and product
            execution need to work together, such as growth decisions, user
            behavior analysis, and AI-enabled workflows.
          </p>
          <p className="mt-4 text-muted">
            I am targeting internships and early-career roles in data science,
            product analytics, consulting/strategy analytics, and AI product
            development.
          </p>
          <Link
            href="/coursework"
            className="focus-ring mt-4 inline-flex rounded text-sm text-accent underline decoration-accent/50 underline-offset-4 hover:text-accentStrong"
          >
            View related coursework
          </Link>
        </section>
      </div>
    </Section>
  );
}
