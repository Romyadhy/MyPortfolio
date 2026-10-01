import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/data/blogs";
import {
  SectionWrapper,
  StaggerChildren,
  StaggerItem,
} from "@/components/section-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and case studies that already published.",
};

// ponytail: renders static blog array with existing stagger animations, zero extra state or fetch hooks
export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-12 sm:pb-20">
      <SectionWrapper>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog</h1>
        <p className="text-muted text-base sm:text-lg mb-8">
          Articles, workflow customizations, and case studies that already published.
        </p>
      </SectionWrapper>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <StaggerItem key={post.url}>
            <BlogCard post={post} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
