# Novarift — Project Context for Claude Code

## What is this
Novarift is a tech agency website based in Canada.
One single HTML file (index.html) — no framework, no build step.
Deploy on Vercel. Domain: novarift.io

## Stack
- HTML + CSS + JavaScript vanilla (everything inline in one file)
- Google Fonts only (Cormorant Garamond + Syne + DM Mono)
- No npm, no webpack, no React, no dependencies
- Hosted on Vercel (static)

## Design system
Background:  #080A0F
Gold accent: #C8A96E
Gold light:  #E2C99A
Gold dark:   #8B6F3E
White:       #F0EDE8
White muted: rgba(240,237,232,0.6)
Border:      rgba(200,169,110,0.15)

Fonts:
- Headings: Cormorant Garamond (serif, elegant)
- UI/Nav/Labels: Syne (sans-serif, modern)
- Code/Tags/Mono: DM Mono (monospace)

## Architecture rules
1. Everything in ONE file — index.html
2. CSS in <style> tag at the top
3. JS in <script> tag at the bottom
4. No inline styles except rare dynamic values
5. Portfolio projects stored as JSON array in JS — never hardcoded in HTML

## Sections (in order)
1. Nav — logo + links + CTA button
2. Hero — full viewport, big title, description, 2 CTA buttons
3. Marquee — animated service names strip
4. Services — 6 cards in 3x2 grid
5. Numbers — 4 stats
6. Work/Portfolio — cards from JSON array
7. Process — 4 steps + sticky visual
8. Pricing — 3 tiers
9. CTA section — contact
10. Footer

## Content rules
- Language: English (site), French OK in comments
- Location: "Canada" only — never "Montreal" or any city
- Tagline: "Based in Canada · Est. 2025"
- Email: hello@novarift.io
- No fake phone number

## Portfolio JSON format (ALWAYS use this structure)
```js
const projects = [
  {
    id: "001",
    name: "MamaShop",
    category: "SaaS · Africa",
    year: "2026",
    desc: "Complete digital management system for wholesale traders in West Africa.",
    stack: ["Supabase", "Claude API", "n8n", "WhatsApp API"],
    featured: true
  }
]
```
To add a project: add one object to the array. Never touch the HTML.

## Animations
- Custom gold cursor (dot + lagging ring)
- Reveal on scroll (IntersectionObserver)
- Nav fills on scroll (backdrop-filter + border)
- Marquee infinite scroll
- Service cards: bottom border slides in on hover
- Work cards: subtle gold gradient on hover

## What must work
- All anchor links (#services, #work, #process, #pricing, #contact)
- mailto: on CTA email button
- Lighthouse score > 90 mobile
- Responsive at 360px and 1440px

## What to NEVER do
- No lorem ipsum
- No placeholder images (use CSS gradients or geometric shapes)
- No "Montreal to the world" or city names
- No inline event handlers (onclick="") — use addEventListener in JS
- No framework suggestions
- Never break the one-file rule

---

## Working Rules

- Work phase by phase, never skip ahead
- Ask for approval before any sensitive action (git push, deploy)
- Fix all CSS variable issues (replace special — dashes with proper -- dashes)
- Ensure full mobile responsiveness
- Validate all JavaScript (no console errors)
- Keep design coherent: dark tech aesthetic, purple/blue accents

---

## Phase 1 — Audit & Diagnosis
- Read index.html completely
- List all CSS errors (bad variable syntax, broken selectors)
- List all JS issues
- List responsive breakpoints missing
- Report findings before touching anything

## Phase 2 — CSS Fixes
- Replace all typographic dashes (–, —) in CSS property names with proper double dashes (--)
- Fix any malformed CSS custom properties
- Fix z-index stacking issues if any
- Fix font-loading issues if any

## Phase 3 — JavaScript Fixes
- Fix any broken event listeners
- Fix scroll behavior issues
- Fix mobile menu toggle if present
- Fix animation triggers

## Phase 4 — Responsive Design
- Ensure proper mobile breakpoints (320px, 375px, 768px, 1024px)
- Fix hero section on mobile
- Fix nav on mobile
- Fix cards/grid on mobile

## Phase 5 — Performance & Polish
- Optimize image references (use lazy loading where possible)
- Minify inline CSS if excessive
- Add meta tags if missing (viewport, description, og:)

## Phase 6 — Content Review
- Review all copy for clarity and professionalism
- Ensure service offerings are clear
- Ensure CTAs are compelling

## Phase 7 — Local Test Checkpoint
STOP HERE — ask user to open index.html in Chrome and confirm visual approval before continuing.

## Phase 8 — Git Setup
WAIT FOR EXPLICIT USER APPROVAL before this phase.
- git init
- Create .gitignore (node_modules, .DS_Store, *.env)
- git add .
- git commit -m "Initial Novarift release"
- Create GitHub repo named novarift
- git remote add origin
- git push -u origin main

## Phase 9 — Vercel Deployment
WAIT FOR EXPLICIT USER APPROVAL before this phase.
- Connect GitHub repo to Vercel
- Deploy to production
- Confirm deployment URL

## Phase 10 — Domain Connection (SKIP — user doing this tomorrow)
User will purchase novarift.io tomorrow morning. Come back to this after purchase.

## Phase 11 — Post-Launch
- Set up basic analytics (if requested)
- Prepare prospecting materials

## Phase 12 — Prospecting Launch
- Help user craft outreach messages for Canada + West Africa markets
