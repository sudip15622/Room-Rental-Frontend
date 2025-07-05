// app/api/auth/refresh/route.ts
import { NextRequest, NextResponse } from "next/server";
import {  updateSession } from "@/actions/session";

export async function POST(request: NextRequest) {
  const { accessToken, refreshToken } =
    await request.json();

  if(!accessToken || !refreshToken) throw new Error ("Please provide tokens to refresh!");

  await updateSession({ accessToken, refreshToken });

  return NextResponse.json({ success: true });
}

