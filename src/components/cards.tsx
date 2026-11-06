import Link from "next/link";
import type { ReactNode } from "react";
import type { Condition } from "@/lib/conditions";
import type { Faq } from "@/lib/faqs";
import type { Fact, Risk, Treatment } from "@/lib/treatments";
import { Icon } from "./Icon";

const CARD =
  "group flex h-full flex-col rounded-2xl border border-cream/10 bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:border-gold/60 sm:p-7";

export function ConditionCard({ c, headingLevel = 3 }: { c: Condition; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as const;
  return (
    <Link className={CARD} href={`/conditions/${c.slug}/`}>
      <span className="eyebrow text-gold">{c.audience === "men" ? "Men" : c.audience === "women" ? "Women" : "Men & women"}</span>
      <H className="mt-3 font-serif text-2xl text-cream">{c.shortName}</H>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{c.summary}</p>
      <span className="mt-6 flex items-center gap-1 border-t border-cream/10 pt-4 text-sm font-semibold text-gold">
        Learn more <span className="sr-only">about {c.shortName}</span>
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function TreatmentCard({ t, headingLevel = 3 }: { t: Treatment; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as const;
  return (
    <Link className={CARD} href={`/treatments/${t.slug}/`}>
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black-soft text-gold">
        <Icon name={t.icon} className="h-6 w-6" />
      </span>
      <H className="font-serif text-2xl text-cream">{t.name}</H>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{t.summary}</p>
      <span className="mt-6 flex items-center gap-1 border-t border-cream/10 pt-4 text-sm font-semibold text-gold">
        Learn more <span className="sr-only">about {t.name}</span>
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function FactStrip({ facts }: { facts: Fact[] }) {
  return (
    <dl className={`grid grid-cols-2 gap-y-8 border-y border-white/10 py-8 ${facts.length === 2 ? "mx-auto max-w-xl" : facts.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col-reverse items-center px-2 text-center">
          <dt className="mt-2 text-[0.7rem] tracking-[0.2em] text-stone uppercase">{f.label}</dt>
          <dd className="font-serif text-xl text-gold sm:text-2xl">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const LEVEL_CLS: Record<Risk["level"], string> = {
  Common: "text-gold",
  "Less common": "text-cream",
  Rare: "text-rose-300",
};

export function RiskList({ risks }: { risks: Risk[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {risks.map((r) => (
        <li key={r.name} className="rounded-2xl border border-cream/10 bg-card p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-sans text-base font-semibold text-cream">{r.name}</h3>
            <span className={`inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.15em] uppercase ${LEVEL_CLS[r.level]}`}>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
              {r.level}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone">{r.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function StepTimeline({ steps }: { steps: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <span aria-hidden="true" className="absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-gold via-gold/40 to-transparent lg:block" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 lg:block">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-black-rich font-serif text-gold">
            {i + 1}
          </span>
          <div className="lg:mt-5">
            <h3 className="font-sans text-base font-semibold text-cream">{s.title}</h3>
            <div className="mt-2 text-sm leading-relaxed text-stone">{s.text}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-cream/10 rounded-2xl border border-cream/10 bg-card">
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 sm:px-7">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-lg text-cream sm:text-xl">
            {f.q}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/15 text-gold transition-transform group-open:rotate-180">
              <Icon name="chevron" className="h-4 w-4" />
            </span>
          </summary>
          <div className="pb-6 leading-relaxed text-stone">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
