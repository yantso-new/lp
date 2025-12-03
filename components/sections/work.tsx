"use client";

import { WorkCard, type WorkProject } from "@/components/work/work-card";
import Image from "next/image";

const projects: WorkProject[] = [
  {
    id: "wix",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/wix.svg"
          alt="Wix"
          width={80}
          height={32}
          className="h-8 w-auto"
        />
      </div>
    ),
    title: "Revolutionizing E-commerce Management - Wix Coupons Dashboard",
    tags: ["UX Design", "Design Lead", "Design Systems", "SaaS"],
    image: "/assets/wix-coupons-dashboard.png",
    variant: "light",
    highlight: "Over 250 million users worldwide",
  },
  {
    id: "nanit",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/logos/nanit.svg"
          alt="Nanit"
          width={120}
          height={36}
          className="h-9 w-auto"
        />
      </div>
    ),
    title: "Smart Baby Monitoring - Designing the Future of Parenting",
    tags: ["Mobile App", "UI Design", "IoT"],
    image: "/assets/Gemini_Generated_Image_aiilq7aiilq7aiil.png",
    variant: "dark",
    highlight: "Award-winning baby tech innovation",
  },
  {
    id: "cybereason",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/cybereason.svg"
          alt="Cybereason"
          width={140}
          height={32}
          className="h-7 w-auto brightness-0 invert"
        />
      </div>
    ),
    title: "Enterprise Cybersecurity Platform - Threat Detection Dashboard",
    tags: ["Enterprise", "Data Visualization", "UI Design"],
    image: "/assets/wix-coupons-dashboard.png",
    variant: "dark",
    highlight: "Protecting Fortune 500 companies",
  },
  {
    id: "earnix",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/earnix.png"
          alt="Earnix"
          width={100}
          height={32}
          className="h-7 w-auto"
        />
      </div>
    ),
    title: "AI-Powered Pricing Platform - Insurance & Banking Solutions",
    tags: ["SaaS", "Enterprise", "Analytics"],
    image: "/assets/Gemini_Generated_Image_aiilq7aiilq7aiil.png",
    variant: "light",
    highlight: "Serving 100+ global financial institutions",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Selected Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A curated collection of projects where design meets functionality.
            Each project represents a unique challenge solved with creativity
            and precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
