import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReviewForm } from "@/components/ReviewForm";
import { CheckatradeWidget } from "@/components/CheckatradeWidget";
import { SEOHead } from "@/components/SEOHead";
import { Star } from "lucide-react";
import { replaceAnonymousName } from "@/lib/reviewNames";
import { CHECKATRADE_CONFIG } from "@/config/checkatradeConfig";
import { useCheckatradeData } from "@/hooks/useCheckatradeData";

interface Review {
  id: string;
  name: string;
  location: string | null;
  rating: number;
  title: string;
  review_text: string;
  created_at: string;
}

const Reviews = () => {
  const { rating } = useCheckatradeData();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .eq("approved", true)
          .order("created_at", { ascending: false });

        if (error) throw error;
        // Replace anonymous names with realistic ones
        const reviewsWithNames = (data || []).map(review => ({
          ...review,
          name: replaceAnonymousName(review.name, review.id)
        }));
        setReviews(reviewsWithNames);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen py-20">
      <SEOHead
        title={`Client Reviews & Testimonials | Angeli Gardens | Checkatrade ${rating}/${CHECKATRADE_CONFIG.maxRating}`}
        description={`Read genuine client reviews for Angeli Gardens. Checkatrade approved with ${rating}/${CHECKATRADE_CONFIG.maxRating} rating. See what our satisfied customers say about our landscaping and garden services in London, Surrey & Berkshire.`}
        keywords={`Angeli Gardens reviews, Checkatrade reviews, landscaping reviews London, garden services reviews Surrey, Checkatrade ${rating} rating, landscaping testimonials Berkshire`}
        canonical="https://www.angeligardens.co.uk/reviews"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Angeli Gardens Reviews</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Read what our satisfied customers have to say about Angeli Gardens and our work
          </p>
          <ReviewForm trigger={<Button size="lg">Leave a Review</Button>} />
        </motion.div>

        {/* Checkatrade Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <CheckatradeWidget />
        </motion.div>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="text-center py-8">Loading reviews...</div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                          {review.rating}
                        </div>
                      </div>
                    </div>
                    {review.location && (
                      <p className="text-sm text-muted-foreground mb-2">Job location: {review.location}</p>
                    )}
                    <h4 className="font-semibold text-base">{review.title}</h4>
                    <p className="text-xs text-muted-foreground">Posted {formatDate(review.created_at)}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{review.review_text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isLoading && reviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No reviews yet. Be the first to leave a review!</p>
            <ReviewForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
