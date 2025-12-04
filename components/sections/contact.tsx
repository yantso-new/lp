'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15-min-intro" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let's work together
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Book a call to discuss your project. Choose a time that works for you.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="mx-auto max-w-4xl">
          <Cal
            namespace="15-min-intro"
            calLink="yaniv-tsoref/15-min-intro"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}

