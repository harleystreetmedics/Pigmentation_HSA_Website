"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { TRACKING } from "@/lib/site";

// Same key and events as the Endolift site (docs/decisions.md #16).
const KEY = "hsa-cookie-consent";
const OPEN_EVENT = "hsa:open-cookie-settings";
export const CONSENT_EVENT = "hsa:consent";

export type Consent = { analytics: boolean; marketing: boolean; ts: string; v: 1 };

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hasMarketing = Boolean(TRACKING.metaPixelId);

  useEffect(() => {
    // Show the banner only after hydration, when stored consent can be read.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!readConsent()) setOpen(true);
    const onOpen = () => {
      const c = readConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setManage(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open && manage) titleRef.current?.focus();
  }, [open, manage]);

  const save = useCallback((a: boolean, m: boolean) => {
    const prev = readConsent();
    const next: Consent = { analytics: a, marketing: m, ts: new Date().toISOString(), v: 1 };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: next }));
    // Scripts can't be unloaded, so withdrawing consent reloads the page without them.
    if (prev && ((prev.analytics && !a) || (prev.marketing && !m))) window.location.reload();
    setOpen(false);
    setManage(false);
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border border-white/10 bg-charcoal p-5 text-white shadow-2xl sm:bottom-6 sm:p-6 lg:right-6 lg:left-auto lg:mx-0"
    >
      <h2 id="cookie-title" ref={titleRef} tabIndex={-1} className="font-serif text-xl outline-none">
        Your privacy
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/80">
        We use essential cookies to make this site work. With your permission we&rsquo;d also like to use analytics cookies to understand
        how the site is used{hasMarketing ? " and marketing cookies to measure our advertising" : ""}. Read our{" "}
        <Link href="/cookie-policy/" className="text-gold underline underline-offset-2">
          cookie policy
        </Link>
        .
      </p>
      {manage && (
        <fieldset className="mt-4 space-y-3 rounded-xl border border-white/10 p-4 text-sm">
          <legend className="sr-only">Cookie preferences</legend>
          <label className="flex items-start gap-3 opacity-80">
            <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[var(--color-gold)]" />
            <span>
              <strong className="block">Essential</strong> Remembers your clinic and cookie choices. Always on.
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--color-gold)]" />
            <span>
              <strong className="block">Analytics</strong> Google Analytics, to see which pages are useful.
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--color-gold)]" />
            <span>
              <strong className="block">Marketing</strong> Meta Pixel, to measure the effectiveness of our adverts.
            </span>
          </label>
        </fieldset>
      )}
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        <button type="button" onClick={() => save(false, false)} className="min-h-11 rounded-full border border-white/30 px-4 text-sm font-semibold hover:border-gold">
          Reject non-essential
        </button>
        {manage ? (
          <button type="button" onClick={() => save(analytics, marketing)} className="min-h-11 rounded-full border border-white/30 px-4 text-sm font-semibold hover:border-gold">
            Save choices
          </button>
        ) : (
          <button type="button" onClick={() => setManage(true)} className="min-h-11 rounded-full border border-white/30 px-4 text-sm font-semibold hover:border-gold">
            Manage
          </button>
        )}
        <button type="button" onClick={() => save(true, true)} className="min-h-11 rounded-full bg-gold px-4 text-sm font-semibold text-on-gold hover:bg-gold-600">
          Accept all
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
