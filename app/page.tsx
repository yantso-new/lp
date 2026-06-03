import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { WorkMarquee } from "@/components/sections/work-marquee";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

const siteUrl = "https://www.yantso.com";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Yaniv Tsoref",
    url: siteUrl,
    jobTitle: "Fractional Product Designer & Builder",
    email: "hello@yantso.com",
    sameAs: [
      "https://www.linkedin.com/in/yanivtsoref/",
      "https://dribbble.com/yantso",
    ],
    knowsAbout: [
      "Product design",
      "UX design",
      "UI design",
      "Frontend development",
      "Design systems",
      "MVP development",
      "No-code and low-code product development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professional-service`,
    name: "Yaniv Tsoref",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: "hello@yantso.com",
    founder: {
      "@id": `${siteUrl}/#person`,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Fractional Product Designer",
      "UX/UI Design",
      "Frontend Development",
      "Rapid Prototyping",
      "Design Systems",
      "Product Strategy",
      "MVP Build",
    ],
    priceRange: "€€€",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is your typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple landing page can be delivered in 1-2 weeks, while a full product design and development project typically takes 4-12 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with an existing project or product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Yaniv can help with design improvements, feature development, performance optimization, or technical debt reduction on existing products.",
        },
      },
      {
        "@type": "Question",
        name: "Do you do websites as well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Yaniv designs and builds websites from landing pages to corporate marketing sites and data-rich ecommerce stores.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <section className="relative">
          <LogoMarquee />
          <WorkMarquee />
        </section>

        <About />

        <Services />

        {/* Work Section */}
        <Work />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
