import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WixCaseStudyComingSoon() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/work"
          className="mb-12 inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to work
        </Link>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Case study coming soon
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Wix Stores promotional ecosystem and coupon dashboard.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              The detailed write-up is being prepared. This project covers
              ecommerce promotions, merchant workflows, coupon management, and
              large-scale product design for Wix Stores.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/work">
                  View all work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contact">Discuss similar work</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logos/64c3ea08a194830383e36ce9_Wix.png"
                alt="Wix"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/assets/work_cards_imgs/wix_payments.png"
                alt="Wix ecommerce and payments interface preview"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
