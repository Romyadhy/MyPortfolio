"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Annoyed, Code, FileUser, Mails } from "lucide-react";
import { Typewriter } from "@/components/typewriter";

const ctaButtons = [
  {
    text: "About me",
    icon: Annoyed,
    href: "/about",
    internal: true,
  },
  {
    text: "My Projects",
    icon: Code,
    href: "/projects",
    internal: true,
  },
  {
    text: "My Resume",
    icon: FileUser,
    href: "/resume.pdf",
    internal: false,
  },
  {
    text: "Touch in",
    icon: Mails,
    href: "mailto:your.email@example.com",
    internal: false,
  },
];

export default function Home() {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="text-center px-4 flex flex-col items-center gap-6">
        {/* Typewriter Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground">
          <Typewriter
            text="Hello, I'm Romy."
            speed={95}
            onComplete={() => setShowButtons(true)}
          />
        </h1>

        {/* NOTE: CTA BUTTONS  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=""
        >
          {/* Desktop: 2x2 grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-6">
            {ctaButtons.map((btn) =>
              btn.internal ? (
                <Link
                  key={btn.text}
                  href={btn.href}
                  className="flex items-center gap-2.5 px-6 py-4 min-w-20 min-h-10 justify-center rounded-md border border-border bg-surface hover:bg-surface-hover hover:border-muted !text-foreground text-sm font-medium transition-all duration-200"
                >
                  <btn.icon size={20} className="text-foreground" />
                  {btn.text}
                </Link>
              ) : (
                <a
                  key={btn.text}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-4 min-w-20 min-h-10 justify-center rounded-md border border-border bg-surface hover:bg-surface-hover hover:border-muted !text-foreground text-sm font-medium transition-all duration-200"
                >
                  <btn.icon size={20} className="text-foreground" />
                  {btn.text}
                </a>
              ),
            )}
          </div>

          {/* Mobile: stacked */}
          <div className="sm:hidden flex flex-col items-center gap-2.5">
            {ctaButtons.map((btn) =>
              btn.internal ? (
                <Link
                  key={btn.text}
                  href={btn.href}
                  className="flex items-center gap-2.5 px-6 py-4 rounded-lg border border-border bg-surface hover:bg-surface-hover !text-foreground text-sm font-medium transition-all duration-200 w-full max-w-xs justify-center"
                >
                  <btn.icon size={20} className="text-foreground" />
                  {btn.text}
                </Link>
              ) : (
                <a
                  key={btn.text}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-4 rounded-lg border border-border bg-surface hover:bg-surface-hover !text-foreground text-sm font-medium transition-all duration-200 w-full max-w-xs justify-center"
                >
                  <btn.icon size={20} className="text-foreground" />
                  {btn.text}
                </a>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
