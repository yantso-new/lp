import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Palette,
  Code,
  Rocket,
  Smartphone,
  Zap,
  Layers,
  Search,
  BarChart3,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "User research, wireframing, and pixel-perfect designs that balance aesthetics with functionality.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, performant interfaces with React, Next.js, and modern web technologies.",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description:
      "From concept to clickable prototype in days. Fast iteration to validate ideas before full build.",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Native and responsive mobile experiences that feel intuitive and delightful on any device.",
  },
  {
    icon: Zap,
    title: "Design Systems",
    description:
      "Creating scalable design systems and component libraries for consistent, maintainable products.",
  },
  {
    icon: Layers,
    title: "No/Low-Code Solutions",
    description:
      "Leveraging platforms like Wix, Webflow, and AI tools to ship faster without compromising quality.",
  },
  {
    icon: Search,
    title: "User Research",
    description:
      "Understanding user needs through interviews, testing, and data analysis to inform design decisions.",
  },
  {
    icon: BarChart3,
    title: "Product Strategy",
    description:
      "Helping define product vision, roadmap, and features that align with business goals.",
  },
  {
    icon: Users,
    title: "Design Lead",
    description:
      "Leading design teams, establishing design processes, and driving design excellence across products and organizations.",
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
            End-to-end design and development services to bring your product
            vision to life. From research to launch, I help you ship faster.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-transparent bg-background/60 backdrop-blur-sm p-0 gap-0 transition-all hover:shadow-md"
            >
              <CardHeader className="pb-2 px-0">
                <div className="mb-3 flex items-center justify-start">
                  <service.icon className="h-10 w-10 stroke-1 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-0">
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
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

