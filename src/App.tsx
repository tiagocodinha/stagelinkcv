import React from 'react';
import { createClient } from '@supabase/supabase-js';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import { SupabaseProvider } from './context/SupabaseContext';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  return (
    <SupabaseProvider client={supabase}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <AppContainer>
          <ApplicationForm />
        </AppContainer>
        <Footer />
      </div>
    </SupabaseProvider>
  );
}

export default App;