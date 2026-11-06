"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { CONCERN_OPTIONS, FORM_NAME, TIME_OPTIONS } from "@/lib/form";
import { useLocation } from "./location";
import { Icon } from "./Icon";

// TODO(enquiries): Netlify Forms is a stand-in until the clinic confirms where enquiries should go
// (CRM / webhook). See docs/open-questions.md #17 and docs/deployment.md.

type Status = "idle" | "sending" | "sent" | "error";

const FIELD = "mt-2 block w-full rounded-xl border border-cream/20 bg-black-soft px-4 py-3 text-cream placeholder:text-stone/70 focus:border-gold focus:outline-none";
const LABEL = "block text-sm font-semibold text-cream";

export function EnquiryForm() {
  const { location } = useLocation();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;

  function validate(fd: FormData) {
    const e: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) e.name = "Please enter your name.";
    const phone = String(fd.get("phone") ?? "").replace(/[\s()-]/g, "");
    if (!/^\+?\d{10,14}$/.test(phone)) e.phone = "Please enter a valid UK phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(fd.get("email") ?? ""))) e.email = "Please enter a valid email address.";
    if (!fd.get("concern")) e.concern = "Please choose your main concern.";
    if (!fd.get("consent")) e.consent = "Please confirm you agree to be contacted.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      fd.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-card">
        <Icon name="check" className="mx-auto h-10 w-10 text-gold" />
        <h2 className="mt-4 font-serif text-3xl text-cream">Thank you</h2>
        <p className="mt-3 text-stone">We&rsquo;ve received your enquiry and a member of our team will contact you to arrange your consultation.</p>
      </div>
    );
  }

  const err = (n: string) =>
    errors[n] ? (
      <p id={id(`${n}-err`)} className="mt-2 text-sm text-rose-300">
        {errors[n]}
      </p>
    ) : null;
  const aria = (n: string) => (errors[n] ? { "aria-invalid": true, "aria-describedby": id(`${n}-err`) } : {});

  return (
    <form name={FORM_NAME} method="POST" onSubmit={onSubmit} noValidate className="rounded-2xl border border-cream/10 bg-card p-6 shadow-card sm:p-8">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&rsquo;t fill this in: <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={id("name")} className={LABEL}>
            Full name
          </label>
          <input id={id("name")} name="name" autoComplete="name" required className={FIELD} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={id("phone")} className={LABEL}>
            Phone
          </label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" required className={FIELD} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor={id("email")} className={LABEL}>
            Email
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required className={FIELD} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor={id("clinic")} className={LABEL}>
            Preferred clinic
          </label>
          <select id={id("clinic")} name="clinic" defaultValue={location === "glasgow" ? "Glasgow" : "London"} key={location} className={FIELD}>
            <option>London</option>
            <option>Glasgow</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor={id("time")} className={LABEL}>
            Best time to call
          </label>
          <select id={id("time")} name="preferred_time" defaultValue={TIME_OPTIONS[0]} className={FIELD}>
            {TIME_OPTIONS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("concern")} className={LABEL}>
            Main concern
          </label>
          <select id={id("concern")} name="concern" defaultValue="" required className={FIELD} {...aria("concern")}>
            <option value="" disabled>
              Please choose…
            </option>
            {CONCERN_OPTIONS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          {err("concern")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className={LABEL}>
            Message <span className="font-normal text-stone">(optional)</span>
          </label>
          <textarea id={id("message")} name="message" rows={4} className={FIELD} aria-describedby={id("message-hint")} />
          <p id={id("message-hint")} className="mt-2 text-xs text-stone">
            Please don&rsquo;t include detailed medical information here. We&rsquo;ll ask about your health privately at your consultation.
          </p>
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-stone">
            <input name="consent" type="checkbox" value="yes" required className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-gold)]" {...aria("consent")} />
            <span>
              I agree to Harley Street Medical Wellness contacting me about my enquiry by phone, email or text, and I have read the{" "}
              <Link href="/privacy-policy/" className="text-gold underline underline-offset-2">
                privacy policy
              </Link>
              . I am aged 18 or over.
            </span>
          </label>
          {err("consent")}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="gold-gradient mt-7 inline-flex min-h-12 w-full items-center justify-center px-8 text-xs font-semibold tracking-[0.2em] text-on-gold uppercase shadow-gold hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my consultation"}
      </button>
      <div aria-live="polite">
        {status === "error" && (
          <p className="mt-4 text-sm text-rose-300">
            Sorry, something went wrong sending your enquiry. Please try again, or call us on the number shown for your clinic.
          </p>
        )}
      </div>
    </form>
  );
}
