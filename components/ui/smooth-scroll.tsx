"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Custom easing function for smooth scrolling
    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Smooth scroll function
    const smoothScrollTo = (target: number, duration: number = 1000) => {
      const start = window.pageYOffset;
      const distance = target - start;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, start + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Handle anchor link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;

      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const id = href.slice(1);
          const element = document.getElementById(id);

          if (element) {
            e.preventDefault();
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - 80; // Account for fixed header if any

            smoothScrollTo(offsetPosition, 1000);
          }
        }
      }
    };

    // Handle programmatic scrolls
    const handleScroll = () => {
      // This ensures smooth scrolling even for programmatic scrolls
      if (window.scrollBehavior !== "smooth") {
        // Fallback for browsers that don't support smooth scroll
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}




























