import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
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
  metadataBase: new URL("https://yantso.com"),
  title: "Yaniv Tsoref | Fractional Product Designer & Builder",
  description: "I design and build beautiful products. Crafting thoughtful digital experiences that blend aesthetics with functionality.",
  openGraph: {
    title: "Yaniv Tsoref | Fractional Product Designer & Builder",
    description: "I design and build beautiful products. Crafting thoughtful digital experiences that blend aesthetics with functionality.",
    url: "https://yantso.com",
    siteName: "Yaniv Tsoref",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaniv Tsoref | Fractional Product Designer & Builder",
    description: "I design and build beautiful products. Crafting thoughtful digital experiences that blend aesthetics with functionality.",
  },
};

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
        <Analytics />
      </body>
    </html>
  );
}
