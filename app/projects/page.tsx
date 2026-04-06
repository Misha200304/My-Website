import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects, getAllProjectTags } from "@/lib/content";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { absoluteUrl } from "@/lib/seo";

type ProjectsPageProps = {
  searchParams: {
    tag?: string;
  };
};

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and shipped work with measurable outcomes.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects",
    description: "Case studies and shipped work with measurable outcomes.",
    url: absoluteUrl("/projects"),
  },
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const selectedTag = searchParams.tag;
  const allTags = getAllProjectTags();
  const projects = getAllProjects({ tag: selectedTag });

  return (
    <Section
      title="Projects"
      subtitle="Filter by domain and open each project for full problem framing, implementation details, and outcomes."
      className="py-16 md:py-20"
    >
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Link
          href="/projects"
          className="focus-ring rounded-full border border-border px-3 py-1 text-sm text-muted hover:text-text"
        >
          All
        </Link>
        {allTags.map((tag) => {
          const active = selectedTag?.toLowerCase() === tag.toLowerCase();
          return (
            <Link
              key={tag}
              href={`/projects?tag=${encodeURIComponent(tag)}`}
              className={`focus-ring rounded-full border px-3 py-1 text-sm transition ${
                active
                  ? "border-accent bg-accent text-white"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {tag}
            </Link>
          );
        })}
      </div>

      {projects.length === 0 ? (
        <div className="surface p-8">
          <h2 className="font-serif text-2xl">No projects found for this filter</h2>
          <p className="mt-3 text-muted">
            Try another tag or reset to view all projects.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Section>
  );
}
