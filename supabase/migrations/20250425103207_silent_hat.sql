/*
  # Fix CV upload configuration

  1. Changes
    - Ensure CV column exists and is properly configured
    - Add storage policies for CV uploads
*/

-- Make sure the CV column exists and is properly configured
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'applications' AND column_name = 'cv'
  ) THEN
    ALTER TABLE applications ADD COLUMN cv text NOT NULL;
  END IF;
END $$;

-- Ensure storage bucket exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('applications', 'applications', true)
ON CONFLICT (id) DO NOTHING;

-- Update storage policies
CREATE POLICY "Anyone can upload CVs"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'applications')
ON CONFLICT DO NOTHING;

CREATE POLICY "Anyone can read CVs"
ON storage.objects
FOR SELECT
TO anon
USING (bucket_id = 'applications')
ON CONFLICT DO NOTHING;