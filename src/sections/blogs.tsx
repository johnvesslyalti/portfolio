import Link from "next/link";
import { blogs } from "@/data/blogs";


export default function Blogs() {
    const recentBlogs = blogs.slice(0, 3);

    return (
        <section className="rounded-3xl border border-white/10 bg-white/70 p-8 shadow-lg shadow-neutral-200/30 backdrop-blur dark:border-white/5 dark:bg-neutral-950/60 dark:shadow-neutral-950/60">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                        Writing
                    </h2>
                    <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        Notes on backend craft, architecture, and leadership.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {recentBlogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blogs/${blog.slug}`}
                            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/90 p-4 shadow-sm shadow-neutral-200/30 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-neutral-900/60"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                                {blog.date}
                            </span>
                            <h3 className="mt-3 text-lg font-semibold text-neutral-900 transition group-hover:text-neutral-600 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                                {blog.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                {blog.description}
                            </p>
                            <span className="mt-4 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Read more →
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/blogs"
                        className="rounded-full border border-neutral-200 bg-white px-6 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-neutral-950/40 dark:text-neutral-100"
                    >
                        Show More
                    </Link>
                </div>
            </div>
        </section>
    );
}
