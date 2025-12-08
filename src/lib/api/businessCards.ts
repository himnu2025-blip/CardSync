import { supabase } from '../supabase';
import { BusinessCard } from '@/types/database';

export const businessCardsApi = {
  async getMyCards(): Promise<BusinessCard[]> {
    const { data, error } = await supabase
      .from('business_cards')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getPrimaryCard(): Promise<BusinessCard | null> {
    const { data, error } = await supabase
      .from('business_cards')
      .select('*')
      .eq('is_primary', true)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async getCardById(id: string): Promise<BusinessCard | null> {
    const { data, error } = await supabase
      .from('business_cards')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createCard(card: Partial<BusinessCard>): Promise<BusinessCard> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('business_cards')
      .insert({
        ...card,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateCard(id: string, updates: Partial<BusinessCard>): Promise<BusinessCard> {
    const { data, error } = await supabase
      .from('business_cards')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteCard(id: string): Promise<void> {
    const { error } = await supabase
      .from('business_cards')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async incrementViewCount(id: string): Promise<void> {
    const { error } = await supabase.rpc('increment_view_count', { card_id: id });
    if (error) console.error('Failed to increment view count:', error);
  },
};
