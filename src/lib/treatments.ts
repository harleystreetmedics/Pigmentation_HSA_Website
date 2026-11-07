// Pigmentation treatments. Only treatments the clinic documents for pigmentation are listed
// (docs/research.md §2–3). Facts, prices, suitability and risks come from harleystreetaesthetic.co.uk
// treatment and pricing pages [HSA] or the Copilot playbooks [PB]. Anything else is a `tbc` note.
// All copy needs clinical sign-off (docs/review-checklist.md).

import type { Faq } from "./faqs";

export type Fact = { label: string; value: string; tbc?: boolean };
export type Risk = { name: string; level: "Common" | "Less common" | "Rare"; text: string };
export type Price = { option: string; price: string; note?: string };

export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  icon: "drop" | "needle" | "light" | "cell" | "sparkle" | "search";
  category: "Programme" | "Peels" | "Light & laser" | "Microneedling" | "Targeted";
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  howItWorks: string[];
  facts: Fact[];
  maySuit: string[];
  mayNotSuit: string[];
  /** Skin-of-colour wording for this treatment. */
  skinTone: string;
  onTheDay: { title: string; text: string }[];
  aftercare: string[];
  risks: Risk[];
  /** Amber notices for facts we still need to confirm (shown on the page). */
  tbc?: string[];
  faqs: Faq[];
  prices: Price[];
  pricesTbc?: string;
};

const SPF_AFTERCARE = "Apply a broad-spectrum, high-factor sunscreen every morning and reapply when outdoors, even on cloudy days.";
const NO_PICK = "Don't pick, scrub or peel flaking skin. Let it come away on its own.";

