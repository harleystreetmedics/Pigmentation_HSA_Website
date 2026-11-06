import { AudiencePage } from "@/components/AudiencePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Female Hair Loss Treatment London & Glasgow",
  description:
    "Thinning hair, a wider parting or shedding after pregnancy or around the menopause? Clinician-led female hair loss assessment in London and Glasgow. Results vary.",
  path: "/hair-loss-in-women/",
});

export default function WomenPage() {
  return (
    <AudiencePage
      audience="women"
      title="Hair loss in women"
      path="/hair-loss-in-women/"
      intro="Thinning hair is common in women and can be upsetting. Hormones, life events, health and genetics can all play a part, so we look at the whole picture."
      conditionSlugs={[
        "female-pattern-hair-loss",
        "diffuse-thinning",
        "telogen-effluvium",
        "postpartum-hair-loss",
        "menopause-hair-loss",
        "pcos-hair-loss",
        "hair-breakage",
        "medical-causes",
        "traction-alopecia",
        "alopecia-areata",
        "scalp-conditions",
      ]}
      why={[
        "In women, thinning often has more than one cause. Female pattern hair loss, shedding after pregnancy, illness or stress, menopause-related changes, low iron and thyroid problems can overlap.",
        "A careful assessment, and blood tests where they're clinically indicated, help us suggest options that make sense for you.",
      ]}
      faqs={[
        {
          q: "Is it normal to lose hair after having a baby?",
          a: "Extra shedding in the months after birth is common and often settles. If it doesn't, or you're worried, a consultation can check for other causes.",
        },
        {
          q: "Can treatment help hair thinning around the menopause?",
          a: "Some options may help some women, depending on the cause. Results vary, and we'll explain what's realistic at your consultation.",
        },
        {
          q: "Will you check my iron and thyroid?",
          a: "If your history suggests they could be contributing, blood tests may be recommended, either through us or your GP.",
        },
      ]}
    />
  );
}
