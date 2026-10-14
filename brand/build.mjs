/**
 * Writes every kuraytech brand asset from the one geometry source:
 *
 *   brand/mark.svg                 — the house mark (rounded tile)
 *   brand/mark-square.svg          — square tile, for surfaces that round it themselves
 *   brand/wordmark.svg             — lockup for light surfaces
 *   brand/wordmark-inverse.svg     — lockup for dark surfaces
 *   brand/banner-light.svg         — profile header, light theme
 *   brand/banner-dark.svg          — profile header, dark theme
 *   brand/social-preview.svg       — 1280x640 social card
 *   brand/family/<package>.svg     — the kui-* marks, from the same construction
 *   brand/png/avatar.png           — 512x512 organization avatar (square tile;
 *                                    GitHub rounds the corners itself)
 *   brand/png/social-preview.png   — upload under Settings > Social preview
 *
 *   npm run build
 *
 * The SVGs need nothing but Node. The PNGs need `sharp` (a devDependency);
 * without it they are skipped, not fatal — a generator that dies on an
 * optional step is one nobody re-runs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FAMILY } from "./geometry.mjs";
import { bannerSvg, familyMarkSvg, markSvg, socialSvg, wordmarkSvg } from "./render.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

/** Every SVG this script owns, keyed by its path under brand/. Exported so
 *  the guard test checks exactly the set that gets written. */
export function svgAssets() {
  const assets = {
    "mark.svg": markSvg(),
    "mark-square.svg": markSvg({ square: true }),
    "wordmark.svg": wordmarkSvg(),
    "wordmark-inverse.svg": wordmarkSvg({ inverse: true }),
    "banner-light.svg": bannerSvg(),
    "banner-dark.svg": bannerSvg({ inverse: true }),
    "social-preview.svg": socialSvg(),
  };
  for (const member of FAMILY) assets[`family/${member.id}.svg`] = familyMarkSvg(member);
  return assets;
}

async function main() {
  const written = [];
  const write = (relative, contents) => {
    const target = path.join(HERE, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
    written.push(relative);
  };

  for (const [relative, svg] of Object.entries(svgAssets())) write(relative, svg);

  let sharp;
  try {
    ({ default: sharp } = await import("sharp"));
  } catch {
    console.warn("sharp not installed — SVGs written, PNGs skipped (npm install)");
  }
  if (sharp) {
    const raster = (svg, w, h) =>
      sharp(Buffer.from(svg), { density: 600 }).resize(w, h).png().toBuffer();
    write("png/avatar.png", await raster(markSvg({ square: true }), 512, 512));
    write("png/social-preview.png", await raster(socialSvg(), 1280, 640));
  }

  console.log(`Brand assets written — ${written.join(", ")}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
