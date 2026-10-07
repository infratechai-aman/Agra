---
name: Heritage Hearth
colors:
  surface: '#fef9f0'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#4e4540'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e7'
  outline: '#807570'
  outline-variant: '#d2c4be'
  surface-tint: '#6c5b53'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#251913'
  on-primary-container: '#938077'
  inverse-primary: '#d8c2b8'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fdd487'
  on-secondary-container: '#785a19'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1d0b'
  on-tertiary-container: '#82866c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f5ded3'
  primary-fixed-dim: '#d8c2b8'
  on-primary-fixed: '#251913'
  on-primary-fixed-variant: '#53433c'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e8c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#e1e5c7'
  tertiary-fixed-dim: '#c5c9ac'
  on-tertiary-fixed: '#1a1d0b'
  on-tertiary-fixed-variant: '#454933'
  background: '#fef9f0'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-eyebrow:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-button:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the stately warmth and timeless hospitality of historic Pune Camp dining. Rooted in traditional culinary craft, it mirrors an intimate dining room lined with dark walnut paneling, polished brass fittings, and warm incandescent chandeliers.

### Brand Personality
- **Noble & Grounded:** Rooted in multi-generational culinary trust, unhurried service, and historical distinction.
- **Warm & Tactile:** Evoking aged timber, supple leather upholstery, and freshly steamed brass tureen covers.
- **Understated Elegance:** Confident and quiet; free of garish trends or hyper-modern distractions.

### Design Movement
**Tactile Heritage & Classic Editorial:** Combining high-contrast neoclassical serifs, warm parchment surfaces, subtle antique brass detailing, and deep walnut chiaroscuro. The interface is organized like a prestigious bespoke menu or an archival hotel ledger, providing a calm, sensorial experience.

## Colors

The palette is derived from ambient interior light cast across deep timber and vintage furnishings.

### Palette Architecture
- **Primary (`#241812` - Dark Walnut):** Deep, anchoring tone used for high-impact typography, dark-mode panels, primary interactive states, and solid headers.
- **Secondary (`#C9A45C` - Muted Antique Brass):** Lustrous heritage accent applied to primary actions, key callout pills, fine filigree dividers, and active states.
- **Tertiary (`#343823` - Deep Heritage Olive):** Subdued botanical accent honoring vintage cantonment architecture; used for badges, narrative highlights, and secondary background treatments.
- **Neutral Canvas (`#F5F0E7` - Antique Cream):** The foundational ambient backdrop, delivering softer contrast and vintage warmth compared to sterile white.
- **Supporting Layers:**
  - `#3A2920` (Deep Mahogany): Surface tint for elevated cards, modal footers, and dark containers.
  - `#FAF8F3` (Off-White Ivory): Used for interior menu cards and elevated surface highlights against the parchment backdrop.
  - `#E8DED0` (Soft Parchment): Structural borders, table dividers, and subtle component backgrounds.

### Contrast Strategy
Text contrast strictly complies with WCAG AA/AAA. Against `#F5F0E7`, text defaults to `#241812`. When set against dark panels (`#241812` / `#3A2920`), foreground text pivots cleanly to `#FAF8F3` and accents to `#C9A45C`.

## Typography

The type hierarchy combines the literary refinement of **Playfair Display** with the clean geometric balance of **Manrope**.

- **Editorial Headlines (Playfair Display):** Conveys historical prestige, grace, and culinary stature. Used for display moments, section headings, and dish titles.
- **Functional Interface & Reading (Manrope):** Delivers clean readability for body copy, ingredient lists, opening hours, reservation forms, and interactive labels.
- **Eyebrow Treatments:** All section super-titles (e.g., `OUR SPECIALTIES`, `TRADITIONAL TASTE OF PUNE`) are set in `label-eyebrow` using full uppercase with generous tracked spacing (`0.15em`) in antique brass or deep olive.

## Layout & Spacing

A 12-column responsive fluid grid anchored by generous negative space, allowing imagery and culinary storytelling to breathe without visual clutter.

