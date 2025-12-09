// src/lib/userPreferences.ts
import { supabase } from "./supabase";

export type Theme = "light" | "dark";

/**
 * Load theme for a given user id from Supabase.
 */
export async function getUserTheme(
  userId: string
): Promise<Theme | null> {
  const { data, error } = await supabase
    .from("user_preferences")
    .select("theme")
    .eq("user_id", userId)
    .single();

  // "0 rows" case - just return null
  // @ts-ignore - supabase error type may not have code
  if (error && error.code === "PGRST116") {
    return null;
  }

  if (error) {
    throw error;
  }

  return (data?.theme as Theme) ?? null;
}

/**
 * Save theme for a given user id to Supabase.
 */
export async function setUserTheme(userId: string, theme: Theme) {
  const { error } = await supabase
    .from("user_preferences")
    .upsert(
      { user_id: userId, theme },
      { onConflict: "user_id" }
    );

  if (error) {
    throw error;
  }
}