import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
// import { LogoMarquee } from "@/components/sections/logo-marquee";
import { WorkMarquee } from "@/components/sections/work-marquee";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Marquee Section */}
        <section className="relative">
          {/* <LogoMarquee /> */}
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
