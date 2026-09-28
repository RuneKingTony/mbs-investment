---
name: MBAS Investment Limited
description: A company annual report bound in black cloth and stamped in gold foil.
colors:
  cloth: "#0d0c0a"
  cloth-2: "#15130f"
  cloth-3: "#1e1b15"
  rule: "#3b3428"
  rule-soft: "#2a251d"
  foil: "#c8a24b"
  foil-bright: "#e0c27a"
  foil-deep: "#9a7a33"
  ink: "#f2eee6"
  ink-2: "#c9c1b2"
  ink-3: "#a39b8c"
typography:
  display:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "2.9rem / 4rem (sm) / 5rem (lg)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "2.5rem / 3.25rem (sm) / 3.75rem (md)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "1.9rem / 2.25rem (md)"
    fontWeight: 400
    lineHeight: 1.15
  title-foil:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.33
  quote:
    fontFamily: "Libre Caslon Display, Libre Caslon Text, Georgia, serif"
    fontSize: "1.9rem / 2.35rem (md)"
    fontWeight: 400
    lineHeight: 1.25
  lede:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.25rem / 1.35rem (md)"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem / 1.25rem (md)"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"kern\", \"liga\""
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: "0.14em"
  caption:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
  hairline: "2px"
spacing:
  gutter: "1.25rem"
  gutter-sm: "2rem"
  row: "0.875rem"
  block: "2.5rem"
  chapter-head: "3.5rem"
  chapter-head-md: "5rem"
  chapter: "6rem"
  chapter-md: "8rem"
  container: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.foil}"
    textColor: "{colors.cloth}"
    typography: "{typography.body}"
    rounded: "{rounded.hairline}"
    padding: "0.875rem 1.75rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.foil-bright}"
    textColor: "{colors.cloth}"
  button-primary-active:
    backgroundColor: "{colors.foil-deep}"
    textColor: "{colors.cloth}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.875rem 1.75rem"
    height: "3.5rem"
  button-secondary-hover:
    backgroundColor: "rgb(200 162 75 / 0.1)"
    textColor: "{colors.ink}"
  framed-panel:
    backgroundColor: "{colors.cloth-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.375rem"
  ruled-row:
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    padding: "0.875rem 0"
  chapter-raised:
    backgroundColor: "{colors.cloth-2}"
    padding: "6rem 1.25rem"
---

# Design System: MBAS Investment Limited

## Overview

**Creative North Star: "The Annual Report in Cloth and Foil"**

The site reads as a bound company report: a cover, a contents page with leader rules, then numbered-in-spirit chapters separated by hairlines. The ground is near-black bookcloth in three quiet tonal steps; everything structural is a 1px rule, either dark bronze or gold foil. Nothing floats, glows or lifts. Information is set as schedules, definition lists and ruled lists, the way a prospectus sets particulars, rather than in cards.

Density is deliberately low and type is deliberately large. The root is fixed at 18px (112.5%), with no reader-facing size control, because older partners and officials are a core audience. Libre Caslon Display carries chapter titles and anything ceremonial; Atkinson Hyperlegible Next carries everything that is read. Motion is foil stamping plus classic reveals: gold rules draw in and content fades up every time it enters the viewport, one sheen crosses the emblem each time the cover arrives, and the project showcase crossfades on a paced, pausable cycle. Reduced motion renders it all static.

The system rejects the dark-SaaS template: glowing cards, blurred decorative orbs, badges and hero stat counters.

**Key Characteristics:**
- Black bookcloth ground (three steps) with warm off-white ink in three steps.
- Gold foil as the single accent, always carried by thin rules, the emblem, numerals, small headings and the primary action.
- Hairline structure: 1px rules replace containers; double foil frames mark the two most important panels.
- Square corners; 2px radius is the ceiling.
- 18px root, 20px body in most running text, 48px+ tap targets; browser zoom is the only text scaling.
- One motion grammar: draw-in and one-time sheen on the expo-out curve.

## Colors

A warm, near-monochrome dark palette with a single metallic accent; every neutral leans slightly toward the gold hue (OKLCH hue ~80-85).

