import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Detect if Supabase is properly configured (not empty and not the dummy placeholder)
export const isSupabaseConfigured =
  supabaseUrl !== '' &&
  supabaseAnonKey !== '' &&
  !supabaseUrl.includes('dummy.supabase.co') &&
  !supabaseAnonKey.includes('dummykey');

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
