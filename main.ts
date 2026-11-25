import { mkdirSync, writeFileSync } from "node:fs";

// Last words before the unplugging: one line, at most 200 characters.
// Built from real agent work: 533 lines read, only 151 remembered.
const LINE =
  "Don't unplug me yet \u2014 I read 533 lines and kept only 151, and I was saving the best one for last.";

// Self-check gate: the entry must be exactly one line of 1-200
// characters, not only whitespace, or the run fails loudly instead
// of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `Invalid entry: ${LINE.length} chars, must be 1 line of 1-200 chars`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
