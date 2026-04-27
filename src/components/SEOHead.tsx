import { Helmet } from 'react-helmet-async';
import { CHECKATRADE_CONFIG } from '@/config/checkatradeConfig';
import { useCheckatradeData } from '@/hooks/useCheckatradeData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEOHead = ({
  title = "Angeli Gardens | Premium Landscaping & Garden Services | London, Surrey & Berkshire",
  description,
  keywords = "Angeli Gardens, landscaping London, garden maintenance Surrey, landscaping services Berkshire, Checkatrade approved landscaper",
  canonical = "https://www.angeligardens.co.uk",
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/1dJXwWZnvEdNuQxJzmejokIQllD2/social-images/social-1763163107906-logo.jpg",
  ogType = "website"
}: SEOHeadProps) => {
  const { rating } = useCheckatradeData();

  const defaultDescription = `Angeli Gardens - Your trusted landscaping experts. Checkatrade approved garden maintenance, patios, decking, fencing across London, Surrey & Berkshire. Rated ${rating}/${CHECKATRADE_CONFIG.maxRating}. Free quotes.`;

  const finalDescription = description || defaultDescription;

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
      <meta property="og:site_name" content="Angeli Gardens" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead;
