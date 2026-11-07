import { StepTimeline } from "@/components/cards";
import { AiAnalysisCard, CtaBand, SkinCheckNotice } from "@/components/sections";
import { Button, CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading, Tbc } from "@/components/ui";
import { DIAGNOSIS_STEPS, RX_SENTENCE } from "@/lib/conditions";
import { consultationSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CONSULTATIONS } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pigmentation Consultation & Skin Assessment",
  description:
    "How we assess pigmentation in London and Glasgow: free AI analysis, free online consultation, 3D skin analysis, skin typing, a skin check and a personal plan.",
  path: "/diagnosis/",
});

export default function DiagnosisPage() {
  return (
    <>
      <JsonLd data={consultationSchema()} />
      <PageHero
        eyebrow="Diagnosis"
        title="Pigmentation consultation and skin assessment"
        intro="Different types of pigmentation sit at different depths and respond differently to treatment. Some can be made worse by the wrong approach. That's why every plan starts with an assessment."
        crumbs={[{ name: "Diagnosis", path: "/diagnosis/" }]}
      >
        <div className="mt-9">
          <Button href="/book/">Book consultation</Button>
        </div>
      </PageHero>

      <Section labelledBy="steps-title">
        <SectionHeading id="steps-title" eyebrow="Your assessment" title={<>How diagnosis <span className="text-gold">works</span></>} />
        <StepTimeline steps={DIAGNOSIS_STEPS} />
        <AiAnalysisCard className="mt-12" />
      </Section>

      <Section tone="soft" labelledBy="consult-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="consult-title" eyebrow="Consultation" title="What we'll ask about" className="mb-8!" />
            <CheckList
              items={[
                "When the pigmentation started and how it has changed",
                "Where it is, and whether it gets darker in summer",
                "Pregnancy, hormonal contraception or hormone treatment",
                "Medicines and supplements you take",
                "Your skincare, sun exposure and any previous treatments",
                "Any history of darkening after spots, waxing or procedures",
                "What you'd like to achieve",
              ]}
            />
          </div>
          <div>
            <SectionHeading id="options-title" eyebrow="Your options" title="Consultations" className="mb-8!" />
            <ul className="space-y-4">
              {[
                { name: "Online consultation", ...CONSULTATIONS.online },
                { name: "In-clinic consultation", ...CONSULTATIONS.inClinic },
                { name: "3D skin analysis", ...CONSULTATIONS.skinAnalysis },
              ].map((o) => (
                <li key={o.name} className="rounded-2xl border border-cream/10 bg-card p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl text-cream">{o.name}</h3>
                    <span className="font-serif text-2xl text-gold">{o.price}</span>
                  </div>
                  <p className="mt-1 text-xs tracking-[0.15em] text-stone uppercase">{o.time}</p>
                  <p className="mt-2 text-sm text-stone">{o.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="check-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="check-title" eyebrow="Skin check" title="Making sure it's safe to treat" className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                Cosmetic pigmentation treatment is only for flat pigmentation that a clinician has assessed as suitable. Your practitioner
                looks at the pattern, edges and colour of your pigmentation, sometimes with a magnifying light, and asks how marks have
                changed.
              </p>
              <p>
                If a mark is new, changing, raised, irregular, bleeding or itchy, we won&rsquo;t treat it cosmetically. We&rsquo;ll advise you
                to see your GP or a dermatologist first.
              </p>
              <p>
                <Tbc>whether a Wood&rsquo;s lamp or dermatoscope is used at consultation</Tbc>
              </p>
            </div>
          </div>
          <div>
            <SectionHeading id="type-title" eyebrow="Skin typing" title="Your skin type matters" className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                We assess your skin type (often described on the Fitzpatrick scale, from I to VI) and how your skin has reacted to spots,
                waxing or treatments in the past. This guides which treatments are suitable and how strong they should be.
              </p>
              <p>
                Where it helps, we recommend a patch test before your first full treatment, to see how your skin responds. A patch test is{" "}
                {CONSULTATIONS.patchTest.price}. A patch test may be advised before treatments such as the Signature Protocol, peels, IPL or a carbon laser facial, particularly for darker or sensitive skin. <Tbc>whether the £50 patch test is redeemable against treatment</Tbc>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="plan-title">
        <SectionHeading id="plan-title" eyebrow="Your plan" title="A plan you understand" />
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-stone">
          <p>
            We&rsquo;ll explain what type of pigmentation we think is present, which options may suit you, what&rsquo;s realistic, how long
            it may take, and the cost, before you decide anything. Some types are managed rather than cured, and we&rsquo;ll say so.
          </p>
          <p>{RX_SENTENCE}</p>
          <p>{CONSULTATIONS.deposit}</p>
        </div>
        <SkinCheckNotice className="mt-10" />
        <Disclaimer className="mt-6" />
      </Section>
      <CtaBand />
    </>
  );
}
