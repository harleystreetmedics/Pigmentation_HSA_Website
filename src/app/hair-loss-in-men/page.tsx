import { AudiencePage } from "@/components/AudiencePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hair Loss Treatment for Men London & Glasgow",
  description:
    "Receding hairline, thinning crown or patchy beard? Clinician-led hair loss assessment for men in London and Glasgow, with non-surgical options. Results vary.",
  path: "/hair-loss-in-men/",
});

export default function MenPage() {
  return (
    <AudiencePage
      audience="men"
      title="Hair loss in men"
      path="/hair-loss-in-men/"
      intro="A receding hairline or thinning crown is common, but it isn't always pattern hair loss. We help you understand what's happening and what your options are."
      conditionSlugs={[
        "male-pattern-hair-loss",
        "receding-hairline",
        "crown-thinning",
        "telogen-effluvium",
        "alopecia-areata",
        "beard-and-eyebrow-thinning",
        "scalp-conditions",
        "medical-causes",
        "traction-alopecia",
      ]}
      why={[
        "Male pattern baldness is the most common cause of hair loss in men, but shedding after illness or stress, patchy alopecia areata, scalp conditions and medical causes can look similar or happen at the same time.",
        "Getting the diagnosis right means you only spend time and money on options that make sense for your type of hair loss.",
      ]}
      faqs={[
        {
          q: "Is it normal to lose hair in my twenties?",
          a: "Pattern hair loss can start in your late teens or twenties. It's still worth checking that nothing else is contributing.",
        },
        {
          q: "Can you help with a patchy beard?",
          a: "Patchy beard hair can have several causes, including alopecia areata. A consultation can help work out the cause and what may help.",
        },
        {
          q: "Do you offer hair transplants?",
          a: "Our focus is on diagnosis and non-surgical treatment. If you're interested in surgery, we can talk through whether a referral would be appropriate.",
        },
      ]}
    />
  );
}
