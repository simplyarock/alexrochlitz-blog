import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  image,
}: BlogCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm">
      {image ? (
        <Link href={`/blog/${slug}`} className="block">
          <Image
            src={image}
            alt={title}
            width={900}
            height={540}
            className="h-48 w-full rounded-xl object-cover sm:h-40"
          />
        </Link>
      ) : null}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">
          <Link href={`/blog/${slug}`} className="hover:text-black/70">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-black/60">{date}</p>
        <p className="text-base text-black/80">{excerpt}</p>
      </div>
    </article>
  );
}