### Primary
- **Gold Foil** (foil): The one accent. Primary action fill, foil rules (chapter openers, section tops at 60% opacity), double-frame borders (50% outer / 25-30% inner), step numerals, check and contact icons, small headings ("Contents", "Company particulars", uppercase list labels), the sector column in the projects schedule and text selection. 8.1:1 on cloth.
- **Bright Foil** (foil-bright): Hover state for foil fills and for text links and contents entries; also the focus outline colour.
- **Deep Foil** (foil-deep): Pressed state of the primary button only.

### Neutral
- **Black Bookcloth** (cloth): Page ground, header when scrolled (at 95%), text on foil.
- **Raised Cloth** (cloth-2): Alternating "raised" chapters, footer, and the inner field of framed panels.
- **Cloth Hover** (cloth-3): Reserved tonal step; currently unused on the page.
- **Bronze Rule** (rule): Primary hairlines: row dividers in schedules, imprint rule, footer top, control outlines. Decorative (1.6:1); never the only way a control is identified.
- **Soft Rule** (rule-soft): Secondary hairlines inside lists and the scrolled-header bottom edge.
- **Paper Ink** (ink): Headings, definition values, primary text. 16.9:1.
- **Muted Ink** (ink-2): Running body copy, ledes, list items. 10.9:1.
- **Quiet Ink** (ink-3): Definition terms, table headers, notes, imprint, copyright. 7.1:1, the floor for any text.

### Named Rules
**The Foil Is Metal Rule.** Foil appears as line, emblem, numeral, small heading or the primary fill; it is never a large background field, gradient or glow. Its tint (10%) appears only as the secondary button's hover wash.

**The Three Inks Rule.** Text uses ink, ink-2 or ink-3 only. Nothing dimmer than ink-3 carries words.

## Typography

**Display Font:** Libre Caslon Display (with Libre Caslon Text, Georgia, serif)
**Body Font:** Atkinson Hyperlegible Next (with Atkinson Hyperlegible, system-ui, sans-serif), weights 400, 600, 700 and italic 400

**Character:** A high-contrast engraved Caslon set at weight 400 only gives the cover and chapters the gravity of a printed report; Atkinson Hyperlegible does the reading, chosen for letterform distinction at large sizes for older eyes.

### Hierarchy
All rem values sit on a fixed 18px root.
- **Display** (Caslon 400, 2.9rem → 4rem sm → 5rem lg, 1.04, -0.015em): The cover headline only. At lg this renders at 90px.
- **Headline** (Caslon 400, 2.5rem → 3.25rem → 3.75rem, 1.08, -0.01em): Chapter titles, one per chapter, always under a 6rem-wide foil rule.
- **Title** (Caslon 400, 1.9rem → 2.25rem, 1.15): Sector names, "In development", "Ready to apply?", SLING Education (2.5-3rem), schedule row titles (1.5rem), telephone number (2rem).
- **Title in foil** (Caslon 400, 1.5rem, foil): Small in-chapter headings ("Contents", "Company particulars", "On the platform").
- **Quote** (Caslon 400, 1.9rem → 2.35rem, 1.25): The mission statement, under a short foil rule.
- **Lede** (Atkinson 400, 1.25rem → 1.35rem, relaxed; chapter ledes 1.125-1.25rem): Cover sentence and chapter ledes in ink-2, max 34-36rem.
- **Body** (Atkinson 400, 1.125rem → 1.25rem, 1.6-1.7): Running text in ink-2 at max 40rem; list rows at 1.125rem.
- **Label** (Atkinson 600, 0.875rem, 0.14em tracking, uppercase, foil): Headings of ruled lists and footer columns ("What you need", "Reach us"). They name the list below them; they never sit above a larger heading.
- **Caption** (Atkinson 400, 1rem, ink-3): Definition terms, table headers, notes, copyright.

### Named Rules
**The Caslon Never Bolds Rule.** Libre Caslon Display is used at 400 only, never below 1.35rem, and never for anything read in paragraphs. Emphasis in Caslon comes from size and foil, not weight.

**The Readable Floor Rule.** Nothing read is set below 1rem (18px at default size); the only smaller text is the 0.875rem uppercase label and the 0.66-0.7rem "Investment Limited" wordmark line.

Tabular lining figures (`tabular-nums lining-nums`) are used for the phone number and step numerals. Headings balance-wrap; paragraphs use pretty wrapping.

