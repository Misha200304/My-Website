import Image from "next/image";
import Link from "next/link";
import type { ProjectEntry } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <Link href={`/projects/${project.slug}`} className="focus-ring block rounded-[var(--radius-lg)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={720}
          className="h-56 w-full border-b border-border object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h3 className="font-serif text-2xl tracking-tight">{project.title}</h3>
          <p className="leading-7 text-muted">{project.summary}</p>
          {project.keyMetric && (
            <p className="rounded-md border border-border bg-bg px-3 py-2 text-sm font-medium">
              {project.keyMetric}
            </p>
          )}
        </div>
      </Link>
    </Card>
  );
}
