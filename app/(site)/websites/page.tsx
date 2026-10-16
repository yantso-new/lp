import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  Globe2,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { OfferWork } from "@/components/sections/offer-work";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Websites and Ecommerce Stores",
  description:
    "Landing pages, business websites, Shopify and Wix stores, and custom Next.js storefronts for small businesses.",
  alternates: {
    canonical: "/websites",
  },
  openGraph: {
    title: "Websites and Ecommerce Stores",
    description:
      "Landing pages, business websites, Shopify and Wix stores, and custom Next.js storefronts for small businesses.",
    url: "/websites",
    type: "website",
  },
};

const capabilities = [
  {
    icon: FileText,
    title: "Landing pages",
    description:
      "Focused pages for campaigns, services, launches, and lead capture.",
  },
  {
    icon: Globe2,
    title: "Business websites",
    description:
      "Multi-page websites with clear services, credibility, contact paths, and SEO-ready structure.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce stores",
    description:
      "Shopify, Wix, and custom storefront work for catalog structure, product pages, and checkout paths.",
  },
  {
    icon: Search,
    title: "Store and site cleanup",
    description:
      "UX reviews, redesigns, conversion improvements, new sections, and stronger page hierarchy.",
  },
];

const packages = [
  {
    name: "Landing Page",
    price: "€1,500",
    duration: "1-2 weeks",
    items: [
      "Offer and page structure",
      "Responsive UX/UI design",
      "Conversion-focused sections",
      "Lead form or booking CTA",
      "Basic SEO metadata",
      "Launch QA",
    ],
  },
  {
    name: "Business Website",
    price: "€3,500",
    duration: "2-4 weeks",
    items: [
      "Homepage and core service pages",
      "Reusable page sections",
      "Mobile-first implementation",
      "Contact or booking flow",
      "SEO-ready structure",
      "Launch handoff",
    ],
  },
  {
    name: "Ecommerce Store",
    price: "€4,500",
    duration: "3-6 weeks",
    items: [
      "Store UX and structure",
      "Product and category templates",
      "Shopify or Wix setup/redesign",
      "Custom Next.js storefront option",
      "Checkout path review",
      "Launch QA and handoff",
    ],
  },
];

const faqs = [
  {
    question: "Do you work with Shopify and Wix?",
    answer:
      "Yes. Ecommerce projects can use Shopify, Wix, or a custom Next.js storefront depending on the catalog, checkout needs, integrations, budget, and control required after launch.",
  },
  {
    question: "When does a custom storefront make sense?",
    answer:
      "A custom storefront makes sense when a standard platform theme is too limiting, the buying flow needs custom UX, the site needs specific integrations, or performance and brand control matter more than speed alone.",
  },
  {
    question: "Can you improve an existing site or store?",
    answer:
      "Yes. I can redesign pages, clean up UX, improve product and category pages, add new sections, fix conversion weak spots, or rebuild the frontend while keeping the parts of the platform that still work.",
  },
];

export default function WebsitesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Websites and Ecommerce Stores",
    description: metadata.description,
    provider: {
      "@type": "Person",
      name: "Yaniv Tsoref",
      url: "https://www.yantso.com",
    },
    areaServed: "Worldwide",
    serviceType: "Website and ecommerce design and development",
    url: "https://www.yantso.com/websites",
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
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Websites and ecommerce
            </p>
            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Clear websites and online stores built for the way people buy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Landing pages, business websites, Shopify and Wix stores, and
              custom storefronts for small teams that need a better public face
              and a cleaner path to conversion.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                  Plan a website or store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/automations">See automations</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Start with the site. Then make the buying path easier.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The work can be a lean landing page, a service website, an
                ecommerce redesign, or a custom storefront. The goal is the same:
                make the offer easier to understand and the next step easier to take.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => (
                <Card key={item.title} className="bg-card">
                  <CardHeader>
                    <item.icon className="mb-3 h-9 w-9 stroke-1 text-muted-foreground" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <OfferWork
          title="Website and ecommerce work"
          description="Live examples across headless commerce, direct booking, ecommerce flows, and conversion-focused product surfaces."
          projectIds={["evervida", "ecodome", "wix", "parcela_ja"]}
        />

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Website and store packages
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Clear from-prices for common scopes. Custom storefronts and
                larger catalogs are scoped separately.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {packages.map((tier) => (
                <Card key={tier.name} className="flex flex-col bg-card">
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-semibold">{tier.price}</span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        from • {tier.duration}
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
                      <a href="#contact">Discuss this package</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[360px_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Common questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Platform choices, custom storefronts, and existing site work.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
