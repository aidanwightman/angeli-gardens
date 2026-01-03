# SEO Improvement Prompt for Another Site

Copy and paste this prompt into a different Cursor window for another site that needs SEO improvements:

---

## SEO Optimization Task

I need comprehensive SEO improvements for my website. Please implement the following SEO enhancements based on best practices:

### 1. Enhanced Meta Tags in index.html

Add comprehensive meta tags to the `<head>` section:

- **Enhanced title tag**: Include brand name, primary services, location, and key differentiator (e.g., "Checkatrade Approved", "Rated X/10")
- **Meta description**: 150-160 characters, include brand name 2-3 times, key services, location, and call-to-action
- **Keywords meta tag**: Include brand variations, service keywords, location-based keywords, and industry terms
- **Author meta tag**: Company name
- **Enhanced robots meta**: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Googlebot meta**: `index, follow`
- **Canonical URL**: Add canonical link tag pointing to the full URL
- **Geo tags**: Add geo.region, geo.placename, geo.position, and ICBM meta tags for local SEO

### 2. Open Graph Tags (Facebook/Social Media)

Add complete Open Graph tags:
- `og:type` (website)
- `og:url` (canonical URL)
- `og:title` (optimized title)
- `og:description` (social-friendly description)
- `og:image` (1200x630px social sharing image)
- `og:image:width` (1200)
- `og:image:height` (630)
- `og:locale` (e.g., en_GB)
- `og:site_name` (brand name)

### 3. Twitter Card Tags

Add Twitter Card meta tags:
- `twitter:card` (summary_large_image)
- `twitter:url`
- `twitter:title`
- `twitter:description`
- `twitter:image`

### 4. Structured Data (JSON-LD Schema)

Implement multiple schema types in the `<head>` section:

**a) LocalBusiness Schema:**
- Business name, legal name, URL
- Logo URL (must be publicly accessible, at least 112x112px)
- Image URL (social sharing image)
- Description
- Telephone, email
- Complete address (PostalAddress with streetAddress, addressLocality, addressRegion, postalCode, addressCountry)
- GeoCoordinates (latitude, longitude)
- areaServed (array of cities/regions)
- priceRange
- openingHoursSpecification
- sameAs (social media profiles, review sites)
- aggregateRating (if applicable)
- hasOfferCatalog (list of services offered)

**b) Organization Schema:**
- Name, URL, logo
- contactPoint (telephone, contactType, areaServed, availableLanguage)
- sameAs (social profiles)

**c) WebSite Schema:**
- Name, URL
- potentialAction (SearchAction if site has search functionality)

**d) BreadcrumbList Schema:**
- Implement for navigation structure

### 5. SEO Component for Dynamic Pages

Create a reusable SEO component (e.g., `SEOHead.tsx`) that:
- Accepts props: title, description, keywords, canonical, ogImage, ogType
- Uses react-helmet-async for dynamic meta tag management
- Sets default values for the homepage
- Allows page-specific overrides
- Includes Open Graph and Twitter Card tags
- Adds canonical URLs
- Sets robots meta tags

### 6. Page-Specific SEO

For each page component:
- Use the SEO component with page-specific:
  - Title (include page name + brand + location)
  - Description (unique, 150-160 chars, include brand name)
  - Keywords (page-specific + brand + location)
  - Canonical URL (full URL for that page)
  - OG image (can be page-specific or default)

### 7. robots.txt

Create/update `robots.txt`:
- Allow all user agents
- Disallow admin/API routes
- Include sitemap location
- Add crawl-delay if needed

### 8. sitemap.xml

Create/update `sitemap.xml`:
- Include all important pages
- Add lastmod dates
- Set appropriate changefreq (weekly for homepage, monthly for static pages)
- Set priority (1.0 for homepage, 0.8-0.9 for important pages)
- Include image tags for pages with important images

### 9. Favicon

Ensure favicon is properly configured:
- Add favicon link tag in head
- Include sizes attribute
- Ensure favicon.ico exists in public folder

### 10. Additional SEO Enhancements

- **Logo meta tag**: Add explicit logo meta tag for Google search results
- **Language attribute**: Ensure `<html lang="en">` is set correctly
- **Viewport meta**: Ensure responsive viewport is configured
- **Font preconnect**: Add preconnect tags for Google Fonts or other external resources

### 11. Technical SEO

- Ensure all pages return 200 status (not 404) for React SPAs
- Verify server configuration serves index.html for all routes
- Check mobile responsiveness
- Ensure fast page load times
- Verify all images have alt text
- Ensure proper heading hierarchy (H1, H2, H3)

### 12. Content SEO

- Include brand name naturally throughout content (2-3 times per page)
- Use location-based keywords naturally
- Include service keywords in headings and content
- Add internal linking between related pages
- Ensure content is unique and valuable

### Requirements:

1. **Don't break existing functionality** - All changes should be additive
2. **Use actual business information** - Replace placeholders with real data
3. **Ensure all URLs are absolute** - Use full https:// URLs for canonical, og:url, etc.
4. **Logo must be publicly accessible** - Use absolute URL, not relative paths
5. **Test structured data** - Use Google Rich Results Test after implementation
6. **Verify meta tags** - Check that all tags are properly formatted
7. **Mobile-friendly** - Ensure all changes work on mobile devices

### Deliverables:

1. Updated `index.html` with all meta tags and structured data
2. SEO component (`SEOHead.tsx` or similar) for dynamic meta management
3. Updated `robots.txt`
4. Updated `sitemap.xml`
5. Page-specific SEO implementations for all major pages
6. Documentation of what was changed and why

### Important Notes:

- For React SPAs: Ensure meta tags work with client-side routing
- Logo URLs must be absolute and publicly accessible (not local imports)
- Structured data should be in the HTML head, not injected via JavaScript
- All schema.org properties should use correct data types
- Test all URLs to ensure they're accessible
- Verify no duplicate content issues with canonical tags

Please implement these SEO improvements comprehensively, ensuring all technical requirements are met and the site is optimized for search engines while maintaining excellent user experience.

---

**Note**: After implementation, you should:
1. Submit sitemap to Google Search Console
2. Request indexing for key pages
3. Test structured data with Google Rich Results Test
4. Verify meta tags with social media debuggers (Facebook Debugger, Twitter Card Validator)
5. Monitor indexing status in Google Search Console

