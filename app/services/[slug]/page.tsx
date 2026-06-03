import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServicePage, servicePages } from "@/lib/service-pages";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.related
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((relatedService) => relatedService !== undefined);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.metaDescription,
    provider: {
      "@type": "Person",
      name: "Yaniv Tsoref",
      url: "https://www.yantso.com",
    },
    areaServed: "Worldwide",
    serviceType: service.shortTitle,
    url: `https://www.yantso.com/services/${service.slug}`,
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Link
          href="/services"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Services
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {service.shortTitle}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {service.promise}
            </p>
          </div>

          <aside className="rounded-lg border border-border/60 p-6">
            <p className="text-sm font-medium text-muted-foreground">
              Best fit for
            </p>
            <p className="mt-3 text-base leading-relaxed">{service.audience}</p>
            <Button asChild className="mt-6 w-full">
              <Link href="/#contact">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </aside>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-semibold tracking-tight">
                When this helps
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {service.intro}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight">
                Outcomes
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-lg border border-border/60 p-5"
                  >
                    <Check className="mb-4 h-5 w-5 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight">
                Process
              </h2>
              <ol className="mt-6 space-y-4">
                {service.process.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 border-b border-border/60 pb-4"
                  >
                    <span className="text-sm font-medium text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight">
                Relevant experience
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {service.proof}
              </p>
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="text-xl font-semibold">Deliverables</h2>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold">Related services</h2>
              <div className="mt-4 space-y-3">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/services/${relatedService.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-border/60 px-4 py-3 text-sm transition-colors hover:border-foreground/30"
                  >
                    {relatedService.shortTitle}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
