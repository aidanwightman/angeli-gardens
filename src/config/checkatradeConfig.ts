/**
 * Centralized Checkatrade configuration
 * 
 * This file contains all Checkatrade-related constants used across the site.
 * When the Checkatrade rating or review count changes, update these values
 * and all components will automatically reflect the new data.
 * 
 * IMPORTANT: After updating these values, you must also manually update:
 * - index.html lines 132-133 (aggregateRating schema)
 */
export const CHECKATRADE_CONFIG = {
    companyId: 1165583,
    profileUrl: "https://www.checkatrade.com/trades/angeligardens",
    rating: 4.9,
    reviewCount: 35,
    maxRating: 5,
    minRating: 1,
} as const;
