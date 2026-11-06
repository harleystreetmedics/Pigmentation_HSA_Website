import { Quiz } from "@/components/Quiz";
import { Disclaimer, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Which Hair Loss Treatment Is Right for Me?",
  description:
    "Answer five quick questions to find hair loss pages worth reading before your consultation. Not a diagnosis; nothing you enter is stored.",
  path: "/which-treatment/",
});

export default function WhichTreatmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Guided questions"
        title="Which treatment is right for me?"
        intro="Five quick questions to point you to useful information before your consultation. This is not a diagnosis, and your answers are not stored or sent anywhere."
        crumbs={[{ name: "Find your treatment", path: "/which-treatment/" }]}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <Quiz />
          <Disclaimer className="mt-10" />
        </div>
      </Section>
    </>
  );
}
