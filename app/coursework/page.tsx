import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getAllCoursework } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Coursework",
  description: "Selected coursework in analytics, machine learning, and strategy.",
  alternates: { canonical: "/coursework" },
  openGraph: {
    title: "Coursework",
    description: "Selected coursework in analytics, machine learning, and strategy.",
    url: absoluteUrl("/coursework"),
  },
};

export const dynamic = "force-dynamic";

type CourseworkPageProps = {
  searchParams: {
    track?: string | string[];
  };
};

const TRACK_OPTIONS = [
  { label: "Data Science & AI", value: "data-science-ai" },
  { label: "Business", value: "business" },
  { label: "Marketing", value: "marketing" },
] as const;

function resolveTrack(trackParam: string | string[] | undefined) {
  const rawValue = Array.isArray(trackParam) ? trackParam[0] : trackParam;
  if (!rawValue) return null;

  const normalized = rawValue.toLowerCase().trim();
  if (normalized === "data-science-ai" || normalized === "data science & ai") {
    return "Data Science & AI";
  }
  if (normalized === "business") return "Business";
  if (normalized === "marketing") return "Marketing";
  return null;
}

export default async function CourseworkPage({ searchParams }: CourseworkPageProps) {
  const selectedTrackLabel = resolveTrack(searchParams.track);
  const coursework = getAllCoursework({ track: selectedTrackLabel || undefined });

  return (
    <Section
      title="Coursework"
      subtitle="Rigorous training across statistics, programming, AI, analytics, and business decision-making."
      className="py-16 md:py-20"
    >
      <div className="mb-8 flex flex-wrap gap-3">
        <Link
          href="/coursework"
          className={`focus-ring rounded-full border px-3 py-1 text-sm transition ${
            !selectedTrackLabel
              ? "border-accent bg-accent text-white"
              : "border-border text-muted hover:border-accent hover:text-accent"
          }`}
        >
          All
        </Link>
        {TRACK_OPTIONS.map((track) => {
          const active = selectedTrackLabel === track.label;
          return (
            <Link
              key={track.value}
              href={`/coursework?track=${track.value}`}
              className={`focus-ring rounded-full border px-3 py-1 text-sm transition ${
                active
                  ? "border-accent bg-accent text-white"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {track.label}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {coursework.map((course) => (
          <Card key={course.slug} className="p-6">
            <h2 className="font-serif text-2xl tracking-tight">{course.title}</h2>
            <p className="mt-3 text-sm text-muted">
              {course.term}
              {course.grade ? ` · Grade: ${course.grade}` : ""}
            </p>
            {course.focus && (
              <p className="mt-2 text-sm text-muted">Topics covered: {course.focus}</p>
            )}
            {course.highlights.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {course.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
