import Link from "next/link";
import { CONDITIONS } from "@/lib/conditions";
import { BRAND, CLINIC_LIST } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";
import { CookieSettingsButton } from "./CookieConsent";
import { Icon } from "./Icon";
import { Tbc, Wordmark } from "./ui";

const EXPLORE = [
  { href: "/hair-loss-in-men/", label: "Hair loss in men" },
  { href: "/hair-loss-in-women/", label: "Hair loss in women" },
  { href: "/diagnosis/", label: "Diagnosis" },
  { href: "/which-treatment/", label: "Which treatment is right for me?" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/results/", label: "Results" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "Clinics & team" },
  { href: "/book/", label: "Book a consultation" },
];

const LEGAL = [
  { href: "/privacy-policy/", label: "Privacy policy" },
  { href: "/cookie-policy/", label: "Cookie policy" },
  { href: "/terms/", label: "Terms" },
  { href: "/medical-disclaimer/", label: "Medical disclaimer" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-white/75 lg:pb-0">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <a href={BRAND.mainSite}>
            <Wordmark />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Clinician-led assessment and non-surgical hair loss treatment for men and women at our London and Glasgow clinics.
          </p>
          <a href={BRAND.allTreatments} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white">
            All treatments at Harley Street Aesthetics <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
        <nav aria-label="Conditions" className="lg:col-span-3">
          <h2 className="eyebrow mb-4 font-sans text-white">Conditions</h2>
          <ul className="grid grid-cols-1 gap-2.5 text-sm">
            {CONDITIONS.slice(0, 9).map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-gold" href={`/conditions/${c.slug}/`}>
                  {c.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link className="font-semibold text-gold hover:text-white" href="/conditions/">
                All conditions
              </Link>
            </li>
          </ul>
        </nav>
        <div className="space-y-10 lg:col-span-2">
          <nav aria-label="Treatments">
            <h2 className="eyebrow mb-4 font-sans text-white">Treatments</h2>
            <ul className="space-y-2.5 text-sm">
              {TREATMENTS.map((t) => (
                <li key={t.slug}>
                  <Link className="hover:text-gold" href={`/treatments/${t.slug}/`}>
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Explore">
            <h2 className="eyebrow mb-4 font-sans text-white">Explore</h2>
            <ul className="space-y-2.5 text-sm">
              {EXPLORE.map((e) => (
                <li key={e.href}>
                  <Link className="hover:text-gold" href={e.href}>
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 lg:col-span-4">
          {CLINIC_LIST.map((c) => (
            <div key={c.id}>
              <h2 className="eyebrow mb-4 font-sans text-white">{c.city} clinic</h2>
              <address className="space-y-3 text-sm not-italic">
                <p className="flex gap-2">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    {c.addresses[0].line1}
                    <br />
                    {c.addresses[0].line2 && (
                      <>
                        {c.addresses[0].line2}
                        <br />
                      </>
                    )}
                    {c.addresses[0].locality} {c.addresses[0].postcode}
                  </span>
                </p>
                <p>
                  <a href={c.phone.href} className="flex items-center gap-2 hover:text-gold">
                    <Icon name="phone" className="h-4 w-4 text-gold" />
                    {c.phone.display}
                  </a>
                </p>
              </address>
            </div>
          ))}
          <div className="space-y-3 text-sm sm:col-span-2">
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold">
              <Icon name="mail" className="h-4 w-4 text-gold" />
              {BRAND.email}
            </a>
            {BRAND.whatsapp.enabled && (
              <a href={BRAND.whatsapp.href} className="flex items-center gap-2 hover:text-gold" rel="noopener" target="_blank">
                <Icon name="whatsapp" className="h-4 w-4 text-gold" />
                WhatsApp {BRAND.whatsapp.display}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x space-y-4 py-8 text-xs leading-relaxed text-white/65">
          <p>
            Treatments are for adults aged 18 and over. All treatments require a consultation with a qualified medical practitioner, who
            will assess your suitability. Results vary from person to person and are not guaranteed.
          </p>
          <p>
            London: <Tbc>CQC registration statement and number</Tbc> · Glasgow: <Tbc>Healthcare Improvement Scotland registration statement</Tbc>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Harley Street Aesthetics, a trading name of Harley Street Medics Ltd. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-gold" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="hover:text-gold" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
