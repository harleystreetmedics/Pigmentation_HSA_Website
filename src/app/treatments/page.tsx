import Link from "next/link";
import { TreatmentCard } from "@/components/cards";
import { CtaBand, SkinCheckNotice } from "@/components/sections";
import { CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { RX_SENTENCE } from "@/lib/conditions";
import { treatmentsListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { TREATMENTS, type Treatment } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Pigmentation Treatments London & Glasgow",
  description:
    "Pigmentation treatments at Harley Street Aesthetics: Signature Pigmentation Protocol, chemical peels, VI Peel, Cosmelan, IPL, Q-switched laser, Virtue RF and more, chosen after assessment.",
  path: "/treatments/",
});

const GROUPS: { id: string; title: string; cats: Treatment["category"][] }[] = [
  { id: "programme", title: "Programmes and peels", cats: ["Programme", "Peels"] },
  { id: "laser", title: "Light, laser and microneedling", cats: ["Light & laser", "Microneedling"] },
  { id: "targeted", title: "Targeted treatments", cats: ["Targeted"] },
];

export default function TreatmentsIndex() {
  return (
    <>
      <JsonLd data={treatmentsListSchema(TREATMENTS)} />
      <PageHero
        eyebrow="Treatments"
        title="Pigmentation treatments"
        intro="The right option depends on your type of pigmentation, its depth and your skin type. After your assessment, we'll explain which of these, if any, may suit you."
        crumbs={[{ name: "Treatments", path: "/treatments/" }]}
      />
      {GROUPS.map((g, i) => (
        <Section key={g.id} tone={i % 2 ? "soft" : "rich"} labelledBy={`${g.id}-title`}>
          <SectionHeading id={`${g.id}-title`} eyebrow="Options we may discuss" title={g.title} />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.filter((t) => g.cats.includes(t.category)).map((t) => (
              <li key={t.slug}>
                <TreatmentCard t={t} />
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <Section tone="soft" labelledBy="other-title">
        <SectionHeading id="other-title" eyebrow="Also part of your plan" title="Medical care and support" />
        <CheckList
          items={[
            <>
              <Link href="/diagnosis/" className="text-gold underline underline-offset-2">
                Consultation and skin assessment
              </Link>{" "}
              to understand your type of pigmentation and skin type first.
            </>,
            <>
              A home skincare plan and daily SPF, explained in our{" "}
              <Link href="/prevention-and-aftercare/" className="text-gold underline underline-offset-2">
                prevention and aftercare guide
              </Link>
              .
            </>,
            RX_SENTENCE,
            "Referral to your GP or a dermatologist when a mark needs medical assessment.",
          ]}
        />
        <SkinCheckNotice className="mt-10" />
        <Disclaimer className="mt-6" />
      </Section>
      <CtaBand />
    </>
  );
}
