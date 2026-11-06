import { FaqAccordion } from "@/components/cards";
import { CtaBand, SkinCheckNotice } from "@/components/sections";
import { Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS } from "@/lib/conditions";
import { GENERAL_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { TREATMENTS } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Pigmentation FAQ",
  description:
    "Answers to common questions about pigmentation assessment and treatment at Harley Street Aesthetics in London and Glasgow: skin types, results, costs and safety.",
  path: "/faq/",
});

const CONDITION_FAQS = CONDITIONS.slice(0, 8).map((c) => c.faqs[0]);
const TREATMENT_FAQS = TREATMENTS.flatMap((t) => t.faqs.slice(0, 1));

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema([...GENERAL_FAQS, ...CONDITION_FAQS, ...TREATMENT_FAQS])} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Can't find your answer? Book a consultation or call your nearest clinic."
        crumbs={[{ name: "FAQ", path: "/faq/" }]}
      />
      <Section labelledBy="general-title">
        <SectionHeading id="general-title" eyebrow="General" title="Pigmentation and consultations" />
        <FaqAccordion faqs={GENERAL_FAQS} />
      </Section>
      <Section tone="soft" labelledBy="cond-title">
        <SectionHeading id="cond-title" eyebrow="Conditions" title="About types of pigmentation" />
        <FaqAccordion faqs={CONDITION_FAQS} />
      </Section>
      <Section labelledBy="tx-title">
        <SectionHeading id="tx-title" eyebrow="Treatments" title="About our treatments" />
        <FaqAccordion faqs={TREATMENT_FAQS} />
        <SkinCheckNotice className="mt-12" />
        <Disclaimer className="mt-6" />
      </Section>
      <CtaBand />
    </>
  );
}
