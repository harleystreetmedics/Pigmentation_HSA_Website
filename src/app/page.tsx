import Link from "next/link";
import { ConditionCard, FaqAccordion, StepTimeline, TreatmentCard } from "@/components/cards";
import { FollicleArt } from "@/components/FollicleArt";
import { Icon } from "@/components/Icon";
import { BookingCalendar, ClinicsSection, CtaBand, ReviewsSection, TeamGrid } from "@/components/sections";
import { Button, CheckList, Disclaimer, JsonLd, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS, DIAGNOSIS_STEPS, PATTERNS, RX_SENTENCE } from "@/lib/conditions";
import { GENERAL_FAQS } from "@/lib/faqs";
import { clinicsSchema, consultationSchema, faqSchema, treatmentsListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { TREATMENTS } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Hair Loss Treatment London & Glasgow | Harley Street Medical Wellness",
  description:
    "Clinician-led hair loss assessment and non-surgical treatment for men and women in London and Glasgow. We look for the cause first, then talk through options such as PRP. Results vary.",
  path: "/",
});

const HOME_FAQS = GENERAL_FAQS.slice(0, 6);

export default function Home() {
  return (
    <>
      <JsonLd data={[...clinicsSchema(), consultationSchema(), treatmentsListSchema(TREATMENTS), faqSchema(HOME_FAQS)]} />

      <section className="relative overflow-hidden bg-black-rich text-white" aria-labelledby="hero-title">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block">
          <FollicleArt className="h-full w-full" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/90 to-black-rich/20" />
        <div className="container-x relative pt-16 pb-14 sm:pt-24 lg:pt-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              <Icon name="sparkle" className="h-4 w-4" /> Clinician-led hair loss clinic
            </p>
            <h1 id="hero-title" className="mt-7 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              Hair loss treatment in <span className="text-gold">London</span> &amp; <span className="text-gold">Glasgow</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed font-light text-white/85 sm:text-xl">
              More shedding, a wider parting or a changing hairline can have different causes. We start by understanding yours, then talk
              you through options that may suit you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/book/">Book consultation</Button>
              <Button href="/which-treatment/" variant="outline">
                Which treatment is right for me?
              </Button>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-y border-white/10 py-8 sm:mt-24 sm:py-10 lg:grid-cols-4">
            {[
              ["Men & women", "Who we see"],
              ["Cause first", "Our approach"],
              ["Non-surgical", "Treatment options"],
              ["2 clinics", "London & Glasgow"],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col-reverse items-center text-center">
                <dt className="mt-2 text-[0.7rem] tracking-[0.2em] text-stone uppercase">{l}</dt>
                <dd className="font-serif text-2xl text-gold sm:text-3xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section tone="soft" labelledBy="type-title">
        <SectionHeading
          id="type-title"
          eyebrow="Find your hair loss type"
          title={<>What are you <span className="text-gold">noticing</span>?</>}
          intro="Choose what sounds most like you to learn about common causes. This isn't a diagnosis; your practitioner will confirm what's going on."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PATTERNS.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-cream/10 bg-card p-6 transition hover:border-gold/60">
                <span>
                  <span className="block font-serif text-xl text-cream">{p.label}</span>
                  <span className="mt-1 block text-sm text-stone">{p.text}</span>
                </span>
                <Icon name="arrow" className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            { href: "/hair-loss-in-men/", t: "Hair loss in men", d: "Receding hairline, crown thinning, patchy beard and more." },
            { href: "/hair-loss-in-women/", t: "Hair loss in women", d: "Wider parting, shedding after pregnancy, menopause changes and more." },
          ].map((x) => (
            <Link key={x.href} href={x.href} className="group flex items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-7 hover:border-gold">
              <span>
                <span className="block font-serif text-2xl text-cream">{x.t}</span>
                <span className="mt-2 block text-sm text-stone">{x.d}</span>
              </span>
              <Icon name="arrow" className="h-6 w-6 shrink-0 text-gold" />
            </Link>
          ))}
        </div>
      </Section>

      <Section labelledBy="conditions-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="conditions-title" eyebrow="Conditions" title={<>Every type of hair loss, <span className="text-gold">assessed</span></>} />
          <Button href="/conditions/" variant="outline" className="mb-10 shrink-0 sm:mb-12">
            All conditions
          </Button>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.slice(0, 9).map((c) => (
            <li key={c.slug}>
              <ConditionCard c={c} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="soft" labelledBy="treatments-title">
        <SectionHeading
          id="treatments-title"
          eyebrow="Treatments"
          title={<>Options we may <span className="text-gold">discuss</span></>}
          intro={<>Your options depend on your diagnosis. {RX_SENTENCE}</>}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t) => (
            <li key={t.slug}>
              <TreatmentCard t={t} />
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="diagnosis-title">
        <SectionHeading
          id="diagnosis-title"
          eyebrow="How diagnosis works"
          title={<>Start with the <span className="text-gold">cause</span></>}
          intro="Treating hair loss without knowing the cause can waste time and money. Every plan starts with an assessment."
        />
        <StepTimeline steps={DIAGNOSIS_STEPS} />
        <Button href="/diagnosis/" variant="outline" className="mt-12">
          More about diagnosis
        </Button>
      </Section>

      <Section tone="soft" labelledBy="results-title">
        <SectionHeading
          id="results-title"
          eyebrow="Results"
          title={<>Honest about <span className="text-gold">results</span></>}
          intro="Hair grows slowly, so changes usually take 3–6 months to judge, and results vary between people. We'll only ever show real patient photos with written consent."
        />
        <Button href="/results/" variant="outline">
          About results
        </Button>
      </Section>

      <Section labelledBy="team-title">
        <SectionHeading
          id="team-title"
          eyebrow="Our team"
          title={<>Assessed by qualified <span className="text-gold">practitioners</span></>}
          intro={
            <>
              Your consultation is with a member of our GMC-registered medical team, led by our Medical Director, Dr Ahmad.
            </>
          }
        />
        <TeamGrid />
      </Section>

      <Section tone="soft" labelledBy="pricing-title">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="pricing-title"
              eyebrow="Pricing"
              title={<>Clear pricing, agreed <span className="text-gold">upfront</span></>}
              intro="Your plan and its cost are confirmed in writing after your consultation, before any treatment starts."
              className="mb-6!"
            />
            <CheckList
              items={[
                <>Consultation: free online, or £295 for a standalone in-clinic consultation</>,
                <>PRP: from £399 a session, or £1,099 for a course of 3</>,
                <>Autologous exosomes: from £599 a session, or £1,599 for a course of 3</>,
                              ]}
            />
          </div>
          <div className="lg:col-span-5">
            <Button href="/pricing/" variant="outline">
              View pricing
            </Button>
          </div>
        </div>
      </Section>

      
      <ReviewsSection />

      <Section tone="soft" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title={<>Common <span className="text-gold">questions</span></>} />
            <Button href="/faq/" variant="outline">
              All FAQs
            </Button>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={HOME_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand />

      <Section id="book" tone="soft" labelledBy="book-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              id="book-title"
              eyebrow="Book a consultation"
              title={<>Secure your <span className="text-gold">consultation</span></>}
              intro="Choose a time that suits you for your free online consultation. There's no obligation to go ahead with treatment."
            />
            <CheckList
              items={["Priority booking access", "Direct specialist assessment", "No-obligation discussion"]}
            />
          </div>
          <div className="lg:col-span-8">
            <BookingCalendar />
          </div>
        </div>
      </Section>

      <ClinicsSection />
      <div className="bg-black-rich pb-16">
        <div className="container-x">
          <Disclaimer />
        </div>
      </div>
    </>
  );
}
