# Research — Pigmentation Website (Harley Street Aesthetics)

Researched 6 November 2026. Everything was read-only: nothing was posted, edited, sent or changed on any account or website.

Source tags used below:

- **[HSA]** harleystreetaesthetic.co.uk, public pages fetched and rendered in headless Chrome on 6 Nov 2026 (pigmentation, chemical peels, VI Peel, Cosmelan, IPL, carbon laser, peel + mesotherapy, Virtue RF, pricing tabs, team, contact). The pigmentation page says "Content last reviewed 28 October 2026 by the Harley Street Aesthetics medical team".
- **[AI]** https://pigmentation.harleystreetaesthetic.co.uk, the clinic's live "Free AI Pigmentation & Dark Spot Analysis" app (Vercel).
- **[PB]** Company Copilot (copilot-hsm.strategyguys.agency), Harley Street Aesthetics workspace. The playbook pages can't be opened with this login, so I asked the Copilot chat three internal questions (marked "not about a patient"). Playbooks cited in its answers: **[PB-SIG]** "Signature Pigmentation Protocol", **[PB-FP]** "Facials & Peels (Carbon Laser, IPL, Peels, VI Peel, Cosmelan)", **[PB-CO2]** "CO2 Laser Resurfacing", **[PB-DC]** "Dark Circles Treatment", **[PB-SB]** "Skin Boosters (Skin Booster, NAD, Ludia)".
- **[FB]** Meta Business Suite, portfolio "Harley Street Medics" (297402053429019), read-only.
- **[HL]** The hair loss sibling site, `C:\Users\Welcome\Desktop\Hairloss_Website` (read-only), including its git history (the HSA-branded version before it was rebranded to Wellness on 3 Nov).
- **[END]** The Endolift sibling. `C:\Users\Welcome\Downloads\endolift-site` **still does not exist on this PC**. Its built output and notes were used for the hair loss site; its patterns reach this site through [HL]. Nothing in `Desktop\Endolift_Website` was changed.
- **[HSM-old]** harleystreetmedics.clinic pigmentation pages. Background only. Nothing was copied (no design, phone numbers, prices, branding or links).

---

## 1. Brand design study [HSA] [HL]

Reference screenshots: `docs/screens/ref-hsa-*.jpg` (home, Glasgow, pigmentation, pricing, contact, AI analysis; desktop and mobile).

Nothing has changed since the hair loss study (2 Nov), so the same tokens are used:

| Item | Finding |
|---|---|
| Theme | Dark luxury: near-black #050505 / #0a0a0a, cards #111, cream text #fdfcfb, grey #9ca3af |
| Brand gold | #D4AF37; gradient `#d4af37 → #e5c558 → #aa8c2c` on primary buttons |
| Fonts | Playfair Display (headings), Montserrat (body), uppercase eyebrows with 0.22em tracking |
| Buttons | Square, uppercase, 0.2em tracking, 48 px min height; gold gradient primary, gold outline secondary |
| Header | Wordmark, London/Glasgow pill switcher, phone, gold "Book" button. Main nav includes "Free AI Check" |
| Footer | Black, clinics with phone numbers, WhatsApp, email, legal links |
| Mobile | Sticky Call / WhatsApp / Book bar |
| Main-site pigmentation page | Hero "Pigmentation Treatment in London: melasma, sun spots & uneven tone"; "Start Free AI Skin Analysis" is the primary CTA; FAQ, candidate list, risks, recovery timeline, sources (BAD, NHS, J Clin Aesthet Dermatol) and a "content last reviewed" line |

**Main site pigmentation-related pages** (sitemap, 6 Nov): `/london|glasgow/treatments/pigmentation`, `chemical-peels`, `peel-mesotherapy`, `vi-peel`, `cosmelan-peel`, `ipl-facial`, `carbon-laser-facial`, `virtue-rf`, `free-skin-consultation`, `pricing`, `team`, `contact`.

### Clinics (verified on [HSA] contact pages, 6 Nov 2026)
- **London:** 2 Grosvenor Gardens, London SW1W 0DH, and 10 Harley Street, London W1G 9PF. Tel **020 4628 3165**. ✅ matches the brief.
- **Glasgow:** 5th Floor, Ingram House, 227 Ingram Street, Glasgow G1 1DA. Tel **0141 488 8985**. ✅ matches the brief.
- WhatsApp helpline **07700 106236**; email **hello@harleystreetaesthetic.co.uk**. [HSA]
- ⚠ **10 Harley Street:** the Copilot says it is under construction and not seeing patients, and not to send people there [PB-SIG]. The main site and the AI app still show it. The new site lists Grosvenor Gardens only.
- Opening hours (Endolift config via [HL]): London Tue–Fri 9am–7pm, Sat 9am–6pm; Glasgow Mon–Fri 9am–6pm. The AI app says "Mon–Sat · by appointment". Flagged.

