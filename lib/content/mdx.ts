import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type MdxEntry<T> = T & {
  slug: string;
  content: string;
};

export function readMdxCollection<T extends z.ZodObject<z.ZodRawShape>>(
  directory: string,
  schema: T,
) {
  const targetDirectory = path.join(CONTENT_DIR, directory);

  if (!fs.existsSync(targetDirectory)) {
    return [] as Array<MdxEntry<z.infer<T>>>;
  }

  return fs
    .readdirSync(targetDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(targetDirectory, fileName), "utf8");
      const parsed = matter(source);
      const validated = schema.safeParse(parsed.data);

      if (!validated.success) {
        throw new Error(
          `Invalid frontmatter in ${directory}/${fileName}: ${validated.error.message}`,
        );
      }

      const data = validated.data as z.infer<T>;

      return {
        slug,
        content: parsed.content,
        ...data,
      } as MdxEntry<z.infer<T>>;
    });
}
