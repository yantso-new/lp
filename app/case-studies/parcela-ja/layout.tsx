import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcela Ja Fintech Product Design Case Study",
  description:
    "A trust-first fintech product design case study for Parcela Ja, covering identity verification, in-store checkout, wallet flows, and mobile UX.",
  alternates: {
    canonical: "/case-studies/parcela-ja",
  },
  openGraph: {
    title: "Parcela Ja Fintech Product Design Case Study",
    description:
      "A trust-first fintech product design case study for Parcela Ja, covering identity verification, in-store checkout, wallet flows, and mobile UX.",
    url: "/case-studies/parcela-ja",
    type: "article",
    images: [
      {
        url: "/case-studies/parcela-ja/home-screen.png",
        width: 1200,
        height: 2600,
        alt: "Parcela Ja mobile app home screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcela Ja Fintech Product Design Case Study",
    description:
      "A trust-first fintech product design case study for Parcela Ja, covering identity verification, in-store checkout, wallet flows, and mobile UX.",
    images: ["/case-studies/parcela-ja/home-screen.png"],
  },
};

export default function ParcelaJaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
