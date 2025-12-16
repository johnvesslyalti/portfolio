"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
    const router = useRouter();

    return (
        <section className="py-6">
            <div className="max-w-5xl mx-auto px-4">

                {/* Header */}
                <div className="relative mb-6">
                    <button
                        onClick={() => router.push("/")}
                        className="absolute left-0 top-0 text-2xl hover:opacity-70 transition cursor-pointer"
                    >
                        ←
                    </button>

                    <h2 className="text-2xl font-semibold text-center">
                        Blogs
                    </h2>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-700 mb-8" />

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blogs/${blog.slug}`}
                            className="
                border border-neutral-700 rounded-xl
                p-5
                hover:bg-neutral-900/40 transition
              "
                        >
                            <span className="text-xs text-neutral-400 block mb-2">
                                {blog.date}
                            </span>

                            <h3 className="text-lg font-semibold mb-3 leading-snug">
                                {blog.title}
                            </h3>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                {blog.description}
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
