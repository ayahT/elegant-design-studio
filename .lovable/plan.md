
# KEMET WSR — Studio Website

A single elegant landing page for your design & web studio, matching the visual language of your project cards (warm parchment beige, terracotta clay, deep brown serif type, ancient-column texture, pyramid mark).

## Visual direction

- Palette: parchment `#efe8dc`, warm ivory `#f5f0e6`, terracotta clay `#c88b6f`, deep cocoa brown `#5a3a24`, ink `#2a1a10`.
- Typography: a warm serif for headings (DM Serif Display or similar to match the uploads) + a clean humanist sans for body (Work Sans / Inter).
- Textures: subtle paper grain background, faint architectural column silhouettes behind the hero, soft clay-brush shape anchoring the footer — exactly the world your uploads live in.
- Motion: quiet — gentle fade + rise on scroll, hover lift on project cards, cursor arrow on the CTA pill.

## Page structure (single page, anchor nav)

1. **Top nav** — Pyramid logo + "KEMET WSR" wordmark on the left; links Work / Services / About / Contact; small "Contact us" pill (matching the brown pill from the uploads).
2. **Hero** — Large serif headline ("We design brands and websites that endure."), short sub-line, primary CTA ("Start a project") + secondary ("See our work"). Column-texture backdrop, terracotta clay wash at the bottom.
3. **Selected Work** — Grid of the 7 projects you uploaded, each rendered as its own card using the same laptop/tablet mockup composition:
   - Lamborghini Fenomeno
   - Cowboy
   - NEXO
   - Nova Intelligence
   - Davies
   - CarCaring
   - Bloom
   Each card: project name (serif), one-line description (from your upload), device mockup image, hover state reveals a "View case" affordance. Room to add more later — the grid takes N items.
4. **Services** — 3–4 tiles: Brand Identity, Web Design, Web Development, Art Direction. Short copy each.
5. **About / Philosophy** — Short paragraph on the studio, one pull-quote, and the pyramid mark as a decorative anchor. Ties to the "timeless / ancient craft, modern execution" metaphor already in your brand.
6. **Contact** — Big serif "Let's build something lasting.", email, and the brown "CONTACT US" pill CTA from your uploads. Simple contact form (name / email / message) that just mails you for now (no backend).
7. **Footer** — Logo, small nav, socials, copyright.

## Assets

- Logo: use your uploaded pyramid mark as the site logo (extracted from `Untitled_design_3_1.png`).
- Project images: use each uploaded project card image as-is for the corresponding project tile — they are already on-brand.
- Column-texture background + clay wash: generated as subtle background art matching the uploads.

## Technical notes

- TanStack Start, single route at `/` (replacing the placeholder index).
- All colors registered as semantic tokens in `src/styles.css` (no hard-coded hexes in components).
- Fonts loaded via `<link>` in `__root.tsx` head.
- Real SEO metadata (title "KEMET WSR — Design & Web Studio", matching description, og/twitter tags).
- Fully responsive; mobile nav collapses to a menu button.
- Contact form is presentation-only for now (submits to a `mailto:` or shows a success toast) — we can wire it to Lovable Cloud later if you want real submissions stored.

## Out of scope (for this first pass)

- Individual case study pages (project cards link to `#` for now; we can add per-project routes later).
- CMS / dashboard.
- Backend / database.

Reply "go" to build, or tell me anything you want changed — different sections, extra pages, a darker theme, etc.
