/*
  # Add file sharing link column to applications table

  1. Changes
    - Add fileShareLink column to applications table
    - Remove fileUrls column as it's no longer needed
    - Update column to be required

  2. Security
    - Preserve existing RLS policies
*/

ALTER TABLE applications
ADD COLUMN "fileShareLink" text NOT NULL;

ALTER TABLE applications
DROP COLUMN "fileUrls";