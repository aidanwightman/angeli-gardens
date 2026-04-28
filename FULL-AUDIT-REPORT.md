# Angeli Gardens — Full SEO Audit Report
**Date:** 2026-04-28  
**Site:** https://angeli-gardens-ten.vercel.app (canonical: https://www.angeligardens.co.uk)  
**Business:** Angeli Gardens — landscaping & garden services, Maidenhead/Berkshire, serving London, Surrey & Berkshire  
**Primary target:** SL1–SL9 postcode searches ("gardener near me", "landscaper Maidenhead", etc.)

---

## Overall SEO Health Score: 42 / 100

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 38/100 | 22% | 8.4 |
| Content Quality | 52/100 | 23% | 12.0 |
| On-Page SEO | 48/100 | 20% | 9.6 |
| Schema / Structured Data | 35/100 | 10% | 3.5 |
| Performance (CWV) | 60/100 | 10% | 6.0 |
| AI Search Readiness | 20/100 | 10% | 2.0 |
| Images | 30/100 | 5% | 1.5 |
| **TOTAL** | | | **43 / 100** |

---

## Executive Summary

The site has **good bones** (fast Vite build, Checkatrade social proof, solid service page structure) but is currently almost invisible to local search. The primary reason is a combination of:

1. **Zero SL postcode content** — Maidenhead (the business HQ) is never targeted with postcode-level keywords
2. **Broken sitemap** — only 3 of 10 pages are listed; Google likely hasn't crawled the rest
3. **Wrong schema geo data** — coordinates point to Central London (Parliament), not Maidenhead
4. **No llms.txt or AI search signals** — invisible to ChatGPT, Perplexity, and Google AI Overviews
5. **Vercel vs canonical domain mismatch** — could split crawl authority until custom domain is confirmed live

