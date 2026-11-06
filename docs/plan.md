# Plan — Pigmentation site

## Sitemap (all URLs end with `/`)

| URL | Page | Primary keyword |
|---|---|---|
| `/` | Home | pigmentation treatment London & Glasgow |
| `/conditions/` | All pigmentation concerns | types of pigmentation |
| `/conditions/melasma/` | Melasma | melasma treatment London |
| `/conditions/sun-spots/` | Sun spots / solar lentigines | sun spot removal |
| `/conditions/age-spots/` | Age spots | age spot removal |
| `/conditions/freckles/` | Freckles | freckle treatment |
| `/conditions/post-inflammatory-hyperpigmentation/` | PIH: acne marks, post-injury and post-procedure marks | acne marks treatment |
| `/conditions/hormonal-pigmentation/` | Pregnancy, contraceptive pill, menopause | pregnancy mask chloasma |
| `/conditions/uneven-skin-tone/` | Uneven tone and dull skin | uneven skin tone treatment |
| `/conditions/dark-circles/` | Periorbital pigmentation | dark circles treatment |
| `/conditions/body-pigmentation/` | Underarms, inner thighs, knees and elbows (assess) | dark underarms |
| `/conditions/hands-and-chest-pigmentation/` | Hands, chest, neck | age spots on hands |
| `/conditions/lip-and-perioral-pigmentation/` | Lips and around the mouth (assess) | upper lip pigmentation |
| `/conditions/cafe-au-lait-and-birthmarks/` | Café-au-lait marks and pigmented birthmarks (assess + refer) | café au lait spots |
| `/conditions/drug-and-heat-induced-pigmentation/` | Medicine-related and heat-induced (assess + refer) | erythema ab igne |
| `/conditions/hypopigmentation-and-vitiligo/` | White patches and vitiligo (assess + refer) | white patches on skin |
| `/pigmentation-in-darker-skin/` | Skin of colour page | pigmentation treatment for dark skin |
| `/treatments/` | All treatments | pigmentation treatments |
| `/treatments/signature-pigmentation-programme/` | Signature Programme (see decision #6) | pigmentation treatment London |
| `/treatments/chemical-peels/` | Chemical peels | chemical peel for pigmentation |
| `/treatments/peel-and-mesotherapy/` | Chemical peel + mesotherapy | |
| `/treatments/vi-peel/` | VI Peel | VI Peel London |
| `/treatments/cosmelan-peel/` | Cosmelan | Cosmelan peel London |
| `/treatments/ipl-photofacial/` | IPL | IPL sun spots |
| `/treatments/q-switched-laser/` | Q-switched Nd:YAG (Helios III) | Q-switched laser pigmentation |
| `/treatments/virtue-rf-microneedling/` | Virtue RF | RF microneedling acne marks |
| `/treatments/carbon-laser-facial/` | Carbon laser facial | carbon laser peel |
| `/treatments/dark-circles-treatment/` | Dark circles | dark circles treatment London |
| `/treatments/co2-laser-resurfacing/` | Fractional CO2 | CO2 laser sun damage |
| `/diagnosis/` | Consultation, free AI analysis, 3D skin analysis, skin typing, skin check | pigmentation consultation |
| `/which-treatment/` | Guided quiz | which pigmentation treatment |
| `/prevention-and-aftercare/` | SPF, routine, triggers, aftercare | how to prevent pigmentation |
| `/pricing/` | Pricing | pigmentation treatment cost |
| `/results/` | Results: honest explanation, placeholder | |
| `/faq/` | FAQ | |
| `/about/` | Clinics and team | |
| `/london/`, `/glasgow/` | Location pages | pigmentation clinic London / Glasgow |
| `/book/` | Calendar, enquiry form, AI analysis, phone/WhatsApp | |
| `/privacy-policy/`, `/cookie-policy/`, `/terms/`, `/medical-disclaimer/` | Legal | |

Not built: skin boosters (not a pigmentation treatment), glutathione drip (Wellness, compliance risk), any prescription product page.

## Page wireframes (text)

**Home**
1. Hero: eyebrow "Doctor-led pigmentation clinic"; H1 "Pigmentation treatment in London & Glasgow"; subcopy (type and depth first, then a plan for your skin); CTAs "Book consultation" / "Free AI pigmentation analysis"; stat strip (All skin tones assessed · Diagnosis first · 11 treatment options · London & Glasgow).
2. "Find your pigmentation type": pattern picker (patches on cheeks/upper lip, defined spots, marks after spots, under-eyes, body areas, white patches) + skin cancer notice.
3. Conditions grid.
4. Treatments grid.
5. How diagnosis works: 4 steps (free AI analysis → consultation → skin check and skin typing → plan, patch test, review).
6. Skin of colour safety band → /pigmentation-in-darker-skin/.
7. Results: honest note (melasma is chronic and can recur) + consent placeholder.
8. Team.
9. Pricing teaser (consultation free online, Signature £349 a session, peels from £149).
10. Reviews placeholder.
11. FAQ (6).
12. CTA band; booking calendar section; clinics; disclaimer.

**Condition page**: hero (eyebrow, H1, summary, CTAs) → skin cancer notice → overview + "what it looks like" → causes / triggers → how we assess → treatment options (cards) + skin-of-colour note → prevention → related conditions → FAQ → disclaimer → CTA.

**Treatment page**: hero → fact strip (sessions, downtime, appointment, price) → how it works → pigmentation it may help → may suit / may not suit → skin-of-colour note → on the day → aftercare → risks → FAQ → related conditions/treatments → skin cancer notice + disclaimer → CTA.

**Darker skin page**: why pigment cells react more, PIH risk, which treatments need extra care (IPL not for V–VI; lasers and deeper peels need careful settings), what we do (skin typing, patch test, preparation, gentler options), FAQ.

**Quiz**: 6 questions (what you notice, where, how long / changes, skin tone, recent tan or pregnancy, what matters most). Result: topics to read and treatments that may be discussed, always "book a consultation"; red-flag path.

**Book**: calendar card left; "Prefer to talk?" with clinic cards, WhatsApp, email right; enquiry form below; AI analysis card; disclaimer.

## Components
Reused from the hair loss site: Header (utility bar, wordmark, nav, switcher, phone, CTA), MobileMenu, Footer, StickyMobileBar, LocationProvider/ClinicTabs/LocationPage, Button, Section, SectionHeading, PageHero (breadcrumbs + schema), CheckList, Disclaimer, Tbc, JsonLd, ConditionCard, TreatmentCard, FactStrip, RiskList, StepTimeline, FaqAccordion, CtaBand, ClinicCards, BookingCalendar, CookieConsent, Analytics, Quiz, EnquiryForm (restored from hair loss history).
New: SkinCheckNotice (skin cancer warning), SkinToneNote (skin-of-colour note), SkinToneArt (abstract tone spectrum), AiAnalysisCard, ReviewsPlaceholder.

## Content outline
- `src/lib/conditions.ts`: 14 conditions with intro, appearance, causes/triggers, assessment, treatments, options, prevention, referral notes, FAQs, related.
- `src/lib/treatments.ts`: 11 treatments with facts, how it works, concerns, suitability, skin-tone note, on the day, aftercare, risks, FAQs, prices.
- `src/lib/faqs.ts`: general FAQs from Copilot themes.
- Compliance wording rules: see decisions #9–#13.
