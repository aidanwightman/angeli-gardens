-- Enable the pg_cron extension to schedule jobs
create extension if not exists pg_cron;

-- Enable the pg_net extension to make HTTP requests
create extension if not exists pg_net;

-- Create a scheduled job to run every 15 minutes
-- Cron syntax: */15 * * * * (Every 15 minutes)
select
  cron.schedule(
    'fetch-checkatrade-every-15-mins',
    '*/15 * * * *',
    $$
    select
      net.http_post(
          url:='https://leygyadgdqgmqatlaklv.supabase.co/functions/v1/super-endpoint',
          headers:='{"Content-Type": "application/json", "Authorization": "Bearer sb_publishable__i8bRwXPuvllH6QQYutJGA_0z9tMQSw"}'::jsonb,
          body:='{}'::jsonb
      ) as request_id;
    $$
  );
