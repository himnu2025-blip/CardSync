import { supabase } from '../supabase';
import { Contact, Tag, ContactTag, Note } from '@/types/database';

export const contactsApi = {
  async getMyContacts(): Promise<Contact[]> {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getContactById(id: string): Promise<Contact | null> {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createContact(contact: Partial<Contact>): Promise<Contact> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('contacts')
      .insert({
        ...contact,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateContact(id: string, updates: Partial<Contact>): Promise<Contact> {
    const { data, error } = await supabase
      .from('contacts')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteContact(id: string): Promise<void> {
    const { error } = await supabase
      .from('contacts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

export const tagsApi = {
  async getMyTags(): Promise<Tag[]> {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .order('name');

    if (error) throw error;
    return data || [];
  },

  async createTag(name: string, color: string = '#6B8CAE'): Promise<Tag> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('tags')
      .insert({
        name,
        color,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteTag(id: string): Promise<void> {
    const { error } = await supabase
      .from('tags')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

export const contactTagsApi = {
  async getContactTags(contactId: string): Promise<Tag[]> {
    const { data, error } = await supabase
      .from('contact_tags')
      .select('tag_id, tags(*)')
      .eq('contact_id', contactId);

    if (error) throw error;
    return data?.map((ct: any) => ct.tags) || [];
  },

  async addTagToContact(contactId: string, tagId: string): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { error } = await supabase
      .from('contact_tags')
      .insert({
        contact_id: contactId,
        tag_id: tagId,
        user_id: user.id,
      });

    if (error) throw error;
  },

  async removeTagFromContact(contactId: string, tagId: string): Promise<void> {
    const { error } = await supabase
      .from('contact_tags')
      .delete()
      .eq('contact_id', contactId)
      .eq('tag_id', tagId);

    if (error) throw error;
  },
};

export const notesApi = {
  async getContactNotes(contactId: string): Promise<Note[]> {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('contact_id', contactId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async createNote(contactId: string, content: string): Promise<Note> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('notes')
      .insert({
        contact_id: contactId,
        content,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateNote(id: string, content: string): Promise<Note> {
    const { data, error } = await supabase
      .from('notes')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteNote(id: string): Promise<void> {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};
