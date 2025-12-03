import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* Services Section */}
        <section
          id="services"
          className="flex min-h-screen items-center justify-center border-t px-4"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Your services section content goes here.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <Work />

        {/* Pricing Section */}
        <section
          id="pricing"
          className="flex min-h-screen items-center justify-center border-t px-4"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Your pricing section content goes here.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex min-h-screen items-center justify-center border-t bg-muted/30 px-4"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact
            </h2>
            <p className="text-lg text-muted-foreground">
              Your contact section content goes here.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
