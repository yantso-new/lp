"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface WorkItem {
  id: string;
  title: string;
  src: string;
  alt: string;
}

// Row 1 - scrolls left
const worksRow1: WorkItem[] = [
  {
    id: "work-1",
    title: "Wix Coupons Dashboard",
    src: "/assets/Gemini_Generated_Image_aiilq7aiilq7aiil.png",
    alt: "Wix Coupons Dashboard Design",
  },
  {
    id: "work-2",
    title: "E-commerce Platform",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    alt: "E-commerce Platform Design",
  },
  {
    id: "work-3",
    title: "Health App",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
    alt: "Health App Interface",
  },
  {
    id: "work-4",
    title: "SaaS Landing",
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop&q=80",
    alt: "SaaS Landing Page",
  },
  {
    id: "work-5",
    title: "Travel Platform",
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&q=80",
    alt: "Travel Platform Design",
  },
];

// Row 2 - scrolls right
const worksRow2: WorkItem[] = [
  {
    id: "work-6",
    title: "Analytics Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    alt: "Analytics Dashboard",
  },
  {
    id: "work-7",
    title: "Wix Coupons Dashboard",
    src: "/assets/wix-coupons-dashboard.png",
    alt: "Wix Coupons Dashboard Design",
  },
  {
    id: "work-8",
    title: "Productivity Suite",
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop&q=80",
    alt: "Productivity Suite Interface",
  },
  {
    id: "work-9",
    title: "Real Estate App",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
    alt: "Real Estate Application",
  },
  {
    id: "work-10",
    title: "Social Platform",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=80",
    alt: "Social Platform Design",
  },
];

interface WorkMarqueeProps {
  className?: string;
}

function WorkCard({ work }: { work: WorkItem }) {
  return (
    <div
      className="group relative shrink-0 overflow-hidden rounded-lg border border-border/50 bg-card shadow-lg transition-all duration-200 hover:border-border hover:shadow-xl"
      title={work.title}
    >
      <div className="relative h-[180px] w-[280px] sm:h-[220px] sm:w-[340px] lg:h-[260px] lg:w-[400px]">
        <Image
          src={work.src}
          alt={work.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-102"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <h3 className="text-sm font-semibold text-white sm:text-base">
            {work.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export function WorkMarquee({ className }: WorkMarqueeProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)}>
      <div className="relative flex flex-col gap-6 sm:gap-8">
        {/* Row 1 - Scrolls Right */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background/80 to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background/80 to-transparent sm:w-16 lg:w-24" />

          {/* Scrolling container - moves right */}
          <div className="flex animate-work-marquee-reverse items-center gap-4 sm:gap-6">
            {/* First set */}
            {worksRow1.map((work) => (
              <WorkCard key={`${work.id}-1`} work={work} />
            ))}
            {/* Duplicate for seamless loop */}
            {worksRow1.map((work) => (
              <WorkCard key={`${work.id}-2`} work={work} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background/80 to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background/80 to-transparent sm:w-16 lg:w-24" />

          {/* Scrolling container - moves left */}
          <div className="flex animate-work-marquee items-center gap-4 sm:gap-6">
            {/* First set */}
            {worksRow2.map((work) => (
              <WorkCard key={`${work.id}-1`} work={work} />
            ))}
            {/* Duplicate for seamless loop */}
            {worksRow2.map((work) => (
              <WorkCard key={`${work.id}-2`} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

