# Angeli Gardens — SEO Action Plan
**Priority order: Critical → High → Medium → Low**

---

## 🔴 CRITICAL (Fix Immediately — Blocking Indexation)

### C1. Fix sitemap.xml — add all 10 pages
**Impact:** Google can't crawl 7 pages without them in the sitemap  
**Files:** `public/sitemap.xml`  
**Add:** /services, /portfolio, /contact, /faq, /areas/london, /areas/surrey, /areas/berkshire  
**Update:** lastmod dates to today

### C2. Fix schema geo + address to Maidenhead
**Impact:** Schema with fake Westminster postcode actively hurts local trust signals  
**Files:** `index.html`  
**Change:** postalCode "SW1A" → "SL6 8AA", latitude "51.5074" → "51.5217", longitude "-0.1278" → "-0.7177", addressLocality "London" → "Maidenhead"

### C3. Expand areaServed in schema to include SL postcodes
**Impact:** Google uses areaServed to match service-area businesses to local queries  
**Files:** `index.html`  
**Add:** AdministrativeArea items for SL1–SL9, plus Reading, Windsor, Slough, Bracknell

### C4. Fix OG image — replace favicon with real 1200×630 image
**Impact:** Every social share looks broken; Google Discover needs proper image  
**Files:** `index.html`, need to create/export a proper OG image  
**Options:** Export one of the portfolio JPEG hero images at 1200×630, place in `/public/og-image.jpg`  
**Update:** og:image, twitter:image to `https://www.angeligardens.co.uk/og-image.jpg`

### C5. Confirm angeligardens.co.uk DNS → Vercel
**Impact:** If custom domain isn't pointing to Vercel, ALL canonicals are pointing to a dead URL  
**Action:** In Vercel dashboard, add custom domain `www.angeligardens.co.uk` → verify DNS is set

---

## 🟠 HIGH (Fix Within 1 Week — Significant Ranking Impact)

### H1. Add SL postcode grid to Berkshire page
**Impact:** Primary mechanism for capturing "landscaper SL1" / "gardener SL6" queries  
**Files:** `src/pages/Areas/Berkshire.tsx`  
**Add:** New section with SL1–SL9 postcode list, each with area name + brief description

### H2. Create dedicated Maidenhead landing page
**Impact:** Maidenhead is the business HQ — should have its own page targeting "landscaper Maidenhead SL6"  
**File:** `src/pages/Areas/Maidenhead.tsx` (new)  
**Route:** `/areas/maidenhead` (add to App.tsx router)  
**Content:** H1 "Landscaper in Maidenhead | Angeli Gardens", SL6 postcode section, local landmarks, CTA

### H3. Add Maidenhead keyword content to homepage
**Impact:** Homepage is the highest-authority page; adding "Maidenhead" here signals primary location  
**Files:** `src/pages/Home.tsx`  
**Add:** A "Based in Maidenhead" callout or tweak the "serving" text to include Maidenhead/SL6

### H4. Fix geo meta tags in index.html
**Impact:** `geo.position` content pointing to London — should be Maidenhead coordinates  
**Files:** `index.html`  
**Change:** `content="51.5074;-0.1278"` → `content="51.5217;-0.7177"`, placename to "Maidenhead, Berkshire"

### H5. Create llms.txt for AI search visibility
**Impact:** Makes site citeable by ChatGPT, Perplexity, Google AI Overviews  
**File:** `public/llms.txt` (new)  
**Content:** Business summary, services, areas served (with postcodes), contact, Checkatrade link

### H6. Fix Checkatrade URLs in sameAs schema
**Impact:** Schema pointing to wrong URL won't get crawled by Checkatrade's structured data  
**Files:** `index.html`  
**Verify:** Actual Checkatrade profile URL (check `CHECKATRADE_CONFIG.profileUrl` in code)

### H7. Set up / optimise Google Business Profile
**Impact:** #1 factor for "gardener near me" and map pack rankings — cannot rank locally without this  
**Action (offline):** Go to business.google.com, claim/verify Angeli Gardens, set service area to SL1–SL9 + surrounding, add photos, get 5-star reviews from existing customers

---

## 🟡 MEDIUM (Fix Within 1 Month)

### M1. Add physical address to footer
**Impact:** NAP consistency is a core local SEO signal; Google cross-references address across web  
**Files:** `src/components/Footer.tsx`  
**Add:** Street address in Maidenhead with SL postcode — even if it's just the town + postcode

### M2. Fix broken social links (Instagram, LinkedIn)
**Files:** `src/components/Footer.tsx`  
**Change:** `href="#"` on Instagram and LinkedIn → real profile URLs (or remove if no profiles)

