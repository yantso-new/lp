import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight, MessageSquare, Rocket, Sparkles, Circle } from "lucide-react";

const pricingTiers = [
  {
    name: "1:1 Consultation",
    price: "€300",
    priceType: "per session",
    description: "Expert guidance on design, strategy, and product decisions",
    duration: "60 minutes",
    icon: MessageSquare,
    features: [
      "Product strategy & roadmap review",
      "Design critique & feedback",
      "UX/UI best practices",
      "Technical architecture guidance",
      "No/low-code platform recommendations",
      "Actionable next steps",
      "8-session pack: €2000 (prepaid)",
    ],
    cta: "Book a session",
    popular: false,
  },
  {
    name: "Design Lead as a Service",
    price: "€3000",
    priceType: "per month",
    description: "Ongoing design leadership for your product team",
    duration: "Monthly retainer",
    icon: Sparkles,
    features: [
      "20 hours/month design leadership",
      "Max 2 clients per month",
      "Design system maintenance",
      "Feature design & reviews",
      "Team design guidance",
      "Design process optimization",
      "Priority support",
      "Flexible cancellation",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "MVP Build",
    price: "€6000",
    priceType: "starting from",
    description: "Design-led MVP from concept to launch",
    duration: "3-5 weeks",
    icon: Rocket,
    features: [
      "UX research & user flows",
      "Complete UI design",
      "Design system & components",
      "Frontend development (Next.js)",
      "Responsive implementation",
      "2 rounds of revisions",
      "Design handoff & documentation",
    ],
    cta: "Start your MVP",
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
            Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Flexible options for every stage of your product journey. From quick
            consultations to full MVP builds and ongoing design leadership.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {pricingTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card
                key={tier.name}
                className={`group relative flex flex-col bg-background/60 backdrop-blur-sm transition-all hover:border-border hover:shadow-lg ${tier.popular
                  ? "border-primary/20 shadow-md lg:scale-105"
                  : "border-border/50"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="outline" className="px-3 py-1 bg-white text-black flex items-center gap-1.5">
                      <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                      2 spots available
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
                    <a href="#contact">
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
                  Have a complex product, enterprise needs, or something unique?
                  <br />
                  Let's discuss a tailored solution that fits your specific
                  requirements and timeline.
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

