"use server";

import { createSession } from "@/lib/auth";

export async function loginAction(password: string) {
  if (password !== process.env.ADMIN_PASSWORD) {
    return {
      success: false,
    };
  }

  await createSession();

  return {
    success: true,
  };
}