## Layout

A single 76rem container centred with 1.25rem gutters (2rem from sm). Every chapter is a full-width band, 6rem vertical padding (8rem from md), alternating between cloth and raised cloth-2. Chapter headers use a 12-column grid: the title takes 7 columns and the lede the remaining 5, bottom-aligned, with 3.5rem (5rem md) below.

The cover fills the viewport at lg: 7/12 headline, sentence and two actions on the left; 5/12 framed contents panel on the right; an imprint line across the bottom under a bronze rule. Below lg it stacks, text first.

Content inside chapters is set as ruled rows: definition lists with a fixed term column (7.5-11rem), 12-column article rows (4 title / 5 description / 3 list), a 4-up process row, a 4-up facts strip, a 3-up contact row divided by vertical hairlines. Rows are separated vertically by 1px rules and 0.875rem-1.5rem padding, not by gaps and boxes.

Breakpoints are Tailwind defaults (sm 640px, md 768px, lg 1024px). The desktop nav appears at lg; the mobile menu becomes a full-height sheet under the 5rem header. Anchor scrolling is smooth with 6rem scroll padding for the fixed header.

## Elevation & Depth

Flat. There are no box shadows anywhere. Depth is conveyed by tonal steps of cloth (cloth → cloth-2 for raised chapters and panel interiors) and by line: 1px bronze rules for structure, 1px foil for emphasis, and a double foil frame (outer border at 50% foil, 0.375rem gap, inner border at 25-30% foil around a cloth-2 field) for the two panels that matter most, the contents page and the application panel. The fixed header gains a 95% cloth fill, a soft-rule bottom edge and a light backdrop blur only once the page has scrolled 24px, so text stays legible beneath it.

### Named Rules
**The Stamped, Not Lifted Rule.** Emphasis is a frame or a rule, never a shadow, glow or lift. If an element needs to stand forward, give it cloth-2 and a double foil frame.

## Shapes

Rectilinear. Buttons, controls and focus outlines carry a 2px radius; frames, panels, rows and chapters are square. Rules are always 1px: full-width dividers, short foil openers (4rem, 6rem, 7rem wide), 1rem foil dashes as list bullets, a 2.5rem foil tick on top of each process step, and dotted bronze leader lines in the contents list.

### Named Rules
**The Two-Pixel Ceiling Rule.** No radius above 2px. No pills, no circles, no rounded cards.

## Components

### Buttons
Solid, square-shouldered and large, like a stamped plate.
- **Shape:** Near-square (2px), minimum height 3.5rem, 0.875rem × 1.75rem padding, 1.125rem semibold text, 0.75rem gap to an optional 1.25rem arrow icon.
- **Primary:** Foil fill with cloth text. Hover to foil-bright, press to foil-deep, 150ms colour transition. Used for "Work with us", "See the tutor role", "Apply now", the mobile call button, and a compact header version ("Contact us", 2.75rem min height, 1.25rem padding).
- **Secondary:** Transparent with a 1px foil border at 70% and ink text; hover brings the border to full foil and adds a 10% foil wash. Used for "Apply to teach English".
- **Focus:** Global 3px foil-bright outline with 3px offset.

