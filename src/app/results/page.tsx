import { CtaBand, ReviewsSection } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hair Loss Treatment Results",
  description:
    "What to expect from hair loss treatment results: why change takes months, why results vary, and how we use patient photos only with written consent.",
  path: "/results/",
});

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Realistic results"
        intro="We'd rather be honest than make promises. Here's what to expect, and how we'll show real patient results."
        crumbs={[{ name: "Results", path: "/results/" }]}
      />
      <Section labelledBy="expect-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="expect-title" eyebrow="What to expect" title="Hair changes slowly" className="mb-8!" />
            <CheckList
              items={[
                "Hair grows slowly, so any change usually takes several months to judge.",
                "Results vary between people, even with the same type of hair loss.",
                "Some types of hair loss improve on their own; some don't respond to treatment.",
                "Ongoing or maintenance treatment may be needed, and stopping treatment can mean changes are lost.",
                "We take consistent photos at review appointments so you and your practitioner can compare.",
              ]}
            />
          </div>
          <div>
            <SectionHeading id="photos-title" eyebrow="Our promise" title="Honest before and after photos" className="mb-8!" />
            <CheckList
              items={[
                "Only real patients, treated at our clinics, with their written consent.",
                "No filters, editing or retouching, and the same lighting and angle.",
                "Each photo states the treatment and the time between photos.",
                "No stock images presented as results.",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="soft">
        <Disclaimer />
      </Section>
      <ReviewsSection />
      <CtaBand />
    </>
  );
}
