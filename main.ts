// Monday Morning Punchlines — entry program.
// Writes a single joke about Monday mornings (1-200 chars) to /output/entry.txt.
// Self-checks the gate before writing: 1-200 characters (code points),
// not only whitespace, no trailing newline — so a bad joke fails loudly
// here instead of silently failing the sealed gate.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "On Monday mornings, my alarm clock and my bed fight over custody of me. The bed always wins. I stay in.";

const chars = Array.from(JOKE);
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Joke is ${chars.length} characters; gate requires 1-200.`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
