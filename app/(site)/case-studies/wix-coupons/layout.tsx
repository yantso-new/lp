import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wix Stores Case Study Coming Soon",
  description:
    "The Wix Stores ecommerce promotions and coupon dashboard case study is coming soon.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/case-studies/wix-coupons",
  },
  openGraph: {
    title: "Wix Stores Case Study Coming Soon",
    description:
      "The Wix Stores ecommerce promotions and coupon dashboard case study is coming soon.",
    url: "/case-studies/wix-coupons",
    type: "website",
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
    title: "Wix Stores Case Study Coming Soon",
    description:
      "The Wix Stores ecommerce promotions and coupon dashboard case study is coming soon.",
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
