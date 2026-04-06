"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  initialContactFormState,
  submitContactForm,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Send message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  return (
    <form action={formAction} className="surface grid gap-5 p-6 md:p-8">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          className="focus-ring h-11 rounded-md border border-border bg-bg px-3 text-sm"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="focus-ring h-11 rounded-md border border-border bg-bg px-3 text-sm"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="focus-ring rounded-md border border-border bg-bg px-3 py-3 text-sm"
          placeholder="Tell me briefly about your project or question..."
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton />
        <p
          className={`text-sm ${
            state.status === "error" ? "text-red-600 dark:text-red-400" : "text-muted"
          }`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