### M3. Add logo image ≥ 112×112px
**Impact:** Google Search won't show logo in Knowledge Panel unless schema logo is ≥ 112px  
**Files:** `index.html`, plus create `/public/angeli-gardens-logo.png` (min 112×112)  
**Update:** logo field in LocalBusiness and Organization schema

### M4. Add security headers via vercel.json
**Files:** `vercel.json` (new)  
**Add:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy headers

### M5. Add page-level BreadcrumbList schema to inner pages
**Files:** Add dynamic BreadcrumbList to `src/components/SEOHead.tsx`  
**Impact:** Rich results in SERPs showing breadcrumb trail

### M6. Defer Checkatrade widget scripts
**Files:** `index.html`  
**Change:** Add `defer` attribute to both Checkatrade `<script>` tags  
**Impact:** Removes render-blocking JS from critical path

### M7. Add preload for hero images
**Files:** `index.html`  
**Add:** `<link rel="preload" as="image" href="/assets/Angeli.jpeg" />` for first carousel image

### M8. Add portfolio SEO content
**Files:** `src/pages/Portfolio.tsx`  
**Add:** Text intro paragraph above image grid, add H1, categorise by service type

### M9. Create a "Maidenhead Gardener" blog/content hub page
**Impact:** Target informational searches: "how to maintain garden in Maidenhead", "best plants for Berkshire"  
**File:** New page or blog section

### M10. Register on local directories
**Action (offline):** Add Angeli Gardens to:
- Yell.com
- TrustATrader.com
- Bark.com
- MyBuilder.com
- Rated People
- Nextdoor (local neighbourhood targeting for SL postcodes)

---

## 🟢 LOW (Backlog)

### L1. Convert hero images to WebP
**Impact:** ~30% smaller file size → faster LCP  
**Action:** Run images through `cwebp` or Vite plugin

### L2. Move Google Fonts to self-hosted
**Impact:** Removes external DNS lookup; GDPR-safer  
**Tool:** `fontsource` npm package

### L3. Add FAQ schema to FAQ page on server
**Impact:** Currently injected client-side via useEffect — won't be seen by non-JS crawlers  
**Fix:** Move FAQ JSON-LD to `public/faq-schema.json` and inject via SEOHead with server-ready approach, or use Vite SSR/prerender

### L4. Add Review/Testimonial page schema
**Files:** `src/pages/Reviews.tsx`  
**Add:** Schema.org `Review` and `AggregateRating` markup

### L5. Implement hreflang for GB/IE (optional)
**Only if:** Client wants to target Irish market

---

## Implementation Priority Matrix

| # | Task | Effort | Impact | Priority |
|---|---|---|---|---|
| C1 | Fix sitemap | 10 min | Critical | Now |
| C2 | Fix schema geo/postcode | 10 min | Critical | Now |
| C3 | Expand areaServed | 15 min | High | Now |
| C4 | Fix OG image | 20 min | High | Now |
| H1 | SL postcode grid on Berkshire page | 30 min | High | Day 1 |
| H2 | Maidenhead landing page | 45 min | High | Day 1 |
| H4 | Fix geo meta tags | 5 min | Medium | Day 1 |
| H5 | Create llms.txt | 15 min | High | Day 1 |
| H7 | Google Business Profile | 2 hours | Critical | Week 1 |
| M1 | Add address to footer | 10 min | Medium | Week 1 |
| M2 | Fix social links | 5 min | Low | Week 1 |
| M6 | Defer Checkatrade scripts | 5 min | Medium | Week 1 |
| M3 | Fix logo image | 30 min | Medium | Week 2 |
| M10 | Register on directories | 2 hours | High | Week 2 |

---

## "Gardener Near Me" Algorithm — How to Win

Google's local algorithm uses 3 factors:
1. **Proximity** — how close is the business to the searcher?
2. **Relevance** — does the site/GBP clearly signal the service + location?
3. **Prominence** — how many reviews, citations, and links does the business have?

**For SL1–SL9 "near me" searches:**
1. ✅ GBP service area set to SL1–SL9 (most important single action)
2. ✅ Each SL postcode mentioned by name on the Berkshire area page
3. ✅ Maidenhead dedicated landing page at `/areas/maidenhead`
4. ✅ Schema areaServed with specific SL postcode areas
5. ✅ Footer with Maidenhead + SL6 postcode in the address
6. ✅ 5+ reviews on GBP mentioning specific towns (Maidenhead, Slough, Windsor)
7. ✅ Citations on Yell, Bark, TrustATrader with consistent NAP + SL postcode

*Report generated: 2026-04-28*
