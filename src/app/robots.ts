import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/seo";
import { ALLOW_INDEXING, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Blocks all crawling until NEXT_PUBLIC_ALLOW_INDEXING=true at launch (docs/decisions.md #13).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOW_INDEXING ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    host: SITE_URL,
    sitemap: absUrl("/sitemap.xml"),
  };
}
