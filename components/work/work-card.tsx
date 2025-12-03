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
  const isDark = project.variant === "dark";

  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border-0 py-0 transition-all duration-300 hover:shadow-2xl",
        isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900",
        className
      )}
    >
      {/* Highlight Note */}
      {project.highlight && (
        <div
          className={cn(
            "px-6 py-3 text-center text-xs font-medium tracking-wide uppercase",
            isDark
              ? "bg-slate-800/80 text-slate-400"
              : "bg-slate-100 text-slate-500"
          )}
        >
          {project.highlight}
        </div>
      )}

      <CardHeader className="items-center gap-4 px-8 pt-8 pb-4">
        {/* Logo */}
        <div className={cn("flex items-center justify-center py-2", isDark && "text-white")}>
          {project.logo}
        </div>

        {/* Title */}
        <CardTitle
          className={cn(
            "text-center text-lg font-semibold leading-snug md:text-xl",
            isDark ? "text-white" : "text-slate-900"
          )}
        >
          {project.title}
        </CardTitle>

        {/* Tags */}
        <CardDescription className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                isDark
                  ? "border-slate-600 bg-slate-800/50 text-slate-300"
                  : "border-slate-300 bg-slate-50 text-slate-600"
              )}
            >
              {tag}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>

      {/* Image Container */}
      <CardContent className="relative mt-auto flex-1 px-6 pb-6">
        <div
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-2xl",
            isDark ? "bg-slate-800" : "bg-slate-100"
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay with CTA */}
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              className="gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-lg transition-transform hover:bg-slate-100"
              disabled
            >
              Coming Soon
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Always visible CTA on touch devices */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:hidden">
            <Button
              className="gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-lg"
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

