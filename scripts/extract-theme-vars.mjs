import { readFileSync } from "node:fs";

const file =
  process.argv[2] ??
  "static-backup/_next/static/css/433912fded849fb5.css";

const css = readFileSync(file, "utf8");

const darkStart = css.indexOf(".dark{");
const darkEnd = darkStart === -1 ? -1 : css.indexOf("}", darkStart);
const darkBlock =
  darkStart === -1 || darkEnd === -1 ? null : css.slice(darkStart, darkEnd + 1);

const vars = [
  "--background",
  "--foreground",
  "--card",
  "--card-foreground",
  "--popover",
  "--popover-foreground",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--muted",
  "--muted-foreground",
  "--accent",
  "--accent-foreground",
  "--destructive",
  "--destructive-foreground",
  "--border",
  "--input",
  "--ring",
  "--radius"
];

console.log("LIGHT");
for (const v of vars) {
  const idx = css.indexOf(v + ":");
  if (idx === -1) {
    console.log(v, "NOT FOUND");
    continue;
  }
  const end = css.indexOf(";", idx);
  console.log(css.slice(idx, end + 1));
}

if (darkBlock) {
  console.log("\nDARK");
  for (const v of vars) {
    const idx = darkBlock.indexOf(v + ":");
    if (idx === -1) {
      console.log(v, "NOT FOUND");
      continue;
    }
    const end = darkBlock.indexOf(";", idx);
    console.log(darkBlock.slice(idx, end + 1));
  }
}

