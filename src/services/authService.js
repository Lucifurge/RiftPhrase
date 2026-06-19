import { supabase } from "../lib/supabase";

// Register User
export async function register({
  email,
  password,
  username,
  role
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        role
      }
    }
  });

  if (error) throw error;

  return data;
}

// Login User
export async function login(email, password) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password
    });

  if (error) throw error;

  return data;
}

// Logout User
export async function logout() {
  const { error } =
    await supabase.auth.signOut();

  if (error) throw error;
}

// Forgot Password
export async function resetPassword(email) {
  const { data, error } =
    await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          `${window.location.origin}/reset-password`
      }
    );

  if (error) throw error;

  return data;
}

// Google Login
export async function loginWithGoogle() {
  const { error } =
    await supabase.auth.signInWithOAuth({
      provider: "google"
    });

  if (error) throw error;
}

// Discord Login
export async function loginWithDiscord() {
  const { error } =
    await supabase.auth.signInWithOAuth({
      provider: "discord"
    });

  if (error) throw error;
}
