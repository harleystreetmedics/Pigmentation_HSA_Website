import { LocationPage } from "@/components/LocationPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pigmentation Treatment Glasgow | Ingram Street",
  description:
    "Pigmentation treatment in Glasgow city centre at Ingram House, 227 Ingram Street: melasma, sun spots, acne marks and uneven tone, for all skin tones. Results vary.",
  path: "/glasgow/",
});

export default function GlasgowPage() {
  return <LocationPage id="glasgow" />;
}
