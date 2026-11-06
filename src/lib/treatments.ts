// Treatment content. Only treatments named in the clinic's current hair loss content are listed
// (docs/research.md §5). Clinical details are general and marked for clinical sign-off in
// docs/review-checklist.md. Anything clinic-specific that we don't know yet is a `tbc` value.

import type { Faq } from "./faqs";

export type Fact = { label: string; value: string };
export type Risk = { name: string; level: "Common" | "Less common" | "Rare"; text: string };

export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  icon: "drop" | "needle" | "light" | "cell" | "search";
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  howItWorks: string[];
  facts: Fact[];
  maySuit: string[];
  mayNotSuit: string[];
  onTheDay: { title: string; text: string }[];
  aftercare: string[];
  risks: Risk[];
  evidenceNote?: string;
  faqs: Faq[];
  /** Published prices (Harley Street Medical Wellness pricing page, "PRP & Autologous Exosomes for Hair", 3 Nov 2026). */
  prices?: { option: string; single: string; course: string }[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "prp-hair-treatment",
    name: "PRP hair treatment",
    shortName: "PRP",
    icon: "drop",
    summary:
      "Platelet-rich plasma prepared from a small sample of your own blood and injected into areas of thinning on the scalp.",
    metaTitle: "PRP Hair Treatment London & Glasgow",
    metaDescription:
      "PRP (platelet-rich plasma) hair treatment for thinning hair at our London and Glasgow clinics. Clinician-led consultation, scalp assessment and a personal plan. Results vary.",
    intro: [
      "Platelet-rich plasma (PRP) is a treatment that uses a concentrated portion of your own blood. It is used for some types of thinning hair, most often pattern hair loss, and is usually given as a course of sessions.",
      "PRP is one of several options we may discuss after assessing your scalp and the likely cause of your hair loss. It does not suit every type of hair loss, so we always start with a consultation.",
    ],
    howItWorks: [
      "A small amount of blood is taken from your arm, in the same way as a routine blood test. The sample is spun in a centrifuge to separate the plasma, which contains concentrated platelets.",
      "Platelets contain growth factors. The aim of injecting PRP into thinning areas is to support the hair follicles there. Research into PRP for hair loss is ongoing, and how well it works varies from person to person.",
    ],
    facts: [
      { label: "Sessions", value: "Usually 3–6, 4–6 weeks apart" },
      { label: "Appointment", value: "30–60 minutes" },
      { label: "Downtime", value: "None expected" },
      { label: "Price", value: "From £399 a session" },
    ],
    maySuit: [
      "Adults (18+) with mild to moderate thinning or early-stage hair loss, such as pattern hair loss",
      "People who want to understand the cause of their thinning before choosing a treatment",
      "Those happy to commit to a course of sessions and review appointments",
    ],
    mayNotSuit: [
      "Advanced hair loss, where these treatments are not expected to help",
      "Hair loss with a cause that needs medical treatment first, such as a thyroid problem or deficiency",
      "Scarring alopecia, which needs specialist assessment",
      "Some blood or platelet disorders, or certain blood-thinning medicines",
      "An active infection or inflamed skin on the scalp",
      "Pregnancy or breastfeeding",
    ],
    onTheDay: [
      { title: "Check-in and review", text: "Your practitioner confirms your medical history, consent and the areas to treat." },
      { title: "Blood sample", text: "A small blood sample is taken from your arm and prepared in a centrifuge." },
      { title: "Comfort", text: "Numbing cream is applied to the scalp before the injections." },
      { title: "Treatment", text: "The prepared plasma is injected into the agreed areas of the scalp with a fine needle." },
    ],
    aftercare: [
      "You will be given written aftercare advice at your appointment.",
      "Your practitioner will tell you when you can wash your hair and return to exercise.",
    ],
    risks: [
      { name: "Tenderness and redness", level: "Common", text: "The scalp can feel tender or look pink for a short time after injections." },
      { name: "Bruising", level: "Common", text: "Small bruises can appear where blood is taken or where the scalp is injected." },
      { name: "Headache", level: "Less common", text: "Some people have a mild headache after treatment." },
      { name: "Infection", level: "Rare", text: "Any injection carries a small risk of infection. Sterile technique is used to reduce this." },
    ],
    faqs: [
      {
        q: "Does PRP work for everyone?",
        a: "No. Results vary, and PRP is not suitable for every type of hair loss. It is most often discussed for pattern hair loss. Your practitioner will explain whether it is a reasonable option for you and what you can realistically expect.",
      },
      {
        q: "Is PRP painful?",
        a: "Numbing cream is applied before the injections. Most people find treatment tolerable, though you may feel some discomfort.",
      },
      {
        q: "How many sessions will I need?",
        a: "PRP is usually given as a course followed by reviews. The number of sessions recommended for you is agreed at consultation.",
      },
      {
        q: "Can PRP be combined with other treatments?",
        a: "Sometimes. Depending on the cause of your hair loss, your practitioner may discuss combining treatments. Prescription treatments may be discussed at your consultation if clinically appropriate.",
      },
    ],
    prices: [
      { option: "PRP therapy", single: "£399", course: "£1,099" },
      { option: "Virtue PRP therapy", single: "£599", course: "£1,599" },
    ],
  },
  {
    slug: "scalp-microneedling",
    name: "Scalp microneedling",
    shortName: "Microneedling",
    icon: "needle",
    summary:
      "Controlled micro-injuries to the scalp skin using a medical device, sometimes used alongside other hair loss treatments.",
    metaTitle: "Scalp Microneedling for Thinning Hair",
    metaDescription:
      "Scalp microneedling for thinning hair at Harley Street Medical Wellness in London and Glasgow. Assessment first, then a personal plan. Results vary between individuals.",
    intro: [
      "Scalp microneedling uses a medical device with very fine needles to make tiny, controlled punctures in the skin of the scalp. It is carried out in clinic by a trained practitioner.",
      "It may be offered on its own or alongside other treatments, depending on your diagnosis. We'll explain the options that make sense for you at consultation.",
    ],
    howItWorks: [
      "The micro-punctures trigger the skin's natural repair response. Microneedling is being studied as a way to support hair in some types of thinning, often in combination with other treatments.",
      "Evidence is still developing and responses vary. Your practitioner will explain what is realistic for you.",
    ],
    facts: [
      { label: "Sessions", value: "Usually 3–6, 4–6 weeks apart" },
      { label: "Downtime", value: "None expected" },
    ],
    maySuit: [
      "Adults (18+) with mild to moderate thinning, such as pattern hair loss",
      "People looking for a non-surgical option as part of a wider plan",
    ],
    mayNotSuit: [
      "Advanced hair loss, where these treatments are not expected to help",
      "Active scalp infection, open wounds or flaring psoriasis or eczema on the scalp",
      "Scarring alopecia, which needs specialist assessment",
      "A tendency to keloid scarring",
      "Some blood-thinning medicines or bleeding disorders",
      "Pregnancy or breastfeeding",
    ],
    onTheDay: [
      { title: "Check-in and review", text: "Your practitioner checks your scalp, medical history and consent." },
      { title: "Preparation", text: "The scalp is cleansed and comfort options are discussed." },
      { title: "Treatment", text: "The device is passed over the agreed areas of the scalp." },
      { title: "Aftercare", text: "You'll get written aftercare advice before you leave." },
    ],
    aftercare: ["You will be given written aftercare advice at your appointment, including when to wash your hair and use hair products."],
    risks: [
      { name: "Redness and tenderness", level: "Common", text: "The scalp can look red and feel tender for a short time." },
      { name: "Pinpoint bleeding or scabbing", level: "Common", text: "Tiny spots of bleeding or small scabs can occur and usually settle quickly." },
      { name: "Infection", level: "Rare", text: "Any treatment that breaks the skin carries a small risk of infection." },
      { name: "Scarring or pigment change", level: "Rare", text: "Uncommon when treatment is carried out correctly, but it can't be ruled out completely." },
    ],
    faqs: [
      {
        q: "Is this the same as using a home derma roller?",
        a: "No. In-clinic microneedling is carried out by a trained practitioner with a medical device under clean conditions. Please talk to us before using any home device on your scalp.",
      },
      {
        q: "Will microneedling regrow my hair?",
        a: "We can't promise that any treatment will regrow hair. Some people see an improvement in the look of thinning areas over time, and some don't. Your practitioner will explain what is realistic for you.",
      },
      {
        q: "Can microneedling be combined with PRP?",
        a: "Sometimes. Your practitioner may suggest combining treatments if they think it is appropriate for your diagnosis.",
      },
    ],
  },
  {
    slug: "low-level-laser-therapy",
    name: "Low-level laser therapy",
    shortName: "LLLT",
    icon: "light",
    summary:
      "Low-level (red) light applied to the scalp, a non-invasive option that may be discussed for some types of thinning.",
    metaTitle: "Low-Level Laser Therapy for Hair Loss",
    metaDescription:
      "Low-level laser therapy (LLLT) for thinning hair at Harley Street Medical Wellness London and Glasgow. Non-invasive, assessment-led, results vary.",
    intro: [
      "Low-level laser therapy (LLLT), sometimes called photobiomodulation, uses low-energy red light on the scalp. It does not heat or cut the skin.",
      "It is one of the non-invasive options we may discuss for some types of thinning hair, usually as part of a wider plan.",
    ],
    howItWorks: [
      "The light is thought to act on cells in the hair follicle. Studies have looked mainly at pattern hair loss, and results vary between people.",
      "LLLT usually needs regular sessions over several months before any change can be judged.",
    ],
    facts: [
      { label: "Downtime", value: "None expected" },
    ],
    maySuit: [
      "Adults (18+) with mild to moderate pattern hair loss or general thinning",
      "People who prefer a non-invasive option",
      "Those able to keep to a regular schedule of sessions",
    ],
    mayNotSuit: [
      "Advanced hair loss, where these treatments are not expected to help",
      "Hair loss that needs a medical cause treating first",
      "Light sensitivity, or taking medicines that increase light sensitivity",
      "Active scalp conditions that need treatment first",
    ],
    onTheDay: [
      { title: "Check-in", text: "Your practitioner reviews your plan and any changes since your last visit." },
      { title: "Treatment", text: "The light device is positioned over the scalp for the agreed time." },
      { title: "Back to your day", text: "There is no expected downtime." },
    ],
    aftercare: ["No special aftercare is usually needed. Your practitioner will tell you about anything specific to you."],
    risks: [
      { name: "Mild scalp warmth or itch", level: "Less common", text: "Some people notice mild warmth, itching or tenderness." },
      { name: "Headache", level: "Less common", text: "A mild headache has been reported by some people." },
    ],
    faqs: [
      {
        q: "Does laser therapy hurt?",
        a: "Low-level laser therapy is generally painless. It uses low-energy light that does not cut or burn the skin.",
      },
      {
        q: "How long before I know if it is helping?",
        a: "Hair grows slowly, so any change usually takes several months to judge. Your practitioner will plan review appointments with you.",
      },
    ],
  },
  {
    slug: "exosome-hair-treatment",
    name: "Autologous exosome treatment",
    shortName: "Exosomes",
    icon: "cell",
    summary:
      "Exosomes prepared from your own blood (autologous) and used on the scalp. Evidence is still developing, and we'll explain what is and isn't known.",
    metaTitle: "Exosome Hair Treatment: An Honest Guide",
    metaDescription:
      "Autologous exosome hair treatment in London and Glasgow, from £599 a session. A newer approach where evidence is still developing. Learn what it involves and discuss it at a consultation.",
    intro: [
      "Exosomes are tiny particles that cells release to send signals to other cells. Autologous means they are prepared from your own blood, as with PRP. Exosome treatments are being explored in aesthetic medicine, including for thinning hair.",
      "This is a newer approach and the evidence is still developing. We won't recommend it in place of treatments that have more evidence for your type of hair loss, and we'll explain what is known and what isn't before you decide.",
    ],
    howItWorks: [
      "A blood sample is taken and prepared, and the exosome preparation is then injected into, or applied to, the agreed areas of the scalp. The idea is that the signals exosomes carry may support the scalp and hair follicles.",
      "There is not yet enough high-quality research to say how well this works for hair loss or for whom. Your practitioner will talk you through how the preparation is made and what is known.",
    ],
    facts: [
      { label: "Source", value: "Your own blood (autologous)" },
      { label: "Sessions", value: "Usually 3–6, 4–6 weeks apart" },
      { label: "Downtime", value: "None expected" },
      { label: "Price", value: "From £599 a session" },
    ],
    maySuit: [
      "Adults (18+) with thinning hair who have had a full assessment",
      "People who understand that evidence is still developing and want to discuss it as one option",
    ],
    mayNotSuit: [
      "Advanced hair loss, where these treatments are not expected to help",
      "Hair loss with an untreated medical cause",
      "Scarring alopecia, which needs specialist assessment",
      "Active scalp infection or inflamed scalp skin",
      "Some blood or platelet disorders, or certain blood-thinning medicines",
      "Pregnancy or breastfeeding",
    ],
    onTheDay: [
      { title: "Check-in and consent", text: "Your practitioner goes through the treatment, the evidence and the risks with you." },
      { title: "Blood sample", text: "A small blood sample is taken from your arm and prepared." },
      { title: "Comfort", text: "The scalp is cleansed and numbing cream is applied." },
      { title: "Treatment", text: "The preparation is injected into, or applied to, the agreed areas of the scalp." },
    ],
    aftercare: ["You will be given written aftercare advice at your appointment."],
    risks: [
      { name: "Redness and tenderness", level: "Common", text: "The scalp can feel tender or look pink for a short time after treatment." },
      { name: "Bruising", level: "Common", text: "Small bruises can appear where blood is taken or where the scalp is injected." },
      { name: "Infection", level: "Rare", text: "Any treatment that breaks the skin carries a small risk of infection." },
    ],
    evidenceNote:
      "Evidence for exosome-based treatments in hair loss is still developing. They are not a substitute for diagnosis or for treatments with stronger evidence.",
    faqs: [
      {
        q: "Are exosome treatments proven?",
        a: "Not yet. Research is at an early stage, and there isn't enough high-quality evidence to say how well exosome-based treatments work for hair loss. We'll explain this honestly at your consultation.",
      },
      {
        q: "Where do the exosomes come from?",
        a: "They are autologous, which means they are prepared from a sample of your own blood. Your practitioner will explain how the preparation is made before you decide.",
      },
    ],
    prices: [
      { option: "Autologous exosomes therapy", single: "£599", course: "£1,599" },
      { option: "Virtue exosomes therapy", single: "£799", course: "£1,899" },
    ],
  },
];

export const treatmentBySlug = (slug: string) => TREATMENTS.find((t) => t.slug === slug);
