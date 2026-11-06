// Checks every internal link and asset in the static export resolves to a file, and lists
// external links, phone numbers and email addresses for manual review. Exits 1 on broken links.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { OUT, htmlFiles, routeOf } from "./lib.mjs";

const broken = [];
const external = new Map();
const tel = new Set();
const mail = new Set();

for (const f of htmlFiles()) {
  const html = readFileSync(f, "utf8");
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1].replace(/&amp;/g, "&");
    if (url.startsWith("#") || url.startsWith("data:")) continue;
    if (url.startsWith("tel:")) { tel.add(url); continue; }
    if (url.startsWith("mailto:")) { mail.add(url); continue; }
    if (/^https?:\/\//.test(url)) {
      const host = new URL(url).host;
      if (!external.has(host)) external.set(host, new Set());
      external.get(host).add(url);
      continue;
    }
    const path = url.split(/[?#]/)[0];
    const target = path.endsWith("/") ? join(OUT, path, "index.html") : join(OUT, path);
    if (!existsSync(target)) broken.push(`${routeOf(f)} -> ${url}`);
  }
}

console.log("Phone links:", [...tel].join(", "));
console.log("Email links:", [...mail].join(", "));
console.log("External hosts:");
for (const [host, urls] of external) console.log(`  ${host} (${urls.size}): ${[...urls].slice(0, 3).join(" ")}`);
if (broken.length) {
  console.error(`\nBroken internal links (${broken.length}):\n  ${[...new Set(broken)].join("\n  ")}`);
  process.exit(1);
}
console.log("\nAll internal links and assets resolve.");
