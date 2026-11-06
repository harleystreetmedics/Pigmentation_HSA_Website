import type { MetadataRoute } from "next";
import { CONDITIONS } from "@/lib/conditions";
import { absUrl } from "@/lib/seo";
import { TREATMENTS } from "@/lib/treatments";

export const dynamic = "force-static";

const STATIC = [
  "/hair-loss-in-men/",
  "/hair-loss-in-women/",
  "/conditions/",
  "/treatments/",
  "/diagnosis/",
  "/which-treatment/",
  "/pricing/",
  "/results/",
  "/faq/",
  "/about/",
  "/london/",
  "/glasgow/",
  "/book/",
];
const LEGAL = ["/privacy-policy/", "/cookie-policy/", "/terms/", "/medical-disclaimer/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...STATIC.map((p) => ({ url: absUrl(p), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...CONDITIONS.map((c) => ({ url: absUrl(`/conditions/${c.slug}/`), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...TREATMENTS.map((t) => ({ url: absUrl(`/treatments/${t.slug}/`), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...LEGAL.map((p) => ({ url: absUrl(p), lastModified, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
