"use server";
import { auth, signIn as naSignIn, signOut as naSignOut } from ".";
import { supabase } from "./supabase-adapter";

export async function signIn() {
  await naSignIn();

}

export async function signOut() {
  await naSignOut();

}

export async function clearSession() {
  const session = await auth();
  const { data, error } = await supabase
        .from('sessions')
        .delete()
        .eq('sessionToken', session?.user?.name)
        .select()
        if (error) {
          console.error('Session data already cleared', error);
          return null;
        }
  console.log(data);
        

}