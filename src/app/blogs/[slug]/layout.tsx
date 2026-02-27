import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { notFound } from "next/navigation";
import { blogs } from "@/features/blogs/data/blogs";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blogIndex = blogs.findIndex((b) => b.slug === slug);
  const blog = blogs[blogIndex];

  if (!blog) {
    notFound();
  }

  const prevBlog = blogIndex > 0 ? blogs[blogIndex - 1] : null;
  const nextBlog =
    blogIndex < blogs.length - 1 ? blogs[blogIndex + 1] : null;

  return (
    <section className="py-6">
      <div className="max-w-2xl mx-auto px-4">

        {/* Header */}
        <div className="relative mb-8">
          <Link
            href="/blogs"
            className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2 text-2xl hover:opacity-70 transition"
          >
            <IoIosArrowBack />
          </Link>

          <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl py-3 px-4">
            <h1 className="text-xl md:text-2xl font-semibold text-center">
              {blog.title}
            </h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
              {blog.date} • {blog.readingTime}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        {children}

        {/* Previous / Next */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevBlog ? (
            <Link
              href={`/blogs/${prevBlog.slug}`}
              className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
            >
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">← Previous</p>
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {prevBlog.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog ? (
            <Link
              href={`/blogs/${nextBlog.slug}`}
              className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition text-right"
            >
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">Next →</p>
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {nextBlog.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </section>
  );
}
