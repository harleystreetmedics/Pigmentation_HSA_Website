import { StepTimeline } from "@/components/cards";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections";
import { Button, CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { DIAGNOSIS_STEPS, RX_SENTENCE } from "@/lib/conditions";
import { consultationSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hair Loss Consultation & Scalp Assessment",
  description:
    "How we diagnose hair loss at our London and Glasgow clinics: consultation, scalp assessment, blood tests when clinically indicated, and referral where needed.",
  path: "/diagnosis/",
});

export default function DiagnosisPage() {
  return (
    <>
      <JsonLd data={consultationSchema()} />
      <PageHero
        eyebrow="Diagnosis"
        title="Hair loss consultation and scalp assessment"
        intro="Hair loss needs an individual plan. Understanding what's contributing to yours helps us recommend suitable care, or refer you if something else needs attention first."
        crumbs={[{ name: "Diagnosis", path: "/diagnosis/" }]}
      >
        <div className="mt-9">
          <Button href="/book/">Book consultation</Button>
        </div>
      </PageHero>

      <Section labelledBy="steps-title">
        <SectionHeading id="steps-title" eyebrow="Your assessment" title={<>How diagnosis <span className="text-gold">works</span></>} />
        <StepTimeline steps={DIAGNOSIS_STEPS} />
      </Section>

      <Section tone="soft" labelledBy="consult-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="consult-title" eyebrow="Step 1" title="Your consultation" className="mb-8!" />
            <p className="mb-6 text-lg leading-relaxed text-stone">We&rsquo;ll ask about:</p>
            <CheckList
              items={[
                "When your hair loss started and how it has changed",
                "Where you're noticing it, and whether it's shedding, thinning or patches",
                "Your general health, recent illness, stress, diet and weight changes",
                "Pregnancy, periods or menopause, where relevant",
                "Medicines and supplements you take",
                "Family history of hair loss",
                "What you'd like to achieve",
              ]}
            />
            <p className="mt-6 text-sm text-stone">
              Your online consultation is free and you can book it directly in our calendar. Every treatment also includes a comprehensive
              consultation, and a standalone in-clinic consultation with a GMC-registered doctor is £295.
            </p>
          </div>
          <div>
            <SectionHeading id="scalp-title" eyebrow="Step 2" title="Scalp assessment" className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                Your practitioner looks closely at your scalp and hair: the pattern and density of thinning, the condition of the scalp skin,
                and signs that point to a particular cause.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="tests-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="tests-title" eyebrow="Step 3" title="Blood tests when indicated" className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                If your history suggests something like a thyroid problem, low iron or another deficiency could be contributing, blood tests
                may be recommended. These can be arranged by us or through your GP.
              </p>
              <p>
                Our comprehensive blood test checks more than 50 biomarkers, with results reviewed by a qualified doctor. It costs £295
                and results are usually ready within 24–48 hours.
              </p>
              <p>Nutritional support may be discussed when clinically indicated. Vitamin drips are not a proven general treatment for hair loss.</p>
            </div>
          </div>
          <div>
            <SectionHeading id="plan-title" eyebrow="Step 4" title="Your plan" className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                We&rsquo;ll explain what we think is contributing to your hair loss, the options that may suit you, what&rsquo;s realistic, and
                the cost, before you decide anything.
              </p>
              <p>{RX_SENTENCE}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="referral-title">
        <SectionHeading id="referral-title" eyebrow="When we refer" title="Sometimes the right step is a referral" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-7 shadow-card">
            <h3 className="font-sans text-base font-semibold text-cream">We may refer you to your GP or a specialist if</h3>
            <div className="mt-4">
              <CheckList
                items={[
                  "Your hair loss is sudden, patchy or worsening quickly",
                  "Your scalp is red, scaly, painful or scarred",
                  "You have other symptoms that suggest a medical cause",
                  "You may have a condition that needs specialist dermatology care",
                ]}
              />
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-7 text-cream">
            <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <p className="leading-relaxed">
              Sudden or patchy hair loss should always be medically assessed. If you feel unwell, please contact your GP or NHS 111. In an
              emergency, call 999.
            </p>
          </div>
        </div>
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
