export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Design judgment with build momentum
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Product designer based in Portugal who works across UX, UI, websites,
            ecommerce, automations, and internal tools. The focus is clear scope,
            practical delivery, and digital experiences that are ready for real use.
          </p>
        </div>

        {/* Text content in columns */}
        <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3 lg:gap-12">
          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Design first
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Research, UX/UI, and interface systems tailored to the problem,
              audience, and business goal.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Build with leverage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Next.js, Shopify, Wix, no-code tools, and light custom code are
              selected by fit, speed, maintainability, and budget.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Rapid delivery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Go from brief to clickable prototype, launch page, store, or tool
              in focused phases instead of dragging scope for months.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Partner mindset
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Clear scope, tight feedback loops, visible progress, and a setup
              your team can understand after launch.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Prototype, validate, ship
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Quick tests, real signals, and clean handoff, or full build via a
              practical mix of design, code, and platform tooling.
            </p>
          </div>

          <div className="break-inside-avoid pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Focus areas
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Startups, websites, ecommerce, internal tools, wellness tech,
              payments, CRM, and AI-assisted workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
