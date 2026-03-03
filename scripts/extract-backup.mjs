import { readFileSync } from "node:fs";

const file = process.argv[2] ?? "static-backup/index.html";
const needle = process.argv[3];
const html = readFileSync(file, "utf8");

const keys = ["<main", "</main>", "<footer", "</footer>", "<header", "</header>"];
for (const k of keys) {
  console.log(k, html.indexOf(k));
}

function sliceAround(idx, len = 2000) {
  if (idx < 0) return;
  const start = Math.max(0, idx - 200);
  const end = Math.min(html.length, idx + len);
  console.log("\n--- slice ---\n" + html.slice(start, end) + "\n--- end ---\n");
}

sliceAround(html.indexOf("<header"), 2500);
sliceAround(html.indexOf("<main"), 6000);
sliceAround(html.indexOf("<footer"), 2500);

if (needle) {
  let from = 0;
  let hit = 0;
  while (true) {
    const idx = html.indexOf(needle, from);
    if (idx === -1) break;
    console.log(`\n=== match ${hit + 1} @ ${idx} (${needle}) ===`);
    sliceAround(idx, 9000);
    from = idx + needle.length;
    hit += 1;
    if (hit >= 5) break;
  }
  if (hit === 0) console.log(`No matches for: ${needle}`);
}

