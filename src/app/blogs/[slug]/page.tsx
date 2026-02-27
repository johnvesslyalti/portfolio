export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post } = await import(`@/features/blogs/content/${slug}.mdx`)

    return <Post />
}

import { blogs } from "@/features/blogs/data/blogs";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export const dynamicParams = false
