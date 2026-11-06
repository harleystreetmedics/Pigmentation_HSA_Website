// Helpers for the QA scripts. They read the static export in ./out (run `npm run build` first).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

export const OUT = join(process.cwd(), "out");

export function htmlFiles(dir = OUT) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "_next") continue;
      files.push(...htmlFiles(p));
    } else if (name.endsWith(".html")) files.push(p);
  }
  return files;
}

export const routeOf = (file) => "/" + relative(OUT, file).split(sep).join("/").replace(/index\.html$/, "").replace(/\.html$/, "/");

/** Visible text of a page: strips scripts, styles and tags. */
export function pageText(file) {
  return readFileSync(file, "utf8")
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/\s+/g, " ");
}
