import { z } from "zod";

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  image: z.string().min(1),
  imageAlt: z.string().min(1),
  role: z.string().min(1),
  responsibilities: z.array(z.string().min(1)).min(1),
  stack: z.array(z.string().min(1)).min(1),
  keyMetric: z.string().optional(),
  featured: z.boolean().optional().default(false),
  githubUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  reportUrl: z.string().url().optional(),
  ogImage: z.string().optional(),
});

export const certificateFrontmatterSchema = z.object({
  title: z.string().min(1),
  issuer: z.string().min(1),
  issueDate: z.string().min(1),
  dateLabel: z.enum(["Issued", "Completed", "Awarded"]).optional(),
  priority: z.number().int().positive().optional(),
  credentialId: z.string().optional(),
  credentialUrl: z.string().url().optional(),
  file: z.string().min(1).optional(),
  learned: z.array(z.string().min(1)).default([]),
  skills: z.array(z.string().min(1)).default([]),
});

export const courseworkFrontmatterSchema = z.object({
  title: z.string().min(1),
  provider: z.string().min(1),
  term: z.string().min(1),
  track: z.enum(["Data Science & AI", "Business", "Marketing"]),
  tags: z.array(z.string().min(1)).min(1),
  grade: z.string().optional(),
  highlights: z.array(z.string().min(1)).default([]),
  focus: z.string().optional(),
  priority: z.number().int().positive().optional(),
});

export const writingFrontmatterSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.string().min(1),
  tags: z.array(z.string().min(1)).default([]),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
export type CertificateFrontmatter = z.infer<
  typeof certificateFrontmatterSchema
>;
export type CourseworkFrontmatter = z.infer<typeof courseworkFrontmatterSchema>;
export type WritingFrontmatter = z.infer<typeof writingFrontmatterSchema>;
