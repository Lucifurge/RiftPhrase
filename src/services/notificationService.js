import { supabase } from "../lib/supabase";

// ==========================================
// CREATE NOTIFICATION
// ==========================================

export async function createNotification(
  userId,
  title,
  message
) {
  const { data, error } = await supabase
    .from("notifications")
    .insert({
      user_id: userId,
      title,
      message
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// GET USER NOTIFICATIONS
// ==========================================

export async function getNotifications(
  userId
) {
  const { data, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false
    });

  if (error) throw error;

  return data;
}

// ==========================================
// GET UNREAD COUNT
// ==========================================

export async function getUnreadCount(
  userId
) {
  const { count, error } = await supabase
    .from("notifications")
    .select("*", {
      count: "exact",
      head: true
    })
    .eq("user_id", userId)
    .eq("is_read", false);

  if (error) throw error;

  return count || 0;
}

// ==========================================
// MARK SINGLE NOTIFICATION AS READ
// ==========================================

export async function markAsRead(
  notificationId
) {
  const { data, error } = await supabase
    .from("notifications")
    .update({
      is_read: true
    })
    .eq("id", notificationId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// ==========================================
// MARK ALL NOTIFICATIONS AS READ
// ==========================================

export async function markAllAsRead(
  userId
) {
  const { error } = await supabase
    .from("notifications")
    .update({
      is_read: true
    })
    .eq("user_id", userId)
    .eq("is_read", false);

  if (error) throw error;
}

// ==========================================
// DELETE NOTIFICATION
// ==========================================

export async function deleteNotification(
  notificationId
) {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", notificationId);

  if (error) throw error;
}

// ==========================================
// DELETE ALL NOTIFICATIONS
// ==========================================

export async function clearNotifications(
  userId
) {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("user_id", userId);

  if (error) throw error;
}
