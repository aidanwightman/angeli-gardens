import { Helmet } from 'react-helmet-async';
import { CHECKATRADE_CONFIG } from '@/config/checkatradeConfig';
import { useCheckatradeData } from '@/hooks/useCheckatradeData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const BASE_URL = 'https://www.angeligardens.co.uk';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const SEOHead = ({
  title = "Angeli Gardens | Landscaping & Garden Services | Maidenhead, London, Surrey & Berkshire",
  description,
  keywords = "Angeli Gardens, landscaper Maidenhead, landscaping London, garden maintenance Surrey, landscaping Berkshire, gardener SL6, Checkatrade approved landscaper",
  canonical = BASE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  breadcrumbs,
}: SEOHeadProps) => {
  const { rating } = useCheckatradeData();

  const defaultDescription = `Angeli Gardens — Checkatrade approved landscapers based in Maidenhead (SL6). Expert garden maintenance, patios, decking & landscaping across SL1–SL9, London, Surrey & Berkshire. Rated ${rating}/${CHECKATRADE_CONFIG.maxRating}. Free quotes.`;

  const finalDescription = description || defaultDescription;

  // Build breadcrumb schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          ...breadcrumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: crumb.name,
            item: crumb.url,
          })),
        ],
      })
    : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Angeli Gardens" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
