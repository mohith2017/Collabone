"use client";

import type { PropsWithChildren } from "react";
import { LiveblocksProvider } from "@liveblocks/react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      // throttle: 100,
    >
      {children}
      
    </LiveblocksProvider>
    </SessionProvider>
  );
}
