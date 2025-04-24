# Job Application Landing Page

A professional landing page for collecting job applications for your company.

## Features

- Company branding and information
- Assessment test download
- Comprehensive application form
- File upload for completed assessments
- Supabase integration for data storage

## Setup Instructions

1. Clone this repository
2. Install dependencies with `npm install`
3. Set up Supabase:
   - Click "Connect to Supabase" in the top right
   - Create a new Supabase project or connect to an existing one
   - The migrations file will create the necessary tables and policies
4. Create a `.env` file with your Supabase credentials (see `.env.example`)
5. Run the development server with `npm run dev`

## Development

- The application uses React 18 with TypeScript
- Styling is done with Tailwind CSS
- Form validation uses react-hook-form with zod schema validation
- File uploads are handled through Supabase Storage

## Customization

- Update the company name and logo in `Header.tsx` and `Footer.tsx`
- Modify the form fields in `ApplicationForm.tsx` to suit your specific requirements
- Update the test preview PDF in `TestPreview.tsx`
- Customize colors and styling in the Tailwind configuration