"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // Hide footer on the landing/hero page
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-border py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Romyadhy ❤️
        </p>
      </div>
    </footer>
  );
}
