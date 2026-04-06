"use server";

import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/contact/rate-limit";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("company") || "").trim();

  if (honeypot) {
    return {
      status: "success",
      message: "Message received.",
    };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  if (message.length < 20) {
    return {
      status: "error",
      message: "Message should be at least 20 characters.",
    };
  }

  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ipAddress = forwardedFor || "unknown";
  const key = `${ipAddress}:${email.toLowerCase()}`;
  const rateLimit = checkRateLimit(key);

  if (!rateLimit.allowed) {
    return {
      status: "error",
      message: "Too many submissions. Please wait a few minutes and try again.",
    };
  }

  console.log("[CONTACT_FORM]", {
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
    ipAddress,
  });

  return {
    status: "success",
    message: "Thanks for reaching out. I will reply shortly.",
  };
}
