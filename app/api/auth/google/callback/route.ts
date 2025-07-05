import { createSession } from "@/actions/session";
import { Role } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const rolesParam = searchParams.get("roles");

  if (!accessToken || !refreshToken || !id || !name || !image || !rolesParam) {
    throw new Error("Google Oauth Failed!");
  }

  const roles = rolesParam
    .split(",")
    .filter((role) => Object.values(Role).includes(role as Role)) as Role[];

  await createSession({
    user: {
      id: id,
      name: name,
      image: image,
      roles: roles,
    },
    accessToken: accessToken,
    refreshToken: refreshToken,
  });

  redirect("/");
}
