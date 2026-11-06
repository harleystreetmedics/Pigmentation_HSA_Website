import { ClinicCards, CtaBand, TeamGrid } from "@/components/sections";
import { CheckList, Disclaimer, JsonLd, PageHero, Section, SectionHeading } from "@/components/ui";
import { clinicsSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our Hair Loss Clinics & Team",
  description:
    "Meet the Harley Street Medical Wellness hair loss team and find our clinics in London (Belgravia) and Glasgow (Ingram Street).",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={clinicsSchema()} />
      <PageHero
        eyebrow="Clinics & team"
        title="About our hair loss clinics"
        intro="Hair loss care at Harley Street Medical Wellness is led by our medical team, with clinics in London and Glasgow."
        crumbs={[{ name: "Clinics & team", path: "/about/" }]}
      />
      <Section labelledBy="approach-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="approach-title" eyebrow="Our approach" title={<>Diagnosis first, <span className="text-gold">always</span></>} className="mb-8!" />
            <div className="space-y-5 text-lg leading-relaxed text-stone">
              <p>
                A changing hairline or increased shedding can have different causes. We take time to understand yours before suggesting
                anything, and we&rsquo;ll tell you if we think you&rsquo;d be better served elsewhere.
              </p>
              <p>
                Harley Street Medical Wellness offers medical wellness and regenerative treatments at our London and Glasgow clinics. See all our services on the{" "}
                <a href={BRAND.mainSite} className="text-gold underline underline-offset-2">
                  Harley Street Medical Wellness website
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <SectionHeading id="promise-title" eyebrow="What you can expect" title="Our commitments" className="mb-8!" />
            <CheckList
              items={[
                "A consultation with a qualified practitioner before any treatment",
                "Honest advice about what's realistic, including when treatment isn't right for you",
                "Clear costs agreed before you start",
                "Referral to your GP or a specialist when that's the right route",
                "Privacy and discretion",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="soft" labelledBy="team-title">
        <SectionHeading
          id="team-title"
          eyebrow="Our team"
          title="The people you'll see"
          intro="Our GMC-registered medical team, led by our Medical Director, Dr Ahmad."
        />
        <TeamGrid />
      </Section>
      <Section tone="soft" labelledBy="clinics-title">
        <SectionHeading id="clinics-title" eyebrow="Our clinics" title="London and Glasgow" />
        <ClinicCards />
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
