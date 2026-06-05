import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { WorkCard } from "@/components/work/work-card";
import { Button } from "@/components/ui/button";
import { workProjects } from "@/lib/work-projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Yaniv Tsoref across ecommerce, direct booking websites, payments, healthtech, AI workflows, and internal tools.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work",
    description:
      "Selected work by Yaniv Tsoref across ecommerce, direct booking websites, payments, healthtech, AI workflows, and internal tools.",
    url: "/work",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Work
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Selected work across stores, sites, products, and tools.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A growing archive of projects across headless commerce, direct
              booking websites, payments, ecommerce, CRM, healthtech, AI
              workflows, and operations tools.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
            {workProjects.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Have a relevant project?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Case studies can be added here as the archive grows.
              </p>
            </div>
            <Button asChild>
              <Link href="/#contact">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
