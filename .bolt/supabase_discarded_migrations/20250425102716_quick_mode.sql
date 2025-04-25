/*
  # Add CV link field to applications table

  1. Changes
    - Add cvLink column to applications table
    - Make cvLink required

  2. Security
    - Preserve existing RLS policies
*/

ALTER TABLE applications
ADD COLUMN "cvLink" text NOT NULL;