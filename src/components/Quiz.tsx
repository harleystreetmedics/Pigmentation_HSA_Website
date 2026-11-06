"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Icon } from "./Icon";

// Runs entirely in the browser. Answers are never stored or sent anywhere (docs/decisions.md #15).

type Option = { id: string; label: string };
type Question = { id: string; title: string; hint?: string; multi?: boolean; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "who",
    title: "Which best describes you?",
    options: [
      { id: "man", label: "Man" },
      { id: "woman", label: "Woman" },
      { id: "other", label: "Prefer to self-describe or not say" },
    ],
  },
  {
    id: "pattern",
    title: "What have you noticed most?",
    options: [
      { id: "hairline", label: "My hairline is moving back" },
      { id: "crown", label: "Thinning at the crown" },
      { id: "parting", label: "A wider parting or thinning on top" },
      { id: "allover", label: "Thinning or shedding all over" },
      { id: "patches", label: "Round or smooth bald patches" },
      { id: "scalp", label: "An itchy, flaky or sore scalp" },
      { id: "beard", label: "Beard or eyebrow thinning" },
    ],
  },
  {
    id: "duration",
    title: "How long has this been going on?",
    options: [
      { id: "short", label: "Less than 3 months" },
      { id: "medium", label: "3 to 12 months" },
      { id: "long", label: "More than a year" },
    ],
  },
  {
    id: "flags",
    title: "Do any of these apply?",
    hint: "Choose all that apply.",
    multi: true,
    options: [
      { id: "sudden", label: "It started suddenly or is getting worse quickly" },
      { id: "inflamed", label: "My scalp is red, scaly, painful or burning" },
      { id: "unwell", label: "I have other symptoms, like tiredness or weight change" },
      { id: "trigger", label: "I've recently had a baby, an illness or a stressful time" },
      { id: "none", label: "None of these" },
    ],
  },
  {
    id: "priority",
    title: "What matters most to you right now?",
    options: [
      { id: "cause", label: "Understanding what's causing it" },
      { id: "noninvasive", label: "Non-invasive options" },
      { id: "injections", label: "I'm open to in-clinic treatments, including injections" },
      { id: "unsure", label: "I'm not sure yet" },
    ],
  },
];

type Answers = Record<string, string[]>;

const CONDITION_FOR: Record<string, { href: string; label: string }> = {
  hairline: { href: "/conditions/receding-hairline/", label: "Receding hairline" },
  crown: { href: "/conditions/crown-thinning/", label: "Crown thinning" },
  parting: { href: "/conditions/female-pattern-hair-loss/", label: "Female pattern hair loss" },
  allover: { href: "/conditions/diffuse-thinning/", label: "Diffuse thinning" },
  patches: { href: "/conditions/alopecia-areata/", label: "Alopecia areata" },
  scalp: { href: "/conditions/scalp-conditions/", label: "Scalp conditions" },
  beard: { href: "/conditions/beard-and-eyebrow-thinning/", label: "Beard and eyebrow thinning" },
};

function buildResult(a: Answers) {
  const pattern = a.pattern?.[0] ?? "allover";
  const flags = a.flags ?? [];
  const reads: { href: string; label: string }[] = [CONDITION_FOR[pattern]];
  if (a.who?.[0] === "man" && ["hairline", "crown"].includes(pattern)) reads.push({ href: "/conditions/male-pattern-hair-loss/", label: "Male pattern baldness" });
  if (a.who?.[0] === "woman" && ["parting", "allover"].includes(pattern)) reads.push({ href: "/conditions/menopause-hair-loss/", label: "Menopause-related hair loss" });
  if (flags.includes("trigger")) reads.push({ href: "/conditions/telogen-effluvium/", label: "Shedding after stress or illness" });
  if (flags.includes("unwell")) reads.push({ href: "/conditions/medical-causes/", label: "Thyroid, deficiencies and medical causes" });
  if (flags.includes("inflamed")) reads.push({ href: "/conditions/scarring-alopecia/", label: "Scarring alopecia" });

  const medicalFirst = flags.some((f) => ["sudden", "inflamed", "unwell"].includes(f)) || pattern === "patches";
  const treatments: { href: string; label: string }[] = [];
  if (!medicalFirst && ["hairline", "crown", "parting", "allover"].includes(pattern)) {
    const p = a.priority?.[0];
    if (p === "noninvasive") treatments.push({ href: "/treatments/low-level-laser-therapy/", label: "Low-level laser therapy" });
    if (p === "injections" || p === "unsure") treatments.push({ href: "/treatments/prp-hair-treatment/", label: "PRP hair treatment" }, { href: "/treatments/scalp-microneedling/", label: "Scalp microneedling" });
    if (p === "cause" || treatments.length === 0) treatments.push({ href: "/treatments/", label: "Overview of all treatments" });
  }
  const unique = reads.filter((r, i, arr) => arr.findIndex((x) => x.href === r.href) === i);
  return { reads: unique, treatments, medicalFirst };
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
          This is not a diagnosis. It suggests pages that may be useful to read before you talk to us. Only a qualified practitioner can
          assess the cause of your hair loss and whether any treatment is suitable.
        </p>
        {r.medicalFirst && (
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-5 text-cream">
            <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
            <p>
              Some of your answers suggest your hair loss should be medically assessed before any cosmetic treatment is considered. Please
              book a consultation or speak to your GP. If you feel unwell, contact your GP or NHS 111.
            </p>
          </div>
        )}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-sans text-base font-semibold text-cream">Conditions to read about</h3>
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
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book/"
            className="gold-gradient inline-flex min-h-12 items-center justify-center px-8 text-xs font-semibold tracking-[0.2em] text-on-gold uppercase shadow-gold hover:brightness-110"
          >
            Book consultation
          </Link>
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
