import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getAllCertificates } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Professional certifications and credentials.",
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Certificates",
    description: "Professional certifications and credentials.",
    url: absoluteUrl("/certificates"),
  },
};

export default function CertificatesPage() {
  const certificates = getAllCertificates();

  return (
    <Section
      title="Certificates"
      subtitle="Credentials that reflect technical progression, academic distinction, and applied entrepreneurial execution."
      className="py-16 md:py-20"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <Card key={certificate.slug} className="p-6">
            <h2 className="font-serif text-2xl tracking-tight">{certificate.title}</h2>
            <p className="mt-3 text-muted">{certificate.issuer}</p>
            <p className="mt-2 text-sm text-muted">
              {(certificate.dateLabel || "Issued")} {formatDate(certificate.issueDate)}
            </p>
            {certificate.learned.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {certificate.learned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {certificate.skills.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            )}
            {(certificate.credentialUrl || certificate.file) && (
              <a
                href={certificate.credentialUrl || certificate.file}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring mt-5 inline-flex w-fit rounded text-sm text-accent underline decoration-accent/50 underline-offset-4 hover:text-accentStrong"
              >
                View certificate
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
