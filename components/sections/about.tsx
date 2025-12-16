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
            About me
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Product designer based in Portugal who ships end‑to‑end using
            no/low‑code platforms and AI‑assisted tooling. The focus is fast
            iteration from idea to usable product, combining UX rigor with
            pragmatic build workflows.
          </p>
        </div>

        {/* Text content in columns */}
        <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3 lg:gap-12">
          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Design first
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Research, UX/UI, and design systems tailored to your product goals.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Build with leverage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Assemble using Next.js or no/low‑code where it fits, with AI tools
              like Cursor to accelerate implementation.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Rapid delivery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Go from brief to clickable prototype or live MVP in days, not weeks.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Partner mindset
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With founders and product teams; clear scope, tight feedback loops,
              and visible progress.
            </p>
          </div>

          <div className="break-inside-avoid border-b border-border pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Prototype → validate → ship
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Quick tests, real signals, and clean handoff—or full build via
              no/low‑code + light code glue.
            </p>
          </div>

          <div className="break-inside-avoid pb-8">
            <h3 className="mb-3 text-lg font-semibold tracking-tight">
              Focus areas
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              SaaS & internal tools, wellness & yoga tech, and AI‑assisted
              workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

