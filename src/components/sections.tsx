import Link from "next/link";
import { SKIN_CHECK } from "@/lib/conditions";
import { REVIEW_RATING, REVIEWS } from "@/lib/reviews";
import { BRAND, CLINIC_LIST, TEAM } from "@/lib/site";
import { ClinicTabs } from "./location";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { Icon } from "./Icon";
import { Button, Section, SectionHeading, Tbc } from "./ui";

export function CtaBand({ title = "Start with an assessment of your skin", text }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-white/5 bg-ink py-16 text-white sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gold/12 blur-3xl" />
      </div>
      <div className="container-x relative text-center">
        <p className="eyebrow text-gold">Book a consultation</p>
        <h2 id="cta-title" className="mx-auto mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          {text ??
            "Talk to our medical team about your pigmentation. We'll look at its type, depth and likely cause, check your skin type, and explain the options that could suit you. There's no obligation to go ahead."}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href={BRAND.aiAnalysisUrl} variant="outline">
            Free AI pigmentation analysis
          </Button>
        </div>
      </div>
    </section>
  );
}

/** Skin cancer safety notice. Shown on every condition and treatment page, the quiz and the darker-skin page. */
export function SkinCheckNotice({ className = "" }: { className?: string }) {
  return (
    <div role="note" aria-label="Skin check" className={`flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-5 text-cream sm:p-6 ${className}`}>
      <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
      <p className="text-sm leading-relaxed">
        <strong>Check changing spots first.</strong> {SKIN_CHECK}
      </p>
    </div>
  );
}

/** Skin-of-colour note with a link to the dedicated page. */
export function SkinToneNote({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6 sm:p-7 ${className}`}>
      <p className="eyebrow text-gold">Skin of colour</p>
      <p className="mt-3 leading-relaxed text-cream">{text}</p>
      <Link href="/pigmentation-in-darker-skin/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-cream">
        Pigmentation in darker skin tones <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </div>
  );
}

/** Amber notices for facts still to confirm. */
export function TbcNotes({ items, className = "" }: { items?: string[]; className?: string }) {
  if (!items?.length) return null;
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((t) => (
        <li key={t}>
          <Tbc>{t}</Tbc>
        </li>
      ))}
    </ul>
  );
}

export function AiAnalysisCard({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-5 rounded-2xl border border-gold/40 bg-card p-7 shadow-card sm:flex-row sm:items-center sm:justify-between ${className}`}>
      <div className="max-w-2xl">
        <p className="eyebrow text-gold">Free online tool</p>
        <h3 className="mt-2 font-serif text-2xl text-cream">Free AI pigmentation analysis</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">
          Take a selfie and see where visible pigmentation sits across six facial zones, with a report to bring to your free online
          consultation. It&rsquo;s a guide, not a diagnosis: your pigmentation type and suitability are confirmed by a qualified practitioner.
        </p>
      </div>
      <Button href={BRAND.aiAnalysisUrl} variant="outline" className="shrink-0">
        Start my analysis
      </Button>
    </div>
  );
}

/** Reviews: shows the carousel once verified reviews exist; until then an honest placeholder. */
export function ReviewsSection() {
  if (REVIEWS.length === 0) return null;
  return (
    <section aria-labelledby="reviews-title" className="bg-charcoal py-16 text-white sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-10 flex max-w-3xl flex-col gap-4 sm:mb-14">
          <p className="eyebrow text-gold">Patient reviews</p>
          <h2 id="reviews-title" className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            In our patients&rsquo; <span className="text-gold">words</span>
          </h2>
        </div>
        {REVIEWS.length > 0 ? (
          <>
            <ReviewsCarousel />
            {REVIEW_RATING && (
              <p className="mt-6 flex items-center gap-2 text-sm text-white/70">
                <Icon name="star" className="h-4 w-4 text-gold" />
                {REVIEW_RATING}
              </p>
            )}
          </>
        ) : null}
      </div>
    </section>
  );
}

export function ClinicsSection({ tone = "rich" as "rich" | "soft" }) {
  return (
    <Section tone={tone} labelledBy="loc-title">
      <SectionHeading id="loc-title" eyebrow="Our clinics" title={<>Visit us in London or <span className="text-gold">Glasgow</span></>} />
      <ClinicTabs />
    </Section>
  );
}

