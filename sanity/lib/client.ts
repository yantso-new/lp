import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

export const client = isSanityConfigured ? createClient({
  projectId, dataset, apiVersion,
  // Public blog reads should use Sanity's edge cache instead of the origin API.
  useCdn: true,
  requestTagPrefix: "portfolio-blog",
  perspective: "published",
}) : null;
