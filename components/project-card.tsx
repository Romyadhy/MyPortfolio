import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { tagColors } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group bg-surface border border-border rounded-xl overflow-hidden card-glow flex flex-col h-full">
            {/* Card header with gradient */}
            <div className="h-2 bg-gradient-to-r from-accent to-accent-light" />

            <div className="p-6 flex flex-col flex-1">
                {/* Title + Tags */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-accent-light transition-colors">
                        {project.name}
                    </h3>
                    <div className="flex gap-1.5 flex-shrink-0">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`text-xs px-2 py-0.5 rounded-full border ${tagColors[tag] || tagColors.Other
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed flex-1 min-h-[60px]">
                    {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4 mt-5 pt-4 border-t border-border">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                        >
                            <Github size={16} />
                            <span>GitHub</span>
                        </a>
                    )}
                    {project.external && (
                        <a
                            href={project.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
