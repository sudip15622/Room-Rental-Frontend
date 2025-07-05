"use server"

import { authFetch } from "@/actions/authFetch";
import { BACKEND_URL } from "@/constants";
// import { getSession } from "./session"

export const getProfile = async () => {
    // const session = await getSession();
    const response = await authFetch(`${BACKEND_URL}/user/profile`);

    const result = await response.json();
    return result;
}