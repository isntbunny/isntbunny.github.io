import { type CollectionEntry, getCollection } from 'astro:content'

const UNCATEGORIZED_CATEGORY = 'uncategorized'

// 别名映射（可选，如果想合并某些文件夹）
const CATEGORY_ALIASES: Record<string, string> = {
    tech: 'programming',
    'english-learning': 'english',
    life: 'dailylife',
    daily: 'dailylife',
}

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<'post'>[]> {
    return await getCollection('post', ({ data }) => {
        return import.meta.env.PROD ? !data.draft : true
    })
}

function getTopLevelFolder(post: CollectionEntry<'post'>): string | undefined {
    return post.id.split('/')[0]?.trim().toLowerCase().replace(/-+$/, '')
}

/** 获取文章的分类（从路径中提取，不依赖 frontmatter） */
export function getPostCategory(post: CollectionEntry<'post'>): string {
    const folder = getTopLevelFolder(post)

    if (!folder || folder === post.id.trim().toLowerCase()) {
        return UNCATEGORIZED_CATEGORY
    }

    // 如果有别名映射，使用映射后的分类
    if (CATEGORY_ALIASES[folder]) {
        return CATEGORY_ALIASES[folder]
    }

    return folder // 👈 直接返回文件夹名作为分类
}

/** 获取所有分类 - 自动从文章路径中读取 */
export async function getAllCategories(): Promise<string[]> {
    const posts = await getAllPosts()
    const categories = new Set<string>()

    posts.forEach((post) => {
        const category = getPostCategory(post)
        categories.add(category)
    })

    // 转成数组并排序（可选）
    return Array.from(categories).sort((a, b) => {
        // 把 uncategorized 放最后
        if (a === UNCATEGORIZED_CATEGORY) return 1
        if (b === UNCATEGORIZED_CATEGORY) return -1
        return a.localeCompare(b)
    })
}

/** Get tag metadata by tag name */
export async function getTagMeta(_tag: string): Promise<undefined> {
    return undefined
}

/** groups posts by year using reduce instead of Object.groupBy */
export function groupPostsByYear(posts: CollectionEntry<'post'>[]) {
    return posts.reduce<Record<string, CollectionEntry<'post'>[]>>((acc, post) => {
        const year = post.data.publishDate.getFullYear().toString()
        if (!acc[year]) {
            acc[year] = []
        }
        acc[year].push(post)
        return acc
    }, {})
}

/** returns all tags created from posts (inc duplicate tags) */
export function getAllTags(posts: CollectionEntry<'post'>[]) {
    return posts.flatMap((post) => [...((post.data as { tags?: string[] }).tags ?? [])])
}

/** returns all unique tags created from posts */
export function getUniqueTags(posts: CollectionEntry<'post'>[]) {
    return [...new Set(getAllTags(posts))]
}

/** returns a count of each unique tag - [[tagName, count], ...] */
export function getUniqueTagsWithCount(posts: CollectionEntry<'post'>[]): [string, number][] {
    return [
        ...getAllTags(posts).reduce(
            (acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
            new Map<string, number>()
        ),
    ].sort((a, b) => b[1] - a[1])
}
