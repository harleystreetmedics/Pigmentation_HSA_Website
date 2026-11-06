"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { BRAND, CLINIC_LIST, CLINICS, type ClinicId } from "@/lib/site";
import { Icon } from "./Icon";
import { Tbc } from "./ui";

// Same storage key as the Endolift site, so a visitor's clinic choice carries across both.
const KEY = "hsa-location";

type Ctx = { location: ClinicId; setLocation: (id: ClinicId) => void };
const LocationContext = createContext<Ctx>({ location: "london", setLocation: () => {} });

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLoc] = useState<ClinicId>("london");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      // Syncing from storage after hydration keeps the static HTML identical for every visitor.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "london" || saved === "glasgow") setLoc(saved);
    } catch {}
  }, []);

  const setLocation = useCallback((id: ClinicId) => {
    setLoc(id);
    try {
      window.localStorage.setItem(KEY, id);
    } catch {}
  }, []);

  return <LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>;
}

export const useLocation = () => useContext(LocationContext);

export function LocationSwitcher({ className = "" }: { className?: string }) {
  const { location, setLocation } = useLocation();
  return (
    <div role="group" aria-label="Choose your clinic" className={`inline-flex rounded-full border border-white/15 bg-white/5 p-1 ${className}`}>
      {CLINIC_LIST.map((c) => {
        const active = c.id === location;
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={active}
            onClick={() => setLocation(c.id)}
            className={`min-h-9 rounded-full px-3.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${active ? "bg-gold text-on-gold" : "text-white/80 hover:text-white"}`}
          >
            {c.city}
          </button>
        );
      })}
    </div>
  );
}

export function HeaderPhone() {
  const c = CLINICS[useLocation().location];
  return (
    <a href={c.phone.href} className="hidden items-center gap-2 text-sm text-white/85 hover:text-gold 2xl:flex">
      <Icon name="phone" className="h-4 w-4 text-gold" />
      {c.phone.display}
      <span className="sr-only"> ({c.city} clinic)</span>
    </a>
  );
}

export function StickyMobileBar() {
  const c = CLINICS[useLocation().location];
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={c.phone.href}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 text-sm font-semibold text-white"
          aria-label={`Call our ${c.city} clinic on ${c.phone.display}`}
        >
          <Icon name="phone" className="h-4 w-4 text-gold" /> Call
        </a>
        {BRAND.whatsapp.enabled && (
          <a
            href={BRAND.whatsapp.href}
            target="_blank"
            rel="noopener"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white"
            aria-label="Message us on WhatsApp (opens in a new tab)"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-gold" />
          </a>
        )}
        <Link
          href="/book/"
          className="gold-gradient flex h-12 flex-[1.6] items-center justify-center text-xs font-semibold tracking-[0.15em] text-on-gold uppercase"
        >
          Book consultation
        </Link>
      </div>
    </div>
  );
}

/** Clinic panel with London/Glasgow tabs and a map, as on the Endolift home page. */
export function ClinicTabs() {
  const { location, setLocation } = useLocation();
  const c = CLINICS[location];
  return (
    <div className="grid overflow-hidden rounded-3xl border border-cream/10 bg-card shadow-card lg:grid-cols-12">
      <div className="p-7 sm:p-10 lg:col-span-5">
        <div role="group" aria-label="Choose a clinic" className="inline-flex rounded-full border border-cream/15 p-1">
          {CLINIC_LIST.map((x) => (
            <button
              key={x.id}
              type="button"
              aria-pressed={x.id === location}
              onClick={() => setLocation(x.id)}
              className={`min-h-9 rounded-full px-5 text-xs font-semibold tracking-wider uppercase transition ${x.id === location ? "bg-gold text-on-gold" : "text-stone hover:text-cream"}`}
            >
              {x.city}
            </button>
          ))}
        </div>
        <h3 className="mt-6 font-serif text-3xl text-cream">{c.city} clinic</h3>
        {c.addresses.map((a) => (
          <p key={a.line1} className="mt-4 flex gap-3 text-stone">
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
        <p className="mt-3 flex gap-3 text-stone">
          <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          {c.hours}
        </p>
        <p className="mt-3 flex gap-3">
          <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <a href={c.phone.href} className="font-semibold text-cream hover:text-gold">
            {c.phone.display}
          </a>
        </p>
        <a href={c.mapsUrl} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-cream">
          Get directions <Icon name="external" className="h-4 w-4" />
          <span className="sr-only">(opens Google Maps in a new tab)</span>
        </a>
      </div>
      <iframe
        key={c.id}
        title={`Map of our ${c.city} clinic`}
        src={c.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-80 w-full border-0 lg:col-span-7 lg:h-full lg:min-h-[420px]"
      />
    </div>
  );
}
