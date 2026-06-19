import { supabase } from "../lib/supabase";

// ==========================================
// GLOBAL SEARCH
// ==========================================

export async function globalSearch(query) {
  const [novels, profiles] = await Promise.all([
    searchNovels(query),
    searchProfiles(query)
  ]);

  return {
    novels,
    profiles
  };
}

// ==========================================
// SEARCH NOVELS
// ==========================================

export async function searchNovels(query) {
  const { data, error } = await supabase
    .from("novels")
    .select(`
      *,
      profiles(
        username,
        display_name,
        avatar_url
      )
    `)
    .or(
      `title.ilike.%${query}%,synopsis.ilike.%${query}%`
    )
    .eq("visibility", "public")
    .order("views", {
      ascending: false
    })
    .limit(50);

  if (error) throw error;

  return data;
}

// ==========================================
// SEARCH AUTHORS
// ==========================================

export async function searchProfiles(query) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .or(
      `username.ilike.%${query}%,display_name.ilike.%${query}%`
    )
    .limit(30);

  if (error) throw error;

  return data;
}

// ==========================================
// GET NOVELS BY GENRE
// ==========================================

export async function getNovelsByGenre(
  genreId
) {
  const { data, error } = await supabase
    .from("novel_genres")
    .select(`
      novels (
        *,
        profiles (
          username,
          display_name
        )
      )
    `)
    .eq("genre_id", genreId);

  if (error) throw error;

  return data;
}

// ==========================================
// GET NOVELS BY TAG
// ==========================================

export async function getNovelsByTag(
  tagId
) {
  const { data, error } = await supabase
    .from("novel_tags")
    .select(`
      novels (
        *,
        profiles (
          username,
          display_name
        )
      )
    `)
    .eq("tag_id", tagId);

  if (error) throw error;

  return data;
}

// ==========================================
// GET TRENDING SEARCHES
// ==========================================

export async function getTrendingSearches() {
  return [
    "Fantasy",
    "Romance",
    "Action",
    "Cultivation",
    "System",
    "Isekai",
    "Adventure",
    "Mystery"
  ];
}

// ==========================================
// GET SEARCH SUGGESTIONS
// ==========================================

export async function getSearchSuggestions(
  query
) {
  const { data, error } = await supabase
    .from("novels")
    .select("title, slug")
    .ilike("title", `%${query}%`)
    .limit(8);

  if (error) throw error;

  return data;
}
