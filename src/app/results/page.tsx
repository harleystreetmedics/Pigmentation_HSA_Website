import { CtaBand, ReviewsSection } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section, SectionHeading, Tbc } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pigmentation Treatment Results",
  description:
    "What to expect from pigmentation treatment: gradual change, why results vary, why melasma can return, and how we use patient photos only with written consent.",
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
            <SectionHeading id="expect-title" eyebrow="What to expect" title="Change is gradual" className="mb-8!" />
            <CheckList
              items={[
                "Most treatments work over a course of sessions, and change builds gradually.",
                "Results vary between people, even with the same type of pigmentation.",
                "Sun spots and marks after spots often fade well and stay faded with good sun protection, but new spots can form.",
                "Melasma is long-term. It can be improved but tends to return with sun, heat or hormonal change, so maintenance is part of the plan.",
                "Freckles usually reappear each summer.",
                "The aim is a more even-looking complexion at your natural skin tone, not a change in skin colour.",
              ]}
            />
          </div>
          <div>
            <SectionHeading id="photos-title" eyebrow="Our promise" title="Honest before and after photos" className="mb-8!" />
            <CheckList
              items={[
                "Only real patients, treated at our clinics, with their written consent for website use.",
                "No filters, editing or retouching, and the same lighting and angle.",
                "Each photo states the treatment, the number of sessions and the time between photos.",
                "A range of skin tones, and no stock images presented as results.",
              ]}
            />
            <p className="mt-6">
              <Tbc>before-and-after photos with written patient consent for website use</Tbc>
            </p>
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
