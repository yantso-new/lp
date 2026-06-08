"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkCard } from "@/components/work/work-card";
import { workProjects } from "@/lib/work-projects";

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            This is how we build success
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Experience across payments, ecommerce, CRM, healthtech, dashboards,
            and AI-assisted workflows informs the way I build for small
            businesses.
          </p>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            View all work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {workProjects.slice(0, 4).map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
