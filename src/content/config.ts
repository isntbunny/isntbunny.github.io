import { defineCollection, z } from "astro:content";

// 1. 定义说说集合
const memos = defineCollection({
	type: "content",
	schema: z.object({
		date: z.date().or(z.string()),
	}),
});

// 2. 这里不要管 posts 了，先把 memos 跑通
// 如果你还有其他集合（比如 posts），必须确保它们的定义也是完全正确的
export const collections = {
	memos: memos,
};
