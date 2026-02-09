-- Unschedules the server-side fetch job since we moved to client-side fetching
select cron.unschedule('fetch-checkatrade-every-15-mins');