### Team [HSA /london/team]
Mr Khalil Al-Nakib FRCSEd (Consultant Plastic Surgeon, member of the British Laser Association), Dr Ayda Soltanzadeh (Consultant Dermatologist), **Dr Nina Ku (Dermatologist; "particular interest in dermoscopy, skin cancer screening, pigmentation…")**, Dr Mazhar Khan MBBS MRCGP DRCOG DFFP (Medical Doctor), Dr Afraa Mohammed MBBS MD (Dermatologist). Described as GMC-registered; **no GMC numbers shown**. **Dr Ahmad** fronts the pigmentation adverts [PB-SIG] but has no profile on the HSA team page.

### Consultations and money [HSA pricing, Consultations tab]
- Online consultation **Free**, 15 min. In-clinic consultation **£195**, 30 min, redeemable against treatment. **3D Skin Analysis £50**, 30 min: "Visia/Observ Analysis, Pigmentation Check, Texture Analysis, Detailed Report".
- £50 deposit to secure appointments, redeemable against treatment; refundable with 48 hours' notice if you don't proceed after consultation.
- Finance: Klarna (pay in 3), Clearpay (pay in 4), interest-free medical loans up to 12 months over £1,000 (Ideal4Finance per [PB-SIG]), subject to status, 18+.

### Main-site issues spotted (not copied)
- Reviews block ("Sarah Jenkins, 2 days ago", "Dr. Vincent"), "5000+ patients" style claims: can't be verified, not reused.
- Virtue RF page: "Zero Pain", "Suitable for all skin tones (Fitzpatrick I–VI)", "something topical treatments simply cannot achieve". The Copilot says no Fitzpatrick IV–VI claim is supported. Not reused.
- Main-site pages name isotretinoin in contraindication lists (a prescription-only medicine). This site says "certain acne medicines" instead.
- "Performed exclusively by GMC-registered Consultant Dermatologists and Plastic Surgeons" on every treatment page conflicts with "clinician-led" elsewhere. Not reused.

---

## 2. The Signature treatment: two different descriptions ⚠

This is the most important open question.

| | Live main website [HSA] (reviewed 28 Oct 2026) | Copilot playbook [PB-SIG] |
|---|---|---|
| Name | Signature Pigmentation **Programme** | Signature Pigmentation **Protocol** / Signature Pigmentation Removal Treatment / "The Signature Protocol" (Oct 2026 adverts) |
| What it is | Three phases, **needle-free and heat-free**: Prepare (brightening treatment after a soothing gel), Renew (33% stabilised colostrum + pH 1.5 renewal complex), Perfect (finishing brightening treatments), plus clinician-prescribed skincare and SPF 50 | Three steps: **VirtueRF microneedling + Helios III Q-switched Nd:YAG laser (532/1064 nm) + regenerative mesotherapy (tranexamic acid and exosomes)**. "Does include a laser"; older "not a laser" wording superseded (18 Oct 2026) |
| Price | **£349 per session**; 2 sessions £698 … 6 sessions £2,094 | **From £399**; Standard £399 / 4 for £1,299; Enhanced £499 / 4 for £1,599; Laser + Mesotherapy £399; Peel + Meso £299; VI Peel + Meso £299; Enhanced VI Peel Ultimate Programme £599; Patch test £50 |
| Sessions | 2–6, a few weeks apart | At least two; 45–60 min; spacing not documented |
| Downtime | Mild redness/tingling, dryness for a few days | VirtueRF alone: redness 12–24 h; full protocol not documented |

The Copilot confirmed that **no HSA playbook mentions the colostrum programme**, and said this is a treatment, mechanism and price conflict that the clinical owner must resolve.

