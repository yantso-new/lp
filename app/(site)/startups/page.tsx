import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Code,
  Layers,
  Palette,
  Rocket,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { OfferWork } from "@/components/sections/offer-work";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Startup Product Design and MVP Builds",
  description:
    "Fractional product design, UX/UI, design systems, frontend development, and MVP build support for startups and product teams.",
  alternates: {
    canonical: "/startups",
  },
  openGraph: {
    title: "Startup Product Design and MVP Builds",
    description:
      "Fractional product design, UX/UI, design systems, frontend development, and MVP build support for startups and product teams.",
    url: "/startups",
    type: "website",
  },
};

const services = [
  {
    icon: Palette,
    title: "UX/UI design",
    description:
      "User flows, wireframes, interface design, and product screens that reduce ambiguity before build.",
  },
  {
    icon: Rocket,
    title: "MVP build",
    description:
      "A focused product scope, clickable flow, and responsive frontend implementation for a first launch.",
  },
  {
    icon: Layers,
    title: "Design systems",
    description:
      "Practical components, UI patterns, and usage rules that help teams ship more consistently.",
  },
  {
    icon: Code,
    title: "Frontend development",
    description:
      "React and Next.js implementation that keeps design quality, responsiveness, and states intact.",
  },
];

const pricing = [
  {
    name: "1:1 consultation",
    price: "€300",
    detail: "60 minutes",
    items: [
      "Product strategy and roadmap review",
      "Design critique and UX feedback",
      "Technical and platform guidance",
      "Actionable next steps",
    ],
  },
  {
    name: "Design lead as a service",
    price: "€3,000",
    detail: "per month",
    items: [
      "20 hours/month design leadership",
      "Feature design and design reviews",
      "Design system maintenance",
      "Async guidance and priority support",
    ],
  },
  {
    name: "MVP build",
    price: "€6,000",
    detail: "starting from",
    items: [
      "MVP scope definition",
      "UX flows and UI design",
      "Next.js frontend build",
      "Responsive QA and handoff",
    ],
  },
];

export default function StartupsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup Product Design and MVP Builds",
    description: metadata.description,
    provider: {
      "@type": "Person",
      name: "Yaniv Tsoref",
      url: "https://www.yantso.com",
    },
    areaServed: "Worldwide",
    serviceType: "Startup product design and MVP build",
    url: "https://www.yantso.com/startups",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                For startups
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Fractional product designer and MVP builder.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I help founders turn fuzzy ideas into polished MVPs, UX/UI
                systems, and live Next.js or no-code products that are ready for
                real users.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#contact">
                    Book a discovery call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Shape the product, then ship the usable version.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The work can start as strategy, design, or build support. The
                throughline is the same: clarify the product bet, design the
                critical flows, and produce something real enough to test.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} className="bg-card">
                  <CardHeader>
                    <service.icon className="mb-3 h-9 w-9 stroke-1 text-muted-foreground" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <OfferWork
          title="Relevant startup and product work"
          description="Examples from product design, MVPs, ecommerce systems, payments, and AI-assisted workflows where design decisions were tied directly to product delivery."
          projectIds={["wix", "parcela_ja", "Hyperad", "mobile_odt"]}
        />

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Startup packages
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Start with a focused session, ongoing design leadership, or a
                scoped MVP build.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((tier) => (
                <Card key={tier.name} className="flex flex-col bg-card">
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-semibold">{tier.price}</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {tier.detail}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="mb-8 space-y-3">
                      {tier.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-auto w-full">
                      <a href="#contact">Discuss this option</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
