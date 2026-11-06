import Link from "next/link";
import { REVIEW_RATING } from "@/lib/reviews";
import { BRAND, CLINIC_LIST, TEAM } from "@/lib/site";
import { ClinicTabs } from "./location";
import { ReviewsCarousel } from "./ReviewsCarousel";
import { Icon } from "./Icon";
import { Button, Section, SectionHeading, Tbc } from "./ui";

export function CtaBand({ title = "Start with the cause", text }: { title?: string; text?: string }) {
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
            "Talk to our clinical team about your hair. We'll look at what may be contributing and explain the options that could suit you. There's no obligation to go ahead with treatment."}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/book/">Book consultation</Button>
          <Button href="/which-treatment/" variant="outline">
            Which treatment is right for me?
          </Button>
        </div>
      </div>
    </section>
  );
}

/** Patient reviews as published on the clinic's main website. */
export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-title" className="bg-charcoal py-16 text-white sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-10 flex max-w-3xl flex-col gap-4 sm:mb-14">
          <p className="eyebrow text-gold">Patient reviews</p>
          <h2 id="reviews-title" className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-gold">patients</span>
          </h2>
        </div>
        <ReviewsCarousel />
        <p className="mt-6 flex items-center gap-2 text-sm text-white/70">
          <Icon name="star" className="h-4 w-4 text-gold" />
          {REVIEW_RATING}
        </p>
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

/** Medical team from harleystreetmedicalwellness.co.uk. */
export function TeamGrid() {
  return (
    <>
      <ul className="grid gap-5 md:grid-cols-3">
        {TEAM.map((p) => (
          <li key={p.name} className="overflow-hidden rounded-2xl border border-cream/10 bg-card shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export; the clinic's own photos are served from its website */}
            <img src={p.photo} alt={`${p.name}, ${p.role}`} width={600} height={720} loading="lazy" decoding="async" className="aspect-[5/6] w-full object-cover object-top" />
            <div className="p-7">
              <p className="eyebrow text-gold">{p.role} · GMC registered</p>
              <h3 className="mt-2 font-serif text-2xl text-cream">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{p.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

/** The clinic's booking calendar, embedded as on the Endolift site. */
export function BookingCalendar() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-card">
      <iframe
        src={BRAND.bookingUrl}
        title="Book your free online consultation"
        loading="lazy"
        className="block h-[900px] w-full border-0"
      />
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
                  {a.tbc && (
                    <>
                      <br />
                      <Tbc>{a.tbc}</Tbc>
                    </>
                  )}
                </span>
              </p>
            ))}
            <p className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{c.hours}</span>
            </p>
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
