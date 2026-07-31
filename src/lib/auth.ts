import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function requireAuth() {
  const authenticated =
    await isAuthenticated();

  if (!authenticated) {
    redirect("/login");
  }
}

const COOKIE_NAME = "ingly-admin";

export async function createSession() {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAME);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();

  return cookieStore.get(COOKIE_NAME)?.value === "authenticated";
}