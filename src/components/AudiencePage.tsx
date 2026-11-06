import { ConditionCard, FaqAccordion, StepTimeline, TreatmentCard } from "./cards";
import { CtaBand } from "./sections";
import { Button, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "./ui";
import { CONDITIONS, DIAGNOSIS_STEPS, RX_SENTENCE } from "@/lib/conditions";
import type { Faq } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { TREATMENTS } from "@/lib/treatments";

type Props = {
  audience: "men" | "women";
  title: string;
  intro: string;
  path: string;
  conditionSlugs: string[];
  why: string[];
  faqs: Faq[];
};

export function AudiencePage({ audience, title, intro, path, conditionSlugs, why, faqs }: Props) {
  const conditions = conditionSlugs.map((s) => CONDITIONS.find((c) => c.slug === s)!);
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero eyebrow={audience === "men" ? "Men's hair loss" : "Women's hair loss"} title={title} intro={intro} crumbs={[{ name: title, path }]}>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href="/which-treatment/" variant="outline">
            Which treatment is right for me?
          </Button>
        </div>
      </PageHero>

      <Section labelledBy="patterns-title">
        <SectionHeading id="patterns-title" eyebrow="Common patterns" title="What could be causing it?" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <li key={c.slug}>
              <ConditionCard c={c} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="soft" labelledBy="why-title">
        <SectionHeading id="why-title" eyebrow="Why diagnosis matters" title={<>The cause comes <span className="text-gold">first</span></>} />
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-stone">
          {why.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-12">
          <StepTimeline steps={DIAGNOSIS_STEPS} />
        </div>
      </Section>

      <Section labelledBy="tx-title">
        <SectionHeading id="tx-title" eyebrow="Treatments" title="Options we may discuss" intro={<>Depending on your diagnosis. {RX_SENTENCE}</>} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t) => (
            <li key={t.slug}>
              <TreatmentCard t={t} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="soft" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Your questions" />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
