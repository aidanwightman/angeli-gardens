import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CHECKATRADE_URL = "https://www.checkatrade.com/trades/angeligardens";

interface CheckatradeData {
    rating: number;
    reviewCount: number;
}

/**
 * Parses Checkatrade profile page to extract rating and review count
 * from Schema.org JSON-LD structured data
 */
async function scrapeCheckatradeData(): Promise<CheckatradeData> {
    try {
        // Fetch the Checkatrade profile page
        const response = await fetch(CHECKATRADE_URL, {
            headers: {
                'User-Agent': 'AngeliGardens-ReviewFetcher/1.0 (Contact: angeligardens1@gmail.com)',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();

        // Find all JSON-LD script tags
        const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
        const matches = [...html.matchAll(jsonLdRegex)];

        // Parse each JSON-LD block to find aggregateRating
        for (const match of matches) {
            try {
                const jsonData = JSON.parse(match[1]);

                // Check if this JSON-LD contains aggregateRating
                if (jsonData.aggregateRating) {
                    const rating = parseFloat(jsonData.aggregateRating.ratingValue);
                    const reviewCount = parseInt(jsonData.aggregateRating.reviewCount, 10);

                    if (!isNaN(rating) && !isNaN(reviewCount)) {
                        return { rating, reviewCount };
                    }
                }
            } catch (parseError) {
                // Skip invalid JSON blocks
                console.warn('Failed to parse JSON-LD block:', parseError);
            }
        }

        throw new Error('Could not find aggregateRating in Schema.org markup');
    } catch (error) {
        console.error('Error scraping Checkatrade:', error);
        throw error;
    }
}

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            },
        });
    }

    try {
        // Initialize Supabase client
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        console.log('Starting Checkatrade data fetch...');

        // Scrape the data
        const data = await scrapeCheckatradeData();

        console.log('Scraped data:', data);

        // Insert into database
        const { data: insertedData, error: insertError } = await supabaseClient
            .from('checkatrade_data')
            .insert({
                rating: data.rating,
                review_count: data.reviewCount,
                fetched_at: new Date().toISOString(),
            })
            .select()
            .single();

        if (insertError) {
            throw insertError;
        }

        console.log('Data saved to database:', insertedData);

        return new Response(
            JSON.stringify({
                success: true,
                data: {
                    rating: data.rating,
                    reviewCount: data.reviewCount,
                    timestamp: insertedData.fetched_at,
                },
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    } catch (error) {
        console.error('Error in Edge Function:', error);

        return new Response(
            JSON.stringify({
                success: false,
                error: error.message,
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    }
});
