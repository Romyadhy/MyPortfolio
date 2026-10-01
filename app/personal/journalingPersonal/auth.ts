import { createHash } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE = "journal_pass";

// ponytail: cookie menyimpan hash kode, bukan kode mentah; kode asli cuma ada di env server
export const token = () =>
  createHash("sha256")
    .update(process.env.JOURNAL_CODE ?? "")
    .digest("hex");

export async function isUnlocked() {
  if (!process.env.JOURNAL_CODE) return false;
  return (await cookies()).get(COOKIE)?.value === token();
}