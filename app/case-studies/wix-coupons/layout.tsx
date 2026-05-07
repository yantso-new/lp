import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wix Coupons Product Design Case Study",
  description:
    "A product design case study on redesigning the Wix Stores coupon dashboard into a scalable promotional ecosystem for ecommerce merchants.",
  alternates: {
    canonical: "/case-studies/wix-coupons",
  },
  openGraph: {
    title: "Wix Coupons Product Design Case Study",
    description:
      "A product design case study on redesigning the Wix Stores coupon dashboard into a scalable promotional ecosystem for ecommerce merchants.",
    url: "/case-studies/wix-coupons",
    type: "article",
    images: [
      {
        url: "/assets/work_images/wix_coupons.png",
        width: 1200,
        height: 900,
        alt: "Wix coupons product interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix Coupons Product Design Case Study",
    description:
      "A product design case study on redesigning the Wix Stores coupon dashboard into a scalable promotional ecosystem for ecommerce merchants.",
    images: ["/assets/work_images/wix_coupons.png"],
  },
};

export default function WixCouponsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
