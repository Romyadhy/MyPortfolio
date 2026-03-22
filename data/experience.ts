export interface ExperienceEntry {
  location: string;
  title: string;
  range: string | [string, string];
  description?: string[];
}

export interface ExperienceSection {
  category: string;
  color: string;
  icon: string;
  entries: ExperienceEntry[];
}

export const experience: ExperienceSection[] = [
  {
    category: "Education",
    color: "blue",
    icon: "graduation-cap",
    entries: [
      {
        location: "Universitas Pendidikan Ganesha",
        title: "Bachelor of Science, Computer Science",
        range: "Expected 2026",
      },
      {
        location: "SMA Negeri 1 Tapaksiring",
        title: "High School Diploma",
        range: ["Aug 2019", "Jun 2022"],
      },
    ],
  },
  {
    category: "Work",
    color: "violet",
    icon: "briefcase",
    entries: [
      {
        location: "Living Labs FTK X Dago Enginering",
        title: "Researcher in Labs at Universitas Pendidikan Ganesha",
        range: ["Feb 2025", "Present"],
        description: [
          "Developed and maintained IoT for Hydroponics",
          "Collaborated with the team and implement all teach things in real case",
        ],
      },
      {
        location: "RSU Kerta Usada",
        title: "IT Support",
        range: ["Aug 2025", "Des 2025"],
        description: [
          "Build Helpdesk Support System based on website used Laravel",
          "Recorded all the reports in any of fiedls at hospital",
        ],
      },
    ],
  },
];
