-- Create table for storing Checkatrade review data
create table if not exists checkatrade_data (
  id uuid primary key default gen_random_uuid(),
  rating numeric(2,1) not null check (rating >= 1 and rating <= 5),
  review_count integer not null check (review_count >= 0),
  fetched_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table checkatrade_data enable row level security;

-- Allow public read access (for frontend to fetch data)
create policy "Allow public read access"
  on checkatrade_data
  for select
  to anon
  using (true);

-- Create index for faster queries (get latest record)
create index if not exists idx_checkatrade_data_fetched_at 
  on checkatrade_data(fetched_at desc);

-- Add comment for documentation
comment on table checkatrade_data is 'Stores scraped Checkatrade review data with timestamps for caching';
comment on column checkatrade_data.rating is 'Current Checkatrade rating (1.0 to 5.0)';
comment on column checkatrade_data.review_count is 'Total number of verified reviews';
comment on column checkatrade_data.fetched_at is 'Timestamp when data was scraped from Checkatrade';
