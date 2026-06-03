import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/service-pages";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Product Design and MVP Services",
  description:
    "Explore product design, MVP build, frontend development, and design system services for startups and product teams.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Product Design and MVP Services",
    description:
      "Explore product design, MVP build, frontend development, and design system services for startups and product teams.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Services
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Product design and build services for teams that need to ship.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Focused services for startups, founders, and product teams that need
            senior design judgment, polished interfaces, and practical frontend
            execution.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {servicePages.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-border/60 bg-background/60 p-6 transition-colors hover:border-foreground/30"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {service.shortTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.promise}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium">
                View service
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Button asChild size="lg">
            <Link href="/#contact">Book a discovery call</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
