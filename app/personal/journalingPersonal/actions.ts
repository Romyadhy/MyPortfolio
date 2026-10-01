"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { COOKIE, token } from "./auth";

const PATH = "/personal/journalingPersonal";

export async function unlockJournal(_prev: string | null, formData: FormData) {
  const code = String(formData.get("code") ?? "");
  const expected = process.env.JOURNAL_CODE ?? "";
  // ponytail: kode statis tanpa rate-limit; tambah throttle kalau perlu
  const ok = expected.length > 0 && code === expected;

  const jar = await cookies();
  if (ok) {
    jar.set(COOKIE, token(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    revalidatePath(PATH);
    return null;
  }
  return "Kode salah.";
}

export async function lockJournal() {
  (await cookies()).delete(COOKIE);
  revalidatePath(PATH);
}