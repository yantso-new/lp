import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What kinds of projects are the best fit?',
    answer:
      'The strongest fit is design-led digital work: startup product design, MVPs, landing pages, business websites, ecommerce stores, automations, dashboards, admin panels, and lightweight internal tools.',
  },
  {
    question: 'Which offer should I choose?',
    answer:
      'Choose the startup offer if you are shaping a product or MVP, the websites offer if you need a public site or store, and the automations offer if your team is losing time to repeated manual work.',
  },
  {
    question: 'Can you handle both design and implementation?',
    answer:
      'Yes. I can work from strategy through UX/UI and implementation, or join for a narrower part of the process. The best fit is usually when design and build decisions can stay close together.',
  },
  {
    question: 'What platforms and technologies do you use?',
    answer:
      'I use modern design and build tools including Figma, React, Next.js, Tailwind, Shopify, Wix, no-code tools, automation platforms, and AI-assisted development workflows when they help the project move faster.',
  },
  {
    question: 'Can you improve an existing product, site, or workflow?',
    answer:
      'Yes. I can redesign pages, clean up UX, improve store flows, build new sections, connect missing workflows, or add internal tools without replacing everything that already works.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A landing page or focused automation is usually 1-2 weeks. A business website is often 2-4 weeks. Ecommerce stores and internal tools are commonly 3-6 weeks depending on catalog size, integrations, content readiness, and custom logic.',
  },
  {
    question: 'Can you improve an existing site or store?',
    answer:
      'Yes. I can redesign pages, clean up UX, improve product/category pages, add new sections, fix conversion weak spots, connect missing workflows, or rebuild the frontend while keeping the parts of the platform that still work.',
  },
  {
    question: 'Do you provide design only or development only?',
    answer:
      'Yes. I can handle strategy and UX/UI only, implementation only from existing designs, or the full design-and-build process. The strongest fit is usually when design and build decisions can be made together.',
  },
  {
    question: 'What do I need before we start?',
    answer:
      'A clear business goal, examples of sites or tools you like, access to existing platforms if there are any, and rough content or product information are enough to start. If the content is incomplete, the first phase can include structure and copy guidance.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. Support can include bug fixes, small improvements, analytics review, conversion tweaks, new pages, automation changes, and platform updates. For larger ongoing needs, we can define a monthly support scope.',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Practical answers about choosing the right offer, working together,
            timelines, platforms, and what it takes to get started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" defaultValue="faq-1">
          {faqs.map((faq, index) => (
            <AccordionItem key={`faq-${index + 1}`} value={`faq-${index + 1}`}>
              <AccordionTrigger value={`faq-${index + 1}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={`faq-${index + 1}`}>
                <p className="text-sm leading-relaxed sm:text-base">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
