import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import type { Certification } from "@/data/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
    return (
        <div className="group bg-surface border border-border rounded-xl overflow-hidden card-glow flex flex-col h-full">
            {/* Icon header */}
            <div className="p-6 pb-0 flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                    <Award size={22} className="text-accent-light" />
                </div>
                {cert.credentialUrl && (
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent-light transition-colors p-1"
                        title="View credential"
                    >
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>

            <div className="p-6 flex flex-col flex-1">
                {/* Name */}
                <h3 className="font-semibold text-foreground text-lg group-hover:text-accent-light transition-colors">
                    {cert.name}
                </h3>

                {/* Issuer & Date */}
                <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <Building2 size={14} className="text-accent-light/60" />
                        <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                        <Calendar size={14} className="text-accent-light/60" />
                        <span>{cert.date}</span>
                    </div>
                </div>

                {/* Description */}
                {cert.description && (
                    <p className="text-sm text-muted leading-relaxed mt-4 flex-1">
                        {cert.description}
                    </p>
                )}

                {/* Credential link */}
                {cert.credentialUrl && (
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 pt-4 border-t border-border flex items-center gap-1.5 text-sm text-accent-light hover:text-accent transition-colors"
                    >
                        <span>View Credential</span>
                        <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </div>
    );
}
