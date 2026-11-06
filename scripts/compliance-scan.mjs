// Scans built page text for wording that breaks the ASA/CAP Code or the ban on advertising
// prescription-only medicines (POMs) to the public. Fails (exit 1) on any hit.
import { htmlFiles, pageText, routeOf } from "./lib.mjs";

const RULES = [
  // Prescription-only medicines and brand names (CAP 12.12, Human Medicines Regulations 2012).
  { re: /\b(finasteride|propecia|dutasteride|avodart|minoxidil|regaine|rogaine|spironolactone|bicalutamide|cyproterone|baricitinib|olumiant|ritlecitinib|litfulo|jak inhibitor|steroid injection|corticosteroid|triamcinolone|kenalog)\b/i, why: "names a medicine (POM advertising ban)" },
  // Guarantees and absolute claims.
  { re: /\bguarantee(d|s)?\b/i, why: "guarantee wording", allow: /(not guaranteed|can't be guaranteed|can't guarantee|cannot guarantee|no honest clinic can guarantee|do not guarantee|don't guarantee|isn't guaranteed|guarantee results for hair loss)/i },
  { re: /\b(clinically proven|scientifically proven|100%|permanent(ly)? (results|cure|regrowth)|cure[sd]? (hair loss|baldness|alopecia))\b/i, why: "absolute or unproven claim" },
  { re: /\b(regrow(th)? (your|in) (hair )?(in )?(weeks|days)|in (just )?weeks)\b/i, why: "time-bound result claim" },
  { re: /\b(best|leading|no\.? ?1|number one|world-class|uk's leading)\b/i, why: "superlative claim needing substantiation", allow: /best (time|describes|route|served)/i },
  // Hair playbook "never say" rules (Copilot, Non-Surgical Hair Rejuvenation).
  { re: /(revers(e|es|ed|ing) (your )?(baldness|hair loss)|works? for advanced hair loss|regrow(s)? hair in every case)/i, why: "playbook 'never say' claim" },
  { re: /free (doctor appointment|treatment)/i, why: "playbook: free consultation is not a free doctor appointment or treatment", allow: /not free treatment/i },
  // Time pressure / urgency (CAP 3.31, 8.17).
  { re: /\b(limited time|today only|book now before|offer ends|hurry|last chance|only \d+ (spaces|slots) left)\b/i, why: "time-pressure wording" },
  // Statistics we have no source for.
  { re: /\b\d{1,3}(,\d{3})*\+? (patients|treatments|successful|happy)\b/i, why: "unsourced statistic" },
  { re: /\b\d{1,3}% (of|success|improvement|regrowth|more)\b/i, why: "unsourced percentage" },
  // Under-18 targeting.
  { re: /\b(teen(ager)?s?|under[- ]18s?|students? discount)\b/i, why: "may target under-18s", allow: /late teens/i },
];

let hits = 0;
for (const f of htmlFiles()) {
  const text = pageText(f);
  for (const rule of RULES) {
    const re = new RegExp(rule.re.source, "gi");
    for (const m of text.matchAll(re)) {
      const ctx = text.slice(Math.max(0, m.index - 70), m.index + m[0].length + 70);
      if (rule.allow && rule.allow.test(ctx)) continue;
      hits++;
      console.log(`${routeOf(f)}  ${rule.why}: "…${ctx.trim()}…"`);
    }
  }
}
if (hits) {
  console.error(`\n${hits} compliance issue(s) found.`);
  process.exit(1);
}
console.log("Compliance scan passed: no POM names, guarantees, superlatives, time pressure or unsourced statistics found.");
