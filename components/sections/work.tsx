"use client";

import { WorkCard, type WorkProject } from "@/components/work/work-card";
import Image from "next/image";

const projects: WorkProject[] = [
  {
    id: "wix",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/64c3ea08a194830383e36ce9_Wix.png"
          alt="Wix"
          width={80}
          height={32}
          className="h-8 w-auto"
        />
      </div>
    ),
    title: "Payments, CRM and E-commerce for hunderds of millions of users",
    tags: ["UX Design", "Design Lead", "Design Systems", "SaaS", "strategy"],
    image: "/assets/work_cards_imgs/wix_payments.png",
    variant: "light",
    highlight: "Over 250 million users worldwide",
  },
  {
    id: "parcela_ja",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/logos/logo_parcelaja_com-unibanco_white 1.png"
          alt="Parcela Já"
          width={120}
          height={36}
          className="h-9 w-auto"
        />
      </div>
    ),
    title: "A new instore payment experience",
    tags: ["Mobile App", "UI Design", "UX Design", "Fintech", "Strategy"],
    image: "/assets/work_cards_imgs/parcela_ja.png",
    variant: "dark",
    highlight: "Leading payments platform",
  },
  {
    id: "mobile_odt",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/mobile_odt_logo.png"
          alt="Mobile ODT"
          width={280}
          height={64}
          className="h-7 w-auto brightness-0 invert"
        />
      </div>
    ),
    title: "High Technology for Women’s Health",
    tags: ["Design Lead", "UX Design", "IOT", "HealthTech", "Strategy"],
    image: "/assets/work_cards_imgs/mobile_odt2.png",
    variant: "dark",
    highlight: "Saving Women's lives daily",
  },
  {
    id: "Hyperad",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/hyperad.png"
          alt="Hyperad"
          width={100}
          height={32}
          className="h-7 w-auto"
        />
      </div>
    ),
    title: "Automate ad creation with data driven insights and on brand execution.",
    tags: ["MVP", "GenAI", "ADtech"],
    image: "/assets/work_cards_imgs/hyperad.png",
    variant: "light",
    highlight: "1 Million Dollars in Funding",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Selected Work
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
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
