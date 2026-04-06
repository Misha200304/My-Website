import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { AnchorHTMLAttributes } from "react";

type MDXContentProps = {
  source: string;
};

const components = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href || "#";
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          {...props}
          className="text-accent underline decoration-accent/50 underline-offset-4 hover:text-accentStrong"
          target="_blank"
          rel="noreferrer noopener"
        />
      );
    }
    return (
      <Link
        href={href}
        className="text-accent underline decoration-accent/50 underline-offset-4 hover:text-accentStrong"
      >
        {props.children}
      </Link>
    );
  },
  img: (props: { src?: string; alt?: string }) => {
    const src = props.src || "";
    return (
      <figure className="surface my-8 overflow-hidden border-border p-3">
        <img
          src={src}
          alt={props.alt || "Project chart"}
          className="h-auto w-full rounded-[calc(var(--radius-md)-0.2rem)] object-cover"
        />
        {props.alt && <figcaption className="mt-3 text-sm text-muted">{props.alt}</figcaption>}
      </figure>
    );
  },
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose-editorial">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
