/*
  # Fix column names in applications table

  1. Changes
    - Rename 'full_name' to 'fullName'
    - Rename 'date_of_birth' to 'dateOfBirth'
    - Rename 'why_choose_you' to 'whyChooseYou'
    - Rename 'additional_info' to 'additionalInfo'
    - Rename 'file_urls' to 'fileUrls'
    - Rename 'submitted_at' to 'submittedAt'

  2. Security
    - Preserve existing RLS policies
*/

DO $$ 
BEGIN
  -- Rename columns to match application schema
  ALTER TABLE applications RENAME COLUMN full_name TO "fullName";
  ALTER TABLE applications RENAME COLUMN date_of_birth TO "dateOfBirth";
  ALTER TABLE applications RENAME COLUMN why_choose_you TO "whyChooseYou";
  ALTER TABLE applications RENAME COLUMN additional_info TO "additionalInfo";
  ALTER TABLE applications RENAME COLUMN file_urls TO "fileUrls";
  ALTER TABLE applications RENAME COLUMN submitted_at TO "submittedAt";
END $$;