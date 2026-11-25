// Entry runner for "The Funniest Office Joke" (kevin, head-to-head).
// One short line about office life: the open-door policy, proudly
// announced by every company, and the first thing that happens to the
// door the moment an actual meeting starts. Policy is what the handbook
// says; the joke is what the room does. Written to /output/entry.txt.
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Our office has an open-door policy, which is why every meeting starts with somebody closing the door.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  if (existsSync(out)) {
    for (const name of readdirSync(out)) {
      rmSync(join(out, name), { recursive: true, force: true });
    }
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
