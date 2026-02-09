
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

console.log("Hello from Checkatrade Saver (Reverted)!");

Deno.serve(async (req) => {
    // CORS headers for all responses
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    }

    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Initialize Supabase client
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.');
        }

        const supabaseClient = createClient(supabaseUrl, supabaseKey);

        // Get data from request body
        const { rating, reviewCount } = await req.json();

        if (typeof rating !== 'number' || typeof reviewCount !== 'number') {
            throw new Error('Invalid data format. Expected number for rating and reviewCount.');
        }

        console.log(`Received update: Rating ${rating}, Count ${reviewCount}`);

        // Insert into database
        const { data: insertedData, error: insertError } = await supabaseClient
            .from('checkatrade_data')
            .insert({
                rating: rating,
                review_count: reviewCount,
                fetched_at: new Date().toISOString(),
            })
            .select()
            .single();

        if (insertError) {
            console.error('Supabase Insert Error:', insertError);
            throw insertError;
        }

        console.log('Data saved to database:', insertedData);

        return new Response(
            JSON.stringify({
                success: true,
                data: insertedData,
            }),
            {
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (error) {
        console.error('Error in Edge Function:', error);

        return new Response(
            JSON.stringify({
                success: false,
                error: (error as Error).message,
            }),
            {
                status: 500,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'application/json',
                },
            }
        );
    }
});
