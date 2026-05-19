# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step. Serve the directory with any static file server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080` in a browser. The app also works by opening `index.html` directly (though the service worker won't register over `file://`).

## Architecture

**Smart Money** is a Hebrew-language (RTL) personal finance PWA. There is no framework, bundler, or backend — it's plain HTML/CSS/JS.

**Files:**
- [app.js](app.js) — all application logic (~2,100 lines, clearly sectioned with `// ─── SECTION ───` comments)
- [app.css](app.css) — all styles
- [index.html](index.html) — shell markup with pre-rendered view containers
- [sw.js](sw.js) — service worker (network-first, cache fallback for offline use)
- [manifest.json](manifest.json) — PWA manifest

**Data flow:**
- `Store` (localStorage key: `smoney_data`) is the only persistence layer. All reads/writes go through `Store.getData()` / `Store.setData()`.
- The global `state` object (`{ incomes, expenses, budgets, savingsGoal, cycleStartDay }`) is loaded at startup and mutated in place; every mutation calls `Store.setData(state)`.

**Auth:**
- `Auth` (localStorage key: `smoney_auth`) stores `{ users, session, pendingUser }` — entirely client-side, no backend.
- `Auth.normalize()` runs on every load; it strips any legacy `mock-admin` entries from stored data.

**Routing:**
- `navigate(view)` → `renderView(view)` → one of `renderDashboard / renderIncome / renderExpenses / renderBudget / renderAnalysis`.
- Each render function sets `innerHTML` on the pre-existing `#view-<name>` container. Charts are destroyed before each render (`destroyCharts()`) and recreated after a 60 ms `setTimeout` to allow DOM paint.

**Billing cycle:**
- All filtering goes through `getCycleDates()`, which computes a rolling cycle window based on `state.cycleStartDay` (default: 1st of the month). Use `filtered(arr, dateField)` to scope any array to the current cycle.

**Modals:**
- `openModal(html)` / `closeModal()` drive a bottom-sheet overlay (`#modal-overlay` / `#modal-sheet`).

**Charts:**
- Chart.js 4.4.0 is loaded from CDN (`chart.umd.min.js`). All chart instances are stored in the `charts` object and must be destroyed before re-rendering to avoid canvas reuse errors.

## Cache busting

`index.html` loads `app.css?v=9` and `app.js?v=9`. Increment the version number whenever you want browsers to bypass cached assets.

The service worker uses cache name `smoney-v7` (in [sw.js](sw.js)). Bump that string to force a cache refresh on next load.

## Language / locale

All UI text is Hebrew. Currency is formatted in ILS (`₪`) using `he-IL` locale via `fmt()` / `fmtFull()`. Dates use `fmtDate()` with `he-IL` locale. The HTML root is `lang="he" dir="rtl"`.
