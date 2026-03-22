"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
];

export function Navbar2() {
  const pathname = usePathname();

  if (pathname === "/") return null;
  return (
    <header className="top-0 z-50">
      <nav className="bg-gray-600 h-16">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            <span>Logo</span>
          </Link>
          <div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-accent-light bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface-hover",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
