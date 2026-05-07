"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrollPercent);
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-16 left-0 right-0 h-0.5 bg-muted z-40">
            <div
                className="h-full bg-primary transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

function TableOfContents() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const links = [
        { id: "hero", label: "Overview" },
        { id: "context", label: "Context" },
        { id: "process", label: "Process" },
        { id: "flows", label: "Key Flows" },
        { id: "decisions", label: "Decisions" },
        { id: "reflection", label: "Reflection" },
    ];

    return (
        <aside className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-30">
            <nav className="space-y-3">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`block text-sm transition-colors ${activeSection === link.id
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </aside>
    );
}

/**
 * iPhone frame overlay.
 * The screenshots already have a baked-in device frame — we scale the image
 * so the screen content fills the viewport window, then overlay an SVG iPhone
 * bezel on top to give a clean, consistent look.
 *
 * The inner screen viewport (no notch) sits at roughly:
 *   top: 10.5%  bottom: 3.5%  left: 4%  right: 4%
 * of the total phone dimensions (393×852 logical iPhone 14).
 */
function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
    // Percentage offsets that isolate the screen content within the baked-in frame
    const TOP = "9%";
    const BOTTOM = "9%";
    const SIDE = "7%";

    return (
        <div
            className={`relative mx-auto drop-shadow-2xl ${className}`}
            style={{ maxWidth: 240, aspectRatio: "393/852" }}
        >
            {/* Screenshot, shifted so baked-in frame is hidden */}
            <div
                className="absolute overflow-hidden rounded-[14%]"
                style={{ inset: 0 }}
            >
                <div
                    className="absolute"
                    style={{
                        top: `-${TOP}`,
                        bottom: `-${BOTTOM}`,
                        left: `-${SIDE}`,
                        right: `-${SIDE}`,
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="240px"
                    />
                </div>
            </div>

            {/* SVG iPhone 14 Pro bezel overlay */}
            <svg
                viewBox="0 0 393 852"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
            >
                {/* Outer shell */}
                <rect x="1" y="1" width="391" height="850" rx="52" ry="52"
                    fill="none" stroke="#1a1a1a" strokeWidth="10" />
                {/* Inner screen mask stroke */}
                <rect x="8" y="8" width="377" height="836" rx="46" ry="46"
                    fill="none" stroke="#2a2a2a" strokeWidth="4" />
                {/* Side buttons — volume up */}
                <rect x="-4" y="160" width="5" height="36" rx="2" fill="#1a1a1a" />
                {/* Side buttons — volume down */}
                <rect x="-4" y="210" width="5" height="36" rx="2" fill="#1a1a1a" />
                {/* Side buttons — silent */}
                <rect x="-4" y="120" width="5" height="22" rx="2" fill="#1a1a1a" />
                {/* Power button */}
                <rect x="396" y="180" width="5" height="56" rx="2" fill="#1a1a1a" />
                {/* Dynamic Island */}
                <rect x="140" y="16" width="113" height="34" rx="17"
                    fill="#111111" />
                {/* Shine on bezel */}
                <rect x="1" y="1" width="391" height="850" rx="52" ry="52"
                    fill="url(#shine)" />
                <defs>
                    <linearGradient id="shine" x1="0" y1="0" x2="0" y2="852" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                        <stop offset="40%" stopColor="white" stopOpacity="0" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.03" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

/** Row of phone frames — up to 3 per row, centered */
function PhoneRow({ screens }: { screens: { src: string; alt: string; label?: string }[] }) {
    return (
        <div className={`flex gap-6 justify-center flex-wrap`}>
            {screens.map(({ src, alt, label }) => (
                <div key={src} className="flex flex-col items-center gap-3">
                    <PhoneFrame src={src} alt={alt} />
                    {label && (
                        <p className="text-xs text-muted-foreground text-center max-w-[200px]">{label}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function ParcelaJaCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
                <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Back to Portfolio
                    </Link>
                    <Button asChild size="sm" variant="outline" className="hidden sm:flex">
                        <a href="https://www.parcelaja.pt/en" target="_blank" rel="noopener noreferrer" className="gap-2">
                            Visit Parcela Já <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </header>

            <ReadingProgress />
            <TableOfContents />

            <main className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 space-y-24">

                {/* Section 1: Hero & Meta */}
                <section id="hero" className="space-y-8 scroll-mt-24 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-700">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
                            Parcela Já
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Designing a trust-first fintech experience for interest-free instalment payments across Portugal — from identity verification to in-store checkout.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Role</p>
                            <p className="font-medium">Lead Product Designer</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Platform</p>
                            <p className="font-medium">iOS & Android · Expo</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Industry</p>
                            <p className="font-medium">Fintech / BNPL</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">UI Library</p>
                            <p className="font-medium">NucleusUI</p>
                        </div>
                    </div>

                    {/* Recognition badges */}
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Best Fintech 2019 · AI Portugal",
                            "TOP Fintech Portugal 2018 & 2019 · Accenture",
                            "Top 10 Global Payments Startups · Efma-Capgemini",
                            "Google Campus Resident",
                            "Huge Thing Accelerator · Poland",
                        ].map((award) => (
                            <span
                                key={award}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                            >
                                {award}
                            </span>
                        ))}
                    </div>

                    {/* Hero — 3-phone showcase */}
                    <div className="relative -mx-4 sm:-mx-8 lg:-mx-16 mt-4">
                        <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border/50 p-8 sm:p-12">
                            <PhoneRow screens={[
                                { src: "/case-studies/parcela-ja/home-screen.png", alt: "Parcela Já home screen — store discovery and deals", label: "Home — discover & shop" },
                                { src: "/case-studies/parcela-ja/id-verified.png", alt: "Phone number verified confirmation screen", label: "Identity verified" },
                                { src: "/case-studies/parcela-ja/transactions.png", alt: "Transactions screen showing active and completed instalments", label: "Wallet — transactions" },
                            ]} />
                        </div>
                    </div>
                </section>

                {/* Section 2: Context */}
                <section id="context" className="space-y-12 scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <h2 className="text-3xl font-bold md:w-1/3 shrink-0">Context</h2>
                        <div className="space-y-6 md:w-2/3 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Parcela Já lets customers split purchases into up to <strong className="text-foreground">6 interest-free monthly instalments</strong> across physical and online stores in Portugal. No paperwork, instant approval.
                            </p>
                            <p>
                                The mobile app was the user's key to everything — from signing up and verifying identity, to finding stores and paying at the point of sale.
                            </p>
                        </div>
                    </div>

                    {/* Two Phases */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl border border-border/50 bg-accent/10 space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phase 1</p>
                            <h3 className="text-lg font-semibold text-foreground">Discovery</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Help users find stores accepting Parcela Já — nearby and online. Build awareness and trust before any transaction happens.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-border/50 bg-accent/10 space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phase 2</p>
                            <h3 className="text-lg font-semibold text-foreground">Activation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Enable the complete in-store payment flow — terminal sync, wallet confirmation, receipt. The moment the product delivers its promise.
                            </p>
                        </div>
                    </div>

                    {/* My Role */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">My Role</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Sole Product Designer across the entire app — working directly alongside the Product Manager and Project Leader on discovery, flows, and priorities. I also led the decision to build on <strong className="text-foreground">Expo</strong> for cross-platform iOS/Android delivery and chose <strong className="text-foreground">NucleusUI</strong> as the component library — both evaluated from a design-feasibility perspective, not just dev convenience.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I directed a large development team based in Ukraine, providing detailed Figma specs, component-level NucleusUI documentation, and running ongoing design review sessions through to production.
                        </p>
                    </div>
                </section>

                {/* Section 3: Process */}
                <section id="process" className="space-y-12 scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <h2 className="text-3xl font-bold md:w-1/3 shrink-0">Design Process</h2>
                        <div className="space-y-10 md:w-2/3">

                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Scoping",
                                    body: "Mapped user needs across two contexts: in-store customers at a terminal, and online shoppers. Defined the two product phases alongside the PM and project leader, and aligned the development team on scope before any design work began.",
                                },
                                {
                                    step: "02",
                                    title: "Flow Architecture",
                                    body: "Built full user journey maps in Figma before touching UI — from splash to onboarding, sign-up to ID verification, store discovery to payment completion. Every edge case, empty state, and error state was documented at this stage.",
                                },
                                {
                                    step: "03",
                                    title: "Iterative UX & UI Design",
                                    body: "Designed in cycles with the PM — structure first, then the visual layer. Critical flows like ID verification and InStore payment went through multiple rounds of iteration to reduce friction and build trust at every step.",
                                },
                                {
                                    step: "04",
                                    title: "Dev Handoff & Review",
                                    body: "Produced detailed Figma specs for the Ukrainian team with component-level documentation tied to NucleusUI. Ran regular design review sessions throughout the build to maintain fidelity from design to production.",
                                },
                            ].map(({ step, title, body }) => (
                                <div key={step} className="flex gap-6">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm tabular-nums">
                                        {step}
                                    </div>
                                    <div className="space-y-2 pt-1">
                                        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Key Flows */}
                <section id="flows" className="space-y-16 scroll-mt-24">
                    <h2 className="text-3xl font-bold">Key Flows</h2>

                    {/* ID Verification */}
                    <div className="space-y-6">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Compliance · 3rd Party Integration</p>
                                <h3 className="text-xl font-semibold text-foreground">ID Verification Flow</h3>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/30 text-muted-foreground border border-border/50">
                                Intro → Scan ID → Liveness → Verified
                            </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            UX wrapper around a third-party identity authentication service — ID card scanning, liveness check, and success confirmation. Designed to maximise completion rate and communicate trust at every step.
                        </p>
                        <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border/50 p-8">
                            <PhoneRow screens={[
                                { src: "/case-studies/parcela-ja/id-verified.png", alt: "Phone number verified confirmation", label: "Verification success" },
                            ]} />
                        </div>
                    </div>

                    {/* InStore Payment */}
                    <div className="space-y-6">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phase 2 · Core Experience</p>
                                <h3 className="text-xl font-semibold text-foreground">InStore Payment</h3>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/30 text-muted-foreground border border-border/50">
                                Amount → QR Code → Processing → Approved
                            </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Three user variants — new user, returning non-app user, and returning app user. Built for speed and absolute clarity at the point of sale. Every tap counts when someone is at a shop counter.
                        </p>

                        <blockquote className="border-l-4 border-primary pl-6 py-4">
                            <p className="text-lg italic text-foreground">
                                "Payments at a counter happen in seconds — with a queue behind you and a merchant waiting. I stripped the flow to the minimum necessary steps."
                            </p>
                        </blockquote>
                    </div>

                    {/* Wallet MVP */}
                    <div className="space-y-6">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">MVP · Financial UX</p>
                                <h3 className="text-xl font-semibold text-foreground">Wallet MVP</h3>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/30 text-muted-foreground border border-border/50">
                                Wallet Home → Instalment Detail → History
                            </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Designed from scratch — spending capacity, active instalments, payment schedule, and full transaction history. Gives users real financial clarity and confidence in the product.
                        </p>
                        <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border/50 p-8">
                            <PhoneRow screens={[
                                { src: "/case-studies/parcela-ja/transactions.png", alt: "Transactions screen showing in progress and completed instalments", label: "Instalment history" },
                            ]} />
                        </div>
                    </div>

                    {/* Store Discovery */}
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phase 1 · Discovery</p>
                            <h3 className="text-xl font-semibold text-foreground">Store Discovery</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Merchant discovery across two modes — <strong className="text-foreground">Nearby</strong> (map + store list with distance) and <strong className="text-foreground">Online</strong> (search + categories + deals). Users can explore stores, view partner details, and access exclusive Parcela Já coupons — all before making a purchase decision.
                        </p>
                        <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border/50 p-8">
                            <PhoneRow screens={[
                                { src: "/case-studies/parcela-ja/home-screen.png", alt: "App home showing store discovery and categories", label: "Home — store discovery" },
                                { src: "/case-studies/parcela-ja/search-results-clothes.png", alt: "Search results for clothes showing Worten, Nike, Aldo, Adidas, H&M", label: "Search — live results" },
                                { src: "/case-studies/parcela-ja/store-page-worten.png", alt: "Worten store page with address, deals section", label: "Store detail page" },
                            ]} />
                        </div>

                        {/* Coupon detail callout */}
                        <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border/50 p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 space-y-4">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Loyalty & Retention</p>
                                    <h4 className="text-lg font-semibold text-foreground">Exclusive Deals</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        Parcela Já coupons surface inside the app — tied to specific merchants, with clear expiry, minimum spend, and a direct CTA to the store page. A key retention hook that kept users returning to discover new deals.
                                    </p>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    <PhoneFrame
                                        src="/case-studies/parcela-ja/coupon-detail.png"
                                        alt="Coupon detail screen showing Worten 20% off deal"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Decisions */}
                <section id="decisions" className="space-y-8 scroll-mt-24">
                    <h2 className="text-3xl font-bold">Decisions I Owned</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border/50">
                                    <th className="text-left py-3 pr-6 text-muted-foreground font-medium w-1/3">Decision</th>
                                    <th className="text-left py-3 text-muted-foreground font-medium">Detail</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30">
                                {[
                                    ["Expo framework", "Recommended and validated from the design-feasibility side for the remote team"],
                                    ["NucleusUI", "Selected as the UI component library, aligned to the design system I was building"],
                                    ["2-phase roadmap", "Discovery before activation — co-defined with PM and project leader"],
                                    ["3 InStore user paths", "New user / returning non-app user / returning app user — reduces POS friction"],
                                    ["ID verification UX wrapper", "Owned the full experience around the 3rd-party service end-to-end"],
                                    ["Wallet MVP scope", "Prioritised financial clarity over feature breadth with the PM"],
                                ].map(([decision, detail]) => (
                                    <tr key={decision}>
                                        <td className="py-4 pr-6 font-medium text-foreground align-top">{decision}</td>
                                        <td className="py-4 text-muted-foreground leading-relaxed">{detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 6: Reflection */}
                <section id="reflection" className="space-y-8 bg-accent/30 p-8 sm:p-12 rounded-3xl border border-border/50 scroll-mt-24">
                    <h2 className="text-3xl font-bold">Reflection</h2>
                    <div className="space-y-8">
                        {[
                            {
                                title: "Trust is earned screen by screen",
                                body: "In fintech, users don't give you the benefit of the doubt. Every screen needs to justify itself — through clear language, visible security signals, and deliberate transitions. This project made me a significantly sharper UX writer and more deliberate about micro-copy.",
                            },
                            {
                                title: "Designers should know the stack",
                                body: "Being involved in the Expo and NucleusUI decision made every subsequent design conversation faster and more credible. When you understand what's easy and what's expensive to build, your design decisions become more realistic and your relationship with engineering becomes stronger.",
                            },
                            {
                                title: "Phase before you build",
                                body: "Structuring the product into two phases — discovery first, then activation — let the team ship value early and build real merchant density before users tried to pay. The two-phase structure turned what could have been a broken MVP into a coherent end-to-end journey. A pattern I'd apply to any 0-to-1 product.",
                            },
                        ].map(({ title, body }) => (
                            <div key={title} className="space-y-2">
                                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Next Case Study CTA */}
                <section className="border-t border-border/50 pt-16">
                    <Link
                        href="/case-studies/wix-coupons"
                        className="group flex items-center justify-between p-6 -mx-6 rounded-2xl hover:bg-accent/20 transition-colors"
                    >
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                            <p className="text-2xl font-bold group-hover:text-primary transition-colors">
                                Wix Stores Promotional Ecosystem
                            </p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </Link>
                </section>

            </main>
        </div>
    );
}
