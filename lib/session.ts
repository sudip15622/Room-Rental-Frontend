// lib/session.ts
import { jwtVerify, SignJWT } from "jose";

export enum Role {
  admin = "admin",
  owner = "owner",
  renter = "renter",
}

export type Session = {
  user: {
    id: string;
    name: string;
    image: string;
    roles: Role[];
  };
  accessToken: string;
  refreshToken: string;
};

const secretKey = process.env.SESSION_SECRET_KEY;
if (!secretKey) {
  throw new Error("SESSION_SECRET_KEY is not set in environment variables");
}
const encodedKey = new TextEncoder().encode(secretKey);

export async function encodeSession(payload: Session): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decodeSession(token: string): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as Session;
  } catch (error) {
    console.error("Session verification failed:", error);
    return null;
  }
}
