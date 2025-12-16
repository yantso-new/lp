'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "website-booking" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 mx-auto max-w-3xl text-center">
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
            namespace="website-booking"
            calLink="yaniv-tsoref/website-booking"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}