### Top 5 Critical Issues
1. Sitemap missing 7 pages — crawlers may not find /services, /portfolio, /faq, /areas/*
2. Schema address postcode "SW1A" (Westminster) and coordinates 51.5074, -0.1278 (London) — should be Maidenhead SL6
3. No SL1–SL9 postcode keywords anywhere on the site
4. OG image is a 48×48px favicon — social shares will look broken
5. No Google Business Profile optimization guidance

### Top 5 Quick Wins
1. Fix sitemap to include all 10 pages
2. Fix schema geo to Maidenhead (51.5217, -0.7177) and postcode to SL6
3. Add SL postcode grid to Berkshire page
4. Create `/public/llms.txt` for AI search visibility
5. Add Maidenhead-specific H2 section to homepage

---

## Technical SEO — 38/100

### Sitemap
- **CRITICAL:** `public/sitemap.xml` only contains 3 URLs: `/`, `/about`, `/reviews`
- Missing: `/services`, `/portfolio`, `/contact`, `/faq`, `/areas/london`, `/areas/surrey`, `/areas/berkshire`
- All lastmod dates are `2026-01-02` (stale — doesn't reflect real changes)
- Sitemap URL in robots.txt points to `https://www.angeligardens.co.uk/sitemap.xml` (correct canonical domain but must match actual live domain for Vercel)

### robots.txt
- Allows all crawlers ✓
- crawl-delay: 1 ✓
- Sitemap URL points to `https://www.angeligardens.co.uk/sitemap.xml` — OK if canonical domain is live, but Vercel URL won't be indexed

### Canonical / Domain
- All canonicals hardcoded to `https://www.angeligardens.co.uk` — this is correct IF that domain is pointing to this Vercel deployment
- If `angeli-gardens-ten.vercel.app` is what's actually live in production, Google will ignore the Vercel URL and try to index angeligardens.co.uk — which may return 404 if DNS isn't set up
- **Action needed:** Confirm `www.angeligardens.co.uk` is pointing to this Vercel project

### SPA / React Rendering
- React SPA (Vite) — all content is client-side rendered
- Google crawls JavaScript but with a delay — can hurt freshly updated pages
- No server-side rendering or prerendering configured
- Meta tags via `react-helmet-async` won't be read by social scrapers or non-JS crawlers

### Security Headers
- No CSP, HSTS, X-Frame-Options detected in Vercel config
- Missing `vercel.json` with security headers

---

## Content Quality — 52/100

### E-E-A-T Signals
- **Experience:** Portfolio page shows real project photos ✓
- **Expertise:** 10+ years mentioned in FAQ ✓, service range is comprehensive ✓
- **Authoritativeness:** Checkatrade 4.9/5 is a strong UK trust signal ✓, but Checkatrade link in schema uses wrong URL format (`/trades/angeligardens` vs real profile URL)
- **Trustworthiness:** No physical address anywhere on site ✗, no company registration number ✗, no VAT number ✗

### Thin Content
- Homepage: Good content volume ✓
- Area pages (London, Surrey, Berkshire): Mostly keyword lists with cards — low unique content value per page
- No unique content about Maidenhead specifically despite being the base of operations
- FAQ: Good depth ✓
- Portfolio: Image-only, zero text content for SEO ✗

### Keyword Gaps
| Search intent | Targeted? | Notes |
|---|---|---|
| "landscaper Maidenhead" | ✗ | Not mentioned in any on-page copy |
| "gardener SL6" | ✗ | No postcode targeting |
| "garden maintenance SL1-SL9" | ✗ | Zero postcode coverage |
| "landscaper near me Berkshire" | Partial | Only city-level targeting |
| "Checkatrade landscaper London" | ✓ | Well covered |
| "gardener Slough" | Partial | Slough is in Berkshire areas list |

---

## On-Page SEO — 48/100

### Title Tags
| Page | Title | Issues |
|---|---|---|
| Home (index.html) | "Angeli Gardens \| Premium Landscaping..." | 84 chars — too long (max 60) |
| Home (SEOHead.tsx default) | Same as above | Duplicate of index.html title |
| Services | "Landscaping & Garden Services in London..." | Good ✓ |
| Contact | "Contact Angeli Gardens \| Free Quote..." | Good ✓ |
| Berkshire | "Landscaping Services in Berkshire..." | Missing Maidenhead/SL keyword |
| Portfolio | Good ✓ | |

### Meta Descriptions
- Most pages have good meta descriptions ✓
- Berkshire page description doesn't mention SL postcodes or Maidenhead specifically enough
- Index.html description has "4.9/5" hardcoded — will be wrong if rating changes

### Heading Structure
- Most pages: H1 → H2 → H3 ✓
- Portfolio page: No H1 visible in rendered page (banner removed per comment in code)
- Homepage H1: "Angeli Gardens Transform Your Outdoor Space" — would be better with location keyword

### Internal Linking
- Good cross-linking between area pages and homepage ✓
- Services page links to all three area pages ✓
- No internal links to `/faq` from most pages (only Contact page links to it)
- Portfolio has no internal links to individual service pages

---

## Schema / Structured Data — 35/100

### LocalBusiness Schema (index.html)
```json
Issues found:
- postalCode: "SW1A" → FAKE Westminster postcode. Should be "SL6 1AB" or similar Maidenhead postcode
- geo.latitude: "51.5074" → London (Parliament). Should be Maidenhead: 51.5217
- geo.longitude: "-0.1278" → London. Should be Maidenhead: -0.7177
- areaServed: Only 3 City items (London, Surrey, Berkshire). Should include AdministrativeArea items with postcode ranges
- logo: points to .ico file (48px) — Google requires logo min 112×112px
- image: Same .ico file — should be proper photo
- aggregateRating.reviewCount: hardcoded "35" — will become inaccurate
- sameAs Checkatrade URL: "/trades/angeligardens" — verify this is the actual Checkatrade profile URL
- legalName: "Angeli Gardens Ltd" — verify this is the registered name
```

### FAQ Schema (FAQ.tsx)
- Dynamically injected via useEffect ✓
- Content looks complete ✓
- But won't be present in `<head>` for crawlers (injected client-side)

### Missing Schemas
- No `Service` schema on services page
- No `BreadcrumbList` schema on inner pages (only homepage)
- No `Review` schema on reviews page
- No `ImageObject` schema on portfolio

---

## Performance — 60/100

- Vite build with code splitting — likely good TTFB ✓
- Google Fonts loaded synchronously — could cause render-blocking (use `font-display: swap`)
- Checkatrade widget scripts loaded synchronously in `<head>` — render-blocking ✗
- Images: portfolio images served from `/portfolio-media/` — no WebP or size optimization noted
- Hero carousel images (Angeli.jpeg, etc.) — likely large files, no `<picture>` with WebP
- No `loading="lazy"` on first 2 carousel images (correctly eager) ✓, rest have lazy ✓

---

## AI Search Readiness — 20/100

- No `llms.txt` file ✗
- No structured FAQ content visible without JS execution ✗
- No "About the business owner" page (Marley Angeli) ✗ — AI answers often cite named individuals
- Schema description is brief and generic — doesn't establish authority
- No press mentions, awards, or external citations found
- Checkatrade profile IS a strong external citation ✓

---

## Images — 30/100

- OG image: `angeli-gardens-favicon-48-64.ico` — FAR too small (48×48px), wrong format for OG (should be JPG/PNG 1200×630) ✗
- Portfolio images have `alt` text ✓
- Hero carousel images have descriptive alt ✓
- No WebP alternatives for large portfolio images
- Logo is also the favicon — Google won't show it in search results (requires 112×112px minimum)

---

## Local SEO Signals

### NAP Consistency
| Element | Status |
|---|---|
| Phone: 07542 973733 | Consistent across all pages ✓ |
| Email: Angeligardens1@gmail.com | Consistent ✓ |
| Physical address | MISSING from entire site ✗ |
| Postcode | Not mentioned ✗ |

### Google Business Profile
- Not assessed (requires Google account access)
- **CRITICAL:** GBP is the #1 factor for "gardener near me" and "landscaper [postcode]" searches
- If GBP isn't set up or isn't optimised for Maidenhead/SL6, competitor results will dominate the local pack

### Citation Consistency
- Checkatrade: Listed ✓
- Facebook: Listed ✓
- Instagram: Listed but href="#" (broken) ✗
- LinkedIn: Listed but href="#" (broken) ✗
- No Yell.com, TrustATrader, MyBuilder, or other UK trade directories found

---

## Competitive Gaps (based on typical landscaper SERPs for SL/Berkshire)

To rank for "gardener Maidenhead SL6" or "landscaper SL1-SL9":
1. Dedicated location page for Maidenhead with postcode grid ✗
2. Google Business Profile with Maidenhead service area ✗
3. SL postcode keywords in on-page copy ✗
4. Local citations on Yell, TrustATrader, Bark.com, MyBuilder ✗
5. Reviews mentioning specific towns (Maidenhead, Slough, Windsor) — check Checkatrade ✗

---

*Report generated: 2026-04-28*
