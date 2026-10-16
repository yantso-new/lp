"use client";
import { Button } from "@/components/ui/button";

export default function BlogError({ reset }: { reset: () => void }) {
  return <main className="editorial-shell"><h1 className="editorial-title">The blog is temporarily unavailable.</h1><p className="editorial-intro">Please try again in a moment.</p><Button className="mt-6" onClick={reset}>Try again</Button></main>;
}
