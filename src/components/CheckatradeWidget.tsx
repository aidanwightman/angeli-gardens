import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";
import { useCheckatradeData } from "@/hooks/useCheckatradeData";

interface CheckatradeWidgetProps {
  variant?: "default" | "compact" | "badge";
  showScore?: boolean;
  showLink?: boolean;
  className?: string;
}

export const CheckatradeWidget = ({
  variant = "default",
  showScore = true,
  showLink = true,
  className = "",
}: CheckatradeWidgetProps) => {
  const checkatradeUrl = CHECKATRADE_CONFIG.profileUrl;
  const { rating, reviewCount, isLoading } = useCheckatradeData();
  const maxRating = CHECKATRADE_CONFIG.maxRating;

  if (variant === "badge") {
    return (
      <a
        href={checkatradeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 hover:opacity-90 transition-opacity ${className}`}
        aria-label="View Angeli Gardens on Checkatrade"
      >
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-md border border-gray-200">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-gray-900">{isLoading ? '...' : `${rating}/${maxRating}`}</span>
          </div>
          <span className="text-xs text-gray-600">Checkatrade</span>
        </div>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 text-white ${className}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{isLoading ? '...' : `${rating}/${maxRating}`}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-blue-100 mb-2">Based on {reviewCount} verified reviews</p>
        {showLink && (
          <a
            href={checkatradeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline hover:text-blue-200 inline-flex items-center gap-1"
          >
            See all reviews on Checkatrade
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 md:p-6 text-white shadow-xl ${className}`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Score Display */}
        <div className="flex-shrink-0">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">{isLoading ? '...' : rating}</div>
            <div className="text-lg text-gray-600 font-semibold">/{maxRating}</div>
            <div className="flex justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Rated Excellent on Checkatrade
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-2">
            See our <span className="font-semibold underline">{reviewCount} verified reviews</span> on Checkatrade
          </p>
          <p className="text-xs text-blue-200 mb-4">
            Based on last 12 months
          </p>
          {showLink && (
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
            >
              <a
                href={checkatradeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Our Checkatrade Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Checkatrade Widget Container - This will be populated by the Checkatrade script */}
      <div
        className="checkatrade-widget mt-2"
        data-company-id={CHECKATRADE_CONFIG.companyId.toString()}
      />
    </motion.div>
  );
};

export default CheckatradeWidget;

