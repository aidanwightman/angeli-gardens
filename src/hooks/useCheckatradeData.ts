import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CHECKATRADE_CONFIG } from '@/config/checkatradeConfig';

interface CheckatradeData {
    rating: number;
    reviewCount: number;
    isLoading: boolean;
    isLive: boolean; // true if from database, false if fallback
    lastUpdated: Date | null;
    error: string | null;
}

/**
 * Custom hook to fetch live Checkatrade review data from the database
 * Falls back to hardcoded config values if data is unavailable
 */
export function useCheckatradeData(): CheckatradeData {
    const [data, setData] = useState<CheckatradeData>({
        rating: CHECKATRADE_CONFIG.rating,
        reviewCount: CHECKATRADE_CONFIG.reviewCount,
        isLoading: true,
        isLive: false,
        lastUpdated: null,
        error: null,
    });

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch the most recent record from the database
                // Using type assertion since the table is new and types haven't been regenerated yet
                const { data: checkatradeData, error } = await supabase
                    .from('checkatrade_data')
                    .select('rating, review_count, fetched_at')
                    .order('fetched_at', { ascending: false })
                    .limit(1)
                    .single();

                if (error) {
                    // If no data exists yet, use fallback
                    if (error.code === 'PGRST116') {
                        console.info('No Checkatrade data in database yet, using fallback config');
                        setData({
                            rating: CHECKATRADE_CONFIG.rating,
                            reviewCount: CHECKATRADE_CONFIG.reviewCount,
                            isLoading: false,
                            isLive: false,
                            lastUpdated: null,
                            error: null,
                        });
                        return;
                    }
                    throw error;
                }

                if (checkatradeData) {
                    // Use live data from database
                    setData({
                        rating: Number(checkatradeData.rating),
                        reviewCount: checkatradeData.review_count,
                        isLoading: false,
                        isLive: true,
                        lastUpdated: new Date(checkatradeData.fetched_at),
                        error: null,
                    });
                } else {
                    // Fallback to config if no data
                    setData({
                        rating: CHECKATRADE_CONFIG.rating,
                        reviewCount: CHECKATRADE_CONFIG.reviewCount,
                        isLoading: false,
                        isLive: false,
                        lastUpdated: null,
                        error: null,
                    });
                }
            } catch (err) {
                console.error('Error fetching Checkatrade data:', err);
                // On error, use fallback config
                setData({
                    rating: CHECKATRADE_CONFIG.rating,
                    reviewCount: CHECKATRADE_CONFIG.reviewCount,
                    isLoading: false,
                    isLive: false,
                    lastUpdated: null,
                    error: err instanceof Error ? err.message : 'Unknown error',
                });
            }
        }

        fetchData();
    }, []);

    return data;
}
