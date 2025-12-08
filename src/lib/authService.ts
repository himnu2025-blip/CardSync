import { supabase } from './supabase';
import { AuthUser } from '@/types/auth';
import { User } from '@supabase/supabase-js';

function mapSupabaseUser(user: User): AuthUser {
  return {
    id: user.id,
    email: user.email!,
    full_name: user.user_metadata?.full_name || user.email!.split('@')[0],
  };
}

export const authService = {
  mapUser(user: User): AuthUser {
    return mapSupabaseUser(user);
  },

  async sendOtp(email: string) {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true },
    });
    if (error) throw error;
  },

  async verifyOtpAndSetPassword(email: string, token: string, password: string, fullName: string) {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    });
    if (error) throw error;

    const { error: updateError } = await supabase.auth.updateUser({
      password,
      data: { full_name: fullName },
    });
    if (updateError) throw updateError;

    return data.user;
  },

  async signInWithPassword(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data.user;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user ? mapSupabaseUser(user) : null;
  },
};
