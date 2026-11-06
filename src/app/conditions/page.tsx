import { ConditionCard } from "@/components/cards";
import { CtaBand, SkinCheckNotice } from "@/components/sections";
import { Disclaimer, PageHero, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS, type Condition } from "@/lib/conditions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Types of Pigmentation We Assess",
  description:
    "Melasma, sun spots, age spots, freckles, acne marks, hormonal pigmentation, dark circles, body and lip pigmentation, birthmarks and white patches. Assessed in London and Glasgow.",
  path: "/conditions/",
});

const GROUPS: { id: string; title: string; intro: string; group: Condition["group"] }[] = [
  { id: "face", title: "Facial pigmentation", intro: "The most common concerns we see, from sun spots to melasma.", group: "Face" },
  { id: "body", title: "Body areas", intro: "Pigmentation on the body, where we assess the cause and advise on options.", group: "Body" },
  {
    id: "refer",
    title: "Assessed, and referred where needed",
    intro: "Concerns that usually need a medical diagnosis first. We'll help you understand them and point you to the right care.",
    group: "Assess & refer",
  },
];

export default function ConditionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Conditions"
        title="Types of pigmentation"
        intro="Pigmentation has many types and causes, and some need medical care before any cosmetic treatment. Read about each one, then book a consultation for an assessment."
        crumbs={[{ name: "Conditions", path: "/conditions/" }]}
      />
      {GROUPS.map((g, i) => (
        <Section key={g.id} tone={i % 2 ? "soft" : "rich"} labelledBy={`${g.id}-title`}>
          <SectionHeading id={`${g.id}-title`} eyebrow="Conditions" title={g.title} intro={g.intro} />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS.filter((c) => c.group === g.group).map((c) => (
              <li key={c.slug}>
                <ConditionCard c={c} />
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <Section tone="soft">
        <SkinCheckNotice />
        <Disclaimer className="mt-8" />
      </Section>
      <CtaBand />
    </>
  );
}
