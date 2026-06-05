import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Rocket, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Compare startup product design, website and ecommerce, and automation and internal tool services from Yaniv Tsoref.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description:
      "Compare startup product design, website and ecommerce, and automation and internal tool services from Yaniv Tsoref.",
    url: "/services",
    type: "website",
  },
};

const offers = [
  {
    href: "/startups",
    icon: Rocket,
    title: "For startups",
    description:
      "Fractional product design, MVP scope, UX/UI, design systems, and frontend implementation for early teams.",
  },
  {
    href: "/websites",
    icon: Globe2,
    title: "Websites and ecommerce",
    description:
      "Landing pages, business websites, Shopify/Wix stores, and custom storefronts for clearer conversion paths.",
  },
  {
    href: "/automations",
    icon: Workflow,
    title: "Automations and internal tools",
    description:
      "Workflow automations, CRM updates, dashboards, admin panels, portals, and staff-facing tools.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Services
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Choose the path that matches the work.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Three focused offers cover the most common ways I help: shaping a
            startup product, building a public website or store, or improving the
            internal workflows that keep the business running.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <Link
              key={offer.href}
              href={offer.href}
              className="group rounded-lg border border-border/60 bg-background/60 p-6 transition-colors hover:border-foreground/30"
            >
              <offer.icon className="mb-5 h-10 w-10 stroke-1 text-muted-foreground transition-colors group-hover:text-foreground" />
              <h2 className="text-2xl font-semibold tracking-tight">
                {offer.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {offer.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium">
                View offer
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
