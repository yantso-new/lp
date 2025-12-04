"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const;

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, label, onClick, className }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">yaniv tsoref</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact" onClick={handleCtaClick}>
              Book a call
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  {...link}
                  onClick={handleNavClick}
                  className="text-base py-2"
                />
              ))}
              <Button asChild className="mt-4 w-full">
                <a href="#contact" onClick={handleCtaClick}>
                  Book a call
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}




