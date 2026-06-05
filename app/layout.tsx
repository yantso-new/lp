import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yantso.com"),
  title: {
    default: "Yaniv Tsoref | Product Designer & Builder",
    template: "%s | Yaniv Tsoref",
  },
  description:
    "Product designer and builder helping teams ship polished products, websites, ecommerce experiences, automations, and internal tools.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yaniv Tsoref | Product Designer & Builder",
    description:
      "Product designer and builder helping teams ship polished products, websites, ecommerce experiences, automations, and internal tools.",
    url: "https://www.yantso.com",
    siteName: "Yaniv Tsoref",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yaniv Tsoref | Product Designer & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaniv Tsoref | Product Designer & Builder",
    description:
      "Product designer and builder helping teams ship polished products, websites, ecommerce experiences, automations, and internal tools.",
    images: ["/opengraph-image"],
  },
};

import { CookieConsent } from "@/components/layout/cookie-consent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
