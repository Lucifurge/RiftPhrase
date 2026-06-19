import { supabase } from "../lib/supabase";

// ==========================================
// ADD NOVEL TO LIBRARY
// ==========================================

export async function addToLibrary(
  userId,
  novelId,
  status = "reading"
) {
  const { data, error } = await supabase
    .from("bookmarks")
    .insert({
      user_id: userId,
      novel_id: novelId
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// REMOVE FROM LIBRARY
// ==========================================

export async function removeFromLibrary(
  userId,
  novelId
) {
  const { error } = await supabase
    .from("bookmarks")
    .delete()
    .eq("user_id", userId)
    .eq("novel_id", novelId);

  if (error) throw error;
}

// ==========================================
// GET USER LIBRARY
// ==========================================

export async function getUserLibrary(
  userId
) {
  const { data, error } = await supabase
    .from("bookmarks")
    .select(`
      *,
      novels(
        *
      )
    `)
    .eq("user_id", userId);

  if (error) throw error;

  return data;
}

// ==========================================
// SAVE READING HISTORY
// ==========================================

export async function saveReadingHistory(
  userId,
  novelId,
  chapterId
) {
  const { data, error } = await supabase
    .from("reading_history")
    .upsert({
      user_id: userId,
      novel_id: novelId,
      chapter_id: chapterId,
      last_read_at: new Date()
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET CONTINUE READING LIST
// ==========================================

export async function getContinueReading(
  userId
) {
  const { data, error } = await supabase
    .from("reading_history")
    .select(`
      *,
      novels(*),
      chapters(*)
    `)
    .eq("user_id", userId)
    .order("last_read_at", {
      ascending: false
    });

  if (error) throw error;

  return data;
}

// ==========================================
// GET LAST READ CHAPTER
// ==========================================

export async function getLastReadChapter(
  userId,
  novelId
) {
  const { data, error } = await supabase
    .from("reading_history")
    .select("*")
    .eq("user_id", userId)
    .eq("novel_id", novelId)
    .maybeSingle();

  if (error) throw error;

  return data;
}
