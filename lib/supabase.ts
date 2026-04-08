import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'; // Required for Supabase in React Native

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. App will not function correctly.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
