import Image from "next/image";
import { getAllCertificates, getAllCoursework, getAllProjects } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const featuredProjects = getAllProjects().filter((item) => item.featured).slice(0, 3);
  const featuredCourses = getAllCoursework({ track: "Data Science & AI" }).slice(0, 4);
  const featuredCertificates = getAllCertificates().slice(0, 4);

  return (
    <>
      <Section className="pb-8 pt-14 md:pt-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal space-y-8">
            <Badge>Open to internships and high-impact analytics roles</Badge>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">
                Mykhailo Polishchuk
              </p>
              <h1 className="max-w-[16ch] font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                I turn data into meaningful decisions that solve business problems.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
                I build research-backed analytics and AI workflows that help teams
                move from uncertainty to clear action. My focus is practical:
                stronger decisions, better systems, and outcomes that improve over time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/projects">Explore Case Studies</LinkButton>
              <LinkButton href="/resume" variant="secondary">
                View Resume
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact
              </LinkButton>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">GPA</p>
                <p className="mt-2 font-serif text-3xl tracking-tight">4.0</p>
              </div>
              <div className="surface p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Focus</p>
                <p className="mt-2 text-sm text-text">Data Science, AI, Product Analytics</p>
              </div>
              <div className="surface p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-muted">Leadership</p>
                <p className="mt-2 text-sm text-text">Division I Team Captain</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay space-y-5">
            <div className="surface overflow-hidden p-2">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Mykhailo Polishchuk"
                width={900}
                height={1100}
                priority
                className="h-auto w-full rounded-[calc(var(--radius-lg)-0.2rem)] object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="surface p-5">
              <p className="text-sm text-muted">
                Honors student. Phi Eta Sigma and Delta Mu Delta member. Dean&apos;s List every semester.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Academic Snapshot"
        subtitle="Selected coursework and certifications that support my technical depth and business decision-making range."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface p-6">
            <header className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl tracking-tight">Coursework Highlights</h3>
              <LinkButton href="/coursework" variant="secondary" className="h-9 px-3 text-xs">
                View All
              </LinkButton>
            </header>
            <ul className="space-y-3">
              {featuredCourses.map((course) => (
                <li key={`${course.slug}-${course.term}`} className="rounded-md border border-border bg-bg px-4 py-3">
                  <p className="text-sm font-medium">{course.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {course.term} · Grade: {course.grade}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface p-6">
            <header className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl tracking-tight">Certificate Highlights</h3>
              <LinkButton href="/certificates" variant="secondary" className="h-9 px-3 text-xs">
                View All
              </LinkButton>
            </header>
            <ul className="space-y-3">
              {featuredCertificates.map((certificate) => (
                <li
                  key={certificate.slug}
                  className="rounded-md border border-border bg-bg px-4 py-3"
                >
                  <p className="text-sm font-medium">{certificate.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {certificate.issuer} · {formatDate(certificate.issueDate)}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        title="Featured Projects"
        subtitle="Selected work across data science, marketing analytics, and AI product development."
      >
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface reveal reveal-delay-lg grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-3xl tracking-tight">
              Looking for someone who can analyze deeply and execute fast?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              I bring research rigor, technical range, and high-performance discipline
              to analytics, strategy, and AI-focused product work.
            </p>
          </div>
          <LinkButton href="/contact">Start a Conversation</LinkButton>
        </div>
      </Section>
    </>
  );
}
