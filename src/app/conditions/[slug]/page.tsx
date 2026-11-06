import { notFound } from "next/navigation";
import { FaqAccordion, StepTimeline, TreatmentCard } from "@/components/cards";
import { Icon } from "@/components/Icon";
import { CtaBand, RelatedLinks } from "@/components/sections";
import { Button, CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS, conditionBySlug } from "@/lib/conditions";
import { conditionSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { treatmentBySlug, type Treatment } from "@/lib/treatments";

export const dynamicParams = false;

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conditions/[slug]">) {
  const c = conditionBySlug((await params).slug);
  if (!c) return {};
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/conditions/${c.slug}/` });
}

export default async function ConditionPage({ params }: PageProps<"/conditions/[slug]">) {
  const c = conditionBySlug((await params).slug);
  if (!c) notFound();
  const treatments = c.treatments.map(treatmentBySlug).filter((t): t is Treatment => Boolean(t));
  const related = c.related.map(conditionBySlug).filter((x) => x !== undefined);

  return (
    <>
      <JsonLd data={[conditionSchema(c, treatments), faqSchema(c.faqs)]} />
      <PageHero
        eyebrow={c.audience === "men" ? "Hair loss in men" : c.audience === "women" ? "Hair loss in women" : "Hair loss condition"}
        title={c.name}
        intro={c.summary}
        crumbs={[
          { name: "Conditions", path: "/conditions/" },
          { name: c.shortName, path: `/conditions/${c.slug}/` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href="/which-treatment/" variant="outline">
            Which treatment is right for me?
          </Button>
        </div>
      </PageHero>

      <Section labelledBy="about-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="about-title" eyebrow="Overview" title={<>About {c.shortName.toLowerCase()}</>} />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              {c.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl bg-card p-7 shadow-card">
              <h3 className="font-sans text-base font-semibold text-cream">What you may notice</h3>
              <div className="mt-4">
                <CheckList items={c.symptoms} />
              </div>
            </div>
            {c.urgent && (
              <div className="flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-6 text-cream">
                <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <p className="text-sm leading-relaxed">{c.urgent}</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="causes-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="causes-title" eyebrow="Causes" title="Common causes" className="mb-8!" />
            <CheckList items={c.causes} />
          </div>
          <div>
            <SectionHeading id="assess-title" eyebrow="Diagnosis" title="How we assess it" className="mb-8!" />
            <CheckList items={c.assessment} />
          </div>
        </div>
      </Section>

      <Section labelledBy="options-title">
        <SectionHeading
          id="options-title"
          eyebrow={c.referral ? "Referral" : "Treatment options"}
          title={c.referral ? "Specialist diagnosis and referral" : "Options we may discuss"}
          intro="Every plan depends on your diagnosis and individual assessment. Results vary."
        />
        {c.referral && (
          <div className="mb-8 rounded-2xl border border-gold/30 bg-card p-7 text-lg leading-relaxed text-stone">{c.referral}</div>
        )}
        {treatments.length > 0 && (
          <ul className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => (
              <li key={t.slug}>
                <TreatmentCard t={t} />
              </li>
            ))}
          </ul>
        )}
        {c.options.length > 0 && <CheckList items={c.options} />}
        {related.length > 0 && (
          <RelatedLinks title="Related conditions" links={related.map((r) => ({ href: `/conditions/${r.slug}/`, label: r.shortName }))} />
        )}
      </Section>

      <Section tone="soft" labelledBy="journey-title">
        <SectionHeading id="journey-title" eyebrow="Your visit" title="What happens next" />
        <StepTimeline
          steps={[
            { title: "Book", text: "Request a consultation at our London or Glasgow clinic." },
            { title: "Assessment", text: "We look at your scalp and talk through your history." },
            { title: "Plan", text: "We explain your options, costs and what is realistic." },
            { title: "Review", text: "If you go ahead, we review your progress over time." },
          ]}
        />
      </Section>

      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title={<>{c.shortName}: your questions</>} />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={c.faqs} />
          </div>
        </div>
        <Disclaimer className="mt-12" />
      </Section>

      <CtaBand />
    </>
  );
}
