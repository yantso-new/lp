import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. A simple landing page can be delivered in 1-2 weeks, while a full product design and development project typically takes 4-12 weeks. I prioritize rapid iteration and can often deliver an MVP or prototype within the first few weeks to validate ideas early.',
  },
  {
    question: 'Do you work with startups or only established companies?',
    answer:
      'I work with both startups and established companies. I have extensive experience helping early-stage startups validate their ideas through rapid prototyping, as well as working with larger organizations to improve existing products or build new features.',
  },
  {
    question: 'What is your design and development process?',
    answer:
      'My process is collaborative and iterative. It typically includes: discovery and research, wireframing and prototyping, visual design, development, and testing. I believe in shipping early and often, gathering feedback, and continuously improving based on real user data.',
  },
  {
    question: 'Can you help with an existing project or product?',
    answer:
      'Absolutely. I can jump into existing projects to help with design improvements, feature development, performance optimization, or technical debt reduction. I\'m experienced in working with various tech stacks and can adapt to your existing codebase and workflows.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer:
      'Yes, I offer flexible support and maintenance packages after project launch. This can include bug fixes, feature enhancements, performance monitoring, and design updates. We can discuss a support plan that fits your needs and budget.',
  },
  {
    question: 'What tools and technologies do you use?',
    answer:
      'I use modern tools and technologies including Figma for design, React and Next.js for development, and platforms like Webflow, Framer, and AI-powered tools for rapid prototyping. I also leverage no-code/low-code solutions when appropriate to ship faster without compromising quality.',
  },
  {
    question: 'Design vs. Development: Can I hire you for just one?',
    answer:
      'Absolutely. While my unique value lies in bridging the gap between design and code, I am happy to integrate with your existing setup. You can engage me solely for high-fidelity UI/UX design deliverables to hand off to your team, or hire me to build a pixel-perfect frontend from designs you already have.',
  },
  {
    question: 'How do we communicate? Do we need meetings?',
    answer:
      'I prioritize asynchronous communication (via email, Slack, or project boards) to maximize focus time and delivery speed. However, I offer a complimentary 15-minute discovery call to discuss your needs, and I am always available to sync if a complex issue requires a direct conversation.',
  },
  {
    question: 'How does the monthly subscription/retainer work?',
    answer:
      'The retainer is a recurring monthly subscription that guarantees my availability for your project. It is paid upfront at the start of each cycle. You can cancel the subscription at any time, effective for the following month. Because I reserve a dedicated block of time specifically for you, I cannot offer refunds once a billing cycle has started.',
  },
  {
    question: 'Do you do websites as well?',
    answer:
      'Yes. I design and build websites at any scale. Whether you need a single high-conversion landing page, a corporate marketing site, or a complex, data-rich e-commerce store, I use modern frameworks to ensure your site is fast, scalable, and manageable.',
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
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Everything you need to know about working together. Can't find the
            answer you're looking for? Feel free to book a call.
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
