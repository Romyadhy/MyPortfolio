"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SocialLinks } from "./social-links";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hide navbar on the landing/hero page
  if (pathname === "/") return null;

  // UPDATE: sticky (bukan fixed) — tetap dalam flow, tidak overlap konten, tapi menempel di atas saat scroll
  // UPDATE: h-full pada nav + div agar items-center benar-benar vertikal tengah dalam h-16
  return (
    <header className="sticky glass top-0 left-0 right-0 z-50 h-16">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold !text-foreground hover:text-accent-light transition-colors flex items-center gap-2"
          >
            {/* <span className="text-xl">⚡</span> */}
            <Image
              src="/logo2.svg"
              alt="R0myadhy logo"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span>R0myadhy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-lg !text-foreground text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-accent-light bg-accent/10"
                    : "text-muted hover:text-foreground hover:bg-surface-hover",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:block !text-foreground">
            <SocialLinks size={18} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 !text-muted hover:text-foreground rounded-lg hover:bg-surface-hover transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      "block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-accent-light bg-accent/10"
                        : "text-muted hover:text-foreground hover:bg-surface-hover",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-border">
                  <SocialLinks size={18} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
