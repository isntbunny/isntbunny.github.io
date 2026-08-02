import { type CollectionEntry, getCollection } from "astro:content";

const PROGRAMMING_CATEGORY = "programming";
const ENGLISH_CATEGORY = "english";
const UNCATEGORIZED_CATEGORY = "uncategorized";
const CATEGORY_ORDER = [ENGLISH_CATEGORY, PROGRAMMING_CATEGORY, UNCATEGORIZED_CATEGORY];
const PROGRAMMING_FOLDER_ALIASES = new Set(["programming", "tech"]);
const ENGLISH_FOLDER_ALIASES = new Set(["english", "english-learning"]);

function getTopLevelFolder(post: CollectionEntry<"post">): string | undefined {
    return post.id.split("/")[0]?.trim().toLowerCase().replace(/-+$/, "");
}

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<"post">[]> {
    return await getCollection("post", ({ data }) => {
        return import.meta.env.PROD ? !data.draft : true;
    });
}

/** 获取文章的分类（从路径中提取，不依赖 frontmatter） */
export function getPostCategory(post: CollectionEntry<"post">): string {
    const folder = getTopLevelFolder(post);

    if (!folder || folder === post.id.trim().toLowerCase()) {
        return UNCATEGORIZED_CATEGORY;
    }

    if (PROGRAMMING_FOLDER_ALIASES.has(folder)) {
        return PROGRAMMING_CATEGORY;
    }

    if (ENGLISH_FOLDER_ALIASES.has(folder)) {
        return ENGLISH_CATEGORY;
    }

    return UNCATEGORIZED_CATEGORY;
}

/** 获取所有分类 */
export async function getAllCategories(): Promise<string[]> {
    const posts = await getAllPosts();
    const categories = new Set(posts.map((post) => getPostCategory(post)));

    return CATEGORY_ORDER.filter((category) => categories.has(category));
}

/** Get tag metadata by tag name */
export async function getTagMeta(_tag: string): Promise<undefined> {
    return undefined;
}

/** groups posts by year using reduce instead of Object.groupBy */
export function groupPostsByYear(posts: CollectionEntry<"post">[]) {
    return posts.reduce<Record<string, CollectionEntry<"post">[]>>((acc, post) => {
        const year = post.data.publishDate.getFullYear().toString();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {});
}

/** returns all tags created from posts (inc duplicate tags) */
export function getAllTags(posts: CollectionEntry<"post">[]) {
    return posts.flatMap((post) => [...((post.data as { tags?: string[] }).tags ?? [])]);
}

/** returns all unique tags created from posts */
export function getUniqueTags(posts: CollectionEntry<"post">[]) {
    return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...] */
export function getUniqueTagsWithCount(posts: CollectionEntry<"post">[]): [string, number][] {
    return [
        ...getAllTags(posts).reduce(
            (acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
            new Map<string, number>(),
        ),
    ].sort((a, b) => b[1] - a[1]);
}
