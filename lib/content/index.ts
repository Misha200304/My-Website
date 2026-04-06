import { cache } from "react";
import { readMdxCollection } from "@/lib/content/mdx";
import {
  certificateFrontmatterSchema,
  courseworkFrontmatterSchema,
  projectFrontmatterSchema,
  writingFrontmatterSchema,
  type CertificateFrontmatter,
  type CourseworkFrontmatter,
  type ProjectFrontmatter,
  type WritingFrontmatter,
} from "@/lib/content/schema";

export type ProjectEntry = ProjectFrontmatter & {
  slug: string;
  content: string;
};

export type CertificateEntry = CertificateFrontmatter & {
  slug: string;
  content: string;
};

export type CourseworkEntry = CourseworkFrontmatter & {
  slug: string;
  content: string;
};

export type WritingEntry = WritingFrontmatter & {
  slug: string;
  content: string;
};

const getProjectCollection = cache(() =>
  readMdxCollection("projects", projectFrontmatterSchema),
);

const getCertificateCollection = cache(() =>
  readMdxCollection("certificates", certificateFrontmatterSchema),
);

const getCourseworkCollection = cache(() =>
  readMdxCollection("coursework", courseworkFrontmatterSchema),
);

const getWritingCollection = cache(() =>
  readMdxCollection("writing", writingFrontmatterSchema),
);

export function getAllProjects(options?: { tag?: string }) {
  const normalizedTag = options?.tag?.toLowerCase().trim();
  const projects = getProjectCollection()
    .filter((project) => {
      if (!normalizedTag) return true;
      return project.tags.some((tag) => tag.toLowerCase() === normalizedTag);
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return projects;
}

export function getAllProjectTags() {
  return Array.from(
    new Set(getProjectCollection().flatMap((project) => project.tags)),
  ).sort((a, b) => a.localeCompare(b));
}

export function getProjectBySlug(slug: string) {
  return getProjectCollection().find((project) => project.slug === slug);
}

export function getAllCertificates(options?: { tag?: string }) {
  const normalizedTag = options?.tag?.toLowerCase().trim();
  return getCertificateCollection()
    .filter((certificate) => {
      if (!normalizedTag) return true;
      return certificate.skills.some(
        (skill) => skill.toLowerCase() === normalizedTag,
      );
    })
    .sort((a, b) => {
      const priorityA = a.priority ?? 999;
      const priorityB = b.priority ?? 999;
      if (priorityA !== priorityB) return priorityA - priorityB;
      return +new Date(b.issueDate) - +new Date(a.issueDate);
    });
}

export function getAllCoursework(options?: { tag?: string; track?: string }) {
  const normalizedTag = options?.tag?.toLowerCase().trim();
  const normalizedTrack = options?.track?.toLowerCase().trim();
  return getCourseworkCollection()
    .filter((course) => {
      if (normalizedTrack && course.track.toLowerCase() !== normalizedTrack) {
        return false;
      }
      if (!normalizedTag) return true;
      return course.tags.some((tag) => tag.toLowerCase() === normalizedTag);
    })
    .sort((a, b) => {
      const priorityA = a.priority ?? 999;
      const priorityB = b.priority ?? 999;
      if (priorityA !== priorityB) return priorityA - priorityB;
      return a.term.localeCompare(b.term);
    });
}

export function getAllCourseworkTracks() {
  return ["Data Science & AI", "Business", "Marketing"] as const;
}

export function getAllWriting() {
  return getWritingCollection().sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
