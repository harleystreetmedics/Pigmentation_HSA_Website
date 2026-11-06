import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { BRAND } from "@/lib/site";
import { Icon } from "./Icon";

/** Amber placeholder for facts we don't have yet. Listed by `npm run check:tbc`. */
export function Tbc({ children }: { children: ReactNode }) {
  return (
    <mark className="tbc" data-tbc="">
      [TBC: {children}]
    </mark>
  );
}

const BTN_BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-none px-8 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200";
const BTN_VARIANTS = {
  primary: "gold-gradient text-on-gold hover:brightness-110 shadow-gold",
  outline: "border border-gold text-gold hover:bg-gold hover:text-on-gold",
  ghost: "border border-white/30 text-white hover:border-gold hover:text-gold",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof BTN_VARIANTS;
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const cls = `${BTN_BASE} ${BTN_VARIANTS[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener" } : {})}>
        {children}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

type SectionProps = {
  children: ReactNode;
  tone?: "rich" | "soft";
  id?: string;
  labelledBy?: string;
  className?: string;
};

export function Section({ children, tone = "rich", id, labelledBy, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === "rich" ? "bg-black-rich" : "bg-black-soft"} border-t border-white/5 py-16 text-cream sm:py-20 lg:py-24 ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

type HeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  as?: "h2" | "h1";
};

export function SectionHeading({ id, eyebrow, title, intro, className = "", as: Tag = "h2" }: HeadingProps) {
  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 sm:mb-12 ${className}`}>
      <p className="eyebrow text-gold">{eyebrow}</p>
      <Tag id={id} className="text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {intro && <div className="text-base leading-relaxed text-stone sm:text-lg">{intro}</div>}
    </div>
  );
}

export function CheckList({ items, tone = "check" }: { items: ReactNode[]; tone?: "check" | "x" }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-stone">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${tone === "check" ? "bg-gold-100 text-gold" : "bg-white/5 text-stone"}`}
          >
            <Icon name={tone === "check" ? "check" : "x"} className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Medical disclaimer"
      className={`rounded-2xl border border-cream/10 bg-black-soft/60 p-5 text-sm leading-relaxed text-stone sm:p-6 ${className}`}
    >
      <p className="flex gap-3">
        <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
        <span>
          <strong className="text-cream">Important:</strong> this information is general and is not medical advice. Treatments are for
          adults aged 18 and over and require a consultation, where a qualified practitioner assesses your suitability. Results vary
          between individuals and are not guaranteed. Sudden, patchy or rapidly worsening hair loss, or hair loss with a sore or inflamed
          scalp, should be assessed by a doctor.{" "}
          <Link className="text-gold underline underline-offset-2" href="/medical-disclaimer/">
            Read our medical disclaimer
          </Link>
          .
        </span>
      </p>
    </aside>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Wordmark({ sub = "Medical Wellness" }: { sub?: string }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-serif text-[1.15rem] tracking-[0.18em] text-white uppercase sm:text-xl">Harley Street</span>{" "}
      <span className="mt-1 flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.42em] text-gold uppercase">
        <span aria-hidden="true" className="h-px w-4 bg-gold" />
        {sub}
        <span className="sr-only"> {BRAND.name} main website</span>
      </span>
    </span>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
};

/** Inner-page hero with breadcrumbs and BreadcrumbList schema (Endolift pattern). */
export function PageHero({ eyebrow, title, intro, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-10 pb-16 text-white sm:pt-14 sm:pb-20">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="text-xs text-white/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="hover:text-gold" href="/">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                <Icon name="chevronRight" className="h-3 w-3" />
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-white/90">
                    {c.name}
                  </span>
                ) : (
                  <Link className="hover:text-gold" href={c.path}>
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-8 max-w-3xl">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <div className="mt-6 text-lg leading-relaxed text-white/80">{intro}</div>}
          {children}
        </div>
      </div>
    </section>
  );
}
