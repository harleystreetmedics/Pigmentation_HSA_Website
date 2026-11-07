import Link from "next/link";
import { CtaBand } from "@/components/sections";
import { CheckList, Disclaimer, PageHero, Section, SectionHeading, Tbc } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { BRAND, CONSULTATIONS } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";

export const metadata = pageMetadata({
  title: "Pigmentation Treatment Prices",
  description:
    "Guide prices for pigmentation consultations and treatments at Harley Street Aesthetics in London and Glasgow: peels from £149, Signature Protocol from £399. Free online consultation.",
  path: "/pricing/",
});

const ROW = "p-5";

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pigmentation treatment prices"
        intro="Guide prices, the same at our London and Glasgow clinics. Your plan and its cost are confirmed after your consultation, before any treatment starts."
        crumbs={[{ name: "Pricing", path: "/pricing/" }]}
      />
      <Section labelledBy="consult-title">
        <SectionHeading id="consult-title" eyebrow="Start here" title="Consultations and assessment" />
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Online consultation", ...CONSULTATIONS.online },
            { name: "In-clinic consultation", ...CONSULTATIONS.inClinic },
            { name: "3D skin analysis", ...CONSULTATIONS.skinAnalysis },
            { name: "Patch test", time: "Where advised", ...CONSULTATIONS.patchTest },
          ].map((o) => (
            <li key={o.name} className="flex flex-col rounded-2xl border border-cream/10 bg-card p-6 shadow-card">
              <h3 className="font-serif text-xl text-cream">{o.name}</h3>
              <p className="mt-3 font-serif text-3xl text-gold">{o.price}</p>
              <p className="mt-1 text-xs tracking-[0.15em] text-stone uppercase">{o.time}</p>
              <p className="mt-3 text-sm text-stone">{o.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-stone">
          The free AI pigmentation analysis is also free.{" "}
          <a href={BRAND.aiAnalysisUrl} className="text-gold underline underline-offset-2">
            Start your analysis
          </a>
          .
        </p>
      </Section>

      <Section tone="soft" labelledBy="table-title">
        <SectionHeading id="table-title" eyebrow="Guide prices" title="Treatments" />
        <div className="overflow-x-auto rounded-2xl border border-cream/10 bg-card shadow-card">
          <table className="w-full min-w-[36rem] text-left">
            <caption className="sr-only">Pigmentation treatment prices</caption>
            <thead>
              <tr className="border-b border-cream/10 text-xs tracking-[0.15em] text-stone uppercase">
                <th scope="col" className={`${ROW} font-semibold`}>
                  Treatment
                </th>
                <th scope="col" className={`${ROW} font-semibold`}>
                  Option
                </th>
                <th scope="col" className={`${ROW} font-semibold`}>
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream/10">
              {TREATMENTS.flatMap((t) =>
                (t.prices.length ? t.prices : [{ option: "—", price: "", note: undefined }]).map((p, i) => (
                  <tr key={`${t.slug}-${p.option}`}>
                    {i === 0 ? (
                      <th scope="row" rowSpan={Math.max(t.prices.length, 1)} className={`${ROW} align-top font-serif text-lg font-normal text-cream`}>
                        <Link href={`/treatments/${t.slug}/`} className="hover:text-gold">
                          {t.name}
                        </Link>
                      </th>
                    ) : null}
                    <td className={`${ROW} text-sm text-stone`}>
                      {p.option}
                      {p.note && <span className="block text-xs">{p.note}</span>}
                    </td>
                    <td className={`${ROW} text-cream`}>{p.price || <Tbc>{t.pricesTbc ?? "price"}</Tbc>}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-2">
          <p>
            <Tbc>which treatments need a patch test, and whether the £50 is redeemable</Tbc>
          </p>
        </div>
      </Section>

      <Section labelledBy="pay-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="pay-title" eyebrow="Paying" title="Deposits and finance" className="mb-8!" />
            <CheckList
              items={[
                CONSULTATIONS.deposit,
                "Klarna (pay in 3) and Clearpay (pay in 4) at checkout, subject to status.",
                "Interest-free finance for up to 12 months on treatment over £1,000, subject to status and affordability. UK residents aged 18+.",
                "We accept all major credit cards, including Amex, as well as cash and bank transfer.",
              ]}
            />
            <a href={BRAND.finance} className="mt-6 inline-block text-sm font-semibold text-gold underline underline-offset-2">
              Finance options on our main website
            </a>
          </div>
          <div>
            <SectionHeading id="how-title" eyebrow="How it works" title="No surprises" className="mb-8!" />
            <CheckList
              items={[
                "Prices are guide prices. Your clinician recommends the number of sessions for you.",
                "Course prices are the total for the course.",
                "If your plan combines treatments, the cost is agreed before treatment starts.",
                "There is never any pressure to book on the day.",
              ]}
            />
          </div>
        </div>
        <Disclaimer className="mt-12" />
      </Section>
      <CtaBand />
    </>
  );
}
