# Hair Loss Clinic — Harley Street Medical Wellness

Static Next.js site for hair loss assessment and treatment at Harley Street Medical Wellness (London and Glasgow). Built on the Endolift site's stack and components; the Wellness brand uses the same black, gold, Playfair and Montserrat design.

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
| `npm run check:compliance` | Scans page text for POM names, guarantees, superlatives, time pressure, unsourced stats |
| `npm run check:tbc` | Lists every `[TBC: …]` placeholder still on the site |
| `npm run check` | All of the above |

## Where things live
- Content: `src/lib/conditions.ts`, `src/lib/treatments.ts`, `src/lib/faqs.ts`
- Brand, clinics, nav, tracking env vars: `src/lib/site.ts`
- SEO and JSON-LD: `src/lib/seo.ts`, `src/lib/schema.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`
- Docs: `docs/research.md`, `docs/open-questions.md`, `docs/decisions.md`, `docs/plan.md`, `docs/review-checklist.md`, `docs/deployment.md`

## Environment variables
`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ALLOW_INDEXING` (keep `false` until launch), `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.
