import type { Metadata } from "next";
import { CertificationCard } from "@/components/certification-card";
import { certifications } from "@/data/certifications";
import {
  SectionWrapper,
  StaggerChildren,
  StaggerItem,
} from "@/components/section-wrapper";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  // UPDATE: pt-24/pt-28 → pt-10/pt-12 karena navbar kini sticky (masih dalam flow, bukan fixed)
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-12 sm:pb-20">
      <SectionWrapper>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Certifications</h1>
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="p-4 rounded-2xl bg-surface border border-border mb-6">
            <Construction size={40} className="text-accent-light" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Under Construction
          </h2>
          <p className="text-muted max-w-md">
            I&apos;m working on it, pls check back soon
          </p>
        </div>
      </SectionWrapper>

      {/* <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/*   {certifications.map((cert) => ( */}
      {/*     <StaggerItem key={cert.name}> */}
      {/*       <CertificationCard cert={cert} /> */}
      {/*     </StaggerItem> */}
      {/*   ))} */}
      {/* </StaggerChildren> */}
    </div>
  );
}
