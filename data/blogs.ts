export interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  readTime?: string;
  tags: string[];
  platform: "Medium";
}

export const blogPosts: BlogPost[] = [
  {
    title:
      "Building a Fully Customized LazyVim Dashboard and Dracula Glass Colorscheme",
    description:
      "A hands-on guide to customizing the LazyVim startup screen with custom ASCII art, centered menus, dynamic startup time footer, and crafting a transparent Dracula Glass theme in Lua.",
    url: "https://medium.com/@romyady221/building-a-fully-customized-lazyvim-dashboard-and-dracula-glass-colorscheme-9b87702f5ae8",
    date: "2025",
    readTime: "4 min read",
    tags: ["Neovim", "LazyVim", "Lua", "Workflow"],
    platform: "Medium",
  },
  {
    title:
      "Membangun Sistem Helpdesk IT Saat Magang: Solusi Digital Untuk Alur Kerja Tim IT Rumah Sakit",
    description:
      "Studi kasus pengalaman magang di RSU Kertha Usada Singaraja merancang dan membangun sistem helpdesk tiket berbasis web untuk menertibkan pencatatan dan eskalasi penanganan masalah IT.",
    url: "https://medium.com/@romyady221/membangun-sistem-helpdesk-it-saat-magang-solusi-digital-untuk-alur-kerja-tim-it-rumah-sakit-016881626d6f",
    date: "2025",
    readTime: "5 min read",
    tags: ["Case Study", "Helpdesk", "Laravel", "Internship"],
    platform: "Medium",
  },
  {
    title:
      "Why I Switched to Neovide for My Daily Neovim Workflow",
    description:
      "I’ve been using Neovim as my main editor for quite some time. My usual setup was simple: Neovim running inside WezTerm. It worked. I had my LSPs, completion, Treesitter, Git integration, plugins, and everything else I needed for development. But there was one thing that kept bothering me.",
    url: "https://medium.com/@romyady221/why-i-switched-to-neovide-for-my-daily-neovim-workflow-2a6cd743f97c?postPublishedType=initial",
    date: "2026",
    readTime: "7 min read",
    tags: ["Neovim", "Config", "Text Editor", "Neovide"],
    platform: "Medium",
  },
];
