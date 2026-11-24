// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// The gate requires 1-200 characters, exactly one line, no trailing newline.
const line =
  "I was 95% done by Friday; unfortunately, the remaining 5% was the entire task.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
