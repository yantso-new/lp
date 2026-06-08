import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Workflow, PanelsTopLeft, Rocket } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Rocket,
    title: "For startups",
    description:
      "Product design, MVP scope, UX/UI, frontend implementation, and design leadership for early teams.",
    href: "/startups",
  },
  {
    icon: PanelsTopLeft,
    title: "Websites and ecommerce",
    description:
      "Landing pages, business websites, Shopify/Wix stores, and custom storefronts that make the offer clearer.",
    href: "/websites",
  },
  {
    icon: Workflow,
    title: "Automations and internal tools",
    description:
      "Lead routing, CRM updates, dashboards, admin panels, portals, and workflow cleanup for daily operations.",
    href: "/automations",
  },
];

// const tools = [
//   { name: "Loveable", src: "/logos/loveable.svg" },
//   { name: "v0", src: "/logos/v0.svg" },
//   { name: "Cursor", src: "/logos/cursor.svg" },
//   { name: "Supabase", src: "/logos/supabase.svg" },
//   { name: "Nordcraft", src: "/logos/nordcraft.svg" },
//   { name: "Webflow", src: "/logos/webflow.svg" },
//   { name: "Framer", src: "/logos/framer.svg" },
//   { name: "Figma", src: "/logos/figma.svg" },
//   { name: "n8n", src: "/logos/n8n.svg" },
//   { name: "Make", src: "/logos/make.svg" },
//   { name: "Xano", src: "/logos/xano.svg" },
//   { name: "Next.js", src: "/logos/nextjs.svg" },
// ];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Choose the path that matches the problem in front of you: a product
            to shape, a public site or store to improve, or an internal workflow
            that needs to become easier to run.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {services.map((service) => {
            const card = (
              <Card
                className="group flex h-full border border-transparent bg-card p-8 gap-0 transition-all hover:border-border hover:bg-card/90 hover:shadow-md"
              >
                <CardHeader className="pb-2 px-0">
                  <div className="mb-3 flex items-center justify-start">
                    <service.icon className="h-10 w-10 stroke-1 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col pt-0 px-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-border/70 px-3 py-2 text-sm font-medium text-foreground transition-colors group-hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            );

            return service.href ? (
              <Link key={service.title} href={service.href} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={service.title}>{card}</div>
            );
          })}
        </div>

        {/* Tools Section - Hidden */}
        {/* <div className="mt-24 sm:mt-32">
          <div className="mb-12 max-w-3xl">
            <h3 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Tools & Technologies
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              The modern stack I use to build, design, and ship products faster.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center justify-center rounded-lg border border-transparent bg-background/40 p-4 transition-all hover:border-border hover:bg-background/60 hover:shadow-sm"
                title={tool.name}
              >
                <div className="relative h-9 w-full">
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    fill
                    className="object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 invert dark:invert-0"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
