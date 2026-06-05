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
    jobTitle: "Product Designer and Builder",
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
      "Business websites",
      "Ecommerce stores",
      "Shopify and Wix stores",
      "Workflow automation",
      "Internal tools",
      "MVP development",
      "Design systems",
      "No-code and low-code product development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professional-service`,
    name: "Yaniv Tsoref Design and Build Services",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: "hello@yantso.com",
    founder: {
      "@id": `${siteUrl}/#person`,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Business Website Design",
      "Landing Page Design",
      "Ecommerce Store Design and Development",
      "Shopify and Wix Store Setup",
      "Custom Next.js Storefronts",
      "Workflow Automation",
      "Internal Tool Design and Development",
      "Product Design",
      "MVP Build",
      "Design Systems",
    ],
    priceRange: "€€€",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What can you build for a small business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yaniv designs and builds landing pages, business websites, ecommerce stores, automations, dashboards, admin panels, and lightweight internal tools.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with Shopify and Wix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Ecommerce projects can use Shopify, Wix, or a custom Next.js storefront depending on the catalog, checkout needs, integrations, budget, and control required after launch.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A landing page or focused automation is usually 1-2 weeks, a business website is often 2-4 weeks, and ecommerce stores or internal tools are commonly 3-6 weeks depending on scope.",
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
