# Royal Auto Paints Qatar - Project Context & State Checkpoint

> **Timestamp:** October 12, 2026  
> **Workspace:** `d:\manu\projects\royal_paints_1`  
> **Client:** Royal Auto Paints Doha, Qatar (est. 2012)  
> **Reference Domain:** `https://www.royalautopaints.com/`  
> **Base Template:** Logiver Logistics & Cargo HTML Template (`https://themexriver.com/wp/logiver/`)

---

## 1. Core Operating Rules & Constraints

1. **Explicit User Approval Required:**
   * **Rule:** Never modify any project file without first explaining the proposed change, displaying the exact diff, and waiting for explicit user confirmation (`do it` / `yes`).
2. **Main Navigation Freeze:**
   * **Rule:** Do NOT modify the main navigation menu yet until the user explicitly requests it.
3. **Hero Visual Integrity:**
   * Keep the background image: `images/royalpaint_hero_3.jpg` (Silver Mercedes S-Class with bronze liquid paint pour).
   * No background video (video option was rejected by user).
   * Hero section must remain **`100vh` / `100dvh`** with flex centering.
   * Description text and CTA button must sit directly **under** the headline.

---

## 2. Completed Milestones

### A. Brand Assets & Product Catalog Extraction
* **Brand Assets:**
  * Official Logo: `images/royal_logo.png` (integrated into Desktop Header and Footer)
  * White Brand Logo: `images/royal_logo_white.png` (integrated into Mobile Navigation Drawer & Offcanvas Sidebar)
  * Favicon: `images/royal_favicon.png`
* **Product Catalog:**
  * Scraped, categorized, and structured all **83 catalog products** into `js/products-data.js` across 8 categories:
    1. Automotive Paints & Tinters (HB Body, Challenger, Axalta)
    2. Clear Coats (HS / 2K)
    3. Primers & Surfacers
    4. Thinners & Hardeners
    5. Body Fillers & Putties
    6. Polishing Compounds & Pads (Rupes, etc.)
    7. Masking & Abrasives
    8. Spray Guns & Equipment

### B. Hero Section Implementation (`index.html` lines 837–930)
* **Watermark:** `ROYAL AUTO PAINTS`
* **Headline:**
  ```html
  QATAR’S PREMIER
  AUTOMOTIVE REFINISH
  & PAINT SOLUTIONS
  ```
* **Description & CTA:**
  * Text: *"Distributor of world-class automotive coatings, computerized OEM color matching, HS clear coats, and professional body shop equipment in Doha since 2012."*
  * Button: *"Explore 80+ Products ➔"* linking to `#lg-products`.
* **Feature Cards (3 items below headline):**
  1. Computerized Color Mixing (Spectrophotometer formulation)
  2. Custom Aerosol Spray Filling (Same-day OEM aerosol cans)
  3. Body Shop Supplies & Consumables (2K Clears, Primers, Abrasives)

### C. About & Counter Section (`index.html` lines 945–1085)
* Rebranded from freight company to Royal Auto Paints Doha since 2012.
* Verified counters:
  * **12+** Years in Qatar (est. 2012)
  * **100%** Color Accuracy Guarantee
  * **83+** Catalog Products
  * **500+** Workshops Supplied

### D. Services Section (`index.html` lines 1108–1230)
* Replaced shipping/freight items with real auto refinish services:
  * Computerized Color Mixing
  * Custom Aerosol Filling
  * Authorized Brands Dealership (HB Body, Challenger, Axalta, Rupes)
  * 2K Clears & Primers Supply
  * Tools & Equipment

### E. Custom CSS Engine (`css/custom-style.css`)
* Overrode Logiver's 445px gap on `.hero_title`.
* High-contrast luxury color palette:
  * Navy: `#0B1E28`
  * Slate: `#1E293B`
  * Body: `#2B3940`
  * Accent Red: `#F94735`
  * Accent Gold: `#FAC12E`
* Responsive engine handling 4 breakpoints (Desktop, Tablets 768–991px, Mobile 481–767px, Small Mobile ≤480px).
* Fixed template 80px mobile gap bug, 150px top padding bug, and 300px watermark overflow bug.

---

## 3. Active Issue & Solution Verified

### Hero Button Hover Artifact (Screenshot `media_1791806776615_5f60a910.png`)
* **Problem:** Hovering over *"Explore 80+ Products ➔"* revealed an awkward light-grey rectangular box behind the button.
* **Root Cause Discovered:**
  1. The HTML structure is `<a href="#lg-products"><span>...</span><i>...</i></a>`.
  2. `<a>` is an unrounded flex container (276px × 52px) with `border-radius: 0px`.
  3. `<span>` morphs on hover into a pill (`border-radius: 40px`), and `<i>` morphs into a circle (`border-radius: 100%`) shifting 5px to the right.
  4. In `custom-style.css`, `box-shadow` was placed on `<a>`. CSS clips `box-shadow` strictly to the element's border box, so the red glow was rendered *outside* the rectangle, leaving the corners and the gap unshaded.
  5. The contrast between the outside red glow and the untouched studio grey floor background inside the sharp 90° corners formed the rectangular box artifact.
* **Verified Fix:**
  Move `box-shadow` from `<a>` to `span` and `i`, so the glow follows the rounded curves of the pill and circle. Verified in Edge headless CDP: the rectangular box completely vanished.
* **Status:** Proposed to user; awaiting approval to apply to `css/custom-style.css`.

---

## 4. Pending Roadmap (Post-Hero Approval)

1. **Apply Hero Button Hover Fix** in `css/custom-style.css`.
2. **Replace Pricing & Plane Sections (`index.html` lines 1237–1775)**:
   * Replace monthly pricing table (`#lg-price`) and plane animation (`#lg-plane`) with the **Interactive 83+ Product Catalog**:
     * Category tab filters (Paints, Clears, Primers, Tools, etc.)
     * Real-time live search bar
     * Product cards with image, specifications, and "Inquire on WhatsApp" pre-filled buttons
3. **Brand Partner Marquee:**
   * HB Body, Challenger, Axalta, Rupes, Vilote, DCRYSTA.
4. **Contact & Branch Information:**
   * Street 23, Wakalat St, Industrial Area, Doha, Qatar.
   * Google Maps embed, phone numbers, email, working hours.
5. **Top Header Bar:**
   * Real Doha telephone numbers, email, and location.
6. **Main Navigation Menu:**
   * Update menu links only when explicitly instructed by the user.
