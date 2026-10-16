import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Check,
  ClipboardList,
  MonitorCog,
  TableProperties,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Contact } from "@/components/sections/contact";
import { OfferWork } from "@/components/sections/offer-work";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Automations and Internal Tools",
  description:
    "Workflow automations, CRM and spreadsheet updates, reporting, dashboards, admin panels, and lightweight internal tools for small teams.",
  alternates: {
    canonical: "/automations",
  },
  openGraph: {
    title: "Automations and Internal Tools",
    description:
      "Workflow automations, CRM and spreadsheet updates, reporting, dashboards, admin panels, and lightweight internal tools for small teams.",
    url: "/automations",
    type: "website",
  },
};

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "Lead routing, form handling, CRM updates, spreadsheet syncs, and handoffs between tools.",
  },
  {
    icon: Bell,
    title: "Notifications and reporting",
    description:
      "Status alerts, reminders, recurring reports, and simple outputs for operational questions.",
  },
  {
    icon: MonitorCog,
    title: "Internal tools",
    description:
      "Dashboards, admin panels, staff tools, lightweight portals, and focused workflow screens.",
  },
  {
    icon: ClipboardList,
    title: "Process cleanup",
    description:
      "Map the messy manual process, decide what should be automated, and document what changes.",
  },
];

const packages = [
  {
    name: "Automation Setup",
    price: "€1,200",
    duration: "1-2 weeks",
    items: [
      "Workflow mapping",
      "Forms and lead routing",
      "CRM or spreadsheet updates",
      "Notifications and reminders",
      "Basic reporting output",
      "Team documentation",
    ],
  },
  {
    name: "Internal Tool Build",
    price: "€3,000",
    duration: "2-5 weeks",
    items: [
      "Tool scope and user flows",
      "Dashboard or admin UI",
      "Forms and data views",
      "Role-aware workflows where needed",
      "Responsive implementation",
      "QA and usage notes",
    ],
  },
  {
    name: "Operations System",
    price: "custom",
    duration: "by scope",
    items: [
      "Automation plus internal tool scope",
      "Multiple workflow touchpoints",
      "Data source and integration planning",
      "Reporting and review flows",
      "Launch support",
      "Ongoing improvement options",
    ],
  },
];

const faqs = [
  {
    question: "What counts as an automation project?",
    answer:
      "Typical automation work includes lead routing, contact form handling, CRM updates, spreadsheet syncs, customer notifications, status alerts, reporting, and handoffs between the tools your team already uses.",
  },
  {
    question: "What kind of internal tools can you build?",
    answer:
      "Internal tools can include dashboards, admin panels, lightweight client portals, intake forms, data review screens, and workflow tools for staff. The goal is usually to replace fragile spreadsheets, long email threads, or repeated manual updates.",
  },
  {
    question: "Do we need to replace our existing tools?",
    answer:
      "Usually no. The first step is to connect or improve the tools you already use. A custom tool only makes sense when the current process cannot be made reliable with simpler connections.",
  },
];

export default function AutomationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automations and Internal Tools",
    description: metadata.description,
    provider: {
      "@type": "Person",
      name: "Yaniv Tsoref",
      url: "https://www.yantso.com",
    },
    areaServed: "Worldwide",
    serviceType: "Workflow automation and internal tool development",
    url: "https://www.yantso.com/automations",
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
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Automations and internal tools
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Turn repeated manual work into clear workflows and useful tools.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Lead routing, CRM updates, reporting, dashboards, admin panels,
                portals, and workflow tools for teams that need operations to
                run with fewer fragile handoffs.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#contact">
                    Plan an automation or tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/websites">See websites</Link>
                </Button>
              </div>
            </div>
            <aside className="rounded-lg border border-border/60 bg-card p-6">
              <TableProperties className="mb-5 h-10 w-10 stroke-1 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Best fit</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Teams using spreadsheets, email, disconnected forms, and manual
                follow-up to run work that should be tracked, routed, or reviewed
                more reliably.
              </p>
            </aside>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Connect the work behind the website or store.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A better site or store is only part of the system. Automations
                and internal tools help the team handle leads, orders, reporting,
                status updates, and repeated admin work after the customer acts.
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
          title="Automation and operations work"
          description="Relevant examples across AI-assisted workflows, CRM and ecommerce operations, healthtech tools, dashboards, and payment workflows."
          projectIds={["Hyperad", "wix", "mobile_odt", "parcela_ja"]}
        />

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Automation and tool packages
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Start with one workflow, one tool, or a broader operations scope
                when the pieces need to work together.
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
                        {tier.price === "custom" ? tier.duration : `from • ${tier.duration}`}
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
                What can be automated, when to build a tool, and how to keep the
                scope practical.
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
