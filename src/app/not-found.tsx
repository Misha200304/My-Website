import Link from "next/link";

export default function NotFound() {
  return <section className="soft-grad flex min-h-[60vh] items-center"><div className="mx-auto max-w-3xl px-6 py-24 text-center"><p className="accent-text mb-3 text-sm font-semibold uppercase tracking-widest">404</p><h1 className="mb-4 text-4xl font-bold text-[#161E2D]">Page not found</h1><p className="mb-8 text-neutral-600">The page you&apos;re looking for does not exist or has moved.</p><Link href="/" className="accent-bg inline-block rounded-full px-6 py-3 font-semibold">Back home</Link></div></section>;
}
