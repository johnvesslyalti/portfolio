import Link from "next/link";
import { blogs } from "@/features/blogs/data/blogs";


export default function Blogs() {
    const recentBlogs = blogs.slice(0, 3);

    return (
        <section className="border p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
                Writing
            </h2>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
                I write about backend architecture, system design, and the future of software engineering.
            </p>

            {/* Cards */}
            <div className="mt-6 flex flex-col gap-4 md:flex-row">
                {recentBlogs.map((blog, index) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className="border rounded-lg p-4 hover:bg-neutral-50/5 transition md:flex-1 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-neutral-500">
                                {blog.date}
                            </span>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 leading-snug">
                            {blog.title}
                        </h3>

                        <p className="text-base text-neutral-400 leading-relaxed">
                            {blog.description}
                        </p>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <Link
                    href="/blogs"
                    className="px-6 py-2 border rounded-md text-sm font-medium hover:bg-neutral-50/5 transition"
                >
                    Show More
                </Link>
            </div>
        </section>
    );
}
