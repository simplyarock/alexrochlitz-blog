import type { Metadata } from "next";

import BlogCard from "../../components/BlogCard";

export const metadata: Metadata = {
  title: "Wisdom (Articles)",
  description: "Sharp, honest takes on therapy, psychology, and survival.",
};

const posts = [
  {
    slug: "axis-of-burnout",
    title: "The Axis of Burnout: How to Actually Calculate Your Stress Levels",
    date: "November 6, 2025",
    excerpt:
      "Burnout is a term that gets thrown around a lot these days. But here's what nobody tells you: burnout isn't just about one thing. It's about everything, all at once.",
    image: "/images/axis-of-burnout.png",
  },
  {
    slug: "how-to-be-happy",
    title: 'How to be "happy"',
    date: "April 24, 2025",
    excerpt:
      "How we end up spending our life usually has little to do with our unique strengths and everything to do with opportunity and survival, just like 10,000 years ago.",
    image: "/images/sad.png",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Wisdom (Articles)</h1>
        <p className="text-lg text-black/80">
          A mix of therapy tools, inconvenient truths, and stuff I&apos;m still
          figuring out in public.
        </p>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
