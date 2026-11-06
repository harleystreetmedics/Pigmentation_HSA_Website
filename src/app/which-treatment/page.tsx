import { Quiz } from "@/components/Quiz";
import { SkinCheckNotice } from "@/components/sections";
import { Disclaimer, PageHero, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Which Pigmentation Treatment Is Right for Me?",
  description:
    "Answer six quick questions to find pigmentation pages worth reading before your consultation. Not a diagnosis; nothing you enter is stored or sent.",
  path: "/which-treatment/",
});

export default function WhichTreatmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Guided questions"
        title="Which treatment is right for me?"
        intro="Six quick questions to point you to useful information before your consultation. This is not a diagnosis, and your answers are not stored or sent anywhere."
        crumbs={[{ name: "Treatment finder", path: "/which-treatment/" }]}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <SkinCheckNotice className="mb-8" />
          <Quiz />
          <Disclaimer className="mt-10" />
        </div>
      </Section>
    </>
  );
}
