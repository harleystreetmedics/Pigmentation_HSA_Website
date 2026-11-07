// Pigmentation concerns. General, widely accepted descriptions in cautious language, aligned with the
// main website's pigmentation content and the Copilot playbooks (docs/research.md).
// These pages explain conditions; they never tell a reader which condition they have (decision #11).
// Clinical sign-off for all condition copy is listed in docs/review-checklist.md.

import type { Faq } from "./faqs";

export const RX_SENTENCE = "Prescription treatments may be discussed at your consultation if clinically appropriate.";

export const SKIN_CHECK =
  "Any new, changing, irregular, bleeding or itchy dark spot or mole must be checked by a doctor before any cosmetic treatment. We look for this at every consultation, and we will advise you to see your GP or a dermatologist if a mark needs medical assessment.";

export type Condition = {
  slug: string;
  name: string;
  shortName: string;
  group: "Face" | "Body" | "Assess & refer";
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  appearance: string[];
  causes: string[];
  assessment: string[];
  /** Treatment slugs we may discuss. Empty for assess-and-refer concerns. */
  treatments: string[];
  options: string[];
  prevention: string[];
  referral?: string;
  /** Amber notices for facts we still need to confirm. */
  tbc?: string[];
  faqs: Faq[];
  related: string[];
};

const STANDARD_ASSESSMENT = [
  "A consultation about when the pigmentation started, how it has changed, your skincare, sun exposure, medicines, hormones and any previous treatments",
  "A close look at your skin, including the pattern, depth and edges of the pigmentation, sometimes with a magnifying light",
  "Skin typing (Fitzpatrick type) and any history of darkening after spots, waxing or treatments",
  "A check of any mark that is new, changing, raised or irregular, with referral to a doctor where needed",
];

const SPF = "Daily broad-spectrum, high-factor sunscreen, reapplied when outdoors";
const TONE_NOTE = "Treatment is chosen after assessing your skin type, because some peels, lasers and light treatments carry a higher risk of new pigment changes in darker skin.";

