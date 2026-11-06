// Lists every unique [TBC: …] placeholder and the pages it appears on.
// Usage: npm run check:tbc   (add --md to print a Markdown table)
import { readFileSync } from "node:fs";
import { htmlFiles, routeOf } from "./lib.mjs";

const found = new Map();
for (const f of htmlFiles()) {
  const html = readFileSync(f, "utf8").replace(/<!-- -->/g, "");
  for (const m of html.matchAll(/<mark class="tbc"[^>]*>\[TBC: ([\s\S]*?)\]<\/mark>/g)) {
    const text = m[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").trim();
    if (!found.has(text)) found.set(text, new Set());
    found.get(text).add(routeOf(f));
  }
}

const rows = [...found.entries()].sort((a, b) => a[0].localeCompare(b[0]));
if (process.argv.includes("--md")) {
  console.log("| Placeholder | Pages |\n|---|---|");
  for (const [t, pages] of rows) {
    const p = [...pages];
    console.log(`| ${t} | ${p.length > 4 ? `${p.slice(0, 3).join(", ")} +${p.length - 3} more` : p.join(", ")} |`);
  }
} else {
  for (const [t, pages] of rows) console.log(`[TBC: ${t}]  (${pages.size} page${pages.size > 1 ? "s" : ""})`);
}
console.log(`\n${rows.length} unique placeholders.`);
