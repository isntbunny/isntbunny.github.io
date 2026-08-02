import { type CollectionEntry, getCollection } from 'astro:content'

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<'post'>[]> {
  return await getCollection('post', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true
  })
}

/** 获取文章的分类（从路径中提取） */
export function getPostCategory(post: CollectionEntry<'post'>): string {
  const pathParts = post.id.split('/')
  if (pathParts.length > 1) {
    return pathParts[0]
  }
  return 'uncategorized'
}

/** 获取所有分类 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const categories = posts.map((post) => getPostCategory(post))
  return [...new Set(categories)]
}

/** Get tag metadata by tag name */
export async function getTagMeta(tag: string): Promise<CollectionEntry<'tag'> | undefined> {
  const tagEntries = await getCollection('tag', (entry) => {
    return entry.id === tag
  })
  return tagEntries[0]
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
  return posts.flatMap((post) => [...post.data.tags])
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
