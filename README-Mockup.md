# Cardiac Journey & Accommodation — Medical Tourism Platform Mockup

A standalone, zero-dependency interactive medical tourism platform mockup specialized in cardiac care, patient logistics, and hotel-grade recovery accommodation in Egypt.

Reference Information Architecture: [Tourmedx](https://tourmedx.com/ar)  
Mockup File: [`Platform-Mockup.html`](file:///d:/Accomodation/Platform-Mockup.html)

---

## Quick Start

Open [`Platform-Mockup.html`](file:///d:/Accomodation/Platform-Mockup.html) directly in any modern desktop or mobile browser (Chrome, Edge, Safari, Firefox).

- **No backend, database, server, or build step required.**
- **100% self-contained HTML/CSS/JS file.**
- **Instant bilingual toggle** (العربية RTL / English LTR) preserving current page view.
- **Theme switcher**: Nile Green & Sand (Primary) ⇄ Medical Editorial (Alternative).

---

## 1. Brand Identity & Typography

Preserves our established visual identity and medical editorial credibility:

- **Nile Green Palette**:
  - Nile Green: `#0F4C45`
  - Sand Background: `#F3EDE2` / `#FBF8F1`
  - Copper Accent: `#B4532A`
  - Deep Ink: `#1A1F1D`
- **Medical Editorial Palette**:
  - Ink Charcoal: `#14161A`
  - Editorial Cream: `#FAF8F4` / `#FFFFFF`
  - Crimson Accent: `#C23B2E`
- **Strict Brand Typography**:
  - Arabic Body & UI: `IBM Plex Sans Arabic`
  - Arabic Headings: `Readex Pro` (Nile Theme) / `Noto Kufi Arabic` (Editorial Theme)
  - English Typography: Clean editorial system sans (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`)
- **No AI-generated artifacts**:
  - No fake phone bezels or artificial device notches.
  - No decorative emoji icons in navigation or headings.
  - No generic SaaS cards or navy-and-gold styling.

---

## 2. Information Architecture (Tourmedx Sitemap Mapping)

### A. Home (`home`)
14-section comprehensive homepage:
1. Brand header & responsive navigation.
2. Distinctive editorial hero with primary CTA («اطلب تقييمًا طبيًا أوليًا» / “Request an Initial Medical Assessment”).
3. Four core coordination pillars (file review, price transparency, recovery suites, personal accompaniment).
4. Cardiac specialties overview (7 surgical disciplines).
5. Accredited hospital & medical professional criteria.
6. Advanced medical technology & international device standards.
7. The 8-stage patient journey roadmap.
8. Medical stay, accommodation & companion arrangements.
9. Frequently asked questions (collapsible accordion).
10. Final assessment request CTA banner.
11. Comprehensive footer with policy links and emergency disclaimers.

### B. Cardiac Specialties (`specialties` & `specialty`)
Directory index plus 7 dedicated specialty pages:
1. **Interventional Cardiology & Catheterization** (`interventional`)
2. **Coronary Artery Bypass Grafting (CABG)** (`cabg`)
3. **Heart Valve Repair & Replacement / TAVI** (`valves`)
4. **Minimally Invasive Cardiac Surgery (MICS)** (`mics`)
5. **Pediatric & Congenital Heart Surgery** (`pediatric`)
6. **Electrophysiology, Arrhythmia & Pacemakers** (`ep`)
7. **Aortic & Complex Vascular Surgery** (`aortic`)

Each specialty page features:
- Procedural overview and clinical indications.
- Required diagnostic files for initial review (Echo, Cath CD, ECG, blood labs).
- Estimated hospital and recovery stay duration.
- Specialty-specific FAQs.
- Initial medical assessment CTA.

### C. Hospitals & Medical Staff Standards (`hospitals`)
- Accredited cardiac centers (e.g. Dar Al Fouad, As-Salam International Hospital, New Cairo Heart Center).
- JCI & GAHAR accreditation badges.
- Strict standards for surgical consultants (FRCS, American Board, min 15+ years surgical tenure).
- Clear disclaimer: demonstration content, non-promotional.

### D. Medical Technology & Trusted Brands (`technology`)
- Four technology categories:
  - Transcatheter & surgical heart valves.
  - Cardiac rhythm management & 3D mapping.
  - Hybrid operating rooms & digital catheterization suites.
  - Extracorporeal Life Support & ECMO.
- International manufacturers cited as illustrative industry standards (Medtronic, Edwards Lifesciences, Abbott, Boston Scientific, Siemens Healthineers, Philips Healthcare).
- Clear regulatory disclaimer: equipment presence is hospital-dependent.

### E. The Patient Journey (`journey`)
8-stage linear roadmap with timeline visualization:
1. Initial Inquiry & Consultation
2. Clinical Records Collection
3. Preliminary Review by Medical Board
4. Treating Hospital & Surgeon Review
5. Formal Treatment Proposal & Quotation
6. Travel, Visa & Accommodation Logistics
7. Arrival, Hospital Admission & Procedure
8. Discharge, Fit-to-Fly Certification & Remote Follow-up

### F. Travel, Accommodation & Logistics (`accommodation`)
- Hospital-adjacent serviced recovery suites.
- Proximity table (6th of October, Maadi, New Cairo).
- Full logistics: airport VIP reception, medical ambulance transfer, companion suites, 24/7 bilingual concierge.

### G. Initial Medical Assessment (`assessment`)
- Mobile-first interactive intake form.
- Procedure category, urgency, companion details, origin country.
- Safety notice regarding emergency care and confidential data transmission.

### H. Supporting Pages
- **About Us** (`about`): Platform mission, clinical independence, pricing integrity.
- **Contact Us** (`contact`): Inquiries form, phone/WhatsApp, Cairo headquarters.
- **FAQs** (`faqs`): Expandable questions on costs, travel safety, reports, and companion visas.
- **Privacy Policy** (`privacy`): Medical data protection and file confidentiality.
- **Terms of Service** (`terms`): Non-clinical administrative and coordination boundaries.

### I. Preserved Interactive Workspaces
- **Patient & Companion Portal** (`portal`): Active case tracking, coordinator contact, upload simulation.
- **Operations Workspace** (`ops`): Step-by-step case stage advancement with clinical gates and audit stream.
- **Finance Breakdown** (`finance`): Transparent separation of hospital, stay, and coordination fees with real-time multi-currency converter (EGP, USD, SAR, AED).

---

## 3. Mobile-First Responsive Design

Tested and verified without horizontal overflow across all required breakpoints:
- `320px` (Compact Mobile)
- `360px` (Standard Android)
- `375px` (iPhone SE)
- `390px` (iPhone 12/13/14)
- `430px` (iPhone Pro Max)
- `768px` (iPad Portrait / Tablets)
- `1024px` (iPad Pro / Small Laptops)
- `1440px` (Desktop & Large Displays)

Mobile features:
- Collapsible hamburger menu with touch-friendly tap targets (`min-height: 44px`).
- Stacking layout for grids and tables on narrow viewports.
- Sticky action bar and easy-to-reach primary assessment CTA.

---

## 4. Bilingual Verification

- **Arabic (`ar`)**: 100% native Arabic copy, correct RTL text direction, appropriate line breaks and medical terminology.
- **English (`en`)**: 100% native English copy, correct LTR layout, verified zero Arabic string leakage across all 15 views and 7 specialty pages.
- Language switcher preserves the active view when toggled.
