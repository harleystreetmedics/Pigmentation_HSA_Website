import { LocationPage } from "@/components/LocationPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pigmentation Treatment London | Belgravia",
  description:
    "Pigmentation treatment in London at 2 Grosvenor Gardens, Belgravia: melasma, sun spots, acne marks and uneven tone, for all skin tones. Free online consultation. Results vary.",
  path: "/london/",
});

export default function LondonPage() {
  return <LocationPage id="london" />;
}
