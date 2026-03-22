import { Mail, Linkedin, Github, FileText } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  size?: number;
}

const socials = [
  {
    label: "Resume",
    icon: FileText,
    href: "/resume.pdf",
    highlight: true,
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:romyadhy221@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/i-putu-romyadhy-mahaputra-6b0b48324/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/Romyadhy",
  },
];

export function SocialLinks({ className = "", size = 20 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.label}
          className={`
            p-2 rounded-lg transition-all duration-200
            ${
              social.highlight
                ? "text-accent-light !text-foreground hover:text-accent border border-accent/30 hover:border-accent hover:bg-accent/10"
                : "text-muted !text-foreground hover:text-foreground hover:bg-surface-hover"
            }
          `}
        >
          <social.icon size={size} />
        </a>
      ))}
    </div>
  );
}
