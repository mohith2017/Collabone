// import { Adapter } from "next-auth/adapters";
// import { createClient } from "@supabase/supabase-js";

import { createClient } from "@supabase/supabase-js";

// interface SupabaseAdapterOptions {
//   supabaseUrl: string;
//   supabaseServiceRoleKey: string;
// }

// class SupabaseAdapter implements Adapter {
//   private supabase: ReturnType<typeof createClient>;

//   constructor(options: SupabaseAdapterOptions) {
//     this.supabase = createClient(options.supabaseUrl, options.supabaseServiceRoleKey);
//   }

//   async createUser(profile:any) {
//     const { data, error } = await this.supabase.from("users").insert([
//       {
//         id: profile.id,
//         name: profile.name,
//         email: profile.email,
//         email_verified: profile.emailVerified,
//         image: profile.image,
//       },
//     ]);
//     if (error) throw new Error(error.message);
//     return data?[0];
//   }

//   async getUserById(id) {
//     const { data, error } = await this.supabase.from("users").select("*").eq("id", id).single();
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async updateUser(user) {
//     const { data, error } = await this.supabase.from("users").update({...user }).eq("id", user.id);
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async deleteUser(id) {
//     const { data, error } = await this.supabase.from("users").delete().eq("id", id);
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async createSession(session) {
//     const { data, error } = await this.supabase.from("sessions").insert([session]);
//     if (error) throw new Error(error.message);
//     return data[0];
//   }

//   async getSessionById(id) {
//     const { data, error } = await this.supabase.from("sessions").select("*").eq("id", id).single();
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async updateSession(session) {
//     const { data, error } = await this.supabase.from("sessions").update({...session }).eq("id", session.id);
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async deleteSession(id) {
//     const { data, error } = await this.supabase.from("sessions").delete().eq("id", id);
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async createVerificationToken(token) {
//     const { data, error } = await this.supabase.from("verification_tokens").insert([{ token }]);
//     if (error) throw new Error(error.message);
//     return data[0];
//   }

//   async getVerificationToken(token) {
//     const { data, error } = await this.supabase.from("verification_tokens").select("*").eq("token", token).single();
//     if (error) throw new Error(error.message);
//     return data;
//   }

//   async deleteVerificationToken(token) {
//     const { data, error } = await this.supabase.from("verification_tokens").delete().eq("token", token);
//     if (error) throw new Error(error.message);
//     return data;
//   }
// }

// export { SupabaseAdapter };

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseServiceKey);