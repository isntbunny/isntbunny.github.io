import { defineCollection, z } from "astro:content";

// 1. 定义 memos 集合的结构
const memosCollection = defineCollection({
	type: "content",
	schema: z.object({
		date: z.date().or(z.string()), // 允许日期或字符串
	}),
});

// 2. 导出集合（这步最关键！一定要包含 'memos'）
export const collections = {
	posts: defineCollection({
		/* 你原本 posts 的配置 */
	}),
	memos: memosCollection, // 这里的 key 必须叫 memos
};
