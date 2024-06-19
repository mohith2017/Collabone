"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { signIn, signOut } from "@/auth/helpers";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const session = useSession();
  // console.log(session?.user?, "auth button");
  const router = useRouter();

  const handleSignIn = async () => {
     await signIn();
    // router.push("/editor");
      
  };

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign Out
    </Button>
  ) : (
    <Button onClick={handleSignIn}>Sign In</Button>
  );
}