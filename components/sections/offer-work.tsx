import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkCard } from "@/components/work/work-card";
import { workProjects } from "@/lib/work-projects";

type OfferWorkProps = {
  title: string;
  description: string;
  projectIds: string[];
};

export function OfferWork({ title, description, projectIds }: OfferWorkProps) {
  const projects = projectIds
    .map((id) => workProjects.find((project) => project.id === id))
    .filter((project) => project !== undefined);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            View all work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
