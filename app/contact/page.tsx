import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message for collaboration, internships, and project work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: "Send a message for collaboration, internships, and project work.",
    url: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Share your context, timeline, and goals. I usually reply within 1-2 business days."
      className="py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <ContactForm />
      </div>
    </Section>
  );
}
