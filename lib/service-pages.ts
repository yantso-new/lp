export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  audience: string;
  promise: string;
  intro: string;
  outcomes: string[];
  process: string[];
  deliverables: string[];
  proof: string;
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "fractional-product-designer",
    title: "Fractional Product Designer for Product Teams",
    shortTitle: "Fractional Product Designer",
    metaTitle: "Fractional Product Designer for Startups & Product Teams",
    metaDescription:
      "Fractional product design support for startups and product teams that need senior UX, UI, strategy, and design systems without a full-time hire.",
    audience: "Founders, product leads, and teams that need senior design judgment without adding a full-time role.",
    promise:
      "Turn unclear product priorities into focused design direction, shippable flows, and a cleaner product experience.",
    intro:
      "A fractional product designer is useful when the team has momentum but needs sharper decisions, clearer UX, and someone who can bridge strategy, interface design, and implementation details.",
    outcomes: [
      "Clear product direction for upcoming features and releases",
      "UX/UI decisions that reduce ambiguity for engineering",
      "Design systems and patterns that make the product easier to scale",
      "A steady senior design partner for reviews, planning, and execution",
    ],
    process: [
      "Audit the current product experience and roadmap",
      "Identify the highest-leverage UX and interface improvements",
      "Design flows, screens, and component patterns with implementation in mind",
      "Review shipped work and tighten the product over each cycle",
    ],
    deliverables: [
      "Product UX audit",
      "Feature flows and wireframes",
      "High-fidelity UI design",
      "Design system improvements",
      "Async design reviews",
    ],
    proof:
      "Relevant experience includes product design leadership across Wix, fintech, healthtech, ecommerce, and AI-assisted product workflows.",
    related: ["ux-ui-design", "design-systems", "mvp-build"],
  },
  {
    slug: "mvp-build",
    title: "MVP Build for Startups",
    shortTitle: "MVP Build",
    metaTitle: "MVP Build for Startups | Design-Led Product Launch",
    metaDescription:
      "Design-led MVP build service for startups that need to move from idea to usable product with UX, UI, frontend implementation, and launch support.",
    audience: "Early-stage founders and small teams validating a product idea or launching a focused first version.",
    promise:
      "Move from fuzzy idea to a usable, polished MVP with a narrow scope and a fast feedback loop.",
    intro:
      "An MVP should be small enough to ship and strong enough to test the core product bet. The work combines product framing, UX flows, interface design, and frontend implementation.",
    outcomes: [
      "A focused MVP scope that avoids unnecessary feature sprawl",
      "A clickable product flow before implementation begins",
      "Responsive frontend implementation for the core experience",
      "A launch-ready foundation that can evolve after validation",
    ],
    process: [
      "Define the target user, core use case, and launch scope",
      "Map the critical product flows and screen states",
      "Design a compact UI system for the MVP",
      "Build, test, and refine the frontend experience",
    ],
    deliverables: [
      "MVP scope definition",
      "Core user flows",
      "UI design system",
      "Next.js frontend build",
      "Responsive QA pass",
    ],
    proof:
      "The current portfolio includes fintech, ecommerce, healthtech, and AI product work where design decisions were tied directly to product delivery.",
    related: ["frontend-development", "ux-ui-design", "fractional-product-designer"],
  },
  {
    slug: "ux-ui-design",
    title: "UX/UI Design for SaaS and Digital Products",
    shortTitle: "UX/UI Design",
    metaTitle: "UX/UI Design for SaaS, Apps & Digital Products",
    metaDescription:
      "UX/UI design for SaaS, mobile apps, dashboards, and digital products, from research and flows to polished interface design.",
    audience: "Teams building or improving SaaS products, internal tools, mobile apps, dashboards, and customer-facing workflows.",
    promise:
      "Make the product easier to understand, easier to use, and more credible at the moments that matter.",
    intro:
      "Good UX/UI design connects product intent with user behavior. The goal is not just better screens, but clearer flows, sharper hierarchy, and a product that feels ready for real use.",
    outcomes: [
      "Cleaner journeys for onboarding, activation, and conversion",
      "Interfaces that make complex actions easier to complete",
      "Reusable UI patterns for faster future design work",
      "Design decisions documented clearly enough for implementation",
    ],
    process: [
      "Review users, goals, constraints, and existing product data",
      "Map the key flows and identify friction points",
      "Design wireframes, interaction states, and high-fidelity screens",
      "Prepare implementation-ready components and specs",
    ],
    deliverables: [
      "UX audit",
      "User flows",
      "Wireframes",
      "High-fidelity screens",
      "Responsive UI states",
    ],
    proof:
      "Portfolio work spans payments, ecommerce, healthtech, mobile apps, design systems, dashboards, and consumer product experiences.",
    related: ["design-systems", "frontend-development", "mvp-build"],
  },
  {
    slug: "frontend-development",
    title: "Frontend Development for Design-Led Products",
    shortTitle: "Frontend Development",
    metaTitle: "Frontend Development for Design-Led Products",
    metaDescription:
      "Frontend development for design-led products using React and Next.js, focused on responsive interfaces, component quality, and product polish.",
    audience: "Founders, designers, and product teams that need high-quality implementation of product interfaces.",
    promise:
      "Translate product design into responsive, maintainable frontend code without losing the quality of the intended experience.",
    intro:
      "Frontend development for product work needs more than translating screens into markup. It requires attention to states, responsiveness, accessibility, performance, and how the interface will evolve.",
    outcomes: [
      "Responsive product screens that preserve design quality",
      "Reusable components aligned with the product system",
      "Cleaner collaboration between design and engineering",
      "Frontend implementation ready for iteration and launch",
    ],
    process: [
      "Review designs, user flows, and technical constraints",
      "Define components, states, and responsive behavior",
      "Implement the core interface in React and Next.js",
      "Run build, QA, and polish passes before handoff or launch",
    ],
    deliverables: [
      "React/Next.js implementation",
      "Responsive layouts",
      "Component patterns",
      "Interaction states",
      "Build and QA pass",
    ],
    proof:
      "This site itself is built with Next.js, React, TypeScript, and Tailwind, matching the stack used for many modern product frontends.",
    related: ["mvp-build", "ux-ui-design", "design-systems"],
  },
  {
    slug: "design-systems",
    title: "Design Systems for Product Teams",
    shortTitle: "Design Systems",
    metaTitle: "Design Systems for SaaS and Product Teams",
    metaDescription:
      "Design system support for SaaS and product teams that need scalable components, clearer UI patterns, and more consistent product delivery.",
    audience: "Teams with growing products, inconsistent UI patterns, or repeated design and frontend decisions slowing delivery.",
    promise:
      "Create practical design system foundations that improve consistency without becoming heavy process.",
    intro:
      "A useful design system helps teams make better interface decisions faster. The work focuses on the components, patterns, and guidelines that directly support product delivery.",
    outcomes: [
      "More consistent UI across product surfaces",
      "Faster feature design and implementation",
      "Clearer component usage and interaction states",
      "A foundation that supports future product growth",
    ],
    process: [
      "Audit current components, patterns, and inconsistencies",
      "Prioritize the highest-use interface elements",
      "Define reusable components, variants, and states",
      "Document usage patterns for design and engineering",
    ],
    deliverables: [
      "Component audit",
      "Core component set",
      "UI pattern guidance",
      "Design tokens and usage notes",
      "Implementation recommendations",
    ],
    proof:
      "Relevant work includes design systems and product interfaces for SaaS, ecommerce, fintech, and design-led product teams.",
    related: ["ux-ui-design", "frontend-development", "fractional-product-designer"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
