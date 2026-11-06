# Review checklist

Everything here needs a human check before launch. Run `npm run check` to rebuild and re-run the automated checks, and `npm run check:tbc` to list the placeholders still on the site.

## Start here: decisions only you can make
1. **Subdomain.** `pigmentation.harleystreetaesthetic.co.uk` is already the AI analysis app. Pick the site's subdomain (placeholder `pigmentation-treatment.`).
2. **Signature treatment.** The main website says a needle-free colostrum programme at £349 a session; the Copilot says VirtueRF + Helios III laser + mesotherapy from £399. The site follows the website. Confirm which is right, and update the other source too.
3. **Footer cross-links** to the Endolift and hair loss sites: yes or no.
4. **301 redirects** from the 19 Medics URLs listed in `docs/deployment.md`.

## 1. QA results (6 November 2026)

| Check | Result |
|---|---|
| lint / typecheck / build | 0 errors; 44 static routes |
| check:links | All internal links resolve; phones tel:+442046283165, tel:+441414888985 |
| check:compliance | Pass |
| Horizontal overflow | None on 20 pages at 360-1920 px (header nav moved to 1720 px) |
| Browser tests (scripts/qa-functional.cjs) | 19/19 pass |
| Screenshots | docs/screens/<page>-{mobile,tablet,desktop}.jpg for 20 pages, plus ref-hsa-* references |
| Lighthouse | **Not finished**: run was in progress when work stopped. Re-run before launch. |

## 2. Compliance review (ASA/CAP, POM rules, skin cancer, skin of colour): please confirm

Automated scan (`npm run check:compliance`, passes) plus a manual read of every page.

**Prescription-only medicines**
1. No POM is named anywhere: no hydroquinone, tretinoin, triple-combination creams, isotretinoin, tranexamic acid or glutathione. The scan blocks these names. Wording used: "Prescription treatments may be discussed at your consultation if clinically appropriate." It appears on the home page, every treatment page, most condition pages, the treatments index, the darker-skin page and the prevention page.
2. **Borderline:** contraindication lists say "certain acne medicines taken in the last six months" instead of naming isotretinoin, which the main website names. Confirm this is clear enough clinically.
3. **Borderline:** the drug-induced pigmentation page names medicine *classes* ("some antibiotics, antimalarials, heart medicines and chemotherapy") as possible causes. It doesn't name or promote any product. Confirm you're comfortable.
4. **Borderline:** the Copilot's Signature protocol uses tranexamic acid in injected mesotherapy, and its home skincare list includes tranexamic acid. Neither is mentioned on the site. If you switch the Signature page to the Copilot version, keep tranexamic acid out of the copy.
5. **Borderline:** the Virtue RF page mentions an "option with exosomes" with "evidence … is still developing". Exosome products are not licensed medicines in the UK. Confirm the product and wording.
6. The prevention page names cosmetic ingredients (vitamin C, niacinamide) as examples of brightening skincare. These are cosmetic, not prescription. Alpha arbutin is left out.

**ASA/CAP**
7. No guarantees, "permanent", "gone for good", "removes all pigmentation", superlatives, comfort claims ("pain-free"), time pressure, discounts or unsourced statistics. The scan checks all of these. Prices are shown as guide prices.
8. Melasma is described as long-term and likely to return on the melasma, hormonal, results, Signature and Cosmelan pages and in the FAQs. Freckles are described as returning each summer.
9. **Copilot never-say rules applied:** no "lighten / whiten / bleach" (aim phrased as "a more even-looking complexion at your natural skin tone"), no "not a laser", no 10 Harley Street, no "free doctor appointment". The scan blocks these.
10. **Borderline:** the Copilot says not to *call a patient's* pigmentation melasma unless their report names it. The site has an educational melasma page and uses the word in treatment descriptions (e.g. "part of a management plan for melasma"), but never tells a reader they have it, and the quiz says "pages to read", not "you have". Confirm this is acceptable.
11. **"Doctor-led"** is used for the clinic and treatment planning (as the Copilot and main site describe the protocol). Consultations are described as "with our medical team". Confirm every pigmentation plan is overseen by a doctor; otherwise switch to "clinician-led".
12. No under-18 targeting. Every treatment page lists "Anyone under 18" as unsuitable, and the disclaimer, footer and form say 18+.
13. No reviews or before/after photos are shown. The sections explain why. The results page promises consent, no retouching, consistent lighting and a range of skin tones: confirm the clinic can meet that before adding photos.

**Skin cancer safety**
14. The notice ("Any new, changing, irregular, bleeding or itchy dark spot or mole must be checked by a doctor before any cosmetic treatment. We look for this at every consultation…") is on every condition page (top of page), every treatment page, the quiz page and result, the darker-skin page, home, conditions, treatments, diagnosis, prevention, FAQ and location pages. The scan fails if it's missing from any condition, treatment, quiz or darker-skin page.
15. The quiz's red-flag answers (new/changing, raised/irregular, bleeding/itchy) show "Please see a doctor first" and remove all treatment suggestions.

**Skin of colour**
16. Every condition and treatment page has a skin-of-colour note linking to `/pigmentation-in-darker-skin/`. IPL is stated as unsuitable for Fitzpatrick V–VI and tanned skin (Copilot and main site). The quiz removes IPL for medium/darker skin or a tan.
17. **Check:** treatment-specific skin-tone wording is general except for IPL. Cosmelan ("can be considered for medium and darker skin, subject to assessment") follows the main website; the Copilot says this isn't documented. Virtue RF ("can be considered for a range of skin tones") is softer than the main site's "all skin tones (Fitzpatrick I–VI)", which the Copilot doesn't support. Please have a clinician confirm each one.

**Clinical content**
18. **A clinician should read every condition and treatment page** (`src/lib/conditions.ts`, `src/lib/treatments.ts`). Facts, prices, sessions, downtime and most risks come from the main website or the Copilot. General content (condition descriptions, some "may not suit" items such as the Virtue RF pacemaker line, risks for peel + mesotherapy, carbon laser, Q-switched laser, dark circles and CO2) is standard medical information, not the clinic's own protocol.
19. Body, hands/chest, lip, café-au-lait, drug/heat-induced and white-patch pages are assess-and-advise or referral pages, because no playbook documents treating them. Confirm the referral wording and fill the `[TBC]`s.
20. **Health data:** the enquiry form's "main concern" dropdown is health-related. The form tells people not to send detailed medical information, and the privacy policy says explicit consent is the basis. Confirm with your DPO.
21. Privacy policy company details (Harley Street Medics Ltd, 211B Main Street, Bellshill ML4 1AJ, ICO ZB819731) come from the Endolift privacy policy. Confirm they're current.

## 3. Main-website issues spotted (not on this site)
- The main site and the AI app still show 10 Harley Street.
- Main-site treatment pages name isotretinoin; the Virtue RF page says "Zero Pain" and "Suitable for all skin tones (Fitzpatrick I–VI)".
- The main-site reviews block ("2 days ago", "Dr. Vincent") can't be verified.

## 4. Every `[TBC]` placeholder on the site

Run `npm run check:tbc -- --md` for the live list (23 unique placeholders on 6 Nov). Each is also covered in docs/open-questions.md.
