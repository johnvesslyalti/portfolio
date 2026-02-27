"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { blogs } from "@/features/blogs/data/blogs";
import { IoIosArrowBack } from "react-icons/io";
import { LuCalendar } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function BlogsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const paginatedBlogs = blogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (newPage: number) => {
    router.push(`/blogs?page=${newPage}`);
  };

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

          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {paginatedBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="
                border border-neutral-200 dark:border-neutral-700 rounded-xl
                p-5
                hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition
                flex flex-col
              "
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {blog.date} • {blog.readingTime}
                </span>

              </div>

              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {blog.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}

export default function BlogsPage() {
  return (
    <Suspense>
      <BlogsContent />
    </Suspense>
  );
}
