import { FaqAccordion } from "@/components/cards";
import { CtaBand } from "@/components/sections";
import { Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { GENERAL_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { TREATMENTS } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Hair Loss FAQ",
  description:
    "Answers to common questions about hair loss assessment and treatment at Harley Street Medical Wellness in London and Glasgow, including PRP, results and costs.",
  path: "/faq/",
});

const TREATMENT_FAQS = TREATMENTS.flatMap((t) => t.faqs.slice(0, 2));

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema([...GENERAL_FAQS, ...TREATMENT_FAQS])} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Can't find your answer? Book a consultation or call your nearest clinic."
        crumbs={[{ name: "FAQ", path: "/faq/" }]}
      />
      <Section labelledBy="general-title">
        <SectionHeading id="general-title" eyebrow="General" title="Hair loss and consultations" />
        <FaqAccordion faqs={GENERAL_FAQS} />
      </Section>
      <Section tone="soft" labelledBy="tx-title">
        <SectionHeading id="tx-title" eyebrow="Treatments" title="About our treatments" />
        <FaqAccordion faqs={TREATMENT_FAQS} />
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
