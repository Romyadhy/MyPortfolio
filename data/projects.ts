export interface Project {
  name: string;
  description: string;
  image?: string;
  github?: string;
  external?: string;
  tags: string[];
  featured?: boolean;
}

export const tagColors: Record<string, string> = {
  Learning: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Web: "text-lime-400 bg-lime-400/10 border-lime-400/20",
  Mobile: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Bot: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Game: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Other: "text-teal-400 bg-teal-400/10 border-teal-400/20",
};

export const projects: Project[] = [
  {
    name: "Helpdesk IT Support System",
    description:
      "This is my intership project to build a Helpdesk Support System Website using Laravel, tailwindcss and some js libs.",
    github: "https://github.com/Romyadhy/HelpdeskITSupport-System",
    tags: ["Web"],
    featured: true,
  },
  {
    name: "Sonic Game",
    description:
      "Sonic games using javascript, it a sonic run game but builded using kaplay.js and play via website.",
    github: "https://github.com/Romyadhy/SonixGo-GameJS",
    external: "https://sonic-gp.vercel.app/",
    tags: ["Game", "Web"],
    featured: true,
  },
  {
    name: "Brawlhalla Bot",
    description:
      "My explorations project that create control like pro Bot in Brawlhalla games.",
    github: "https://github.com/Romyadhy/Brawlhalla-BOT",
    tags: ["Bot", "Game"],
  },
  {
    name: "Intan Keben Bangli Website",
    description:
      "A landing page website that collaborated whit handicraft sellers in Bali for digital promotion",
    github: "https://github.com/Romyadhy/IntanKebenBangli",
    tags: ["Web"],
  },
  {
    name: "Semut Dry Tech Mobile Apps",
    description:
      "A collaborations mobile apps, that intregrate into esp32 and temperature sensor via firebase.",
    github: "https://github.com/Romyadhy/FlutteR-Firebase-Mobile",
    tags: ["Mobile"],
  },
  {
    name: "OpenGL Learn",
    description: "My learning progress in opengl in order to create a games",
    github: "https://github.com/Romyadhy/LearnOpenGL",
    tags: ["Other", "Learning"],
  },
];
