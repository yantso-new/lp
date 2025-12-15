"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Logo {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
}

const logos: Logo[] = [
  {
    name: "Goodnet",
    src: "/assets/64c3e685508ba9177c47508a_Goodnet.png",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Nanit",
    src: "/assets/Nanit_idSjHsaZIz_1.png",
    width: 110,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "MobileODT",
    src: "/assets/64c3ea07683b5cbaab5b5332_MobileOdt.png",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Leal Health",
    src: "/assets/64c3e685854c668a0054c1aa_Leal Health.png",
    width: 130,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Diagnostic Robotics",
    src: "/assets/6571c7292b12ee299ccc62c9_Logo H.png",
    width: 140,
    height: 45,
    className: "h-7 sm:h-8",
  },
  {
    name: "Earnix",
    src: "/assets/Earnix_idns8jrKZg_2.svg",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Family Keeper",
    src: "/assets/64c7844c3bb6e5df1199de83_FamilyKeeper.svg",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
];

interface LogoMarqueeProps {
  className?: string;
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  return (
    <section className={cn("py-24 sm:py-32", className)}>
      <div className="relative flex flex-col items-center">
        {/* Heading */}
        <p className="mb-12 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 sm:text-sm">
          Trusted by
        </p>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient masks for smooth fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-background to-transparent sm:w-32" />

          {/* Scrolling logos wrapper */}
          <div className="flex animate-marquee items-center gap-10 sm:gap-14">
            {/* First set of logos */}
            {logos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="flex shrink-0 items-center justify-center"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={cn(
                    "w-auto object-contain brightness-0 invert opacity-50 transition-opacity duration-300 hover:opacity-80",
                    logo.className
                  )}
                />
              </div>
            ))}
            {/* Duplicate set for seamless infinite loop */}
            {logos.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="flex shrink-0 items-center justify-center"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={cn(
                    "w-auto object-contain brightness-0 invert opacity-50 transition-opacity duration-300 hover:opacity-80",
                    logo.className
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
