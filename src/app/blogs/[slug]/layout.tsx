import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

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

          <div className="border border-neutral-700 rounded-xl py-3 px-4">
            <h1 className="text-2xl font-semibold text-center">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        {children}

        {/* Footer */}
        <div className="mt-12">
          <div className="border border-neutral-700 rounded-xl px-4 py-3 flex items-center justify-between text-sm text-neutral-400">
            <span>{blog.date}</span>
            <span>
              Author · <span className="text-neutral-200">Johnvessly Alti</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
