// Next 16.4's static export writes route segment payloads as nested files
// (e.g. out/book/__next.book/__PAGE__.txt), but the client router requests the flat name
// (out/book/__next.book.__PAGE__.txt), which 404s on a static host and logs console errors.
// This copies each nested payload to the flat name the client asks for. Runs after `npm run build`.
import { copyFileSync, existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const OUT = join(process.cwd(), "out");
let copied = 0;

// If the static export didn't happen (for example a host rewrote next.config to a server build),
// print what the build produced so the cause is visible in the host's build log, then fail clearly.
if (!existsSync(OUT)) {
  const next = join(process.cwd(), ".next");
  let output = "unknown";
  try {
    output = JSON.parse(readFileSync(join(next, "required-server-files.json"), "utf8")).config?.output ?? "(not set)";
  } catch {}
  console.error("flatten-segments: no 'out' folder was created, so the static export did not run.");
  console.error(`  Next.js output mode used by the build: ${output} (this site needs "export")`);
  console.error(`  Files in project root: ${readdirSync(process.cwd()).join(", ")}`);
  if (existsSync(next)) console.error(`  Files in .next: ${readdirSync(next).join(", ")}`);
  const envNames = Object.keys(process.env).filter((k) => /NEXT|HOSTINGER|OUTPUT|STANDALONE/i.test(k));
  console.error(`  Related environment variable names: ${envNames.join(", ") || "none"}`);
  for (const f of ["next.config.ts", "next.config.js", "next.config.mjs"]) {
    if (existsSync(f)) console.error(`  ${f}:\n${readFileSync(f, "utf8")}`);
  }
  process.exit(1);
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "_next") continue;
      if (name.startsWith("__next.")) flatten(p, dir);
      else walk(p);
    }
  }
}

function flatten(segDir, routeDir) {
  for (const name of readdirSync(segDir)) {
    const p = join(segDir, name);
    if (statSync(p).isDirectory()) flatten(p, routeDir);
    else if (name.endsWith(".txt")) {
      const flat = relative(routeDir, p).split(sep).join(".");
      copyFileSync(p, join(routeDir, flat));
      copied++;
    }
  }
}

walk(OUT);
console.log(`flatten-segments: wrote ${copied} flat segment payload(s) in ${relative(process.cwd(), OUT) || dirname(OUT)}`);
