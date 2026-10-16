import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe2,
  MapPin,
  Search,
  ShoppingBag,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { OfferWork } from "@/components/sections/offer-work";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const siteUrl = "https://www.yantso.com";

export const metadata: Metadata = {
  title: "Web Designer Near Lagos, Portugal",
  description:
    "Web designer near Lagos, Portugal for local businesses that need clear websites, landing pages, ecommerce stores, and booking-ready service pages.",
  alternates: {
    canonical: "/web-design-lagos",
  },
  openGraph: {
    title: "Web Designer Near Lagos, Portugal",
    description:
      "Web designer near Lagos, Portugal for local businesses that need clear websites, landing pages, ecommerce stores, and booking-ready service pages.",
    url: "/web-design-lagos",
    type: "website",
  },
};

const capabilities = [
  {
    icon: MapPin,
    title: "Local service websites",
    description:
      "Clear pages for restaurants, clinics, studios, shops, trades, and service businesses in Lagos.",
  },
  {
    icon: Search,
    title: "Local search structure",
    description:
      "Page hierarchy, metadata, service copy, and structured data that help customers understand where you work.",
  },
  {
    icon: ShoppingBag,
    title: "Stores and bookings",
    description:
      "Shopify, Wix, booking flows, enquiry forms, and product or service pages built around the next step.",
  },
  {
    icon: Globe2,
    title: "Bilingual-ready builds",
    description:
      "Responsive websites that can grow from a focused English site into Portuguese or multilingual content.",
  },
];

const packages = [
  {
    name: "Local Landing Page",
    price: "€1,500",
    duration: "1-2 weeks",
    items: [
      "Offer and local audience structure",
      "Responsive page design",
      "Lead form or booking CTA",
      "Basic local SEO metadata",
      "Launch QA",
    ],
  },
  {
    name: "Business Website",
    price: "€3,500",
    duration: "2-4 weeks",
    items: [
      "Homepage and core service pages",
      "Reusable sections",
      "Contact or booking flow",
      "SEO-ready structure",
      "Launch handoff",
    ],
  },
  {
    name: "Store or Booking Site",
    price: "€4,500",
    duration: "3-6 weeks",
    items: [
      "Store or booking UX",
      "Product or service templates",
      "Shopify, Wix, or custom frontend",
      "Conversion path review",
      "Launch support",
    ],
  },
];

const faqs = [
  {
    question: "Do you only work with businesses in Lagos?",
    answer:
      "No. I am based in Portugal and work remotely, but this page is for Lagos businesses that want a local partner for website, ecommerce, or booking-flow work.",
  },
  {
    question: "Are you a web designer near Lagos, Portugal?",
    answer:
      "Yes. I work with businesses in and around Lagos, Portugal on website design, landing pages, ecommerce sites, booking flows, and local service pages.",
  },
  {
    question: "Can you redesign an existing local business website?",
    answer:
      "Yes. The work can be a focused cleanup, a new landing page, a full rebuild, or ecommerce and booking improvements on top of an existing platform.",
  },
  {
    question: "Can the site support Portuguese and English?",
    answer:
      "Yes. A project can start in one language and be structured so Portuguese, English, or additional languages can be added cleanly later.",
  },
];

export default function WebDesignLagosPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Designer Near Lagos, Portugal",
      description: metadata.description,
      provider: {
        "@id": `${siteUrl}/#local-business`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Lagos",
          containedInPlace: {
            "@type": "Country",
            name: "Portugal",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Algarve",
        },
      ],
      serviceType: [
        "Web design",
        "Website redesign",
        "Landing page design",
        "Ecommerce website design",
        "Booking website design",
        "Local business website design",
      ],
      url: `${siteUrl}/web-design-lagos`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Web designer near Lagos, Portugal
            </p>
            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              A web designer near Lagos for local businesses that need more enquiries.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I design and build websites, landing pages, stores, and booking
              flows for local businesses in Lagos and the Algarve that need to
              look credible, explain their offer clearly, and make the next step
              obvious.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">
                  Plan a local website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/websites">See website packages</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Built for how people choose a local business in Lagos.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A strong local website should make your service, location,
                credibility, reviews, photos, and contact path easy to understand
                before someone calls, books, asks for directions, or compares you
                with another business nearby.
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
          title="Relevant website and ecommerce work"
          description="Examples across public websites, ecommerce flows, booking paths, and conversion-focused product surfaces."
          projectIds={["evervida", "ecodome", "wix", "parcela_ja"]}
        />

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Local website packages
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Start with a focused local landing page, a full business
                website, or a store and booking flow for customers ready to act.
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
                        <li
                          key={item}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
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
                Local scope, redesigns, and multilingual website structure.
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
