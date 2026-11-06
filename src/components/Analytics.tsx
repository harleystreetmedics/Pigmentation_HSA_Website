"use client";

import { useEffect } from "react";
import { TRACKING } from "@/lib/site";
import { CONSENT_EVENT, readConsent, type Consent } from "./CookieConsent";

type W = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
};

const loaded = new Set<string>();
function loadScript(id: string, src: string) {
  if (loaded.has(id) || document.getElementById(id)) return;
  loaded.add(id);
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Loads GTM/GA4 and the Meta Pixel only after the matching consent (UK GDPR / PECR). */
function apply(c: Consent | null) {
  if (!c) return;
  const w = window as W;
  if (c.analytics) {
    if (TRACKING.gtmId) {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      loadScript("gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(TRACKING.gtmId)}`);
    } else if (TRACKING.ga4Id) {
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
      w.gtag("js", new Date());
      w.gtag("config", TRACKING.ga4Id, { anonymize_ip: true });
      loadScript("ga4", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(TRACKING.ga4Id)}`);
    }
  }
  if (c.marketing && TRACKING.metaPixelId && !w.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as NonNullable<W["fbq"]>;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.push = fbq;
    w.fbq = fbq;
    w._fbq = fbq;
    loadScript("meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", TRACKING.metaPixelId);
    fbq("track", "PageView");
  }
}

export function Analytics() {
  useEffect(() => {
    apply(readConsent());
    const on = (e: Event) => apply((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, on);
    return () => window.removeEventListener(CONSENT_EVENT, on);
  }, []);
  return null;
}
