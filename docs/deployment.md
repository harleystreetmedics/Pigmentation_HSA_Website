# Deployment

> **Nothing has been deployed and no DNS has been changed.** Do these steps only after you approve the site and confirm the final subdomain.

The steps follow the hair loss project's `docs/deployment.md` (the Endolift source folder, with its own guide, isn't on this PC). The pattern is the same: a static export served from a host, plus one CNAME record for the subdomain.

## DNS facts (looked up read-only, 6 Nov 2026)
- `harleystreetaesthetic.co.uk` nameservers: `dns1.registrar-servers.com` and `dns2.registrar-servers.com`, i.e. **Namecheap** DNS. The root points to `178.62.106.101`. Records are edited in Namecheap → Domain List → `harleystreetaesthetic.co.uk` → Manage → **Advanced DNS**.
- ⚠ **`pigmentation.harleystreetaesthetic.co.uk` already exists.** It is a CNAME to Vercel (`…vercel-dns-016.com`) and serves the free AI pigmentation analysis app. **Don't change or delete that record** unless you decide to move the app.
- The site is configured for **`pigmentation-treatment.harleystreetaesthetic.co.uk`** as a placeholder (`NEXT_PUBLIC_SITE_URL` in `netlify.toml`). Replace it everywhere below with the subdomain you choose. That subdomain doesn't exist yet.

## Option A: Netlify (recommended)

1. **Repository.** Already on GitHub: **https://github.com/harleystreetmedics/Pigmentation_HSA_Website** (branch `main`, pushed 13 Nov 2026). Push later changes with:
   ```bash
   git push -u origin main
   ```
2. **Create the site.** Netlify → Add new site → Import an existing project → GitHub → pick the repo. Build settings come from `netlify.toml` (`npm run build`, publish `out`, Node 22).
3. **Environment variables** (Site configuration → Environment variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-subdomain>.harleystreetaesthetic.co.uk` (also update `netlify.toml`)
   - `NEXT_PUBLIC_ALLOW_INDEXING` = `false` until launch, then `true` and redeploy
   - `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_META_PIXEL_ID` when confirmed (they only load after cookie consent)
4. **Forms.** Site configuration → Forms → enable form detection. The hidden `public/__forms.html` registers the `pigmentation-enquiry` form. Add an email notification (Forms → Form notifications) to the address that should receive enquiries. TODO: switch to the CRM/webhook once you confirm the destination (open question 18).
5. **Deploy.** Netlify builds automatically. Check the `*.netlify.app` URL, submit a test enquiry and confirm it arrives.
6. **Custom domain.** Domain management → Add a domain → `<your-subdomain>.harleystreetaesthetic.co.uk` → "Add domain" (external DNS). Netlify shows the target: your site's `<site-name>.netlify.app`.
7. **DNS record at Namecheap** (Advanced DNS → Add new record):

   | Type | Host | Value | TTL |
   |---|---|---|---|
   | CNAME Record | `pigmentation-treatment` (your chosen host) | `<site-name>.netlify.app.` | Automatic |

   Only add this one record. Don't change the root domain, `www`, the existing `pigmentation` or `link` records, or any MX/TXT records.
8. **SSL/HTTPS.** Netlify provisions a Let's Encrypt certificate once DNS resolves (usually minutes, up to 24 h). Domain management → HTTPS → "Verify DNS configuration", then "Provision certificate" if it hasn't started. Turn on "Force HTTPS".
9. **Confirm:**
   ```bash
   nslookup pigmentation-treatment.harleystreetaesthetic.co.uk
   ```
   ```bash
   curl -I https://pigmentation-treatment.harleystreetaesthetic.co.uk/
   ```
   Expect the CNAME to point at the Netlify site, `HTTP/2 200`, and a padlock in the browser with a certificate for the subdomain. Check `/robots.txt` says `Disallow: /` until launch.
10. **Launch.** Set `NEXT_PUBLIC_ALLOW_INDEXING=true`, redeploy, check `robots.txt` now allows crawling, then submit `/sitemap.xml` in Google Search Console (add the subdomain as a property, verified by DNS TXT record).

## Option B: Vercel
The AI analysis app is already on Vercel, so you may prefer to keep both there.
1. Import the repo at vercel.com/new. `vercel.json` sets `npm run build` and output `out`. Framework preset: "Other".
2. Add the same environment variables.
3. Forms: Netlify Forms won't work on Vercel. Connect the form to your CRM/webhook first, or use Option A.
4. Domains → add the subdomain. Vercel shows a CNAME target (`cname.vercel-dns.com`). Add at Namecheap: CNAME, host `<your host>`, value `cname.vercel-dns.com.`
5. SSL is automatic. Confirm with the same `nslookup` / `curl -I` checks.

## Local preview
```bash
npm install
```
```bash
npm run dev
```
Then open http://localhost:3000. For the production build: `npm run build`, then `npx serve out`.

## 301 redirect candidates (old Harley Street Medics pigmentation pages) — your decision
Found in the harleystreetmedics.clinic sitemap (read-only, 6 Nov 2026). These pages describe pigmentation under the old brand. Suggested targets if you decide to redirect them; set them up on the Medics WordPress site (e.g. the Redirection plugin), not on this site. The Medics site recently had injected casino spam, so review it before editing, and check Google Ads and social links that point at these URLs.

| Old URL | Suggested new URL |
|---|---|
| https://harleystreetmedics.clinic/pigmentation-london/ | /london/ |
| https://harleystreetmedics.clinic/pigmentation-treatment-london/ | /london/ |
| https://harleystreetmedics.clinic/pigmentation-glasgow/ | /glasgow/ |
| https://harleystreetmedics.clinic/pigmentation-glasgow-2/ | /glasgow/ |
| https://harleystreetmedics.clinic/pigmentation-treatment-glasgow/ | /glasgow/ |
| https://harleystreetmedics.clinic/pigmentation-0/ | / |
| https://harleystreetmedics.clinic/pigmentation1/ | / |
| https://harleystreetmedics.clinic/patient-journey-pigmentation/ | /diagnosis/ |
| https://harleystreetmedics.clinic/how-long-does-pigmentation-take-to-fade-a-realistic-guide/ | /results/ |
| https://harleystreetmedics.clinic/pigmentation-glasgow-thank-you/ | /book/ |
| https://harleystreetmedics.clinic/vi-peel-london/ | /treatments/vi-peel/ |
| https://harleystreetmedics.clinic/vi-peel-london-thank-you/ | /book/ |
| https://harleystreetmedics.clinic/dark-circles-glasgow/ | /conditions/dark-circles/ |
| https://harleystreetmedics.clinic/dark-circles-g/ | /conditions/dark-circles/ |
| https://harleystreetmedics.clinic/dark-circles-glasgow-thank-you/ | /book/ |
| https://harleystreetmedics.clinic/patient-journey-dark-circles/ | /conditions/dark-circles/ |
| https://harleystreetmedics.clinic/ingredients-reduce-dark-circles-under-eyes/ | /conditions/dark-circles/ |
| https://harleystreetmedics.clinic/acne-scar-removal-london/ | /conditions/post-inflammatory-hyperpigmentation/ (or the main HSA site's acne scar page, if better) |
| https://harleystreetmedics.clinic/acne-scar-removal-london-thank-you/ | /book/ |

All new URLs are relative to your chosen subdomain. Dark circles and acne scars are partly non-pigment concerns, so redirecting them to the main HSA site may suit better; your call.
