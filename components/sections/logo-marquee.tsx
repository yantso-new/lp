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
    name: "Cybereason",
    src: "/logos/cybereason.svg",
    width: 160,
    height: 40,
    className: "h-7 sm:h-8",
  },
  {
    name: "Earnix",
    src: "/logos/earnix.png",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Nanit",
    src: "/logos/nanit.svg",
    width: 180,
    height: 50,
    className: "h-8 sm:h-9",
  },
  {
    name: "Parcela Já",
    src: "/logos/parcela-ja.svg",
    width: 140,
    height: 36,
    className: "h-7 sm:h-8",
  },
  {
    name: "Wix",
    src: "/logos/wix.png",
    width: 100,
    height: 40,
    className: "h-6 sm:h-7",
  },
];

interface LogoMarqueeProps {
  className?: string;
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  return (
    <section className={cn("py-8 sm:py-10", className)}>
      <div className="relative flex flex-col items-center">
        {/* Heading */}
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 sm:mb-8 sm:text-sm">
          Trusted by
        </p>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient masks for smooth fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

          {/* Scrolling logos - using inline-flex for proper width calculation */}
          <div className="inline-flex w-max animate-marquee items-center gap-12 sm:gap-16">
            {/* First set of logos */}
            {logos.map((logo, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="flex shrink-0 items-center"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={cn(
                    "w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-90 dark:invert",
                    logo.className
                  )}
                  style={{
                    filter: logo.src.endsWith('.png') ? 'brightness(0)' : undefined,
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="flex shrink-0 items-center"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={cn(
                    "w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-90 dark:invert",
                    logo.className
                  )}
                  style={{
                    filter: logo.src.endsWith('.png') ? 'brightness(0)' : undefined,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
