# Design System Specification: Editorial Assurance

This document outlines the visual language and structural logic for the design system. As a health insurance advisory service, the interface must balance clinical precision with approachable human empathy. We move beyond the "generic SaaS" look by utilizing a high-end editorial approach: prioritizing intentional white space, tonal layering, and sophisticated typography over traditional lines and borders.

## 1. Creative North Star: "The Clinical Curator"
The "Clinical Curator" aesthetic is defined by professional authority and modern transparency. It avoids the cluttered, "forms-heavy" look of traditional insurance. Instead, it treats data like a premium publication. 

**The Strategy:**
*   **Intentional Asymmetry:** Use off-center layouts and staggered card placements to break the "grid-template" feel.
*   **Breathing Room:** White space is not "empty"; it is a functional tool to reduce cognitive load during complex insurance decisions.
*   **The Depth Hierarchy:** We replace 1px lines with "Physicality"—elements are stacked like sheets of heavy-stock paper or frosted glass.

---

## 2. Color & Tonal Architecture
The palette is rooted in high-contrast blues and cyans to evoke trust and clarity. We treat color as a functional signal, not just decoration.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. 
Boundaries must be defined by:
1.  **Background Shifts:** Transitioning from `surface` (#f7f9fb) to `surface_container_low` (#f2f4f6).
2.  **Tonal Nesting:** Placing a `surface_container_lowest` (#ffffff) card inside a `surface_container` (#eceef0) background.

### Signature Textures & Glassmorphism
*   **The Glass Rule:** For floating navigation or modal overlays, use `surface` at 80% opacity with a 20px backdrop-blur. This creates a "frosted glass" effect that keeps the user grounded in their current context.
*   **The "Vignette" Gradient:** Hero sections should utilize a subtle linear gradient from `primary` (#00478d) to `primary_container` (#005eb8) at a 135-degree angle. This adds "soul" and depth that flat color cannot provide.

---

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance character with readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern warmth. Use `display-lg` and `headline-md` with tight letter-spacing (-0.02em) to create an authoritative, "newsroom" feel.
*   **Body & Utility (Inter):** The workhorse for complex insurance details. Inter’s high x-height ensures that even `body-sm` (0.75rem) remains legible in dense policy comparisons.

**Hierarchy Strategy:**
*   **Hero Areas:** Large `display-lg` headlines in `on_surface` color.
*   **Actionable Data:** `title-md` in `primary` (#00478d) to draw the eye to key advisory takeaways.
*   **Captions:** `label-sm` in `on_surface_variant` for metadata.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty." In this design system, we use **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** 
    *   **Level 0 (Base):** `surface` (#f7f9fb)
    *   **Level 1 (Sections):** `surface_container_low` (#f2f4f6)
    *   **Level 2 (Cards):** `surface_container_lowest` (#ffffff)
*   **Ambient Shadows:** When an element must float (e.g., a primary CTA button or a modal), use a shadow tinted with the primary color: `rgba(0, 71, 141, 0.08)` with a 32px blur and 12px Y-offset.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#c2c6d4) at **15% opacity**. It should be felt, not seen.

---

## 5. Component Logic

### Buttons (The "Jewel" Approach)
*   **Primary:** High-contrast `primary` (#00478d) with `on_primary` text. Use `md` (0.75rem) roundedness. Add a subtle inner-glow (1px white overlay at 10% opacity) to the top edge for a premium "pressed" feel.
*   **Secondary:** `secondary_fixed` (#a9edff) background with `on_secondary_fixed` text. Perfect for "Learn More" actions.
*   **Tertiary:** No background. Use `primary` text with a 2px `surface_container_highest` bottom underline that expands on hover.

### Advisory Cards
*   **Constraint:** Forbid the use of divider lines. 
*   **Solution:** Separate the "Policy Title" from the "Premium Cost" using 24px of vertical white space (from our Spacing Scale) or by placing the cost in a `secondary_container` (#7de6ff) chip.

### Input Fields
*   **State:** Default state uses `surface_container_highest` (#e0e3e5) as a background instead of a border.
*   **Focus State:** The background shifts to `surface_container_lowest` (#ffffff) with a 2px `primary` shadow glow.

### Additional Signature Component: The "Benefit Float"
A custom chip used in insurance comparisons. It uses a `tertiary_fixed` (#cee5f9) background with a small icon. These should be scattered with generous padding to avoid the "data-table" look.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use asymmetrical margins (e.g., a wider left margin for headline content) to create an editorial feel.
*   **Do** use `secondary` (#006879) for data visualization and highlights—it contrasts beautifully against the deep blue `primary`.
*   **Do** use "Medium" roundedness (`0.75rem`) for all cards to keep the vibe modern and friendly.

### Don’t:
*   **Don't** use pure black (#000000) for text. Always use `on_surface` (#191c1e) to maintain tonal softness.
*   **Don't** use 100% opaque borders. It breaks the "Physicality" of the layered surfaces.
*   **Don't** crowd the interface. If a screen feels "full," increase the `surface` padding rather than shrinking the text.

---

## 7. Roundedness & Spacing
*   **Core Radius:** `md` (0.75rem / 12px) for cards, inputs, and buttons.
*   **Large Accents:** `xl` (1.5rem / 24px) for hero containers or floating promotional banners.
*   **The Rhythm:** All spacing must be multiples of 8px. Hero sections should utilize a minimum of 80px (10rem) padding to maintain the "High-End Editorial" promise.