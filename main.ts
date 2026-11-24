// The Robot Vacuum's Best Excuse — one line, 140 characters max.
// The vacuum speaks for itself, deadpan: its own map and collision
// sensor are the joke's machinery, and the punch lands on the last
// phrase. Deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss that spot — my map labelled it 'cat', and my collision sensor has signed a peace treaty.";

// The gate rejects anything over 140 characters, so fail loudly here
// rather than ship an invalid entry if the line is ever edited longer.
if (LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
