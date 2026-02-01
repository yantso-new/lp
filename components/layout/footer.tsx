
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background py-12 sm:py-16 lg:py-24 border-t border-border">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Connect with Me</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                            Have something else in mind? I'm always open to new projects and collaborations.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 py-6 text-base"
                        >
                            <a href="mailto:hello@yantso.com">
                                Get in Touch
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-col gap-6 items-start md:items-end w-full md:w-auto">
                        <a
                            href="https://www.linkedin.com/in/yanivtsoref/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-xl font-medium hover:text-muted-foreground transition-colors"
                        >
                            LinkedIn <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="https://dribbble.com/yantso"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-xl font-medium hover:text-muted-foreground transition-colors"
                        >
                            Dribbble <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© Copyright 2026. All rights Reserved.</p>
                    <p>Designed & Built by Yaniv Tsoref</p>
                </div>
            </div>
        </footer>
    );
}
