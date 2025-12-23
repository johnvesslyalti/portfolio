export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post } = await import(`@/content/${slug}.mdx`)

    return <Post />
}

export function generateStaticParams() {
    return [
        { slug: 'thinking-in-systems' },
        { slug: 'cursor-pagination' },
        { slug: 'designing-follow-systems' },
        { slug: "chatgpt-developer-growth-2025" }
    ]
}

export const dynamicParams = false