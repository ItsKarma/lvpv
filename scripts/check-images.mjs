// Fails the build if the site code points to an image that isn't in public/.
// Catches cases like a "photo cleanup" deleting files that pages still use.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SOURCE_DIRS = ["app", "components", "lib"];
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".json"]);
const IMAGE_REF =
  /["'`(]\/([A-Za-z0-9_\-./ %]+\.(?:png|jpe?g|gif|svg|webp|avif|ico))(?=[?#"'`)\s])/gi;

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (CODE_EXTS.has(extname(name))) out.push(full);
  }
  return out;
}

const missing = [];
let checked = 0;

for (const dir of SOURCE_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const match of line.matchAll(IMAGE_REF)) {
        checked++;
        const rel = decodeURIComponent(match[1]);
        if (!existsSync(join(ROOT, "public", rel))) {
          missing.push(`  ${file.slice(ROOT.length)}:${i + 1}  /${rel}`);
        }
      }
    });
  }
}

if (missing.length) {
  console.error(`\n✕ ${missing.length} image(s) referenced in the code are missing from public/:\n`);
  console.error(missing.join("\n"));
  console.error("\nAdd the file(s) back to public/ or update the code that uses them.\n");
  process.exit(1);
}

console.log(`✓ All ${checked} image references found in public/`);
