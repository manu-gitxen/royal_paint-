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

### F. 4-Division Hero Slider & Reference 1 Segmented Navigation
* Transformed static single-hero section into a 4-division Swiper slider (`index.html:837–975`):
  1. **Automotive Refinish Division:** `royalpaint_hero_3.jpg` (Qatar's Premier Automotive Refinish & Paint Solutions)
  2. **Commercial Paint Booth Division:** `royalpaint_hero_booth.jpg` (High-Performance Paint Booth Coatings & Cabin Protection)
  3. **Marine & Yacht Division:** `royalpaint_hero_marine.jpg` (Advanced Marine & Yacht Coatings & Antifouling Systems)
  4. **Wood & Architectural Division:** `royalpaint_hero_wood.jpg` (Premium Wood Finishes, Polyurethane Stains & Clear Lacquers)
* Reference 1 Segmented Progress Navigation (`—— —— —— ——`):
  * 65px horizontal indicator bars (active expands to 95px in `--royal-red` `#F94735`).
  * Circular frosted-glass arrows with backdrop blur.
  * Autoplay 5.5s with 1s smooth cross-fade (`fadeEffect: { crossFade: true }`).
* White background spread overlay completely removed to preserve natural crispness and cabin contrast.

### G. Desktop Header Navigation Styling & Single-Row Fix
* Nav menu text colors updated to Royal Logo Blue (`#09465F`):
  * Links: `#09465F` with `font-weight: 600`, `font-size: 15px`.
  * Dropdown `+` icon: `#09465F`.
  * Phone CTA text & icon circle badge: `#09465F`.
  * Request a Quote CTA button: `#09465F` with `font-weight: 600`, subtle divider border, and hover red accent (`#F94735`).
  * Active/Hover state: Royal Red (`#F94735`).
* **Fixed Nav Wrapping Issue:**
  * Root cause: Template had restrictive `max-width: 650px` on `.main-navigation` and `750px` on `.logo-nav`, which forced the 7th item (`Contact`) onto a second row under `Home` on laptop screens.
  * Fix applied in `css/custom-style.css`: Unset max-widths, added `flex-wrap: nowrap !important; white-space: nowrap !important;`, balanced li margin (`0 12px` on desktop, `0 8px` on 992-1200px screens). Verified 100% inline on 1280px viewport.

---

## 3. Pending Roadmap

1. **Replace Pricing & Plane Sections (`index.html` lines 1237–1775)**:
   * Replace monthly pricing table (`#lg-price`) and plane animation (`#lg-plane`) with the **Interactive 83+ Product Catalog**:
     * Category tab filters (Paints, Clears, Primers, Tools, etc.)
     * Real-time live search bar
     * Product cards with image, specifications, and "Inquire on WhatsApp" pre-filled buttons
2. **Brand Partner Marquee:**
   * HB Body, Challenger, Axalta, Rupes, Vilote, DCRYSTA.
3. **Contact & Branch Information:**
   * Street 23, Wakalat St, Industrial Area, Doha, Qatar.
   * Google Maps embed, phone numbers, email, working hours.
4. **Top Header Bar & Navigation Links:**
   * Update menu anchors and contact details when instructed.

