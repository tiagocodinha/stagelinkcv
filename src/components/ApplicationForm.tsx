import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSupabase } from '../context/SupabaseContext';
import TestPreview from './TestPreview';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

// Form schema
const applicationSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name is required (min 3 characters)' }),
  dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number' }),
  address: z.string().min(5, { message: 'Address is required (min 5 characters)' }),
  education: z.string().min(3, { message: 'Education details are required' }),
  experience: z.string().optional(),
  whyChooseYou: z.string().optional(),
  additionalInfo: z.string().optional(),
  fileShareLink: z.string().url({ message: 'Please enter a valid URL for your shared files' }).min(1, { message: 'File sharing link is required' }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const ApplicationForm: React.FC = () => {
  const { supabase } = useSupabase();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { 
    control, 
    handleSubmit, 
    formState: { errors, isValid }, 
    reset 
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      experience: '',
      whyChooseYou: '',
      additionalInfo: '',
      fileShareLink: '',
    }
  });

  const onSubmit: SubmitHandler<ApplicationFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      if (supabase) {
        const { error } = await supabase
          .from('applications')
          .insert([
            { 
              ...data,
              submittedAt: new Date().toISOString()
            }
          ]);
          
        if (error) throw new Error(error.message);
      }
      
      setSubmitSuccess(true);
      reset();
      
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unknown error occurred');
      }
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Application!</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We appreciate your interest in joining our team. We will review your application and contact you soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Team</h1>
      </div>
      
      <TestPreview />
      
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <p className="font-medium">Error submitting application</p>
          <p className="text-sm">{submitError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  error={errors.fullName?.message}
                  required
                  {...field}
                />
              )}
            />
            
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Date of Birth"
                  type="date"
                  error={errors.dateOfBirth?.message}
                  required
                  {...field}
                />
              )}
            />
            
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  error={errors.email?.message}
                  required
                  {...field}
                />
              )}
            />
            
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="Phone Number"
                  placeholder="+351 (912345678)"
                  error={errors.phone?.message}
                  required
                  {...field}
                />
              )}
            />
            
            <div className="md:col-span-2">
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <FormInput
                    label="Address"
                    placeholder="Enter your full address"
                    error={errors.address?.message}
                    required
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Education & Experience</h2>
          
          <div className="space-y-6">
            <Controller
              name="education"
              control={control}
              render={({ field }) => (
                <FormTextarea
                  label="Education Background"
                  placeholder="Please enter your educational background, including degrees, institutions, and graduation years"
                  error={errors.education?.message}
                  required
                  rows={3}
                  {...field}
                />
              )}
            />
            
            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <FormTextarea
                  label="Professional Experience"
                  placeholder="Summarize your relevant work experience"
                  error={errors.experience?.message}
                  rows={4}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Assessment Materials</h2>
          
          <div className="space-y-6">
            <Controller
              name="fileShareLink"
              control={control}
              render={({ field }) => (
                <FormInput
                  label="File Sharing Link"
                  placeholder="Enter your Google Drive, Dropbox, or other file sharing link"
                  error={errors.fileShareLink?.message}
                  required
                  {...field}
                />
              )}
            />
            
            <Controller
              name="whyChooseYou"
              control={control}
              render={({ field }) => (
                <FormTextarea
                  label="Why Should We Choose You?"
                  placeholder="Tell us why you'd be a great fit for our team"
                  error={errors.whyChooseYou?.message}
                  rows={4}
                  {...field}
                />
              )}
            />
            
            <Controller
              name="additionalInfo"
              control={control}
              render={({ field }) => (
                <FormTextarea
                  label="Additional Information"
                  placeholder="Anything else you'd like us to know about your application?"
                  error={errors.additionalInfo?.message}
                  rows={3}
                  {...field}
                />
              )}
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className={`
              px-6 py-3 rounded-md font-medium text-white 
              ${isSubmitting || !isValid 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-black hover:bg-gray-800 transition-colors duration-200'}
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;