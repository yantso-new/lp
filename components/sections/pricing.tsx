import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  ArrowRight,
  Rocket,
  Globe2,
  Workflow,
  Circle,
} from "lucide-react";

const pricingTiers = [
  {
    name: "Startup design and MVPs",
    price: "€300",
    priceType: "from",
    description: "Product design support from strategy call to MVP build",
    duration: "sessions, retainers, or builds",
    icon: Rocket,
    features: [
      "UX/UI design and product strategy",
      "MVP scope and prototype planning",
      "Frontend implementation with Next.js",
      "Design systems and product cleanup",
      "Fractional design leadership",
      "Focused startup service packages",
    ],
    cta: "Explore startup offer",
    href: "/startups",
    popular: false,
  },
  {
    name: "Websites and ecommerce",
    price: "€3,500",
    priceType: "from",
    description: "Landing pages, business websites, Shopify/Wix, and storefronts",
    duration: "1-6 weeks by scope",
    icon: Globe2,
    features: [
      "Landing page and website builds",
      "Shopify and Wix setup or redesign",
      "Custom Next.js storefront option",
      "Product and service page structure",
      "Conversion-focused UX",
      "SEO-ready launch foundations",
    ],
    cta: "Explore website offer",
    href: "/websites",
    popular: true,
  },
  {
    name: "Automations and tools",
    price: "€1,200",
    priceType: "from",
    description: "Workflow automations, dashboards, admin panels, and portals",
    duration: "1-5 weeks by scope",
    icon: Workflow,
    features: [
      "Lead routing and CRM updates",
      "Forms, notifications, and reporting",
      "Internal dashboards and admin tools",
      "Lightweight portals and staff tools",
      "Workflow mapping and QA",
      "Team documentation",
    ],
    cta: "Explore automation offer",
    href: "/automations",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pick the offer that matches the job
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Each path has its own landing page with packages, examples, and
            starting points. Start broad here, then choose the page that fits.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {pricingTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card
                key={tier.name}
                className={`group relative flex flex-col bg-card backdrop-blur-sm transition-all hover:border-border hover:shadow-lg ${tier.popular
                  ? "border-primary/20 shadow-md lg:scale-105"
                  : "border-border/50"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="outline" className="px-3 py-1 bg-white text-black flex items-center gap-1.5">
                      <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                      Common starting point
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center justify-start">
                    <Icon className="h-10 w-10 text-primary stroke-[1px]" />
                  </div>
                  <div className="min-h-[100px]">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="mt-2 text-sm">
                      {tier.description}
                    </CardDescription>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold tracking-tight">
                        {tier.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {tier.priceType} • {tier.duration}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col pt-0">
                  <ul className="mb-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full group/btn"
                  >
                    <a href={tier.href}>
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Custom Project Card */}
        <Card className="border-primary/20 bg-background">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">Custom Project</h3>
	                <p className="text-sm text-muted-foreground">
	                  Need a mixed product, website, ecommerce, automation, or tooling scope?
	                  <br />
	                  We&apos;ll shape a practical plan around the business outcome,
	                  platform, timeline, and budget.
	                </p>
              </div>
              <Button asChild variant="outline" className="group/btn shrink-0">
                <a href="#contact">
                  Get a quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
