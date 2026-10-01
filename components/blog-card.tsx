import { ExternalLink, BookOpen, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

// ponytail: direct native anchor links for external posts; avoids router wrapping and complex metadata scraping
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-surface border border-border rounded-xl overflow-hidden card-glow flex flex-col h-full transition-all duration-300 hover:border-accent/40">
      {/* Top gradient highlight */}
      <div className="h-2 bg-gradient-to-r from-accent to-accent-light" />

      <div className="p-6 flex flex-col flex-1">
        {/* Meta badges: Platform, Read time, Date */}
        <div className="flex items-center justify-between text-xs text-muted mb-3">
          <span className="inline-flex items-center gap-1 font-medium text-accent-light bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
            <BookOpen size={12} />
            {post.platform}
          </span>
          <div className="flex items-center gap-3">
            {post.readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            )}
            <span>{post.date}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-foreground text-lg mb-3 group-hover:text-accent-light transition-colors leading-snug">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none"
          >
            {post.title}
          </a>
        </h2>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed flex-1 min-h-[60px] mb-5">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full border border-border bg-surface-light text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Article Link */}
        <div className="mt-auto pt-4 border-t border-border">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors group/link"
          >
            <span>Read on Medium</span>
            <ExternalLink
              size={14}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
