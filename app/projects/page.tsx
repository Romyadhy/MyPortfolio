import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import {
  SectionWrapper,
  StaggerChildren,
  StaggerItem,
} from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  // UPDATE: pt-24/pt-28 → pt-10/pt-12 karena navbar kini sticky (masih dalam flow, bukan fixed)
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-12 sm:pb-20">
      <SectionWrapper>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
      </SectionWrapper>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.name}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
