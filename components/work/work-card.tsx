"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export interface WorkProject {
  id: string;
  logo: React.ReactNode;
  title: string;
  tags: string[];
  image: string;
  variant: "light" | "dark";
  highlight?: string;
}

interface WorkCardProps {
  project: WorkProject;
  className?: string;
}

export function WorkCard({ project, className }: WorkCardProps) {
  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border-0 py-0 transition-all duration-300 hover:shadow-2xl bg-card text-card-foreground",
        className
      )}
    >
      {/* Highlight Note */}
      {project.highlight && (
        <div className="px-6 py-3 text-center text-xs font-medium tracking-wide uppercase bg-muted/80 text-muted-foreground">
          {project.highlight}
        </div>
      )}

      <CardHeader className="items-center gap-4 px-8 pt-8 pb-4">
        {/* Logo */}
        <div className="flex items-center justify-center py-2">
          {project.logo}
        </div>

        {/* Title */}
        <CardTitle className="text-center text-lg font-semibold leading-snug md:text-xl min-h-[3.5rem] md:min-h-[3.75rem] flex items-start justify-center">
          {project.title}
        </CardTitle>

        {/* Tags */}
        <CardDescription className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>

      {/* Image Container */}
      <CardContent className="relative mt-auto flex-1 px-6 pb-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay with CTA */}
          <div className="absolute inset-0 flex items-end justify-center bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              className="gap-2 rounded-full bg-background text-foreground shadow-lg transition-transform hover:bg-muted"
              disabled
            >
              Case Study Coming Soon
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Always visible CTA on touch devices */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:hidden">
            <Button
              className="gap-2 rounded-full bg-background text-foreground shadow-lg"
              disabled
            >
              Coming Soon
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

