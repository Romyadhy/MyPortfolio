"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import type { ExperienceSection } from "@/data/experience";

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
};

const colorMap: Record<
  string,
  { dot: string; iconBg: string; text: string; line: string }
> = {
  blue: {
    dot: "bg-blue-500",
    iconBg: "bg-blue-500/15 border border-blue-500/25",
    text: "text-blue-400",
    line: "bg-blue-500/40",
  },
  violet: {
    dot: "bg-violet-500",
    iconBg: "bg-violet-500/15 border border-violet-500/25",
    text: "text-violet-400",
    line: "bg-violet-500/40",
  },
  teal: {
    dot: "bg-teal-500",
    iconBg: "bg-teal-500/15 border border-teal-500/25",
    text: "text-teal-400",
    line: "bg-teal-500/40",
  },
  green: {
    dot: "bg-green-500",
    iconBg: "bg-green-500/15 border border-green-500/25",
    text: "text-green-400",
    line: "bg-green-500/40",
  },
};

export function Timeline({ sections }: { sections: ExperienceSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section) => {
        const Icon = iconMap[section.icon] || Briefcase;
        const colors = colorMap[section.color] || colorMap.violet;

        return (
          // FIX: Setiap section adalah satu blok — header row dan entry rows
          // berbagi LEFT COLUMN yang sama sehingga garis tersambung dari icon ke semua dot
          <div key={section.category}>
            {/* ── ROW 0: Category header — icon kiri + judul kanan ── */}
            <div className="flex gap-4">
              {/* Left: icon circle + garis ke bawah (menyambung ke dot pertama) */}
              <div className="flex flex-col items-center w-7 shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${colors.iconBg}`}
                >
                  <Icon size={26} className={colors.text} />
                </div>
                {/* Garis dari bawah icon ke dot entry pertama */}
                {section.entries.length > 0 && (
                  <div className={`w-0.5 flex-1 mt-0.5 ${colors.line}`} />
                )}
              </div>
              {/* Right: category heading — pb-4 membuat row cukup tinggi agar garis terlihat */}
              <div className="pb-4">
                <h3 className={`text-2xl font-bold ${colors.text} leading-7`}>
                  {section.category}
                </h3>
              </div>
            </div>

            {/* ── ROW 1..N: Entries — dot kiri + konten kanan ── */}
            {/* TIDAK ada margin antara rows ini dan header row di atas,
                sehingga garis dari header langsung bertemu dot pertama */}
            {section.entries.map((entry, eIdx) => {
              const isLast = eIdx === section.entries.length - 1;
              const range =
                typeof entry.range === "string"
                  ? entry.range
                  : `${entry.range[0]} — ${entry.range[1]}`;

              return (
                <div
                  key={`${entry.location}-${entry.title}`}
                  className="flex gap-4"
                >
                  {/* Left: dot + garis ke entry berikutnya (kecuali yang terakhir) */}
                  <div className="flex flex-col items-center w-7 shrink-0">
                    {/* Dot — mt-0 agar tepat tersambung dengan garis dari atas */}
                    <div
                      className={`w-3 h-3 rounded-full shrink-0 mt-1 ${colors.dot}`}
                    />
                    {!isLast && (
                      <div className={`w-0.5 flex-1 mt-1 ${colors.line}`} />
                    )}
                  </div>
                  {/* Right: entry content */}
                  <div className="pb-5 flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-md leading-snug">
                      {entry.location}
                    </h4>
                    <p className="text-sm text-muted mt-0.5">{entry.title}</p>
                    <p className={`text-sm ${colors.text} mt-1`}>{range}</p>
                    {entry.description && (
                      <ul className="mt-2 space-y-1">
                        {entry.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted flex items-start gap-2"
                          >
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`}
                            />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
