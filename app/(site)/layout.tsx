import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Analytics } from "@vercel/analytics/next";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><SmoothScroll />{children}<Footer /><CookieConsent /><Analytics /></>;
}
