# Angeli Gardens — SEO Checklist for Marley
*Everything the dev can't do — needs you or Marley to action*

---

## 🔴 STEP 1 — Google Business Profile (Most Important)
*This is what makes you show up on Google Maps and "gardener near me" searches*

1. Go to **business.google.com** and sign in with a Google account
2. Search for "Angeli Gardens" — if it already exists, click **"Claim this business"**
3. If it doesn't exist, click **"Add your business"**
4. Fill in:
   - Business name: **Angeli Gardens**
   - Category: **Landscaper** (primary) + add **Gardener** as secondary
   - Phone: **07542 973733**
   - Website: **www.angeligardens.co.uk**
   - Address: Your real address in Maidenhead (this stays private if you want)
5. Under **"Service area"** — add these postcodes: **SL1, SL2, SL3, SL4, SL5, SL6, SL7, SL8, SL9**
6. Add opening hours: Mon–Sat 7am–6pm
7. **Verify** the listing (Google will send a postcard or call to your number)
8. Once verified, upload **10+ photos** of your work from the portfolio

---

## 🔴 STEP 2 — Get Google Reviews
*Reviews mentioning town names directly boost local rankings*

Ask your last 10–15 happy customers to leave a Google review. Send them this message:

> *"Hi [Name], really glad you're happy with the work! Would you mind leaving us a quick Google review? It takes 2 minutes and really helps the business. Here's the link: [paste your GBP review link]*"

**Tips for reviews that help SEO:**
- Ask them to mention the town (e.g. "Marley came to our garden in Maidenhead...")
- Ask them to mention the service (e.g. "...to lay a new patio")
- Aim for 10+ reviews to start — this alone can get you into the Google Map Pack

---

## 🟠 STEP 3 — Connect the Custom Domain to Vercel
*If angeligardens.co.uk isn't pointing at Vercel, Google can't index the site properly*

1. Go to **vercel.com** → your project → **Settings → Domains**
2. Add `www.angeligardens.co.uk` and `angeligardens.co.uk`
3. Vercel will show you DNS records to add
4. Log into wherever the domain is registered (GoDaddy / Namecheap / etc.)
5. Add the DNS records Vercel shows you
6. Wait 10–30 mins, then check it's live at www.angeligardens.co.uk

---

## 🟠 STEP 4 — Submit Sitemap to Google Search Console
*Tells Google exactly which pages exist so they get crawled faster*

1. Go to **search.google.com/search-console** → sign in
2. Add property: `https://www.angeligardens.co.uk`
3. Verify ownership (easiest way: HTML tag method — paste the tag into the site header, or use the Google Analytics method if GA is already set up)
4. Go to **Sitemaps** in the left menu
5. Enter: `sitemap.xml` → click **Submit**
6. Come back in 2–3 days and check "Coverage" to confirm pages are being indexed

---

## 🟠 STEP 5 — Sign Up to Free UK Trade Directories
*These are "citations" — Google cross-checks your business details across the web*

Sign up to each and use **exactly the same** name, address, and phone number everywhere:
- **Name:** Angeli Gardens
- **Address:** [Your Maidenhead address] SL6
- **Phone:** 07542 973733
- **Website:** www.angeligardens.co.uk

Directories to register on (all free):
| Site | URL |
|---|---|
| Yell.com | yell.com/advertise |
| Bark.com | bark.com/register/pro |
| MyBuilder | mybuilder.com |
| Rated People | ratedpeople.com |
| TrustATrader | trustatrader.com |
| Nextdoor | nextdoor.co.uk/pages (great for hyperlocal SL postcode reach) |

---

## 🟡 STEP 6 — Fix Social Media Links
*Currently Instagram and LinkedIn links in the footer go nowhere*

Either:
- **Set up Instagram:** Create @angeligardens and post portfolio photos — then update the link
- **Or remove them** (ask the dev to remove the broken icons from the footer)

---

## 🟡 STEP 7 — Add Checkatrade to Google Business Profile
*Tells Google you're verified and trusted*

In your Google Business Profile:
1. Go to **Edit profile → Links**
2. Add your Checkatrade URL as a website link

---

## ✅ Done by the Dev (for reference)
- Fixed sitemap (all 11 pages)
- Fixed schema (real Maidenhead coordinates + SL6 postcode)
- Added SL1–SL9 postcode targeting across the site
- New Maidenhead landing page at `/areas/maidenhead`
- Created `llms.txt` for AI search visibility
- Added security headers
- All deployed to Vercel

---

*Priority order: Steps 1 → 2 → 3 → 4 → 5 → 6 → 7*  
*Steps 1–3 will have the biggest impact on "gardener near me" rankings*
