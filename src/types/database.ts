export interface BusinessCard {
  id: string;
  user_id: string;
  full_name: string;
  company: string | null;
  designation: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  address: string | null;
  about: string | null;
  profile_photo_url: string | null;
  template_style: string;
  primary_color: string;
  secondary_color: string;
  social_links: Record<string, string>;
  is_primary: boolean;
  view_count: number;
  share_count: number;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  user_id: string;
  full_name: string;
  company: string | null;
  designation: string | null;
  phone: string | null;
  email: string | null;
  profile_photo_url: string | null;
  relationship_type: string | null;
  lead_source: string | null;
  temperature: string | null;
  last_contacted: string | null;
  created_at: string;
  updated_at: string;
}

export interface Tag {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
}

export interface ContactTag {
  id: string;
  contact_id: string;
  tag_id: string;
  user_id: string;
  created_at: string;
}

export interface Note {
  id: string;
  user_id: string;
  contact_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}
