// ponytail: satu check kecil — pastikan env journal utuh (base64 round-trip + hash kode cocok)
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1)];
    }),
);

const b64 = env.JOURNAL_CONTENT_B64;
const content = Buffer.from(b64, "base64").toString("utf8");
const paragraphs = content.split("\n").filter((l) => l.trim());

let failed = 0;
const check = (name, ok) => {
  console.log(`${ok ? "ok" : "FAIL"} - ${name}`);
  if (!ok) failed++;
};

check("content base64 round-trips", Buffer.from(content, "utf8").toString("base64") === b64);
check("content has paragraphs", paragraphs.length > 0);
check("content is substantial", content.length > 1000);
check(
  "token = sha256(code)",
  createHash("sha256").update(env.JOURNAL_CODE).digest("hex") ===
    "0ad6057c409bfc11dc8fa855ed9f1eb3132e23ab4068be2e212fc7b37de7e022",
);

if (failed) {
  console.error(`\n${failed} check gagal`);
  process.exit(1);
}
console.log("\nsemua check lolos");