**What the site does (decision #6):** the Signature page follows the **live website** (what patients see and pay), and it is flagged. VirtueRF microneedling and the Q-switched (Helios III) laser have their own pages, so nothing from the playbook is lost. The content lives in one place (`src/lib/treatments.ts`), so it's quick to switch.

---

## 3. Copilot findings by treatment [PB] (6 Nov 2026)

### Signature Pigmentation Protocol [PB-SIG]
- Starts with the **free AI pigmentation analysis** (one selfie, six facial zones) and a **free online consultation** ("the AI suggests a plan and the team confirms it").
- Supporting skincare: daily high-factor SPF, alpha arbutin, vitamin C, niacinamide, tranexamic acid.
- Other pigmentation options listed: peels, VI Peel, laser alone, Cosmelan.
- Concerns: dark spots and sun damage, uneven or patchy tone, marks after breakouts, freckling, stubborn facial pigmentation, under-eye pigmentation. Zones: forehead, cheeks, band above the upper lip, under-eye, nose, jawline.
- **Not for:** moles, raised lesions, "anything medical". Raised or textural marks, redness or flushing are discussed at consultation. New, changing or worrying marks are checked by a doctor first.
- Fitzpatrick IV–VI: **no explicit protocol**; don't claim universal suitability.
- Doctor-led and medically supervised; Dr Ahmad fronts adverts; consultations online; locations Belgravia (London) and Ingram House (Glasgow).
- **Never say:** a condition name the patient's report didn't print (e.g. melasma; use "areas of deeper pigmentation"); anything about moles or individual lesions in promotional copy; "lighten", "whiten", "bleach"; "permanent", "gone for good" or guarantees; "not a laser"; that consultation is in clinic; 10 Harley Street. Prices as "from" guide prices. Aim: "a clearer, more even complexion at your natural skin tone".
- Approved FAQ themes: Is it laser? Why not just a peel or cream? How many sessions? Does it hurt? Will it come back? I've tried laser before. Will it lighten my skin? It's too expensive. I need to think about it.
- Before/after: advertising examples of real HSA patients exist, but **no consent records, captions or approval workflow** are documented. Don't use until written consent is confirmed.
- Sister-clinic reference: an optional glutathione "Skin Brightening Drip" at the Wellness clinic, only when asked. **Not used** (not an HSA treatment; evidence and compliance risk).

### Facials & Peels [PB-FP] (matches [HSA] pricing page)
| Treatment | Pigmentation use | Sessions | Downtime | Skin type | Price |
|---|---|---|---|---|---|
| Chemical peels (medical-grade, clinician-selected; [HSA] lists lactic, mandelic, glycolic, salicylic, Jessner, TCA) | Uneven tone, marks after acne | 3–6 superficial, 2–4 weeks apart | 0–5 days | Darker skin: superficial acids, preparation, strict SPF | £149; £399 for 3 |
| Chemical peel + mesotherapy (vitamins, antioxidants, hyaluronic acid) | Even tone, radiance | 3, 2–4 weeks apart | 1–3 days | Not documented | £299; £799 for 3 |
| VI Peel (VI Derm) | Pigmentation, acne-prone skin, texture; [HSA]: melasma management | ~4 weeks apart [HSA] | 5–7 days, peeling peaks days 3–5 | Not documented | £595 incl. aftercare kit |
| Cosmelan (mesoestetic) | Stubborn pigmentation, sun spots; [HSA]: melasma, PIH | 1 in-clinic mask (6–8 h), ~6-month home programme [HSA] | 7–14 days | [HSA]: "all Fitzpatrick types, subject to assessment"; [PB] not documented | £995 incl. home care |
| IPL facial | Sun spots, freckling, redness | 3–5, ~4 weeks apart | 1–7 days | **Not for Fitzpatrick V–VI or tanned skin**; [HSA] lists melasma as unsuitable | £295 |
| Carbon laser facial (1064 nm Q-switched Nd:YAG) | Oily skin, pores, dullness; an alternative where IPL isn't suitable | 3–6, 2–4 weeks apart | Pink for a few hours | "Suits a wider range of skin types than IPL" | £295 |

Rules: don't promise a specific VI Peel variant before assessment; don't say Cosmelan removes all pigmentation or is permanent; don't say IPL suits darker or tanned skin.

### CO2 laser resurfacing [PB-CO2]
Fractional ablative CO2 for sun damage, pigmentation irregularity and uneven tone (also scarring, lines, texture). **Genuine downtime** (red, swollen, peeling): never call it minimal or give a full-face recovery time. Deeper skin tones need particular care; the doctor decides suitability. Escalate pregnancy, breastfeeding, certain acne medicines, active infection, keloid history. Prices: full face £799, half face £599, neck £799, face and neck £1,299 (eyelid options not relevant here).

### Dark circles treatment [PB-DC]
Short course for under-eye darkness from pigment, thin skin or both, tailored to skin tone. Hollows may need tear-trough filler instead (consultation decides). Device/product, downtime and side effects not documented. **£395 for one, £995 for three.** Don't promise permanent results; the AI Under-Eye Analyzer is indicative only.

### Virtue RF microneedling [PB-SIG] [HSA]
Insulated RF microneedles; in the playbook it is used with "low heat beneath the surface" for marks after breakouts. Numbing cream, cooling mask, LED. Redness ~12–24 h. [HSA] prices: face £399 / £999 for 3; face & neck £599 / £1,499 for 3; with exosomes face £699 / £1,499 for 3.

### Q-switched Nd:YAG laser (Helios III) [PB-SIG]
532 nm for sun spots and freckles; low-energy 1064 nm toning for deeper, hormonal-type pigmentation. "Laser on its own" is listed as an option, but **no standalone price, sessions or spacing** are documented; "Laser plus Mesotherapy £399" is the only laser price. Price shown as `[TBC]`.

### Skin boosters [PB-SB]
Hydration and radiance only; **not described as a pigmentation treatment**. Not included on this site.

### Not in any playbook
Wood's lamp (none), body pigmentation (underarms, inner thighs, knees, elbows, hands, chest), lip pigmentation, vitiligo/hypopigmentation, café-au-lait marks, CQC/HIS numbers, GMC numbers, booking URL, enquiry destination, GA4/GTM/Pixel IDs, brand voice document, competitors, approved testimonials. The playbooks "do not support" claims about treating lip/body pigmentation, vitiligo or hypopigmentation. Those pages are therefore **assess-and-advise / refer** pages, with "whether we treat this area" as `[TBC]`.

---

## 4. Free AI pigmentation analysis [AI] [HSA]
- Live at **pigmentation.harleystreetaesthetic.co.uk** ("Step 1 of your free pigmentation consultation"). One selfie, six facial zones, pre-consultation report saved to the clinic record, then the team **calls you** to book a free 15-minute online consultation. "A cosmetic guide, not a diagnosis." Footer still lists 10 Harley Street.
- [HSA] says the model was trained "on more than 15,000 faces with input from doctors". Not repeated on this site (unverified statistic).
- ⚠ **This means the subdomain suggested in the brief is already taken.** The new site defaults to `pigmentation-treatment.harleystreetaesthetic.co.uk` (decision #2) and links to the analysis app as the "Free AI analysis" CTA.

---

## 5. Facebook Business Suite [FB] (6 Nov 2026, read-only)
- The brief's asset (1586861314502628) is **"Endolift - Harley Street Aesthetics"** (1 follower). Its posts are all Endolift / EndoMax Lift. No pigmentation content.
- Portfolio pages: Endolift - HSA; Hair Loss Treatment - Harley Street Medical Wellness; **Harley Street Aesthetics Clinic** (916 FB / 1.1K IG followers); Harley Street Medical Wellness; Dermal Fillers - HSA. **No dedicated pigmentation page.**
- **Harley Street Aesthetics Clinic, 16 Aug 2026 reel:** "Pigmentation isn't always one mark — it can be a pattern. Our HSA pathway starts with a facial analysis and doctor-led review before we discuss options such as VirtueRF, mesotherapy or regenerative skin treatments when clinically appropriate. Treatment suitability and results vary. A consultation is required before any treatment plan." Links to pigmentation.harleystreetaesthetic.co.uk. (239 viewers, 3 interactions.)
- 14 Aug skin booster reel links to the booking calendar `https://link.harleystreetaesthetic.co.uk/widget/bookings/aesthetic-consultant-1`, which confirms it's the general HSA consultation calendar.
- House style on all recent posts: "may", "Results vary", "Suitability is assessed", "AI-generated narration; clinical content reviewed by the Harley Street Aesthetics team".
- **Not opened:** inbox messages, comments, patient images. No pigmentation reviews or customer questions were visible in the post list. Ads Manager not opened (Copilot mentions October 2026 pigmentation adverts; their copy isn't recorded here).

---

## 6. Old Harley Street Medics pigmentation pages [HSM-old]
Not crawled in depth (the site recently had injected casino spam; no links were followed). Candidate URLs for 301 redirects are listed in `docs/deployment.md` for you to confirm against the live Medics sitemap.

---

## 7. Shared facts reused from the hair loss project [HL]
Stack and config, design tokens, components, cookie consent (`hsa-cookie-consent`), quiz pattern, SEO/schema helpers, QA scripts, the HSA privacy details (Harley Street Aesthetics, a trading name of Harley Street Medics Ltd, 211B Main Street, Bellshill ML4 1AJ, ICO ZB819731, from the Endolift privacy policy; still to confirm), DNS on Namecheap (`registrar-servers.com`), and Next 16.4's route-payload fix (`scripts/flatten-segments.mjs`).

## 8. Keywords (unvalidated, no search-volume tool available)
Primary: pigmentation treatment London, pigmentation treatment Glasgow, melasma treatment London/Glasgow, hyperpigmentation treatment, sun spot removal, age spot removal, dark spot treatment face, acne marks / post-inflammatory hyperpigmentation treatment, pigmentation treatment for dark skin. Secondary: Cosmelan peel London, VI Peel London, IPL for sun spots, Q-switched laser pigmentation, dark circles treatment, freckle treatment, uneven skin tone treatment, pregnancy mask (chloasma), dark underarms. Validate in Search Console / Google Ads before launch.
