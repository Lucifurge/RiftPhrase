import { supabase } from "../lib/supabase";

// ==========================================
// GET CURRENT USER PROFILE
// ==========================================

export async function getCurrentProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET PROFILE BY USERNAME
// ==========================================

export async function getProfileByUsername(
  username
) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// UPDATE PROFILE
// ==========================================

export async function updateProfile(
  userId,
  updates
) {
  const { data, error } = await supabase
    .from("profiles")
    .update({
      ...updates,
      updated_at: new Date()
    })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// FOLLOW USER
// ==========================================

export async function followUser(
  followerId,
  followingId
) {
  const { error } = await supabase
    .from("follows")
    .insert({
      follower_id: followerId,
      following_id: followingId
    });

  if (error) throw error;
}

// ==========================================
// UNFOLLOW USER
// ==========================================

export async function unfollowUser(
  followerId,
  followingId
) {
  const { error } = await supabase
    .from("follows")
    .delete()
    .eq("follower_id", followerId)
    .eq("following_id", followingId);

  if (error) throw error;
}

// ==========================================
// CHECK IF FOLLOWING
// ==========================================

export async function isFollowing(
  followerId,
  followingId
) {
  const { data, error } = await supabase
    .from("follows")
    .select("*")
    .eq("follower_id", followerId)
    .eq("following_id", followingId)
    .maybeSingle();

  if (error) throw error;

  return !!data;
}

// ==========================================
// GET AUTHOR FOLLOWERS
// ==========================================

export async function getFollowers(userId) {
  const { data, error } = await supabase
    .from("follows")
    .select(`
      *,
      follower:profiles!follows_follower_id_fkey(*)
    `)
    .eq("following_id", userId);

  if (error) throw error;

  return data;
}

// ==========================================
// SEARCH USERS
// ==========================================

export async function searchProfiles(
  query
) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .or(
      `username.ilike.%${query}%,display_name.ilike.%${query}%`
    )
    .limit(20);

  if (error) throw error;

  return data;
}