### Breakpoints & Canvas Architecture
- **Desktop (≥ 1024px):** 12 columns, `1.5rem` (`24px`) gutters, `3rem` (`48px`) margins. Maximum content width capped at `1280px` centered.
- **Tablet (768px – 1023px):** 8 columns, `1.25rem` (`20px`) gutters, `2rem` (`32px`) margins.
- **Mobile (≤ 767px):** 4 columns, `1rem` (`16px`) gutters, `1.25rem` (`20px`) canvas margins.

### Vertical Rhythm
Section blocks are separated by generous rhythmic spacing (`space-xl` or dynamic `4rem` to `6rem` margins) to establish a calm cadence reminiscent of flipping through an archival portfolio.

## Elevation & Depth

Visual depth is achieved through physical material layering rather than dramatic, synthetic drop shadows.

### Depth Hierarchy
1. **Parchment Base (Level 0):** Flat background in `#F5F0E7`.
2. **Elevated Surfaces (Level 1):** Menu item tiles, information panels, and form fields use solid ivory `#FAF8F3` with a 1px border of `#E8DED0` and an ambient glow:
   `box-shadow: 0 4px 20px -2px rgba(36, 24, 18, 0.05)`.
3. **Floating Heritage Overlays (Level 2):** Feature callouts (e.g., "Family Dining" badge, hero highlight bars) use dark mahogany (`#241812` / `#3A2920`) with 90% opacity, 12px backdrop blur, a fine 1px antique brass border (`#C9A45C` at 30% alpha), and warm ambient grounding:
   `box-shadow: 0 12px 32px -4px rgba(36, 24, 18, 0.22)`.
4. **Modals & Drawers (Level 3):** Deep walnut containers resting above a darkened parchment scrim (`rgba(36, 24, 18, 0.65)`), bound with brass-toned perimeter borders.

## Shapes

The interface embraces tailored, soft curves that evoke rounded wooden millwork, beveled table glass, and upholstered banquettes.

- **Standard Elements (Buttons, Inputs, Dish Tiles):** Controlled `0.5rem` (`8px`) radius.
- **Container Surfaces (Feature Cards, Modals):** `1rem` (`16px`) radius (`rounded-lg`).
- **Accent Elements & Action Pills:** Full pill treatments (`rounded-full`) reserved exclusively for quick-contact pills (e.g., "Call Now") and floating badge counters.

## Components

### Buttons
- **Primary Brass Action:** Solid `#C9A45C` background, `#241812` label text, `0.5rem` radius. Interactive state lifts with a warm amber cast: `#D8B56F`.
- **Primary Walnut Action:** Deep `#241812` background, `#FAF8F3` label, `0.5rem` radius. Hover shifts to `#3A2920` with a subtle brass icon glow.
- **Secondary Outlined:** Transparent fill, 1.5px solid `#C9A45C` or `#241812` border, with subtle hover fill at 8% opacity.

### Cards (Menu & Specialty)
- Structured on `#FAF8F3` or dark walnut photographic overlays.
- Food photography is framed with a `0.5rem` radius and a delicate `1px` inner border (`rgba(201, 164, 92, 0.25)`).
- Circular action indicators (e.g., arrow link icon) sit on dark glass or solid brass.

### Inputs & Reservation Forms
- Input fields utilize warm ivory backgrounds (`#FAF8F3`) with `1px` border in `#E8DED0`.
- Focus state activates an outline of `#C9A45C` with a soft 2px ambient brass focus ring (`rgba(201, 164, 92, 0.2)`).
- Placeholder text is set in `#3A2920` at 50% opacity in `Manrope`.

### Chips & Badges
- **Heritage Badges:** Enclosed in `#343823` (Heritage Olive) or `#241812` with micro-borders in `#C9A45C` and `label-eyebrow` typography.
- **Filter Chips:** Parchment pill tabs with muted brass active fills.

### Selection Controls (Checkboxes & Radios)
- Rounded geometric toggles styled with `#241812` bases and `#C9A45C` check/dot indicators when active.

### Specialized Hospitality Components
- **Menu Ledger Section:** Dual-column item listing with dotted leaders connecting item names to pricing in brass numerals.
- **Operating Hours Ribbon:** Deep walnut strip with brass icon accents (`#C9A45C`) displaying timings, phone links, and Pune Camp location indicators.