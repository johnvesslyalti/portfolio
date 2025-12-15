import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function BlogSection() {
    const recentBlogs = blogs.slice(0, 3);

    return (
        <section className="border p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
                Blogs
            </h2>

            <div className="mt-6 flex gap-4">
                {recentBlogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className="flex-1 border rounded-lg p-4 hover:bg-neutral-50/5 transition"
                    >
                        {/* Date */}
                        <span className="text-xs text-neutral-500 block mb-1">
                            {blog.date}
                        </span>

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
