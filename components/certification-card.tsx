"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, BadgeCheck, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Certification } from "@/data/certifications";

// ponytail: single-file component containing both the card and its native framer-motion lightbox modal
export function CertificationCard({ cert }: { cert: Certification }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group bg-surface border border-border rounded-xl overflow-hidden card-glow flex flex-col h-full transition-all duration-300 hover:border-accent/40 relative">
        {/* Badge Spotlight Area */}
        <div 
          className="relative h-48 w-full bg-surface-hover flex items-center justify-center p-6 cursor-pointer overflow-hidden"
          onClick={() => setIsOpen(true)}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative w-32 h-32 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          
          {/* Hover prompt */}
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <span className="flex items-center gap-2 bg-surface text-foreground px-4 py-2 rounded-full font-medium text-sm border border-border shadow-lg">
              <Search size={16} />
              Inspect Badge
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <BadgeCheck size={14} />
              Verified
            </span>
            <span className="text-xs text-muted font-medium">{cert.issueDate}</span>
          </div>

          <h3 className="font-semibold text-foreground text-lg group-hover:text-accent-light transition-colors leading-snug mb-2">
            {cert.name}
          </h3>
          
          <div className="text-sm font-medium text-muted mb-4">
            Issued by <span className="text-foreground">{cert.issuer}</span>
          </div>

          <p className="text-sm text-muted leading-relaxed flex-1 min-h-[60px] mb-5">
            {cert.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-0.5 rounded-full border border-border bg-surface-light text-muted"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Verification Link */}
          {cert.credentialUrl && (
            <div className="mt-auto pt-4 border-t border-border">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent-light transition-colors group/link"
              >
                <span>View Official Credential</span>
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 hover:bg-surface-hover rounded-full text-muted hover:text-foreground transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              <div className="relative w-full md:w-1/2 aspect-square bg-surface-hover flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
                <div className="relative w-full h-full">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-500 mb-4">
                  <BadgeCheck size={18} />
                  Verified Credential
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight">
                  {cert.name}
                </h3>
                <p className="text-muted mb-6">
                  Issued by <span className="text-foreground font-medium">{cert.issuer}</span> in {cert.issueDate}
                </p>
                
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors w-full"
                  >
                    Verify on {cert.issuer}
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
