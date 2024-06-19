"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { clearSession, signIn, signOut } from "@/auth/helpers";
import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { Router } from "react-router-dom";
import { supabase } from "@/auth/supabase-adapter";
import { auth } from "@/auth";

export default function AuthButton() {
  // console.log(session?.user?, "auth button");
  const session = useSession();
  const router = useRouter();



  const handleSignIn = async () => {
        await signIn();
  };


  return session?.data?.user ? (
    <>
    {/* <Protected /> */}
    <Button
      onClick={async () => {
        await clearSession();
        await signOut();
        await signIn();

        
      } }
    >
      {session?.data?.user?.name} : Sign Out
    </Button></>
  ) : (
    <Button onClick={handleSignIn}>Sign In</Button>
  );
}