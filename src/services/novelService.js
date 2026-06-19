import { supabase } from "../lib/supabase";

// ==========================================
// CREATE NOVEL
// ==========================================

export async function createNovel(novelData) {
  const { data, error } = await supabase
    .from("novels")
    .insert(novelData)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// UPDATE NOVEL
// ==========================================

export async function updateNovel(
  novelId,
  updates
) {
  const { data, error } = await supabase
    .from("novels")
    .update({
      ...updates,
      updated_at: new Date()
    })
    .eq("id", novelId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// DELETE NOVEL
// ==========================================

export async function deleteNovel(
  novelId
) {
  const { error } = await supabase
    .from("novels")
    .delete()
    .eq("id", novelId);

  if (error) throw error;
}

// ==========================================
// GET NOVEL BY ID
// ==========================================

export async function getNovelById(id) {
  const { data, error } = await supabase
    .from("novels")
    .select(`
      *,
      profiles(
        id,
        username,
        display_name,
        avatar_url
      )
    `)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET NOVEL BY SLUG
// ==========================================

export async function getNovelBySlug(
  slug
) {
  const { data, error } = await supabase
    .from("novels")
    .select(`
      *,
      profiles(
        id,
        username,
        display_name,
        avatar_url
      )
    `)
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET AUTHOR NOVELS
// ==========================================

export async function getAuthorNovels(
  authorId
) {
  const { data, error } = await supabase
    .from("novels")
    .select("*")
    .eq("author_id", authorId)
    .order("created_at", {
      ascending: false
    });

  if (error) throw error;

  return data;
}

// ==========================================
// SEARCH NOVELS
// ==========================================

export async function searchNovels(
  query
) {
  const { data, error } = await supabase
    .from("novels")
    .select("*")
    .or(
      `title.ilike.%${query}%,synopsis.ilike.%${query}%`
    )
    .eq("visibility", "public")
    .limit(50);

  if (error) throw error;

  return data;
}

// ==========================================
// GET TRENDING NOVELS
// ==========================================

export async function getTrendingNovels() {
  const { data, error } = await supabase
    .from("novels")
    .select("*")
    .eq("visibility", "public")
    .order("views", {
      ascending: false
    })
    .limit(20);

  if (error) throw error;

  return data;
}

// ==========================================
// GET TOP RATED NOVELS
// ==========================================

export async function getTopRatedNovels() {
  const { data, error } = await supabase
    .from("novels")
    .select("*")
    .eq("visibility", "public")
    .order("rating", {
      ascending: false
    })
    .limit(20);

  if (error) throw error;

  return data;
}

// ==========================================
// GET LATEST NOVELS
// ==========================================

export async function getLatestNovels() {
  const { data, error } = await supabase
    .from("novels")
    .select("*")
    .eq("visibility", "public")
    .order("updated_at", {
      ascending: false
    })
    .limit(20);

  if (error) throw error;

  return data;
}

// ==========================================
// INCREMENT VIEWS
// ==========================================

export async function incrementNovelViews(
  novelId,
  currentViews
) {
  const { error } = await supabase
    .from("novels")
    .update({
      views: currentViews + 1
    })
    .eq("id", novelId);

  if (error) throw error;
}

// ==========================================
// FOLLOW NOVEL
// ==========================================

export async function followNovel(
  userId,
  novelId
) {
  const { error } = await supabase
    .from("novel_followers")
    .insert({
      user_id: userId,
      novel_id: novelId
    });

  if (error) throw error;
}

// ==========================================
// UNFOLLOW NOVEL
// ==========================================

export async function unfollowNovel(
  userId,
  novelId
) {
  const { error } = await supabase
    .from("novel_followers")
    .delete()
    .eq("user_id", userId)
    .eq("novel_id", novelId);

  if (error) throw error;
}
