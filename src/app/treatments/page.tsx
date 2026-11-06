import Link from "next/link";
import { TreatmentCard } from "@/components/cards";
import { CtaBand } from "@/components/sections";
import { CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { RX_SENTENCE } from "@/lib/conditions";
import { treatmentsListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { TREATMENTS } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Hair Loss Treatments London & Glasgow",
  description:
    "Non-surgical hair loss treatments at Harley Street Medical Wellness: PRP, scalp microneedling, low-level laser therapy and more, chosen after a clinician-led assessment.",
  path: "/treatments/",
});

export default function TreatmentsIndex() {
  return (
    <>
      <JsonLd data={treatmentsListSchema(TREATMENTS)} />
      <PageHero
        eyebrow="Treatments"
        title="Hair loss treatments"
        intro="The right option depends on the cause of your hair loss. After your assessment, we'll explain which of these, if any, may suit you."
        crumbs={[{ name: "Treatments", path: "/treatments/" }]}
      />
      <Section labelledBy="list-title">
        <SectionHeading id="list-title" eyebrow="Options we may discuss" title="In-clinic treatments" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t) => (
            <li key={t.slug}>
              <TreatmentCard t={t} />
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="soft" labelledBy="other-title">
        <SectionHeading id="other-title" eyebrow="Also part of your plan" title="Medical care and support" />
        <CheckList
          items={[
            <>
              <Link href="/diagnosis/" className="text-gold underline underline-offset-2">
                Consultation and scalp assessment
              </Link>{" "}
              to understand the cause first.
            </>,
            RX_SENTENCE,
            "Nutritional support may be discussed when clinically indicated. Vitamin drips are not a proven general treatment for hair loss.",
            "Referral to your GP or a specialist dermatologist when that's the right route.",
          ]}
        />
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
