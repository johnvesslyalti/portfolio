import Link from "next/link";

function formatSlug(slug: string) {
    return slug
        .split("-")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

export default async function BlogPostLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <section className="py-6">
            <div className="max-w-5xl mx-auto px-4">

                {/* Header (same structure as BlogsPage) */}
                <div className="relative mb-6">
                    <Link
                        href="/blogs"
                        className="absolute left-0 top-0 text-2xl hover:opacity-70 transition cursor-pointer"
                    >
                        ←
                    </Link>

                    <h1 className="text-2xl font-semibold text-center">
                        {formatSlug(slug)}
                    </h1>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-700 mb-8" />

                {/* Blog Content (wrapped by parent prose layout) */}
                {children}
            </div>
        </section>
    );
}
