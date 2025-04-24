/*
  # Create applications table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `date_of_birth` (date, not null)
      - `email` (text, not null)
      - `phone` (text, not null)
      - `address` (text, not null)
      - `education` (text, not null)
      - `experience` (text)
      - `why_choose_you` (text, not null)
      - `additional_info` (text)
      - `file_urls` (text array)
      - `submitted_at` (timestamptz, default now())
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `applications` table
    - Add policy for authenticated users to insert data
    - Add policy for authenticated admins to read all data
*/

-- Create the applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  date_of_birth date NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  education text NOT NULL,
  experience text,
  why_choose_you text NOT NULL,
  additional_info text,
  file_urls text[],
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting applications (anyone can submit)
CREATE POLICY "Anyone can submit applications"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for reading applications (only authenticated users with admin role)
CREATE POLICY "Admins can read all applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create storage bucket for application files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('applications', 'applications', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policy for uploading files
CREATE POLICY "Anyone can upload application files" 
  ON storage.objects 
  FOR INSERT 
  TO anon
  WITH CHECK (bucket_id = 'applications');

-- Set up storage policy for reading files (public)
CREATE POLICY "Application files are publicly accessible" 
  ON storage.objects 
  FOR SELECT 
  TO anon
  USING (bucket_id = 'applications');