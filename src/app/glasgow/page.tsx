import { LocationPage } from "@/components/LocationPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hair Loss Clinic Glasgow | Ingram Street",
  description:
    "Hair loss treatment in Glasgow city centre at Ingram House, 227 Ingram Street. Clinician-led assessment for men and women, with options such as PRP. Results vary.",
  path: "/glasgow/",
});

export default function GlasgowPage() {
  return <LocationPage id="glasgow" />;
}
