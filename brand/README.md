# kuraytech — Brand identity

<img src="mark.svg" width="96" alt="kuraytech mark">

kuraytech is the house every owned product ships from. Its identity is built
so the house and its products read as one hand without pretending to be one
product.

## Positioning

| | |
|---|---|
| **What it is** | The product house of Kuray Karaaslan: component libraries, starters and tools for production business software. |
| **Who it is for** | Developers, agencies, SMEs and founders building admin panels, dashboards, SaaS products and internal platforms that have to stay maintainable after launch. |
| **Promise** | Building blocks for production software. |
| **Proof** | Every library has a live demo; engines are framework-agnostic TypeScript; three runtimes held to one parity contract. |
| **Not** | A template marketplace, a "build anything for everyone" agency, or a promise of scale the studio does not have. |

**Tagline:** Building blocks for production software.
**Short bio:** Component libraries, starters and tools — one design system, one standard of delivery.

### Voice

Clear, calm, technical but understandable, confident without exaggeration.
Lead with the outcome, then the stack. Every claim must point at something a
visitor can open. No star counts, no "trusted by thousands", no hype words.

## The mark — the branching K

The house construction shared by every owned product (fixed in
`Brand_Positioning_Rules/logo-system.md`):

| Property | Value |
|---|---|
| Grid | 64 units |
| Letterform | one stem; two arms fork from its vertical midpoint |
| Arm angle | exactly 45° (`dx == dy`, asserted in `brand.test.mjs`) |
| Stroke | 7 (10.9% of the grid), round caps |
| Tile | rounded square, radius 14 (22%) |

**The kuraytech variant:** both arms end in a filled **node**. One trunk, a
fork, and every branch ends in something that shipped. The kui-* packages use
plain round caps instead, which is how the house mark and a package mark are
told apart at a glance.

## Palette

| Role | Hex | Meaning |
|---|---|---|
| Trunk | `#3b82f6` | The blue every kui-* package uses as its first tone — the house colour is the colour every product inherits. |
| Trunk, dark surfaces | `#60a5fa` | Same ramp, one step lighter. |
| Node | `#10b981` | **Live.** Each branch ends in a product that is shipped and running. No kui-* package uses it. |
| Node, dark surfaces | `#34d399` | Same ramp, one step lighter. |
| Tile / ink | `#0f172a` | House dark ground, shared with the family. |
| Night | `#020617` | Dark page ground. |
| Paper | `#f8fafc` | Light page ground. |
| Muted text | `#475569` / `#94a3b8` | Light / dark surfaces. |

Exactly two colours in the mark. A third colour, or a gradient, is never added.

## Type

- **Sans:** Geist SemiBold (600) for the wordmark, Geist Regular for text,
  falling back to the system UI stack.
- **Mono:** Geist Mono for labels and product names, falling back to
  `ui-monospace`.
- The wordmark is lowercase, tight tracking, split at the semantic boundary:
  **kuray** in trunk blue (the name every product domain carries,
  `*.kuray.dev`), **tech** in the foreground colour.

GitHub renders SVGs as `<img>`, which cannot load web fonts, so every lockup
width is derived from the system fallback's measured advance and never
clips. Outline the text before using a lockup in print.

## The motif — the branch graph

The banner and social card lay the mark's own construction on its side: a
horizontal trunk with one 45° branch per shipped product, alternating up and
down, each ending in a live node and the product's name in mono. It is the
only decorative element the brand uses; no stock illustrations, no neon, no
random gradients.

## Lockup rules

- Clear space on every side equals half the mark's height.
- Below 16px, use the mark alone — never the wordmark.
- Two wordmark files only: [`wordmark.svg`](wordmark.svg) for light surfaces,
  [`wordmark-inverse.svg`](wordmark-inverse.svg) for dark ones.
- The mark itself never changes between themes; it always sits on its dark tile.

## Assets

Everything is generated from [`geometry.mjs`](geometry.mjs) by
[`build.mjs`](build.mjs). Never hand-edit a committed asset — change the
geometry and run:

```bash
npm install   # sharp, only for the PNGs
npm run build
npm test      # fails if any committed SVG drifts from the geometry
```

| File | Use |
|---|---|
| [`mark.svg`](mark.svg) | the house mark |
| [`mark-square.svg`](mark-square.svg) | square tile, for surfaces that round corners themselves |
| [`wordmark.svg`](wordmark.svg) / [`wordmark-inverse.svg`](wordmark-inverse.svg) | lockups |
| [`banner-light.svg`](banner-light.svg) / [`banner-dark.svg`](banner-dark.svg) | organization profile header |
| [`social-preview.svg`](social-preview.svg) | 1280×640 social card |
| [`family/`](family) | the kui-* package marks, from the same construction |
| [`png/avatar.png`](png/avatar.png) | 512×512 organization avatar |
| [`png/social-preview.png`](png/social-preview.png) | repository social preview upload |

## The family

| Mark | Package | Second tone | Meaning |
|:-:|---|---|---|
| <img src="family/kui-react.svg" width="28"> | kui-react | `#8b5cf6` | the React kit |
| <img src="family/kui-ejs.svg" width="28"> | kui-ejs | `#ec4899` | the server-rendered EJS kit |
| <img src="family/kui-native.svg" width="28"> | kui-native | `#f97316` | the React Native kit |
| <img src="family/kui-calendar.svg" width="28"> | kui-calendar | `#06b6d4` | today |
| <img src="family/kui-gantt.svg" width="28"> | kui-gantt | `#ef4444` | the critical path |
| <img src="family/kui-player.svg" width="28"> | kui-player | `#22c55e` | played progress |
| <img src="family/kui-viewer.svg" width="28"> | kui-viewer | `#FFB020` | a selected element |

Each package keeps its own generator as the source of truth for its repo;
these copies exist so the profile can show the family side by side.
