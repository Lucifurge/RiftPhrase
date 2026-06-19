import { supabase } from "../lib/supabase";

// ==========================================
// UPLOAD AVATAR
// ==========================================

export async function uploadAvatar(
  userId,
  file
) {
  const fileExt = file.name.split(".").pop();

  const fileName =
    `${userId}-${Date.now()}.${fileExt}`;

  const filePath = fileName;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file, {
      upsert: true
    });

  if (error) throw error;

  const {
    data: { publicUrl }
  } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return publicUrl;
}

// ==========================================
// UPLOAD PROFILE BANNER
// ==========================================

export async function uploadBanner(
  userId,
  file
) {
  const fileExt = file.name.split(".").pop();

  const fileName =
    `${userId}-${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("banners")
    .upload(fileName, file, {
      upsert: true
    });

  if (error) throw error;

  const {
    data: { publicUrl }
  } = supabase.storage
    .from("banners")
    .getPublicUrl(fileName);

  return publicUrl;
}

// ==========================================
// UPLOAD NOVEL COVER
// ==========================================

export async function uploadNovelCover(
  novelId,
  file
) {
  const fileExt = file.name.split(".").pop();

  const fileName =
    `${novelId}-${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("novel-covers")
    .upload(fileName, file, {
      upsert: true
    });

  if (error) throw error;

  const {
    data: { publicUrl }
  } = supabase.storage
    .from("novel-covers")
    .getPublicUrl(fileName);

  return publicUrl;
}

// ==========================================
// UPLOAD CHAPTER IMAGE
// ==========================================

export async function uploadChapterImage(
  chapterId,
  file
) {
  const fileExt = file.name.split(".").pop();

  const fileName =
    `${chapterId}-${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("chapter-images")
    .upload(fileName, file, {
      upsert: true
    });

  if (error) throw error;

  const {
    data: { publicUrl }
  } = supabase.storage
    .from("chapter-images")
    .getPublicUrl(fileName);

  return publicUrl;
}

// ==========================================
// DELETE FILE
// ==========================================

export async function deleteFile(
  bucket,
  path
) {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) throw error;
}
