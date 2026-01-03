# How to Get Google to Recrawl Your Site

## Quick Steps

### 1. Request Indexing for Individual Pages

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click the **URL Inspection** tool (search bar at the top)
3. Enter your URL: `https://www.angeligardens.co.uk/`
4. Press Enter
5. Click **"Request Indexing"** button
6. Wait for confirmation message

**Repeat for these important pages:**
- `https://www.angeligardens.co.uk/`
- `https://www.angeligardens.co.uk/about`
- `https://www.angeligardens.co.uk/services`
- `https://www.angeligardens.co.uk/portfolio`
- `https://www.angeligardens.co.uk/reviews`
- `https://www.angeligardens.co.uk/contact`
- `https://www.angeligardens.co.uk/faq`
- `https://www.angeligardens.co.uk/areas/london`
- `https://www.angeligardens.co.uk/areas/surrey`
- `https://www.angeligardens.co.uk/areas/berkshire`

### 2. Submit/Resubmit Your Sitemap

1. In Search Console, click **"Sitemaps"** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. If already submitted, you can click **"Resubmit"** or just submit again

**Sitemap URL:** `https://www.angeligardens.co.uk/sitemap.xml`

### 3. Check Indexing Status

1. Go to **"Coverage"** report in left sidebar
2. Check **"Valid"** pages - these are indexed
3. Check **"Excluded"** pages - see why they're not indexed
4. Fix any errors shown

## Visual Guide

### URL Inspection Tool Location
```
Google Search Console
├── [Search Bar at Top] ← URL Inspection Tool
├── Overview
├── Performance
├── Coverage ← Check indexing status here
├── Sitemaps ← Submit sitemap here
└── ...
```

## Important Notes

⚠️ **Daily Limits**: You can only request indexing for a limited number of URLs per day (usually 10-50)

⏱️ **Processing Time**: 
- Initial request: Immediate
- Google processing: 1-3 days typically
- Full indexing: 1-2 weeks

✅ **When to Request Recrawling**:
- After making SEO changes (like we just did)
- After updating content
- After fixing errors
- After adding new pages
- When pages aren't showing up in search

❌ **When NOT to Request**:
- Multiple times for the same URL (wait a few days)
- For pages that haven't changed
- More than the daily limit

## Troubleshooting

**"URL is not on Google"**
- Click "Request Indexing"
- Wait 1-3 days
- Check back in Coverage report

**"URL is on Google"**
- Already indexed! ✅
- If you made changes, still request indexing to update

**"Request Indexing" button is grayed out**
- You've hit the daily limit
- Wait 24 hours and try again
- Or use sitemap submission instead

**Pages not indexing after weeks**
- Check for errors in Coverage report
- Verify robots.txt allows crawling
- Check for "noindex" meta tags
- Ensure server returns 200 status (not 404)

## After Requesting Recrawl

1. **Wait 1-3 days** for Google to process
2. **Check Coverage report** to see if pages are indexed
3. **Use URL Inspection** to check individual page status
4. **Monitor Performance** report to see if pages appear in search

## Quick Checklist

- [ ] Requested indexing for homepage
- [ ] Requested indexing for key pages (about, services, etc.)
- [ ] Submitted/resubmitted sitemap.xml
- [ ] Checked Coverage report for errors
- [ ] Waited 1-3 days for processing
- [ ] Verified pages are indexed

## Expected Timeline

- **Immediate**: Request submitted
- **1-3 days**: Google processes the request
- **1-2 weeks**: Pages appear in search results
- **2-4 weeks**: Full indexing and rankings stabilize

---

**Pro Tip**: After making SEO changes (like we just did with the logo), always request indexing for your homepage first, then your most important pages.

