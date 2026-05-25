import Link from "next/link";
import { blogs } from "@/features/blogs/data/blogs";


export default function Blogs() {
    const recentBlogs = blogs.slice(0, 3);

    return (
        <section className="rounded-2xl p-5
                            bg-white/10 dark:bg-white/5
                            backdrop-blur-2xl
                            border border-white/30 dark:border-white/10
                            shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
            <h2 className="text-xl font-semibold mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                Blogs
            </h2>

            <div className="mt-4 flex flex-col gap-3 md:flex-row">
                {recentBlogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className="group flex flex-col p-4 rounded-xl md:flex-1
                                   bg-white/10 dark:bg-white/5
                                   border border-white/20 dark:border-white/8
                                   hover:border-white/40 dark:hover:border-white/20
                                   hover:bg-white/15 dark:hover:bg-white/10
                                   hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)]
                                   transition-all duration-200"
                    >
                        <span className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">
                            {blog.date}
                        </span>

                        <h3 className="text-base font-semibold mb-2 leading-snug group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                            {blog.title}
                        </h3>

                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                            {blog.description}
                        </p>

                        <span className="mt-3 text-xs text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                            Read more →
                        </span>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-5">
                <Link
                    href="/blogs"
                    className="px-6 py-2 rounded-xl text-sm font-medium
                               bg-white/10 dark:bg-white/5
                               border border-white/20 dark:border-white/10
                               hover:bg-white/20 dark:hover:bg-white/10
                               backdrop-blur-sm transition"
                >
                    Show More
                </Link>
            </div>
        </section>
    );
}
