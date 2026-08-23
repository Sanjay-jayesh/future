/*
# Create enquiries table for Future Factory lead capture

## Purpose
Stores enquiries submitted from the website's "Quick Enquiry" and consultation-booking
forms so the Future Factory team can follow up with prospective students.

## New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — the student/parent's name
  - `email` (text, not null) — contact email
  - `phone` (text) — optional phone / WhatsApp number
  - `country_of_interest` (text) — e.g. Georgia, Uzbekistan, UK, Europe
  - `course_interest` (text) — e.g. Medicine, Dentistry, Engineering
  - `message` (text) — free-text enquiry
  - `status` (text, default 'new') — lead status for pipeline tracking
  - `created_at` (timestamptz, default now())

## Security
- RLS enabled on `enquiries`.
- No sign-in screen in this app, so policies are scoped to `anon, authenticated`
  so the anon-key frontend can insert new enquiries. SELECT/UPDATE/DELETE are
  intentionally denied to anon (visitors cannot read or modify other people's
  enquiries); only INSERT is open to anon. Authenticated staff (future admin) can
  read and update.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country_of_interest text,
  course_interest text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries" ON enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries" ON enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries" ON enquiries FOR DELETE
  TO authenticated USING (true);
