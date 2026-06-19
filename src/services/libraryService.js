import { supabase } from "../lib/supabase";

// ==========================================
// CREATE COMMENT
// ==========================================

export async function createComment(
  userId,
  chapterId,
  content,
  parentId = null
) {
  const { data, error } = await supabase
    .from("comments")
    .insert({
      user_id: userId,
      chapter_id: chapterId,
      parent_id: parentId,
      content
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET CHAPTER COMMENTS
// ==========================================

export async function getChapterComments(
  chapterId
) {
  const { data, error } = await supabase
    .from("comments")
    .select(`
      *,
      profiles (
        id,
        username,
        display_name,
        avatar_url
      )
    `)
    .eq("chapter_id", chapterId)
    .is("parent_id", null)
    .order("created_at", {
      ascending: false
    });

  if (error) throw error;

  return data;
}

// ==========================================
// GET COMMENT REPLIES
// ==========================================

export async function getReplies(
  parentId
) {
  const { data, error } = await supabase
    .from("comments")
    .select(`
      *,
      profiles (
        id,
        username,
        display_name,
        avatar_url
      )
    `)
    .eq("parent_id", parentId)
    .order("created_at", {
      ascending: true
    });

  if (error) throw error;

  return data;
}

// ==========================================
// DELETE COMMENT
// ==========================================

export async function deleteComment(
  commentId
) {
  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId);

  if (error) throw error;
}

// ==========================================
// LIKE COMMENT
// ==========================================

export async function likeComment(
  userId,
  commentId
) {
  const { error } = await supabase
    .from("comment_likes")
    .insert({
      user_id: userId,
      comment_id: commentId
    });

  if (error) throw error;
}

// ==========================================
// UNLIKE COMMENT
// ==========================================

export async function unlikeComment(
  userId,
  commentId
) {
  const { error } = await supabase
    .from("comment_likes")
    .delete()
    .eq("user_id", userId)
    .eq("comment_id", commentId);

  if (error) throw error;
}

// ==========================================
// CHECK COMMENT LIKE
// ==========================================

export async function hasLikedComment(
  userId,
  commentId
) {
  const { data, error } = await supabase
    .from("comment_likes")
    .select("*")
    .eq("user_id", userId)
    .eq("comment_id", commentId)
    .maybeSingle();

  if (error) throw error;

  return !!data;
}
