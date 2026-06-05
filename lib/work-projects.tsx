import type { WorkProject } from "@/components/work/work-card";
import Image from "next/image";

export const workProjects: WorkProject[] = [
  {
    id: "wix",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/64c3ea08a194830383e36ce9_Wix.png"
          alt="Wix"
          width={80}
          height={32}
          className="h-8 w-auto"
        />
      </div>
    ),
    title: "Payments, CRM, coupons, and ecommerce flows used at large scale",
    tags: ["Ecommerce", "Payments", "CRM", "UX", "Design Systems"],
    image: "/assets/work_cards_imgs/wix_payments.png",
    variant: "light",
    highlight: "Over 282 million registered users worldwide",
    href: "/case-studies/wix-coupons",
    ctaLabel: "Coming soon",
  },
  {
    id: "evervida",
    logo: (
      <Image
        src="/logos/evervida.svg"
        alt="Evervida"
        width={128}
        height={28}
        className="h-[28px] w-auto brightness-0 invert"
      />
    ),
    title: "A headless Shopify store for sustainable furniture and mindful homes",
    tags: ["Headless Shopify", "Ecommerce", "Next.js", "Storefront", "UX"],
    image: "/assets/work_cards_imgs/evervida-hero.png",
    variant: "dark",
    highlight: "Live headless commerce store",
    href: "https://www.evervida.eu/",
    ctaLabel: "Visit site",
    external: true,
  },
  {
    id: "ecodome",
    logo: (
      <span className="text-2xl font-semibold tracking-tight">
        Romantic Eco Dome
      </span>
    ),
    title: "An independent direct-booking website for an off-grid Algarve stay",
    tags: ["Direct Booking", "Hospitality", "Website", "Conversion", "UX"],
    image: "/assets/work_cards_imgs/ecodome.png",
    variant: "dark",
    highlight: "Live booking website",
    href: "https://ecodome.indiehost.dev/",
    ctaLabel: "Visit site",
    external: true,
  },
  {
    id: "parcela_ja",
    logo: (
      <div className="flex items-center gap-3">
        <Image
          src="/logos/logo_parcelaja_com-unibanco_white 1.png"
          alt="Parcela Já"
          width={120}
          height={36}
          className="h-9 w-auto"
        />
      </div>
    ),
    title: "A mobile payment experience for in-store purchases",
    tags: ["Payments", "Mobile", "Customer Flow", "Fintech", "UX"],
    image: "/assets/work_cards_imgs/parcela_ja.png",
    variant: "dark",
    highlight: "Operational payment workflow",
    href: "/case-studies/parcela-ja",
  },
  {
    id: "mobile_odt",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/mobile_odt_logo.png"
          alt="Mobile ODT"
          width={280}
          height={64}
          className="h-7 w-auto brightness-0 invert"
        />
      </div>
    ),
    title: "Healthtech product interfaces for teams and daily operations",
    tags: ["Internal Tools", "HealthTech", "UX", "Operations", "IoT"],
    image: "/assets/work_cards_imgs/mobile_odt2.png",
    variant: "dark",
    highlight: "Clinical product workflow",
  },
  {
    id: "Hyperad",
    logo: (
      <div className="flex items-center gap-2">
        <Image
          src="/logos/hyperad.png"
          alt="Hyperad"
          width={100}
          height={32}
          className="h-7 w-auto"
        />
      </div>
    ),
    title: "Automated ad creation with data-driven, on-brand execution",
    tags: ["Automation", "AI Workflow", "AdTech", "MVP"],
    image: "/assets/work_cards_imgs/hyperad.png",
    variant: "light",
    highlight: "AI-assisted business workflow",
  },
];
