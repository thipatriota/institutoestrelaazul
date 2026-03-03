import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/prettify-backup-html.mjs <input.html> [outDir]");
  process.exit(1);
}

const outDir = process.argv[3] ?? "static-backup-pretty";
const raw = readFileSync(input, "utf8");

const pretty = raw
  .replace(/></g, ">\n<")
  .replace(/\\n/g, "\n")
  .replace(/\n{3,}/g, "\n\n");

const normalized = normalize(input).replace(/^static-backup[\\/]/, "");
const outFile = join(outDir, normalized);
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, pretty, "utf8");

console.log(outFile);

