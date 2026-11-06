import type { Metadata } from "next";
import { ALLOW_INDEXING, BRAND, SITE_URL } from "./site";

export const absUrl = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

type PageMeta = { title: string; description: string; path: string; ogAlt?: string };

/** Per-page metadata with canonical, Open Graph and Twitter tags (same pattern as the Endolift site). */
export function pageMetadata({ title, description, path, ogAlt }: PageMeta): Metadata {
  const url = absUrl(path);
  const image = { url: absUrl("/og/og-default.png"), width: 1200, height: 630, alt: ogAlt ?? "Hair loss clinic at Harley Street Medical Wellness" };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: BRAND.siteName, locale: "en_GB", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export const robotsMeta: Metadata["robots"] = ALLOW_INDEXING
  ? { index: true, follow: true }
  : { index: false, follow: false };
