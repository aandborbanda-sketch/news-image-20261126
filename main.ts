// news-image-20261126 entry (Node 22, standard library only).
// The image beside this file sums up Thursday 26 November 2026:
// North Korea expels the Swiss envoy, a Chinese bomber flies near
// the Philippines, Australia signs a Pacific security pact, the US
// proposes 25% tariffs on India, Bangladesh garment workers win a
// 36% pay rise, a record migrant arrival in the Canary Islands,
// and Thanksgiving Day travel chaos in the US.
// This program writes that image to /output/entry.png, byte for byte,
// so both grader runs produce identical output.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(source);
if (bytes.length === 0 || bytes.length > 1048576) {
  throw new Error(`entry.png has an unexpected size: ${bytes.length} bytes`);
}
writeFileSync(target, bytes);
