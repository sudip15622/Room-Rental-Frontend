import { authFetch } from "@/actions/authFetch";
import { deleteSession } from "@/actions/session";
import { BACKEND_URL } from "@/constants";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await authFetch(`${BACKEND_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await deleteSession();
  }

  revalidatePath("/");
  return NextResponse.redirect(new URL("/", req.nextUrl));
}
