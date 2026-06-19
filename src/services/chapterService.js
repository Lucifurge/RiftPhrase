import { supabase } from "../lib/supabase";

// ==========================================
// CREATE CHAPTER
// ==========================================

export async function createChapter(chapterData) {
  const { data, error } = await supabase
    .from("chapters")
    .insert(chapterData)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// UPDATE CHAPTER
// ==========================================

export async function updateChapter(
  chapterId,
  updates
) {
  const { data, error } = await supabase
    .from("chapters")
    .update({
      ...updates,
      updated_at: new Date()
    })
    .eq("id", chapterId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// DELETE CHAPTER
// ==========================================

export async function deleteChapter(
  chapterId
) {
  const { error } = await supabase
    .from("chapters")
    .delete()
    .eq("id", chapterId);

  if (error) throw error;
}

// ==========================================
// GET CHAPTER BY ID
// ==========================================

export async function getChapterById(
  chapterId
) {
  const { data, error } = await supabase
    .from("chapters")
    .select(`
      *,
      novels(
        id,
        title,
        slug,
        author_id
      )
    `)
    .eq("id", chapterId)
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET NOVEL CHAPTERS
// ==========================================

export async function getNovelChapters(
  novelId
) {
  const { data, error } = await supabase
    .from("chapters")
    .select("*")
    .eq("novel_id", novelId)
    .order("chapter_number", {
      ascending: true
    });

  if (error) throw error;

  return data;
}

// ==========================================
// GET PUBLISHED CHAPTERS
// ==========================================

export async function getPublishedChapters(
  novelId
) {
  const { data, error } = await supabase
    .from("chapters")
    .select("*")
    .eq("novel_id", novelId)
    .eq("is_published", true)
    .order("chapter_number", {
      ascending: true
    });

  if (error) throw error;

  return data;
}

// ==========================================
// GET NEXT CHAPTER
// ==========================================

export async function getNextChapter(
  novelId,
  currentChapterNumber
) {
  const { data, error } = await supabase
    .from("chapters")
    .select("*")
    .eq("novel_id", novelId)
    .gt("chapter_number", currentChapterNumber)
    .eq("is_published", true)
    .order("chapter_number", {
      ascending: true
    })
    .limit(1)
    .maybeSingle();

  if (error) throw error;

  return data;
}

// ==========================================
// GET PREVIOUS CHAPTER
// ==========================================

export async function getPreviousChapter(
  novelId,
  currentChapterNumber
) {
  const { data, error } = await supabase
    .from("chapters")
    .select("*")
    .eq("novel_id", novelId)
    .lt("chapter_number", currentChapterNumber)
    .eq("is_published", true)
    .order("chapter_number", {
      ascending: false
    })
    .limit(1)
    .maybeSingle();

  if (error) throw error;

  return data;
}

// ==========================================
// PUBLISH CHAPTER
// ==========================================

export async function publishChapter(
  chapterId
) {
  const { data, error } = await supabase
    .from("chapters")
    .update({
      is_published: true,
      published_at: new Date(),
      updated_at: new Date()
    })
    .eq("id", chapterId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// UNPUBLISH CHAPTER
// ==========================================

export async function unpublishChapter(
  chapterId
) {
  const { data, error } = await supabase
    .from("chapters")
    .update({
      is_published: false,
      updated_at: new Date()
    })
    .eq("id", chapterId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// INCREMENT CHAPTER VIEWS
// ==========================================

export async function incrementChapterViews(
  chapterId,
  currentViews
) {
  const { error } = await supabase
    .from("chapters")
    .update({
      views: currentViews + 1
    })
    .eq("id", chapterId);

  if (error) throw error;
}

// ==========================================
// SAVE DRAFT
// ==========================================

export async function saveDraft(
  chapterId,
  content
) {
  const { data, error } = await supabase
    .from("chapter_drafts")
    .insert({
      chapter_id: chapterId,
      content
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET LATEST DRAFT
// ==========================================

export async function getLatestDraft(
  chapterId
) {
  const { data, error } = await supabase
    .from("chapter_drafts")
    .select("*")
    .eq("chapter_id", chapterId)
    .order("created_at", {
      ascending: false
    })
    .limit(1)
    .maybeSingle();

  if (error) throw error;

  return data;
}
