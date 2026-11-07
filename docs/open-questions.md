# Open questions

Things I couldn't confirm from the Copilot, the main website or Facebook. Each one shows on the site as an amber `[TBC: …]` placeholder or is noted in the review checklist. Run `npm run check:tbc` to list every placeholder still on the site.

## Decisions for you
1. **Subdomain.** `pigmentation.harleystreetaesthetic.co.uk` is already used by the free AI pigmentation analysis app. Which subdomain should this site use? (Built for `pigmentation-treatment.harleystreetaesthetic.co.uk`; others: `skin.`, `pigmentationclinic.`. Or move the AI app and put this site on `pigmentation.`.)
2. ~~**Which Signature treatment is current?**~~ **Resolved 7 Nov:** the Copilot confirms the VirtueRF + Helios III + mesotherapy protocol from £399; the site now follows it. **The main website still shows the old £349 colostrum programme and should be updated.** Original note: Live website: needle-free colostrum "Signature Pigmentation Programme", £349 a session, 2–6 sessions. Copilot: "Signature Pigmentation Protocol" with VirtueRF + Helios III laser + regenerative mesotherapy, from £399 (Standard/Enhanced, 4-session packages). The Copilot has no record of the colostrum programme. One of the two sources needs updating, and this site follows whichever you confirm.
3. **Footer cross-links** to the Endolift and hair loss sites: yes or no? (The hair loss site is now branded Harley Street Medical Wellness.)
4. **301 redirects** from the old harleystreetmedics.clinic pigmentation pages (see `docs/deployment.md`).

## Clinical / treatment facts
5. Q-switched (Helios III) laser on its own: price, sessions and spacing. Only "Laser plus Mesotherapy £399" is documented.
6. ~~Are the Copilot's packages~~ **Resolved 7 Nov:** listed in the latest Copilot menu, now on the site. Original note: Are the Copilot's packages (Standard/Enhanced, Laser + Meso £399, VI Peel + Meso £299, Enhanced VI Peel Ultimate Programme £599) still offered? They aren't on the website.
7. Patch test: £50 (Copilot). Which treatments need one, and is it free if you go ahead?
8. (7 Nov: Copilot says the protocol is facial only; none of these areas is documented.) Do we treat **body pigmentation** (underarms, inner thighs, knees, elbows), **hands and chest**, and **lip / perioral pigmentation**? Which treatments, if so? The playbooks are silent.
9. **Hypopigmentation / vitiligo, café-au-lait marks and birthmarks:** confirm we assess and refer (to GP / NHS dermatology) rather than treat.
10. Is a Wood's lamp or dermatoscope used at consultation? The 3D Skin Analysis (Visia/Observ, £50) is documented; is it at both clinics?
11. Dark circles treatment: what device or product is used, downtime and side effects.
12. Suitability by Fitzpatrick type for each treatment. Only IPL (not V–VI or tanned skin) is documented. The website says Cosmelan suits "all Fitzpatrick types, subject to assessment" and Virtue RF "all skin tones (I–VI)"; the Copilot says neither is supported.
13. Pregnancy and breastfeeding rules per treatment (the website lists them as contraindications for peels, Cosmelan and IPL; Copilot: not documented).
14. What does the clinician-prescribed home skincare plan include, and is it sold separately? (Copilot lists brightening ingredients; no products or prices.)

## People and regulation
15. Which practitioners see pigmentation patients, and their GMC numbers. Is Dr Ahmad part of the HSA team (he fronts the adverts but isn't on the HSA team page)?
16. CQC registration (London) and Healthcare Improvement Scotland registration (Glasgow): exact wording and numbers.
17. Privacy policy company details: Harley Street Medics Ltd, 211B Main Street, Bellshill ML4 1AJ, ICO ZB819731 (from the Endolift privacy policy). Still correct?

## Marketing and tech
18. Enquiry form destination (CRM / webhook / email). Netlify Forms is used for now.
19. GA4, GTM and Meta Pixel IDs.
20. Is the `aesthetic-consultant-1` calendar the right one for pigmentation consultations?
21. Reviews: are there verified pigmentation reviews (e.g. Google) we can show, with the patient's permission?
22. Before/after photos: which images have written consent for website use? (Copilot: examples exist, consent not documented.)
23. Opening hours: Endolift config says London Tue–Fri 9–7, Sat 9–6 and Glasgow Mon–Fri 9–6; the AI app says Mon–Sat by appointment.
24. Brand voice document, target audience and competitors: none documented in Copilot.

## Housekeeping (outdated sources)
25. The AI analysis app and the main contact page still show 10 Harley Street, which the Copilot says isn't seeing patients.
26. The main website names isotretinoin (a prescription-only medicine) on several treatment pages and says Virtue RF suits "all skin tones (Fitzpatrick I–VI)" and is "zero pain". Worth a compliance review on the main site.
27. No Harley Street Medics pigmentation playbook was found in the Copilot. The only cross-brand reference is the Wellness skin brightening drip. Nothing outdated to flag there.

_7 Nov 2026: I asked the Copilot about every item above. Apart from #2 and #6, it has nothing documented, so these need the clinic manager (see research.md §9)._

_7 Nov 2026 (later): I also checked every relevant page of harleystreetaesthetic.co.uk (research.md §10). It adds team locations, dark-circle session length, IPL type IV guidance and patch-test wording. It has nothing on opening hours, CQC/HIS, GMC numbers, company/ICO details (its privacy and terms links are broken), tracking IDs, the form destination, pigmentation before/after photos or verified reviews. Those still need the clinic manager. It also still shows the old £349 Signature Programme._
