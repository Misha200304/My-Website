import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function MarkdownLite({ source }: { source: string }) {
  const lines = source.split("\n");
  const nodes: Array<React.ReactNode> = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      nodes.push(
        <p key={`p-${nodes.length}`} className="mt-5 text-[1.02rem] leading-8 text-muted">
          {paragraphBuffer.join(" ")}
        </p>,
      );
      paragraphBuffer = [];
    }
  };

  const flushList = () => {
    if (listBuffer.length > 0) {
      nodes.push(
        <ul key={`ul-${nodes.length}`} className="mt-5 list-disc space-y-3 pl-6 text-muted">
          {listBuffer.map((item) => (
            <li key={`${nodes.length}-${item}`}>{item}</li>
          ))}
        </ul>,
      );
      listBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      nodes.push(
        <h2 key={`h2-${nodes.length}`} className="mt-12 text-3xl font-semibold tracking-tight text-text">
          {line.replace(/^##\s+/, "")}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      nodes.push(
        <h3 key={`h3-${nodes.length}`} className="mt-10 text-2xl font-semibold tracking-tight text-text">
          {line.replace(/^###\s+/, "")}
        </h3>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listBuffer.push(line.replace(/^- /, ""));
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();
  return <div>{nodes}</div>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  const title = `${project.title} | Project`;
  const description = project.summary;
  const ogImage = project.ogImage || project.image || siteConfig.ogImage;
  const url = absoluteUrl(`/projects/${project.slug}`);

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const links = [
    { label: "GitHub", href: project.githubUrl },
    { label: "Live Demo", href: project.demoUrl },
    { label: "Report", href: project.reportUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <Section className="py-16 md:py-20">
      <div className="grid grid-cols-1 gap-8">
        <Link
          href="/projects"
          className="focus-ring inline-flex w-fit rounded-md text-sm text-muted hover:text-accent"
        >
          ← Back to projects
        </Link>

        <header className="grid gap-7 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">{project.title}</h1>
            <p className="text-lg leading-8 text-muted">{project.summary}</p>
            <p className="text-sm text-muted">Published {formatDate(project.date)}</p>
          </div>
          <div className="surface p-2">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={720}
              className="h-full w-full rounded-[calc(var(--radius-lg)-0.2rem)] object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article className="surface p-7 md:p-10">
            <MarkdownLite source={project.content} />
          </article>

          <aside className="space-y-6">
            <div className="surface p-6">
              <h2 className="font-serif text-2xl tracking-tight">Role</h2>
              <p className="mt-3 text-muted">{project.role}</p>
            </div>

            <div className="surface p-6">
              <h2 className="font-serif text-2xl tracking-tight">Responsibilities</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="surface p-6">
              <h2 className="font-serif text-2xl tracking-tight">Implementation Stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>

            {links.length > 0 && (
              <div className="surface p-6">
                <h2 className="font-serif text-2xl tracking-tight">Links</h2>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="focus-ring rounded text-accent underline decoration-accent/40 underline-offset-4 hover:text-accentStrong"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </Section>
  );
}
