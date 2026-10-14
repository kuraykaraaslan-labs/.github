<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/banner-dark.svg">
  <img alt="kuraykaraaslan labs — Building blocks for production software" src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/banner-light.svg" width="100%">
</picture>

**kuraykaraaslan labs** is the product house of [Kuray Karaaslan](https://kuray.dev): component libraries, starters and tools for teams that build serious business software — admin panels, dashboards, SaaS products and internal platforms — and need them to be maintainable after launch, not just demo-ready.

Everything here grows from one trunk: a single design system, implemented in three runtimes, and a set of standalone engines built on top of it. Every package has a live demo.

[Website](https://labs.kuray.dev) · [kui-react showcase](https://kui-react.kuray.dev) · [Work with me](https://kuray.dev)

## The KUI design system

One component library in three runtimes, kept in visual parity. `kui-react` is the source of truth; the others follow it pixel for pixel.

| | Package | What it is | |
|:-:|---|---|---|
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-react.svg" width="32" alt=""> | [**kui-react**](https://github.com/kuraykaraaslan/kui-react) | Next.js 16 / React 19 components organised by atomic design, with seventeen full-page industry demos. Copy-paste ready. | [Demo](https://kui-react.kuray.dev) |
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-ejs.svg" width="32" alt=""> | [**kui-ejs**](https://github.com/kuraykaraaslan/kui-ejs) | The same system, server-rendered with EJS — for Express apps that do not want a client framework. | [Demo](https://kui-ejs.kuray.dev) |
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-native.svg" width="32" alt=""> | [**kui-native**](https://github.com/kuraykaraaslan/kui-native) | The same system for React Native and Expo. | [Demo](https://kui-native.kuray.dev) |

## Standalone engines

Each ships a framework-agnostic TypeScript core plus a batteries-included React subpath, so the logic survives a change of UI framework.

| | Package | What it is | |
|:-:|---|---|---|
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-calendar.svg" width="32" alt=""> | [**kui-calendar**](https://github.com/kuraykaraaslan/kui-calendar) | Calendar and scheduler — `CalendarEngine`. | [Demo](https://kui-calendar.kuray.dev) |
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-gantt.svg" width="32" alt=""> | [**kui-gantt**](https://github.com/kuraykaraaslan/kui-gantt) | Gantt chart and project scheduler with critical path — `GanttEngine`. | [Demo](https://kui-gantt.kuray.dev) |
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-player.svg" width="32" alt=""> | [**kui-player**](https://github.com/kuraykaraaslan/kui-player) | HTML5 video player around a native `<video>` element — `VideoPlayerEngine`. | [Demo](https://kui-player.kuray.dev) |
| <img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/family/kui-viewer.svg" width="32" alt=""> | **kui-viewer** | Browser-based IFC / BIM 3D viewer on Three.js and web-ifc. | [Demo](https://kui-viewer.kuray.dev) |

## Starters

One multi-tenant SaaS foundation, reachable from four stacks. Every starter shares the same domain model — organizations, members, invitations, roles, sessions, billing — so a new project starts with the hard, boring parts already built and tested.

| Starter | Stack | What you get | |
|---|---|---|---|
| **next-boilerplate** | Next.js 16 · TypeScript · PostgreSQL · Redis + BullMQ · kui-react | The core: multi-tenant SaaS with JWT, OTP, TOTP, SAML and OAuth sign-in, Stripe / PayPal / Iyzico payments, S3 storage, email and background jobs. | Private — used for client projects |
| [**express-boilerplate**](https://github.com/kuraykaraaslan/express-boilerplate) | Express · TypeScript · DDD | The same multi-tenant API without a frontend: 35+ domain modules, passkeys, SSO, impersonation, webhooks, audit log, plan-aware rate limiting, Docker. | [Source](https://github.com/kuraykaraaslan/express-boilerplate) |
| [**expo-react-native-boilerplate**](https://github.com/kuraykaraaslan/expo-react-native-boilerplate) | Expo SDK 57 · React Native 0.86 · kui-native | The mobile client for iOS, Android and web. Signs in against next-boilerplate and works inside one organization, in light and dark. | [Source](https://github.com/kuraykaraaslan/expo-react-native-boilerplate) |
| [**spring-boilerplate**](https://github.com/kuraykaraaslan/spring-boilerplate) | Spring Boot 3.4 · Java 17 | Early stage: security, JPA, Redis and an OAuth2 resource server are wired; the domain modules are not ported yet. | [Source](https://github.com/kuraykaraaslan/spring-boilerplate) |

<p align="center">
  <img src="https://raw.githubusercontent.com/kuraykaraaslan/expo-react-native-boilerplate/main/static/screenshots/login.png" height="346" alt="expo-react-native-boilerplate: sign in">
  <img src="https://raw.githubusercontent.com/kuraykaraaslan/expo-react-native-boilerplate/main/static/screenshots/home.png" height="346" alt="expo-react-native-boilerplate: dashboard">
  <img src="https://raw.githubusercontent.com/kuraykaraaslan/expo-react-native-boilerplate/main/static/screenshots/members.png" height="346" alt="expo-react-native-boilerplate: members">
  <img src="https://raw.githubusercontent.com/kuraykaraaslan/expo-react-native-boilerplate/main/static/screenshots/dark-home.png" height="346" alt="expo-react-native-boilerplate: dashboard, dark">
</p>
<p align="center"><sub>expo-react-native-boilerplate — sign in, dashboard, members, dark mode</sub></p>

## Products

- [**Tepegöz**](https://tepegoz.kuray.dev) — a browser agent that understands a page, plans the steps and carries out real tasks, with every action observable, reversible and under your control. [Source](https://github.com/kuraykaraaslan/tepegoz-browser)
- [**learn.kuray.dev**](https://learn.kuray.dev) — a course platform for interns and junior engineers: 145 concepts a senior engineer should know, in 15 roadmaps. [Source](https://github.com/kuraykaraaslan/learn-platform)

## How things are built here

- **Logic outside the framework.** Engines are plain TypeScript; React is a subpath, not a dependency of the core.
- **One design, three runtimes.** React, EJS and React Native implementations are held to a written parity contract.
- **Proof over claims.** Every library has a public, working demo you can try before reading a line of code.
- **Generated, not hand-drawn.** Even this page's logo is built from [code](https://github.com/kuraykaraaslan-labs/.github/tree/main/brand) and guarded by tests.

## Work together

kuraykaraaslan labs is a one-person studio. If your team needs a production web platform, admin system or SaaS MVP built on these foundations — scoped, deployed and handed over with documentation — start at [kuray.dev](https://kuray.dev).

<sub><img src="https://raw.githubusercontent.com/kuraykaraaslan-labs/.github/main/brand/mark.svg" width="14" alt=""> &nbsp;kuraykaraaslan labs — building blocks for production software</sub>
