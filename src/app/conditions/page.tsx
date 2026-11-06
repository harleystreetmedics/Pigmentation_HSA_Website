import { ConditionCard } from "@/components/cards";
import { CtaBand } from "@/components/sections";
import { Disclaimer, PageHero, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS } from "@/lib/conditions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Types of Hair Loss We Assess",
  description:
    "From male and female pattern hair loss to alopecia areata, shedding after illness, postpartum and menopause hair loss and scalp conditions. Assessed in London and Glasgow.",
  path: "/conditions/",
});

const GROUPS = [
  { id: "pattern", title: "Pattern and gradual thinning", slugs: ["male-pattern-hair-loss", "female-pattern-hair-loss", "receding-hairline", "crown-thinning", "diffuse-thinning"] },
  { id: "shedding", title: "Shedding and hormonal changes", slugs: ["telogen-effluvium", "postpartum-hair-loss", "menopause-hair-loss", "pcos-hair-loss", "medical-causes"] },
  {
    id: "patchy",
    title: "Patchy loss, scalp and specialist conditions",
    slugs: ["alopecia-areata", "traction-alopecia", "scarring-alopecia", "scalp-conditions", "hair-breakage", "hair-loss-after-chemotherapy", "beard-and-eyebrow-thinning"],
  },
];

export default function ConditionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Conditions"
        title="Types of hair loss"
        intro="Hair loss has many causes, and some need medical care before any cosmetic treatment. Read about the most common types, then book a consultation for an assessment."
        crumbs={[{ name: "Conditions", path: "/conditions/" }]}
      />
      {GROUPS.map((g, i) => (
        <Section key={g.id} tone={i % 2 ? "soft" : "rich"} labelledBy={`${g.id}-title`}>
          <SectionHeading id={`${g.id}-title`} eyebrow="Conditions" title={g.title} />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.slugs.map((s) => {
              const c = CONDITIONS.find((x) => x.slug === s)!;
              return (
                <li key={s}>
                  <ConditionCard c={c} />
                </li>
              );
            })}
          </ul>
        </Section>
      ))}
      <Section tone="soft">
        <Disclaimer />
      </Section>
      <CtaBand />
    </>
  );
}
