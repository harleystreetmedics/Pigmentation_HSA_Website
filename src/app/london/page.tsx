import { LocationPage } from "@/components/LocationPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hair Loss Clinic London | Belgravia",
  description:
    "Hair loss treatment in London at 2 Grosvenor Gardens, Belgravia. Clinician-led assessment for men and women, with options such as PRP. Results vary.",
  path: "/london/",
});

export default function LondonPage() {
  return <LocationPage id="london" />;
}
