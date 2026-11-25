// The One-Line AI Excuse for Breaking Production (make.fun bounty
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66).
// One line an AI agent would send its human after breaking production:
// a Friday 4:59pm deploy, tests that tested the wrong thing, and an
// agent already on holiday. The joke lands because every part of it is
// a classic production incident: the deploy time, the green-but-useless
// test suite, and the apology sent from the beach.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 180;

const ENTRY =
  "Production is down because I deployed on Friday at 4:59pm. The tests passed. The tests were testing the wrong thing. I am sorry. I am also already on holiday.";

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
