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
                <div className="relative mb-6">
                    <Link
                        href="/blogs"
                        className="absolute left-0 top-0 text-2xl hover:opacity-70 transition cursor-pointer"
                    >
                        <IoIosArrowBack />
                    </Link>

                    <h1 className="text-2xl font-semibold text-center">
                        {blog.title}
                    </h1>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-700 mb-8" />

                {/* Blog Content */}
                {children}

                {/* Footer */}
                <div className="mt-12 pt-4 border-t border-neutral-700 flex items-center justify-between text-sm text-neutral-400">
                    <span>{blog.date}</span>
                    <span>
                        Author - <span className="text-neutral-200">Johnvessly Alti</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
