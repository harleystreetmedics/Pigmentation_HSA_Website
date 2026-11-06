import { ConditionCard, StepTimeline, TreatmentCard } from "./cards";
import { Icon } from "./Icon";
import { ClinicCards, CtaBand, ContactLinks } from "./sections";
import { Button, Disclaimer, JsonLd, PageHero, Section, SectionHeading, Tbc } from "./ui";
import { CONDITIONS, DIAGNOSIS_STEPS, RX_SENTENCE } from "@/lib/conditions";
import { clinicSchema } from "@/lib/schema";
import { CLINICS, type ClinicId } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";

export function LocationPage({ id }: { id: ClinicId }) {
  const c = CLINICS[id];
  const a = c.addresses[0];
  return (
    <>
      <JsonLd data={clinicSchema(c)} />
      <PageHero
        eyebrow={`${c.city} clinic`}
        title={`Hair loss clinic in ${c.city}`}
        intro={`Clinician-led hair loss assessment and non-surgical treatment for men and women at our ${c.city} clinic, ${a.line1}${a.line2 ? `, ${a.line2}` : ""}.`}
        crumbs={[{ name: c.city, path: `/${c.id}/` }]}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href={c.phone.href} variant="outline">
            Call {c.phone.display}
          </Button>
        </div>
      </PageHero>

      <Section labelledBy="visit-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="visit-title" eyebrow="Visit us" title={<>Our {c.city} <span className="text-gold">clinic</span></>} className="mb-8!" />
            <ul className="space-y-4 text-stone">
              {c.addresses.map((ad) => (
                <li key={ad.line1} className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>
                    {ad.line1}
                    {ad.line2 && `, ${ad.line2}`}, {ad.locality} {ad.postcode}
                    {ad.tbc && (
                      <>
                        <br />
                        <Tbc>{ad.tbc}</Tbc>
                      </>
                    )}
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {c.hours}
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href={c.phone.href} className="font-semibold text-cream hover:text-gold">
                  {c.phone.display}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <ContactLinks />
            </div>
          </div>
          <div className="lg:col-span-7">
            <iframe
              title={`Map of our ${c.city} clinic`}
              src={c.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-96 w-full rounded-3xl border border-cream/10 lg:h-full lg:min-h-[480px]"
            />
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="tx-title">
        <SectionHeading
          id="tx-title"
          eyebrow={`Hair loss treatment ${c.city}`}
          title="Options we may discuss"
          intro={<>After your assessment in {c.city}, we&rsquo;ll explain which options may suit you. {RX_SENTENCE}</>}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t) => (
            <li key={t.slug}>
              <TreatmentCard t={t} />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="cond-title">
        <SectionHeading id="cond-title" eyebrow="Conditions" title={`Hair loss we assess in ${c.city}`} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.slice(0, 6).map((x) => (
            <li key={x.slug}>
              <ConditionCard c={x} />
            </li>
          ))}
        </ul>
        <Button href="/conditions/" variant="outline" className="mt-10">
          All conditions
        </Button>
      </Section>

      <Section tone="soft" labelledBy="steps-title">
        <SectionHeading id="steps-title" eyebrow="Your visit" title="How it works" />
        <StepTimeline steps={DIAGNOSIS_STEPS} />
      </Section>

      <Section labelledBy="both-title">
        <SectionHeading id="both-title" eyebrow="Our clinics" title="London and Glasgow" />
        <ClinicCards />
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
