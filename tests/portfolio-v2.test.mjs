import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("navigation includes Blog", () => {
  const config = read("src/data/config.ts");
  assert.match(config, /label:\s*"Blog",\s*href:\s*"\/blog"/);
});

test("skills include V2 tools and exclude FastAPI", () => {
  const config = read("src/data/config.ts");
  for (const term of ["Data Analytics", "AWS", "n8n", "CLI Agents", "React", "TypeScript", "MongoDB"]) {
    assert.match(config, new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(config, /FastAPI/);
});

test("blue theme replaces orange-led theme", () => {
  const css = read("src/app/globals.css");
  assert.match(css, /#2563eb/i);
  assert.match(css, /#0f172a/i);
  assert.doesNotMatch(css, /#ff9900/i);
});
