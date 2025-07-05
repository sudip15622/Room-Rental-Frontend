// actions/session.ts
"use server";

import { cookies } from "next/headers";
import { encodeSession, decodeSession, Session } from "@/lib/session";

export async function createSession(payload: Session): Promise<void> {
  const session = await encodeSession(payload);

  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiredAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession(): Promise<Session | null> {
  const sessionCookie = (await cookies()).get("session")?.value;
  console.log(">>> getSession called with cookie:", sessionCookie?.slice(0, 20), "...");
  if (!sessionCookie) return null;
  return await decodeSession(sessionCookie);
}

export async function deleteSession(): Promise<void> {
  (await cookies()).delete("session");
}

export async function updateSession({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}): Promise<void> {
  const currentSession = await getSession();
  console.log("Current session inside updateSession:", currentSession);
  if (!currentSession) return;

  await createSession({
    ...currentSession,
    accessToken,
    refreshToken,
  });
}
