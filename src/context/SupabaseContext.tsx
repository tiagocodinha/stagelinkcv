import React, { createContext, useContext, ReactNode } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

// Context type
interface SupabaseContextType {
  supabase: SupabaseClient | null;
}

// Create context
const SupabaseContext = createContext<SupabaseContextType>({ supabase: null });

// Provider props
interface SupabaseProviderProps {
  children: ReactNode;
  client: SupabaseClient;
}

// Provider component
export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ 
  children, 
  client 
}) => {
  return (
    <SupabaseContext.Provider value={{ supabase: client }}>
      {children}
    </SupabaseContext.Provider>
  );
};

// Hook for using the context
export const useSupabase = () => useContext(SupabaseContext);