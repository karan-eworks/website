---
name: E-works
description: A bold digital partner helping businesses unlock their full growth potential.
colors:
  background: "oklch(0.9842 0.0034 247.8575)"
  surface-default: "oklch(1 0 0)"
  surface-muted: "oklch(0.9683 0.0069 247.8956)"
  surface-strong: "oklch(0.9288 0.0126 255.5078)"
  text-strong: "oklch(0.2077 0.0398 265.7549)"
  text-default: "oklch(0.3717 0.0392 257.2870)"
  text-muted: "oklch(0.5544 0.0407 257.4166)"
  signal-blue: "oklch(0.5568 0.1013 255.9080)"
  signal-blue-hover: "oklch(0.4849 0.0859 256.7091)"
  signal-blue-muted: "oklch(0.9487 0.0149 251.1585)"
  growth-lime: "oklch(0.7610 0.1736 129.5770)"
  growth-lime-hover: "oklch(0.6703 0.1578 130.9595)"
  border-default: "oklch(0.8690 0.0198 252.8943)"
  border-muted: "oklch(0.9288 0.0126 255.5078)"
  deep-navy: "oklch(0.2077 0.0398 265.7549)"
typography:
  display:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.625rem, 5.7vw, 5.375rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "normal"
  headline:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 0.95
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  2xl: "1.25rem"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0 1.75rem"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.deep-navy}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0 1.75rem"
    height: "3rem"
  card:
    backgroundColor: "{colors.surface-default}"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.xl}"
    padding: "1.5rem"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.text-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 0.75rem"
    height: "2.25rem"
---

# Design System: E-works

## Overview

**Creative North Star: "The Bold Digital Partner"**

E-works presents itself as a trustworthy partner with the confidence to make growth feel possible. The system combines a cool, operational foundation with clear blue action cues and a high-energy lime accent. Large Host Grotesk headlines and expressive geometric hero scenes give the company a point of view without sacrificing clarity.

The interface is spacious and direct. It uses strong hierarchy, crisp rectangular actions, soft layered depth for navigation and content surfaces, and restrained motion that makes transitions feel considered. The current system is designed to feel capable, collaborative, and tactile.

**Key Characteristics:**
- Bold display typography paired with readable Inter body text.
- Cool cloud neutrals anchored by Signal Blue and Growth Lime.
- Flat, confident action controls with subtle lift on interaction.
- Geometric editorial hero artwork with human imagery.
- Responsive navigation that becomes a full-screen mobile menu.

## Colors

The palette is a cool, trustworthy base energized by a focused blue primary and a growth-oriented lime accent.

### Primary
- **Signal Blue** (`oklch(0.5568 0.1013 255.9080)`): Primary calls to action, links, focus states, and the main brand signal.

### Secondary
- **Growth Lime** (`oklch(0.7610 0.1736 129.5770)`): Supporting emphasis, accent surfaces, and growth-oriented visual moments. Use dark text over it.

### Neutral
- **Cool Cloud** (`oklch(0.9842 0.0034 247.8575)`): Main page canvas.
- **Surface White** (`oklch(1 0 0)`): Elevated cards, menus, and default content surfaces.
- **Muted Cloud** (`oklch(0.9683 0.0069 247.8956)`): Secondary surfaces and low-emphasis regions.
- **Deep Navy** (`oklch(0.2077 0.0398 265.7549)`): Strong headings, primary foreground, and dark footer surfaces.
- **Slate Text** (`oklch(0.3717 0.0392 257.2870)`): Default readable text.
- **Muted Slate** (`oklch(0.5544 0.0407 257.4166)`): Supporting text.
- **Cool Border** (`oklch(0.8690 0.0198 252.8943)`): Default dividers, strokes, and control borders.

**The Focused Accent Rule.** Blue and lime are signals, not wallpaper. Keep the cool neutral canvas dominant and reserve saturated color for action, emphasis, and hero composition.

## Typography

**Display Font:** Host Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Inter (with ui-sans-serif, system-ui, sans-serif)

**Character:** Host Grotesk gives the brand its bold, contemporary voice; Inter keeps supporting content calm, legible, and operational.

### Hierarchy
- **Display** (700, `clamp(3.625rem, 5.7vw, 5.375rem)`, `0.9`): Hero statements and high-impact brand headlines.
- **Headline** (700, `2.5rem`, `0.95`): Major section and menu headings.
- **Title** (600, `1.25rem`, `1.25`): Navigation and compact component headings.
- **Body** (400, `1rem`, `1.5`): Descriptions, supporting copy, and long-form content.
- **Label** (600, `0.9375rem`, `1.25`, normal case): Buttons, navigation actions, and compact controls.

**The Short-Line Rule.** Headlines should land quickly and confidently; use width, scale, and deliberate line breaks rather than dense paragraphs of display type.