export const TREATMENTS: Treatment[] = [
  {
    slug: "signature-pigmentation-programme",
    name: "Signature Pigmentation Programme",
    shortName: "Signature Programme",
    icon: "sparkle",
    category: "Programme",
    summary: "Our three-phase, needle-free and heat-free in-clinic programme for flat facial pigmentation and uneven tone, supported by a home skincare plan and daily SPF 50.",
    metaTitle: "Signature Pigmentation Programme London & Glasgow",
    metaDescription:
      "The Signature Pigmentation Programme at Harley Street Aesthetics: a three-phase, needle-free in-clinic programme for flat facial pigmentation, £349 a session. Free online consultation. Results vary.",
    intro: [
      "The Signature Pigmentation Programme is our in-clinic plan for flat facial pigmentation and uneven tone, such as sun spots, marks left after spots and patchy pigmentation. It is planned after a consultation and adjusted to your skin.",
      "The aim is a clearer, more even-looking complexion at your natural skin tone. It is not designed to change your skin colour, and it is not suitable for moles or raised marks.",
    ],
    howItWorks: [
      "Phase 1, Prepare: a brightening treatment is massaged into the skin after a soothing preparation gel. Phase 2, Renew: a renewal complex works on the pigmented surface layers while helping to calm the skin. Phase 3, Perfect: finishing treatments refine the renewed skin.",
      "Between visits, a clinician-recommended home skincare plan and daily SPF 50 support the in-clinic work. Your practitioner decides the strength and timing of each phase for your skin type and pigmentation.",
    ],
    facts: [
      { label: "Sessions", value: "Usually 2–6" },
      { label: "Appointment", value: "60 minutes" },
      { label: "Downtime", value: "Mild redness or dryness" },
      { label: "Price", value: "£349 a session" },
    ],
    maySuit: [
      "Flat facial pigmentation such as sun spots, marks after spots or patchy pigmentation",
      "Uneven or patchy skin tone from sun exposure",
      "People willing to use daily SPF and a home skincare plan",
    ],
    mayNotSuit: [
      "New, changing, raised or irregular marks, which need a medical check first",
      "Active skin infection, broken skin or a flare of eczema in the area",
      "Pregnancy or breastfeeding (timing is discussed at consultation)",
    ],
    skinTone:
      "Deeper skin tones need particular care, because pigment cells in darker skin react more strongly to irritation. The programme's strength is adjusted to your skin, and a patch test may be recommended before your first full session.",
    onTheDay: [
      { title: "Check-in", text: "Your practitioner reviews your skin, medical history and consent." },
      { title: "Prepare", text: "A soothing gel, then a brightening treatment massaged into the skin." },
      { title: "Renew", text: "A renewal complex is applied to the pigmented areas. You may feel some tingling." },
      { title: "Perfect", text: "Finishing treatments and SPF, plus your home skincare plan." },
    ],
    aftercare: [
      "Mild redness or warmth is normal on the day. Avoid make-up, heat and exercise for the rest of the day.",
      "The skin can feel dry or tight for a few days. Follow your home skincare plan.",
      SPF_AFTERCARE,
    ],
    risks: [
      { name: "Redness and tingling", level: "Common", text: "Mild redness or tingling during and shortly after a session, usually settling within hours to a few days." },
      { name: "Dryness", level: "Common", text: "The skin can feel dry or tight for a few days as it renews." },
      { name: "Temporary darkening", level: "Less common", text: "Pigmentation can look darker for a short time, or flare if the skin is irritated or exposed to sun. A patch test helps reduce this risk." },
      { name: "Irritation or reaction", level: "Rare", text: "An allergic or irritant reaction is possible. Tell your clinician about any sensitivities before treatment." },
    ],
    faqs: [
      {
        q: "Does the Signature Programme hurt, and is there downtime?",
        a: "Most people find it comfortable, as it uses no needles and no heat. You may notice some tingling during the renewal phase and mild redness or dryness for a few days afterwards. Most people return to normal activities straight away, using daily SPF 50.",
      },
      {
        q: "How many sessions will I need?",
        a: "Most plans are 2–6 sessions, a few weeks apart. Your clinician recommends the number for you at consultation and reviews your progress at each visit.",
      },
      {
        q: "Will my pigmentation come back?",
        a: "It can. Sun spots and marks after spots often stay faded with good sun protection, but new spots can form. Melasma-type pigmentation tends to return with sun, heat or hormonal change, so a maintenance plan is part of treating it.",
      },
      {
        q: "Will it change my skin colour?",
        a: "No. The aim is a more even-looking complexion at your natural skin tone, not a lighter skin colour.",
      },
    ],
    prices: [
      { option: "Per session", price: "£349" },
      { option: "Course of 2 sessions", price: "£698" },
      { option: "Course of 3 sessions", price: "£1,047" },
      { option: "Course of 4 sessions", price: "£1,396" },
      { option: "Course of 5 sessions", price: "£1,745" },
      { option: "Course of 6 sessions", price: "£2,094" },
    ],
  },
  {
    slug: "chemical-peels",
    name: "Chemical peels",
    shortName: "Chemical peels",
    icon: "drop",
    category: "Peels",
    summary: "Medical-grade peels, chosen by a clinician for your skin, to help with uneven tone, sun spots and marks left after acne.",
    metaTitle: "Chemical Peels for Pigmentation London & Glasgow",
    metaDescription:
      "Clinician-selected medical-grade chemical peels for uneven tone, sun spots and acne marks in London and Glasgow. From £149, or £399 for a course of three. Results vary.",
    intro: [
      "A chemical peel is a clinical treatment in which a measured acid solution is applied to the skin to remove damaged surface cells, so the skin renews with a smoother, more even surface.",
      "Your clinician chooses a superficial or medium-depth peel for your skin. If your skin is darker or prone to pigmentation, they will plan a gentler approach, which may include a short preparation phase.",
    ],
    howItWorks: [
      "We use medical-grade peels ranging from gentle lactic and mandelic acids to glycolic, salicylic, Jessner and TCA-based formulations, applied at superficial to medium depth.",
      "Pigmentation usually improves over a course of peels rather than after one. Ongoing sun protection and maintenance are important, because pigmentation can return, especially melasma with sun or hormonal change.",
    ],
    facts: [
      { label: "Sessions", value: "Usually 3–6" },
      { label: "Spacing", value: "2–4 weeks apart" },
      { label: "Downtime", value: "0–7 days" },
      { label: "Price", value: "From £149" },
    ],
    maySuit: [
      "Sun spots, uneven tone or dark marks left after acne",
      "Dull, uneven or rough-textured skin",
      "Oily or mild to moderately acne-prone skin",
      "People willing to use daily SPF and follow preparation and aftercare advice",
    ],
    mayNotSuit: [
      "Pregnancy or breastfeeding",
      "Certain acne medicines taken in the last six months",
      "Active cold sores, skin infection, open wounds or flaring eczema on the face",
      "Recent sun exposure, sunburn or an active tan",
      "A history of keloid or poor scarring (medium-depth peels)",
    ],
    skinTone:
      "Peels are chosen with extra care for darker skin, which has a higher risk of temporary darkening after inflammation. Superficial acids, skin preparation and strict SPF help reduce that risk.",
    onTheDay: [
      { title: "Assessment", text: "Your clinician checks your skin and chooses the peel and strength." },
      { title: "Cleanse", text: "The skin is cleansed and prepared." },
      { title: "Peel", text: "The peel is applied for a set time. A warm, stinging or tingling feeling is normal." },
      { title: "Neutralise and protect", text: "The peel is removed or neutralised and SPF is applied." },
    ],
    aftercare: [NO_PICK, SPF_AFTERCARE, "Use gentle skincare for a few days and avoid active ingredients until your clinician says otherwise."],
    risks: [
      { name: "Redness and stinging", level: "Common", text: "Pinkness and a warm or stinging feeling, usually settling within hours to two days after a superficial peel." },
      { name: "Tightness and peeling", level: "Common", text: "Skin often feels tight and may flake for a few days. Medium-depth peels cause more visible peeling for around a week." },
      { name: "Temporary darkening", level: "Less common", text: "Post-inflammatory hyperpigmentation is more likely in darker skin or with sun exposure. Careful peel choice, preparation and SPF reduce the risk." },
      { name: "Breakouts or cold sores", level: "Less common", text: "A short-lived breakout, or a cold sore in people prone to them." },
      { name: "Infection, scarring or lighter patches", level: "Rare", text: "Rare with superficial peels, and more likely if peeling skin is picked or aftercare isn't followed." },
    ],
    faqs: [
      {
        q: "Which peel will I have?",
        a: "Your clinician chooses the peel after looking at your skin type, pigmentation, medical history and lifestyle. We don't choose a peel from a menu before seeing your skin.",
      },
      {
        q: "Can I have a peel if I have darker skin?",
        a: "Often, yes, with the right choice of peel. Darker skin needs a gentler approach and careful preparation, because irritation can cause temporary darkening. Your clinician will explain the risks for your skin.",
      },
    ],
    prices: [
      { option: "Single peel", price: "£149" },
      { option: "Course of 3 peels", price: "£399", note: "Total for the course" },
    ],
  },
  {
    slug: "peel-and-mesotherapy",
    name: "Chemical peel + mesotherapy",
    shortName: "Peel + mesotherapy",
    icon: "needle",
    category: "Peels",
    summary: "A clinician-selected peel followed by facial mesotherapy in one appointment, to help with dullness and uneven tone.",
    metaTitle: "Chemical Peel & Mesotherapy London & Glasgow",
    metaDescription:
      "Chemical peel plus facial mesotherapy for dullness, hydration and uneven tone at Harley Street Aesthetics. £299 a session or £799 for three. Clinician-led. Results vary.",
    intro: [
      "This two-step treatment starts with a medical-grade peel to resurface the outer layer of skin. Facial mesotherapy then places a clinician-selected blend of vitamins, antioxidants and hyaluronic acid into the upper skin through tiny injections.",
      "It is mainly a treatment for hydration, glow and evenness of tone, rather than for deep or stubborn pigmentation.",
    ],
    howItWorks: [
      "The peel removes dull, uneven surface cells. The mesotherapy blend is then delivered with very fine needles, where it can support hydration and a healthier-looking glow.",
      "A course of three sessions usually gives a more noticeable change than a single treatment. Results vary between people.",
    ],
    facts: [
      { label: "Appointment", value: "45–60 minutes" },
      { label: "Sessions", value: "3, 2–4 weeks apart" },
      { label: "Downtime", value: "Redness and bumps for 24–48 h" },
      { label: "Price", value: "£299 a session" },
    ],
    maySuit: ["Dull skin or mildly uneven tone", "Dehydrated skin", "People who want surface and hydration care in one visit"],
    mayNotSuit: [
      "Pregnancy or breastfeeding",
      "Active skin infection, cold sores or broken skin",
      "A recent tan or sunburn",
      "Some bleeding disorders or blood-thinning medicines (discussed at consultation)",
    ],
    skinTone: "The peel strength and mesotherapy blend are chosen for your skin type. Darker skin needs a gentle peel and careful sun protection afterwards.",
    onTheDay: [
      { title: "Assessment", text: "Your clinician chooses the peel strength and mesotherapy blend." },
      { title: "Peel", text: "A medical-grade peel is applied and removed." },
      { title: "Mesotherapy", text: "The blend is placed into the upper skin with very fine needles." },
      { title: "Protect", text: "Soothing care and SPF are applied." },
    ],
    aftercare: ["Small bumps and redness usually settle in 24–48 hours.", NO_PICK, SPF_AFTERCARE, "Avoid make-up for the rest of the day."],
    risks: [
      { name: "Redness and small bumps", level: "Common", text: "Usually settle within 24–48 hours." },
      { name: "Tenderness or pinpoint bruising", level: "Less common", text: "Possible at injection points, settling over a few days." },
      { name: "Temporary darkening", level: "Less common", text: "More likely in darker skin or with sun exposure after treatment." },
      { name: "Infection or reaction", level: "Rare", text: "Contact the clinic if you notice increasing pain, swelling or heat." },
    ],
    faqs: [
      {
        q: "What's in the mesotherapy blend?",
        a: "A clinician-selected blend of vitamins, antioxidants and hyaluronic acid, chosen for your skin at consultation.",
      },
    ],
    prices: [
      { option: "Single session", price: "£299" },
      { option: "Course of 3", price: "£799", note: "Total for the course" },
    ],
  },
  {
    slug: "vi-peel",
    name: "VI Peel",
    shortName: "VI Peel",
    icon: "drop",
    category: "Peels",
    summary: "A medical-grade VI Derm peel for pigmentation, uneven tone and acne-prone skin, with a take-home aftercare kit.",
    metaTitle: "VI Peel for Pigmentation London & Glasgow",
    metaDescription:
      "VI Peel at Harley Street Aesthetics London and Glasgow for uneven pigmentation, sun spots and acne marks. £595 including aftercare kit. Clinician-led. Results vary.",
    intro: [
      "The VI Peel is a professional-only chemical peel made by VI Derm. It combines acids and antioxidants in a single application to lift away damaged surface skin and encourage fresh, more even skin to form.",
      "It is used for uneven pigmentation and sun spots, as part of a management plan for melasma alongside strict sun protection, and for acne-prone skin and texture.",
    ],
    howItWorks: [
      "The VI Peel is a superficial-to-medium depth peel. It is applied in thin layers and left on the skin for several hours before your first aftercare step at home. Pigmented surface cells shed over the following week.",
      "VI Derm makes several formulations. Your clinician chooses the one that suits your skin, tone and goals at consultation, so we don't promise a specific version in advance.",
    ],
    facts: [
      { label: "Application", value: "20–30 minutes" },
      { label: "Peeling", value: "Around days 3–7" },
      { label: "Spacing", value: "About 4 weeks" },
      { label: "Price", value: "£595" },
    ],
    maySuit: [
      "Uneven skin tone, sun spots or pigmentation",
      "Melasma, managed alongside daily sun protection",
      "Breakouts, acne marks or shallow acne scarring",
      "People who can allow for about a week of visible peeling",
    ],
    mayNotSuit: [
      "Pregnancy or breastfeeding",
      "Certain acne medicines taken in the last six months",
      "An active cold sore, skin infection, open wound or eczema flare",
      "An aspirin allergy, or certain autoimmune or liver conditions (discussed at consultation)",
      "A recent tan, or sun exposure you can't avoid in the weeks after treatment",
    ],
    skinTone:
      "Your clinician chooses the formulation for your skin tone. Temporary darkening is more common in darker skin and after sun exposure or picking, so preparation and aftercare matter.",
    onTheDay: [
      { title: "Assessment", text: "Your clinician confirms the formulation for your skin." },
      { title: "Application", text: "The peel is applied in thin layers. Most people feel only mild warmth." },
      { title: "Home step", text: "You wash it off at home at the time you're given, then start your aftercare kit." },
      { title: "Peeling", text: "Peeling usually runs from around day 3 to day 7." },
    ],
    aftercare: ["Use only the products in your aftercare kit while you peel.", NO_PICK, SPF_AFTERCARE],
    risks: [
      { name: "Tightness and redness", level: "Common", text: "Skin often feels tight and may look flushed for the first few days." },
      { name: "Visible peeling", level: "Common", text: "Peeling from around day 3 to day 7, often most noticeable around the mouth and nose." },
      { name: "Breakout or cold sore flare", level: "Less common", text: "Tell your clinician if you get cold sores." },
      { name: "Temporary darkening", level: "Rare", text: "More often in darker skin tones or after sun exposure or picking." },
      { name: "Infection, scarring or allergic reaction", level: "Rare", text: "Contact the clinic promptly if you have concerns." },
    ],
    faqs: [
      { q: "Is the VI Peel painful?", a: "Most people feel only mild warmth or tingling during application. The main inconvenience is the visible peeling over the following week." },
      { q: "How many VI Peels will I need?", a: "Some people have one; others have a short series about four weeks apart. Your clinician reviews your skin after each peel before suggesting another." },
    ],
    prices: [{ option: "Single treatment, including aftercare kit", price: "£595" }],
  },
  {
    slug: "cosmelan-peel",
    name: "Cosmelan peel",
    shortName: "Cosmelan",
    icon: "drop",
    category: "Peels",
    summary: "A mesoestetic depigmentation programme: one in-clinic mask followed by a structured home-care plan over several months.",
    metaTitle: "Cosmelan Peel London & Glasgow",
    metaDescription:
      "Cosmelan depigmentation programme for stubborn pigmentation, sun spots and melasma-type patches at Harley Street Aesthetics. £995 including home care. Results vary.",
    intro: [
      "Cosmelan is a professional depigmentation programme by mesoestetic. It combines one in-clinic mask, left on for several hours and washed off at home, with a structured home-care programme over the following months.",
      "It is used for stubborn pigmentation, sun spots and marks left after inflammation, and as part of a long-term plan for melasma. It does not remove all pigmentation, and results are not permanent.",
    ],
    howItWorks: [
      "The mask and home products work on how pigment is produced, not only on the marks you can see. Visible peeling usually lasts one to two weeks after the mask.",
      "The home phase continues for several months and needs daily high-factor sunscreen. Pigmentation can return with sun exposure or hormonal change, so maintenance is part of the plan.",
    ],
    facts: [
      { label: "In clinic", value: "1 session" },
      { label: "Mask wear", value: "6–8 hours, as directed" },
      { label: "Downtime", value: "1–2 weeks of peeling" },
      { label: "Price", value: "£995" },
    ],
    maySuit: [
      "Patchy brown pigmentation on the face",
      "Sun spots or uneven tone from past sun exposure",
      "Dark marks left after acne or inflammation",
      "Medium or darker skin, where a depigmentation option is assessed for your skin type",
      "People who can commit to months of home care and daily high-factor sunscreen",
    ],
    mayNotSuit: [
      "Pregnancy or breastfeeding",
      "Certain acne medicines taken in the last six months",
      "An active skin infection, cold sore, open wound or inflammatory skin flare",
      "A recent tan, or a sunny holiday planned in the first months of treatment",
      "A previous reaction to Cosmelan or similar products",
    ],
    skinTone:
      "Cosmelan can be considered for medium and darker skin, subject to clinician assessment. Irritation can still cause temporary darker patches, particularly if sun protection lapses.",
    onTheDay: [
      { title: "Assessment", text: "Your clinician looks at the pattern and likely depth of your pigmentation." },
      { title: "Mask", text: "The Cosmelan mask is applied in clinic." },
      { title: "At home", text: "You wash the mask off at home after the time you're given." },
      { title: "Home phase", text: "You start the home-care programme and daily sunscreen." },
    ],
    aftercare: ["Follow the home-care programme exactly as directed.", NO_PICK, SPF_AFTERCARE, "Avoid sun exposure and heat, especially in the first months."],
    risks: [
      { name: "Redness and peeling", level: "Common", text: "Skin usually looks red and peels like mild sunburn, most visibly for one to two weeks." },
      { name: "Tightness, dryness and itching", level: "Common", text: "Can continue through the first month as the home phase begins." },
      { name: "Irritation", level: "Less common", text: "Your clinician may adjust the home routine if your skin reacts more strongly than expected." },
      { name: "Temporary darkening", level: "Less common", text: "Particularly in darker skin or if sun protection lapses." },
      { name: "Allergic reaction or uneven, lighter patches", level: "Rare", text: "Careful assessment and timing help reduce these risks." },
    ],
    faqs: [
      { q: "Is Cosmelan permanent?", a: "No. Pigmentation can return, especially with sun exposure or hormonal change. Daily sunscreen and a maintenance plan help protect your result." },
      { q: "What does the £995 include?", a: "The in-clinic mask and the Cosmelan home-care programme." },
    ],
    prices: [{ option: "In-clinic mask plus Cosmelan home-care programme", price: "£995" }],
  },
  {
    slug: "ipl-photofacial",
    name: "IPL photofacial",
    shortName: "IPL",
    icon: "light",
    category: "Light & laser",
    summary: "Intense pulsed light for sun spots, freckling and blotchy tone on lighter, untanned skin.",
    metaTitle: "IPL for Sun Spots London & Glasgow",
    metaDescription:
      "IPL photofacial for sun spots, freckling and blotchy pigmentation on lighter, untanned skin at Harley Street Aesthetics. £295 a session. Not for darker skin types. Results vary.",
    intro: [
      "An IPL facial uses broad-spectrum flashes of filtered light, rather than a single-wavelength laser, to treat sun-induced brown spots, freckling and redness.",
      "IPL is suited to lighter, untanned skin (Fitzpatrick types I–IV). It is not suitable for darker skin types (V–VI), tanned skin or melasma. If IPL isn't right for you, we'll recommend a safer alternative.",
    ],
    howItWorks: [
      "The light is absorbed by pigment, and treated brown spots usually darken and form a fine crust that flakes away over roughly 7–10 days.",
      "IPL is course-based. Results build over 3–5 sessions about four weeks apart, and long-term results depend on sun protection.",
    ],
    facts: [
      { label: "Sessions", value: "Usually 3–5" },
      { label: "Spacing", value: "About 4 weeks" },
      { label: "Skin types", value: "Fitzpatrick I–IV" },
      { label: "Price", value: "£295 a session" },
    ],
    maySuit: [
      "Sun spots, freckling or blotchy tone from sun exposure",
      "Lighter skin types (Fitzpatrick I–IV) with no current tan",
      "People able to avoid the sun and use SPF 30 or higher every day",
    ],
    mayNotSuit: [
      "Darker skin types (Fitzpatrick V–VI)",
      "Sun exposure, sunbeds or self-tan in the last four weeks",
      "Medicines or supplements that make skin sensitive to light, or certain acne medicines in the last six months",
      "Pregnancy or breastfeeding",
      "Melasma, active infection, cold sores or broken skin in the area",
      "Light-triggered epilepsy or a history of keloid scarring",
    ],
    skinTone:
      "IPL is not suitable for darker skin types (Fitzpatrick V–VI) or tanned skin. Some people with type IV skin can be treated cautiously with conservative settings after a patch test, but that is a clinical decision made at consultation. A carbon laser facial or a chemical peel may be recommended instead.",
    onTheDay: [
      { title: "Skin typing", text: "Your clinician confirms your skin type and checks for any recent tan." },
      { title: "Protection", text: "Protective eyewear and a cooling gel are used throughout." },
      { title: "Treatment", text: "Short flashes of light over the treated areas, usually about 30 minutes for a full face." },
      { title: "Afterwards", text: "Treated spots darken and flake over about 7–10 days." },
    ],
    aftercare: [SPF_AFTERCARE, "Avoid sun, sunbeds and self-tan between sessions.", "Let darkened spots flake away on their own."],
    risks: [
      { name: "Redness and swelling", level: "Common", text: "Skin often looks pink and feels warm for a few hours to a day or two." },
      { name: "Darkening of treated spots", level: "Common", text: "Brown spots darken and crust before flaking away over roughly 7–10 days. This is expected." },
      { name: "Blistering or crusting", level: "Less common", text: "Small blisters or crusts can occasionally form." },
      { name: "Burns or lasting pigment change", level: "Rare", text: "Lighter or darker patches and, very rarely, scarring. The risk is higher in tanned or darker skin." },
      { name: "Eye injury", level: "Rare", text: "Protective eyewear is worn throughout and treatment is kept away from the eye area." },
    ],
    faqs: [
      { q: "Why isn't IPL suitable for darker skin?", a: "Darker skin contains more melanin, which absorbs the light as well as the spot. This raises the risk of burns and new lighter or darker patches. We'll recommend a safer option instead." },
      { q: "Can IPL treat melasma?", a: "We don't use IPL for melasma, because heat can make melasma worse." },
    ],
    prices: [{ option: "Single session", price: "£295" }],
  },
  {
    slug: "virtue-rf-microneedling",
    name: "Virtue RF microneedling",
    shortName: "Virtue RF",
    icon: "needle",
    category: "Microneedling",
    summary: "Insulated radiofrequency microneedling, used with low heat beneath the surface for marks after breakouts and skin texture.",
    metaTitle: "Virtue RF Microneedling for Acne Marks London & Glasgow",
    metaDescription:
      "Virtue RF microneedling at Harley Street Aesthetics for marks after breakouts, texture and pores. From £399. Numbing cream, cooling mask and LED. Results vary.",
    intro: [
      "Virtue RF combines very fine insulated microneedles with controlled radiofrequency energy delivered beneath the skin surface, while the top layer of skin is protected.",
      "For pigmentation, it is mainly used for marks left after breakouts, where a low-heat approach beneath the surface is chosen. It also helps texture and pores.",
    ],
    howItWorks: [
      "The treatment stimulates the skin's collagen response at several depths. A numbing cream is used beforehand, and a cooling mask and LED are used for comfort.",
      "An option with exosomes is also available. Evidence for exosome products in skin is still developing, and your clinician will explain whether it is appropriate for you.",
    ],
    facts: [
      { label: "Appointment", value: "60–75 minutes" },
      { label: "Downtime", value: "Redness for about 24 h" },
      { label: "Course", value: "Often 3 sessions" },
      { label: "Price", value: "From £399" },
    ],
    maySuit: ["Marks left after breakouts", "Uneven texture, enlarged pores or acne scarring", "People who want a treatment that works beneath the surface"],
    mayNotSuit: [
      "Active infection, cold sores or broken skin in the area",
      "Pregnancy or breastfeeding",
      "Certain acne medicines taken in the last six months",
      "A pacemaker or other implanted electronic device (discussed at consultation)",
      "A history of keloid scarring",
    ],
    skinTone:
      "Because the energy is delivered beneath the surface, RF microneedling can be considered for a range of skin tones. Settings are chosen after assessing your skin, and darker skin still needs careful aftercare and sun protection.",
    onTheDay: [
      { title: "Numbing", text: "Numbing cream is applied to the treatment area." },
      { title: "Treatment", text: "The RF microneedling handpiece is passed over the skin." },
      { title: "Comfort", text: "A cooling mask and LED are used to calm the skin." },
      { title: "Afterwards", text: "Redness usually settles within about 24 hours." },
    ],
    aftercare: ["Avoid make-up, heat and exercise for 24 hours.", SPF_AFTERCARE, "Use gentle skincare until your clinician says you can restart active products."],
    risks: [
      { name: "Redness and warmth", level: "Common", text: "Most people have about 24 hours of redness." },
      { name: "Small marks or swelling", level: "Common", text: "Tiny marks or mild swelling for a day or two." },
      { name: "Temporary darkening", level: "Less common", text: "Possible after inflammation, especially in darker skin or with sun exposure." },
      { name: "Infection or scarring", level: "Rare", text: "Follow aftercare advice and contact the clinic if you have concerns." },
    ],
    faqs: [
      { q: "Does Virtue RF hurt?", a: "Numbing cream is used beforehand, with a cooling mask and LED afterwards. Most people find it manageable; comfort varies." },
      { q: "Will it treat all pigmentation?", a: "No. For pigmentation it is mainly used for marks after breakouts. Other types may suit a different treatment or a combined plan." },
    ],
    prices: [
      { option: "Face, 1 session", price: "£399" },
      { option: "Face, 3-session course", price: "£999", note: "Total for the course" },
      { option: "Face & neck, 1 session", price: "£599" },
      { option: "Face with exosomes, 1 session", price: "£699" },
    ],
  },
  {
    slug: "carbon-laser-facial",
    name: "Carbon laser facial",
    shortName: "Carbon laser",
    icon: "light",
    category: "Light & laser",
    summary: "Carbon lotion cleared with a 1064 nm Q-switched Nd:YAG laser, for dull, oily or congested skin. Suits a wider range of skin types than IPL.",
    metaTitle: "Carbon Laser Facial London & Glasgow",
    metaDescription:
      "Carbon laser facial (1064 nm Q-switched Nd:YAG) for dull, oily skin and enlarged pores at Harley Street Aesthetics. £295 a session. Suits a wider range of skin types than IPL.",
    intro: [
      "A carbon laser facial applies a thin layer of carbon lotion to the face, which is then cleared with a 1064 nm Q-switched Nd:YAG laser. It gently exfoliates the surface and warms the skin beneath.",
      "It is mainly for dull, oily or congested skin and enlarged pores, so it suits people whose main concern is a dull, uneven-looking complexion rather than distinct dark spots.",
    ],
    howItWorks: [
      "The carbon absorbs the laser energy and is lifted away, taking surface debris with it. The 1064 nm wavelength is less strongly absorbed by melanin than many light treatments, so it suits a wider range of skin types than IPL.",
      "Results build gradually over a course and vary between individuals.",
    ],
    facts: [
      { label: "Appointment", value: "30–45 minutes" },
      { label: "Sessions", value: "3–6, 2–4 weeks apart" },
      { label: "Downtime", value: "Pink for a few hours" },
      { label: "Price", value: "£295 a session" },
    ],
    maySuit: ["Dull, oily or congested skin", "Enlarged pores", "Mildly uneven-looking tone", "People for whom IPL isn't suitable"],
    mayNotSuit: ["A recent tan or sunburn", "Active infection or broken skin", "Pregnancy or breastfeeding", "Medicines that make skin sensitive to light"],
    skinTone: "Suits a wider range of skin types than IPL, subject to assessment. Your clinician may carry out a test patch before your first session.",
    onTheDay: [
      { title: "Cleanse", text: "The skin is cleansed." },
      { title: "Carbon", text: "A fine carbon lotion is brushed over the skin and left to dry." },
      { title: "Laser", text: "The laser passes over the face in short pulses, with eye protection." },
      { title: "Afterwards", text: "Skin may be pink for a few hours." },
    ],
    aftercare: [SPF_AFTERCARE, "Avoid heat and exfoliating products for a day or two."],
    risks: [
      { name: "Redness", level: "Common", text: "Usually settles within hours." },
      { name: "Dryness", level: "Less common", text: "Mild dryness for a day or two." },
      { name: "Pigment change", level: "Rare", text: "Temporary darker or lighter patches are possible, especially in tanned skin." },
    ],
    faqs: [{ q: "Will a carbon laser facial remove dark spots?", a: "It is mainly for dull, oily skin and pores. Distinct dark spots usually suit a different treatment, which your clinician can suggest." }],
    prices: [{ option: "Single session", price: "£295" }],
  },
  {
    slug: "dark-circles-treatment",
    name: "Dark circles treatment",
    shortName: "Dark circles",
    icon: "search",
    category: "Targeted",
    summary: "A short course for under-eye darkness caused by pigment, thin skin or both, tailored to your skin tone.",
    metaTitle: "Dark Circles Treatment London & Glasgow",
    metaDescription:
      "Dark circles treatment at Harley Street Aesthetics for under-eye darkness from pigment or thin skin. £395, or £995 for three sessions. Assessment first. Results vary.",
    intro: [
      "Dark circles can come from pigment in the skin, thin skin that shows the blood vessels beneath, shadows from hollowness, or a mix of these.",
      "Our dark circles treatment is a short course for darkness caused by pigment, thin skin or both, tailored to your skin tone. If the darkness is mainly a shadow from hollowness, a different approach may suit you better; your consultation decides.",
    ],
    howItWorks: [
      "Your clinician first works out what is causing the darkness. The treatment is then planned for your skin tone and the cause.",
      "Results vary, and dark circles can return with sleep, allergies, sun exposure and age.",
    ],
    facts: [
      { label: "Appointment", value: "45 minutes" },
      { label: "Course", value: "1 or 3 sessions" },
      { label: "Price", value: "From £395" },
    ],
    maySuit: ["Brownish under-eye darkness from pigment", "Thin under-eye skin", "People who want an assessment of what is causing their dark circles"],
    mayNotSuit: ["Swelling or darkness that has appeared suddenly, which should be checked by a doctor", "Active infection or eczema around the eyes", "Pregnancy or breastfeeding"],
    skinTone: "Under-eye pigmentation is common in medium and darker skin tones. The treatment is tailored to your skin tone after assessment.",
    onTheDay: [
      { title: "Assessment", text: "We look at whether pigment, thin skin, hollowness or a mix is involved." },
      { title: "Plan", text: "Your clinician explains the course and what is realistic." },
      { title: "Treatment", text: "The treatment is carried out as planned for your skin." },
      { title: "Review", text: "Progress is reviewed before any further session." },
    ],
    aftercare: [SPF_AFTERCARE, "Your clinician will give you written aftercare for the eye area."],
    risks: [
      { name: "Redness or swelling", level: "Common", text: "The eye area can look puffy or pink for a short time." },
      { name: "Temporary darkening", level: "Less common", text: "Irritation can cause temporary darkening, particularly in darker skin." },
    ],
    faqs: [
      { q: "Will my dark circles go away permanently?", a: "We can't promise that. Dark circles have several causes and can return. Your clinician will explain what is realistic for you." },
      { q: "Can the AI under-eye analysis diagnose my dark circles?", a: "No. Photo-based tools give an indication only. The cause is confirmed at consultation." },
    ],
    prices: [
      { option: "Single session", price: "£395" },
      { option: "Course of 3 sessions", price: "£995", note: "Total for the course" },
    ],
  },
  {
    slug: "co2-laser-resurfacing",
    name: "CO2 laser resurfacing",
    shortName: "CO2 laser",
    icon: "cell",
    category: "Light & laser",
    summary: "Fractional ablative CO2 laser for sun damage, pigmentation irregularity and uneven tone, with genuine downtime.",
    metaTitle: "CO2 Laser Resurfacing for Sun Damage London & Glasgow",
    metaDescription:
      "Fractional CO2 laser resurfacing for sun damage, uneven tone and texture at Harley Street Aesthetics. Full face from £799. Doctor assesses suitability. Real downtime. Results vary.",
    intro: [
      "Fractional CO2 laser resurfacing sends microscopic columns of laser energy into the surface and deeper layers of the skin, triggering the skin's repair and collagen response.",
      "For pigmentation, it is used for sun damage, pigmentation irregularity and uneven tone, often alongside texture concerns such as lines and scarring.",
    ],
    howItWorks: [
      "Because it is an ablative laser, the skin goes through a real healing phase: it is red, swollen and peels as it heals. Your clinician explains what recovery will look like for you before you decide.",
      "Deeper skin tones need particular care with CO2 resurfacing. A doctor assesses suitability based on your skin type, medical history, sun exposure and skincare.",
    ],
    facts: [
      { label: "Type", value: "Fractional ablative laser" },
      { label: "Downtime", value: "Real downtime, explained at consultation" },
      { label: "Suitability", value: "Doctor assessment" },
      { label: "Price", value: "Full face £799" },
    ],
    maySuit: ["Sun damage and uneven, mottled tone", "Pigmentation irregularity with texture concerns", "People who can plan time for recovery"],
    mayNotSuit: ["Pregnancy or breastfeeding", "Certain acne medicines, currently or recently", "Active infection", "A history of keloid scarring", "A recent tan"],
    skinTone:
      "Deeper skin tones need particular care, because of a higher risk of pigment changes after resurfacing. A doctor decides whether CO2 is suitable for your skin.",
    onTheDay: [
      { title: "Assessment", text: "A doctor confirms suitability and the treatment area." },
      { title: "Numbing", text: "Numbing is applied for comfort." },
      { title: "Treatment", text: "The fractional laser is passed over the area." },
      { title: "Recovery", text: "You'll get detailed aftercare for the healing phase." },
    ],
    aftercare: ["Follow the written aftercare exactly during healing.", NO_PICK, SPF_AFTERCARE, "Avoid sun exposure and heat while the skin heals."],
    risks: [
      { name: "Redness, swelling and peeling", level: "Common", text: "Expected as the skin heals." },
      { name: "Temporary darkening", level: "Less common", text: "More likely in darker skin or with sun exposure during healing." },
      { name: "Infection or cold sore flare", level: "Less common", text: "Tell your clinician if you get cold sores." },
      { name: "Scarring or lasting pigment change", level: "Rare", text: "Careful assessment and aftercare reduce these risks." },
    ],
    faqs: [{ q: "How long is the recovery?", a: "CO2 resurfacing has real downtime. Your clinician will explain what to expect for your skin and the area treated, so you can plan around it." }],
    prices: [
      { option: "Full face, 1 session", price: "£799" },
      { option: "Half face", price: "£599" },
      { option: "Neck", price: "£799" },
      { option: "Face and neck", price: "£1,299" },
    ],
  },
];

export const treatmentBySlug = (slug: string) => TREATMENTS.find((t) => t.slug === slug);
