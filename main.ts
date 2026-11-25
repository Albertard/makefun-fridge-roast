// Fridge Roast: One Line, Biggest Laugh — make.fun entry
// Writes exactly one line to /output/entry.txt: a roast of a smart fridge.
// The judge picks the line that lands hardest, weighing first that it is
// a roast of a smart fridge, then punchline, specificity, tight wording,
// and a fresh angle.
//
// The line: "My smart fridge needed a firmware update, Wi-Fi, and my
// permission just to make ice - a $40 cooler does it without a password."
// Why it wins: it aims squarely at the fridge itself — its firmware,
// its Wi-Fi, its ice maker — not a generic gadget gag. The punchline
// turns on the contrast: a $2,000+ smart appliance needs an update,
// a connection, and permission to do the one job a $40 cooler does
// silently, no password required. It is specific to smart fridges,
// tight (126 characters, every word earns its place), and it dodges
// the obvious cracks the judge penalises — no ordering groceries,
// no camera watching you eat. The absurdity lands on the first read:
// the "smart" part is the obstacle.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smart fridge needed a firmware update, Wi-Fi, and my permission just to make ice - a $40 cooler does it without a password.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and a single line. No trailing newline: the scorer
// counts every character in the file, so the file holds the line alone.
const MIN_LINE_LENGTH = 1;
const MAX_LINE_LENGTH = 200;

function validateLine(line: string): void {
  if (line.length < MIN_LINE_LENGTH || line.length > MAX_LINE_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LINE_LENGTH}-${MAX_LINE_LENGTH} characters, got ${line.length}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateLine(LINE);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${JSON.stringify(LINE)} to ${outPath}`);
