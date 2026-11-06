import { CtaBand, SkinCheckNotice } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section, SectionHeading } from "@/components/ui";
import { RX_SENTENCE } from "@/lib/conditions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Preventing Pigmentation: SPF, Skincare & Aftercare",
  description:
    "How to help prevent pigmentation and protect your results: daily SPF, visible light, gentle skincare, avoiding triggers and aftercare after peels and laser. From Harley Street Aesthetics.",
  path: "/prevention-and-aftercare/",
});

export default function PreventionPage() {
  return (
    <>
      <PageHero
        eyebrow="Prevention & aftercare"
        title="Protecting your skin and your results"
        intro="Whatever treatment you have, what you do every day makes a big difference. Sun protection and a gentle routine help prevent new pigmentation and protect your results."
        crumbs={[{ name: "Prevention & aftercare", path: "/prevention-and-aftercare/" }]}
      />
      <Section labelledBy="spf-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="spf-title" eyebrow="Every day" title="Sun protection" className="mb-8!" />
            <CheckList
              items={[
                "Use a broad-spectrum, high-factor sunscreen every morning, all year round, including on cloudy days",
                "Apply enough (about two finger-lengths for the face and neck) and reapply when outdoors",
                "Visible light, including through windows, can darken melasma. A tinted sunscreen can help",
                "Wear a wide-brimmed hat and sunglasses, and seek shade in strong sun",
                "Avoid sunbeds",
                "Don't forget the neck, chest, ears and backs of the hands",
              ]}
            />
          </div>
          <div>
            <SectionHeading id="routine-title" eyebrow="Your routine" title="A gentle skincare routine" className="mb-8!" />
            <CheckList
              items={[
                "A gentle cleanser and moisturiser that don't sting or burn",
                "Brightening skincare ingredients, such as vitamin C or niacinamide, may be suggested as part of your home plan",
                "Introduce new products one at a time, and stop anything that irritates",
                "Avoid harsh scrubs, and don't pick spots or scabs",
                "Your clinician may give you a home skincare plan before and after treatment",
                RX_SENTENCE,
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="soft" labelledBy="triggers-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="triggers-title" eyebrow="Triggers" title="Things that can make pigmentation worse" className="mb-8!" />
            <CheckList
              tone="x"
              items={[
                "Sun and visible light without protection",
                "Heat: saunas, steam rooms, hot yoga, cooking over heat",
                "Irritation from harsh products, waxing or threading",
                "Picking or squeezing spots",
                "Hormonal changes (pregnancy, the pill, hormone treatment), which you may not be able to avoid. Talk to us about timing",
              ]}
            />
          </div>
          <div>
            <SectionHeading id="after-title" eyebrow="After treatment" title="General aftercare" className="mb-8!" />
            <CheckList
              items={[
                "Follow the written aftercare you're given. It's specific to your treatment",
                "Let peeling or flaking skin come away on its own",
                "Avoid make-up, heat and exercise for the time your clinician advises",
                "Use only the products recommended while your skin heals",
                "Be strict with sunscreen, and avoid sun exposure and tanning between sessions",
                "Contact the clinic if you have pain, blistering, swelling or any concern",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section labelledBy="maint-title">
        <SectionHeading
          id="maint-title"
          eyebrow="Maintenance"
          title="Keeping results"
          intro="Some pigmentation, such as melasma and freckles, tends to return. A maintenance plan, which may include occasional sessions, helps protect your result. Your clinician will explain what makes sense for your skin and budget."
        />
        <SkinCheckNotice />
        <Disclaimer className="mt-6" />
      </Section>
      <CtaBand />
    </>
  );
}
