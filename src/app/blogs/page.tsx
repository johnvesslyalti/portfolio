"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogs } from "@/data/blogs";
import { IoIosArrowBack } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";

export default function BlogsPage() {
  const router = useRouter();

  return (
    <section className="py-6">
      <div className="max-w-2xl mx-auto px-4">

        {/* Header */}
        <div className="relative mb-8">
          <button
            onClick={() => router.push("/")}
            className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 text-2xl hover:opacity-70 transition cursor-pointer"
          >
            <IoIosArrowBack />
          </button>

          <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl py-3 text-center">
            <h2 className="text-2xl font-semibold">
              Blogs
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 flex items-center justify-center gap-1.5">
              <LuCalendar className="w-3 h-3" /> Every Sunday, One New Blog
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="
                border border-neutral-200 dark:border-neutral-700 rounded-xl
                p-5
                hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition
              "
            >
              <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-2">
                {blog.date}
              </span>

              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {blog.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
