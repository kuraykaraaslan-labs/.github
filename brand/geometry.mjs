/**
 * The kuraykaraaslan labs house mark, as raw geometry.
 *
 * kuraykaraaslan labs is the house every owned product ships from, so its mark is the
 * house construction itself — the branching K fixed by
 * Brand_Positioning_Rules/logo-system.md: a stem that forks into two arms at
 * exactly 45 degrees, 64-unit grid, stroke 7, rounded tile at radius 14.
 *
 * What makes it the house rather than another package: the arm tips end in
 * filled nodes. One trunk, a fork, and every branch ends in something that
 * shipped. The node colour is "live".
 *
 * This module is the single source of truth. It is framework-free and has no
 * dependencies; `render.mjs` turns it into SVG strings, `build.mjs` writes
 * them, and `brand.test.mjs` fails if a committed asset drifts from it.
 *
 *   node brand/build.mjs
 */

/** ---- Shared house construction. Identical to every kui-* package. ---- */

export const GRID = 64;
export const VIEW_BOX = `0 0 ${GRID} ${GRID}`;
/** ~10.9% of the grid — the house's optical weight. */
export const STROKE_WIDTH = 7;
/** ~22% of the tile edge. */
export const TILE_RADIUS = 14;

/** ---- The labs variant: node terminals. ------------------------------ */

/** ~8.6% of the grid. Large enough to read as a dot past the stroke's own
 *  round cap at 16px, small enough to keep 10.5 units of vertical margin
 *  (the rule asks for >= 6 on a 64 grid). */
export const NODE_RADIUS = 5.5;

/** The kui-* marks span x 16..44.5. Nodes push the right edge to 46.5, so
 *  the whole figure shifts right by half the growth to stay centred. */
export const NODE_SHIFT = 0.75;
const DX = NODE_SHIFT;

/** Stem: a rect, because a 32-long stroke would round its own ends. */
export const STEM = { x: 16 + DX, y: 16, width: 7, height: 32, radius: 1.5 };
/** The fork, and the two arm tips. dx === dy === 16, i.e. exactly 45deg. */
export const FORK = { x: 25 + DX, y: 32 };
export const ARMS = [
  { x: 41 + DX, y: 16 },
  { x: 41 + DX, y: 48 },
];

/** ---- Palette ------------------------------------------------------- */

export const COLORS = {
  /** The trunk. The same blue-500 every kui-* package uses as its first
   *  tone: the house colour is the colour every product inherits. */
  toneOne: "#3b82f6",
  toneOneInverse: "#60a5fa",
  /** The nodes. Emerald means "live" — each branch ends in a product that
   *  is shipped and running. No kui-* package uses it as a second tone. */
  toneTwo: "#10b981",
  toneTwoInverse: "#34d399",
  /** House dark ground, shared with the kui-* family. */
  tile: "#0f172a",
  tileInverse: "#020617",
  /** Light surfaces. */
  paper: "#f8fafc",
  foreground: "#0f172a",
  foregroundMuted: "#475569",
  gridLine: "#e2e8f0",
  /** Dark surfaces. */
  foregroundInverse: "#f1f5f9",
  foregroundMutedInverse: "#94a3b8",
  gridLineInverse: "#1e293b",
};

/** ---- Wordmark ------------------------------------------------------ */

/** Split at the semantic boundary. The name is the person and sits in the
 *  foreground; "labs" is what makes this the house rather than the personal
 *  account (github.com/kuraykaraaslan), so it carries the trunk blue. The
 *  leading space lives in the accent span so the split stays one boundary. */
export const WORDMARK = { name: "kuraykaraaslan", accent: " labs" };
export const SITE = "labs.kuray.dev";
/** Mean advance per character at 26px SemiBold, measured against the system
 *  fallback, not Geist — GitHub renders SVGs as <img>, which never loads a
 *  web font, so the fallback is what every visitor actually sees. */
export const WORDMARK_ADVANCE = 19.5;
/** Text starts at 96 = mark (64) + clear space (half the mark's height). */
export const WORDMARK_X = 96;
export const FONT_STACK =
  "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
export const MONO_STACK =
  "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

export const TAGLINE = "Building blocks for production software";

/** ---- The kui-* family, as recorded in logo-system.md ---------------- */

/** Same construction, plain round caps, family blue first tone. The second
 *  tone names what each package actually puts on screen. */
export const FAMILY = [
  { id: "kui-react", toneTwo: "#8b5cf6", meaning: "the React kit" },
  { id: "kui-ejs", toneTwo: "#ec4899", meaning: "the server-rendered EJS kit" },
  { id: "kui-native", toneTwo: "#f97316", meaning: "the React Native kit" },
  { id: "kui-calendar", toneTwo: "#06b6d4", meaning: "today" },
  { id: "kui-gantt", toneTwo: "#ef4444", meaning: "the critical path" },
  { id: "kui-player", toneTwo: "#22c55e", meaning: "played progress" },
  { id: "kui-viewer", toneTwo: "#FFB020", meaning: "a selected element" },
];

/** Branches drawn in the profile banner — one per shipped product. */
/** Even indexes branch up, odd ones down. Ordered so long labels never sit
 *  side by side, which matters whenever the graph is drawn tight. */
export const BRANCHES = [
  "kui-react",
  "kui-calendar",
  "kui-native",
  "kui-ejs",
  "kui-gantt",
  "kui-player",
  "kui-viewer",
  "tepegöz",
];
