import { isSanityConfigured } from "@/sanity/env";
import Studio from "./studio";

export { metadata, viewport } from "next-sanity/studio";
export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="editorial-shell">
        <p className="editorial-eyebrow">Content studio</p>
        <h1 className="editorial-title">Connect your Sanity project.</h1>
        <p className="editorial-intro">Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local, then restart the development server. See README.md for the setup steps.</p>
      </main>
    );
  }
  return <Studio />;
}