### Navigation
- **Header:** Fixed, 5rem tall. Shield mark plus a Caslon "MBAS" wordmark (0.06em tracking) over an uppercase "Investment Limited" line in ink-3. Transparent over the cover, 95% cloth after scroll.
- **Desktop links (md and up):** Deliberately short: Contents (back to the cover's contents page), Careers, then the foil "Contact us" button. The cover's Contents panel is the full table of contents; the header never repeats it. 1.05rem ink-2 text links, hover to ink with underline. No active pill or indicator.
- **Phone action bar (below md):** After the cover scrolls away, a fixed bottom bar slides up with two equal 3rem buttons: outlined "Call us" (tel link) and foil "Apply to teach" (to #careers). It respects the safe-area inset, and it is hidden (translated out and `visibility: hidden`) over the cover, while the menu is open, and whenever the Contact chapter is on screen.
- **Cover on phones:** The Contents panel is shown from md up only; phones reach the same list through Menu. The imprint shows only "Abuja, Nigeria" below sm.
- **Mobile (below md):** A bordered "Menu / Close" button (3rem min height) opens a full-height sheet: chapter names in 1.75rem Caslon with ink-3 notes on ruled rows, and a primary call button. Escape closes and returns focus.

### Framed Panel (signature)
The double foil frame described in Elevation: an outer 1px border at 50% foil, 0.375rem gap, an inner 1px border at 25-30% foil around a cloth-2 field padded 1.75-2.5rem. Holds the contents page (emblem, "Contents" in foil Caslon, chapter entries with dotted leaders and ink-3 notes that turn foil-bright on hover) and the application call to action.

### Ruled Lists and Schedules (signature)
- **Ruled list:** Items between soft-rule hairlines top and bottom, 0.875rem vertical padding, a 1.25rem foil check icon, 1.125rem ink-2 text.
- **Dash list:** A 1rem × 1px foil dash as bullet, 0.625rem spacing, no dividers.
- **Definition list:** Term in 1rem ink-3, value in 1.125rem ink, fixed term column, soft-rule dividers inside a bronze top and bottom rule.
- **Schedule table:** Header row between foil/60 rules in ink-3; rows with a Caslon 1.5rem title, foil sector, ink-2 summary and ink-3 status. Collapses to stacked rows below sm.

### Chapter Opener
A foil rule (6rem wide, 1px) that draws from the left as the chapter scrolls into view (900ms, expo-out), then the Caslon headline, with the lede opposite. Chapters alternate cloth and raised cloth-2 bands.

### Disclosure (FAQ)
Question rows as full-width buttons, 1.25-1.4rem semibold ink, hovering to foil-bright, with a 1.5rem foil chevron that rotates 180° when open. Answers expand by animating grid rows from 0fr to 1fr over 350ms expo-out; closed answers are inert. Rows are separated by bronze rules under a foil/60 top rule. First question opens by default.

### Contact Blocks
Three columns divided by vertical bronze rules: a 1.75rem foil line icon, an ink-3 label, the value (telephone in 2rem Caslon tabular figures; email and address at 1.35rem), and an ink-2 note. Whole block is the link; the value turns foil-bright and underlines on hover.

### Motion
One easing curve, expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`). Elements marked `data-reveal` fade up 28px (opacity 800ms, transform 1000ms) with a `--d` stagger in 90ms steps; foil rules marked `data-draw` scale in over 1100ms. Reveals replay: the class resets instantly while an element is off screen, so it animates again on every return. The emblem sheen (1600ms, 700ms delay) replays with the cover. The project showcase crossfades slides over 900ms with a slow 7s zoom (scale 1.06 to 1), staggers slide text in 90ms steps, and advances every 7s off a gold progress line and holds on hover, keyboard focus, and when off screen. The mobile sheet drops in 8px over 250ms. Under `prefers-reduced-motion` reveals, zoom and sheen are removed, the showcase never advances on its own, and every rule is shown fully drawn.

## Do's and Don'ts

### Do:
- **Do** set structure with 1px rules: bronze (rule, rule-soft) for dividers, foil for openers and the top edge of a key block.
- **Do** use the double foil frame on cloth-2 for at most one or two panels per page that carry the main navigation or the main action.
- **Do** keep Caslon at weight 400 for titles, quotes, numerals and the wordmark; keep all reading text in Atkinson Hyperlegible Next at 1.125rem or larger.
- **Do** keep every tap target at least 2.75rem (48px at default size) and primary actions at 3.5rem.
- **Do** present facts as definition lists, ruled lists and schedules with an ink-3 term and ink value.
- **Do** make new motion a draw or reveal on the expo-out curve using `data-reveal` / `data-draw`, and remove it under reduced motion.

### Don't:
- **Don't** use cards, box shadows, glows, blurred decorative orbs, gradients or badges; depth is tone and line only.
- **Don't** exceed a 2px corner radius.
- **Don't** introduce a second accent hue; foil and its bright and deep steps are the only colour.
- **Don't** set text in rule or rule-soft, or any text dimmer than ink-3.
- **Don't** show hero statistics, counters or invented numbers.
- **Don't** add ambient or looping motion. The project showcase is the one auto-advancing element, and it must keep its hover, focus and off-screen holds.