/** Medical team from harleystreetaesthetic.co.uk/london/team (initials instead of photos). */
export function TeamGrid({ limit }: { limit?: number }) {
  const people = limit ? TEAM.slice(0, limit) : TEAM;
  return (
    <>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {people.map((p) => (
          <li key={p.name} className="rounded-2xl border border-cream/10 bg-card p-7 shadow-card">
            <span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-black-soft font-serif text-xl text-gold">
              {p.name.replace(/^(Mr|Dr) /, "").split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
            <h3 className="mt-5 font-serif text-2xl text-cream">{p.name}</h3>
            <p className="mt-1 text-sm font-semibold text-gold">
              {p.role}
              {p.post && <span className="font-normal text-stone"> · {p.post}</span>}
            </p>
            <p className="mt-1 text-xs tracking-[0.15em] text-stone uppercase">{p.clinics}</p>
            <p className="mt-4 text-sm leading-relaxed text-stone">{p.bio}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-stone">
        Our medical team is GMC-registered.{" "}
        <a href={`${BRAND.mainSite}/london/team`} className="text-gold underline underline-offset-2 hover:text-cream">
          Read full profiles on our main website
        </a>
        .
      </p>
    </>
  );
}

/** The clinic's booking calendar, embedded as on the Endolift site. */
export function BookingCalendar() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-card">
      <iframe src={BRAND.bookingUrl} title="Book your free online consultation" loading="lazy" className="block h-[900px] w-full border-0" />
      <p className="border-t border-cream/10 p-4 text-center text-sm text-stone">
        Calendar not loading?{" "}
        <a href={BRAND.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-gold hover:text-cream">
          Open the booking calendar <Icon name="external" className="h-4 w-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
}

export function ClinicCards({ stacked = false }: { stacked?: boolean }) {
  return (
    <div className={stacked ? "space-y-5" : "grid gap-5 md:grid-cols-2"}>
      {CLINIC_LIST.map((c) => (
        <div key={c.id} className="flex flex-col rounded-2xl border border-cream/10 bg-card p-6 text-cream shadow-card sm:p-8">
          <p className="eyebrow text-gold">{c.city}</p>
          <h3 className="mt-2 font-serif text-2xl">{c.name}</h3>
          <address className="mt-5 flex-1 space-y-4 text-sm not-italic text-stone">
            {c.addresses.map((a) => (
              <p key={a.line1} className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  {a.line1}
                  {a.line2 && `, ${a.line2}`}
                  <br />
                  {a.locality} {a.postcode}
                </span>
              </p>
            ))}
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={c.phone.href} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold px-5 text-sm font-semibold text-gold">
              <Icon name="phone" className="h-4 w-4" /> {c.phone.display}
            </a>
            <a href={c.mapsUrl} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/20 px-5 text-sm font-semibold">
              Directions <span className="sr-only">to our {c.city} clinic (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactLinks() {
  return (
    <div className="rounded-2xl border border-cream/10 bg-card p-6 text-sm">
      <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 hover:text-gold">
        <Icon name="mail" className="h-5 w-5 text-gold" /> {BRAND.email}
      </a>
      {BRAND.whatsapp.enabled && (
        <a href={BRAND.whatsapp.href} target="_blank" rel="noopener" className="mt-3 flex items-center gap-3 hover:text-gold">
          <Icon name="whatsapp" className="h-5 w-5 text-gold" /> WhatsApp {BRAND.whatsapp.display}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
      <p className="mt-3 flex items-center gap-3">
        <Icon name="calendar" className="h-5 w-5 shrink-0 text-gold" />
        <a href={BRAND.bookingUrl} target="_blank" rel="noopener" className="font-semibold text-gold underline underline-offset-2 hover:text-cream">
          Book online in our calendar
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
}

export function RelatedLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title} className="mt-10">
      <h3 className="eyebrow text-gold">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/15 px-5 text-sm text-cream hover:border-gold hover:text-gold">
              {l.label} <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
