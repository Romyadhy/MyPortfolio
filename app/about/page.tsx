import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { Timeline } from "@/components/timeline";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  // UPDATE: max-w-xl (lebih sempit dari max-w-2xl) + px-8 → lebih terasa centered di layar lebar
  // UPDATE: my-16 sm:my-20 antar About Me dan Experience untuk spacing yang lebih lapang
  return (
    <div className="max-w-xl mx-auto px-6 sm:px-8 pt-8 sm:pt-14 pb-6 sm:pb-10">
      {/* ── About Me ── */}
      <SectionWrapper>
        <h2 className="text-2xl sm:text-3xl font-bold mb-5">About Me</h2>
        <div className="space-y-4 text-muted leading-relaxed text-sm sm:text-base">
          <p>
            I&apos;m{" "}
            <span className="text-foreground font-semibold">
              I Putu Romyadhy Mahaputra
            </span>
            . You can call me{" "}
            <code className="px-1.5 py-0.5 rounded bg-surface border border-border text-accent-light text-xs font-mono">
              Romy
            </code>
          </p>
          <p>
            I&apos;m a fourth year student at{" "}
            <span className="font-bold text-foreground">
              Universitas Pendidikan Ganesha.
            </span>{" "}
            Computer Science student that interests in web development, cyber,
            IoT, and making a games.{" "}
          </p>
          <p>
            Outside of that, I enjoy to explore the nature like climbing,
            playing a games like Brawlhalla, or Soulslike, going into the gym
            and doing some calistenik things. I&apos;m a big fan of Laufey too.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Divider with extra spacing ── */}
      <div className="my-4 sm:my-6 border-t border-border" />

      {/* ── Experience ── */}
      <SectionWrapper delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-5">Experience</h2>
        <Timeline sections={experience} />
      </SectionWrapper>
    </div>
  );
}