## Layout

The system uses a centered, full-width web canvas with generous horizontal gutters: approximately `24px` on small screens, `40px` on large screens, and a centered maximum content width around `1600px` for the footer. The hero is vertically staged beneath an `80px` sticky header, with centered copy above an oversized art field.

Desktop navigation uses a three-part header grid: wordmark left, primary navigation centered, and account/action links right. At widths below `1024px`, navigation collapses to an icon-triggered full-screen menu. At widths below `640px`, hero type and art scale down, cards move toward the edges, and the composition stays intentionally oversized rather than becoming a dense grid.

Spacing follows Tailwind’s `4px` base rhythm, with recurring `8px`, `16px`, `24px`, `32px`, and `48px` steps. Sections favor breathing room over tight packing.

## Elevation & Depth

Depth is soft and layered. White surfaces sit above the cool canvas with restrained navy-tinted shadows; menus and dialogs can use stronger elevation. The hero’s depth is primarily compositional, created by overlapping people, cards, grids, and geometric shapes. The footer creates a dark, sticky visual counterweight rather than relying on heavy surface effects.

### Shadow Vocabulary
- **Soft control lift** (`0 2px 6px oklch(0.2077 0.0398 265.7549 / 0.07)`): Low-key elevation for controls and small surfaces.
- **Content lift** (`0 8px 24px oklch(0.2077 0.0398 265.7549 / 0.09)`): Cards and content containers that need clear separation.
- **Menu lift** (`0 32px 80px oklch(0.2077 0.0398 265.7549 / 0.20)`): Large overlays such as the company mega menu.

**The Soft-Layer Rule.** Use shadow to clarify hierarchy, never to make every element look floated.

## Shapes

The main action language is confident and rectangular: the bespoke action links use square corners, borders, and a slight hover lift. General application primitives use a gentle `6px–20px` radius scale, with cards at `16px`, compact controls at `6px–8px`, and avatars or social buttons fully circular. Hero artwork uses clipped polygons and circles as expressive signatures.

## Components

### Buttons
- **Shape:** Square for branded action links (`0`); rounded controls elsewhere use the shared radius scale.
- **Primary:** Signal Blue background, white text, `48px` height, `28px` horizontal padding, semibold label.
- **Hover / Focus:** Shift to Signal Blue hover, lift `1px`, and show a visible ring on keyboard focus.
- **Secondary / Ghost / Tertiary:** Outline uses a Deep Navy border and transparent background; ghost actions remain transparent and shift toward Signal Blue.

### Cards / Containers
- **Corner Style:** Soft `16px` radius for general cards; hero message cards use a crisp, graphic silhouette.
- **Background:** Surface White over Cool Cloud, with muted surfaces for secondary regions.
- **Shadow Strategy:** Soft layered shadows; stronger only for overlays.
- **Border:** Cool Border when a surface needs a defined edge.
- **Internal Padding:** Usually `24px`, with compact controls using `12px–16px`.

### Inputs / Fields
- **Style:** Transparent or white field, Cool Border stroke, `8px` radius, compact `36px` base height.
- **Focus:** Signal Blue border/ring.
- **Error / Disabled:** Use the established destructive and disabled semantic tokens; preserve readable contrast.

### Navigation
- **Style:** `80px` sticky light header with Signal Blue wordmark, Inter navigation labels, and generous horizontal spacing.
- **Default / Hover / Active:** Deep Navy at rest; Signal Blue on hover; Company opens a three-column elevated mega menu.
- **Mobile:** Full-height fixed light menu below the header, with large bordered rows and an expandable Company group.

### Hero Scene

The signature hero combines a centered Host Grotesk statement with a rotating editorial scene: a colored grid, cropped human portrait, oversized geometric shapes, an informational message card, and optional metric card. Scenes crossfade and slide on a four-second cycle; reduced-motion users receive the static composition.

## Do's and Don'ts

### Do:
- **Do** use Host Grotesk for high-impact display moments and Inter for functional reading.
- **Do** keep Signal Blue and Growth Lime purposeful and easy to scan.
- **Do** preserve generous whitespace and clear action hierarchy.
- **Do** use tactile rectangular actions with visible keyboard focus.
- **Do** keep motion subtle, interruptible, and disabled or minimized for reduced-motion preferences.

### Don't:
- **Don't** replace the cool neutral foundation with an unrelated palette.
- **Don't** make every surface colorful, rounded, or heavily shadowed.
- **Don't** use generic display typography when a bold Host Grotesk hierarchy is appropriate.
- **Don't** remove the human, geometric, editorial quality of the hero in favor of generic stock-card layouts.
- **Don't** hide essential navigation or actions behind hover-only behavior on mobile or keyboard input.
