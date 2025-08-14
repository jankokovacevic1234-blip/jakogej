import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          category: string;
          image_url: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          price: number;
          category: string;
          image_url: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          price?: number;
          category?: string;
          image_url?: string;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          order_code: string;
          items: any;
          total_amount: number;
          customer_email: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_code: string;
          items: any;
          total_amount: number;
          customer_email: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_code?: string;
          items?: any;
          total_amount?: number;
          customer_email?: string;
          status?: string;
          created_at?: string;
        };
      };
      discount_codes: {
        Row: {
          id: string;
          code: string;
          discount_percentage: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          discount_percentage: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          code?: string;
          discount_percentage?: number;
          is_active?: boolean;
          created_at?: string;
        };
      };
    };
  };
};