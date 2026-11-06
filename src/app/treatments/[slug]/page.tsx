import { notFound } from "next/navigation";
import { FactStrip, FaqAccordion, RiskList, StepTimeline } from "@/components/cards";
import { FollicleArt } from "@/components/FollicleArt";
import { Icon } from "@/components/Icon";
import { CtaBand, RelatedLinks } from "@/components/sections";
import { Button, CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS, RX_SENTENCE } from "@/lib/conditions";
import { faqSchema, treatmentSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { TREATMENTS, treatmentBySlug } from "@/lib/treatments";

export const dynamicParams = false;

const plainName = (t: { shortName: string; name: string }) => (t.shortName === "PRP" ? "PRP" : t.name.toLowerCase());

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/treatments/[slug]">) {
  const t = treatmentBySlug((await params).slug);
  if (!t) return {};
  return pageMetadata({ title: t.metaTitle, description: t.metaDescription, path: `/treatments/${t.slug}/` });
}

export default async function TreatmentPage({ params }: PageProps<"/treatments/[slug]">) {
  const t = treatmentBySlug((await params).slug);
  if (!t) notFound();
  const forConditions = CONDITIONS.filter((c) => c.treatments.includes(t.slug));
  const others = TREATMENTS.filter((x) => x.slug !== t.slug);

  return (
    <>
      <JsonLd data={[treatmentSchema(t), faqSchema(t.faqs)]} />
      <PageHero
        eyebrow="Hair loss treatment"
        title={t.name}
        intro={t.summary}
        crumbs={[
          { name: "Treatments", path: "/treatments/" },
          { name: t.name, path: `/treatments/${t.slug}/` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href="/pricing/" variant="outline">
            View pricing
          </Button>
        </div>
      </PageHero>

      <section className="border-t border-white/5 bg-black-rich">
        <div className="container-x py-4">
          <FactStrip facts={t.facts} />
        </div>
      </section>

      {t.evidenceNote && (
        <div className="bg-black-rich">
          <div className="container-x">
            <div className="flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-6 text-cream">
              <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <p className="leading-relaxed">{t.evidenceNote}</p>
            </div>
          </div>
        </div>
      )}

      <Section labelledBy="what-title">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id="what-title" eyebrow="How it works" title={<>What is {plainName(t)}?</>} />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              {[...t.intro, ...t.howItWorks].map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                Hair grows slowly. Any change usually builds over 3–6 months as the hair cycle progresses, and a course is often followed by
                maintenance sessions every few months. Results vary and are not guaranteed.
              </p>
              <p>{RX_SENTENCE}</p>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="overflow-hidden rounded-3xl border border-gold/20 bg-card shadow-card">
              <FollicleArt className="aspect-[4/5] w-full" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="suit-title">
        <SectionHeading
          id="suit-title"
          eyebrow="Suitability"
          title={<>Is it right for <span className="text-gold">you</span>?</>}
          intro="Suitability is assessed at consultation by a qualified practitioner, based on your diagnosis, medical history and goals."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-7 shadow-card">
            <h3 className="font-sans text-base font-semibold">It may suit</h3>
            <div className="mt-4">
              <CheckList items={t.maySuit} />
            </div>
          </div>
          <div className="rounded-2xl bg-card p-7 shadow-card">
            <h3 className="font-sans text-base font-semibold">It may not suit</h3>
            <div className="mt-4">
              <CheckList items={t.mayNotSuit} tone="x" />
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="day-title">
        <SectionHeading id="day-title" eyebrow="On the day" title="What to expect" />
        <StepTimeline steps={t.onTheDay} />
        <div className="mt-12 rounded-2xl border border-cream/10 bg-card p-7">
          <h3 className="font-sans text-base font-semibold text-cream">Aftercare</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone">
            {t.aftercare.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="soft" labelledBy="risks-title">
        <SectionHeading
          id="risks-title"
          eyebrow="Safety"
          title={<>Risks &amp; side <span className="text-gold">effects</span></>}
          intro="All treatments carry some risk. Your practitioner will explain these, and any others relevant to you, before you decide."
        />
        <RiskList risks={t.risks} />
      </Section>

      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title={<>{t.shortName}: your questions</>} />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={t.faqs} />
          </div>
        </div>
        {forConditions.length > 0 && (
          <RelatedLinks title="Conditions it may be discussed for" links={forConditions.map((c) => ({ href: `/conditions/${c.slug}/`, label: c.shortName }))} />
        )}
        <RelatedLinks title="Other treatments" links={others.map((o) => ({ href: `/treatments/${o.slug}/`, label: o.name }))} />
        <Disclaimer className="mt-12" />
      </Section>

      <CtaBand title={`Is ${plainName(t)} right for you?`} />
    </>
  );
}
