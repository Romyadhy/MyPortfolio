"use client";

import { useActionState } from "react";
import { LockKeyhole, Loader2 } from "lucide-react";
import { unlockJournal } from "./actions";

export function UnlockForm() {
  const [error, action, pending] = useActionState(unlockJournal, null);

  return (
    <div>
      <form action={action} className="flex flex-col sm:flex-row gap-2">
        <input
          name="code"
          type="password"
          required
          autoComplete="off"
          placeholder="Unique code"
          className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 bg-accent/10 border border-accent/30 text-accent-light rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent/20 transition-colors disabled:opacity-60"
        >
          {pending ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <LockKeyhole size={14} />
          )}
          Unlock
        </button>
      </form>
      {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
    </div>
  );
}