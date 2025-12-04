import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$5K",
    priceRange: "$5K - $8K",
    description: "Perfect for early-stage startups and MVPs",
    timeline: "2-3 weeks",
    features: [
      "UX research & user interviews",
      "Wireframes & user flows",
      "Design system foundation",
      "Clickable prototype",
      "2 rounds of revisions",
      "Design handoff",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12K",
    priceRange: "$12K - $18K",
    description: "Complete design and development package",
    timeline: "4-6 weeks",
    features: [
      "Everything in Starter",
      "Full UI design (all screens)",
      "Frontend development (Next.js)",
      "Responsive implementation",
      "Design system documentation",
      "3 rounds of revisions",
      "Post-launch support (2 weeks)",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Custom",
    price: "Custom",
    priceRange: "Let's discuss",
    description: "Tailored solutions for complex products",
    timeline: "Flexible",
    features: [
      "Tailored scope & timeline",
      "Ongoing retainer options",
      "Dedicated support",
      "Team collaboration",
      "Custom integrations",
      "Enterprise features",
      "Priority support",
    ],
    cta: "Get a quote",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pricing
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Transparent pricing for projects of all sizes. Custom quotes available
            for complex requirements.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`group relative flex flex-col border-transparent bg-background/60 backdrop-blur-sm transition-all hover:border-border hover:shadow-lg ${
                tier.popular
                  ? "border-primary/20 shadow-md lg:scale-105"
                  : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-sm text-muted-foreground">
                        starting
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {tier.priceRange} • {tier.timeline}
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
                  <a href="#contact">
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All projects include a 15-minute discovery call. Need something
            different?{" "}
            <a
              href="#contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Let's discuss
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

