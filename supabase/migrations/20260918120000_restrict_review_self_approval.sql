-- The original public insert policy was WITH CHECK (true), which placed no
-- restriction on the values of the inserted row. The anon key is published in
-- the site's JS bundle by design, so anyone could POST straight to the REST API
-- with approved = true and have a review appear live immediately, bypassing the
-- form and the approval step entirely.
--
-- Submissions must now arrive unapproved. The site's own form does not send the
-- approved column at all, so the table default of false applies and it keeps
-- working unchanged. Approving a review requires the service role, which
-- bypasses RLS, or the Supabase dashboard.

DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.reviews;

CREATE POLICY "Anyone can submit unapproved reviews"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (approved = false);
