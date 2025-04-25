/*
  # Update CV column in applications table

  1. Changes
    - Remove cvLink column
    - Add cv column for storing file URLs
    - Make cv required

  2. Security
    - Preserve existing RLS policies
*/

ALTER TABLE applications
DROP COLUMN IF EXISTS "cvLink";

ALTER TABLE applications
ADD COLUMN "cv" text NOT NULL;