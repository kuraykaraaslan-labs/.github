/**
 * Guards the rules in Brand_Positioning_Rules/logo-system.md that only code
 * can keep: the arm angle is asserted, not eyeballed, and no committed asset
 * may drift from the geometry that generates it.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { svgAssets } from "./build.mjs";
import {
  ARMS,
  COLORS,
  FORK,
  GRID,
  NODE_RADIUS,
  STEM,
  STROKE_WIDTH,
  TILE_RADIUS,
} from "./geometry.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("both arms leave the fork at exactly 45 degrees", () => {
  for (const tip of ARMS) {
    assert.equal(Math.abs(tip.x - FORK.x), Math.abs(tip.y - FORK.y));
  }
});

test("the fork sits on the stem's vertical midpoint", () => {
  assert.equal(FORK.y, STEM.y + STEM.height / 2);
});

test("stroke and tile radius stay inside the house ratios", () => {
  const stroke = STROKE_WIDTH / GRID;
  assert.ok(stroke >= 0.105 && stroke <= 0.11, `stroke ratio ${stroke}`);
  const radius = TILE_RADIUS / GRID;
  assert.ok(radius >= 0.215 && radius <= 0.23, `tile radius ratio ${radius}`);
});

test("nodes keep at least 6 units of vertical margin on the 64 grid", () => {
  for (const tip of ARMS) {
    assert.ok(tip.y - NODE_RADIUS >= 6);
    assert.ok(GRID - (tip.y + NODE_RADIUS) >= 6);
  }
});

test("the figure is horizontally centred on the tile", () => {
  const left = STEM.x;
  const right = ARMS[0].x + NODE_RADIUS;
  assert.equal((left + right) / 2, GRID / 2);
});

test("the mark uses exactly two colours on its tile", () => {
  const svg = fs.readFileSync(path.join(HERE, "mark.svg"), "utf8");
  const fills = new Set(
    [...svg.matchAll(/(?:fill|stroke)="(#[0-9a-fA-F]{6})"/g)].map((m) => m[1].toLowerCase()),
  );
  fills.delete(COLORS.tile);
  assert.deepEqual([...fills].sort(), [COLORS.toneOne, COLORS.toneTwo].sort());
});

for (const [relative, expected] of Object.entries(svgAssets())) {
  test(`committed brand/${relative} matches the generator`, () => {
    const target = path.join(HERE, relative);
    assert.ok(fs.existsSync(target), `${relative} missing — run npm run build`);
    assert.equal(fs.readFileSync(target, "utf8"), expected, `${relative} drifted — run npm run build`);
  });
}
