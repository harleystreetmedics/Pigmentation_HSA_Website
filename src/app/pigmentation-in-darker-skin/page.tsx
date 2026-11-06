import Link from "next/link";
import { FaqAccordion, TreatmentCard } from "@/components/cards";
import { CtaBand, SkinCheckNotice } from "@/components/sections";
import { SkinToneArt } from "@/components/SkinToneArt";
import { Button, CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import type { Faq } from "@/lib/faqs";
import { RX_SENTENCE } from "@/lib/conditions";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { treatmentBySlug, type Treatment } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Pigmentation Treatment for Darker Skin Tones",
  description:
    "Pigmentation treatment for medium, brown and black skin at Harley Street Aesthetics London and Glasgow: the risks, the safer options, and why your skin type is assessed first.",
  path: "/pigmentation-in-darker-skin/",
});

const FAQS: Faq[] = [
  {
    q: "Can pigmentation be treated in black and brown skin?",
    a: "Yes, in many cases, with the right approach. Darker skin needs particular care because it reacts more strongly to heat and irritation. Your clinician chooses and adjusts treatment for your skin and will tell you if something isn't suitable.",
  },
  {
    q: "Why isn't IPL suitable for darker skin?",
    a: "The light is absorbed by the melanin in the surrounding skin as well as by the dark spot, which raises the risk of burns and new lighter or darker patches. IPL isn't used for Fitzpatrick skin types V–VI or tanned skin.",
  },
  {
    q: "I got darker after a previous treatment. Will that happen again?",
    a: "Darkening after a treatment (post-inflammatory hyperpigmentation) is more common in darker skin. We'll ask about what happened, let your skin settle where needed, and plan a gentler approach, often with a patch test first.",
  },
  {
    q: "Will treatment lighten my overall skin colour?",
    a: "No. The aim is a clearer, more even-looking complexion at your natural skin tone. We don't offer treatments to change your skin colour.",
  },
  {
    q: "Do I need sunscreen if I have dark skin?",
    a: "Yes, especially if you have pigmentation or are having treatment. Sunlight and visible light can darken pigmentation in every skin tone. A tinted sunscreen can help with visible light and may blend better on deeper skin.",
  },
];

const OPTIONS = ["chemical-peels", "cosmelan-peel", "signature-pigmentation-programme", "virtue-rf-microneedling", "carbon-laser-facial", "vi-peel"]
  .map(treatmentBySlug)
  .filter((t): t is Treatment => Boolean(t));

export default function DarkerSkinPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <PageHero
        eyebrow="Skin of colour"
        title="Pigmentation in darker skin tones"
        intro="Pigmentation concerns such as melasma, marks after acne and uneven tone are common in medium, brown and black skin. They can be treated, but darker skin needs a careful, assessment-led approach."
        crumbs={[{ name: "Pigmentation in darker skin", path: "/pigmentation-in-darker-skin/" }]}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href="/which-treatment/" variant="outline">
            Which treatment is right for me?
          </Button>
        </div>
      </PageHero>

      <Section labelledBy="why-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="why-title" eyebrow="Why it matters" title={<>Why darker skin needs <span className="text-gold">extra care</span></>} />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                Pigment cells in darker skin are more reactive. When the skin is inflamed, overheated or irritated, they can produce extra
                pigment, leaving new dark marks (post-inflammatory hyperpigmentation) or, less often, lighter patches (hypopigmentation).
              </p>
              <p>
                This is why some lasers, light treatments and stronger peels carry a higher risk of making pigmentation worse in darker skin,
                and why the same treatment can be suitable for one person and not for another.
              </p>
              <p>
                It&rsquo;s also why getting the type of pigmentation right matters. Melasma, marks after acne and sun spots each need a
                different approach.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-gold/20 bg-card">
              <SkinToneArt className="aspect-[6/7] w-full" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="what-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="what-title" eyebrow="Our approach" title="How we choose treatment" className="mb-8!" />
            <CheckList
              items={[
                "We assess your skin type and ask how your skin has reacted to spots, waxing, shaving or treatments in the past",
                "We identify the likely type and depth of pigmentation before suggesting anything",
                "We choose gentler options and adjust strength or settings for your skin",
                "We may recommend skin preparation for a few weeks before treatment",
                "We recommend a patch test where it helps",
                "We tell you honestly if a treatment isn't suitable, or if another approach carries less risk",
              ]}
            />
          </div>
          <div>
            <SectionHeading id="care-title" eyebrow="Higher-risk options" title="Treatments that need particular care" className="mb-8!" />
            <CheckList
              tone="x"
              items={[
                <>
                  <Link href="/treatments/ipl-photofacial/" className="text-gold underline underline-offset-2">
                    IPL
                  </Link>{" "}
                  is not suitable for Fitzpatrick skin types V–VI or tanned skin
                </>,
                <>Lasers, including the Q-switched laser, need careful settings and often a test patch</>,
                <>
                  <Link href="/treatments/co2-laser-resurfacing/" className="text-gold underline underline-offset-2">
                    CO2 resurfacing
                  </Link>{" "}
                  needs a doctor&rsquo;s assessment of suitability for deeper skin tones
                </>,
                <>Medium-depth peels carry more risk than superficial peels</>,
              ]}
            />
          </div>
        </div>
      </Section>

      <Section labelledBy="opts-title">
        <SectionHeading
          id="opts-title"
          eyebrow="Options we may discuss"
          title="Treatments often considered for darker skin"
          intro={<>These may be considered after assessment. None is right for everyone, and suitability is decided at your consultation. {RX_SENTENCE}</>}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map((t) => (
            <li key={t.slug}>
              <TreatmentCard t={t} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="soft" labelledBy="common-title">
        <SectionHeading id="common-title" eyebrow="Common concerns" title="Pigmentation we often see in darker skin" />
        <ul className="flex flex-wrap gap-3">
          {[
            ["/conditions/post-inflammatory-hyperpigmentation/", "Acne marks & PIH"],
            ["/conditions/melasma/", "Melasma"],
            ["/conditions/dark-circles/", "Dark circles"],
            ["/conditions/body-pigmentation/", "Underarms, inner thighs, knees"],
            ["/conditions/lip-and-perioral-pigmentation/", "Around the mouth"],
            ["/conditions/uneven-skin-tone/", "Uneven tone"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="inline-flex min-h-11 items-center rounded-full border border-cream/15 px-5 text-sm text-cream hover:border-gold hover:text-gold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Your questions" />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion faqs={FAQS} />
          </div>
        </div>
        <SkinCheckNotice className="mt-12" />
        <Disclaimer className="mt-6" />
      </Section>
      <CtaBand />
    </>
  );
}
