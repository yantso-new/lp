"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface WorkItem {
  id: string;
  title: string;
  src: string;
  alt: string;
  aspectRatio: number; // width / height
}

// Row 1 - scrolls left
const worksRow1: WorkItem[] = [
  {
    id: "work-1",
    title: "Wix Coupons Dashboard",
    src: "/assets/work_images/wix_coupons.png",
    alt: "Wix Coupons Dashboard Design",
    aspectRatio: 1.504, // 2400/1596
  },
  {
    id: "work-2",
    title: "Hyperads",
    src: "/assets/work_images/hyperads.png",
    alt: "Hyperads",
    aspectRatio: 1.592, // 1452/912
  },
  {
    id: "work-3",
    title: "Nanit Smart Baby Camera",
    src: "/assets/work_images/nanit_1.png",
    alt: "Nanit Smart Baby Camera",
    aspectRatio: 0.461, // 786/1704
  },
  {
    id: "work-4",
    title: "Wix Payments",
    src: "/assets/work_images/wix_payments.png",
    alt: "Wix Payments",
    aspectRatio: 1.778, // 2800/1575
  },
  {
    id: "work-5",
    title: "Family Keeper",
    src: "/assets/work_images/family_keeper.png",
    alt: "Family Keeper ios app",
    aspectRatio: 0.462, // 780/1688
  },
  {
    id: "work-6",
    title: "Be Wellness Product Interface",
    src: "/assets/work_images/be.png",
    alt: "Be wellness product interface design",
    aspectRatio: 1.776, // 3840/2162
  },
];

interface WorkMarqueeProps {
  className?: string;
}

function WorkCard({ work }: { work: WorkItem }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-lg border border-border/50 bg-card shadow-lg"
      title={work.title}
    >
      <div
        className="relative h-[225px] sm:h-[275px] lg:h-[325px]"
        style={{ aspectRatio: work.aspectRatio }}
      >
        <Image
          src={work.src}
          alt={work.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
        />
      </div>
    </div>
  );
}

export function WorkMarquee({ className }: WorkMarqueeProps) {
  return (
    <section className={cn("pt-8 pb-0", className)}>
      <div className="relative flex flex-col gap-6 sm:gap-8">
        {/* Row 1 - Scrolls Right */}
        <div className="relative w-full overflow-hidden">
          {/* Fade gradients at 10% of each side on large screens */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[10%] bg-gradient-to-r from-background to-transparent xl:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[10%] bg-gradient-to-l from-background to-transparent xl:block" />

          {/* Scrolling container - moves right */}
          <div className="flex w-max animate-work-marquee-reverse items-center gap-4 sm:gap-6 will-change-transform">
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
      </div>
    </section>
  );
}
