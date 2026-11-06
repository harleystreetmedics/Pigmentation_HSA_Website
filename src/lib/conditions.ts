// Hair loss conditions. General, widely accepted descriptions written in cautious language.
// Clinical sign-off for all condition copy is listed in docs/review-checklist.md.

import type { Faq } from "./faqs";

export const RX_SENTENCE =
  "Prescription treatments may be discussed at your consultation if clinically appropriate.";

export type Condition = {
  slug: string;
  name: string;
  shortName: string;
  audience: "men" | "women" | "all";
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  symptoms: string[];
  causes: string[];
  assessment: string[];
  /** Treatment slugs we may discuss. Empty for referral-led conditions. */
  treatments: string[];
  options: string[];
  referral?: string;
  urgent?: string;
  faqs: Faq[];
  related: string[];
};

const STANDARD_ASSESSMENT = [
  "A consultation about when your hair loss started, how it has changed, your general health, medicines, diet, stress and family history",
  "A close look at your scalp and hair, including the pattern and density of thinning",
  "Blood tests where your history suggests they would help (arranged by us or through your GP)",
];

export const CONDITIONS: Condition[] = [
  {
    slug: "male-pattern-hair-loss",
    name: "Male pattern baldness",
    shortName: "Male pattern baldness",
    audience: "men",
    summary: "Gradual thinning at the temples and crown, linked to genetics and hormones.",
    metaTitle: "Male Pattern Baldness Treatment London & Glasgow",
    metaDescription:
      "Assessment and treatment options for male pattern baldness at Harley Street Medical Wellness in London and Glasgow. Diagnosis first, then a personal plan. Results vary.",
    intro: [
      "Male pattern baldness (androgenetic alopecia) is the most common type of hair loss in men. It usually develops gradually, often starting with a receding hairline or thinning at the crown.",
      "It is linked to genetics and to how hair follicles respond to male hormones (androgens). Over time, affected follicles produce finer, shorter hairs.",
    ],
    symptoms: [
      "A hairline that moves back at the temples, often in an M shape",
      "Thinning on the crown (the top and back of the head)",
      "Finer, shorter hairs in affected areas",
      "A gradual change over months or years rather than sudden loss",
    ],
    causes: [
      "Inherited sensitivity of hair follicles to androgens",
      "Age: it becomes more common as men get older",
      "Other factors, such as illness, stress or low iron, can make shedding worse at the same time",
    ],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy", "exosome-hair-treatment"],
    options: [RX_SENTENCE, "If you're interested in surgical options such as hair transplantation, we can talk through whether a referral would be appropriate."],
    faqs: [
      {
        q: "Can male pattern baldness be stopped?",
        a: "It is a progressive condition. Some treatments aim to slow it or improve how thinning areas look, but results vary and no treatment works for everyone. Your practitioner will explain what is realistic for you.",
      },
      {
        q: "Am I too young to be losing my hair?",
        a: "Pattern hair loss can start in your late teens or twenties. If you're 18 or over and worried about thinning, a consultation can help you understand what's happening.",
      },
    ],
    related: ["receding-hairline", "crown-thinning", "diffuse-thinning"],
  },
  {
    slug: "female-pattern-hair-loss",
    name: "Female pattern hair loss",
    shortName: "Female pattern hair loss",
    audience: "women",
    summary: "Gradual thinning over the top of the scalp, often with a widening parting.",
    metaTitle: "Female Pattern Hair Loss Treatment London & Glasgow",
    metaDescription:
      "Female pattern hair loss assessment and treatment options in London and Glasgow. A clinician-led consultation looks for the cause first. Results vary.",
    intro: [
      "Female pattern hair loss is the most common cause of thinning hair in women. Rather than a receding hairline, it usually shows as gradual thinning over the top of the scalp, with the front hairline kept.",
      "It can be linked to genetics and hormones, and it can become more noticeable around the menopause. Other causes of shedding can happen at the same time, which is why we look at the whole picture.",
    ],
    symptoms: [
      "A wider parting or more visible scalp on top",
      "Less volume, or a thinner ponytail",
      "Finer hairs over the crown and top of the head",
      "Gradual change rather than sudden loss",
    ],
    causes: [
      "Genetic factors",
      "Hormonal changes, including around the menopause",
      "Contributing factors such as low iron, thyroid problems, stress or recent illness, which can be checked",
    ],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy", "exosome-hair-treatment"],
    options: [RX_SENTENCE],
    faqs: [
      {
        q: "Is female pattern hair loss common?",
        a: "Yes. It is one of the most common reasons women notice thinning hair, and you're not alone in finding it upsetting. A consultation is a good first step.",
      },
      {
        q: "Will I go bald?",
        a: "Female pattern hair loss usually causes thinning rather than complete baldness. How it progresses varies between individuals.",
      },
    ],
    related: ["menopause-hair-loss", "diffuse-thinning", "medical-causes"],
  },
  {
    slug: "receding-hairline",
    name: "Receding hairline",
    shortName: "Receding hairline",
    audience: "all",
    summary: "A hairline that moves back over time, most often at the temples.",
    metaTitle: "Receding Hairline Treatment London & Glasgow",
    metaDescription:
      "Worried about a receding hairline? Get a clinician-led assessment at our London or Glasgow clinic and talk through non-surgical options. Results vary.",
    intro: [
      "A receding hairline is when the hairline moves back from the forehead, often at the temples first. In men it is usually part of male pattern baldness.",
      "In women, a receding hairline is less common and can have other causes, such as tight hairstyles (traction alopecia) or, rarely, a scarring condition. That's why assessment matters.",
    ],
    symptoms: [
      "Hairline moving back at the temples or across the front",
      "Finer, shorter hairs along the hairline",
      "A change you notice in photos over months or years",
    ],
    causes: [
      "Male pattern baldness",
      "Traction from tight hairstyles, extensions or headwear",
      "Less commonly, scarring conditions affecting the front hairline, which need specialist assessment",
    ],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy"],
    options: [RX_SENTENCE],
    urgent:
      "If your hairline is receding along with redness, scaling, itching or shiny skin, or your eyebrows are thinning too, please get a medical assessment. These can be signs of a scarring condition that needs early specialist care.",
    faqs: [
      {
        q: "Is a receding hairline always male pattern baldness?",
        a: "Not always. It's the most common reason in men, but tight hairstyles and, rarely, scarring conditions can also cause it. A consultation helps work out the cause.",
      },
    ],
    related: ["male-pattern-hair-loss", "traction-alopecia", "scarring-alopecia"],
  },
  {
    slug: "crown-thinning",
    name: "Crown thinning",
    shortName: "Crown thinning",
    audience: "all",
    summary: "Thinning at the top and back of the head, often noticed in photos or under bright light.",
    metaTitle: "Crown Thinning Treatment London & Glasgow",
    metaDescription:
      "Thinning at the crown? Book a clinician-led hair loss consultation in London or Glasgow to find the cause and discuss options. Results vary.",
    intro: [
      "Crown thinning means less hair density at the top and back of the head. It's often first noticed in photos, in a mirror under bright light, or by a hairdresser.",
      "In men, it's commonly part of male pattern baldness. In women, thinning on top is more often part of female pattern hair loss.",
    ],
    symptoms: ["More scalp visible at the crown", "A widening 'whorl' at the back of the head", "Finer hairs on top"],
    causes: ["Pattern hair loss in men or women", "Increased shedding from illness, stress or deficiencies, which can make thinning more noticeable"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy", "exosome-hair-treatment"],
    options: [RX_SENTENCE],
    faqs: [
      {
        q: "Can crown thinning be treated without surgery?",
        a: "There are non-surgical options we may discuss, depending on the cause. Results vary and we'll explain what's realistic for you.",
      },
    ],
    related: ["male-pattern-hair-loss", "female-pattern-hair-loss", "diffuse-thinning"],
  },
  {
    slug: "diffuse-thinning",
    name: "Diffuse thinning",
    shortName: "Diffuse thinning",
    audience: "all",
    summary: "Thinning spread across the whole scalp rather than in one area.",
    metaTitle: "Thinning Hair Treatment London & Glasgow",
    metaDescription:
      "Diffuse thinning hair across the scalp has several possible causes. Get assessed at our London or Glasgow clinic and discuss suitable options. Results vary.",
    intro: [
      "Diffuse thinning means hair is thinner all over the scalp rather than in one patch. It can be gradual or happen over a few months.",
      "There are several possible causes, from pattern hair loss to shedding after illness or a deficiency, and more than one can be present. Finding the cause is the first step.",
    ],
    symptoms: ["Less volume all over", "More hair in the brush or shower", "A thinner ponytail or more visible scalp"],
    causes: [
      "Pattern hair loss",
      "Telogen effluvium (shedding after stress, illness, surgery or childbirth)",
      "Thyroid problems, low iron or other deficiencies",
      "Some medicines",
    ],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy"],
    options: [RX_SENTENCE, "If a medical cause is found, treating that comes first. We may ask you to see your GP."],
    faqs: [
      {
        q: "How do I know what is causing my thinning?",
        a: "You can't always tell from the pattern alone. A consultation, a scalp check and sometimes blood tests help narrow it down.",
      },
    ],
    related: ["telogen-effluvium", "medical-causes", "female-pattern-hair-loss"],
  },
  {
    slug: "alopecia-areata",
    name: "Alopecia areata",
    shortName: "Alopecia areata",
    audience: "all",
    summary: "Patches of hair loss caused by the immune system affecting hair follicles.",
    metaTitle: "Alopecia Areata Assessment London & Glasgow",
    metaDescription:
      "Alopecia areata causes patchy hair loss. Our doctors can assess your scalp in London or Glasgow, explain options and refer where needed. Results vary.",
    intro: [
      "Alopecia areata is a condition where the immune system affects hair follicles, causing hair to fall out, usually in round or oval patches. It can affect the scalp, beard, eyebrows or other areas.",
      "Its course is unpredictable. Hair can regrow on its own, and patches can come and go. Because patchy hair loss has several possible causes, it should be medically assessed.",
    ],
    symptoms: [
      "Smooth, round or oval bald patches",
      "Short broken hairs at the edge of a patch",
      "Patches in the beard or eyebrows",
      "Nail pitting or ridges in some people",
    ],
    causes: [
      "An autoimmune reaction affecting hair follicles",
      "It can run in families and is more common in people with other autoimmune conditions",
    ],
    assessment: [
      "A medical consultation and close scalp examination",
      "Checks for other causes of patchy hair loss",
      "Referral to your GP or a dermatologist where specialist treatment is needed",
    ],
    treatments: [],
    options: [
      RX_SENTENCE,
      "Some people with alopecia areata need specialist dermatology care. We'll explain your options and refer you if that's the best route.",
    ],
    urgent: "Patchy or sudden hair loss should always be assessed by a doctor. If you're losing hair quickly or in several patches, please book a consultation or see your GP.",
    faqs: [
      {
        q: "Will my hair grow back?",
        a: "Many people do see regrowth, sometimes without treatment, but it's unpredictable and can't be guaranteed. Your doctor will talk through what is known about your situation.",
      },
      {
        q: "Is alopecia areata contagious?",
        a: "No. It is not contagious and is not caused by anything you did.",
      },
    ],
    related: ["beard-and-eyebrow-thinning", "scarring-alopecia", "telogen-effluvium"],
  },
  {
    slug: "telogen-effluvium",
    name: "Telogen effluvium",
    shortName: "Stress & illness shedding",
    audience: "all",
    summary: "Increased shedding a few months after stress, illness (including COVID-19), surgery or other triggers.",
    metaTitle: "Telogen Effluvium: Shedding After Stress or Illness",
    metaDescription:
      "Sudden extra hair shedding after stress, illness or COVID-19 is often telogen effluvium. Get assessed in London or Glasgow and understand your options.",
    intro: [
      "Telogen effluvium is a common cause of extra hair shedding. A shock to the body pushes more hairs than usual into the resting phase of the hair cycle, and they shed a few months later.",
      "Triggers include severe stress, a high fever or illness (including COVID-19), surgery, childbirth, crash dieting and some medicines. In many people, shedding settles once the trigger has passed, but it can take months, and it can sometimes uncover pattern hair loss.",
    ],
    symptoms: [
      "Noticeably more hair in the shower, brush or on the pillow",
      "All-over thinning rather than bald patches",
      "Shedding that starts a few months after a stressful event or illness",
    ],
    causes: [
      "Physical or emotional stress",
      "Illness or fever, including COVID-19",
      "Surgery, childbirth or significant weight loss",
      "Low iron or other deficiencies",
      "Starting or stopping some medicines",
    ],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "low-level-laser-therapy"],
    options: [
      "Often the first step is finding and addressing the trigger. Nutritional support may be discussed when clinically indicated.",
      RX_SENTENCE,
    ],
    faqs: [
      {
        q: "Will the shedding stop?",
        a: "In many people it settles once the trigger has passed, though this can take several months. If it continues, it's worth checking for another cause.",
      },
      {
        q: "Do vitamin drips help?",
        a: "Vitamin drips are not a proven general treatment for hair loss. If a deficiency is found, it can be treated in the appropriate way.",
      },
    ],
    related: ["postpartum-hair-loss", "medical-causes", "diffuse-thinning"],
  },
  {
    slug: "postpartum-hair-loss",
    name: "Postpartum hair loss",
    shortName: "Postpartum hair loss",
    audience: "women",
    summary: "Extra shedding in the months after having a baby, as hormone levels change.",
    metaTitle: "Postpartum Hair Loss Advice London & Glasgow",
    metaDescription:
      "Postpartum hair shedding is common in the months after birth. Find out when to get it checked and how a consultation in London or Glasgow can help.",
    intro: [
      "Many people notice extra shedding a few months after giving birth. During pregnancy, hormone changes can mean fewer hairs shed; after birth, more hairs move into the shedding phase at once.",
      "Postpartum shedding is a form of telogen effluvium and often settles on its own over time. If it doesn't, or if you're worried, it's sensible to check for other causes such as low iron or thyroid changes.",
    ],
    symptoms: ["Heavy shedding a few months after birth", "Thinning around the hairline or temples", "All-over loss of volume"],
    causes: ["Hormonal change after pregnancy", "Low iron, thyroid changes, stress and lack of sleep can add to it"],
    assessment: STANDARD_ASSESSMENT,
    treatments: [],
    options: [
      "Reassurance and checking for other causes are often the first step.",
      "Some treatments aren't suitable while breastfeeding. We'll discuss what's appropriate for you.",
    ],
    faqs: [
      {
        q: "Is postpartum hair loss permanent?",
        a: "It is usually temporary. If shedding continues for a long time or your hair doesn't recover, a consultation can check for other causes.",
      },
      {
        q: "Can I have treatment while breastfeeding?",
        a: "Some treatments are not recommended while breastfeeding. Your practitioner will advise you at consultation.",
      },
    ],
    related: ["telogen-effluvium", "medical-causes", "female-pattern-hair-loss"],
  },
  {
    slug: "menopause-hair-loss",
    name: "Menopause-related hair loss",
    shortName: "Menopause hair loss",
    audience: "women",
    summary: "Thinning or changes in hair texture around the perimenopause and menopause.",
    metaTitle: "Menopause Hair Loss Treatment London & Glasgow",
    metaDescription:
      "Hair thinning around the menopause is common. Get a clinician-led assessment in London or Glasgow and talk through suitable options. Results vary.",
    intro: [
      "Changes in hormone levels around the perimenopause and menopause can affect hair. Many women notice thinning on top, a wider parting, or hair that feels finer or drier.",
      "Female pattern hair loss can become more noticeable at this time, and other causes such as thyroid problems or low iron can also play a part. A full assessment helps separate these.",
    ],
    symptoms: ["Thinning on the top of the scalp", "A wider parting", "Finer or drier hair", "Increased shedding"],
    causes: ["Hormonal change", "Female pattern hair loss", "Thyroid problems or low iron, which can be checked"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy"],
    options: [RX_SENTENCE, "If you're having other menopause symptoms, your GP or menopause specialist can advise on them alongside your hair plan."],
    faqs: [
      {
        q: "Is hair loss a normal part of the menopause?",
        a: "Hair changes are common around the menopause, but it's still worth having thinning assessed, as other causes can contribute and some are treatable.",
      },
    ],
    related: ["female-pattern-hair-loss", "medical-causes", "diffuse-thinning"],
  },
  {
    slug: "traction-alopecia",
    name: "Traction alopecia",
    shortName: "Traction alopecia",
    audience: "all",
    summary: "Hair loss from repeated pulling by tight hairstyles, extensions or headwear.",
    metaTitle: "Traction Alopecia Assessment London & Glasgow",
    metaDescription:
      "Traction alopecia is caused by repeated pulling on the hair. Get advice and an assessment at our London or Glasgow clinic. Early changes matter.",
    intro: [
      "Traction alopecia is hair loss caused by repeated pulling on the hair follicles, for example from tight braids, ponytails, buns, weaves, extensions or some headwear.",
      "Early on, it may improve when the pulling stops. If tension continues over a long time, follicles can be permanently damaged, so it's worth acting early.",
    ],
    symptoms: [
      "Thinning along the hairline, temples or where hair is pulled",
      "Small bumps or tenderness where hair is tied",
      "Broken hairs at the edges",
    ],
    causes: ["Tight hairstyles, braids, weaves or extensions", "Repeated tension from headwear or hair accessories"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["prp-hair-treatment", "low-level-laser-therapy"],
    options: [
      "Reducing tension on the hair is the most important first step. We'll talk through practical changes.",
      "Treatment options depend on how long it has been present and whether there are signs of scarring.",
    ],
    faqs: [
      {
        q: "Will my hairline grow back?",
        a: "It may if the follicles haven't been permanently damaged, especially if the pulling stops early. Long-standing traction can cause permanent loss. Your practitioner will assess this.",
      },
    ],
    related: ["receding-hairline", "scarring-alopecia", "diffuse-thinning"],
  },
  {
    slug: "scarring-alopecia",
    name: "Scarring alopecia",
    shortName: "Scarring alopecia",
    audience: "all",
    summary: "A group of conditions that can permanently damage hair follicles. Needs early specialist diagnosis.",
    metaTitle: "Scarring Alopecia: Diagnosis and Referral",
    metaDescription:
      "Scarring (cicatricial) alopecia needs early specialist diagnosis. We can assess your scalp in London or Glasgow and arrange onward referral.",
    intro: [
      "Scarring alopecia (also called cicatricial alopecia) is a group of uncommon conditions where inflammation damages hair follicles and replaces them with scar tissue, so hair can't regrow in those areas.",
      "Early diagnosis matters because treatment aims to stop further loss. Diagnosis usually needs a specialist dermatologist and sometimes a scalp biopsy.",
    ],
    symptoms: [
      "Patches of hair loss where the skin looks smooth or shiny",
      "Redness, scaling, itching, burning or tenderness of the scalp",
      "A slowly receding frontal hairline, sometimes with eyebrow loss",
      "Pustules or crusting on the scalp",
    ],
    causes: ["Inflammatory conditions of the scalp and hair follicles", "The exact cause varies between the different types"],
    assessment: [
      "A medical consultation and scalp examination",
      "Referral to a consultant dermatologist for diagnosis, which may include a scalp biopsy",
    ],
    treatments: [],
    options: [],
    referral:
      "We don't offer cosmetic hair treatments for active scarring alopecia. If we think you may have a scarring condition, we'll explain why and help you arrange a specialist dermatology referral, either privately or through your GP.",
    urgent: "If you have hair loss with a red, scaly, painful, itchy or burning scalp, please get a medical assessment soon.",
    faqs: [
      {
        q: "Can scarring alopecia be reversed?",
        a: "Hair lost to scarring usually can't regrow. Specialist treatment aims to stop the condition progressing, which is why early diagnosis is important.",
      },
    ],
    related: ["receding-hairline", "scalp-conditions", "alopecia-areata"],
  },
  {
    slug: "medical-causes",
    name: "Hair loss linked to thyroid, deficiencies and medical conditions",
    shortName: "Thyroid & deficiencies",
    audience: "all",
    summary: "Thinning or shedding linked to thyroid problems, low iron, other deficiencies, medicines or illness.",
    metaTitle: "Hair Loss Blood Tests: Thyroid, Iron & Deficiencies",
    metaDescription:
      "Thyroid problems, low iron and other medical issues can contribute to hair loss. Learn how we assess this in London and Glasgow and when we refer to your GP.",
    intro: [
      "Hair is sensitive to changes in your general health. Thyroid problems, low iron, some vitamin deficiencies, hormonal conditions, some medicines and other illnesses can all contribute to thinning or shedding.",
      "Finding and treating an underlying cause comes first. Cosmetic treatments aren't a substitute for this.",
    ],
    symptoms: [
      "Diffuse thinning or extra shedding",
      "Other symptoms such as tiredness, weight change, feeling cold, or heavy periods",
      "Changes in hair texture",
    ],
    causes: [
      "Underactive or overactive thyroid",
      "Low iron stores",
      "Some vitamin deficiencies",
      "Hormonal conditions",
      "Some prescribed medicines",
      "Recent or ongoing illness",
    ],
    assessment: [
      "A consultation about your symptoms, health, diet and medicines",
      "Blood tests where clinically indicated, arranged by us or through your GP",
      "Referral back to your GP if a medical condition needs treatment",
    ],
    treatments: [],
    options: [
      "Nutritional support may be discussed when clinically indicated.",
      "Vitamin drips are not a proven general treatment for hair loss.",
      "Once any medical cause is managed, treatments for remaining thinning can be discussed.",
    ],
    faqs: [
      {
        q: "Should I take supplements for my hair?",
        a: "Only if you have a deficiency. Taking supplements you don't need won't help your hair and some can cause problems. Ask us or your GP before starting any.",
      },
      {
        q: "Can I stop my medicine if I think it is causing hair loss?",
        a: "No. Please don't stop any prescribed medicine without talking to the doctor who prescribed it.",
      },
    ],
    related: ["telogen-effluvium", "diffuse-thinning", "female-pattern-hair-loss"],
  },
  {
    slug: "scalp-conditions",
    name: "Scalp conditions",
    shortName: "Scalp conditions",
    audience: "all",
    summary: "Dandruff, seborrhoeic dermatitis, scalp psoriasis and itchy or sore scalps.",
    metaTitle: "Itchy Scalp, Dandruff & Scalp Psoriasis Assessment",
    metaDescription:
      "Itchy, flaky or sore scalp? Dandruff, seborrhoeic dermatitis and scalp psoriasis can be assessed at our London and Glasgow clinics alongside hair concerns.",
    intro: [
      "A healthy scalp is part of healthy-looking hair. Common scalp conditions include dandruff and seborrhoeic dermatitis (flaking and itching, sometimes with redness), and scalp psoriasis (thicker, scaly patches).",
      "Scratching and inflammation can lead to broken hairs or extra shedding. Some scalp symptoms can also be signs of conditions that need specialist care, so it's worth having them checked.",
    ],
    symptoms: [
      "Flaking, itching or redness",
      "Thick, silvery or scaly patches",
      "A sore, burning or tender scalp",
      "Broken hairs or extra shedding",
    ],
    causes: [
      "Seborrhoeic dermatitis, linked to a yeast that lives on the skin",
      "Psoriasis",
      "Reactions to hair products or dyes",
      "Fungal infection, especially in children (who should see their GP)",
    ],
    assessment: [
      "A consultation and close scalp examination",
      "Advice on scalp care and products",
      "Referral to your GP or a dermatologist where needed",
    ],
    treatments: [],
    options: [
      "Treating the scalp condition comes first; some hair treatments aren't suitable on an inflamed scalp.",
      RX_SENTENCE,
    ],
    urgent: "A very painful scalp, spreading redness, pus or fever needs prompt medical attention from your GP or NHS 111.",
    faqs: [
      {
        q: "Does dandruff cause hair loss?",
        a: "Dandruff itself doesn't usually cause permanent hair loss, but itching, scratching and inflammation can lead to broken hairs and extra shedding.",
      },
    ],
    related: ["scarring-alopecia", "diffuse-thinning", "medical-causes"],
  },
  {
    slug: "hair-loss-after-chemotherapy",
    name: "Hair loss after chemotherapy",
    shortName: "After chemotherapy",
    audience: "all",
    summary: "Support and assessment for hair regrowth after cancer treatment, in coordination with your oncology team.",
    metaTitle: "Hair Loss After Chemotherapy: Support and Advice",
    metaDescription:
      "Hair changes after chemotherapy are common. Learn how we can support you in coordination with your oncology team in London and Glasgow.",
    intro: [
      "Many chemotherapy treatments cause temporary hair loss. For most people hair starts to regrow after treatment ends, though it can grow back with a different texture or density.",
      "If you're concerned about regrowth after cancer treatment, we can talk it through with you. Any treatment would be planned with your oncology team's advice.",
    ],
    symptoms: ["Slow or patchy regrowth after treatment", "Changes in texture, colour or density", "Ongoing thinning months after treatment ended"],
    causes: ["Chemotherapy and some other cancer treatments", "Hormonal treatments used for some cancers"],
    assessment: [
      "A consultation about your treatment history and current health",
      "Liaison with, or advice to speak to, your oncology team before any treatment",
    ],
    treatments: [],
    options: ["Treatment options, if any, depend on your medical history and your oncology team's advice."],
    faqs: [
      {
        q: "Can I have treatment during chemotherapy?",
        a: "Please speak to your oncology team first. We won't start any hair treatment without their agreement.",
      },
    ],
    related: ["diffuse-thinning", "medical-causes", "telogen-effluvium"],
  },
  {
    slug: "beard-and-eyebrow-thinning",
    name: "Beard and eyebrow thinning",
    shortName: "Beard & eyebrows",
    audience: "all",
    summary: "Patchy or thinning beard and eyebrow hair, and when it needs checking.",
    metaTitle: "Beard and Eyebrow Thinning Assessment",
    metaDescription:
      "Patchy beard or thinning eyebrows can have several causes, including alopecia areata and thyroid problems. Get assessed in London or Glasgow.",
    intro: [
      "Thinning or patches in the beard or eyebrows can have several causes. Patchy loss in the beard is often alopecia areata. Eyebrow thinning can follow over-plucking, and it can also be linked to thyroid problems or, rarely, scarring conditions.",
      "An assessment helps work out the cause before any treatment is discussed.",
    ],
    symptoms: ["Round patches in the beard", "Thinning of the outer eyebrows", "Gaps that haven't filled in over time"],
    causes: ["Alopecia areata", "Over-plucking or waxing", "Thyroid problems", "Rarely, scarring conditions"],
    assessment: STANDARD_ASSESSMENT,
    treatments: [],
    options: ["Options depend on the cause and are discussed at consultation."],
    faqs: [
      {
        q: "Is a patchy beard a sign of alopecia areata?",
        a: "It can be, but there are other causes too. A consultation can help work out what's going on.",
      },
    ],
    related: ["alopecia-areata", "medical-causes", "scarring-alopecia"],
  },
  {
    slug: "pcos-hair-loss",
    name: "Hair thinning linked to PCOS and hormones",
    shortName: "PCOS & hormonal thinning",
    audience: "women",
    summary: "Thinning on the top of the scalp linked to polycystic ovary syndrome (PCOS) or other hormonal changes.",
    metaTitle: "PCOS Hair Loss Assessment London & Glasgow",
    metaDescription:
      "Thinning hair with PCOS or other hormonal changes? Get a clinician-led assessment in London or Glasgow and talk through suitable options. Results vary.",
    intro: [
      "Polycystic ovary syndrome (PCOS) is a common hormonal condition. In some women, higher levels of androgens (male-type hormones) can lead to thinning on the top of the scalp, in a similar pattern to female pattern hair loss.",
      "Because hormones affect the whole body, hair thinning with PCOS should be looked at alongside your general health. Your GP or specialist can help manage PCOS itself, while we focus on your hair and scalp.",
    ],
    symptoms: [
      "Thinning over the top of the scalp or a wider parting",
      "Irregular periods, acne or extra facial or body hair",
      "Gradual change over months or years",
    ],
    causes: [
      "Higher androgen levels or increased sensitivity to them",
      "Other hormonal conditions, such as thyroid problems, which can be checked",
      "Other contributors such as low iron or recent stress",
    ],
    assessment: [
      "A consultation about your hair, periods, general health and any PCOS diagnosis or treatment",
      "A close look at your scalp and the pattern of thinning",
      "Blood tests where clinically indicated, arranged by us or through your GP",
    ],
    treatments: ["prp-hair-treatment", "scalp-microneedling", "low-level-laser-therapy", "exosome-hair-treatment"],
    options: [
      RX_SENTENCE,
      "If you haven't been diagnosed with PCOS but have symptoms, we may suggest you see your GP for assessment.",
    ],
    faqs: [
      {
        q: "Can PCOS cause hair loss?",
        a: "It can. In some women, hormonal changes linked to PCOS contribute to thinning on the top of the scalp. Other causes can look similar, so an assessment is worthwhile.",
      },
      {
        q: "Should I see my GP as well?",
        a: "Yes, if you have other PCOS symptoms or haven't been diagnosed. Managing the underlying condition is an important part of your plan.",
      },
    ],
    related: ["female-pattern-hair-loss", "medical-causes", "menopause-hair-loss"],
  },
  {
    slug: "hair-breakage",
    name: "Hair breakage and damaged hair",
    shortName: "Hair breakage",
    audience: "all",
    summary: "Hair that snaps along its length rather than falling out from the root, often from styling, heat or chemical treatments.",
    metaTitle: "Hair Breakage or Hair Loss? Get Assessed",
    metaDescription:
      "Is your hair breaking or falling out? Learn the difference and get a clinician-led assessment of hair and scalp concerns in London or Glasgow.",
    intro: [
      "Not all hair that ends up in your brush is hair loss. Breakage happens when the hair shaft snaps, usually leaving short, uneven pieces, while shedding means the whole hair comes out from the root.",
      "Breakage is often linked to heat styling, bleaching, relaxers, tight styles or rough handling, and sometimes to nutritional or medical factors. Telling breakage and shedding apart helps decide what will help.",
    ],
    symptoms: [
      "Short, broken pieces of hair, often without a white bulb at the end",
      "Hair that feels dry, rough or brittle",
      "Thinner-looking ends or uneven lengths",
      "Breakage where hair is tied or styled most",
    ],
    causes: [
      "Heat styling, bleaching, colouring and chemical straightening",
      "Tight hairstyles, extensions and rough brushing",
      "Low iron, thyroid problems or other deficiencies, which can be checked",
      "Rarely, inherited conditions affecting the hair shaft",
    ],
    assessment: [
      "A consultation about your hair care, styling and health",
      "A close look at your hair and scalp to tell breakage from shedding",
      "Blood tests where clinically indicated",
    ],
    treatments: [],
    options: [
      "Changes to hair care and styling are usually the first step. We'll talk through practical advice.",
      "If there is also thinning from the root, treatment options for that cause can be discussed.",
    ],
    faqs: [
      {
        q: "How do I know if my hair is breaking or falling out?",
        a: "Hairs that shed from the root usually have a small white bulb at one end and are full length. Broken hairs are shorter and snapped along their length. A consultation can confirm which is happening.",
      },
    ],
    related: ["traction-alopecia", "telogen-effluvium", "medical-causes"],
  },
];

export const conditionBySlug = (slug: string) => CONDITIONS.find((c) => c.slug === slug);

export const DIAGNOSIS_STEPS = [
  { title: "Consultation", text: "We talk about your hair, your health, medicines, family history and what you'd like to achieve." },
  { title: "Scalp assessment", text: "A close look at your scalp and hair to understand the pattern and likely cause." },
  { title: "Tests if needed", text: "Blood tests or a referral where your history suggests something else could be contributing." },
  { title: "Your plan and reviews", text: "We explain suitable options, costs and what's realistic, then review your progress over time." },
];

/** "Find your hair loss type" picker on the home page. */
export const PATTERNS = [
  { label: "Receding hairline", text: "Hairline moving back at the temples", href: "/conditions/receding-hairline/" },
  { label: "Thinning crown", text: "More scalp showing on top or at the back", href: "/conditions/crown-thinning/" },
  { label: "Wider parting", text: "Thinning over the top, front hairline kept", href: "/conditions/female-pattern-hair-loss/" },
  { label: "Patches", text: "Round, smooth bald patches", href: "/conditions/alopecia-areata/" },
  { label: "Sudden shedding", text: "Lots of hair falling out after stress or illness", href: "/conditions/telogen-effluvium/" },
  { label: "Itchy or flaky scalp", text: "Flaking, redness, itch or soreness", href: "/conditions/scalp-conditions/" },
] as const;
