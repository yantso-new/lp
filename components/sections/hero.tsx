import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { WorkMarquee } from "@/components/sections/work-marquee";

export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-32"
      >
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23000' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            I design and build
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
              beautiful products
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Crafting thoughtful digital experiences that blend aesthetics with
            functionality. From concept to launch, I help startups and businesses
            bring their vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#work">View my work</a>
            </Button>
          </div>
        </div>

        {/* Logo Marquee - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <LogoMarquee />
        </div>
      </section>

      {/* Work Marquee - Two rows, opposite directions */}
      <WorkMarquee className="-mt-4" />
    </>
  );
}

