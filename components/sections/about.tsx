import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Brush,
  Zap,
  Rocket,
  Users,
  RefreshCw,
  Globe,
  Layers,
  Heart,
  Sparkles,
  MapPin,
} from "lucide-react";

const whatIDo = [
  {
    icon: Brush,
    title: "Design first",
    description:
      "Research, UX/UI, and design systems tailored to your product goals.",
  },
  {
    icon: Layers,
    title: "Build with leverage",
    description:
      "Assemble using Next.js or no/low‑code where it fits, with AI tools like Cursor to accelerate implementation.",
  },
  {
    icon: Rocket,
    title: "Rapid delivery",
    description:
      "Go from brief to clickable prototype or live MVP in days, not weeks.",
  },
];

const howIWork = [
  {
    icon: Users,
    title: "Partner mindset",
    description:
      "With founders and product teams; clear scope, tight feedback loops, and visible progress.",
  },
  {
    icon: RefreshCw,
    title: "Prototype → validate → ship",
    description:
      "Quick tests, real signals, and clean handoff—or full build via no/low‑code + light code glue.",
  },
  {
    icon: Globe,
    title: "Remote‑first",
    description: "In EU time from Bensafrim, Faro, Portugal.",
  },
];

const focusAreas = [
  {
    icon: Zap,
    label: "SaaS & internal tools",
  },
  {
    icon: Heart,
    label: "Wellness & yoga tech",
  },
  {
    icon: Sparkles,
    label: "AI‑assisted workflows",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t bg-muted/30 py-24 sm:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <Badge variant="outline" className="mb-4">
            <MapPin className="mr-1 h-3 w-3" />
            Algarve, Portugal
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About me
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Product designer based in the Algarve who ships end‑to‑end using
            no/low‑code platforms and AI‑assisted tooling. The focus is fast
            iteration from idea to usable product, combining UX rigor with
            pragmatic build workflows.
          </p>
        </div>

        {/* What I do */}
        <div className="mb-16">
          <h3 className="mb-8 text-xl font-semibold tracking-tight sm:text-2xl">
            What I do
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatIDo.map((item) => (
              <Card
                key={item.title}
                className="group border-transparent bg-background/60 backdrop-blur-sm transition-all hover:border-border hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How I work */}
        <div className="mb-16">
          <h3 className="mb-8 text-xl font-semibold tracking-tight sm:text-2xl">
            How I work
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howIWork.map((item) => (
              <Card
                key={item.title}
                className="group border-transparent bg-background/60 backdrop-blur-sm transition-all hover:border-border hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Focus areas + CTA */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex-1">
            <h3 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">
              Focus areas
            </h3>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <Badge
                  key={area.label}
                  variant="secondary"
                  className="gap-2 px-4 py-2 text-sm"
                >
                  <area.icon className="h-4 w-4" />
                  {area.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <Card className="w-full border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background lg:max-w-md">
            <CardContent className="pt-6">
              <h4 className="mb-2 text-lg font-semibold">
                Have something to design and ship?
              </h4>
              <p className="mb-6 text-sm text-muted-foreground">
                Book a 15‑minute intro to map the fastest path to a working demo
                or MVP.
              </p>
              <Button asChild className="group w-full sm:w-auto">
                <a href="#contact">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

