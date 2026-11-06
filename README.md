# Pigmentation Clinic — Harley Street Aesthetics

Static Next.js site for pigmentation assessment and treatment at Harley Street Aesthetics (London and Glasgow). A sibling of the Endolift and hair loss sites: same stack, black/gold design, Playfair + Montserrat, components and QA scripts.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Commands
| Command | What it does |
|---|---|
| `npm run build` | Static export to `out/` (then flattens route payloads, see `scripts/flatten-segments.mjs`) |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run check:links` | Checks every internal link in `out/` |
| `npm run check:compliance` | Scans page text for POM names, guarantees, Copilot "never say" words, superlatives, time pressure, unsourced stats, and checks the skin cancer notice is on every condition/treatment page |
| `npm run check:tbc` | Lists every `[TBC: …]` placeholder still on the site |
| `npm run check` | All of the above |
| `node scripts/qa-functional.cjs` | Browser tests (serve `out/` on port 4173 first: `npx serve out -l 4173`) |
| `node scripts/qa-screenshots.cjs docs/screens <name> <url> …` | Screenshots at mobile/tablet/desktop |

## Where things live
- Content: `src/lib/conditions.ts` (14 concerns), `src/lib/treatments.ts` (11 treatments), `src/lib/faqs.ts`, `src/lib/reviews.ts` (empty until verified)
- Brand, clinics, team, consultation prices, nav, tracking env vars: `src/lib/site.ts`
- Enquiry form: `src/components/EnquiryForm.tsx`, `src/lib/form.ts`, `public/__forms.html` (Netlify Forms)
- SEO and JSON-LD: `src/lib/seo.ts`, `src/lib/schema.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`
- Docs: `docs/research.md`, `docs/open-questions.md`, `docs/decisions.md`, `docs/plan.md`, `docs/review-checklist.md`, `docs/deployment.md`

## Environment variables
`NEXT_PUBLIC_SITE_URL` (placeholder `https://pigmentation-treatment.harleystreetaesthetic.co.uk`), `NEXT_PUBLIC_ALLOW_INDEXING` (keep `false` until launch), `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.
