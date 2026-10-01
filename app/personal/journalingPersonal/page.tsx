import type { Metadata } from "next";
import { Lock, LogOut } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { isUnlocked } from "./auth";
import { lockJournal } from "./actions";
import { UnlockForm } from "./unlock-form";

export const metadata: Metadata = {
  title: "Journal Personal",
  robots: { index: false, follow: false },
};

// Teks ada di env (base64), jadi tidak pernah ikut ke bundle browser.
function journalParagraphs() {
  const b64 = process.env.JOURNAL_CONTENT_B64 ?? "";
  if (!b64) return [];
  return Buffer.from(b64, "base64")
    .toString("utf8")
    .split("\n")
    .filter((line) => line.trim().length > 0);
}

export default async function JournalPage() {
  const unlocked = await isUnlocked();

  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-10 sm:pt-14 pb-12 sm:pb-20">
      <SectionWrapper>
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
          THIS IS MY PERSONAL THINGS RANDOM/FUN ALSO MY THOUGH BOUT SOMETHING
          AND FUTURE
        </h1>
      </SectionWrapper>

      {unlocked ? (
        <>
          <div className="flex justify-end mt-4 mb-2">
            <form action={lockJournal}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground border border-border rounded-lg px-3 py-1.5 transition-colors"
              >
                <LogOut size={13} />
                Lock
              </button>
            </form>
          </div>

          <SectionWrapper
            delay={0.1}
            className="space-y-5 text-muted leading-relaxed text-sm sm:text-base whitespace-pre-line"
          >
            {journalParagraphs().map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </SectionWrapper>
        </>
      ) : (
        <SectionWrapper delay={0.1}>
          <div className="bg-surface border border-border rounded-xl card-glow p-6 sm:p-8 mt-4">
            <div className="flex items-center gap-2 text-accent-light mb-1">
              <Lock size={16} />
              <span className="text-sm font-medium">Private</span>
            </div>
            <p className="text-sm text-muted mb-4">
              Masukkan kode untuk membuka jurnal ini.
            </p>
            <UnlockForm />
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}