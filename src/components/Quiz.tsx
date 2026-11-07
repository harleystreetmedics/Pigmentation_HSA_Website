"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { SKIN_CHECK, conditionBySlug } from "@/lib/conditions";
import { BRAND } from "@/lib/site";
import { treatmentBySlug } from "@/lib/treatments";
import { Icon } from "./Icon";

// Runs entirely in the browser. Answers are never stored or sent anywhere (docs/decisions.md #20).

type Option = { id: string; label: string };
type Question = { id: string; title: string; hint?: string; multi?: boolean; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "what",
    title: "What are you noticing most?",
    options: [
      { id: "patches", label: "Soft-edged patches, e.g. on both cheeks or the upper lip" },
      { id: "spots", label: "Flat brown spots with clear edges" },
      { id: "freckles", label: "Freckles" },
      { id: "marks", label: "Dark marks left after spots, a rash or an injury" },
      { id: "uneven", label: "Uneven, blotchy or dull skin tone" },
      { id: "eyes", label: "Darkness under the eyes" },
      { id: "white", label: "Pale or white patches" },
    ],
  },
  {
    id: "where",
    title: "Where is it?",
    options: [
      { id: "face", label: "Face" },
      { id: "lips", label: "Lips or around the mouth" },
      { id: "hands", label: "Hands, neck or chest" },
      { id: "body", label: "Underarms, inner thighs, knees or elbows" },
    ],
  },
  {
    id: "flags",
    title: "Do any of these apply?",
    hint: "Choose all that apply.",
    multi: true,
    options: [
      { id: "changing", label: "A spot or mole is new, growing or changing" },
      { id: "irregular", label: "A mark is raised, has irregular edges or several colours" },
      { id: "bleeding", label: "A mark bleeds, itches or crusts" },
      { id: "hormonal", label: "It started with pregnancy, the pill or hormone treatment" },
      { id: "medicine", label: "It started after a new medicine, or where heat is applied often" },
      { id: "none", label: "None of these" },
    ],
  },
  {
    id: "tone",
    title: "Which best describes your skin in the sun?",
    hint: "This helps us point you to the right information. Your skin type is confirmed at consultation.",
    options: [
      { id: "t1", label: "Always burns, rarely tans" },
      { id: "t2", label: "Sometimes burns, tans gradually" },
      { id: "t3", label: "Rarely burns, tans easily (medium to olive or light brown skin)" },
      { id: "t4", label: "Very rarely or never burns (brown to deep brown or black skin)" },
      { id: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "now",
    title: "Do any of these apply right now?",
    hint: "Choose all that apply.",
    multi: true,
    options: [
      { id: "pregnant", label: "I'm pregnant or breastfeeding" },
      { id: "tan", label: "I have a tan, use sunbeds or have a sunny holiday coming up" },
      { id: "none", label: "None of these" },
    ],
  },
  {
    id: "priority",
    title: "What matters most to you?",
    options: [
      { id: "downtime", label: "As little downtime as possible" },
      { id: "programme", label: "A structured programme" },
      { id: "unsure", label: "I'm not sure yet" },
    ],
  },
];

type Answers = Record<string, string[]>;
type LinkItem = { href: string; label: string };

const CONDITION_FOR: Record<string, string> = {
  patches: "melasma",
  spots: "sun-spots",
  freckles: "freckles",
  marks: "post-inflammatory-hyperpigmentation",
  uneven: "uneven-skin-tone",
  eyes: "dark-circles",
  white: "hypopigmentation-and-vitiligo",
};
const AREA_FOR: Record<string, string> = { lips: "lip-and-perioral-pigmentation", hands: "hands-and-chest-pigmentation", body: "body-pigmentation" };
const HIGH_DOWNTIME = ["cosmelan-peel", "vi-peel", "co2-laser-resurfacing"];
const PROGRAMMES = ["signature-pigmentation-protocol", "cosmelan-peel"];

const link = (slug: string, kind: "conditions" | "treatments"): LinkItem | null => {
  const item = kind === "conditions" ? conditionBySlug(slug) : treatmentBySlug(slug);
  return item ? { href: `/${kind}/${slug}/`, label: item.shortName } : null;
};

function buildResult(a: Answers) {
  const what = a.what?.[0] ?? "uneven";
  const where = a.where?.[0] ?? "face";
  const flags = a.flags ?? [];
  const now = a.now ?? [];
  const tone = a.tone?.[0];

  const slugs = [CONDITION_FOR[what]];
  if (AREA_FOR[where]) slugs.push(AREA_FOR[where]);
  if (flags.includes("hormonal")) slugs.push("hormonal-pigmentation");
  if (flags.includes("medicine")) slugs.push("drug-and-heat-induced-pigmentation");
  const uniqueSlugs = [...new Set(slugs)];
  const reads = uniqueSlugs.map((s) => link(s, "conditions")).filter((x): x is LinkItem => Boolean(x));

  const doctorFirst = flags.some((f) => ["changing", "irregular", "bleeding"].includes(f));
  const referFirst = what === "white" || flags.includes("medicine");
  const pregnant = now.includes("pregnant");
  const tan = now.includes("tan");
  const deeper = tone === "t3" || tone === "t4";

  let treatments: LinkItem[] = [];
  if (!doctorFirst && !referFirst && !pregnant) {
    let pool = [...new Set(uniqueSlugs.flatMap((s) => conditionBySlug(s)?.treatments ?? []))];
    if (deeper || tan) pool = pool.filter((t) => t !== "ipl-photofacial");
    if (a.priority?.[0] === "downtime") pool = pool.filter((t) => !HIGH_DOWNTIME.includes(t));
    if (a.priority?.[0] === "programme") pool = [...pool.filter((t) => PROGRAMMES.includes(t)), ...pool.filter((t) => !PROGRAMMES.includes(t))];
    treatments = pool
      .slice(0, 4)
      .map((t) => link(t, "treatments"))
      .filter((x): x is LinkItem => Boolean(x));
    if (treatments.length === 0) treatments.push({ href: "/treatments/", label: "Overview of all treatments" });
  }
  return { reads, treatments, doctorFirst, referFirst, pregnant, deeper, tan };
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const done = step >= QUESTIONS.length;
  const q = QUESTIONS[step];

  const focusHeading = () => requestAnimationFrame(() => headingRef.current?.focus());

  function choose(opt: string) {
    if (q.multi) {
      setAnswers((prev) => {
        const cur = prev[q.id] ?? [];
        let next = cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt];
        if (opt === "none") next = next.includes("none") ? ["none"] : [];
        else next = next.filter((x) => x !== "none");
        return { ...prev, [q.id]: next };
      });
    } else {
      setAnswers((prev) => ({ ...prev, [q.id]: [opt] }));
      setStep((s) => s + 1);
      focusHeading();
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
    focusHeading();
  }

  if (done) {
    const r = buildResult(answers);
    return (
      <div className="rounded-3xl border border-gold/30 bg-card p-6 shadow-card sm:p-10" aria-live="polite">
        <p className="eyebrow text-gold">Your suggestions</p>
        <h2 ref={headingRef} tabIndex={-1} className="mt-3 text-3xl text-cream outline-none sm:text-4xl">
          The next step is a consultation
        </h2>
        <p className="mt-4 text-stone">
          This is not a diagnosis. Based on what you told us, these pages may be useful to read before you talk to us. Only a qualified
          practitioner can assess your pigmentation, your skin type and whether any treatment is suitable.
        </p>
        {r.doctorFirst && (
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-5 text-cream">
            <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <p>
              <strong>Please see a doctor first.</strong> A spot or mole that is new, changing, irregular, raised, bleeding or itchy needs a
              medical check before any cosmetic treatment. Please see your GP or a dermatologist. You&rsquo;re welcome to book a
              consultation with us too, and we will check this first.
            </p>
          </div>
        )}
        {r.referFirst && !r.doctorFirst && (
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-5 text-cream">
            <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <p>
              What you described is usually assessed medically first. We can look at your skin and explain the likely cause, and we may
              suggest seeing your GP. Never stop a prescribed medicine without speaking to your prescriber.
            </p>
          </div>
        )}
        {r.pregnant && (
          <p className="mt-6 rounded-2xl border border-cream/10 bg-black-soft p-5 text-stone">
            Most in-clinic pigmentation treatments aren&rsquo;t carried out during pregnancy or breastfeeding. Daily sun protection and gentle
            skincare help in the meantime, and we can plan treatment for later.
          </p>
        )}
        {(r.deeper || r.tan) && (
          <p className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-stone">
            {r.deeper
              ? "Medium and darker skin needs particular care, because some peels, lasers and light treatments carry a higher risk of new pigment changes. IPL isn't suitable for darker skin types. "
              : "Light and laser treatments aren't carried out on tanned skin. "}
            <Link href="/pigmentation-in-darker-skin/" className="text-gold underline underline-offset-2">
              Read about pigmentation in darker skin tones
            </Link>
            .
          </p>
        )}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-sans text-base font-semibold text-cream">Pages to read</h3>
            <ul className="mt-3 space-y-2">
              {r.reads.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-2 text-gold underline-offset-2 hover:underline">
                    {l.label} <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {r.treatments.length > 0 && (
            <div>
              <h3 className="font-sans text-base font-semibold text-cream">Options you could ask about</h3>
              <ul className="mt-3 space-y-2">
                {r.treatments.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex items-center gap-2 text-gold underline-offset-2 hover:underline">
                      {l.label} <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <p className="mt-8 text-sm text-stone">{SKIN_CHECK}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book/"
            className="gold-gradient inline-flex min-h-12 items-center justify-center px-8 text-xs font-semibold tracking-[0.2em] text-on-gold uppercase shadow-gold hover:brightness-110"
          >
            Book consultation
          </Link>
          <a
            href={BRAND.aiAnalysisUrl}
            className="inline-flex min-h-12 items-center justify-center border border-gold px-8 text-xs font-semibold tracking-[0.2em] text-gold uppercase hover:bg-gold hover:text-on-gold"
          >
            Free AI analysis
          </a>
          <button
            type="button"
            onClick={restart}
            className="inline-flex min-h-12 items-center justify-center border border-gold px-8 text-xs font-semibold tracking-[0.2em] text-gold uppercase hover:bg-gold hover:text-on-gold"
          >
            Start again
          </button>
        </div>
      </div>
    );
  }

  const selected = answers[q.id] ?? [];
  return (
    <div className="rounded-3xl border border-cream/10 bg-card p-6 shadow-card sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow text-gold">
          Question {step + 1} of {QUESTIONS.length}
        </p>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <div className="h-full bg-gold transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
        </div>
      </div>
      <fieldset className="mt-5">
        <legend>
          <h2 ref={headingRef} tabIndex={-1} className="text-2xl text-cream outline-none sm:text-3xl">
            {q.title}
          </h2>
          {q.hint && <span className="mt-2 block text-sm text-stone">{q.hint}</span>}
        </legend>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {q.options.map((o) => {
            const on = selected.includes(o.id);
            return (
              <button
                key={o.id}
                type="button"
                aria-pressed={q.multi ? on : undefined}
                onClick={() => choose(o.id)}
                className={`flex min-h-14 items-center gap-3 rounded-xl border px-5 py-3 text-left transition ${on ? "border-gold bg-gold/10 text-cream" : "border-cream/15 text-cream hover:border-gold/60"}`}
              >
                {q.multi && (
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${on ? "border-gold bg-gold text-on-gold" : "border-cream/30"}`}>
                    {on && <Icon name="check" className="h-3.5 w-3.5" />}
                  </span>
                )}
                {o.label}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => {
            setStep((s) => Math.max(0, s - 1));
            focusHeading();
          }}
          disabled={step === 0}
          className="min-h-11 text-sm font-semibold text-stone hover:text-cream disabled:opacity-40"
        >
          ← Back
        </button>
        {q.multi && (
          <button
            type="button"
            disabled={selected.length === 0}
            onClick={() => {
              setStep((s) => s + 1);
              focusHeading();
            }}
            className="gold-gradient inline-flex min-h-12 items-center justify-center px-8 text-xs font-semibold tracking-[0.2em] text-on-gold uppercase disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
