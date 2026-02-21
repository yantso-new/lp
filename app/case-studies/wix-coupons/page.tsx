"use client";

import Link from "next/link";
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
        { id: "objective", label: "Objective" },
        { id: "solution", label: "Solution" },
        { id: "impact", label: "Impact" },
    ];

    return (
        <aside className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-30">
            <nav className="space-y-3">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`block text-sm transition-colors ${
                            activeSection === link.id
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

export default function WixCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            {/* Simple Header */}
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
                        <a href="https://wix.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                            Visit Wix <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </header>

            <ReadingProgress />
            <TableOfContents />

            <main className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 space-y-24">

                {/* Section 1: Hero & Meta block */}
                <section id="hero" className="space-y-8 scroll-mt-24 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-700">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
                            Wix Stores Promotional Ecosystem & Coupon Dashboard
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Transforming a legacy discounting tool into a comprehensive marketing engine for millions of merchants.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Role</p>
                            <p className="font-medium">Senior Product Designer</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Client</p>
                            <p className="font-medium">Wix.com</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Vertical</p>
                            <p className="font-medium">eCommerce</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Project</p>
                            <p className="font-medium">Coupon & Marketing Integration</p>
                        </div>
                    </div>

                    {/* Main Hero Placeholder Image - Full Width Breakout */}
                    <div className="relative -mx-4 sm:-mx-8 lg:-mx-16">
                        <div className="aspect-[16/9] w-full bg-muted rounded-2xl border border-border/50 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-sm bg-accent/10">
                                Hero Image Placeholder (Promotional Ecosystem Overview)
                            </div>
                            {/* You can drop a real image here like: <Image src="..." alt="..." fill className="object-cover" /> */}
                        </div>
                    </div>
                </section>

                {/* Section 2: The Objective */}
                <section id="objective" className="space-y-6 scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <h2 className="text-3xl font-bold md:w-1/3 shrink-0">The Objective</h2>
                        <div className="space-y-4 md:w-2/3 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                To re-engineer a legacy, low-functionality coupon tool into a scalable promotional suite.
                                The primary goal was to transition the platform from providing basic discount codes to
                                offering a comprehensive marketing engine that empowers merchants to drive customer
                                acquisition and retention.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: The Solution */}
                <section id="solution" className="space-y-12 scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <h2 className="text-3xl font-bold md:w-1/3 shrink-0">The Solution</h2>
                        <div className="space-y-12 md:w-2/3">

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Infrastructure Overhaul</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Redesigned the core coupon dashboard to support complex promotional logic,
                                    improving usability and merchant efficiency.
                                </p>
                                {/* Full Width Image Breakout */}
                                <div className="relative -mx-4 sm:-mx-8 lg:-mx-16 mt-6">
                                    <div className="aspect-video w-full bg-muted rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground text-sm font-mono">
                                        Image Placeholder: Dashboard UI Comparison
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Omnichannel Integration</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Developed the foundational UX for integrated email marketing and Facebook Ad management,
                                    centralizing disparate marketing activities into a single workflow.
                                </p>
                            </div>

                            {/* Quote Block */}
                            <blockquote className="border-l-4 border-primary pl-6 py-4">
                                <p className="text-xl italic text-foreground">
                                    "This redesign fundamentally changed how our merchants approach promotions and marketing."
                                </p>
                                <cite className="text-sm text-muted-foreground mt-3 block not-italic">
                                    — Product Manager, Wix Stores
                                </cite>
                            </blockquote>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Strategic Scalability</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Built the design framework to support high-volume feature additions,
                                    directly leading to the formation of the Wix Promote vertical.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Visual Hierarchy</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Simplified data-heavy interfaces to ensure merchants could monitor campaign performance
                                    and manage promotions with minimal cognitive load.
                                </p>
                                {/* Full Width Image Breakout */}
                                <div className="relative -mx-4 sm:-mx-8 lg:-mx-16 mt-6">
                                    <div className="aspect-[4/3] w-full bg-muted rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground text-sm font-mono">
                                        Image Placeholder: Data Visualization & Hierarchy
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 4: Strategic Impact */}
                <section id="impact" className="space-y-8 bg-accent/30 p-8 sm:p-12 rounded-3xl border border-border/50 scroll-mt-24">
                    <h2 className="text-3xl font-bold mb-8">Strategic Impact</h2>
                    <div className="grid sm:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl tabular-nums mb-4">
                                1
                            </div>
                            <h3 className="text-lg font-semibold">Vertical Creation</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                The success of these promotional tools served as the catalyst for "Wix Promote," a dedicated business unit within Wix.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl tabular-nums mb-4">
                                2
                            </div>
                            <h3 className="text-lg font-semibold">Feature Adoption</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Streamlined the transition from simple discounting to advanced multi-channel marketing for millions of eCommerce users.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl tabular-nums mb-4">
                                3
                            </div>
                            <h3 className="text-lg font-semibold">Market Positioning</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Elevated the Wix eCommerce offering to compete with enterprise-level platforms by providing sophisticated, yet accessible, marketing automation tools.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Next Case Study CTA */}
                <section className="border-t border-border/50 pt-16">
                    <Link
                        href="/case-studies/next-project"
                        className="group flex items-center justify-between p-6 -mx-6 rounded-2xl hover:bg-accent/20 transition-colors"
                    >
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">Next Case Study</p>
                            <p className="text-2xl font-bold group-hover:text-primary transition-colors">
                                View More Work
                            </p>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </Link>
                </section>

            </main>
        </div>
    );
}
