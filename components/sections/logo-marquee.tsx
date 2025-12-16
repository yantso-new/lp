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
    name: "CyberReason",
    src: "/logos/cr-logo-inline--primary-black 1.png",
    width: 140,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Leal Health",
    src: "/logos/64c3e685854c668a0054c1aa_Leal Health.png",
    width: 130,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Wix",
    src: "/logos/64c3ea08a194830383e36ce9_Wix.png",
    width: 100,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Earnix",
    src: "/logos/64c785a3b787cf762fcbe8a0_Earnix.png",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Logo Wrapper",
    src: "/logos/64be785cd906a1580880ee97_Logo Wrapper-5.png",
    width: 120,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "MobileOdt",
    src: "/logos/mobile_odt_logo.png",
    width: 150,
    height: 46,
    className: "h-6 sm:h-7",
  },
  {
    name: "Parcela Ja",
    src: "/logos/logo_parcelaja_com-unibanco_white 1.png",
    width: 130,
    height: 40,
    className: "h-6 sm:h-7",
  },
  {
    name: "Hyperad",
    src: "/logos/hyperad.png",
    width: 130,
    height: 40,
    className: "h-6 sm:h-7",
  },
];

interface LogoMarqueeProps {
  className?: string;
}

export function LogoMarquee({ className }: LogoMarqueeProps) {
  return (
    <section className={cn("pb-12 pt-24 sm:pb-2 sm:pt-12", className)}>
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
          <div className="flex animate-marquee items-center gap-12 sm:gap-16">
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
                    "w-auto object-contain transition-opacity duration-300 hover:opacity-80",
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
                    "w-auto object-contain transition-opacity duration-300 hover:opacity-80",
                    logo.className
                  )}
                />
              </div>
            ))}
            {/* Third set for seamless loop without gaps */}
            {logos.map((logo, idx) => (
              <div
                key={`logo-3-${idx}`}
                className="flex shrink-0 items-center justify-center"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={cn(
                    "w-auto object-contain transition-opacity duration-300 hover:opacity-80",
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
