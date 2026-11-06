// Scans built page text for wording that breaks the ASA/CAP Code, the ban on advertising
// prescription-only medicines (POMs) to the public, or the Copilot pigmentation "never say" rules.
// Also checks every condition/treatment page carries the skin cancer notice. Fails (exit 1) on any hit.
import { htmlFiles, pageText, routeOf } from "./lib.mjs";

const RULES = [
  // Prescription-only medicines (CAP 12.12, Human Medicines Regulations 2012).
  {
    re: /\b(hydroquinone|tretinoin|retin-a|isotretinoin|roaccutane|accutane|tri-?luma|triple[- ]combination|kligman|tranexamic|cysteamine|clindamycin|doxycycline|minocycline|steroid cream|corticosteroid|hydrocortisone|fluocinolone|mometasone|tacrolimus|glutathione)\b/i,
    why: "names a prescription medicine or restricted product",
  },
  // Guarantees and absolute claims.
  { re: /\bguarantee(d|s)?\b/i, why: "guarantee wording", allow: /(not guaranteed|can't guarantee|cannot guarantee|do not guarantee|don't guarantee|isn't guaranteed|you guarantee my)/i },
  {
    re: /\b(clinically proven|scientifically proven|100%|permanent(ly)?|gone for good|forever|cure[sd]?|erase[sd]?|eliminate[sd]?)\b/i,
    why: "absolute or unproven claim",
    allow: /(erase, restrict|not permanent|is cosmelan permanent|results are not permanent|not cured|be cured|go away permanently|removed permanently|gone permanently|rather than cured)/i,
  },
  { re: /\bremoves? all (pigmentation|pigment)\b/i, why: "complete-removal claim", allow: /does not remove all/i },
  // Copilot never-say: lighten / whiten / bleach the skin; "not a laser".
  { re: /\b(whiten(ing|s)?|bleach(ing|es)?|skin lightening)\b/i, why: "playbook: never say whiten/bleach/lighten" },
  { re: /\blighten(s|ing|ed)?\b/i, why: "playbook: never say lighten", allow: /lighten my (skin|overall)/i },
  { re: /\bnot a laser\b/i, why: "playbook: never say the Signature protocol is 'not a laser'" },
  { re: /10 Harley Street/i, why: "playbook: 10 Harley Street is not seeing patients" },
  { re: /\bsuitable for all skin (types|tones)\b|\bFitzpatrick I[–-]VI\b/i, why: "unsupported all-skin-types claim" },
  { re: /\b(best|leading|no\.? ?1|number one|world-class|uk's leading|pain[- ]free|zero pain|painless)\b/i, why: "superlative or comfort claim needing substantiation", allow: /best (time|describes|route|served|way)/i },
  { re: /free (doctor appointment|treatment)/i, why: "free consultation is not a free doctor appointment or treatment" },
  // Time pressure / urgency (CAP 3.31, 8.17).
  { re: /\b(limited time|today only|book now before|offer ends|hurry|last chance|only \d+ (spaces|slots) left)\b/i, why: "time-pressure wording" },
  // Statistics we have no source for.
  { re: /\b\d{1,3}(,\d{3})*\+? (patients|treatments|successful|happy|faces)\b/i, why: "unsourced statistic" },
  { re: /\b\d{1,3}% (of|success|improvement|reduction|clearer|more|stabilised)\b/i, why: "unsourced percentage" },
  // Under-18 targeting.
  { re: /\b(teen(ager)?s?|under[- ]18s?|students? discount|prom)\b/i, why: "may target under-18s", allow: /anyone under 18/i },
];

const SKIN_CHECK = /new, changing, irregular, bleeding or itchy dark spot or mole must be checked by a doctor/i;
const NEEDS_SKIN_CHECK = /^\/(conditions|treatments)\/[^/]+\/$|^\/which-treatment\/$|^\/pigmentation-in-darker-skin\/$/;

let hits = 0;
for (const f of htmlFiles()) {
  const text = pageText(f);
  const route = routeOf(f);
  for (const rule of RULES) {
    const re = new RegExp(rule.re.source, "gi");
    for (const m of text.matchAll(re)) {
      const ctx = text.slice(Math.max(0, m.index - 70), m.index + m[0].length + 70);
      if (rule.allow && rule.allow.test(ctx)) continue;
      hits++;
      console.log(`${route}  ${rule.why}: "…${ctx.trim()}…"`);
    }
  }
  if (NEEDS_SKIN_CHECK.test(route) && !SKIN_CHECK.test(text)) {
    hits++;
    console.log(`${route}  missing the skin cancer safety notice`);
  }
}
if (hits) {
  console.error(`\n${hits} compliance issue(s) found.`);
  process.exit(1);
}
console.log(
  "Compliance scan passed: no POM names, guarantees, never-say wording, superlatives, time pressure or unsourced statistics; skin check notice present on every condition, treatment, quiz and darker-skin page.",
);
