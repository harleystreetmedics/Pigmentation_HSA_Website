import Link from "next/link";
import { ConditionCard, FaqAccordion, StepTimeline, TreatmentCard } from "@/components/cards";
import { Icon } from "@/components/Icon";
import { AiAnalysisCard, BookingCalendar, ClinicsSection, CtaBand, ReviewsSection, SkinCheckNotice, TeamGrid } from "@/components/sections";
import { SkinToneArt } from "@/components/SkinToneArt";
import { Button, CheckList, Disclaimer, JsonLd, Section, SectionHeading } from "@/components/ui";
import { CONDITIONS, DIAGNOSIS_STEPS, PATTERNS, RX_SENTENCE } from "@/lib/conditions";
import { GENERAL_FAQS } from "@/lib/faqs";
import { clinicsSchema, consultationSchema, faqSchema, treatmentsListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Pigmentation Treatment London & Glasgow | Harley Street Aesthetics",
  description:
    "Doctor-led pigmentation treatment in London and Glasgow for melasma, sun spots, acne marks and uneven tone, for all skin tones. Free online consultation and free AI analysis. Results vary.",
  path: "/",
});

const HOME_FAQS = GENERAL_FAQS.slice(0, 6);

export default function Home() {
  return (
    <>
      <JsonLd data={[...clinicsSchema(), consultationSchema(), treatmentsListSchema(TREATMENTS), faqSchema(HOME_FAQS)]} />

      <section className="relative overflow-hidden bg-black-rich text-white" aria-labelledby="hero-title">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 opacity-80 lg:block">
          <SkinToneArt className="h-full w-full" swatches={false} />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/90 to-black-rich/10" />
        <div className="container-x relative pt-16 pb-14 sm:pt-24 lg:pt-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              <Icon name="sparkle" className="h-4 w-4" /> Doctor-led pigmentation clinic
            </p>
            <h1 id="hero-title" className="mt-7 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
              Pigmentation treatment in <span className="text-gold">London</span> &amp; <span className="text-gold">Glasgow</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed font-light text-white/85 sm:text-xl">
              Melasma, sun spots, marks after acne and uneven tone each behave differently. We start by understanding your type of
              pigmentation and your skin, then plan treatment for a clearer, more even-looking complexion at your natural skin tone.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/book/">Book consultation</Button>
              <Button href={BRAND.aiAnalysisUrl} variant="outline">
                Free AI pigmentation analysis
              </Button>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-y border-white/10 py-8 sm:mt-24 sm:py-10 lg:grid-cols-4">
            {[
              ["All skin tones", "Assessed with care"],
              ["Type first", "Our approach"],
              ["Free", "Online consultation"],
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
          eyebrow="Find your pigmentation type"
          title={<>What are you <span className="text-gold">noticing</span>?</>}
          intro="Choose what sounds most like your skin to read about common types and causes. This isn't a diagnosis; your practitioner confirms what's going on."
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
          <Link href="/which-treatment/" className="group flex items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-7 hover:border-gold">
            <span>
              <span className="block font-serif text-2xl text-cream">Which treatment is right for me?</span>
              <span className="mt-2 block text-sm text-stone">Six quick questions. Nothing you enter is stored.</span>
            </span>
            <Icon name="arrow" className="h-6 w-6 shrink-0 text-gold" />
          </Link>
          <Link href="/pigmentation-in-darker-skin/" className="group flex items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-7 hover:border-gold">
            <span>
              <span className="block font-serif text-2xl text-cream">Pigmentation in darker skin</span>
              <span className="mt-2 block text-sm text-stone">Why darker skin needs a careful approach, and how we choose treatment.</span>
            </span>
            <Icon name="arrow" className="h-6 w-6 shrink-0 text-gold" />
          </Link>
        </div>
        <SkinCheckNotice className="mt-10" />
      </Section>

      <Section labelledBy="conditions-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="conditions-title" eyebrow="Conditions" title={<>Every pigmentation concern, <span className="text-gold">assessed</span></>} />
          <Button href="/conditions/" variant="outline" className="mb-10 shrink-0 sm:mb-12">
            All concerns
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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="treatments-title"
            eyebrow="Treatments"
            title={<>Options we may <span className="text-gold">discuss</span></>}
            intro={<>Your options depend on your type of pigmentation and your skin. {RX_SENTENCE}</>}
          />
          <Button href="/treatments/" variant="outline" className="mb-10 shrink-0 sm:mb-12">
            All treatments
          </Button>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.slice(0, 8).map((t) => (
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
          title={<>Know your type <span className="text-gold">first</span></>}
          intro="Treating pigmentation without knowing its type can make some kinds worse. Every plan starts with an assessment."
        />
        <StepTimeline steps={DIAGNOSIS_STEPS} />
        <Button href="/diagnosis/" variant="outline" className="mt-12">
          More about diagnosis
        </Button>
        <AiAnalysisCard className="mt-10" />
      </Section>

      <section aria-labelledby="soc-title" className="relative overflow-hidden border-t border-white/5 bg-ink py-16 text-white sm:py-20 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold">Skin of colour</p>
            <h2 id="soc-title" className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Careful choices for <span className="text-gold">every skin tone</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Pigment cells in darker skin react more strongly to heat and irritation. Some lasers, light treatments and stronger peels
              carry a higher risk of making pigmentation worse, and IPL isn&rsquo;t suitable for darker skin types. We assess your skin
              type first, choose and adjust treatment for it, and recommend a patch test where it helps.
            </p>
            <Button href="/pigmentation-in-darker-skin/" variant="outline" className="mt-9">
              Pigmentation in darker skin
            </Button>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-gold/20 bg-card">
              <SkinToneArt className="aspect-[6/7] w-full" />
            </div>
          </div>
        </div>
      </section>

      <Section tone="soft" labelledBy="results-title">
        <SectionHeading
          id="results-title"
          eyebrow="Results"
          title={<>Honest about <span className="text-gold">results</span></>}
          intro="Changes are gradual and vary between people. Sun spots and marks after spots often fade well with sun protection; melasma is long-term and can return, so it needs maintenance. We'll only ever show real patient photos with written consent."
        />
        <Button href="/results/" variant="outline">
          About results
        </Button>
      </Section>

      <Section labelledBy="team-title">
        <SectionHeading
          id="team-title"
          eyebrow="Our team"
          title={<>Planned by our <span className="text-gold">medical team</span></>}
          intro="Pigmentation treatment at Harley Street Aesthetics is doctor-led and medically supervised by our GMC-registered team."
        />
        <TeamGrid limit={3} />
      </Section>

      <Section tone="soft" labelledBy="pricing-title">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="pricing-title"
              eyebrow="Pricing"
              title={<>Clear pricing, agreed <span className="text-gold">upfront</span></>}
              intro="Guide prices. Your plan and its cost are confirmed after your consultation, before any treatment starts."
              className="mb-6!"
            />
            <CheckList
              items={[
                <>Online consultation: free. In-clinic consultation: £195, redeemable against treatment</>,
                <>
                  Signature Pigmentation Protocol: from £399, or £1,299 for four sessions
                </>,
                <>Chemical peels from £149, VI Peel £595, Cosmelan £995</>,
                <>0% finance options, subject to status</>,
              ]}
            />
          </div>
          <div className="lg:col-span-5">
            <Button href="/pricing/" variant="outline">
              View all prices
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
            <CheckList items={["Free 15-minute online consultation", "Assessment by our medical team", "No-obligation discussion"]} />
            <Button href="/book/" variant="outline" className="mt-8">
              Prefer a call back?
            </Button>
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
