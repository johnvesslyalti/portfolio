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
        { slug: 'welcome' }, 
        { slug: 'about' },
        { slug: 'why-backend-engineering' },
        { slug: 'cursor-pagination' },
        { slug: 'designing-follow-systems' },
    ]
}

export const dynamicParams = false