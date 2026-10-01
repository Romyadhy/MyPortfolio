import type { Metadata } from "next";
import { CertificationCard } from "@/components/certification-card";
import { certifications } from "@/data/certifications";
import {
  SectionWrapper,
  StaggerChildren,
  StaggerItem,
} from "@/components/section-wrapper";
import { Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Official credentials, technical certifications, and achievements.",
};

// ponytail: renders static certifications grid with animated stagger, no extra state machine or heavy modal library
export default function CertificationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-12 sm:pb-20">
      {/* Header */}
      <SectionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Certifications</h1>
            <p className="text-muted text-base sm:text-lg">
              Official credentials, technical certifications, and verified achievements.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-accent-light self-start sm:self-auto">
            <Award size={14} />
            <span>{certifications.length} Verified Credential{certifications.length > 1 ? "s" : ""}</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Grid */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <StaggerItem key={cert.id}>
            <CertificationCard cert={cert} />
          </StaggerItem>
        ))}

        {/* Scalable placeholder card for upcoming achievements */}
        <StaggerItem>
          <div className="border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[340px] bg-surface/30">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-semibold text-foreground text-base mb-1">
              More In Progress
            </h3>
            <p className="text-xs text-muted max-w-xs leading-relaxed">
              Continuously learning and exploring new technologies, cloud architectures, and development practices.
            </p>
          </div>
        </StaggerItem>
      </StaggerChildren>
    </div>
  );
}