export const CONDITIONS: Condition[] = [
  {
    slug: "melasma",
    name: "Melasma",
    shortName: "Melasma",
    group: "Face",
    summary: "Soft-edged brown or grey-brown patches, often on both cheeks, the forehead or the upper lip, influenced by hormones, sunlight and heat.",
    metaTitle: "Melasma Treatment London & Glasgow",
    metaDescription:
      "Melasma assessment and treatment options at Harley Street Aesthetics in London and Glasgow. Melasma is long-term and can return, so we plan gentle treatment and maintenance. Results vary.",
    intro: [
      "Melasma is a common, long-term skin condition that causes patches of brown or grey-brown pigmentation, usually on both sides of the face. It is more common in women and in medium to deeper skin tones.",
      "It is driven by overactive pigment cells that respond to hormones, ultraviolet and visible light, and heat. Melasma can be improved and managed, but it is not cured, and it tends to return with sun, heat, hormonal change or pregnancy. A maintenance plan is part of treating it.",
    ],
    appearance: [
      "Symmetrical, soft-edged patches rather than individual spots",
      "Common areas: cheeks, forehead, bridge of the nose, upper lip and chin",
      "Often darker in summer, during pregnancy or after starting hormonal contraception",
    ],
    causes: [
      "Sunlight, including visible light through windows",
      "Hormonal changes: pregnancy, the contraceptive pill or hormone treatment",
      "Heat, for example from saunas, hot yoga or cooking",
      "Genetics and skin type",
      "Irritating skincare or treatments that inflame the skin",
    ],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["signature-pigmentation-programme", "cosmelan-peel", "vi-peel", "chemical-peels"],
    options: [
      "Melasma can darken if the skin is irritated or overheated, so it needs a gentle approach. We don't use IPL for melasma.",
      "A home skincare plan and strict daily sun protection are as important as in-clinic treatment.",
      RX_SENTENCE,
    ],
    prevention: [SPF, "A tinted sunscreen can help protect against visible light", "A hat and shade in strong sun", "Avoiding heat where you can", "Gentle, non-irritating skincare"],
    faqs: [
      { q: "Can melasma be cured?", a: "No. Melasma is a long-term condition. It can often be improved and kept under control, but it tends to come back with sun, heat or hormonal change, so maintenance is part of the plan." },
      { q: "Why do some treatments make melasma worse?", a: "Pigment cells in melasma are easily triggered. Heat or irritation from an overly aggressive treatment can make them produce more pigment, so we choose gentler options." },
      { q: "Can I have treatment while pregnant?", a: "Most in-clinic treatments are not carried out during pregnancy or breastfeeding. Sun protection and gentle skincare help in the meantime, and we can plan treatment for later." },
    ],
    related: ["hormonal-pigmentation", "sun-spots", "uneven-skin-tone"],
  },
  {
    slug: "sun-spots",
    name: "Sun spots (solar lentigines)",
    shortName: "Sun spots",
    group: "Face",
    summary: "Flat, clearly defined brown spots on areas that get the most sun, such as the face, hands and chest.",
    metaTitle: "Sun Spot Removal London & Glasgow",
    metaDescription:
      "Sun spot (solar lentigo) treatment at Harley Street Aesthetics in London and Glasgow: laser, IPL, peels and our Signature Programme, after a skin check. Results vary.",
    intro: [
      "Sun spots, also called solar lentigines, are flat, well-defined brown spots caused by years of sun exposure. They are very common from middle age onwards, especially in lighter skin.",
      "They often respond well to treatment, although new spots can form with further sun exposure. Because some skin cancers can look like a dark spot, every spot is checked before cosmetic treatment.",
    ],
    appearance: ["Flat, light to dark brown spots with clear edges", "On the face, backs of the hands, forearms, chest and shoulders", "Usually more numerous with age and sun exposure"],
    causes: ["Cumulative sun exposure over many years", "Sunbed use", "Lighter skin types are more prone"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["ipl-photofacial", "signature-pigmentation-programme", "cosmelan-peel", "chemical-peels", "co2-laser-resurfacing"],
    options: ["The right option depends on your skin type and how many spots you have. IPL is only suitable for lighter, untanned skin.", RX_SENTENCE],
    prevention: [SPF, "Covering up and seeking shade between 11am and 3pm", "Avoiding sunbeds"],
    faqs: [
      { q: "Will sun spots come back?", a: "Treated spots often stay faded with good sun protection, but new spots can appear with further sun exposure." },
      { q: "How do I know it's a sun spot and not something else?", a: "You can't be sure from appearance alone. A clinician checks each mark, and anything new, changing, irregular, raised or bleeding is referred for medical assessment first." },
    ],
    related: ["age-spots", "freckles", "hands-and-chest-pigmentation"],
  },
  {
    slug: "age-spots",
    name: "Age spots",
    shortName: "Age spots",
    group: "Face",
    summary: "Flat brown marks that build up with age and sun exposure. Raised or crusty spots are a different thing and are assessed first.",
    metaTitle: "Age Spot Removal London & Glasgow",
    metaDescription:
      "Age spot treatment on the face and hands at Harley Street Aesthetics London and Glasgow. Every spot is checked first. Laser, IPL and peel options. Results vary.",
    intro: [
      "'Age spots' and 'liver spots' are everyday names for flat brown marks that become more common with age. Most are sun spots (solar lentigines) caused by sun exposure over the years.",
      "Some marks that people call age spots are actually raised growths, such as seborrhoeic keratoses, or other skin changes that need a different approach. That's why we look at each mark before suggesting treatment.",
    ],
    appearance: ["Flat brown marks on the face, hands, forearms or chest", "Gradually more numerous over time", "Raised, rough or crusty marks are assessed separately"],
    causes: ["Sun exposure over many years", "Age", "Lighter skin types are more prone"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["ipl-photofacial", "chemical-peels", "co2-laser-resurfacing", "signature-pigmentation-programme"],
    options: ["Flat spots assessed as harmless may be treated cosmetically. Raised or changing marks are not treated as cosmetic pigmentation.", RX_SENTENCE],
    prevention: [SPF, "Sunscreen on the backs of your hands, which are often missed", "Hats and covering up"],
    faqs: [
      { q: "Are age spots dangerous?", a: "Flat age spots (sun spots) are harmless, but they show that skin has had a lot of sun. A mark that is new, changing, irregular, bleeding or itchy should be checked by a doctor." },
      { q: "Can you treat age spots on my hands?", a: "Possibly. See our page on hands and chest pigmentation; whether a treatment suits that area is decided at consultation." },
    ],
    related: ["sun-spots", "hands-and-chest-pigmentation", "uneven-skin-tone"],
  },
  {
    slug: "freckles",
    name: "Freckles",
    shortName: "Freckles",
    group: "Face",
    summary: "Small, light-brown flecks that darken in summer. They are inherited and harmless, and tend to return each summer after treatment.",
    metaTitle: "Freckle Treatment London & Glasgow",
    metaDescription:
      "Freckle treatment options at Harley Street Aesthetics in London and Glasgow. Freckles are inherited and can reappear each summer, so we set realistic expectations. Results vary.",
    intro: [
      "Freckles (ephelides) are small, light-brown flecks that appear in childhood and darken with sun exposure. They are inherited and harmless, and many people like them.",
      "If you'd like them to look softer, some treatments can fade them, but freckles tend to reappear each summer. Being realistic about this helps you choose a plan that suits your skin and budget.",
    ],
    appearance: ["Small, flat, light-brown flecks", "Mostly on the nose, cheeks, shoulders and arms", "Darker in summer and lighter in winter"],
    causes: ["Genetics, especially in fair or red-haired people", "Sun exposure, which darkens existing freckles"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["ipl-photofacial", "signature-pigmentation-programme", "chemical-peels"],
    options: ["Freckles fade with some treatments but usually return with sun exposure.", RX_SENTENCE],
    prevention: [SPF, "Hats and shade in summer"],
    faqs: [{ q: "Will treated freckles come back?", a: "Usually, yes, especially in summer. Sun protection slows this down." }],
    related: ["sun-spots", "uneven-skin-tone", "age-spots"],
  },
  {
    slug: "post-inflammatory-hyperpigmentation",
    name: "Post-inflammatory hyperpigmentation (acne marks and marks after injury)",
    shortName: "Acne marks & PIH",
    group: "Face",
    summary: "Darker marks left after a spot, rash, injury or procedure has healed. More common and longer-lasting in deeper skin tones.",
    metaTitle: "Acne Marks & Hyperpigmentation Treatment London & Glasgow",
    metaDescription:
      "Treatment for post-inflammatory hyperpigmentation, acne marks and marks after injury or procedures at Harley Street Aesthetics London and Glasgow. Skin-type-safe plans. Results vary.",
    intro: [
      "Post-inflammatory hyperpigmentation (PIH) is the flat, darker mark left behind after the skin has been inflamed or injured, for example by a spot, eczema, a cut, a burn, waxing or a cosmetic procedure.",
      "It is more common and lasts longer in medium and darker skin tones. PIH often fades slowly by itself, and treatment can help, but new breakouts or irritation can leave new marks. Calming the cause, such as active acne, is part of the plan.",
    ],
    appearance: [
      "Flat brown, dark brown or grey marks where a spot or injury used to be",
      "No raised scar or indentation (those are scars, treated differently)",
      "Can last months, especially without sun protection",
    ],
    causes: ["Acne and spots, especially if picked", "Eczema, insect bites, rashes, cuts or burns", "Waxing, threading or shaving irritation", "Lasers, peels or other procedures that inflamed the skin"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["chemical-peels", "signature-pigmentation-programme", "vi-peel", "cosmelan-peel", "virtue-rf-microneedling", "peel-and-mesotherapy"],
    options: ["Treating active acne or irritation first helps prevent new marks.", "In darker skin, gentle options and careful preparation are used to avoid causing more inflammation.", RX_SENTENCE],
    prevention: [SPF, "Not picking or squeezing spots", "Gentle skincare that doesn't sting or burn", "Getting acne treated early"],
    faqs: [
      { q: "Will my acne marks fade on their own?", a: "Many do over months, but it can take a long time, especially in darker skin. Sun protection helps them fade, and treatment can speed things up for some people." },
      { q: "I got darker marks after a previous treatment. Can you help?", a: "Possibly. We'll look at what happened, wait for the skin to settle where needed, and choose a gentler approach." },
    ],
    related: ["uneven-skin-tone", "melasma", "dark-circles"],
  },
  {
    slug: "hormonal-pigmentation",
    name: "Hormonal pigmentation (pregnancy, the pill and menopause)",
    shortName: "Hormonal pigmentation",
    group: "Face",
    summary: "Pigmentation that appears or darkens with pregnancy, hormonal contraception, hormone treatment or around the menopause.",
    metaTitle: "Hormonal Pigmentation & Pregnancy Mask Treatment London & Glasgow",
    metaDescription:
      "Pigmentation linked to pregnancy (chloasma), the contraceptive pill and menopause: assessment and treatment planning at Harley Street Aesthetics London and Glasgow. Results vary.",
    intro: [
      "Hormones can switch pigment cells on. Pigmentation that appears in pregnancy is sometimes called chloasma or 'the mask of pregnancy', and similar patches can appear with the contraceptive pill, hormone treatment or around the menopause. These are often forms of melasma.",
      "Pregnancy pigmentation sometimes fades after the baby is born. Other hormonal pigmentation can persist and tends to return with sun exposure or further hormonal change.",
    ],
    appearance: ["Symmetrical patches on the cheeks, forehead, upper lip or chin", "Darkening of existing pigmentation", "Changes that started with a pregnancy or a new hormonal medicine"],
    causes: ["Pregnancy", "Combined contraceptive pill or other hormonal contraception", "Hormone treatment, including HRT", "Sun exposure, which makes hormonal pigmentation darker"],
    assessment: [...STANDARD_ASSESSMENT, "Questions about pregnancy, breastfeeding and hormonal medicines, which affect which treatments are suitable and when"],
    treatments: ["signature-pigmentation-programme", "cosmelan-peel", "vi-peel", "chemical-peels"],
    options: [
      "Most in-clinic treatments wait until after pregnancy and breastfeeding. Sun protection and gentle skincare help in the meantime.",
      "Never stop a prescribed medicine without talking to the doctor who prescribed it.",
      RX_SENTENCE,
    ],
    prevention: [SPF, "A tinted sunscreen for visible light", "Avoiding heat and sunbeds"],
    faqs: [
      { q: "Will pregnancy pigmentation go away after birth?", a: "It sometimes fades over the months after pregnancy, but not always. If it stays, we can talk about options once you've finished breastfeeding." },
      { q: "Should I stop the pill?", a: "Don't stop any medicine without speaking to your GP or prescriber first. We can talk about how hormones may be affecting your skin." },
    ],
    related: ["melasma", "uneven-skin-tone", "post-inflammatory-hyperpigmentation"],
  },
  {
    slug: "uneven-skin-tone",
    name: "Uneven skin tone and dull skin",
    shortName: "Uneven tone & dullness",
    group: "Face",
    summary: "Blotchy, mottled or dull-looking skin, often from sun damage, a build-up of surface cells or a mix of pigment concerns.",
    metaTitle: "Uneven Skin Tone Treatment London & Glasgow",
    metaDescription:
      "Treatment for uneven skin tone, mottled sun damage and dull skin at Harley Street Aesthetics in London and Glasgow. Peels, light and laser options after assessment. Results vary.",
    intro: [
      "Uneven skin tone is a broad term for skin that looks blotchy, patchy or mottled rather than even. It often comes from years of sun exposure (photodamage), but can also be a mix of sun spots, marks after spots and early melasma.",
      "Dull skin is often about texture and the way light reflects off the surface. Treatments that renew the surface can help skin look brighter and more even.",
    ],
    appearance: ["Mottled or blotchy colour across the face", "A tired, dull look", "Rough texture alongside colour changes"],
    causes: ["Long-term sun exposure", "A build-up of dead surface cells", "A mix of different pigmentation types", "Smoking and lifestyle factors"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["chemical-peels", "peel-and-mesotherapy", "carbon-laser-facial", "signature-pigmentation-programme", "ipl-photofacial", "co2-laser-resurfacing"],
    options: [TONE_NOTE, RX_SENTENCE],
    prevention: [SPF, "A consistent, gentle skincare routine", "Not smoking"],
    faqs: [{ q: "Which treatment helps dull skin?", a: "It depends on whether the main issue is texture, pigment or both. Your clinician will look at your skin and suggest options." }],
    related: ["sun-spots", "post-inflammatory-hyperpigmentation", "melasma"],
  },
  {
    slug: "dark-circles",
    name: "Dark circles (periorbital pigmentation)",
    shortName: "Dark circles",
    group: "Face",
    summary: "Darkness under or around the eyes from pigment, thin skin, shadowing from hollows, or a mix.",
    metaTitle: "Dark Circles & Under-Eye Pigmentation Treatment London & Glasgow",
    metaDescription:
      "Dark circles and periorbital pigmentation treatment at Harley Street Aesthetics London and Glasgow. We find the cause first: pigment, thin skin or hollowness. Results vary.",
    intro: [
      "Dark circles have several possible causes. Brown darkness is often pigment in the skin, which is common in medium and darker skin tones and can run in families. Blue or purple darkness can be blood vessels showing through thin skin. Shadows can come from hollowness under the eye.",
      "The right approach depends on the cause, so we assess this first. Dark circles can return with sleep, allergies, rubbing, sun and age.",
    ],
    appearance: ["Brown, grey, blue or purple darkness under the eyes", "Sometimes extends to the upper eyelids", "Can look worse when tired or unwell"],
    causes: ["Inherited pigmentation", "Thin skin showing blood vessels", "Hollowness or shadowing", "Rubbing, allergies or eczema around the eyes", "Sun exposure"],
    assessment: [...STANDARD_ASSESSMENT.slice(0, 3), "Working out whether pigment, thin skin, hollowness or a mix is involved"],
    treatments: ["dark-circles-treatment"],
    options: ["If darkness is mainly a shadow from hollowness, other options may be discussed at consultation.", "Treating allergies or eczema around the eyes can help.", RX_SENTENCE],
    prevention: ["Sunscreen and sunglasses", "Not rubbing the eyes", "Managing allergies"],
    faqs: [{ q: "Can dark circles be removed permanently?", a: "We can't promise that. Dark circles have several causes and often return to some degree. Your clinician will explain what is realistic." }],
    related: ["post-inflammatory-hyperpigmentation", "melasma", "uneven-skin-tone"],
  },
  {
    slug: "body-pigmentation",
    name: "Dark underarms, inner thighs, knees and elbows",
    shortName: "Body pigmentation",
    group: "Body",
    summary: "Darker skin in body folds and over joints, often from friction, shaving or skin type. Sometimes linked to health conditions that need a GP check.",
    metaTitle: "Dark Underarms & Inner Thigh Pigmentation London & Glasgow",
    metaDescription:
      "Assessment for dark underarms, inner thighs, knees and elbows at Harley Street Aesthetics London and Glasgow. We look for the cause and advise on options. Results vary.",
    intro: [
      "Darker skin in the underarms, inner thighs, groin, knees and elbows is very common, especially in medium and darker skin tones. It is often caused by friction, shaving or waxing irritation, or is simply natural for your skin.",
      "Sometimes, velvety darkening in body folds (acanthosis nigricans) can be linked to insulin resistance or other health conditions. If that's possible, we'll suggest you see your GP for a check.",
    ],
    appearance: ["Darker, sometimes thicker skin in the underarms, groin or inner thighs", "Darker skin over the knees and elbows", "A velvety texture in body folds, which needs a GP check"],
    causes: ["Friction from skin rubbing or clothing", "Shaving, waxing or deodorant irritation", "Natural skin tone", "Sometimes insulin resistance, hormonal conditions or medicines"],
    assessment: [...STANDARD_ASSESSMENT.slice(0, 3), "Whether a GP check for an underlying cause would be sensible"],
    treatments: [],
    options: ["Reducing friction and irritation often helps.", RX_SENTENCE],
    referral: "We'll assess the area, explain the likely cause and advise on skincare. If an underlying health condition is possible, we'll recommend a GP check before any cosmetic treatment.",
    prevention: ["Gentle hair removal, or switching method if it irritates", "Loose, breathable clothing", "Fragrance-free products in body folds"],
    faqs: [{ q: "Why are my underarms darker?", a: "Common reasons include friction, shaving irritation and natural skin tone. Velvety darkening can sometimes be linked to health conditions, so we may suggest a GP check." }],
    related: ["post-inflammatory-hyperpigmentation", "hands-and-chest-pigmentation", "drug-and-heat-induced-pigmentation"],
  },
  {
    slug: "hands-and-chest-pigmentation",
    name: "Pigmentation on the hands, neck and chest",
    shortName: "Hands, neck & chest",
    group: "Body",
    summary: "Sun spots and mottled tone on the backs of the hands, the neck and the chest, areas that get a lot of sun and are often missed with sunscreen.",
    metaTitle: "Pigmentation on Hands & Chest London & Glasgow",
    metaDescription:
      "Assessment for sun spots and uneven tone on the hands, neck and chest at Harley Street Aesthetics London and Glasgow. Every mark is checked first. Results vary.",
    intro: [
      "The backs of the hands, the neck and the chest (décolletage) get a lot of sun over the years and are easy to miss with sunscreen. Sun spots, freckling and mottled, uneven tone are common here.",
      "Skin on these areas can be thinner and slower to heal than facial skin, so treatment is chosen carefully.",
    ],
    appearance: ["Flat brown spots on the backs of the hands", "Mottled brown and red tone on the chest and neck", "Freckling on the shoulders and upper chest"],
    causes: ["Cumulative sun exposure", "Sunbeds", "Age"],
    assessment: STANDARD_ASSESSMENT,
    treatments: [],
    options: ["We'll check each mark and explain which options, if any, suit these areas.", RX_SENTENCE],
    referral: "We'll check each mark and explain which options may suit these areas.",
    prevention: [SPF, "Sunscreen on the backs of the hands and the chest", "Covering up in strong sun"],
    faqs: [{ q: "Can you treat sun spots on my hands?", a: "We'll check each spot first. Whether a treatment suits the hands is decided at consultation." }],
    related: ["sun-spots", "age-spots", "uneven-skin-tone"],
  },
  {
    slug: "lip-and-perioral-pigmentation",
    name: "Lip and perioral pigmentation",
    shortName: "Lips & around the mouth",
    group: "Face",
    summary: "Darker skin above the upper lip or around the mouth, and darker patches on the lips themselves.",
    metaTitle: "Upper Lip & Lip Pigmentation London & Glasgow",
    metaDescription:
      "Assessment for upper lip, perioral and lip pigmentation at Harley Street Aesthetics London and Glasgow. We look for the cause first and check any new or changing mark. Results vary.",
    intro: [
      "Pigmentation around the mouth is common. A band of darker skin above the upper lip is often part of melasma or caused by hair removal irritation. Darkening around the mouth can also follow eczema or lip-licking.",
      "Dark patches on the lips themselves can be natural, linked to sun or smoking, or occasionally linked to medicines or medical conditions. A new or changing dark spot on the lip must be checked by a doctor.",
    ],
    appearance: ["A darker band above the upper lip", "Darker skin around the corners of the mouth", "Dark patches or spots on the lips"],
    causes: ["Melasma and sun exposure", "Waxing, threading or other hair removal", "Eczema, lip-licking or irritation", "Smoking", "Some medicines or medical conditions"],
    assessment: STANDARD_ASSESSMENT,
    treatments: ["signature-pigmentation-programme"],
    options: ["The area above the upper lip is one of the areas our Signature Programme can treat, after assessment.", RX_SENTENCE],
    referral: "Dark spots on the lips, or changes inside the mouth, are checked by a doctor before any cosmetic treatment is considered.",
    prevention: ["Lip balm with SPF", "Sunscreen above the lip", "Gentle hair removal"],
    faqs: [{ q: "Why is the skin above my lip darker?", a: "Common reasons include melasma, sun exposure and irritation from hair removal. We'll look at the pattern and your history to understand yours." }],
    related: ["melasma", "post-inflammatory-hyperpigmentation", "hormonal-pigmentation"],
  },
  {
    slug: "cafe-au-lait-and-birthmarks",
    name: "Café-au-lait marks and pigmented birthmarks",
    shortName: "Café-au-lait & birthmarks",
    group: "Assess & refer",
    summary: "Light-brown, evenly coloured patches or birthmarks, often present from childhood. We assess these and refer where needed.",
    metaTitle: "Café-au-Lait Marks & Pigmented Birthmarks | Assessment",
    metaDescription:
      "Assessment and referral for café-au-lait marks and pigmented birthmarks at Harley Street Aesthetics London and Glasgow. Several marks, or a changing birthmark, need a doctor's review.",
    intro: [
      "Café-au-lait marks are flat, evenly coloured light-brown patches, often present from birth or early childhood. One or two are common and harmless. Pigmented birthmarks include other flat marks present from early life.",
      "Several café-au-lait marks can sometimes be linked to genetic conditions, and some birthmarks need monitoring. These are assessed by a doctor, and specialist referral may be the right route.",
    ],
    appearance: ["Flat, evenly coloured light-brown patches with smooth or irregular edges", "Present from birth or childhood", "Some birthmarks are darker, raised or hairy, and need medical review"],
    causes: ["Present from birth or appear in early childhood", "Sometimes linked to genetic conditions, especially if there are several"],
    assessment: [...STANDARD_ASSESSMENT.slice(0, 2), "Counting and measuring marks, and asking about family history"],
    treatments: [],
    options: [],
    referral:
      "We'll look at the mark and your history. Where a doctor's review or specialist (NHS or private dermatology) referral is appropriate, we'll explain why and advise you to see your GP. We won't offer cosmetic treatment for a birthmark that hasn't been medically assessed.",
    prevention: ["Sun protection, which stops marks darkening", "Photographing a birthmark to track any change"],
    faqs: [{ q: "Should I worry about café-au-lait marks?", a: "One or two are common. If you or your child have several, or a birthmark is changing, see your GP." }],
    related: ["hypopigmentation-and-vitiligo", "drug-and-heat-induced-pigmentation", "freckles"],
  },
  {
    slug: "drug-and-heat-induced-pigmentation",
    name: "Drug-induced and heat-induced pigmentation",
    shortName: "Medicine- or heat-related",
    group: "Assess & refer",
    summary: "Pigmentation caused by certain medicines, or a net-like pattern from repeated heat exposure (erythema ab igne). The cause is dealt with first.",
    metaTitle: "Drug-Induced & Heat-Induced Pigmentation | Assessment",
    metaDescription:
      "Assessment for pigmentation linked to medicines or heat (erythema ab igne) at Harley Street Aesthetics London and Glasgow. We look for the cause and liaise with your GP. Results vary.",
    intro: [
      "Some medicines can cause pigmentation, either directly or by making skin more sensitive to sunlight. The colour can be brown, grey or blue-grey, and may appear in sun-exposed areas, on the shins or elsewhere.",
      "Repeated heat on the same patch of skin, for example from a hot water bottle, heat pad or laptop, can cause a net-like brown pattern called erythema ab igne. Stopping the heat source is the first step, and a doctor should look at it.",
    ],
    appearance: ["Brown, grey or blue-grey patches", "A net-like brown pattern where heat has been applied repeatedly", "Darkening after starting a new medicine"],
    causes: ["Some medicines, including some antibiotics, antimalarials, heart medicines and chemotherapy", "Medicines that make the skin sensitive to light", "Repeated heat from hot water bottles, heat pads, laptops or heaters"],
    assessment: [...STANDARD_ASSESSMENT.slice(0, 2), "A full list of your medicines and supplements", "Questions about heat sources on the affected skin"],
    treatments: [],
    options: ["Never stop a prescribed medicine without speaking to the doctor who prescribed it."],
    referral:
      "We'll look at the pattern and your medicines and advise you to speak to your GP or prescriber about the possible cause. Heat-related pigmentation should be checked by a doctor. Cosmetic treatment, if any, is only considered once the cause has been addressed.",
    prevention: ["Sun protection if a medicine makes you light-sensitive", "Avoiding direct, repeated heat on the same patch of skin"],
    faqs: [{ q: "Will the pigmentation fade if I stop the medicine?", a: "Sometimes, slowly, but you should never stop a prescribed medicine without advice. Talk to your GP or prescriber first." }],
    related: ["hypopigmentation-and-vitiligo", "body-pigmentation", "hormonal-pigmentation"],
  },
  {
    slug: "hypopigmentation-and-vitiligo",
    name: "White patches, hypopigmentation and vitiligo",
    shortName: "White patches & vitiligo",
    group: "Assess & refer",
    summary: "Patches of skin lighter than the surrounding skin. These have different causes, including vitiligo, and are assessed and referred where needed.",
    metaTitle: "White Patches, Hypopigmentation & Vitiligo | Assessment",
    metaDescription:
      "Assessment for white patches, hypopigmentation and vitiligo at Harley Street Aesthetics London and Glasgow. We explain likely causes and refer to your GP or dermatology where needed.",
    intro: [
      "Hypopigmentation means skin that is lighter than the skin around it. Causes include vitiligo (where pigment cells stop working, giving well-defined white patches), lighter marks after inflammation or a treatment, fungal infections and other skin conditions.",
      "Our cosmetic pigmentation treatments are designed for darker marks, not for white patches. We'll help you understand what may be causing them and point you to the right medical care.",
    ],
    appearance: ["Pale or white patches", "Well-defined white patches, sometimes symmetrical (possible vitiligo)", "Lighter marks after a rash, burn or treatment"],
    causes: ["Vitiligo, an autoimmune condition", "Lighter marks after inflammation or a procedure", "Fungal infections such as pityriasis versicolor", "Other skin conditions"],
    assessment: [...STANDARD_ASSESSMENT.slice(0, 2), "Questions about family history and autoimmune conditions"],
    treatments: [],
    options: [],
    referral:
      "We'll assess the patches and, where a medical diagnosis or treatment is needed, advise you to see your GP, who can refer you to NHS dermatology. Vitiligo and many other causes are managed medically.",
    prevention: ["Sun protection: pale patches burn easily"],
    faqs: [{ q: "Can you treat vitiligo?", a: "Vitiligo is a medical condition that should be diagnosed and managed by a doctor. We can assess your skin and help you get the right referral." }],
    related: ["cafe-au-lait-and-birthmarks", "post-inflammatory-hyperpigmentation", "drug-and-heat-induced-pigmentation"],
  },
];

export const conditionBySlug = (slug: string) => CONDITIONS.find((c) => c.slug === slug);

export const DIAGNOSIS_STEPS = [
  { title: "Free AI analysis", text: "Optional: a selfie maps where pigmentation shows across six facial zones. It is a guide, not a diagnosis." },
  { title: "Consultation", text: "A free online consultation, or in clinic, about your skin, history, medicines and goals." },
  { title: "Skin check & typing", text: "We check for any mark that needs a doctor, assess the type and depth of pigmentation, and your skin type." },
  { title: "Plan, patch test, review", text: "We explain options and costs. A patch test may be advised, and we review your progress at each visit." },
];

/** "Find your pigmentation type" picker on the home page. */
export const PATTERNS = [
  { label: "Patches on both cheeks", text: "Soft-edged patches, worse in summer", href: "/conditions/melasma/" },
  { label: "Defined brown spots", text: "Flat spots where the sun hits", href: "/conditions/sun-spots/" },
  { label: "Marks after spots", text: "Dark marks left when acne heals", href: "/conditions/post-inflammatory-hyperpigmentation/" },
  { label: "Under the eyes", text: "Brown or shadowy darkness", href: "/conditions/dark-circles/" },
  { label: "Body folds or joints", text: "Underarms, inner thighs, knees", href: "/conditions/body-pigmentation/" },
  { label: "Pale or white patches", text: "Skin lighter than around it", href: "/conditions/hypopigmentation-and-vitiligo/" },
] as const;
