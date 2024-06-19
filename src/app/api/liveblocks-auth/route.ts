import { auth } from "@/auth";
import { supabase } from "@/auth/supabase-adapter";
import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

/**
 * Authenticating your Liveblocks application
 * https://liveblocks.io/docs/authentication
 */

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: NextRequest) {
  // Get the current user's unique id from your database
  try {
  const sesh = await auth();
  const userName = sesh?.user?.name;

  const { data: user, error } = await supabase
   .from('users')
   .select('*')
   .eq('name', userName)
   .single();

   console.log(user);

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  const userInfo = {
    name: user?.name,
    color: user?.color,
    picture: user?.picture,
  }

  // Create a session for the current user
  // userInfo is made available in Liveblocks presence hooks, e.g. useOthers
  const session = liveblocks.prepareSession(`user-${user?.id}`, {
    userInfo: userInfo,
  });

  // Use a naming pattern to allow access to rooms with a wildcard
  session.allow(`liveblocks:examples:*`, session.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await session.authorize();
  return new Response(body, { status });
   }
   catch (error) {
    console.error('Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}


