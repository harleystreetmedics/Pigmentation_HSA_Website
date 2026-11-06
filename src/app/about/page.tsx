import { ClinicCards, CtaBand, TeamGrid } from "@/components/sections";
import { CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading, Tbc } from "@/components/ui";
import { clinicsSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our Pigmentation Clinics & Team",
  description:
    "Meet the Harley Street Aesthetics medical team and find our clinics in London (Belgravia) and Glasgow (Ingram Street) for pigmentation assessment and treatment.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={clinicsSchema()} />
      <PageHero
        eyebrow="Clinics & team"
        title="About our pigmentation clinics"
        intro="Pigmentation treatment at Harley Street Aesthetics is doctor-led and medically supervised, with clinics in London and Glasgow."
        crumbs={[{ name: "Clinics & team", path: "/about/" }]}
      />
      <Section labelledBy="approach-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="approach-title" eyebrow="Our approach" title={<>Know the type, <span className="text-gold">then treat</span></>} className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                Pigmentation can sit at the surface or deeper in the skin, and different types respond to different treatments. We take
                time to understand yours and your skin type before suggesting anything, and we&rsquo;ll tell you if we think you&rsquo;d be
                better served elsewhere.
              </p>
              <p>
                Harley Street Aesthetics offers a full range of aesthetic treatments. See them all on the{" "}
                <a href={BRAND.mainSite} className="text-gold underline underline-offset-2">
                  Harley Street Aesthetics website
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <SectionHeading id="promise-title" eyebrow="What you can expect" title="Our commitments" className="mb-8!" />
            <CheckList
              items={[
                "An assessment by our medical team before any treatment",
                "A check of any mark that needs a doctor, before cosmetic treatment is considered",
                "Treatment chosen and adjusted for your skin type",
                "Honest advice about what's realistic, including when treatment isn't right for you",
                "Clear costs agreed before you start, with no pressure to book",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="soft" labelledBy="team-title">
        <SectionHeading id="team-title" eyebrow="Our team" title="Our medical team" intro="Our GMC-registered doctors, as listed on our main website." />
        <TeamGrid />
      </Section>
      <Section labelledBy="clinics-title">
        <SectionHeading id="clinics-title" eyebrow="Our clinics" title="London and Glasgow" />
        <ClinicCards />
        <p className="mt-8 text-sm text-stone">
          <Tbc>CQC registration (London) and Healthcare Improvement Scotland registration (Glasgow): wording and numbers</Tbc>
        </p>
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
