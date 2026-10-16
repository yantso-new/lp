import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, isSanityConfigured, projectId } from "@/sanity/env";
import type { BlogImage } from "./articles";

export function imageUrl(image: BlogImage, width = 1600) {
  if (!isSanityConfigured || !image.asset?._ref) return undefined;
  return createImageUrlBuilder({ projectId, dataset }).image(image).width(width).auto("format").url();
}
