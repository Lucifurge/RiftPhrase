import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.https://gdxgomdvhfcgtpuzshna.supabase.co;
const supabaseAnonKey = import.meta.env.sb_publishable_KN3RDmrxshkU8JXTt-6h_Q_2Sp_35ng;

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
