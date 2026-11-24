// One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae
// One funny line (133 characters, one sentence): a sock asks for a lift
// to the laundry room; the narrator mishears "lift" as "light snack",
// the directions were unclear, and the sock never said please.
// Setup promises a favour; the twist is a misheard snack order plus
// a complaint about manners.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "The sock asked for a lift to the laundry room. I heard 'light snack', the directions were unclear, and honestly it never said please.";

// The sealed scorer only accepts 1–200 characters, one line, UTF-8.
if ([...LINE].length > MAX_CHARS || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error(`entry line violates the ${MAX_CHARS}-character single-line rule`);
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(LINE);
